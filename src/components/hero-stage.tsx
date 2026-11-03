import { useRef, useState } from "react";
import { DayScrub } from "@/components/day-scrub";
import { formatHour } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";
import { useCare } from "@/lib/store";
import { useHousehold } from "@/lib/use-household";

export function HeroStage() {
  const reduced = useReducedMotion();
  const frame = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const home = useHousehold();
  const setMed = useCare((state) => state.setMed);
  const ack = useCare((state) => state.ack);
  const next = home.meds.find((med) => med.state === "due" || med.state === "late") ?? home.meds.find((med) => med.state === "later");
  const alert = home.alerts[0];

  const move = (event: React.PointerEvent) => {
    if (reduced || !frame.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = frame.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -5, y: px * 6 });
  };

  return (
    <div className="[perspective:1200px]">
      <div
        ref={frame}
        onPointerMove={move}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        className="transition-transform duration-200 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <article className="overflow-hidden rounded-3xl border border-line bg-cream shadow-lift">
          <div className="grid sm:grid-cols-[9.5rem_1fr]">
            <img
              src="/photos/eleanor.jpg"
              alt="Eleanor Hart at her window in Laurelhurst"
              width={1200}
              height={1600}
              className="h-52 w-full object-cover object-top sm:h-full"
            />
            <div className="flex min-w-0 flex-col gap-4 p-4 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-ink-soft">Hart household · sample</p>
                  <h2 className="font-display text-3xl leading-display text-ink">{home.title}</h2>
                </div>
                <span
                  className={cn(
                    "mt-2 size-3 shrink-0 rounded-full",
                    home.tone === "settled" ? "bg-sage pulse-dot" : "bg-clay",
                  )}
                  aria-hidden
                />
              </div>
              <p className="text-sm text-ink-soft">{home.lede}</p>
              <ol className="grid grid-cols-4 gap-2">
                {home.checks.map((check) => (
                  <li key={check.id} className="min-w-0">
                    <div
                      className={cn(
                        "mb-1 h-1.5 rounded-full",
                        check.state === "done" && "bg-sage",
                        check.state === "due" && "bg-clay",
                        check.state === "missed" && "bg-clay",
                        check.state === "upcoming" && "bg-line",
                      )}
                    />
                    <p className="truncate text-xs text-ink-soft">{check.name}</p>
                  </li>
                ))}
              </ol>
              {next && (
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-3 py-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm text-ink">
                      {next.name} <span className="text-ink-soft">{next.dose}</span>
                    </p>
                    <p className="text-xs tabular-nums text-ink-soft">{formatHour(next.hour)}</p>
                  </div>
                  {next.state !== "later" && next.state !== "taken" ? (
                    <button
                      type="button"
                      onClick={() => setMed(next.id, true)}
                      className="h-11 shrink-0 rounded-full bg-sage px-4 text-sm text-cream"
                    >
                      Sign
                    </button>
                  ) : (
                    <span className="text-xs text-ink-soft">{next.state === "taken" ? "Signed" : "Later"}</span>
                  )}
                </div>
              )}
              {alert && (
                <div className={cn("rounded-2xl px-3 py-3", alert.tone === "needs" ? "bg-clay-soft" : "bg-paper")}>
                  <p className="text-sm text-ink">{alert.title}</p>
                  <button type="button" onClick={() => ack(alert.id)} className="mt-2 h-11 text-sm text-sage-deep">
                    {alert.id === "help" ? "I'm calling her" : "Noted — clear it"}
                  </button>
                </div>
              )}
              <DayScrub id="hero-clock" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
