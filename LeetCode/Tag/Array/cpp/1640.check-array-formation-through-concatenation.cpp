class Solution {
public:
    bool canFormArray(vector<int>& arr, vector<vector<int>>& pieces) {
        vector<int> indices(101, -1);
        for (int i = 0; i < arr.size(); ++i)
            indices[arr[i]] = i;

        for (auto& piece: pieces) {
            int i = indices[piece[0]];
            for (int u : piece)
                if (i >= arr.size() || u != arr[i++])
                    return false;
        }
        return true;
    }
};