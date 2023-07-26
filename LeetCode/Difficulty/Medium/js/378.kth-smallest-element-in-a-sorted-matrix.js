/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

 // can use min Heap
 // binary search solution uses less space
var kthSmallest = function(matrix, k) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = matrix[0][0], high = matrix[n-1][m-1] + 1;
    while(low < high){
        let mid = Math.floor((low + high)/2);
        let count = 0;
        for (let i = 0;i<n;i++) {
            for (let j=0;j<m;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if(count < k) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }

    return low;
};
