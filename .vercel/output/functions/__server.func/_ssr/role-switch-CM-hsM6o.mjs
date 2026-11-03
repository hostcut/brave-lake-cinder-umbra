import { i as ROLES, m as useCare } from "./store-jKksTjNz.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as cn } from "./mark-Cc7RFuUm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/role-switch-CM-hsM6o.js
var import_jsx_runtime = require_jsx_runtime();
function RoleSwitch() {
	const role = useCare((state) => state.role);
	const setRole = useCare((state) => state.setRole);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "radiogroup",
		"aria-label": "Who is looking",
		className: "flex w-full rounded-full border border-line bg-cream p-1 sm:w-auto",
		children: ROLES.map((item) => {
			const on = role === item.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				role: "radio",
				"aria-checked": on,
				onClick: () => setRole(item.id),
				className: cn("h-11 flex-1 rounded-full px-3 text-sm transition-colors sm:flex-none sm:px-4", on ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"),
				children: item.label
			}, item.id);
		})
	});
}
function roleLine(role) {
	return ROLES.find((item) => item.id === role)?.line ?? "";
}
//#endregion
export { roleLine as n, RoleSwitch as t };
