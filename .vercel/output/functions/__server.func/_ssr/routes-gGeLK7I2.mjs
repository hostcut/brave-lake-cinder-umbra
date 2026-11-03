import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as TEAM, d as formatHour, m as useCare } from "./store-jKksTjNz.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useHousehold } from "./router-KJ_mg8sW.mjs";
import { n as cn } from "./mark-Cc7RFuUm.mjs";
import { a as useReducedMotion, i as SeniorSurface, n as DayScrub, r as PhoneFrame, t as DayRail } from "./senior-surface-BTFv6uBa.mjs";
import { n as roleLine, t as RoleSwitch } from "./role-switch-CM-hsM6o.mjs";
import { n as Shell, r as SiteShell, t as Button } from "./site-shell-CYq6NP5s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-gGeLK7I2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CENTER = {
	id: "eleanor",
	name: "Eleanor",
	sub: "Home",
	photo: "/photos/eleanor.jpg",
	x: 50,
	y: 50,
	payload: "The house, held",
	copy: "Eleanor does not manage a portal. She confirms she is alright, signs a dose, or asks for a person. Everyone else is a link back to this room.",
	role: "senior"
};
var NODES = [
	{
		id: "maya",
		name: "Maya",
		sub: "Daughter",
		photo: "/photos/maya.jpg",
		x: 24,
		y: 24,
		payload: "12:06pm · I'm okay",
		copy: "Maya gets the reassurance: settled or not, the open window, the note Priya left. She does not get the audit or a private clinic note.",
		role: "family"
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
		role: null
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
		role: "clinician"
	}
];
function Constellation() {
	const [selected, setSelected] = (0, import_react.useState)("maya");
	const reduced = useReducedMotion();
	const setRole = useCare((state) => state.setRole);
	const node = selected === "eleanor" ? CENTER : NODES.find((item) => item.id === selected) ?? NODES[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-8 lg:grid-cols-[1fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto aspect-square w-full max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 100 100",
					className: "absolute inset-0 h-full w-full",
					"aria-hidden": true,
					children: [NODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "50",
						y1: "50",
						x2: item.x,
						y2: item.y,
						stroke: "var(--color-cream)",
						strokeWidth: "0.35",
						strokeOpacity: item.id === selected ? .95 : .28
					}), reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: (50 + item.x) / 2,
						cy: (50 + item.y) / 2,
						r: "1.15",
						fill: "var(--color-clay)"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "1.15",
						fill: "var(--color-clay)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateMotion", {
							dur: "3.8s",
							repeatCount: "indefinite",
							path: `M50,50 L${item.x},${item.y}`
						})
					})] }, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "50",
						cy: "50",
						r: "1.6",
						fill: "var(--color-sage)"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonButton, {
					name: "Eleanor",
					sub: "Home",
					photo: "/photos/eleanor.jpg",
					x: 50,
					y: 50,
					selected: false,
					onSelect: () => setSelected("eleanor")
				}),
				NODES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersonButton, {
					name: item.name,
					sub: item.sub,
					photo: item.photo,
					x: item.x,
					y: item.y,
					selected: item.id === selected,
					onSelect: () => setSelected(item.id)
				}, item.id))
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-cream/70",
				children: "On the link right now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-2 font-display text-4xl leading-display text-cream",
				children: node.payload
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-cream/80",
				children: node.copy
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: node.role ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					tone: "cream",
					onClick: () => setRole(node.role),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/hub",
						children: ["Open the hub as ", node.name]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					tone: "cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/trust",
						children: "See what an aide is allowed"
					})
				})
			})
		] })]
	});
}
function PersonButton({ name, sub, photo, x, y, selected, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: "absolute flex w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center",
		style: {
			left: `${x}%`,
			top: `${y}%`
		},
		"aria-pressed": selected,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo,
				alt: "",
				width: 120,
				height: 160,
				className: cn("size-14 rounded-full object-cover", selected ? "ring-4 ring-sage" : "ring-2 ring-cream")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 rounded-full bg-ink px-2 py-1 text-xs text-cream",
				children: name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: sub
			})
		]
	});
}
function HeroStage() {
	const reduced = useReducedMotion();
	const frame = (0, import_react.useRef)(null);
	const [tilt, setTilt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const home = useHousehold();
	const setMed = useCare((state) => state.setMed);
	const ack = useCare((state) => state.ack);
	const next = home.meds.find((med) => med.state === "due" || med.state === "late") ?? home.meds.find((med) => med.state === "later");
	const alert = home.alerts[0];
	const move = (event) => {
		if (reduced || !frame.current) return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const rect = frame.current.getBoundingClientRect();
		const px = (event.clientX - rect.left) / rect.width - .5;
		const py = (event.clientY - rect.top) / rect.height - .5;
		setTilt({
			x: py * -5,
			y: px * 6
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "[perspective:1200px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: frame,
			onPointerMove: move,
			onPointerLeave: () => setTilt({
				x: 0,
				y: 0
			}),
			className: "transition-transform duration-200 ease-out",
			style: { transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
				className: "overflow-hidden rounded-3xl border border-line bg-cream shadow-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-[9.5rem_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/photos/eleanor.jpg",
						alt: "Eleanor Hart at her window in Laurelhurst",
						width: 1200,
						height: 1600,
						className: "h-52 w-full object-cover object-top sm:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 flex-col gap-4 p-4 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink-soft",
									children: "Hart household · sample"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl leading-display text-ink",
									children: home.title
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("mt-2 size-3 shrink-0 rounded-full", home.tone === "settled" ? "bg-sage pulse-dot" : "bg-clay"),
									"aria-hidden": true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink-soft",
								children: home.lede
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "grid grid-cols-4 gap-2",
								children: home.checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("mb-1 h-1.5 rounded-full", check.state === "done" && "bg-sage", check.state === "due" && "bg-clay", check.state === "missed" && "bg-clay", check.state === "upcoming" && "bg-line") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs text-ink-soft",
										children: check.name
									})]
								}, check.id))
							}),
							next && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "truncate text-sm text-ink",
										children: [
											next.name,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink-soft",
												children: next.dose
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tabular-nums text-ink-soft",
										children: formatHour(next.hour)
									})]
								}), next.state !== "later" && next.state !== "taken" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setMed(next.id, true),
									className: "h-11 shrink-0 rounded-full bg-sage px-4 text-sm text-cream",
									children: "Sign"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-ink-soft",
									children: next.state === "taken" ? "Signed" : "Later"
								})]
							}),
							alert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("rounded-2xl px-3 py-3", alert.tone === "needs" ? "bg-clay-soft" : "bg-paper"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-ink",
									children: alert.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => ack(alert.id),
									className: "mt-2 h-11 text-sm text-sage-deep",
									children: alert.id === "help" ? "I'm calling her" : "Noted — clear it"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayScrub, { id: "hero-clock" })
						]
					})]
				})
			})
		})
	});
}
var FAQ = [
	{
		q: "Is this a medical device?",
		a: "No. Havenlink keeps the people and the record in one place. It does not diagnose, and it is not an emergency service. Eleanor Hart, on this site, is a fiction you can push around."
	},
	{
		q: "What does a daughter see that a doctor does not?",
		a: "Maya sees whether her mother is settled, the check-ins, and the family thread. Dr. Okonkwo sees the dose record, the trend against Eleanor's own line, and the audit. They share the house. They do not share every sentence."
	},
	{
		q: "What if she will not learn another app?",
		a: "Then the app is three large buttons, or Priya signs the morning for her. The point is a tap she can make half-asleep, not a portal."
	},
	{
		q: "Where does this preview keep data?",
		a: "In your browser, on this device. Reset Tuesday throws it out. Nothing here is a real chart, and nothing is sent to a clinic."
	}
];
function HomePage() {
	const role = useCare((state) => state.role);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "graph-paper relative overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "grid items-center gap-10 py-14 lg:grid-cols-12 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise text-sm text-sage-deep",
							children: "Care, without the crisis desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "rise rise-2 mt-3 font-display text-5xl leading-display text-ink sm:text-6xl",
							children: "Never wonder if mom is okay again."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise rise-3 mt-5 max-w-md text-lg text-ink-soft",
							children: "Havenlink is one Tuesday for the parent at home, the family across town, and the people who are paid to notice. Check-ins, doses, and the thread between them."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleSwitch, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-ink-soft",
								children: roleLine(role)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/hub",
									children: "Open the Care Hub"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								tone: "cream",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product",
									children: "See a Tuesday"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: role === "senior" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeniorSurface, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayScrub, { id: "home-senior-clock" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStage, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "grid gap-6 py-10 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pitch, {
						kicker: "The house",
						title: "She stays home.",
						body: "Aging in place, with the chair and the afternoon light still hers. Not a facility by default."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pitch, {
						kicker: "The link",
						title: "Nothing slips.",
						body: "The dose Priya signed, the check-in Eleanor tapped, the pattern the clinic should see before Thursday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pitch, {
						kicker: "The quiet",
						title: "Alerts earn it.",
						body: "A missed window or a hand raised. Not a feed that makes a calm day feel like a shift."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "py-16 lg:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-cream/70",
							children: "The link, moving"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl leading-display sm:text-5xl",
							children: "One house. Three ways of seeing it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-cream/80",
							children: "Tap a person. A note is already on its way between them — the check-in, the signature, the number that left her usual line."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "graph-dark mt-10 rounded-3xl p-4 sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Constellation, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
			className: "py-16 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-sage-deep",
						children: "The same Tuesday as the hub"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl leading-display sm:text-5xl",
						children: "Drag the day. It answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink-soft",
						children: "Morning doses sign themselves when Priya arrives at 9. The afternoon window opens at 3. Scrub backward and the house rewinds. Anything you change is waiting in the Care Hub."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayScrub, { id: "home-clock" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayRail, {})
				})]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/haven.jpg",
					alt: "The Laurelhurst living room — oak, linen, and afternoon light",
					width: 1792,
					height: 1008,
					className: "h-72 w-full object-cover lg:h-full"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center bg-ink px-6 py-12 text-cream lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl leading-display sm:text-4xl",
						children: "She still has the chair, the radio, and the long patch of sun. The care team just stopped losing the thread."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-cream/75",
						children: "Haven is that room. Link is everyone who should know it is still a good afternoon."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
			className: "py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-4xl leading-display",
				children: "The people on the record"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: TEAM.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-3xl border border-line bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.photo,
						alt: "",
						width: 1200,
						height: 1600,
						className: "aspect-[3/4] w-full object-cover object-top"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl",
							children: person.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink-soft",
							children: person.role
						})]
					})]
				}, person.id))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-display",
						children: "Plain questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink-soft",
						children: "Before the pricing, the things families actually ask."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trust",
							children: "Read the trust notes"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group border-b border-line py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 font-medium",
						children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl text-ink-soft transition-transform group-open:rotate-45",
							"aria-hidden": true,
							children: "+"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pb-4 text-ink-soft",
						children: item.a
					})]
				}, item.q)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-sage-deep text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "flex flex-col items-start gap-6 py-16 lg:flex-row lg:items-end lg:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl leading-display sm:text-5xl",
						children: "Open Eleanor’s Tuesday."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-cream/80",
						children: "Sign a dose. Send a check-in. Switch seats and watch who is allowed to see it."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					tone: "cream",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/hub",
						children: "Enter the Care Hub"
					})
				})]
			})
		})
	] });
}
function Pitch({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-sage-deep",
			children: kicker
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-3xl leading-display",
			children: title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-ink-soft",
			children: body
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
