/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 // two pointer solution
var threeSum = function(nums) {
    const answer = [];
    const target = 0;
    nums = nums.sort((a, b) => a - b)
    for(let i=0;i<nums.length-2;i++){
        let j= i+1;
        let k = nums.length - 1;

        if (nums[i] > target) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        while(j<k){
            let sum = nums[i] + nums[j] + nums[k];
            
            if(sum === target){
                answer.push([nums[i],nums[j],nums[k]]);

                while(nums[j] === nums[j+1]) j++;
                while(nums[k] === nums[k-1]) k--;

                j++;
                k--;
            }
            else if(sum < target){
                j++;
            }
            else{
                k--;
            }
        }
    }
    return answer;
};

// https://leetcode.com/problems/3sum/solutions/281302/javascript-with-lots-of-explanatory-comments/
