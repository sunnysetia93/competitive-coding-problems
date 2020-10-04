class Solution {
public:
    void combSum(vector<int>& candidates, vector<vector<int>>& ans, 
                 vector<int>& comb, int idx, int curr_sum, int target) {
        int n = candidates.size();
        if (idx == n) return;

        if (curr_sum == target) {
            ans.push_back(comb);
            return;
        }

        for(int i = idx; (i < n) && (curr_sum + candidates[i] <= target); i++) {
            comb.push_back(candidates[i]);
            combSum(candidates, ans, comb, i, curr_sum + candidates[i], target);
            comb.pop_back();
        }
    }
    
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        
        vector<vector<int>> ans;
        vector<int> comb;
        combSum(candidates, ans, comb, 0, 0, target);
        return ans;
    }
};