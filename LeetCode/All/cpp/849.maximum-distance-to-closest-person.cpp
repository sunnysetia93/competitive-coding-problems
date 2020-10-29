class Solution {
public:
    int maxDistToClosest(vector<int>& seats) {
        int max_dist = 0, curr_dist;
        for (int i = 0; i < seats.size();) {
            int j = i+1;
            if (seats[i] == 0) {
                for (; j < seats.size() && seats[j] == 0; ++j);
                if (i == 0 || j == seats.size()) {
                    curr_dist = j-i;
                } else {
                    curr_dist = ceil((j-i) / 2.0);
                }
                max_dist = max(curr_dist, max_dist);
            }
            i = j;
        }
        return max_dist;
    }
};