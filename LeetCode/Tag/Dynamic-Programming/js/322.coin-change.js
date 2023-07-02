/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    function countCoins(amount, memo={}) {
        if(amount in memo){
            return memo[amount];
        }
        if(amount === 0){
            return 0;
        }

        let minCount = Infinity;
        for(const coin of coins){
            const diff = amount - coin;
            if(diff >= 0){
                const result = countCoins(diff,memo);
                minCount = Math.min(1+result, minCount);
            }

        }
        memo[amount] = minCount;
        return minCount;
    }

    const minCoins = countCoins(amount,{});
    return minCoins === Infinity ? -1 : minCoins;
};
