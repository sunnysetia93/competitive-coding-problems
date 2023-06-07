/*
    You are given a sorted array consisting of only integers where every element appears exactly twice,
    except for one element which appears exactly once. Find this single element that appears only once.

    Example 1:
        Input: [1,1,2,3,3,4,4,8,8]
        Output: 2

    Example 2:
        Input: [3,3,7,7,10,11,11]
        Output: 10

    Note: Your solution should run in O(log n) time and O(1) space.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = (nums) => nums.reduce((a,b)=> a^b);

var singleNumber = function(nums) {
  const map = new Map();
  nums.forEach(num=>{
    if(!map.has(num)){
      map.set(num,1);
    }
    else{
      map.set(num,map.get(num)+1);
    }
  });

  const entries = map.entries();
  for(const [key,value] of entries){
    if(value===1)
      return key;
  }
};

var singleNumber = function(nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx];
  } return uniqNum;       // Return the unique number...
};
