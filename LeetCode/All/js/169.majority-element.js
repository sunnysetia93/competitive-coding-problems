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
