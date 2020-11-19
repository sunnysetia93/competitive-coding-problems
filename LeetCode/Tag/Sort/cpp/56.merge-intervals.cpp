class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort (intervals.begin(), intervals.end(), [] (vector<int>& i1, vector<int>& i2) {
            return i1[0] == i2[0] ? i1[1] > i2[1] : i1[0] < i2[0];
        });

        vector<vector<int>> res (1, intervals[0]);
        for (int i = 1; i < intervals.size(); ++i) {
            if (res.back()[1] < intervals[i][1]) {
                if (res.back()[1] < intervals[i][0]) {
                    res.push_back(intervals[i]);
                } else {
                    res.back()[1] = intervals[i][1];
                }
            }
        }
        return res;
    }
};