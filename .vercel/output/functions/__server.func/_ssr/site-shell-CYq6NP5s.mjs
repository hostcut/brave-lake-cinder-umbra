import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as cn, t as Wordmark } from "./mark-Cc7RFuUm.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-CYq6NP5s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,background-color,color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage", {
	variants: {
		tone: {
			sage: "bg-sage text-cream hover:bg-sage-deep",
			ink: "bg-ink text-cream hover:bg-ink-soft",
			cream: "border border-line bg-cream text-ink hover:border-ink",
			quiet: "bg-transparent text-ink hover:bg-cream",
			clay: "bg-clay text-cream hover:bg-ink"
		},
		size: {
			sm: "h-11 px-4 text-sm",
			md: "h-12 px-5 text-base",
			lg: "h-14 px-6 text-lg"
		}
	},
	defaultVariants: {
		tone: "sage",
		size: "md"
	}
});
function Button({ asChild, tone, size, className, type = "button", ...props }) {
	const classes = cn(styles({
		tone,
		size
	}), className);
	if (asChild) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
		className: classes,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: classes,
		...props
	});
}
var LINKS = [
	{
		to: "/product",
		label: "Product"
	},
	{
		to: "/hub",
		label: "Care Hub"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/trust",
		label: "Trust"
	}
];
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-cream",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Primary",
					children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
						to: link.to,
						label: link.label
					}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/hub",
							children: "Open the hub"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hub",
						className: "h-11 rounded-full bg-sage px-4 py-3 text-sm text-cream",
						children: "Hub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center rounded-full border border-line",
						"aria-expanded": open,
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-line px-5 py-3 md:hidden",
			"aria-label": "Mobile",
			children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				className: "flex h-12 items-center text-lg",
				children: link.label
			}, link.to))
		})]
	});
}
function NavLink({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "text-sm text-ink-soft",
		activeProps: { className: "text-sm text-ink" },
		children: label
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-ink-soft",
				children: "Haven is the house. Link is the thread between a clinic, an aide, and a daughter — the part that usually slips."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2 text-sm",
				children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: "h-11 text-ink-soft hover:text-ink",
					children: link.label
				}, link.to))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-5 py-4 text-sm text-ink-soft",
				children: "Eleanor Hart is fictional. This preview keeps her Tuesday in your browser and does not provide medical care."
			})
		})]
	});
}
function Shell({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-5", className),
		children
	});
}
//#endregion
export { Shell as n, SiteShell as r, Button as t };
