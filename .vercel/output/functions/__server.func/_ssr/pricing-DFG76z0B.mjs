import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./mark-Cc7RFuUm.mjs";
import { n as Shell, r as SiteShell, t as Button } from "./site-shell-CYq6NP5s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-DFG76z0B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLANS = [
	{
		id: "kin",
		name: "Kin",
		monthly: 24,
		who: "One parent, and the family text thread you are tired of being.",
		points: [
			"1 senior",
			"6 family seats",
			"Check-ins, doses, notes",
			"Vitals, read as a summary"
		]
	},
	{
		id: "household",
		name: "Household",
		monthly: 64,
		who: "When an aide already has a key, and a clinic should stop chasing paper.",
		points: [
			"Everything in Kin",
			"3 aide seats",
			"1 clinician guest",
			"Vitals against her own line"
		],
		featured: true
	},
	{
		id: "agency",
		name: "Agency",
		monthly: null,
		who: "Home-health teams with more than one living room to keep straight.",
		points: [
			"Many households",
			"Admin roles",
			"Audit export",
			"A BAA, on paper"
		]
	}
];
function PricingPage() {
	const [yearly, setYearly] = (0, import_react.useState)(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		className: "py-14 lg:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sage-deep",
				children: "Pricing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "max-w-2xl font-display text-5xl leading-display sm:text-6xl",
					children: "Pay for the household, not the panic."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "radiogroup",
					"aria-label": "Billing",
					className: "flex rounded-full border border-line bg-cream p-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillButton, {
						on: yearly,
						onClick: () => setYearly(true),
						label: "Yearly",
						hint: "two months kept"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BillButton, {
						on: !yearly,
						onClick: () => setYearly(false),
						label: "Monthly",
						hint: "cancel whenever"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 lg:grid-cols-3",
				children: PLANS.map((plan) => {
					const price = plan.monthly === null ? null : yearly ? Math.round(plan.monthly * 10 / 12) : plan.monthly;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: cn("flex flex-col rounded-3xl border p-6", plan.id === "household" ? "border-sage bg-foam" : "border-line bg-cream"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 min-h-16 text-sm text-ink-soft",
								children: plan.who
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 font-display text-5xl tabular-nums leading-display",
								children: [price === null ? "Talk" : `$${price}`, price !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-base text-ink-soft",
									children: " /mo"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: price === null ? "For practices and agencies." : yearly ? `$${plan.monthly * 10} billed yearly` : "Billed monthly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 flex flex-1 flex-col gap-2 text-sm",
								children: plan.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "border-t border-line py-2",
									children: point
								}, point))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								tone: plan.id === "household" ? "sage" : "ink",
								className: "mt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/hub",
									children: plan.monthly === null ? "See the record first" : "Try the sample hub"
								})
							})
						]
					}, plan.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl text-sm text-ink-soft",
				children: "This preview does not bill anyone and does not open an account. The numbers are the offer; Eleanor’s Tuesday is the product you can actually touch."
			})
		]
	}) });
}
function BillButton({ on, onClick, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		role: "radio",
		"aria-checked": on,
		onClick,
		className: cn("min-h-12 rounded-full px-4 py-2 text-left", on ? "bg-ink text-cream" : "text-ink"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("block text-xs", on ? "text-cream/75" : "text-ink-soft"),
			children: hint
		})]
	});
}
var SplitComponent = PricingPage;
//#endregion
export { SplitComponent as component };
