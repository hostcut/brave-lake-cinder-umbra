import { formatClock, formatHour, type MedState, type CheckState } from "@/lib/care";
import { useCare } from "@/lib/store";
import { useHousehold } from "@/lib/use-household";
import { cn } from "@/lib/cn";

const MED_LABEL: Record<MedState, string> = {
  taken: "Signed",
  due: "Due now",
  late: "Still open",
  later: "Later",
};

const CHECK_LABEL: Record<CheckState, string> = {
  done: "In",
  due: "Open now",
  missed: "Missed",
  upcoming: "Later",
};

export function MedList() {
  const { meds } = useHousehold();
  const setMed = useCare((state) => state.setMed);
  return (
    <ul className="flex flex-col gap-2">
      {meds.map((med) => {
        const signed = med.state === "taken";
        return (
          <li key={med.id} className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-cream px-4 py-3">
            <div className="min-w-0">
              <p className="font-medium text-ink">
                {med.name} <span className="font-normal text-ink-soft">{med.dose}</span>
              </p>
              <p className="text-sm text-ink-soft">
                <span className="tabular-nums">{formatHour(med.hour)}</span>
                {" · "}
                {MED_LABEL[med.state]}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMed(med.id, !signed)}
              className={cn(
                "h-11 shrink-0 rounded-full px-4 text-sm transition-transform active:scale-[0.96]",
                signed ? "border border-line bg-paper text-ink" : "bg-sage text-cream",
              )}
            >
              {signed ? "Undo" : "Sign"}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function CheckList() {
  const { checks } = useHousehold();
  const setCheck = useCare((state) => state.setCheck);
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {checks.map((check) => (
        <li key={check.id} className="flex flex-col rounded-2xl border border-line bg-cream p-4">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-2xl text-ink">{check.name}</h3>
            <span className="text-sm tabular-nums text-ink-soft">
              {formatClock(check.opens)}–{formatClock(check.closes)}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">{check.prompt}</p>
          <p className="mt-3 text-sm text-ink">{CHECK_LABEL[check.state]}</p>
          {check.state !== "upcoming" && (
            <button
              type="button"
              onClick={() => setCheck(check.id, check.state !== "done")}
              className="mt-3 h-11 self-start rounded-full bg-sage px-4 text-sm text-cream active:scale-[0.96]"
            >
              {check.state === "done" ? "Clear" : "Log I'm okay"}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export function AlertsBlock() {
  const { alerts } = useHousehold();
  const ack = useCare((state) => state.ack);
  const setCheck = useCare((state) => state.setCheck);
  if (alerts.length === 0) {
    return (
      <p className="rounded-2xl border border-line bg-foam px-4 py-4 text-sage-deep">
        Nothing is asking for you. That is the product working.
      </p>
    );
  }
  return (
    <ul className="flex flex-col gap-3">
      {alerts.map((alert) => (
        <li
          key={alert.id}
          className={cn(
            "rounded-2xl border px-4 py-4",
            alert.tone === "needs" ? "border-clay bg-clay-soft" : "border-line bg-cream",
          )}
        >
          <p className="font-display text-2xl text-ink">{alert.title}</p>
          <p className="mt-1 text-sm text-ink-soft">{alert.detail}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {alert.id.startsWith("miss-") && (
              <button
                type="button"
                onClick={() => setCheck(alert.id.slice(5), true)}
                className="h-11 rounded-full bg-sage px-4 text-sm text-cream"
              >
                Log it now
              </button>
            )}
            <button
              type="button"
              onClick={() => ack(alert.id)}
              className="h-11 rounded-full border border-line bg-cream px-4 text-sm text-ink"
            >
              {alert.id === "help" ? "I'm calling her" : "Noted"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
