class Solution {
public:
    int findLHS(vector<int>& nums) {
        unordered_map<int, int> freq;
        int result = 0;
        for (int x : nums) {
            ++freq[x];
            if (freq[x-1]) result = max(result, freq[x] + freq[x-1]);
            if (freq[x+1]) result = max(result, freq[x] + freq[x+1]);
        }
        return result;
    }
};