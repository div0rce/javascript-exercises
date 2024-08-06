const convertToCelsius = function(temp) {
  let celsius;
  celsius = (temp - 32)*5/9 * 10;
  celsius = Math.round(celsius) / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit;
  fahrenheit = (temp * 9/5 + 32) * 10;
  fahrenheit = Math.round(fahrenheit) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
