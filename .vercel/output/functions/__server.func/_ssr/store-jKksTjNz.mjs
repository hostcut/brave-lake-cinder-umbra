import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-jKksTjNz.js
var MORNING = /* @__PURE__ */ new Set([
	"lisinopril",
	"metformin-am",
	"vitd"
]);
var MEDS = [
	{
		id: "lisinopril",
		name: "Lisinopril",
		dose: "10 mg",
		hour: 7,
		note: "Blood pressure. With water, before breakfast."
	},
	{
		id: "metformin-am",
		name: "Metformin",
		dose: "500 mg",
		hour: 8,
		note: "With breakfast."
	},
	{
		id: "vitd",
		name: "Vitamin D3",
		dose: "2,000 IU",
		hour: 8,
		note: "With the morning meal."
	},
	{
		id: "metformin-pm",
		name: "Metformin",
		dose: "500 mg",
		hour: 18,
		note: "With dinner."
	},
	{
		id: "aspirin",
		name: "Aspirin",
		dose: "81 mg",
		hour: 20,
		note: "Enteric coated. Not on an empty stomach."
	}
];
var CHECKS = [
	{
		id: "morning",
		name: "Morning",
		opens: 7,
		closes: 10,
		prompt: "How did the night go?"
	},
	{
		id: "midday",
		name: "Midday",
		opens: 11,
		closes: 14,
		prompt: "A plain I'm okay is enough."
	},
	{
		id: "afternoon",
		name: "Afternoon",
		opens: 15,
		closes: 18,
		prompt: "Before dinner, so the evening stays boring."
	},
	{
		id: "evening",
		name: "Evening",
		opens: 19,
		closes: 21,
		prompt: "So Maya can sleep."
	}
];
var VITALS = [
	{
		day: "Oct 27",
		sys: 128,
		dia: 76,
		pulse: 68
	},
	{
		day: "Oct 28",
		sys: 132,
		dia: 78,
		pulse: 71
	},
	{
		day: "Oct 29",
		sys: 127,
		dia: 74,
		pulse: 66
	},
	{
		day: "Oct 30",
		sys: 133,
		dia: 80,
		pulse: 72
	},
	{
		day: "Oct 31",
		sys: 129,
		dia: 77,
		pulse: 69
	},
	{
		day: "Nov 1",
		sys: 131,
		dia: 79,
		pulse: 70
	},
	{
		day: "Nov 2",
		sys: 130,
		dia: 76,
		pulse: 68
	},
	{
		day: "Today",
		sys: 148,
		dia: 82,
		pulse: 74
	}
];
var TEAM = [
	{
		id: "eleanor",
		name: "Eleanor Hart",
		role: "Aging at home",
		place: "Laurelhurst, Portland",
		photo: "/photos/eleanor.jpg",
		blurb: "82. Independent. The garden, the radio, and a firm opinion about soup."
	},
	{
		id: "maya",
		name: "Maya Hart",
		role: "Daughter · family lead",
		place: "22 minutes across town",
		photo: "/photos/maya.jpg",
		blurb: "Sees whether her mother is settled. Not the chart, not the audit."
	},
	{
		id: "priya",
		name: "Priya Shah",
		role: "Home health aide",
		place: "Tue · Thu · Sat mornings",
		photo: "/photos/priya.jpg",
		blurb: "Signs the morning doses, walks to the mailbox, writes the note people actually read."
	},
	{
		id: "amara",
		name: "Dr. Amara Okonkwo",
		role: "Primary care",
		place: "Laurelwood Clinic",
		photo: "/photos/amara.jpg",
		blurb: "Sees thresholds, the record, and who changed it. Thursday is the next visit."
	}
];
var ROLES = [
	{
		id: "family",
		label: "Family",
		line: "You are Maya. Reassurance, not the chart."
	},
	{
		id: "clinician",
		label: "Clinician",
		line: "You are Dr. Okonkwo. The record, and who touched it."
	},
	{
		id: "senior",
		label: "Senior",
		line: "You are Eleanor. Three buttons. That is the whole app."
	}
];
var LANES = [
	{
		id: "status",
		label: "How she is"
	},
	{
		id: "checkins",
		label: "Check-ins"
	},
	{
		id: "meds",
		label: "Medications"
	},
	{
		id: "vitals",
		label: "Vitals trend"
	},
	{
		id: "circle",
		label: "Family notes"
	},
	{
		id: "clinical",
		label: "Clinical notes"
	},
	{
		id: "audit",
		label: "Audit log"
	}
];
var ACCESS = {
	family: {
		status: "open",
		checkins: "open",
		meds: "summary",
		vitals: "summary",
		circle: "open",
		clinical: "closed",
		audit: "closed"
	},
	clinician: {
		status: "open",
		checkins: "open",
		meds: "open",
		vitals: "open",
		circle: "summary",
		clinical: "open",
		audit: "open"
	},
	senior: {
		status: "open",
		checkins: "open",
		meds: "summary",
		vitals: "closed",
		circle: "summary",
		clinical: "closed",
		audit: "closed"
	},
	aide: {
		status: "open",
		checkins: "open",
		meds: "open",
		vitals: "summary",
		circle: "closed",
		clinical: "closed",
		audit: "closed"
	}
};
var GRANT_LABEL = {
	open: "Open",
	summary: "Summary",
	closed: "Hidden"
};
var SEED_NOTES = [{
	id: "n-maya",
	from: "Maya Hart",
	speaker: "family",
	audience: "circle",
	body: "On the 4:40. I'll call when I'm off the train — no need to pick up.",
	timeLabel: "1:15pm"
}, {
	id: "n-priya",
	from: "Priya Shah",
	speaker: "aide",
	audience: "circle",
	body: "Bright this morning. Oatmeal, half a walk to the mailbox, no dizziness. Left the afternoon window for Eleanor.",
	timeLabel: "11:40am"
}];
var SEED_LOG = [
	{
		id: "l-flag",
		actor: "Havenlink",
		text: "Flagged systolic 148 against Eleanor's two-week line of 130.",
		timeLabel: "8:22am"
	},
	{
		id: "l-check",
		actor: "Eleanor Hart",
		text: "Midday check-in: I'm okay.",
		timeLabel: "12:06pm"
	},
	{
		id: "l-meds",
		actor: "Priya Shah",
		text: "Signed Lisinopril 10 mg, morning Metformin, and vitamin D.",
		timeLabel: "8:04am"
	}
];
function formatHour(hour) {
	const suffix = hour >= 12 ? "pm" : "am";
	return `${hour % 12 || 12}:00${suffix}`;
}
function formatClock(hour) {
	const suffix = hour >= 12 ? "pm" : "am";
	return `${hour % 12 || 12}${suffix}`;
}
function greeting(hour) {
	if (hour < 12) return "Good morning";
	if (hour < 17) return "Good afternoon";
	return "Good evening";
}
function actorName(role) {
	if (role === "senior") return "Eleanor Hart";
	if (role === "clinician") return "Dr. Amara Okonkwo";
	return "Maya Hart";
}
function pressureLine() {
	const today = VITALS[VITALS.length - 1];
	const prior = VITALS.slice(0, -1);
	const avg = Math.round(prior.reduce((sum, row) => sum + row.sys, 0) / prior.length);
	return {
		today,
		avg,
		delta: today.sys - avg
	};
}
function isTaken(id, hour, overrides) {
	if (Object.prototype.hasOwnProperty.call(overrides, id)) return overrides[id];
	return MORNING.has(id) && hour >= 9;
}
function isCheckDone(id, hour, overrides) {
	if (Object.prototype.hasOwnProperty.call(overrides, id)) return overrides[id];
	if (id === "morning") return hour >= 8;
	if (id === "midday") return hour >= 12;
	return false;
}
function medState(id, hour, dueHour, overrides) {
	if (isTaken(id, hour, overrides)) return "taken";
	if (hour < dueHour) return "later";
	if (hour < dueHour + 2) return "due";
	return "late";
}
function checkStateOf(check, hour, overrides) {
	if (isCheckDone(check.id, hour, overrides)) return "done";
	if (hour < check.opens) return "upcoming";
	if (hour <= check.closes) return "due";
	return "missed";
}
function derive(input) {
	const meds = MEDS.map((med) => ({
		id: med.id,
		name: med.name,
		dose: med.dose,
		hour: med.hour,
		note: med.note,
		state: medState(med.id, input.hour, med.hour, input.medOverrides)
	}));
	const checks = CHECKS.map((check) => ({
		...check,
		state: checkStateOf(check, input.hour, input.checkOverrides)
	}));
	const alerts = [];
	if (input.helpRequested && !input.acked.includes("help")) alerts.push({
		id: "help",
		tone: "needs",
		title: "Eleanor asked for a hand",
		detail: "She pressed the button on her screen. She is not reporting an emergency — she wants a person. Maya is first."
	});
	for (const check of checks) if (check.state === "missed" && !input.acked.includes(`miss-${check.id}`)) alerts.push({
		id: `miss-${check.id}`,
		tone: "watch",
		title: `${check.name} check-in never arrived`,
		detail: `The ${formatClock(check.opens)}–${formatClock(check.closes)} window closed with no tap from Eleanor or Priya.`
	});
	for (const med of meds) if (med.state === "late" && !input.acked.includes(`late-${med.id}`)) alerts.push({
		id: `late-${med.id}`,
		tone: "watch",
		title: `${med.name} is still open`,
		detail: `${med.dose} was due at ${formatHour(med.hour)}. It can still be signed.`
	});
	if (input.hour >= 8 && !input.acked.includes("bp")) {
		const { avg, delta, today } = pressureLine();
		alerts.push({
			id: "bp",
			tone: "watch",
			title: "Morning pressure sat above her line",
			detail: `Systolic was ${today.sys}, ${delta} above Eleanor's two-week line of ${avg}. Pulse held at ${today.pulse}. Not an emergency — worth a glance before Thursday.`
		});
	}
	const urgent = alerts.filter((alert) => alert.id !== "bp");
	const help = urgent.some((alert) => alert.id === "help");
	const due = checks.find((check) => check.state === "due");
	const { avg, delta } = pressureLine();
	let tone = "settled";
	let title = "Eleanor is settled.";
	let lede = due ? `${due.name} check-in is open whenever she is ready.` : quietLede(input.hour);
	if (help) {
		tone = "needs";
		title = "Eleanor asked for a hand.";
		lede = "Not an emergency. She wants a person, and the circle can see it now.";
	} else if (urgent.length > 0) {
		tone = "watch";
		title = urgent[0].title;
		lede = urgent[0].detail;
	} else if (alerts.some((alert) => alert.id === "bp")) lede = `Morning pressure was ${delta} above her line of ${avg}. ${due ? `${due.name} check-in is still open.` : "The rest of the day is quiet."}`;
	const happened = meds.filter((med) => input.hour >= med.hour);
	const signed = happened.filter((med) => med.state === "taken").length;
	return {
		tone,
		title,
		lede,
		meds,
		checks,
		alerts,
		signed,
		scheduled: happened.length
	};
}
function quietLede(hour) {
	if (hour < 9) return "Morning is just opening. Priya is due at 9.";
	if (hour < 13) return "Priya has the morning. The house knows its routine.";
	if (hour < 15) return "Midday is in. Nothing is asking for you.";
	if (hour < 18) return "The afternoon is open and otherwise quiet.";
	return "Evening doses are the last thing on today's list.";
}
function dayBeats(hour, home) {
	const med = (id) => home.meds.find((item) => item.id === id);
	const check = (id) => home.checks.find((item) => item.id === id);
	const medLine = (id) => {
		const item = med(id);
		if (!item) return "";
		if (item.state === "taken") return "Signed.";
		if (item.state === "due") return "Due now.";
		if (item.state === "late") return "Still open.";
		return `Due at ${formatHour(item.hour)}.`;
	};
	const checkLine = (id) => {
		const item = check(id);
		if (!item) return "";
		if (item.state === "done") return "In.";
		if (item.state === "due") return "Window is open.";
		if (item.state === "missed") return "Window closed empty.";
		return "Not yet.";
	};
	return [
		{
			hour: 7,
			title: "Lisinopril",
			detail: medLine("lisinopril")
		},
		{
			hour: 8,
			title: "Breakfast doses",
			detail: `${medLine("metformin-am")} ${medLine("vitd")}`
		},
		{
			hour: 9,
			title: "Priya arrives",
			detail: hour >= 9 ? "Oatmeal, then the mailbox." : "On her way to Laurelhurst."
		},
		{
			hour: 12,
			title: "Midday check-in",
			detail: checkLine("midday")
		},
		{
			hour: 13,
			title: "Priya heads out",
			detail: hour >= 13 ? "Note filed. The house is quiet." : "Still with Eleanor."
		},
		{
			hour: 15,
			title: "Afternoon window",
			detail: checkLine("afternoon")
		},
		{
			hour: 18,
			title: "Dinner metformin",
			detail: medLine("metformin-pm")
		},
		{
			hour: 20,
			title: "Aspirin",
			detail: medLine("aspirin")
		}
	].map((beat) => ({
		...beat,
		phase: hour === beat.hour ? "now" : hour > beat.hour ? "past" : "ahead"
	}));
}
function nextOpenMed(meds) {
	return meds.find((med) => med.state === "due") ?? meds.find((med) => med.state === "late") ?? meds.find((med) => med.state === "later") ?? null;
}
function checkToLog(checks) {
	return checks.find((check) => check.state === "due") ?? [...checks].reverse().find((check) => check.state === "missed") ?? null;
}
var seq = 0;
function nid(prefix) {
	seq += 1;
	return `${prefix}-${Date.now().toString(36)}-${seq}`;
}
var initialData = () => ({
	role: "family",
	section: "today",
	hour: 15,
	medOverrides: {},
	checkOverrides: {},
	acked: [],
	helpRequested: false,
	notes: SEED_NOTES.map((note) => ({ ...note })),
	log: SEED_LOG.map((item) => ({ ...item })),
	lastAction: null
});
function sliceOf(data) {
	return {
		hour: data.hour,
		medOverrides: data.medOverrides,
		checkOverrides: data.checkOverrides,
		acked: data.acked,
		helpRequested: data.helpRequested
	};
}
function pushLog(data, actor, text) {
	return [{
		id: nid("log"),
		actor,
		text,
		timeLabel: formatHour(data.hour)
	}, ...data.log].slice(0, 40);
}
var useCare = create()(persist((set) => ({
	...initialData(),
	setRole: (role) => set({ role }),
	setSection: (section) => set({ section }),
	setHour: (hour) => set({ hour }),
	setMed: (id, taken) => set((state) => {
		const med = MEDS.find((item) => item.id === id);
		const label = med ? `${med.name} ${med.dose}` : "a dose";
		return {
			medOverrides: {
				...state.medOverrides,
				[id]: taken
			},
			log: pushLog(state, actorName(state.role), `${taken ? "Signed" : "Cleared"} ${label}.`)
		};
	}),
	setCheck: (id, done) => set((state) => ({
		checkOverrides: {
			...state.checkOverrides,
			[id]: done
		},
		log: pushLog(state, actorName(state.role), `${done ? "Logged" : "Cleared"} the ${id} check-in.`)
	})),
	ack: (id) => set((state) => ({
		acked: state.acked.includes(id) ? state.acked : [...state.acked, id],
		helpRequested: id === "help" ? false : state.helpRequested,
		log: pushLog(state, actorName(state.role), `Acknowledged “${id}”.`)
	})),
	imOk: () => set((state) => {
		const target = checkToLog(derive(sliceOf(state)).checks);
		if (!target) return { lastAction: {
			kind: "ok",
			text: "You're between windows. Nothing to send."
		} };
		const note = {
			id: nid("note"),
			from: "Eleanor Hart",
			speaker: "senior",
			audience: "circle",
			body: "I'm okay.",
			timeLabel: formatHour(state.hour)
		};
		return {
			checkOverrides: {
				...state.checkOverrides,
				[target.id]: true
			},
			notes: [note, ...state.notes].slice(0, 40),
			log: pushLog(state, "Eleanor Hart", `${target.name} check-in: I'm okay.`),
			lastAction: {
				kind: "ok",
				text: `${target.name} check-in sent. Maya, Priya, and Dr. Okonkwo can see it.`
			}
		};
	}),
	takeNext: () => set((state) => {
		const med = nextOpenMed(derive(sliceOf(state)).meds);
		if (!med) return { lastAction: {
			kind: "med",
			text: "Every dose on today's list is signed."
		} };
		return {
			medOverrides: {
				...state.medOverrides,
				[med.id]: true
			},
			log: pushLog(state, actorName(state.role), `Signed ${med.name} ${med.dose}.`),
			lastAction: {
				kind: "med",
				text: `${med.name} ${med.dose} is signed.`
			}
		};
	}),
	askHelp: () => set((state) => {
		if (state.helpRequested && !state.acked.includes("help")) return { lastAction: {
			kind: "help",
			text: "Maya already has this. You don't need to press it again."
		} };
		const note = {
			id: nid("note"),
			from: "Eleanor Hart",
			speaker: "senior",
			audience: "circle",
			body: "I need a hand. Not an emergency — please call.",
			timeLabel: formatHour(state.hour)
		};
		return {
			helpRequested: true,
			acked: state.acked.filter((id) => id !== "help"),
			notes: [note, ...state.notes].slice(0, 40),
			log: pushLog(state, "Eleanor Hart", "Asked for a hand. Not flagged as an emergency."),
			lastAction: {
				kind: "help",
				text: "Sent to Maya. If this is an emergency, call 911 — Havenlink is not a monitoring service."
			}
		};
	}),
	sendNote: (body) => set((state) => {
		const text = body.trim();
		if (!text) return {};
		const clinical = state.role === "clinician";
		const note = {
			id: nid("note"),
			from: actorName(state.role),
			speaker: state.role,
			audience: clinical ? "clinical" : "circle",
			body: text.slice(0, 280),
			timeLabel: formatHour(state.hour)
		};
		return {
			notes: [note, ...state.notes].slice(0, 40),
			log: pushLog(state, note.from, clinical ? "Added a clinical note." : "Wrote on the family thread."),
			lastAction: {
				kind: "note",
				text: clinical ? "Clinical note saved. Maya's thread does not show it." : "On the family thread."
			}
		};
	}),
	resetTuesday: () => set(initialData())
}), {
	name: "havenlink-tuesday-v1",
	skipHydration: true,
	partialize: (state) => ({
		role: state.role,
		section: state.section,
		hour: state.hour,
		medOverrides: state.medOverrides,
		checkOverrides: state.checkOverrides,
		acked: state.acked,
		helpRequested: state.helpRequested,
		notes: state.notes,
		log: state.log,
		lastAction: state.lastAction
	})
}));
//#endregion
export { TEAM as a, dayBeats as c, formatHour as d, greeting as f, ROLES as i, derive as l, useCare as m, GRANT_LABEL as n, VITALS as o, pressureLine as p, LANES as r, actorName as s, ACCESS as t, formatClock as u };
