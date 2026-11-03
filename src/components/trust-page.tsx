import { useState } from "react";
import { Shell, SiteShell } from "@/components/site-shell";
import { ACCESS, GRANT_LABEL, LANES, type Grant } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useCare } from "@/lib/store";

const SEATS = [
  { id: "family", name: "Maya", seat: "Daughter", line: "Settled or not, the open window, the family thread. Not the audit." },
  { id: "aide", name: "Priya", seat: "Aide", line: "The doses she gave and the check-ins she witnessed. Not the family’s private notes." },
  { id: "clinician", name: "Amara", seat: "Physician", line: "The trend, the signatures, the clinical note, and who changed any of it." },
  { id: "senior", name: "Eleanor", seat: "At home", line: "Three buttons and a short echo of the people who wrote back." },
] as const;

type SeatId = (typeof SEATS)[number]["id"];

export function TrustPage() {
  const [seat, setSeat] = useState<SeatId>("family");
  const log = useCare((state) => state.log);
  const person = SEATS.find((item) => item.id === seat) ?? SEATS[0];
  const grants = ACCESS[seat];

  return (
    <SiteShell>
      <Shell className="py-14 lg:py-20">
        <p className="text-sm text-sage-deep">Trust</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-display sm:text-6xl">
          The record is shared. The view is not.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Havenlink is built so a daughter can exhale without reading a chart, and a physician can trust a dose without joining a family text. Access, audit, and encryption are the architecture — not a sticker.
        </p>
      </Shell>

      <section className="border-y border-line bg-cream">
        <Shell className="py-14">
          <h2 className="font-display text-4xl leading-display">Tap a seat.</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">{person.name} is looking. {person.line}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SEATS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={seat === item.id}
                onClick={() => setSeat(item.id)}
                className={cn(
                  "min-h-24 rounded-2xl border px-4 py-4 text-left",
                  seat === item.id ? "border-sage bg-foam" : "border-line bg-paper",
                )}
              >
                <span className="block font-display text-2xl">{item.name}</span>
                <span className="text-sm text-ink-soft">{item.seat}</span>
              </button>
            ))}
          </div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {LANES.map((lane) => (
              <Lane key={lane.id} label={lane.label} grant={grants[lane.id]} />
            ))}
          </ul>
        </Shell>
      </section>

      <section>
        <Shell className="grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-display">What we mean by careful</h2>
            <ul className="mt-6 flex flex-col gap-4">
              <Point title="Encryption in transit and at rest" body="Designed in for a real deployment. This preview never leaves your browser, and it only holds a story." />
              <Point title="Seats, not a shared password" body="Family, aide, clinician, senior. Each one opens a different depth of the same Tuesday." />
              <Point title="An audit the clinic can read" body="Who signed, who cleared, who acknowledged. Family does not need that list to sleep." />
              <Point title="No market for the record" body="Care data is not a product we sell. The subscription is the business." />
              <Point title="Not a badge that says HIPAA" body="HIPAA does not certify apps. A clinical customer gets access limits, an audit, and a BAA. This marketing preview is not a covered service." />
              <Point title="Not 911" body="I need a hand reaches Maya. It does not dispatch an ambulance. Emergencies are still emergencies." />
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl">Sample audit</h2>
            <p className="mt-2 text-sm text-ink-soft">
              This is the clinician’s list for the fictional Hart household, including whatever you just did in the hub. On Maya’s screen it stays closed.
            </p>
            <ol className="mt-4 flex flex-col gap-3">
              {log.slice(0, 8).map((item) => (
                <li key={item.id} className="rounded-2xl border border-line bg-cream px-4 py-3 text-sm">
                  <span className="tabular-nums text-ink-soft">{item.timeLabel}</span>
                  <span className="mt-1 block text-ink">
                    {item.actor}. {item.text}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Shell>
      </section>
    </SiteShell>
  );
}

function Point({ title, body }: { title: string; body: string }) {
  return (
    <li className="border-t border-line pt-4">
      <h3 className="text-2xl">{title}</h3>
      <p className="mt-1 text-sm text-ink-soft">{body}</p>
    </li>
  );
}

function Lane({ label, grant }: { label: string; grant: Grant }) {
  return (
    <li
      className={cn(
        "flex items-center justify-between rounded-2xl border px-4 py-3",
        grant === "open" && "border-sage bg-foam text-sage-deep",
        grant === "summary" && "border-line bg-paper text-ink",
        grant === "closed" && "border-line bg-cream text-ink-soft",
      )}
    >
      <span>{label}</span>
      <span className="text-sm">{GRANT_LABEL[grant]}</span>
    </li>
  );
}

