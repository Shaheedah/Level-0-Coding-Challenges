function celsiusToFahrenheit(num) {
  var cToFahr = (num * 9) / 5 + 32;
  return cToFahr + " F";
}
console.log(celsiusToFahrenheit(36));


function fahrenheitToCelsius(num) {
  var fToCel = ((num - 32) * 5) / 9;
  return fToCel + " C";
}

console.log(fahrenheitToCelsius(63));
