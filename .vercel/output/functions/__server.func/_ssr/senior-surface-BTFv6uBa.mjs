import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { c as dayBeats, d as formatHour, f as greeting, m as useCare, u as formatClock } from "./store-jKksTjNz.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHousehold } from "./router-KJ_mg8sW.mjs";
import { n as cn } from "./mark-Cc7RFuUm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/senior-surface-BTFv6uBa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DayScrub({ id = "tuesday" }) {
	const hour = useCare((state) => state.hour);
	const setHour = useCare((state) => state.setHour);
	const progress = (hour - 6) / 15 * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-ink-soft",
				children: "6am"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-ink",
				children: ["Demo clock · ", formatHour(hour)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-ink-soft",
				children: "9pm"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id,
		className: "day-range",
		type: "range",
		min: 6,
		max: 21,
		step: 1,
		value: hour,
		"aria-label": "Move through Eleanor's Tuesday",
		"aria-valuetext": formatHour(hour),
		style: { ["--p"]: `${progress}%` },
		onChange: (event) => setHour(Number(event.target.value))
	})] });
}
function DayRail() {
	const hour = useCare((state) => state.hour);
	const setHour = useCare((state) => state.setHour);
	const home = useHousehold();
	const beats = dayBeats(hour, home);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
		children: beats.map((beat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setHour(beat.hour),
			"aria-pressed": beat.phase === "now",
			className: cn("flex h-full min-h-28 w-full flex-col items-start gap-1 rounded-2xl border px-3 py-3 text-left transition-colors", beat.phase === "now" ? "border-sage bg-foam" : "border-line bg-cream hover:border-ink"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm tabular-nums text-ink-soft",
					children: formatClock(beat.hour)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg text-ink",
					children: beat.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-sm", beat.phase === "ahead" ? "text-ink-soft" : "text-ink"),
					children: beat.detail
				})
			]
		}) }, beat.title))
	});
}
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const sync = () => setReduced(mq.matches);
		sync();
		mq.addEventListener("change", sync);
		return () => mq.removeEventListener("change", sync);
	}, []);
	return reduced;
}
var HOLD_MS = 850;
function HoldButton({ label, hint, tone, disabled, onComplete }) {
	const reduced = useReducedMotion();
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [holding, setHolding] = (0, import_react.useState)(false);
	const frame = (0, import_react.useRef)(null);
	const stop = () => {
		if (frame.current !== null) cancelAnimationFrame(frame.current);
		frame.current = null;
		setHolding(false);
		setProgress(0);
	};
	const start = (element, pointerId) => {
		if (disabled) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		element.setPointerCapture(pointerId);
		const began = performance.now();
		setHolding(true);
		const tick = (now) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onPointerDown: (event) => start(event.currentTarget, event.pointerId),
		onPointerUp: (event) => {
			const reducedNow = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const finished = progress >= 1;
			stop();
			if (reducedNow && !finished && !disabled) onComplete();
			event.preventDefault();
		},
		onPointerCancel: stop,
		onKeyDown: (event) => {
			if (disabled) return;
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				onComplete();
			}
		},
		className: cn("relative flex min-h-24 w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-left transition-transform duration-150 active:not-disabled:scale-[0.96] disabled:opacity-50", tone === "sage" && "bg-sage text-cream", tone === "clay" && "bg-clay text-cream", tone === "cream" && "border border-line bg-cream text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-display text-2xl leading-display",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 block text-sm", tone === "cream" ? "text-ink-soft" : "text-cream/80"),
				children: reduced ? hint : holding ? "Keep holding" : hint
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-3 flex h-5 items-end gap-1",
				"aria-hidden": true,
				children: [
					0,
					1,
					2,
					3,
					4
				].map((bar) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("w-1 rounded-full", holding && !reduced ? "wave h-5" : "h-1.5"),
					style: {
						background: tone === "cream" ? "var(--color-sage)" : "var(--color-cream)",
						animationDelay: `${bar * 80}ms`
					}
				}, bar))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 36 36",
			className: "size-11 shrink-0",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "18",
				r: "15",
				fill: "none",
				stroke: track,
				strokeWidth: "2.5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18",
				cy: "18",
				r: "15",
				fill: "none",
				stroke: ring,
				strokeWidth: "2.5",
				strokeLinecap: "round",
				strokeDasharray: 94,
				strokeDashoffset: 94 * (1 - progress),
				transform: "rotate(-90 18 18)"
			})]
		})]
	});
}
function PhoneFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-sm rounded-3xl border-8 border-ink bg-ink shadow-lift",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-2xl bg-paper px-3 py-4",
			children
		})
	});
}
function SeniorSurface() {
	const hour = useCare((state) => state.hour);
	const last = useCare((state) => state.lastAction);
	const imOk = useCare((state) => state.imOk);
	const takeNext = useCare((state) => state.takeNext);
	const askHelp = useCare((state) => state.askHelp);
	const open = useHousehold().checks.find((check) => check.state === "due" || check.state === "missed");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: "Laurelhurst · Tuesday"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl leading-display text-ink",
					children: [greeting(hour), ", Eleanor."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-ink-soft",
					children: "Maya can see this. So can Priya. That is the whole point."
				})
			] }),
			last && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: last.kind === "help" ? "rounded-2xl bg-clay-soft px-4 py-3 text-sm text-ink" : "rounded-2xl bg-foam px-4 py-3 text-sm text-sage-deep",
				children: last.text
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
				label: "I'm okay",
				hint: open ? `Sends the ${open.name.toLowerCase()} check-in` : "No window is open",
				tone: "sage",
				disabled: !open,
				onComplete: imOk
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
				label: "I took my medicine",
				hint: "Signs the next dose on today's list",
				tone: "cream",
				onComplete: takeNext
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
				label: "I need a hand",
				hint: "Calls the circle — not emergency services",
				tone: "clay",
				onComplete: askHelp
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink-soft",
				children: "If this is an emergency, call 911. Havenlink tells the people who already love you. It does not watch the house for you."
			})
		]
	});
}
//#endregion
export { useReducedMotion as a, SeniorSurface as i, DayScrub as n, PhoneFrame as r, DayRail as t };
