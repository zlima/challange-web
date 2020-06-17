const debounceModule = require("./debounce");
const debounce = debounceModule.debounce;

jest.useFakeTimers();

test("debounce", () => {
	let a = jest.fn();
	let b = debounce(a, 1000);

	// Call it immediately
	b();
	// func not called
	expect(a).toHaveBeenCalledTimes(0);

	for (let i = 0; i < 10; i++) b();

	//fast forward time
	jest.runAllTimers();

	expect(a).toHaveBeenCalledTimes(1);
});
