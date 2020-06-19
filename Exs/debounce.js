let debounce = (func, delay = 0) => {
	let timeOutID;

	return () => {
		if (timeOutID) clearTimeout(timeOutID);

		timeOutID = setTimeout(() => func(), delay);
	};
};

let a = () => console.log("foo");
let b = debounce(a, 100);

module.exports = {
	debounce,
};
