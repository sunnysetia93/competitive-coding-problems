/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  nums.forEach(n=>{
    if(map.has(n)){
      map.set(n,map.get(n)+1);
    }
    else{
      map.set(n,1);
    }
  });
  let result = '';
  map.forEach((value,key)=>{
    if(value >= (nums.length/2)){
      result = key;
      return;
    }
  });
  return result;
};


var majorityElementV2 = function(nums) {
  // Initialize sol and cnt to store the solution and its frequency for respective iterations...
  let sol = 0, cnt = 0;
  // For every element i in the array...
  for(let i = 0; i < nums.length; i++ ) {
    // If cnt is equal to zero, update sol as sol = i
    if(cnt == 0){
      sol = nums[i];
      cnt = 1;
    }
    // If i is equal to candidate, increment cnt...
    else if(sol == nums[i]){
      cnt++;
    }
    // Otherwise, decrement cnt...
    else{
      cnt--;
    }
  }
  // Return & print the solution...
  return sol;
};
