/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

const findClosestElements = function(arr, k, x) {
    let left = 0, right = arr.length-1;

    while(right - left >= k){
        // adjust left and right pointers so that we get closer to x
        // if diff between x - a > b - x then move right is at the right position
        // just move left pointer to right side until we reach k elements in between
        if((x - arr[left]) <= (arr[right] - x)) {
            right--;
        }
        else{
            left++;
        }
    }

    return arr.slice(left, right+1);

}
// var findClosestElements = function(arr, k, x) {
//     let lo = 0, hi = arr.length - 1;
//     while (lo < hi) {
//         const mid = parseInt((lo + hi) / 2);
//         console.log(mid, x - arr[mid], arr[mid + k]- x, x - arr[mid] > arr[mid + k]- x);
//         x - arr[mid] > arr[mid + k]- x ? lo = mid + 1 : hi = mid;
//     }
//     return arr.slice(lo, lo + k);
// };
