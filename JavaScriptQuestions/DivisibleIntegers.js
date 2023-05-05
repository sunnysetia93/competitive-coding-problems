
// https://buttondown.email/cassidoo/archive/2474/

// Given an array of integers, find whether it’s possible to construct an integer using all the digits of the numbers in the array such that it would be divisible by n (where n is 1 <= n <= 9). If it’s possible, return true, else return false.

// Example:

// > divisibleIntegers(n = 3, arr= [40, 50, 90])
// > true // 945000 is divisible by 3

const getPermutations = (arr, prev = "") => {
  if (arr.length <= 0) {
    return prev;
  }

  let digits = arr.join("").split("");
  return digits.map((currDigit, index) => {
    const copyArray = new Array(...digits);
    const removedElement = copyArray.splice(index, 1);
    return getPermutations(copyArray, prev + removedElement);
  }).flat();
}

const divisibleIntegers = (n, arr) => {
  const allPermutations = getPermutations(arr);
  return allPermutations.some((value) => value % n === 0);
};

console.log(divisibleIntegers(3, [40, 50, 90]));
console.log(divisibleIntegers(459000, [40, 50, 90]));
console.log(divisibleIntegers(459001, [40, 50, 90]));
console.log(divisibleIntegers(3, [1, 5]));
