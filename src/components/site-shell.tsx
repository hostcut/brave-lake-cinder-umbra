import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const LINKS = [
  { to: "/product", label: "Product" },
  { to: "/hub", label: "Care Hub" },
  { to: "/pricing", label: "Pricing" },
  { to: "/trust", label: "Trust" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <SiteNav />
      <div id="main">{children}</div>
      <SiteFooter />
    </div>
  );
}

function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Wordmark />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
          <Button asChild size="sm">
            <Link to="/hub">Open the hub</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/hub" className="h-11 rounded-full bg-sage px-4 py-3 text-sm text-cream">
            Hub
          </Link>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-line"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="flex h-12 items-center text-lg">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: (typeof LINKS)[number]["to"]; label: string }) {
  return (
    <Link
      to={to}
      className="text-sm text-ink-soft"
      activeProps={{ className: "text-sm text-ink" }}
    >
      {label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-md text-ink-soft">
            Haven is the house. Link is the thread between a clinic, an aide, and a daughter — the part that usually slips.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {LINKS.map((link) => (
            <Link key={link.to} to={link.to} className="h-11 text-ink-soft hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-ink-soft">
          Eleanor Hart is fictional. This preview keeps her Tuesday in your browser and does not provide medical care.
        </p>
      </div>
    </footer>
  );
}

export function Shell({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5", className)}>{children}</div>;
}
