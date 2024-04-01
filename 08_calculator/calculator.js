const add = function(nmr1, nmr2) {
  return nmr1 + nmr2;
};

const subtract = function(nmr1, nmr2) {
  return nmr1 - nmr2;
};

const sum = function(array) {
  let accumulator = 0;

  for (const elem of array) {
    accumulator+= elem;
  }

  return accumulator;
	
};

const multiply = function(arr) {
  let accumulator = 1;

  for (const elem of arr) {
    accumulator*= elem;
  }

  return accumulator;

};

const power = function(nmr, fact) {
  return Math.pow(nmr, fact);
};

const factorial = function() {
	
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
