/*
    input 1 : 7
    input 2 : [3,4,5]
    output: true
 */

const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        const rem = target - num;
        memo[target] = canSum(rem, numbers, memo);
        if (memo[target] === true)
            return true;
    }

    memo[target] = false;
    return false;
}

console.log(canSum(7, [3, 4, 5])); // true
console.log(canSum(300, [23])); // false
console.log(canSum(20, [2,4]));

