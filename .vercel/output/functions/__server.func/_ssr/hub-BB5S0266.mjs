import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { a as TEAM, d as formatHour, m as useCare, n as GRANT_LABEL, o as VITALS, p as pressureLine, r as LANES, s as actorName, t as ACCESS, u as formatClock } from "./store-jKksTjNz.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MessageCircle, c as ClipboardList, i as Pill, l as Bell, n as Users, s as House, u as Activity } from "../_libs/lucide-react.mjs";
import { n as useHousehold } from "./router-KJ_mg8sW.mjs";
import { n as cn, t as Wordmark } from "./mark-Cc7RFuUm.mjs";
import { i as SeniorSurface, n as DayScrub, t as DayRail } from "./senior-surface-BTFv6uBa.mjs";
import { n as roleLine, t as RoleSwitch } from "./role-switch-CM-hsM6o.mjs";
import { a as CartesianGrid, c as Tooltip, i as Line, n as YAxis, o as ReferenceLine, r as XAxis, s as ResponsiveContainer, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hub-BB5S0266.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MED_LABEL = {
	taken: "Signed",
	due: "Due now",
	late: "Still open",
	later: "Later"
};
var CHECK_LABEL = {
	done: "In",
	due: "Open now",
	missed: "Missed",
	upcoming: "Later"
};
function MedList() {
	const { meds } = useHousehold();
	const setMed = useCare((state) => state.setMed);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-2",
		children: meds.map((med) => {
			const signed = med.state === "taken";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-3 rounded-2xl border border-line bg-cream px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium text-ink",
						children: [
							med.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-normal text-ink-soft",
								children: med.dose
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: formatHour(med.hour)
							}),
							" · ",
							MED_LABEL[med.state]
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMed(med.id, !signed),
					className: cn("h-11 shrink-0 rounded-full px-4 text-sm transition-transform active:scale-[0.96]", signed ? "border border-line bg-paper text-ink" : "bg-sage text-cream"),
					children: signed ? "Undo" : "Sign"
				})]
			}, med.id);
		})
	});
}
function CheckList() {
	const { checks } = useHousehold();
	const setCheck = useCare((state) => state.setCheck);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-3 sm:grid-cols-2",
		children: checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex flex-col rounded-2xl border border-line bg-cream p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-ink",
						children: check.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm tabular-nums text-ink-soft",
						children: [
							formatClock(check.opens),
							"–",
							formatClock(check.closes)
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink-soft",
					children: check.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-ink",
					children: CHECK_LABEL[check.state]
				}),
				check.state !== "upcoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCheck(check.id, check.state !== "done"),
					className: "mt-3 h-11 self-start rounded-full bg-sage px-4 text-sm text-cream active:scale-[0.96]",
					children: check.state === "done" ? "Clear" : "Log I'm okay"
				})
			]
		}, check.id))
	});
}
function AlertsBlock() {
	const { alerts } = useHousehold();
	const ack = useCare((state) => state.ack);
	const setCheck = useCare((state) => state.setCheck);
	if (alerts.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl border border-line bg-foam px-4 py-4 text-sage-deep",
		children: "Nothing is asking for you. That is the product working."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "flex flex-col gap-3",
		children: alerts.map((alert) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: cn("rounded-2xl border px-4 py-4", alert.tone === "needs" ? "border-clay bg-clay-soft" : "border-line bg-cream"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl text-ink",
					children: alert.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-ink-soft",
					children: alert.detail
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [alert.id.startsWith("miss-") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCheck(alert.id.slice(5), true),
						className: "h-11 rounded-full bg-sage px-4 text-sm text-cream",
						children: "Log it now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => ack(alert.id),
						className: "h-11 rounded-full border border-line bg-cream px-4 text-sm text-ink",
						children: alert.id === "help" ? "I'm calling her" : "Noted"
					})]
				})
			]
		}, alert.id))
	});
}
function VitalsChart() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const [mode, setMode] = (0, import_react.useState)("pressure");
	(0, import_react.useEffect)(() => setReady(true), []);
	const { today, avg, delta } = pressureLine();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl border border-line bg-cream p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink-soft",
						children: "This morning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl tabular-nums leading-display text-ink",
						children: mode === "pressure" ? `${today.sys}/${today.dia}` : today.pulse
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-md text-sm text-ink-soft",
						children: mode === "pressure" ? `${delta} above her line of ${avg}. Pulse held at ${today.pulse}.` : "Pulse stayed in her usual band while pressure ran high."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex rounded-full border border-line bg-paper p-1",
					children: ["pressure", "pulse"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": mode === item,
						onClick: () => setMode(item),
						className: cn("h-11 rounded-full px-4 text-sm capitalize", mode === item ? "bg-ink text-cream" : "text-ink-soft"),
						children: item
					}, item))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-56 w-full min-w-0",
				children: ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: [...VITALS],
						margin: {
							top: 12,
							right: 8,
							left: 0,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-line)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tick: {
									fill: "var(--color-ink-soft)",
									fontSize: 12
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								domain: mode === "pressure" ? [60, 170] : [50, 100],
								width: 36,
								tick: {
									fill: "var(--color-ink-soft)",
									fontSize: 12
								},
								axisLine: false,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "var(--color-cream)",
								border: "1px solid var(--color-line)",
								borderRadius: 12,
								color: "var(--color-ink)"
							} }),
							mode === "pressure" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
									y: avg,
									stroke: "var(--color-clay)",
									strokeDasharray: "4 4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "sys",
									name: "Systolic",
									stroke: "var(--color-sage)",
									strokeWidth: 2.5,
									dot: false
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "dia",
									name: "Diastolic",
									stroke: "var(--color-ink)",
									strokeWidth: 2,
									dot: false
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "pulse",
								name: "Pulse",
								stroke: "var(--color-sage)",
								strokeWidth: 2.5,
								dot: false
							})
						]
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full rounded-2xl bg-paper" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-ink-soft",
				children: "Weight 147.6 lb, down half a pound in two weeks — not a flag on its own."
			})
		]
	});
}
var SECTIONS = [
	{
		id: "today",
		label: "Today",
		icon: House
	},
	{
		id: "meds",
		label: "Medications",
		icon: Pill
	},
	{
		id: "vitals",
		label: "Vitals",
		icon: Activity
	},
	{
		id: "checkins",
		label: "Check-ins",
		icon: ClipboardList
	},
	{
		id: "alerts",
		label: "Alerts",
		icon: Bell
	},
	{
		id: "messages",
		label: "Notes",
		icon: MessageCircle
	},
	{
		id: "team",
		label: "Circle",
		icon: Users
	}
];
function CareHub() {
	const role = useCare((state) => state.role);
	const section = useCare((state) => state.section);
	const setSection = useCare((state) => state.setSection);
	const reset = useCare((state) => state.resetTuesday);
	const home = useHousehold();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm text-ink-soft hover:text-ink lg:hidden",
							children: "Site"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleSwitch, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: reset,
							className: "h-11 text-left text-sm text-ink-soft hover:text-ink",
							children: "Reset Tuesday"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-6xl px-5 pt-4 text-sm text-ink-soft",
				children: [roleLine(role), " Fictional household."]
			}),
			role === "senior" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto flex max-w-xl flex-col gap-8 px-5 py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeniorSurface, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayScrub, { id: "hub-senior-clock" })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl lg:grid-cols-[13.5rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex min-w-0 gap-2 overflow-x-auto px-5 py-4 lg:flex-col lg:overflow-visible lg:px-5",
					"aria-label": "Hub",
					children: SECTIONS.map((item) => {
						const Icon = item.icon;
						const on = section === item.id;
						const count = item.id === "alerts" ? home.alerts.length : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSection(item.id),
							"aria-current": on ? "page" : void 0,
							className: cn("flex h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm", on ? "bg-ink text-cream" : "bg-cream text-ink hover:border-ink"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									"aria-hidden": true
								}),
								item.label,
								count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("tabular-nums", on ? "text-cream" : "text-clay"),
									children: count
								})
							]
						}, item.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 px-5 pb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { section }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-3xl border border-line bg-cream p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-1 text-sm text-ink-soft",
							children: "Drag Tuesday. Morning signatures rewind. The afternoon window opens at 3."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayScrub, { id: "hub-clock" })]
					})]
				})]
			})
		]
	});
}
function Panel({ section }) {
	if (section === "meds") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedsPanel, {});
	if (section === "vitals") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalsPanel, {});
	if (section === "checkins") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChecksPanel, {});
	if (section === "alerts") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsPanel, {});
	if (section === "messages") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesPanel, {});
	if (section === "team") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamPanel, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayPanel, {});
}
function TodayPanel() {
	const home = useHousehold();
	const role = useCare((state) => state.role);
	const log = useCare((state) => state.log);
	const visible = useCare((state) => state.notes).filter((note) => role === "clinician" ? true : note.audience === "circle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ink-soft",
					children: "Today · Hart household"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-display sm:text-5xl",
					children: home.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-ink-soft",
					children: home.lede
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Doses signed",
						value: `${home.signed}/${home.scheduled || 0}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Open alerts",
						value: String(home.alerts.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Check-ins in",
						value: String(home.checks.filter((check) => check.state === "done").length)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsBlock, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayRail, {}),
			visible[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-3xl border border-line bg-cream p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg text-ink",
					children: [
						"“",
						visible[0].body,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-2 text-sm text-ink-soft",
					children: [
						visible[0].from,
						" · ",
						visible[0].timeLabel,
						visible[0].audience === "clinical" ? " · clinical" : ""
					]
				})]
			}),
			role === "clinician" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl",
					children: "Audit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-ink-soft",
					children: "Maya never sees this list. It is the clinical seat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-2",
					children: log.slice(0, 6).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[5.5rem_1fr] gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-ink-soft",
							children: item.timeLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-ink",
								children: [item.actor, "."]
							}),
							" ",
							item.text
						] })]
					}, item.id))
				})
			] })
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-cream px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl tabular-nums",
			children: value
		})]
	});
}
function MedsPanel() {
	const { signed, scheduled, meds } = useHousehold();
	const role = useCare((state) => state.role);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "Medications"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-xl text-ink-soft",
				children: [
					signed,
					" of ",
					scheduled,
					" doses that should already have happened are signed.",
					role === "family" ? " You see the list. The clinic sees who signed it." : " The audit keeps the signature."
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MedList, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ink-soft",
				children: [meds.filter((med) => med.state === "later").length, " still later today."]
			})
		]
	});
}
function VitalsPanel() {
	const role = useCare((state) => state.role);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: "Vitals"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 max-w-xl text-ink-soft",
			children: ["Compared with Eleanor, not with a stranger her age. The dashed line is her own two-week systolic average.", role === "clinician" ? " Worth a line in Thursday's note, not a midnight page." : ""]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VitalsChart, {})]
	});
}
function ChecksPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: "Check-ins"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-ink-soft",
			children: "Four windows. A tap from Eleanor, or a line from Priya, closes one. Miss the window and the circle hears it before it becomes a story."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {})]
	});
}
function AlertsPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl",
			children: "Alerts"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-ink-soft",
			children: "Quiet on purpose. A pattern, a missed window, a hand raised. Not a feed built to feel busy."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertsBlock, {})]
	});
}
function NotesPanel() {
	const role = useCare((state) => state.role);
	const notes = useCare((state) => state.notes);
	const send = useCare((state) => state.sendNote);
	const [draft, setDraft] = (0, import_react.useState)("");
	const visible = notes.filter((note) => role === "clinician" ? true : note.audience === "circle");
	const clinical = role === "clinician";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: clinical ? "Notes" : "Family thread"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-ink-soft",
				children: clinical ? "A clinical note stays off Maya's thread. You can still read what the family wrote." : "What Maya, Eleanor, and Priya can all stand to read. The clinic's private note is not here."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-3xl border border-line bg-cream p-4",
				onSubmit: (event) => {
					event.preventDefault();
					send(draft);
					setDraft("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "note",
						className: "text-sm text-ink-soft",
						children: clinical ? `Note as ${actorName(role)}` : "A note for the circle"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "note",
						value: draft,
						maxLength: 280,
						onChange: (event) => setDraft(event.target.value),
						placeholder: clinical ? "Threshold noted. Recheck Thursday. No page tonight." : "Off the train at 5. Calling then.",
						className: "mt-2 min-h-24 w-full resize-y rounded-2xl border border-line bg-paper px-3 py-3 text-ink outline-none focus:border-sage"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-3 h-11 rounded-full bg-sage px-5 text-sm text-cream disabled:opacity-50",
						disabled: !draft.trim(),
						children: clinical ? "Save clinical note" : "Send to the circle"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: visible.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-cream px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink",
						children: note.body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: [
							note.from,
							" · ",
							note.timeLabel,
							note.audience === "clinical" ? " · clinical, hidden from family" : ""
						]
					})]
				}, note.id))
			})
		]
	});
}
function TeamPanel() {
	const role = useCare((state) => state.role);
	const grants = ACCESS[role];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6 pt-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "The circle"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-ink-soft",
				children: "Four people, one house. What you can see depends on the seat you are sitting in."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2",
				children: TEAM.map((person) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-3xl border border-line bg-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: person.photo,
						alt: "",
						width: 1200,
						height: 1600,
						className: "aspect-[4/3] w-full object-cover object-top"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl",
								children: person.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-ink-soft",
								children: person.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink",
								children: person.blurb
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: person.place
							})
						]
					})]
				}, person.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl",
				children: "Your seat"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-2 sm:grid-cols-2",
				children: LANES.map((lane) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-2xl border border-line bg-cream px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: lane.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink-soft",
						children: GRANT_LABEL[grants[lane.id]]
					})]
				}, lane.id))
			})] })
		]
	});
}
var SplitComponent = CareHub;
//#endregion
export { SplitComponent as component };
