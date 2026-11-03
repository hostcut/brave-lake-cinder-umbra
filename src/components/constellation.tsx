import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Role } from "@/lib/care";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";
import { useCare } from "@/lib/store";

type Node = {
  id: string;
  name: string;
  sub: string;
  photo: string;
  x: number;
  y: number;
  payload: string;
  copy: string;
  role: Role | null;
};

const CENTER: Node = {
  id: "eleanor",
  name: "Eleanor",
  sub: "Home",
  photo: "/photos/eleanor.jpg",
  x: 50,
  y: 50,
  payload: "The house, held",
  copy: "Eleanor does not manage a portal. She confirms she is alright, signs a dose, or asks for a person. Everyone else is a link back to this room.",
  role: "senior",
};

const NODES: Node[] = [
  {
    id: "maya",
    name: "Maya",
    sub: "Daughter",
    photo: "/photos/maya.jpg",
    x: 24,
    y: 24,
    payload: "12:06pm · I'm okay",
    copy: "Maya gets the reassurance: settled or not, the open window, the note Priya left. She does not get the audit or a private clinic note.",
    role: "family",
  },
  {
    id: "priya",
    name: "Priya",
    sub: "Aide",
    photo: "/photos/priya.jpg",
    x: 78,
    y: 22,
    payload: "8:04am · doses signed",
    copy: "Priya signs what she gave, writes the morning in plain language, and leaves. The family thread is not her inbox.",
    role: null,
  },
  {
    id: "amara",
    name: "Amara",
    sub: "Physician",
    photo: "/photos/amara.jpg",
    x: 74,
    y: 76,
    payload: "Line · systolic 148",
    copy: "Dr. Okonkwo sees the trend against Eleanor's own line, the dose record, and who changed it. Thursday's visit starts before she walks in.",
    role: "clinician",
  },
];

export function Constellation() {
  const [selected, setSelected] = useState("maya");
  const reduced = useReducedMotion();
  const setRole = useCare((state) => state.setRole);
  const node = selected === "eleanor" ? CENTER : (NODES.find((item) => item.id === selected) ?? NODES[0]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="relative mx-auto aspect-square w-full max-w-lg">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
          {NODES.map((item) => (
            <g key={item.id}>
              <line
                x1="50"
                y1="50"
                x2={item.x}
                y2={item.y}
                stroke="var(--color-cream)"
                strokeWidth="0.35"
                strokeOpacity={item.id === selected ? 0.95 : 0.28}
              />
              {reduced ? (
                <circle cx={(50 + item.x) / 2} cy={(50 + item.y) / 2} r="1.15" fill="var(--color-clay)" />
              ) : (
                <circle r="1.15" fill="var(--color-clay)">
                  <animateMotion dur="3.8s" repeatCount="indefinite" path={`M50,50 L${item.x},${item.y}`} />
                </circle>
              )}
            </g>
          ))}
          <circle cx="50" cy="50" r="1.6" fill="var(--color-sage)" />
        </svg>
        <PersonButton
          name="Eleanor"
          sub="Home"
          photo="/photos/eleanor.jpg"
          x={50}
          y={50}
          selected={false}
          onSelect={() => setSelected("eleanor")}
        />
        {NODES.map((item) => (
          <PersonButton
            key={item.id}
            name={item.name}
            sub={item.sub}
            photo={item.photo}
            x={item.x}
            y={item.y}
            selected={item.id === selected}
            onSelect={() => setSelected(item.id)}
          />
        ))}
      </div>
      <div>
        <p className="text-sm text-cream/70">On the link right now</p>
        <h3 className="mt-2 font-display text-4xl leading-display text-cream">{node.payload}</h3>
        <p className="mt-4 max-w-md text-cream/80">{node.copy}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {node.role ? (
            <Button
              asChild
              tone="cream"
              onClick={() => setRole(node.role as Role)}
            >
              <Link to="/hub">Open the hub as {node.name}</Link>
            </Button>
          ) : (
            <Button asChild tone="cream">
              <Link to="/trust">See what an aide is allowed</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function PersonButton({
  name,
  sub,
  photo,
  x,
  y,
  selected,
  onSelect,
}: {
  name: string;
  sub: string;
  photo: string;
  x: number;
  y: number;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="absolute flex w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${x}%`, top: `${y}%` }}
      aria-pressed={selected}
    >
      <img
        src={photo}
        alt=""
        width={120}
        height={160}
        className={cn(
          "size-14 rounded-full object-cover",
          selected ? "ring-4 ring-sage" : "ring-2 ring-cream",
        )}
      />
      <span className="mt-1 rounded-full bg-ink px-2 py-1 text-xs text-cream">{name}</span>
      <span className="sr-only">{sub}</span>
    </button>
  );
}
