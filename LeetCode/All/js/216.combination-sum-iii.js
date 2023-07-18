/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];

    const combinations = (index = 1, arr = [], sum = 0) => {
        if(arr.length === k){
            if(sum === n){
                result.push(arr);
            }
            return;
        }

        for(let i = index; i <= 9; i++){
            if(sum+i > n){
                continue;
            }
            combinations(i+1, [...arr,i],sum+i);
        }
    }

    combinations()
    return result;
};
