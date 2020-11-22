class Solution {
public:
    int atMostNGivenDigitSet(vector<string>& digits, int n) {
        string num = to_string(n);
        int result = 0, nSize = num.length(), dSize = digits.size();
        for (int d = 1; d < nSize; ++d) {
            result += pow(dSize, d);
        }

        for (int i = 0; i < nSize; ++i) {
            auto lb = lower_bound(digits.begin(), digits.end(), string(1, num[i]));
            result += (lb - digits.begin()) * (pow(dSize, nSize-i - 1));

            // if num[i] is not present in the given digits vector
            if (lb == digits.end() || (*lb)[0] != num[i]) {
                return result;
            }
        }
        return result+1;
    }
};