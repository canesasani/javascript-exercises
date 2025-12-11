// 1- Check which input num is bigger
// 2- Bigger num - Smaller num = number of iterations in loop
// 3- Declare: let sum = 0;
// 4- In loop: (let i = smallNum; i <= bigNum; i++)
// 5- Loop and add i to sum

const sumAll = function (num1, num2) {
	if (
		isNaN(num1) == true ||
		isNaN(num2) == true ||
		num1 < 0 ||
		num2 < 0 ||
		num1 % 1 != 0 ||
		num2 % 1 != 0 ||
		typeof num1 === "string" ||
		typeof num2 === "string"
	) {
		return "ERROR";
	}

	let bigNum = 0;
	let smallNum = 0;
	if (num1 > num2) {
		bigNum = num1;
		smallNum = num2;
	} else if (num1 == num2) {
		return num1;
	} else {
		bigNum = num2;
		smallNum = num1;
	}

	let sumNum = 0;

	for (let i = smallNum; i <= bigNum; i++) {
		console.log(i);
		sumNum += i;
	}
	return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
