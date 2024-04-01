const convertToCelsius = function(degree) {
  let conversion = (degree - 32) * 5/9;
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(degree) {
  let conversion = (degree * 9/5) + 32;
  return parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
