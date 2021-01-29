/**
 * TC: O(n)
 */
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

/**
 * For O(logN) solution, please refer:
 * https://leetcode.com/problems/kth-missing-positive-number/discuss/779999/JavaC%2B%2BPython-O(logN)
 */