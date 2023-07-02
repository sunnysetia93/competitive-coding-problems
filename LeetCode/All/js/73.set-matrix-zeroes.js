/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 // with extra O(m+n) space | time O(mn)
var setZeroesFirst = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    const track = [];
    
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]===0){
                track.push([i,j]);
            }
        }
    }

    for(let i=0;i<track.length;i++){
        let [x,y] = track[i];
        
        for(let j=0;j<rows;j++){
            matrix[j][y] = 0;
        }

        for(let j=0;j<cols;j++){
            matrix[x][j] = 0;
        }
    }
};

// taking first row and columns as dummy row and dummy column
// only common block is [0][0], so a different variable for that
const setZeroes = function(matrix) {
    let commonBlock = false; // for zeroth row 
    let rows = matrix.length;
    let cols = matrix[0].length;

    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(matrix[i][j]===0){
                matrix[0][j] = 0;
                if(i === 0){
                    commonBlock = true;
                }
                else{
                    matrix[i][0] = 0;
                }
            }
        }
    }

    for(let i=1;i<rows;i++){
        for(let j=1;j<cols;j++) {
            if(matrix[0][j] === 0 || matrix[i][0] === 0){
                matrix[i][j]=0
            }
        }   
    }

    if(matrix[0][0] === 0){
        for(let i=0;i<rows;i++){
            matrix[i][0] = 0;
        }
    }

    // for zeroth row
    if(commonBlock){
        for(let i=0;i<cols;i++){
            matrix[0][i] = 0;
        }
    }
}
