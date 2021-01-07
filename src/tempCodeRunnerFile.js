const power = function (base, exponent) {
  let result = base;
  for (let count = 0; count < exponent; count++) {
    result = multiply(result, base)
  }
  return result;
};
console.log(power(2, 10));