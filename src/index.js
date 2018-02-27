module.exports = function getZerosCount(number) {
  // your implementation
  var zero = 0;
  for (var i = 5; number/i >= 1; i = i * 5) {
      zero += Math.floor(number/i);
  }
  return zero;
}
