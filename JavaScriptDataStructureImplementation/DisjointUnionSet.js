class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) => i);
        this.rank = new Array(n).fill(0);
    }

    findUltimateParent(n) {
        if (n === this.parent[n]) {
            return n;
        }

        this.parent[n] = this.findUltimateParent(this.parent[n])
        return this.parent[n];
    }

    unionByRank(src, dest) {
        let srcUltimateParent = this.findUltimateParent(src);
        let destUltimateParent = this.findUltimateParent(dest);

        let srcRank = this.rank[srcUltimateParent];
        let destRank = this.rank[destUltimateParent];

        if (srcRank < destRank) {
            this.parent[srcUltimateParent] = destUltimateParent;
        } else if (srcRank > destRank) {
            this.parent[destUltimateParent] = srcUltimateParent;
        } else {
            this.parent[srcUltimateParent] = destUltimateParent;
            this.rank[destUltimateParent]++;
        }
    }

}

let n = 3;
let edges = [[0, 1], [1, 2], [0, 2]]
const uf = new UnionFind(n);
for (let [u, v] of edges) {
    uf.unionByRank(u, v);
}

console.log(uf.findUltimateParent(0) === uf.findUltimateParent(2));
