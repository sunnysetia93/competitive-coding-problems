class Solution {
public:
    int minPartitions(string n) {
        int maxDigit = -1;
        for (char ch : n) {
            maxDigit = max(ch-'0', maxDigit);
            if (maxDigit == 9) break;
        }
        return maxDigit;
    }
};