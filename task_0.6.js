function maximum(...num) {
  var maximumNumber = num[0];

  for (var i = 0; i < num.length; i++) {
    if (num[i] > maximumNumber) {
      maximumNumber = num[i];
    }
  }
  return maximumNumber;
}

console.log(maximum(1, 22, 3, 2));
console.log(maximum(-1, -22, -3, -2)); 

