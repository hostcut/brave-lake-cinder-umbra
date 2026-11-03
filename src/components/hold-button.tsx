import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";

const HOLD_MS = 850;

export function HoldButton({
  label,
  hint,
  tone,
  disabled,
  onComplete,
}: {
  label: string;
  hint: string;
  tone: "sage" | "cream" | "clay";
  disabled?: boolean;
  onComplete: () => void;
}) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const frame = useRef<number | null>(null);

  const stop = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    setHolding(false);
    setProgress(0);
  };

  const start = (element: HTMLButtonElement, pointerId: number) => {
    if (disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.setPointerCapture(pointerId);
    const began = performance.now();
    setHolding(true);
    const tick = (now: number) => {
      const next = Math.min(1, (now - began) / HOLD_MS);
      setProgress(next);
      if (next >= 1) {
        stop();
        onComplete();
        return;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  };

  const ring = tone === "cream" ? "var(--color-sage)" : "var(--color-cream)";
  const track = tone === "cream" ? "var(--color-line)" : "color-mix(in oklab, var(--color-cream) 35%, transparent)";

  return (
    <button
      type="button"
      disabled={disabled}
      onPointerDown={(event) => start(event.currentTarget, event.pointerId)}
      onPointerUp={(event) => {
        const reducedNow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const finished = progress >= 1;
        stop();
        if (reducedNow && !finished && !disabled) onComplete();
        event.preventDefault();
      }}
      onPointerCancel={stop}
      onKeyDown={(event) => {
        if (disabled) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onComplete();
        }
      }}
      className={cn(
        "relative flex min-h-24 w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left transition-transform duration-150 active:not-disabled:scale-[0.96] disabled:opacity-50",
        tone === "sage" && "bg-sage text-cream",
        tone === "clay" && "bg-clay text-cream",
        tone === "cream" && "border border-line bg-cream text-ink",
      )}
    >
      <span>
        <span className="block font-display text-2xl leading-display">{label}</span>
        <span className={cn("mt-1 block text-sm", tone === "cream" ? "text-ink-soft" : "text-cream/80")}>
          {reduced ? hint : holding ? "Keep holding" : hint}
        </span>
        <span className="mt-3 flex h-5 items-end gap-1" aria-hidden>
          {[0, 1, 2, 3, 4].map((bar) => (
            <span
              key={bar}
              className={cn("w-1 rounded-full", holding && !reduced ? "wave h-5" : "h-1.5")}
              style={{
                background: tone === "cream" ? "var(--color-sage)" : "var(--color-cream)",
                animationDelay: `${bar * 80}ms`,
              }}
            />
          ))}
        </span>
      </span>
      <svg viewBox="0 0 36 36" className="size-11 shrink-0" aria-hidden>
        <circle cx="18" cy="18" r="15" fill="none" stroke={track} strokeWidth="2.5" />
        <circle
          cx="18"
          cy="18"
          r="15"
          fill="none"
          stroke={ring}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={94}
          strokeDashoffset={94 * (1 - progress)}
          transform="rotate(-90 18 18)"
        />
      </svg>
    </button>
  );
}
