class Solution {
public:
    int bitwiseComplement(int N) {
        if (N == 0) return 1;
        int power, lo = -1, hi = 31;
        unsigned int mask;

        // binary search to find hi
        while (hi - lo > 1) {
            power = lo + (hi-lo)/2;
            mask = 1 << power;
            if (mask > N) {
                hi = power;
            } else {
                lo = power;
            }
        }
        // pow(2, hi) is the least power of 2 greater than N
        mask = pow(2, hi) - 1;
        return N ^ mask;
    }
};