class Solution {
public:
    string getSmallestString(int n, int k) {
        string result(n, 'a'-1);
        int minCh = 1;
        for (int i = 0; i < n; ++i) {
            minCh = max(minCh, k - (n-1 - i)*26);
            result[i] += minCh;
            k -= minCh;
        }
        return result;
    }
};