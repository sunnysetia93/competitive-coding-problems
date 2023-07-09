/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0)
        return 0;
    const map = {};
    for(let n of nums){
        map[n]=1;
    }

    const numbers = Object.keys(map);
    for(let n of numbers){
        if(map[n-1] == null){
            map[n] = 0; 
        }
    }
    let max = 1;
    for(let n of numbers){
        if(map[n] == 0){
            let count = 1;
            while(map[Number(n) + count] > 0){
                count++;
            }
            max = Math.max(max,count);
        }

    }

    return max;
}
// https://leetcode.com/problems/longest-consecutive-sequence/solutions/1127908/2-approaches-for-your-interview-hindi/;
