// TOOLS
// =================================================

export const tools = {
	getLocalStorage(key) {
		return JSON.parse(localStorage.getItem(key));
	},
	setLocalStorage(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	removeLocalStorage(key) {
		localStorage.removeItem(key);
	},
	formatDate(date) {
		return date.toLocaleDateString("en-US", {
			"year": "numeric",
			"month": "long",
			"day": "numeric",
			"hour": "2-digit",
			"minute": "2-digit",
			"second": "2-digit",
		});
	},
};
