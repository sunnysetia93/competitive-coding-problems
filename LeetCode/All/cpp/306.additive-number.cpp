#define ull unsigned long long

class Solution {
    bool isAdditiveNumber(string& num, ull a, ull b, int k, bool init) {
        if (k == num.length() && !init) return true;
        
        char firstChar = num[k];
        ull c = 0;
        while (k < num.length()) {
            c = 10*c + num[k]-'0';
            if (c > 0 && firstChar == '0') break;
            if (c > a+b) break;
            if (c == a+b) return isAdditiveNumber(num, b, c, k+1, false);
            ++k;
        }
        return false;
    }
    
public:

    bool isAdditiveNumber(string num) {
        if (num.length() < 3) return false;

        ull a = 0;
        for (int i = 0; i < num.length(); ++i) {
            a = 10*a + num[i]-'0';      // number from 0 to i index
            if (a > 0 && num[0] == '0') break;
            
            ull b = 0;
            for (int j = i+1; j < num.length(); ++j) {
                b = 10*b + num[j]-'0';  // number from i+1 to j index
                if (b > 0 && num[i+1] == '0') break;
                if (isAdditiveNumber(num, a, b, j+1, true)) return true;
            }
        }
        return false;
    }
};
