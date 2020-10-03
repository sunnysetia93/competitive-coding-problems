/*
    Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
    You may assume all four edges of the grid are all surrounded by water.

    Example 1:
        Input:
            11110
            11010
            11000
            00000

        Output: 1

    Example 2:
        Input:
            11000
            11000
            00100
            00011

        Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==="1"){
                count++;
                processDFS(grid,i,j);
            }
        }
    }
    return count;
};

const processDFS = (grid,i,j) =>{
    if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]==="0")
        return;
    grid[i][j]="0";
    processDFS(grid,i-1,j); // up
    processDFS(grid,i+1,j); // down
    processDFS(grid,i,j+1); // right
    processDFS(grid,i,j-1); // left
}