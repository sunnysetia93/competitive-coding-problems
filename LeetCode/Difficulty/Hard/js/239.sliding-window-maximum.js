/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 // O(k*(n-k))
// var maxSlidingWindow = function(nums, k) {
//     let arr = [];
//     let max = 0;
//     for(let i=0;i<k;i++){
//       max = Math.max(max,nums[i]);
//     };

//     // console.log({max});
//     arr.push(max);

//     let left = 0;
//     let right = k;

//     while(right < nums.length){
//       let newEle = nums[right];
//       let oldEle = nums[left];
//       // console.log({oldEle, newEle})
//       if(oldEle === max){
//         //recalculate
//         if(newEle > max){
//           max = newEle;
//         }
//         else{
//           // console.log("recalculating", nums.slice(left+1,left+k+1));
//           max = Math.max(...nums.slice(left+1,left+k+1));
//         }
//       }
//       else {
//         max = Math.max(newEle,max);
//       }
//       // console.log({max});
//       arr.push(max);
//       left++;
//       right++;
//     }

//     return arr;
// };

var maxSlidingWindow = function(nums, k) {
  let output = [];
  let deque = [];
  let r = 0, l = 0;

  while(r < nums.length){
    // pop smaller values from deque
    while(deque.length && nums[deque[deque.length -1]] <= nums[r]){
      deque.pop();
    }
    deque.push(r);

    // remove left value from window
    if(l > deque[0]){
      deque.shift();
    }

    if(r+1 >= k){
      output.push(nums[deque[0]]);
      l++;
    }
    r++;
  }

  return output;
}
