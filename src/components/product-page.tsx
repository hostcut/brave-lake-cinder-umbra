import { Link } from "@tanstack/react-router";
import { DayRail, DayScrub } from "@/components/day-scrub";
import { PhoneFrame, SeniorSurface } from "@/components/senior-surface";
import { Shell, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { ACCESS, GRANT_LABEL, LANES } from "@/lib/care";

export function ProductPage() {
  return (
    <SiteShell>
      <Shell className="py-14 lg:py-20">
        <p className="text-sm text-sage-deep">Product</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-display sm:text-6xl">
          A Tuesday that does not need a group text to survive.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          The senior gets buttons large enough for a tired hand. The family gets a sentence they can trust. The clinic gets the record they were going to ask for anyway, already kept.
        </p>
      </Shell>

      <section className="border-y border-line bg-cream">
        <Shell className="grid items-center gap-10 py-14 lg:grid-cols-2">
          <div>
            <p className="text-sm text-sage-deep">For Eleanor</p>
            <h2 className="mt-2 font-display text-4xl leading-display">Press, hold, done.</h2>
            <p className="mt-4 text-ink-soft">
              No menus. I’m okay, I took my medicine, I need a hand. Hold so a pocket tap does not page the family. On a real install she can say it; here, the hold is the voice.
            </p>
            <p className="mt-3 text-sm text-ink-soft">Try it. Then open the hub as Maya and read what just arrived.</p>
          </div>
          <PhoneFrame>
            <SeniorSurface />
          </PhoneFrame>
        </Shell>
      </section>

      <section>
        <Shell className="py-16">
          <div className="max-w-2xl">
            <p className="text-sm text-sage-deep">The day</p>
            <h2 className="mt-2 font-display text-4xl leading-display">Eight beats. Drag, or tap one.</h2>
            <p className="mt-4 text-ink-soft">
              Priya owns the morning. Eleanor owns the afternoon tap. Dinner brings the second metformin. The aspirin is last, so nobody is guessing at 9.
            </p>
          </div>
          <div className="mt-8">
            <DayScrub id="product-clock" />
            <div className="mt-4">
              <DayRail />
            </div>
          </div>
        </Shell>
      </section>

      <section className="border-t border-line">
        <Shell className="py-16">
          <h2 className="font-display text-4xl leading-display">What each seat is allowed</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Summary means the fact, not the file. Hidden means it is not on that screen at all.
          </p>
          <div className="mt-8 max-w-full overflow-x-auto">
            <table className="w-full min-w-[40rem] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr>
                  <th className="p-3 font-medium"> </th>
                  {(["family", "aide", "clinician", "senior"] as const).map((seat) => (
                    <th key={seat} className="p-3 font-medium capitalize">
                      {seat}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LANES.map((lane) => (
                  <tr key={lane.id}>
                    <th className="border-t border-line p-3 font-normal">{lane.label}</th>
                    {(["family", "aide", "clinician", "senior"] as const).map((seat) => {
                      const grant = ACCESS[seat][lane.id];
                      return (
                        <td key={seat} className="border-t border-line p-3 text-ink-soft">
                          {GRANT_LABEL[grant]}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/hub">Use it in the hub</Link>
            </Button>
            <Button asChild tone="cream">
              <Link to="/trust">Why the split exists</Link>
            </Button>
          </div>
        </Shell>
      </section>
    </SiteShell>
  );
}
