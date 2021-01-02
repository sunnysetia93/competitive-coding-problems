/**
 * TC : O(sqrt(N))
 * SC : O(1)
 */
class Solution {
public:
    int kthFactor(int n, int k) {
        float root = sqrt(n);
        for (int f = 1; f < root; ++f)
            if (n%f == 0 && --k == 0)
                return f;

        for (int f = root; f >= 1; --f)
            if (n%f == 0 && --k == 0)
                return n/f;
        
        return -1;
    }
};