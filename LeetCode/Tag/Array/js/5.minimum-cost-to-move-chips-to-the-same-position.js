/**
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3520/
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
    position.forEach((val,index)=>{
        if(val%2===0)
            even += 1;
        else
            odd += 1;
    });

    return Math.min(even,odd);
};