class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        if (!intervals.size()) return 0;
        sort(intervals.begin(), intervals.end(), [&](vector<int>& i1, vector<int>& i2) {
            if (i1[0] == i2[0]) return i1[1] > i2[1];
            return i1[0] < i2[0];
        });
        
        int nNotCovered = 0, right = 0;
        for (vector<int>& interval : intervals) {
            if (interval[1] > right) {
                right = interval[1];
                ++nNotCovered;
            }
        }
        return nNotCovered;
    }
};