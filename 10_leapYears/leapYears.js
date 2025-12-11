// 1- If year % 4 OR (year % 100 AND year % 400) return true, if not return false

const leapYears = function (year) {
	if ((year % 4 === 0 && !(year % 100 === 0)) || year % 400 === 0) {
		return true;
	} else {
		return false;
	}
};

// isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)

// Do not edit below this line
module.exports = leapYears;
