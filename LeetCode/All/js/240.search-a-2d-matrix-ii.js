/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let r = 0;
    let c = cols - 1;

    while(r < rows && c >= 0){
        if(matrix[r][c] === target){
            return true;
        }
        else if(matrix[r][c] > target){
            c--;
        }
        else{
            r++;
        }
    }
    return false;
};
