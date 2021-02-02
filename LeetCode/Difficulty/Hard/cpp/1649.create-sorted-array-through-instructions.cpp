/**
 * For explanation, refer:
 * https://leetcode.com/problems/create-sorted-array-through-instructions/discuss/927531/JavaC%2B%2BPython-Binary-Indexed-Tree
 */

#define LSB(a) ((a) & -(a)) // zeroes all the bits except the least significant one

class Solution {
    vector<int> c;

    void addK(int i, int k) {
        while (i < 100001) {
            c[i] += k;
            i += LSB(i);
        }
    }

    int getSum(int i) {
        int res = 0;
        while (i > 0) {
            res += c[i];
            i -= LSB(i);
        }
        return res;
    }
    
public:

    Solution () { c.resize(100001, 0); }

    int createSortedArray(vector<int>& A) {
        int res = 0, n = A.size(), mod = 1e9 + 7;
        for (int i = 0; i < n; ++i) {
            res = (res + min(getSum(A[i] - 1), i - getSum(A[i]))) % mod;
            addK(A[i], 1);
        }
        return res;
    }
};