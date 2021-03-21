function sumFibonacci(num) {
  var sum = 0;
  var fib = [];
  fib[0] = 1;
  fib[1] = 1;
  for (var i = fib.length; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  for (var j = 0; j < fib.length; j++) {
    if (fib[j] % 2 != 0 && fib[j] <= num) {
      sum += fib[j];
    }
  }
  return sum;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;