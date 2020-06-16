const permute = require("./permute");

test("Expects string input", () => {
	expect(permute(12323)).toBe("Error: only strings accepted");
});

test("Expects one elem array", () => {
	expect(permute("a")).toStrictEqual(["a"]);
});

test("Test 3", () => {
	const expected = ["ab", "ba"];
	expect(permute("ab")).toEqual(expect.arrayContaining(expected));
});

test("Test 4 (number of permutations)", () => {
	const str = "1234567";
	expect(permute(str).length).toEqual(5040);
});
