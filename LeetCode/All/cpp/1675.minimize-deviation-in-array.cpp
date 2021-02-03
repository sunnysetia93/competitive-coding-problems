// https://leetcode.com/problems/minimize-deviation-in-array/discuss/1041767/Java-Easy-cakewalk-whiteboard-video-solutioin

class Solution {
public:
    int minimumDeviation(vector<int>& nums) {
        multiset<int> mset;
        for (int n : nums) {
            if (n % 2) n *= 2;
            mset.insert(n);
        }
        int result = INT_MAX;
        while (*mset.rbegin() % 2 == 0) {
            result = min(result, *mset.rbegin() - *mset.begin());
            mset.insert(*mset.rbegin() / 2);
            mset.erase(*mset.rbegin());
        }
        return min(result, *mset.rbegin() - *mset.begin());
    }
};