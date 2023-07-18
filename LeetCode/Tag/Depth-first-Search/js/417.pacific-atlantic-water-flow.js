/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let ROWS = heights.length;
    let COLS = heights[0].length;
    const pac = new Set();
    const atl = new Set();
    const result = [];

    const getKey = (r,c) =>{
        return `${r}_${c}`;
    }
    
    const dfs = function(r,c, visitedSet, prevHeight) {
        let key = getKey(r,c);
        if(visitedSet.has(key) || r < 0 || c < 0 || r >= ROWS || c >= COLS || heights[r][c] < prevHeight){
            return;
        }
        visitedSet.add(key);
        dfs(r+1, c, visitedSet, heights[r][c]);
        dfs(r-1, c, visitedSet, heights[r][c]);
        dfs(r, c+1, visitedSet, heights[r][c]);
        dfs(r, c-1, visitedSet, heights[r][c]);

    }

    for(let c=0;c<COLS;c++){
        dfs(0, c, pac, heights[0][c]); // each element of top row in Pacific set
        dfs(ROWS-1, c, atl, heights[ROWS-1][c]); // each element of bottom row in atlantic set
    }

    for(let r=0;r<ROWS;r++){
        dfs(r, 0, pac, heights[r][0]); // each element of left column in pacific set
        dfs(r, COLS-1, atl, heights[r][COLS-1]); // each element of right column in atlantic set
    }

    for(let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            let key = getKey(r,c);
            if(pac.has(key) && atl.has(key)){
                result.push([r,c]);
            }
        }
    }

    return result;
};
