import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { m as useCare, n as GRANT_LABEL, r as LANES, t as ACCESS } from "./store-jKksTjNz.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./mark-Cc7RFuUm.mjs";
import { n as Shell, r as SiteShell } from "./site-shell-CYq6NP5s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trust-YFvzf3MP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SEATS = [
	{
		id: "family",
		name: "Maya",
		seat: "Daughter",
		line: "Settled or not, the open window, the family thread. Not the audit."
	},
	{
		id: "aide",
		name: "Priya",
		seat: "Aide",
		line: "The doses she gave and the check-ins she witnessed. Not the family’s private notes."
	},
	{
		id: "clinician",
		name: "Amara",
		seat: "Physician",
		line: "The trend, the signatures, the clinical note, and who changed any of it."
	},
	{
		id: "senior",
		name: "Eleanor",
		seat: "At home",
		line: "Three buttons and a short echo of the people who wrote back."
	}
];
function TrustPage() {
	const [seat, setSeat] = (0, import_react.useState)("family");
	const log = useCare((state) => state.log);
	const person = SEATS.find((item) => item.id === seat) ?? SEATS[0];
	const grants = ACCESS[seat];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
			className: "py-14 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-sage-deep",
					children: "Trust"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-3xl font-display text-5xl leading-display sm:text-6xl",
					children: "The record is shared. The view is not."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-ink-soft",
					children: "Havenlink is built so a daughter can exhale without reading a chart, and a physician can trust a dose without joining a family text. Access, audit, and encryption are the architecture — not a sticker."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-display",
						children: "Tap a seat."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 max-w-2xl text-ink-soft",
						children: [
							person.name,
							" is looking. ",
							person.line
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
						children: SEATS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": seat === item.id,
							onClick: () => setSeat(item.id),
							className: cn("min-h-24 rounded-2xl border px-4 py-4 text-left", seat === item.id ? "border-sage bg-foam" : "border-line bg-paper"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-2xl",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-ink-soft",
								children: item.seat
							})]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-2 sm:grid-cols-2",
						children: LANES.map((lane) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lane, {
							label: lane.label,
							grant: grants[lane.id]
						}, lane.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
			className: "grid gap-10 py-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl leading-display",
				children: "What we mean by careful"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "Encryption in transit and at rest",
						body: "Designed in for a real deployment. This preview never leaves your browser, and it only holds a story."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "Seats, not a shared password",
						body: "Family, aide, clinician, senior. Each one opens a different depth of the same Tuesday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "An audit the clinic can read",
						body: "Who signed, who cleared, who acknowledged. Family does not need that list to sleep."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "No market for the record",
						body: "Care data is not a product we sell. The subscription is the business."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "Not a badge that says HIPAA",
						body: "HIPAA does not certify apps. A clinical customer gets access limits, an audit, and a BAA. This marketing preview is not a covered service."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Point, {
						title: "Not 911",
						body: "I need a hand reaches Maya. It does not dispatch an ambulance. Emergencies are still emergencies."
					})
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Sample audit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft",
					children: "This is the clinician’s list for the fictional Hart household, including whatever you just did in the hub. On Maya’s screen it stays closed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 flex flex-col gap-3",
					children: log.slice(0, 8).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl border border-line bg-cream px-4 py-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-ink-soft",
							children: item.timeLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-1 block text-ink",
							children: [
								item.actor,
								". ",
								item.text
							]
						})]
					}, item.id))
				})
			] })]
		}) })
	] });
}
function Lane({ label, grant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("flex items-center justify-between rounded-2xl border px-4 py-3", grant === "open" && "border-sage bg-foam text-sage-deep", grant === "summary" && "border-line bg-paper text-ink", grant === "closed" && "border-line bg-cream text-ink-soft"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: GRANT_LABEL[grant]
		})]
	});
}
var SplitComponent = TrustPage;
//#endregion
export { SplitComponent as component };
