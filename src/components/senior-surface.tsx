import { greeting } from "@/lib/care";
import { useCare } from "@/lib/store";
import { useHousehold } from "@/lib/use-household";
import { HoldButton } from "@/components/hold-button";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border-8 border-ink bg-ink shadow-lift">
      <div className="rounded-2xl bg-paper px-3 py-4">{children}</div>
    </div>
  );
}

export function SeniorSurface() {
  const hour = useCare((state) => state.hour);
  const last = useCare((state) => state.lastAction);
  const imOk = useCare((state) => state.imOk);
  const takeNext = useCare((state) => state.takeNext);
  const askHelp = useCare((state) => state.askHelp);
  const home = useHousehold();
  const open = home.checks.find((check) => check.state === "due" || check.state === "missed");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-ink-soft">Laurelhurst · Tuesday</p>
        <h2 className="font-display text-4xl leading-display text-ink">
          {greeting(hour)}, Eleanor.
        </h2>
        <p className="mt-2 text-ink-soft">Maya can see this. So can Priya. That is the whole point.</p>
      </div>
      {last && (
        <p
          className={
            last.kind === "help"
              ? "rounded-2xl bg-clay-soft px-4 py-3 text-sm text-ink"
              : "rounded-2xl bg-foam px-4 py-3 text-sm text-sage-deep"
          }
        >
          {last.text}
        </p>
      )}
      <HoldButton
        label="I'm okay"
        hint={open ? `Sends the ${open.name.toLowerCase()} check-in` : "No window is open"}
        tone="sage"
        disabled={!open}
        onComplete={imOk}
      />
      <HoldButton label="I took my medicine" hint="Signs the next dose on today's list" tone="cream" onComplete={takeNext} />
      <HoldButton label="I need a hand" hint="Calls the circle — not emergency services" tone="clay" onComplete={askHelp} />
      <p className="text-sm text-ink-soft">
        If this is an emergency, call 911. Havenlink tells the people who already love you. It does not watch the house for you.
      </p>
    </div>
  );
}
