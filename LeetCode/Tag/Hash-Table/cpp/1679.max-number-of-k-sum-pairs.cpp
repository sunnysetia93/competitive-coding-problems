class Solution {
public:
    int maxOperations(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        int count = 0, minFreq;
        for (int x : nums ) {
            ++freq[x];
            if (2*x == k) {
                count += freq[x]/2;
                freq[x] %= 2;
            } else if (freq[k-x] > 0) {
                minFreq = min(freq[x], freq[k-x]);
                freq[x] -= minFreq;
                freq[k-x] -= minFreq;
                count += minFreq;
            }
        }
        return count;
    }
};