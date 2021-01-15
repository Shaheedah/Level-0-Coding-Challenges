function areaOfATriangle(x, y, z) {
  var semiperimeter = (x + y + z) / 2;

  return Math.sqrt(
    semiperimeter *
      (semiperimeter - x) *
      (semiperimeter - y) *
      (semiperimeter - z)
  );
}

console.log(areaOfATriangle(4, 13, 15));
