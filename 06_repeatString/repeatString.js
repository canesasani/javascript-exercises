const repeatString = function (str, num) {
	if (num < 0) {
		return "ERROR";
	}
	let finalWord = "";
	for (let i = 0; i < num; i++) {
		finalWord += str;
	}
	return finalWord;
};

repeatString("CAN", 5);

// Do not edit below this line
module.exports = repeatString;
