import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  actorName,
  checkToLog,
  derive,
  formatHour,
  MEDS,
  nextOpenMed,
  SEED_LOG,
  SEED_NOTES,
  type LogItem,
  type Note,
  type Role,
  type Section,
  type Slice,
} from "@/lib/care";

export type LastAction = { kind: "ok" | "med" | "help" | "note"; text: string } | null;

type Data = Slice & {
  role: Role;
  section: Section;
  notes: Note[];
  log: LogItem[];
  lastAction: LastAction;
};

type Actions = {
  setRole: (role: Role) => void;
  setSection: (section: Section) => void;
  setHour: (hour: number) => void;
  setMed: (id: string, taken: boolean) => void;
  setCheck: (id: string, done: boolean) => void;
  ack: (id: string) => void;
  imOk: () => void;
  takeNext: () => void;
  askHelp: () => void;
  sendNote: (body: string) => void;
  resetTuesday: () => void;
};

export type CareState = Data & Actions;

let seq = 0;
function nid(prefix: string) {
  seq += 1;
  return `${prefix}-${Date.now().toString(36)}-${seq}`;
}

export const initialData = (): Data => ({
  role: "family",
  section: "today",
  hour: 15,
  medOverrides: {},
  checkOverrides: {},
  acked: [],
  helpRequested: false,
  notes: SEED_NOTES.map((note) => ({ ...note })),
  log: SEED_LOG.map((item) => ({ ...item })),
  lastAction: null,
});

function sliceOf(data: Data): Slice {
  return {
    hour: data.hour,
    medOverrides: data.medOverrides,
    checkOverrides: data.checkOverrides,
    acked: data.acked,
    helpRequested: data.helpRequested,
  };
}

function pushLog(data: Data, actor: string, text: string): LogItem[] {
  return [{ id: nid("log"), actor, text, timeLabel: formatHour(data.hour) }, ...data.log].slice(0, 40);
}

export const useCare = create<CareState>()(
  persist(
    (set) => ({
      ...initialData(),
      setRole: (role) => set({ role }),
      setSection: (section) => set({ section }),
      setHour: (hour) => set({ hour }),
      setMed: (id, taken) =>
        set((state) => {
          const med = MEDS.find((item) => item.id === id);
          const label = med ? `${med.name} ${med.dose}` : "a dose";
          return {
            medOverrides: { ...state.medOverrides, [id]: taken },
            log: pushLog(state, actorName(state.role), `${taken ? "Signed" : "Cleared"} ${label}.`),
          };
        }),
      setCheck: (id, done) =>
        set((state) => ({
          checkOverrides: { ...state.checkOverrides, [id]: done },
          log: pushLog(state, actorName(state.role), `${done ? "Logged" : "Cleared"} the ${id} check-in.`),
        })),
      ack: (id) =>
        set((state) => ({
          acked: state.acked.includes(id) ? state.acked : [...state.acked, id],
          helpRequested: id === "help" ? false : state.helpRequested,
          log: pushLog(state, actorName(state.role), `Acknowledged “${id}”.`),
        })),
      imOk: () =>
        set((state) => {
          const home = derive(sliceOf(state));
          const target = checkToLog(home.checks);
          if (!target) {
            return { lastAction: { kind: "ok", text: "You're between windows. Nothing to send." } };
          }
          const note: Note = {
            id: nid("note"),
            from: "Eleanor Hart",
            speaker: "senior",
            audience: "circle",
            body: "I'm okay.",
            timeLabel: formatHour(state.hour),
          };
          return {
            checkOverrides: { ...state.checkOverrides, [target.id]: true },
            notes: [note, ...state.notes].slice(0, 40),
            log: pushLog(state, "Eleanor Hart", `${target.name} check-in: I'm okay.`),
            lastAction: {
              kind: "ok",
              text: `${target.name} check-in sent. Maya, Priya, and Dr. Okonkwo can see it.`,
            },
          };
        }),
      takeNext: () =>
        set((state) => {
          const home = derive(sliceOf(state));
          const med = nextOpenMed(home.meds);
          if (!med) {
            return { lastAction: { kind: "med", text: "Every dose on today's list is signed." } };
          }
          return {
            medOverrides: { ...state.medOverrides, [med.id]: true },
            log: pushLog(state, actorName(state.role), `Signed ${med.name} ${med.dose}.`),
            lastAction: { kind: "med", text: `${med.name} ${med.dose} is signed.` },
          };
        }),
      askHelp: () =>
        set((state) => {
          if (state.helpRequested && !state.acked.includes("help")) {
            return { lastAction: { kind: "help", text: "Maya already has this. You don't need to press it again." } };
          }
          const note: Note = {
            id: nid("note"),
            from: "Eleanor Hart",
            speaker: "senior",
            audience: "circle",
            body: "I need a hand. Not an emergency — please call.",
            timeLabel: formatHour(state.hour),
          };
          return {
            helpRequested: true,
            acked: state.acked.filter((id) => id !== "help"),
            notes: [note, ...state.notes].slice(0, 40),
            log: pushLog(state, "Eleanor Hart", "Asked for a hand. Not flagged as an emergency."),
            lastAction: {
              kind: "help",
              text: "Sent to Maya. If this is an emergency, call 911 — Havenlink is not a monitoring service.",
            },
          };
        }),
      sendNote: (body) =>
        set((state) => {
          const text = body.trim();
          if (!text) return {};
          const clinical = state.role === "clinician";
          const note: Note = {
            id: nid("note"),
            from: actorName(state.role),
            speaker: state.role,
            audience: clinical ? "clinical" : "circle",
            body: text.slice(0, 280),
            timeLabel: formatHour(state.hour),
          };
          return {
            notes: [note, ...state.notes].slice(0, 40),
            log: pushLog(state, note.from, clinical ? "Added a clinical note." : "Wrote on the family thread."),
            lastAction: {
              kind: "note",
              text: clinical ? "Clinical note saved. Maya's thread does not show it." : "On the family thread.",
            },
          };
        }),
      resetTuesday: () => set(initialData()),
    }),
    {
      name: "havenlink-tuesday-v1",
      skipHydration: true,
      partialize: (state) => ({
        role: state.role,
        section: state.section,
        hour: state.hour,
        medOverrides: state.medOverrides,
        checkOverrides: state.checkOverrides,
        acked: state.acked,
        helpRequested: state.helpRequested,
        notes: state.notes,
        log: state.log,
        lastAction: state.lastAction,
      }),
    },
  ),
);
