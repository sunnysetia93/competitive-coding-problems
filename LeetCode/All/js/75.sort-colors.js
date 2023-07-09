/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// two passes - O(2n) ~ O(n)
// var sortColors = function(nums) {
//     const freq = new Array(3).fill(0);
    
//     for(let n of nums){
//         freq[n]++;
//     }
//     let index=0;
//     for (let i=0; i<freq.length; i++){
//         let count = freq[i];
//         while(count > 0){
//             nums[index++] = i;
//             count--;
//         }
//     }
// };

// one pass - dutch national flag algorithm - quick sort partition

const sortColors = function (nums){
    let beg = 0, high = nums.length -1;
    let mid = 0;

    const swap = (i,j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while(mid <= high){
        if(nums[mid] === 0){
            swap(mid, beg);
            mid++;
            beg++;
        }
        else if(nums[mid] === 1){
            mid++;
        }
        else {
            swap(mid, high);
            high--;
        }
    }
}
