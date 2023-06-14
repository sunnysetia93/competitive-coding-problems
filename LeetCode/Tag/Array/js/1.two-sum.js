/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for(let i=0;i<nums.length;i++){
    // not present, add diff value with index of original key
    if(map[nums[i]] == null){
      map[target-nums[i]] = i;
    }
    else {
      // if pair found, return current index and value(which is the index of other half of the pair) from the map
      return [i,map[nums[i]]];
    }
  }
};
