/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = Array.isArray(nums) && nums.length > 0 ? nums : [];
    this.sums = [];

    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum+= nums[i];
        this.sums.push(sum);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left > right){
        throw new Error('Incorrect input: left <= right');
    }

    // return this.nums.slice(left, right + 1).reduce((a,b)=>a+b,0); // O(n)

    // optimized using this.sums array
    if(left === 0){
        return this.sums[right];
    }
    return this.sums[right] - this.sums[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
