function sumFibonacci(num) {
  if (num <= 0 || !num.isInteger) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    const arr = sumFibonacci(num - 1);
    arr.push(sumFibonacci(num - 1) + sumFibonacci(num - 2));

    var sum = 0;

    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 != 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
}

console.log(sumFibonacci(15));
module.exports = sumFibonacci;
