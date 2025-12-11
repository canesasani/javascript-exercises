// const removeFromArray = function (arr, ...nums) {
// 	return arr.filter((item) => item != nums);
// };

const removeFromArray = function (arr, ...nums) {
	return arr.filter((item) => !nums.includes(item));
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
