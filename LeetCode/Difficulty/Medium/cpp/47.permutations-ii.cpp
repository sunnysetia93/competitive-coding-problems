class Solution {
    vector<vector<int>> ans;
    vector<int> perm;
    vector<bool> used;

    void move(vector<int>& nums) {
        int n = nums.size();
        if (perm.size() == n) {
            ans.push_back(perm);
            return;
        }

        for(int i = 0; i < n; i++) {
            if(!used[i]) {
                used[i] = true;
                perm.push_back(nums[i]);
                move(nums);
                perm.pop_back();
                used[i] = false;
                
                while(i+1 < n && nums[i] == nums[i+1]) i++;
            }
        }
    }

public:

    vector<vector<int>> permuteUnique(vector<int>& nums) {

        used.resize(nums.size());
        sort(nums.begin(), nums.end());
        move(nums);
        return ans;
    }
};