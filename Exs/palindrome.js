palindrome = (arg) => {
	return (
		arg.toLowerCase().trim() ===
		arg.toLowerCase().trim().split("").reverse().join("")
	);
};

module.exports = palindrome;
