/**
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3519/
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if (n <= 1)
        return [0];
    const map = {};
    for (let [x, y] of edges) {
        if (map[x] != null)
            map[x].push(y)
        else
            map[x] = [y];

        if (map[y] != null)
            map[y].push(x)
        else
            map[y] = [x];
    }

    let leaves = Object.entries(map).map(([x, list]) => {
        if (list.length === 1)
            return x;
    }).filter(x => x);


    while (n > 2) {
        n = n - leaves.length;
        let next_leaves = [];
        for (let leaf of leaves) {
            leaf = Number(leaf);

            let temp = map[leaf].pop(); // remove node from leaf list
            map[temp].splice(map[temp].indexOf(leaf), 1) // remove leaf from adjacency list

            // save node if its a leaf
            if (map[temp].length === 1)
                next_leaves.push(temp);
        }
        leaves = next_leaves;
    }
    return leaves;
};