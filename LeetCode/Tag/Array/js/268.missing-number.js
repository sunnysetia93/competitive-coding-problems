/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // without using extra space
    const n = nums.length;
    const expectedSum = ((n)*(n+1)/2);
    const actualSum = nums.reduce((a,b)=>a+b,0);
    return expectedSum - actualSum;
};

// var missingNumber = function(nums) {
//     const arr = new Array(nums.length+1).fill(0);

//     nums.forEach((n)=>{
//         arr[n]=1
//     });

//     console.log(arr);

//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0){
//             return i;
//         }
//     }
// };
