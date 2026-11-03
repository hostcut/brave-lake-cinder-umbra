import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const PLANS = [
  {
    id: "kin",
    name: "Kin",
    monthly: 24,
    who: "One parent, and the family text thread you are tired of being.",
    points: ["1 senior", "6 family seats", "Check-ins, doses, notes", "Vitals, read as a summary"],
  },
  {
    id: "household",
    name: "Household",
    monthly: 64,
    who: "When an aide already has a key, and a clinic should stop chasing paper.",
    points: ["Everything in Kin", "3 aide seats", "1 clinician guest", "Vitals against her own line"],
    featured: true,
  },
  {
    id: "agency",
    name: "Agency",
    monthly: null,
    who: "Home-health teams with more than one living room to keep straight.",
    points: ["Many households", "Admin roles", "Audit export", "A BAA, on paper"],
  },
] as const;

export function PricingPage() {
  const [yearly, setYearly] = useState(true);
  return (
    <SiteShell>
      <Shell className="py-14 lg:py-20">
        <p className="text-sm text-sage-deep">Pricing</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 className="max-w-2xl font-display text-5xl leading-display sm:text-6xl">Pay for the household, not the panic.</h1>
          <div role="radiogroup" aria-label="Billing" className="flex rounded-full border border-line bg-cream p-1">
            <BillButton on={yearly} onClick={() => setYearly(true)} label="Yearly" hint="two months kept" />
            <BillButton on={!yearly} onClick={() => setYearly(false)} label="Monthly" hint="cancel whenever" />
          </div>
        </div>
        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const price = plan.monthly === null ? null : yearly ? Math.round((plan.monthly * 10) / 12) : plan.monthly;
            return (
              <li
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-3xl border p-6",
                  plan.id === "household" ? "border-sage bg-foam" : "border-line bg-cream",
                )}
              >
                <h2 className="text-3xl">{plan.name}</h2>
                <p className="mt-2 min-h-16 text-sm text-ink-soft">{plan.who}</p>
                <p className="mt-4 font-display text-5xl tabular-nums leading-display">
                  {price === null ? "Talk" : `$${price}`}
                  {price !== null && <span className="font-sans text-base text-ink-soft"> /mo</span>}
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  {price === null ? "For practices and agencies." : yearly ? `$${plan.monthly! * 10} billed yearly` : "Billed monthly"}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-2 text-sm">
                  {plan.points.map((point) => (
                    <li key={point} className="border-t border-line py-2">
                      {point}
                    </li>
                  ))}
                </ul>
                <Button asChild tone={plan.id === "household" ? "sage" : "ink"} className="mt-6">
                  <Link to="/hub">{plan.monthly === null ? "See the record first" : "Try the sample hub"}</Link>
                </Button>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-2xl text-sm text-ink-soft">
          This preview does not bill anyone and does not open an account. The numbers are the offer; Eleanor’s Tuesday is the product you can actually touch.
        </p>
      </Shell>
    </SiteShell>
  );
}

function BillButton({ on, onClick, label, hint }: { on: boolean; onClick: () => void; label: string; hint: string }) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={on}
      onClick={onClick}
      className={cn("min-h-12 rounded-full px-4 py-2 text-left", on ? "bg-ink text-cream" : "text-ink")}
    >
      <span className="block text-sm">{label}</span>
      <span className={cn("block text-xs", on ? "text-cream/75" : "text-ink-soft")}>{hint}</span>
    </button>
  );
}
