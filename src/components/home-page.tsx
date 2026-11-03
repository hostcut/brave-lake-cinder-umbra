import { Link } from "@tanstack/react-router";
import { Constellation } from "@/components/constellation";
import { DayRail, DayScrub } from "@/components/day-scrub";
import { HeroStage } from "@/components/hero-stage";
import { PhoneFrame, SeniorSurface } from "@/components/senior-surface";
import { Shell, SiteShell } from "@/components/site-shell";
import { RoleSwitch, roleLine } from "@/components/role-switch";
import { Button } from "@/components/ui/button";
import { TEAM } from "@/lib/care";
import { useCare } from "@/lib/store";

const FAQ = [
  {
    q: "Is this a medical device?",
    a: "No. Havenlink keeps the people and the record in one place. It does not diagnose, and it is not an emergency service. Eleanor Hart, on this site, is a fiction you can push around.",
  },
  {
    q: "What does a daughter see that a doctor does not?",
    a: "Maya sees whether her mother is settled, the check-ins, and the family thread. Dr. Okonkwo sees the dose record, the trend against Eleanor's own line, and the audit. They share the house. They do not share every sentence.",
  },
  {
    q: "What if she will not learn another app?",
    a: "Then the app is three large buttons, or Priya signs the morning for her. The point is a tap she can make half-asleep, not a portal.",
  },
  {
    q: "Where does this preview keep data?",
    a: "In your browser, on this device. Reset Tuesday throws it out. Nothing here is a real chart, and nothing is sent to a clinic.",
  },
];

export function HomePage() {
  const role = useCare((state) => state.role);
  return (
    <SiteShell>
      <section className="graph-paper relative overflow-hidden">
        <Shell className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <p className="rise text-sm text-sage-deep">Care, without the crisis desk</p>
            <h1 className="rise rise-2 mt-3 font-display text-5xl leading-display text-ink sm:text-6xl">
              Never wonder if mom is okay again.
            </h1>
            <p className="rise rise-3 mt-5 max-w-md text-lg text-ink-soft">
              Havenlink is one Tuesday for the parent at home, the family across town, and the people who are paid to notice. Check-ins, doses, and the thread between them.
            </p>
            <div className="mt-6">
              <RoleSwitch />
              <p className="mt-3 text-sm text-ink-soft">{roleLine(role)}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/hub">Open the Care Hub</Link>
              </Button>
              <Button asChild tone="cream" size="lg">
                <Link to="/product">See a Tuesday</Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            {role === "senior" ? (
              <div className="flex flex-col gap-4">
                <PhoneFrame>
                  <SeniorSurface />
                </PhoneFrame>
                <DayScrub id="home-senior-clock" />
              </div>
            ) : (
              <HeroStage />
            )}
          </div>
        </Shell>
      </section>

      <section className="border-y border-line bg-cream">
        <Shell className="grid gap-6 py-10 sm:grid-cols-3">
          <Pitch kicker="The house" title="She stays home." body="Aging in place, with the chair and the afternoon light still hers. Not a facility by default." />
          <Pitch kicker="The link" title="Nothing slips." body="The dose Priya signed, the check-in Eleanor tapped, the pattern the clinic should see before Thursday." />
          <Pitch kicker="The quiet" title="Alerts earn it." body="A missed window or a hand raised. Not a feed that makes a calm day feel like a shift." />
        </Shell>
      </section>

      <section className="bg-ink text-cream">
        <Shell className="py-16 lg:py-24">
          <div className="max-w-xl">
            <p className="text-sm text-cream/70">The link, moving</p>
            <h2 className="mt-2 font-display text-4xl leading-display sm:text-5xl">
              One house. Three ways of seeing it.
            </h2>
            <p className="mt-4 text-cream/80">
              Tap a person. A note is already on its way between them — the check-in, the signature, the number that left her usual line.
            </p>
          </div>
          <div className="graph-dark mt-10 rounded-3xl p-4 sm:p-8">
            <Constellation />
          </div>
        </Shell>
      </section>

      <section>
        <Shell className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm text-sage-deep">The same Tuesday as the hub</p>
            <h2 className="mt-2 font-display text-4xl leading-display sm:text-5xl">Drag the day. It answers.</h2>
            <p className="mt-4 text-ink-soft">
              Morning doses sign themselves when Priya arrives at 9. The afternoon window opens at 3. Scrub backward and the house rewinds. Anything you change is waiting in the Care Hub.
            </p>
          </div>
          <div className="mt-8">
            <DayScrub id="home-clock" />
            <div className="mt-4">
              <DayRail />
            </div>
          </div>
        </Shell>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <img
            src="/photos/haven.jpg"
            alt="The Laurelhurst living room — oak, linen, and afternoon light"
            width={1792}
            height={1008}
            className="h-72 w-full object-cover lg:h-full"
          />
          <div className="flex flex-col justify-center bg-ink px-6 py-12 text-cream lg:px-12">
            <p className="font-display text-3xl leading-display sm:text-4xl">
              She still has the chair, the radio, and the long patch of sun. The care team just stopped losing the thread.
            </p>
            <p className="mt-6 text-cream/75">Haven is that room. Link is everyone who should know it is still a good afternoon.</p>
          </div>
        </div>
      </section>

      <section>
        <Shell className="py-16">
          <h2 className="font-display text-4xl leading-display">The people on the record</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((person) => (
              <li key={person.id} className="overflow-hidden rounded-3xl border border-line bg-cream">
                <img src={person.photo} alt="" width={1200} height={1600} className="aspect-[3/4] w-full object-cover object-top" />
                <div className="p-4">
                  <h3 className="text-2xl">{person.name}</h3>
                  <p className="text-sm text-ink-soft">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      <section className="border-t border-line bg-cream">
        <Shell className="grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-display text-4xl leading-display">Plain questions</h2>
            <p className="mt-3 text-ink-soft">Before the pricing, the things families actually ask.</p>
            <Button asChild className="mt-6">
              <Link to="/trust">Read the trust notes</Link>
            </Button>
          </div>
          <div>
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line py-2">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 font-medium">
                  {item.q}
                  <span className="text-xl text-ink-soft transition-transform group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="pb-4 text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </Shell>
      </section>

      <section className="bg-sage-deep text-cream">
        <Shell className="flex flex-col items-start gap-6 py-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl leading-display sm:text-5xl">Open Eleanor’s Tuesday.</h2>
            <p className="mt-3 text-cream/80">Sign a dose. Send a check-in. Switch seats and watch who is allowed to see it.</p>
          </div>
          <Button asChild tone="cream" size="lg">
            <Link to="/hub">Enter the Care Hub</Link>
          </Button>
        </Shell>
      </section>
    </SiteShell>
  );
}

function Pitch({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div>
      <p className="text-sm text-sage-deep">{kicker}</p>
      <h2 className="mt-1 font-display text-3xl leading-display">{title}</h2>
      <p className="mt-2 text-ink-soft">{body}</p>
    </div>
  );
}
