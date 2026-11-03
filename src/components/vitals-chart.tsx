import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { VITALS, pressureLine } from "@/lib/care";
import { cn } from "@/lib/cn";

export function VitalsChart() {
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<"pressure" | "pulse">("pressure");
  useEffect(() => setReady(true), []);
  const { today, avg, delta } = pressureLine();

  return (
    <div className="rounded-3xl border border-line bg-cream p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-ink-soft">This morning</p>
          <p className="font-display text-4xl tabular-nums leading-display text-ink">
            {mode === "pressure" ? `${today.sys}/${today.dia}` : today.pulse}
          </p>
          <p className="mt-1 max-w-md text-sm text-ink-soft">
            {mode === "pressure"
              ? `${delta} above her line of ${avg}. Pulse held at ${today.pulse}.`
              : "Pulse stayed in her usual band while pressure ran high."}
          </p>
        </div>
        <div className="flex rounded-full border border-line bg-paper p-1">
          {(["pressure", "pulse"] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={mode === item}
              onClick={() => setMode(item)}
              className={cn(
                "h-11 rounded-full px-4 text-sm capitalize",
                mode === item ? "bg-ink text-cream" : "text-ink-soft",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 h-56 w-full min-w-0">
        {ready ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[...VITALS]} margin={{ top: 12, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="var(--color-line)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis
                domain={mode === "pressure" ? [60, 170] : [50, 100]}
                width={36}
                tick={{ fill: "var(--color-ink-soft)", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--color-cream)",
                  border: "1px solid var(--color-line)",
                  borderRadius: 12,
                  color: "var(--color-ink)",
                }}
              />
              {mode === "pressure" ? (
                <>
                  <ReferenceLine y={avg} stroke="var(--color-clay)" strokeDasharray="4 4" />
                  <Line type="monotone" dataKey="sys" name="Systolic" stroke="var(--color-sage)" strokeWidth={2.5} dot={false} />
                  <Line type="monotone" dataKey="dia" name="Diastolic" stroke="var(--color-ink)" strokeWidth={2} dot={false} />
                </>
              ) : (
                <Line type="monotone" dataKey="pulse" name="Pulse" stroke="var(--color-sage)" strokeWidth={2.5} dot={false} />
              )}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-full rounded-2xl bg-paper" />
        )}
      </div>
      <p className="mt-3 text-sm text-ink-soft">Weight 147.6 lb, down half a pound in two weeks — not a flag on its own.</p>
    </div>
  );
}
