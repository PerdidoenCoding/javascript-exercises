const add = function(...nums) {
  let sum = 0;
  for(let i = 0; i < nums.length;i++) {
    sum += nums[i];
  }
	return sum;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length;i++) {
    sum += nums[i];
  }
	return sum;
};

const multiply = function(nums) {
  let multiply = 1;
  for(let i = 0; i < nums.length;i++) {
    multiply *= nums[i];
  }
	return multiply;
};

const power = function(num, power) {
  return num ** power;	
};

const factorial = function(num) {
  let total = 1;
  while (num > 0) {
    total *= num;
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
