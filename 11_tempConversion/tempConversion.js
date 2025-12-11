const convertToCelsius = function (num) {
	let celcius = ((num - 32) * 5) / 9;
	let round = Math.round(celcius * 10) / 10;
	return round;
};

// (°F − 32) × 5/9 = °C

const convertToFahrenheit = function (num) {
	let fahrenheit = (num * 9) / 5 + 32;
	let round = Math.round(fahrenheit * 10) / 10;
	return round;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
