/*
Write a function to find out whether the binary representation of a number is palindrome or not.
* */

const convertDecimalToBinary = (decimal) => {
  let remainder = '';
  while (decimal > 0) {
    remainder += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }
  const binary = remainder.split('').reverse().join('');
  return binary;
}

const checkBinaryPalindrome = (number) => {
  const binaryNumber = convertDecimalToBinary(number);
  let start = 0, end = binaryNumber.length - 1;
  while (start < (binaryNumber.length / 2)) {
    if (binaryNumber.charAt(start) !== binaryNumber.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(checkBinaryPalindrome(13));
console.log(checkBinaryPalindrome(5));
console.log(checkBinaryPalindrome(2));
