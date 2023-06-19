const trimArray = (arr, n, m) => arr.slice(n,arr.length - m);


console.log(trimArray([1, 2, 3, 4, 5, 6], 2, 1));
console.log(trimArray([6, 2, 4, 3, 7, 1, 3], 5, 0));
console.log(trimArray([1, 7], 0, 0));