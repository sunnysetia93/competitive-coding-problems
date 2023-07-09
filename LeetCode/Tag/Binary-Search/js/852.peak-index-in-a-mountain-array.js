/**
 * @param {number[]} arr
 * @return {number}
 */
// var peakIndexInMountainArray = function(arr) {
//     for(let i=0;i<arr.length-1;i++){
//         let curr = arr[i];
//         let next = arr[i+1];
        
//         if(curr > next){ //prev < curr && curr > next
//             return i;
//         }
//     }
// };

const peakIndexInMountainArray = function(arr) {
    let beg = 0,end = arr.length - 1;
    while(beg <= end){
        let mid = Math.floor((end + beg)/2);
        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]){
            return mid;
        }
        else if(arr[mid-1] > arr[mid]){ // prev > mid -> left side contains answer (tip: find problem side)
            end = mid - 1;
        }
        else {
            beg = mid + 1;
        }
    }
}
