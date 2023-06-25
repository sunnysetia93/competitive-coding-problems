/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;
    let firstZeroPos = -1;
    for(let i=0;i<len;i++){
        if(nums[i] === 0){
            firstZeroPos = firstZeroPos === -1 ? i : firstZeroPos;
        }
        else if(nums[i] !== 0 && firstZeroPos >= 0){
            const temp = nums[i];
            nums[i] = nums[firstZeroPos];
            nums[firstZeroPos] = temp;
            
            if(nums[firstZeroPos + 1] === 0){
                firstZeroPos++;
            }
            else{
                firstZeroPos = i;
            }
        }
    }
};

https://leetcode.com/problems/move-zeroes/solutions/172432/the-easiest-but-unusual-snowball-java-solution-beats-100-o-n-clear-explanation/
