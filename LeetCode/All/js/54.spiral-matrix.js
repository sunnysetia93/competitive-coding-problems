/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top=0,left=0;
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    const result = [];
    
    while(left <= right && top <= bottom){

        // topLeft -> topRight 
        for(let i=left; i <= right;i++){
            result.push(matrix[top][i]);
        }
        top++;

        // top-right -> bottom-right
        for(let i=top; i <= bottom; i++){
            result.push(matrix[i][right]);
        }
        right--;

        if(top<=bottom){   
            // bottom-right -> bottom-left
            for(let i=right; i >= left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if(left<=right){   
            // bottom-left -> top-left
            for(let i=bottom; i >= top; i--){
                result.push(matrix[i][left]);
            }
            left++;
        }

    }

    return result;
};
