/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */


var maxIceCream = function (costs, coins) {

    costs.sort((a, b) => a - b);

    for (let i = 0; i < costs.length; i++) {
        if (coins >= costs[i])
            coins -= costs[i];
        else
            return i;
    }

    return costs.length;
}


/*failed attempt - DP approach - failing few cases */
var maxIceCream = function (costs, coins, prevPos = -1, level = 0, memo = {}) {

    // console.log("=>",{prevPos,level,coins});

    if (coins === 0 || (coins >= 0 && level === costs.length))
        return level;
    if (coins < 0 && level <= costs.length)
        return level - 1;
    if (coins in memo) return memo[coins];

    if (coins < 0)
        return -1;

    let maxCoins = 0;

    for (let i = (prevPos + 1); i < costs.length; i++) {

        const rem = coins - costs[i];
        const returnedMax = maxIceCream(costs, rem, i, level + 1, memo);

        // console.log({i,maxCoins,costApplied:costs[i],rem,returnedMax});

        maxCoins = Math.max(returnedMax, maxCoins);
    }

    memo[coins] = maxCoins;
    return maxCoins;
};
