function myRecursion(arr, n) {
  var sum;
  if (n <= 0) {
    return 0;
  } else {
    return myRecursion(arr, n - 1) + arr[n - 1];
  }
}

console.log(myRecursion([1], 0));
console.log(myRecursion([1, 2, 3, 4], 2));
console.log(myRecursion([1, 2, 3, 4], 3));
module.exports = myRecursion;