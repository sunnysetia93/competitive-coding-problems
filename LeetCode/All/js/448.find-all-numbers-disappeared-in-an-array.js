/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const arr = new Array(nums.length+1).fill(0);

    nums.forEach((n)=>{
        arr[n]=1
    });

    const result = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i] === 0){
            result.push(i);
        }
    }
    return result;
};

// O(1) space
var findDisappearedNumbersOptimized = function(nums) {
    nums.forEach((n)=>{
        const sub = Math.abs(n) - 1;
        console.log(sub);
        if(nums[sub] > 0){
            nums[sub] = nums[sub] * -1;
        }
        console.log(nums);
    });

    const result = []
    
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    
    return result
};

