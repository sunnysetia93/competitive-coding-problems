/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let closestSum = Infinity;
    nums = nums.sort((a,b) => a-b);

    for(let i=0;i<nums.length-2;i++){
        let j = i+1;
        let k = nums.length - 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(target - sum) < Math.abs(target - closestSum)){
                closestSum = sum;

                if(nums[j] === nums[j+1]){
                    j++;
                }
                if(nums[k] === nums[k-1]){
                    k--;
                }
            }

            if(sum < target){
                j++;
            }
            else{
                k--;
            }
        }
    }
    
    return closestSum;
};
