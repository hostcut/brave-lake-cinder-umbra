import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mark-Cc7RFuUm.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className, tone = "sage" }) {
	const fill = tone === "sage" ? "var(--color-sage)" : "var(--color-cream)";
	const ink = tone === "sage" ? "var(--color-cream)" : "var(--color-sage)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "9",
				fill
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M7.5 21c1.4-6 4.6-8.5 8.5-8.5S23.1 15 24.5 21",
				fill: "none",
				stroke: ink,
				strokeWidth: "1.8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "12.2",
				r: "1.7",
				fill: ink
			})
		]
	});
}
function Wordmark({ tone = "ink" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: cn("flex items-center gap-2 rounded-full", tone === "cream" ? "text-cream" : "text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "size-8",
			tone: tone === "cream" ? "cream" : "sage"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl tracking-tight",
			children: "Havenlink"
		})]
	});
}
//#endregion
export { cn as n, Wordmark as t };
