const palindrome = require("./palindrome");

test("Palindrome test 1", () => {
	expect(palindrome("Anna")).toBe(true);
});

test("Palindrome test 2", () => {
	expect(palindrome("Hello")).toBe(false);
});

test("Palindrome test 3", () => {
	expect(palindrome("Step on no pets")).toBe(true);
});

test("Palindrome test 4", () => {
	expect(palindrome("Multiple Word Palindromes")).toBe(false);
});
