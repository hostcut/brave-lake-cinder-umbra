import { dayBeats, formatClock, formatHour } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useCare } from "@/lib/store";
import { useHousehold } from "@/lib/use-household";

export function DayScrub({ id = "tuesday" }: { id?: string }) {
  const hour = useCare((state) => state.hour);
  const setHour = useCare((state) => state.setHour);
  const progress = ((hour - 6) / 15) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-ink-soft">6am</span>
        <span className="tabular-nums text-ink">Demo clock · {formatHour(hour)}</span>
        <span className="text-ink-soft">9pm</span>
      </div>
      <input
        id={id}
        className="day-range"
        type="range"
        min={6}
        max={21}
        step={1}
        value={hour}
        aria-label="Move through Eleanor's Tuesday"
        aria-valuetext={formatHour(hour)}
        style={{ ["--p" as string]: `${progress}%` }}
        onChange={(event) => setHour(Number(event.target.value))}
      />
    </div>
  );
}

export function DayRail() {
  const hour = useCare((state) => state.hour);
  const setHour = useCare((state) => state.setHour);
  const home = useHousehold();
  const beats = dayBeats(hour, home);
  return (
    <ol className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {beats.map((beat) => (
        <li key={beat.title}>
          <button
            type="button"
            onClick={() => setHour(beat.hour)}
            aria-pressed={beat.phase === "now"}
            className={cn(
              "flex h-full min-h-28 w-full flex-col items-start gap-1 rounded-2xl border px-3 py-3 text-left transition-colors",
              beat.phase === "now" ? "border-sage bg-foam" : "border-line bg-cream hover:border-ink",
            )}
          >
            <span className="text-sm tabular-nums text-ink-soft">{formatClock(beat.hour)}</span>
            <span className="font-display text-lg text-ink">{beat.title}</span>
            <span className={cn("text-sm", beat.phase === "ahead" ? "text-ink-soft" : "text-ink")}>{beat.detail}</span>
          </button>
        </li>
      ))}
    </ol>
  );
}
