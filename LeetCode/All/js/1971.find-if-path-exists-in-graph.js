/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

//DFS


// var validPath = function(n, edges, source, destination) {
//     if(n === 1){
//         return true;
//     }
//     let visited = new Array(n).fill(false);
//     visited[source] = true;
//     let changeFlag = true;

//     while(changeFlag){
//         changeFlag = false;
//         for(let [a,b] of edges){
//             if(visited[a] !== visited[b]){
//                 visited[a] = true;
//                 visited[b] = true;
//                 changeFlag = true
//             }

//             if(visited[destination]){
//                 return true;
//             }
//         }
//     }

//     return false;
// };


// BFS

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @param {number} start
//  * @param {number} end
//  * @return {boolean}
//  */
// var validPath = function(n, edges, start, end) {
//     const graph = new Map()
//     // create our adjacency list
//     edges.forEach(([a,b]) => {
//         if (!graph.has(a)) {
//             graph.set(a, [])
//         }
//         if (!graph.has(b)) {
//             graph.set(b, [])
//         }
//         graph.get(a).push(b)
//         graph.get(b).push(a)
//     })
//     // prevent revisiting nodes
//     const visited = new Array(n)
//     const queue = [start]
//     while (queue.length > 0) {
//         const node = queue.shift() // this is an O(n) operation here. if we used a real queue the dequeue method would be O(1)
//         if (node === end) {
//             return true
//         }
//         visited[node] = true
//         graph.get(node).forEach((neighbor) => {
//             if (!visited[neighbor]) {
//                 queue.push(neighbor)
//             }
//         })
//     }
//     return false
// };


class UnionFind {
    constructor(n){
        this.parent = Array.from({length:n}, (_,i) => i);
        this.rank = new Array(n).fill(0);
    }

    findUltimateParent(n){
        if(n === this.parent[n]){
            return n;
        }

        this.parent[n] = this.findUltimateParent(this.parent[n])
        return this.parent[n];
    }

    unionByRank(src,dest){
        let srcUltimateParent = this.findUltimateParent(src);
        let destUltimateParent = this.findUltimateParent(dest);

        let srcRank = this.rank[srcUltimateParent];
        let destRank = this.rank[destUltimateParent];

        if(srcRank < destRank){
            this.parent[srcUltimateParent] = destUltimateParent;
        }
        else if(srcRank > destRank){
            this.parent[destUltimateParent] = srcUltimateParent;
        }
        else {
            this.parent[srcUltimateParent] = destUltimateParent;
            this.rank[destUltimateParent]++;
        }
    }

}

var validPath = function(n, edges, source, destination) {
    const uf = new UnionFind(n);
    for(let [u,v] of edges){
        uf.unionByRank(u,v);
    }

    return uf.findUltimateParent(source) === uf.findUltimateParent(destination);
};
