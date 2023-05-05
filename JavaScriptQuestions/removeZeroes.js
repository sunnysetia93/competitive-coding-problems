function removeZeroes(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.shift();
      i--;
    } else {
      break;
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.pop();
    } else {
      break;
    }
  }
  return arr;
}

console.log(removeZeroes([0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0]));
console.log(removeZeroes([0, 0, 0]));
console.log(removeZeroes([8]));
