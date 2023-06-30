/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0, right = matrix.length - 1;

    while(left < right){
        for(let i=0; i < right-left; i++) {
            let top = left, bottom = right;

            // save top-left for last step
            let topLeft = matrix[top][left + i];

            // move anti-clockwise
            
            // move bottom-left to top-left
            matrix[top][left + i] = matrix[bottom - i][left];

            //move bottom-right to bottom-left
            matrix[bottom - i][left] = matrix[bottom][right - i];

            //move top-right to bottom-right
            matrix[bottom][right - i] = matrix[top + i][right];

            // move topLeft which is the variable to top-right
            matrix[top + i][right] = topLeft;
        }
        right--;
        left++;
    }
};
