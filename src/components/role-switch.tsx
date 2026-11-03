import { ROLES, type Role } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useCare } from "@/lib/store";

export function RoleSwitch() {
  const role = useCare((state) => state.role);
  const setRole = useCare((state) => state.setRole);
  return (
    <div role="radiogroup" aria-label="Who is looking" className="flex w-full rounded-full border border-line bg-cream p-1 sm:w-auto">
      {ROLES.map((item) => {
        const on = role === item.id;
        return (
          <button
            key={item.id}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => setRole(item.id)}
            className={cn(
              "h-11 flex-1 rounded-full px-3 text-sm transition-colors sm:flex-none sm:px-4",
              on ? "bg-ink text-cream" : "text-ink-soft hover:text-ink",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export function roleLine(role: Role) {
  return ROLES.find((item) => item.id === role)?.line ?? "";
}
