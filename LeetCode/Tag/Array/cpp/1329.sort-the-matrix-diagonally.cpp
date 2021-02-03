class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size();
        unordered_map<int, multiset<int>> value;
        unordered_map<int, multiset<int>::iterator> itr;
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                value[i-j].insert(mat[i][j]);
        
        for (int i = 0; i < m; ++i)
            itr[i] = value[i].begin();
        
        for (int j = 1; j < n; ++j)
            itr[-j] = value[-j].begin();
        
        for (int i = 0; i < m; ++i)
            for (int j = 0; j < n; ++j)
                mat[i][j] = *(itr[i-j]++);
        
        return mat;
    }
};