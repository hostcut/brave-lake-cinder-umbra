export type Role = "family" | "clinician" | "senior";
export type Section =
  | "today"
  | "meds"
  | "vitals"
  | "checkins"
  | "alerts"
  | "messages"
  | "team";
export type Speaker = Role | "aide" | "system";
export type Audience = "circle" | "clinical";

export type Note = {
  id: string;
  from: string;
  speaker: Speaker;
  audience: Audience;
  body: string;
  timeLabel: string;
};

export type LogItem = {
  id: string;
  actor: string;
  text: string;
  timeLabel: string;
};

export type MedState = "taken" | "due" | "late" | "later";
export type CheckState = "done" | "upcoming" | "due" | "missed";

export type MedView = {
  id: string;
  name: string;
  dose: string;
  hour: number;
  note: string;
  state: MedState;
};

export type CheckView = {
  id: string;
  name: string;
  opens: number;
  closes: number;
  prompt: string;
  state: CheckState;
};

export type AlertView = {
  id: string;
  tone: "watch" | "needs";
  title: string;
  detail: string;
};

export type Household = {
  tone: "settled" | "watch" | "needs";
  title: string;
  lede: string;
  meds: MedView[];
  checks: CheckView[];
  alerts: AlertView[];
  signed: number;
  scheduled: number;
};

export type Slice = {
  hour: number;
  medOverrides: Record<string, boolean>;
  checkOverrides: Record<string, boolean>;
  acked: string[];
  helpRequested: boolean;
};

const MORNING = new Set(["lisinopril", "metformin-am", "vitd"]);

export const MEDS = [
  {
    id: "lisinopril",
    name: "Lisinopril",
    dose: "10 mg",
    hour: 7,
    note: "Blood pressure. With water, before breakfast.",
  },
  {
    id: "metformin-am",
    name: "Metformin",
    dose: "500 mg",
    hour: 8,
    note: "With breakfast.",
  },
  {
    id: "vitd",
    name: "Vitamin D3",
    dose: "2,000 IU",
    hour: 8,
    note: "With the morning meal.",
  },
  {
    id: "metformin-pm",
    name: "Metformin",
    dose: "500 mg",
    hour: 18,
    note: "With dinner.",
  },
  {
    id: "aspirin",
    name: "Aspirin",
    dose: "81 mg",
    hour: 20,
    note: "Enteric coated. Not on an empty stomach.",
  },
] as const;

export const CHECKS = [
  { id: "morning", name: "Morning", opens: 7, closes: 10, prompt: "How did the night go?" },
  { id: "midday", name: "Midday", opens: 11, closes: 14, prompt: "A plain I'm okay is enough." },
  { id: "afternoon", name: "Afternoon", opens: 15, closes: 18, prompt: "Before dinner, so the evening stays boring." },
  { id: "evening", name: "Evening", opens: 19, closes: 21, prompt: "So Maya can sleep." },
] as const;

export const VITALS = [
  { day: "Oct 27", sys: 128, dia: 76, pulse: 68 },
  { day: "Oct 28", sys: 132, dia: 78, pulse: 71 },
  { day: "Oct 29", sys: 127, dia: 74, pulse: 66 },
  { day: "Oct 30", sys: 133, dia: 80, pulse: 72 },
  { day: "Oct 31", sys: 129, dia: 77, pulse: 69 },
  { day: "Nov 1", sys: 131, dia: 79, pulse: 70 },
  { day: "Nov 2", sys: 130, dia: 76, pulse: 68 },
  { day: "Today", sys: 148, dia: 82, pulse: 74 },
] as const;

export const TEAM = [
  {
    id: "eleanor",
    name: "Eleanor Hart",
    role: "Aging at home",
    place: "Laurelhurst, Portland",
    photo: "/photos/eleanor.jpg",
    blurb: "82. Independent. The garden, the radio, and a firm opinion about soup.",
  },
  {
    id: "maya",
    name: "Maya Hart",
    role: "Daughter · family lead",
    place: "22 minutes across town",
    photo: "/photos/maya.jpg",
    blurb: "Sees whether her mother is settled. Not the chart, not the audit.",
  },
  {
    id: "priya",
    name: "Priya Shah",
    role: "Home health aide",
    place: "Tue · Thu · Sat mornings",
    photo: "/photos/priya.jpg",
    blurb: "Signs the morning doses, walks to the mailbox, writes the note people actually read.",
  },
  {
    id: "amara",
    name: "Dr. Amara Okonkwo",
    role: "Primary care",
    place: "Laurelwood Clinic",
    photo: "/photos/amara.jpg",
    blurb: "Sees thresholds, the record, and who changed it. Thursday is the next visit.",
  },
] as const;

export const ROLES: { id: Role; label: string; line: string }[] = [
  { id: "family", label: "Family", line: "You are Maya. Reassurance, not the chart." },
  { id: "clinician", label: "Clinician", line: "You are Dr. Okonkwo. The record, and who touched it." },
  { id: "senior", label: "Senior", line: "You are Eleanor. Three buttons. That is the whole app." },
];

export const LANES = [
  { id: "status", label: "How she is" },
  { id: "checkins", label: "Check-ins" },
  { id: "meds", label: "Medications" },
  { id: "vitals", label: "Vitals trend" },
  { id: "circle", label: "Family notes" },
  { id: "clinical", label: "Clinical notes" },
  { id: "audit", label: "Audit log" },
] as const;

export type LaneId = (typeof LANES)[number]["id"];
export type Grant = "open" | "summary" | "closed";

export const ACCESS: Record<Role | "aide", Record<LaneId, Grant>> = {
  family: {
    status: "open",
    checkins: "open",
    meds: "summary",
    vitals: "summary",
    circle: "open",
    clinical: "closed",
    audit: "closed",
  },
  clinician: {
    status: "open",
    checkins: "open",
    meds: "open",
    vitals: "open",
    circle: "summary",
    clinical: "open",
    audit: "open",
  },
  senior: {
    status: "open",
    checkins: "open",
    meds: "summary",
    vitals: "closed",
    circle: "summary",
    clinical: "closed",
    audit: "closed",
  },
  aide: {
    status: "open",
    checkins: "open",
    meds: "open",
    vitals: "summary",
    circle: "closed",
    clinical: "closed",
    audit: "closed",
  },
};

export const GRANT_LABEL: Record<Grant, string> = {
  open: "Open",
  summary: "Summary",
  closed: "Hidden",
};

export const SEED_NOTES: Note[] = [
  {
    id: "n-maya",
    from: "Maya Hart",
    speaker: "family",
    audience: "circle",
    body: "On the 4:40. I'll call when I'm off the train — no need to pick up.",
    timeLabel: "1:15pm",
  },
  {
    id: "n-priya",
    from: "Priya Shah",
    speaker: "aide",
    audience: "circle",
    body: "Bright this morning. Oatmeal, half a walk to the mailbox, no dizziness. Left the afternoon window for Eleanor.",
    timeLabel: "11:40am",
  },
];

export const SEED_LOG: LogItem[] = [
  {
    id: "l-flag",
    actor: "Havenlink",
    text: "Flagged systolic 148 against Eleanor's two-week line of 130.",
    timeLabel: "8:22am",
  },
  {
    id: "l-check",
    actor: "Eleanor Hart",
    text: "Midday check-in: I'm okay.",
    timeLabel: "12:06pm",
  },
  {
    id: "l-meds",
    actor: "Priya Shah",
    text: "Signed Lisinopril 10 mg, morning Metformin, and vitamin D.",
    timeLabel: "8:04am",
  },
];

export function formatHour(hour: number) {
  const suffix = hour >= 12 ? "pm" : "am";
  const h = hour % 12 || 12;
  return `${h}:00${suffix}`;
}

export function formatClock(hour: number) {
  const suffix = hour >= 12 ? "pm" : "am";
  const h = hour % 12 || 12;
  return `${h}${suffix}`;
}

export function greeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function actorName(role: Role) {
  if (role === "senior") return "Eleanor Hart";
  if (role === "clinician") return "Dr. Amara Okonkwo";
  return "Maya Hart";
}

export function pressureLine() {
  const today = VITALS[VITALS.length - 1];
  const prior = VITALS.slice(0, -1);
  const avg = Math.round(prior.reduce((sum, row) => sum + row.sys, 0) / prior.length);
  return { today, avg, delta: today.sys - avg };
}

export function isTaken(id: string, hour: number, overrides: Record<string, boolean>) {
  if (Object.prototype.hasOwnProperty.call(overrides, id)) return overrides[id];
  return MORNING.has(id) && hour >= 9;
}

export function isCheckDone(id: string, hour: number, overrides: Record<string, boolean>) {
  if (Object.prototype.hasOwnProperty.call(overrides, id)) return overrides[id];
  if (id === "morning") return hour >= 8;
  if (id === "midday") return hour >= 12;
  return false;
}

function medState(id: string, hour: number, dueHour: number, overrides: Record<string, boolean>): MedState {
  if (isTaken(id, hour, overrides)) return "taken";
  if (hour < dueHour) return "later";
  if (hour < dueHour + 2) return "due";
  return "late";
}

function checkStateOf(
  check: (typeof CHECKS)[number],
  hour: number,
  overrides: Record<string, boolean>,
): CheckState {
  if (isCheckDone(check.id, hour, overrides)) return "done";
  if (hour < check.opens) return "upcoming";
  if (hour <= check.closes) return "due";
  return "missed";
}

export function derive(input: Slice): Household {
  const meds: MedView[] = MEDS.map((med) => ({
    id: med.id,
    name: med.name,
    dose: med.dose,
    hour: med.hour,
    note: med.note,
    state: medState(med.id, input.hour, med.hour, input.medOverrides),
  }));

  const checks: CheckView[] = CHECKS.map((check) => ({
    ...check,
    state: checkStateOf(check, input.hour, input.checkOverrides),
  }));

  const alerts: AlertView[] = [];
  if (input.helpRequested && !input.acked.includes("help")) {
    alerts.push({
      id: "help",
      tone: "needs",
      title: "Eleanor asked for a hand",
      detail:
        "She pressed the button on her screen. She is not reporting an emergency — she wants a person. Maya is first.",
    });
  }
  for (const check of checks) {
    if (check.state === "missed" && !input.acked.includes(`miss-${check.id}`)) {
      alerts.push({
        id: `miss-${check.id}`,
        tone: "watch",
        title: `${check.name} check-in never arrived`,
        detail: `The ${formatClock(check.opens)}–${formatClock(check.closes)} window closed with no tap from Eleanor or Priya.`,
      });
    }
  }
  for (const med of meds) {
    if (med.state === "late" && !input.acked.includes(`late-${med.id}`)) {
      alerts.push({
        id: `late-${med.id}`,
        tone: "watch",
        title: `${med.name} is still open`,
        detail: `${med.dose} was due at ${formatHour(med.hour)}. It can still be signed.`,
      });
    }
  }
  if (input.hour >= 8 && !input.acked.includes("bp")) {
    const { avg, delta, today } = pressureLine();
    alerts.push({
      id: "bp",
      tone: "watch",
      title: "Morning pressure sat above her line",
      detail: `Systolic was ${today.sys}, ${delta} above Eleanor's two-week line of ${avg}. Pulse held at ${today.pulse}. Not an emergency — worth a glance before Thursday.`,
    });
  }

  const urgent = alerts.filter((alert) => alert.id !== "bp");
  const help = urgent.some((alert) => alert.id === "help");
  const due = checks.find((check) => check.state === "due");
  const { avg, delta } = pressureLine();

  let tone: Household["tone"] = "settled";
  let title = "Eleanor is settled.";
  let lede = due
    ? `${due.name} check-in is open whenever she is ready.`
    : quietLede(input.hour);

  if (help) {
    tone = "needs";
    title = "Eleanor asked for a hand.";
    lede = "Not an emergency. She wants a person, and the circle can see it now.";
  } else if (urgent.length > 0) {
    tone = "watch";
    title = urgent[0].title;
    lede = urgent[0].detail;
  } else if (alerts.some((alert) => alert.id === "bp")) {
    lede = `Morning pressure was ${delta} above her line of ${avg}. ${due ? `${due.name} check-in is still open.` : "The rest of the day is quiet."}`;
  }

  const happened = meds.filter((med) => input.hour >= med.hour);
  const signed = happened.filter((med) => med.state === "taken").length;

  return {
    tone,
    title,
    lede,
    meds,
    checks,
    alerts,
    signed,
    scheduled: happened.length,
  };
}

function quietLede(hour: number) {
  if (hour < 9) return "Morning is just opening. Priya is due at 9.";
  if (hour < 13) return "Priya has the morning. The house knows its routine.";
  if (hour < 15) return "Midday is in. Nothing is asking for you.";
  if (hour < 18) return "The afternoon is open and otherwise quiet.";
  return "Evening doses are the last thing on today's list.";
}

export type Beat = {
  hour: number;
  title: string;
  detail: string;
  phase: "past" | "now" | "ahead";
};

export function dayBeats(hour: number, home: Household): Beat[] {
  const med = (id: string) => home.meds.find((item) => item.id === id);
  const check = (id: string) => home.checks.find((item) => item.id === id);
  const medLine = (id: string) => {
    const item = med(id);
    if (!item) return "";
    if (item.state === "taken") return "Signed.";
    if (item.state === "due") return "Due now.";
    if (item.state === "late") return "Still open.";
    return `Due at ${formatHour(item.hour)}.`;
  };
  const checkLine = (id: string) => {
    const item = check(id);
    if (!item) return "";
    if (item.state === "done") return "In.";
    if (item.state === "due") return "Window is open.";
    if (item.state === "missed") return "Window closed empty.";
    return "Not yet.";
  };

  const raw = [
    { hour: 7, title: "Lisinopril", detail: medLine("lisinopril") },
    { hour: 8, title: "Breakfast doses", detail: `${medLine("metformin-am")} ${medLine("vitd")}` },
    {
      hour: 9,
      title: "Priya arrives",
      detail: hour >= 9 ? "Oatmeal, then the mailbox." : "On her way to Laurelhurst.",
    },
    { hour: 12, title: "Midday check-in", detail: checkLine("midday") },
    {
      hour: 13,
      title: "Priya heads out",
      detail: hour >= 13 ? "Note filed. The house is quiet." : "Still with Eleanor.",
    },
    { hour: 15, title: "Afternoon window", detail: checkLine("afternoon") },
    { hour: 18, title: "Dinner metformin", detail: medLine("metformin-pm") },
    { hour: 20, title: "Aspirin", detail: medLine("aspirin") },
  ];

  return raw.map((beat) => ({
    ...beat,
    phase: hour === beat.hour ? "now" : hour > beat.hour ? "past" : "ahead",
  }));
}

export function nextOpenMed(meds: MedView[]) {
  return (
    meds.find((med) => med.state === "due") ??
    meds.find((med) => med.state === "late") ??
    meds.find((med) => med.state === "later") ??
    null
  );
}

export function checkToLog(checks: CheckView[]) {
  return checks.find((check) => check.state === "due") ?? [...checks].reverse().find((check) => check.state === "missed") ?? null;
}
