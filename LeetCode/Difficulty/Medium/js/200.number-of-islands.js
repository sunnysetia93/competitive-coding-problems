/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const n = grid.length;
    const m = grid[0].length;
    let count = 0;
    for(let i=0; i<n;i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] === '1'){
                count++;
                performDFS(i,j);
            }

        }
    }

    function performDFS(i,j) {
        if(i < 0 || i > n - 1 || j < 0 || j > m - 1)
            return;
        if(grid[i][j] === '0')
            return;

        grid[i][j] = '0'; // make it 0, so it cannot be used again.
        performDFS(i+1,j); // down
        performDFS(i,j+1); // right
        performDFS(i,j-1); // left
        performDFS(i-1,j); // up
    }

    return count;
};
