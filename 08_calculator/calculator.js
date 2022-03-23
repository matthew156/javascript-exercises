const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
if(arr.length == 0)
  return 0
else{
	return arr.reduce(function(a,b){
    return a+b;
  })
}};

const multiply = function(arr) {
  return arr.reduce(function(a,b){
    return a*b;
  })
};

const power = function(num1, num2) {
	return num1**num2
};

const factorial = function(num) {
  if(num == 0)
  {
    return 1;
  }
  else{
  let sum = num
  let product = 1;
  while (sum != 0)
  {
  product *= sum
  sum--
  }
  return product
}};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
