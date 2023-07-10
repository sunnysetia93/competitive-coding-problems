/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a,b)=>a-b);
    const ways = (sum, arr, index=0) => {
        if(sum === target){
            result.push(arr);
            return;
        }
        if(sum > target){
            return;
        }

        for(let i=index;i< candidates.length; i++){
            if(i != index && candidates[i] == candidates[i-1]) // to skip duplicates
                continue;
            ways(sum + candidates[i], [...arr, candidates[i]], i+1);
        }
    }
    ways(0,[]);
    return result;
};
