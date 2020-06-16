permute = (str) => {
	let permutations = [];

	if (!str || typeof str !== "string") {
		return "Error: only strings accepted";
	} else if (str.length < 2) return [str];

	for (let i = 0; i < str.length; i++) {
		let currentChar = str[i];

		if (str.indexOf(currentChar) != i) continue;

		for (var subPermutation of permute(remainingString(str, i)))
			permutations.push(currentChar + subPermutation);
	}
	return permutations;
};

remainingString = (str, i) => {
	return str.slice(0, i) + str.slice(i + 1, str.length);
};

module.exports = permute;
