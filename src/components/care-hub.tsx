import {
  Activity,
  Bell,
  ClipboardList,
  House,
  MessageCircle,
  Pill,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { DayRail, DayScrub } from "@/components/day-scrub";
import { Wordmark } from "@/components/mark";
import { AlertsBlock, CheckList, MedList } from "@/components/record-bits";
import { RoleSwitch, roleLine } from "@/components/role-switch";
import { SeniorSurface } from "@/components/senior-surface";
import { VitalsChart } from "@/components/vitals-chart";
import { ACCESS, GRANT_LABEL, LANES, TEAM, actorName, type Section } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useCare } from "@/lib/store";
import { useHousehold } from "@/lib/use-household";

const SECTIONS: { id: Section; label: string; icon: typeof House }[] = [
  { id: "today", label: "Today", icon: House },
  { id: "meds", label: "Medications", icon: Pill },
  { id: "vitals", label: "Vitals", icon: Activity },
  { id: "checkins", label: "Check-ins", icon: ClipboardList },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "messages", label: "Notes", icon: MessageCircle },
  { id: "team", label: "Circle", icon: Users },
];

export function CareHub() {
  const role = useCare((state) => state.role);
  const section = useCare((state) => state.section);
  const setSection = useCare((state) => state.setSection);
  const reset = useCare((state) => state.resetTuesday);
  const home = useHousehold();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <Wordmark />
            <Link to="/" className="text-sm text-ink-soft hover:text-ink lg:hidden">
              Site
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <RoleSwitch />
            <button type="button" onClick={reset} className="h-11 text-left text-sm text-ink-soft hover:text-ink">
              Reset Tuesday
            </button>
          </div>
        </div>
      </header>
      <p className="mx-auto max-w-6xl px-5 pt-4 text-sm text-ink-soft">{roleLine(role)} Fictional household.</p>
      {role === "senior" ? (
        <main className="mx-auto flex max-w-xl flex-col gap-8 px-5 py-6">
          <SeniorSurface />
          <DayScrub id="hub-senior-clock" />
        </main>
      ) : (
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[13.5rem_minmax(0,1fr)]">
          <nav className="flex min-w-0 gap-2 overflow-x-auto px-5 py-4 lg:flex-col lg:overflow-visible lg:px-5" aria-label="Hub">
            {SECTIONS.map((item) => {
              const Icon = item.icon;
              const on = section === item.id;
              const count = item.id === "alerts" ? home.alerts.length : 0;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSection(item.id)}
                  aria-current={on ? "page" : undefined}
                  className={cn(
                    "flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm",
                    on ? "bg-ink text-cream" : "bg-cream text-ink hover:border-ink",
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                  {item.label}
                  {count > 0 && (
                    <span className={cn("tabular-nums", on ? "text-cream" : "text-clay")}>{count}</span>
                  )}
                </button>
              );
            })}
          </nav>
          <main className="min-w-0 px-5 pb-16">
            <Panel section={section} />
            <div className="mt-8 rounded-3xl border border-line bg-cream p-4">
              <p className="mb-1 text-sm text-ink-soft">Drag Tuesday. Morning signatures rewind. The afternoon window opens at 3.</p>
              <DayScrub id="hub-clock" />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

function Panel({ section }: { section: Section }) {
  if (section === "meds") return <MedsPanel />;
  if (section === "vitals") return <VitalsPanel />;
  if (section === "checkins") return <ChecksPanel />;
  if (section === "alerts") return <AlertsPanel />;
  if (section === "messages") return <NotesPanel />;
  if (section === "team") return <TeamPanel />;
  return <TodayPanel />;
}

function TodayPanel() {
  const home = useHousehold();
  const role = useCare((state) => state.role);
  const log = useCare((state) => state.log);
  const notes = useCare((state) => state.notes);
  const visible = notes.filter((note) => (role === "clinician" ? true : note.audience === "circle"));
  return (
    <div className="flex flex-col gap-6 pt-2">
      <header>
        <p className="text-sm text-ink-soft">Today · Hart household</p>
        <h1 className="font-display text-4xl leading-display sm:text-5xl">{home.title}</h1>
        <p className="mt-3 max-w-2xl text-ink-soft">{home.lede}</p>
      </header>
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Doses signed" value={`${home.signed}/${home.scheduled || 0}`} />
        <Stat label="Open alerts" value={String(home.alerts.length)} />
        <Stat label="Check-ins in" value={String(home.checks.filter((check) => check.state === "done").length)} />
      </div>
      <AlertsBlock />
      <DayRail />
      {visible[0] && (
        <blockquote className="rounded-3xl border border-line bg-cream p-5">
          <p className="text-lg text-ink">“{visible[0].body}”</p>
          <footer className="mt-2 text-sm text-ink-soft">
            {visible[0].from} · {visible[0].timeLabel}
            {visible[0].audience === "clinical" ? " · clinical" : ""}
          </footer>
        </blockquote>
      )}
      {role === "clinician" && (
        <section>
          <h2 className="text-2xl">Audit</h2>
          <p className="mb-3 text-sm text-ink-soft">Maya never sees this list. It is the clinical seat.</p>
          <ul className="flex flex-col gap-2">
            {log.slice(0, 6).map((item) => (
              <li key={item.id} className="grid grid-cols-[5.5rem_1fr] gap-3 text-sm">
                <span className="tabular-nums text-ink-soft">{item.timeLabel}</span>
                <span>
                  <span className="text-ink">{item.actor}.</span> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-cream px-4 py-3">
      <p className="text-sm text-ink-soft">{label}</p>
      <p className="font-display text-3xl tabular-nums">{value}</p>
    </div>
  );
}

function MedsPanel() {
  const { signed, scheduled, meds } = useHousehold();
  const role = useCare((state) => state.role);
  return (
    <div className="flex flex-col gap-4 pt-2">
      <header>
        <h1 className="text-4xl">Medications</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          {signed} of {scheduled} doses that should already have happened are signed.
          {role === "family" ? " You see the list. The clinic sees who signed it." : " The audit keeps the signature."}
        </p>
      </header>
      <MedList />
      <p className="text-sm text-ink-soft">{meds.filter((med) => med.state === "later").length} still later today.</p>
    </div>
  );
}

function VitalsPanel() {
  const role = useCare((state) => state.role);
  return (
    <div className="flex flex-col gap-4 pt-2">
      <header>
        <h1 className="text-4xl">Vitals</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Compared with Eleanor, not with a stranger her age. The dashed line is her own two-week systolic average.
          {role === "clinician" ? " Worth a line in Thursday's note, not a midnight page." : ""}
        </p>
      </header>
      <VitalsChart />
    </div>
  );
}

function ChecksPanel() {
  return (
    <div className="flex flex-col gap-4 pt-2">
      <header>
        <h1 className="text-4xl">Check-ins</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Four windows. A tap from Eleanor, or a line from Priya, closes one. Miss the window and the circle hears it before it becomes a story.
        </p>
      </header>
      <CheckList />
    </div>
  );
}

function AlertsPanel() {
  return (
    <div className="flex flex-col gap-4 pt-2">
      <header>
        <h1 className="text-4xl">Alerts</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Quiet on purpose. A pattern, a missed window, a hand raised. Not a feed built to feel busy.
        </p>
      </header>
      <AlertsBlock />
    </div>
  );
}

function NotesPanel() {
  const role = useCare((state) => state.role);
  const notes = useCare((state) => state.notes);
  const send = useCare((state) => state.sendNote);
  const [draft, setDraft] = useState("");
  const visible = notes.filter((note) => (role === "clinician" ? true : note.audience === "circle"));
  const clinical = role === "clinician";
  return (
    <div className="flex flex-col gap-4 pt-2">
      <header>
        <h1 className="text-4xl">{clinical ? "Notes" : "Family thread"}</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          {clinical
            ? "A clinical note stays off Maya's thread. You can still read what the family wrote."
            : "What Maya, Eleanor, and Priya can all stand to read. The clinic's private note is not here."}
        </p>
      </header>
      <form
        className="rounded-3xl border border-line bg-cream p-4"
        onSubmit={(event) => {
          event.preventDefault();
          send(draft);
          setDraft("");
        }}
      >
        <label htmlFor="note" className="text-sm text-ink-soft">
          {clinical ? `Note as ${actorName(role)}` : "A note for the circle"}
        </label>
        <textarea
          id="note"
          value={draft}
          maxLength={280}
          onChange={(event) => setDraft(event.target.value)}
          placeholder={clinical ? "Threshold noted. Recheck Thursday. No page tonight." : "Off the train at 5. Calling then."}
          className="mt-2 min-h-24 w-full resize-y rounded-2xl border border-line bg-paper px-3 py-3 text-ink outline-none focus:border-sage"
        />
        <button type="submit" className="mt-3 h-11 rounded-full bg-sage px-5 text-sm text-cream disabled:opacity-50" disabled={!draft.trim()}>
          {clinical ? "Save clinical note" : "Send to the circle"}
        </button>
      </form>
      <ul className="flex flex-col gap-3">
        {visible.map((note) => (
          <li key={note.id} className="rounded-2xl border border-line bg-cream px-4 py-3">
            <p className="text-ink">{note.body}</p>
            <p className="mt-2 text-sm text-ink-soft">
              {note.from} · {note.timeLabel}
              {note.audience === "clinical" ? " · clinical, hidden from family" : ""}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamPanel() {
  const role = useCare((state) => state.role);
  const grants = ACCESS[role];
  return (
    <div className="flex flex-col gap-6 pt-2">
      <header>
        <h1 className="text-4xl">The circle</h1>
        <p className="mt-2 max-w-xl text-ink-soft">Four people, one house. What you can see depends on the seat you are sitting in.</p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {TEAM.map((person) => (
          <li key={person.id} className="overflow-hidden rounded-3xl border border-line bg-cream">
            <img src={person.photo} alt="" width={1200} height={1600} className="aspect-[4/3] w-full object-cover object-top" />
            <div className="p-4">
              <h2 className="text-2xl">{person.name}</h2>
              <p className="text-sm text-ink-soft">{person.role}</p>
              <p className="mt-2 text-sm text-ink">{person.blurb}</p>
              <p className="mt-1 text-sm text-ink-soft">{person.place}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <h2 className="text-2xl">Your seat</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {LANES.map((lane) => (
            <li key={lane.id} className="flex items-center justify-between rounded-2xl border border-line bg-cream px-4 py-3 text-sm">
              <span>{lane.label}</span>
              <span className="text-ink-soft">{GRANT_LABEL[grants[lane.id]]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
