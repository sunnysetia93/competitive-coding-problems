/*
    Input 1 : 7
    Input 2 : [3,4,5]
    Output: [3,4] or [4,3]
 */

const howSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const rem = target - num;
        const remResult = howSum(rem, numbers, memo);
        if (remResult !== null) {
            const updatedResult = [...remResult, num];
            memo[target] = updatedResult;
            return updatedResult;
        }
    }

    memo[target] = null;
    return null;
}

console.log(howSum(7, [3, 4, 5])); // true
console.log(howSum(300, [23])); // false
console.log(howSum(20, [2, 4]));

