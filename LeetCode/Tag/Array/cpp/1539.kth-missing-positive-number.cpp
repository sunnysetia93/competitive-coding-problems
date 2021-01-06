class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        for (int i = 0, x = 1; i < arr.size(); ++x) {
            if (arr[i] == x)
                ++i;
            else if (--k == 0)
                return x;
        }
        return arr.back() + k;
    }
};