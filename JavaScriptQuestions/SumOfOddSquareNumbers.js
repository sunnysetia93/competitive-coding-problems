// Sum the odd-square numbers less than a given integer n.

const oddSquareSum = (num) => {
  let sum = 0, i = 1;
  for (; i < num; i++) {
    const squareValue = Math.pow(i, 2);
    if (squareValue >= num) {
      break;
    } else {
      sum += (i % 2 !== 0) ? squareValue : 0;
    }
  }
  return sum;
}

console.log(oddSquareSum(1))
console.log(oddSquareSum(2))
console.log(oddSquareSum(9))
console.log(oddSquareSum(10))
console.log(oddSquareSum(44))
