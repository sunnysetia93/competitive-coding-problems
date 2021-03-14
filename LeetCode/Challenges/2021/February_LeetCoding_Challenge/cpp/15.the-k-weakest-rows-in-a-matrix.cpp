class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int m = mat.size(), n = mat[0].size();
        queue<tuple<int, int>> q;
        for (int i = 0; i < m; ++i) q.push({i, 0});
        vector<int> result(k);
        int i = 0, r, c;
        while (!q.empty() && i < k) {
            tie(r, c) = q.front(); q.pop();
            if (c == n || !mat[r][c])
                result[i++] = r;
            else
                q.push({r, c+1});
        }
        return result;
    }
};