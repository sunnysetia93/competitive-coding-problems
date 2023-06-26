/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = 0;
    let columnArray = matrix.map((row) => row[col]);
    let rowFound = binarySearch(columnArray,target);
    if(rowFound < 0 || rowFound > matrix.length - 1){
        return false;
    }
    const colFound = binarySearch(matrix[rowFound],target);
    return matrix[rowFound][colFound] === target;
};

function binarySearch(arr,target){
    let beg = 0, end = arr.length - 1;
    while(beg <= end){
        let mid = Math.floor((beg+end)/2);
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] < target){
            beg = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }

    return end;
}
