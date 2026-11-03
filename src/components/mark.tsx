import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

export function Mark({ className, tone = "sage" }: { className?: string; tone?: "sage" | "cream" }) {
  const fill = tone === "sage" ? "var(--color-sage)" : "var(--color-cream)";
  const ink = tone === "sage" ? "var(--color-cream)" : "var(--color-sage)";
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <rect width="32" height="32" rx="9" fill={fill} />
      <path
        d="M7.5 21c1.4-6 4.6-8.5 8.5-8.5S23.1 15 24.5 21"
        fill="none"
        stroke={ink}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12.2" r="1.7" fill={ink} />
    </svg>
  );
}

export function Wordmark({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 rounded-full", tone === "cream" ? "text-cream" : "text-ink")}
    >
      <Mark className="size-8" tone={tone === "cream" ? "cream" : "sage"} />
      <span className="font-display text-xl tracking-tight">Havenlink</span>
    </Link>
  );
}
