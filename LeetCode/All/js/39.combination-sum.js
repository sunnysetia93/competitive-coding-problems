/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    const combination = []

    const backtrack = (target, arr=[], index=0) => {
        if(target === 0){
            return combination.push(arr);
        }
        if(target < 0){
            return null;
        }

        for(let i=index;i<candidates.length;i++){
            const diff = target - candidates[i];
            backtrack(diff, [...arr,candidates[i]],i);
        }
    }

    backtrack(target);
    return combination;
};
