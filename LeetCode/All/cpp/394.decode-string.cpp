class Solution {
public:
    string decode(string& s, int& i) {
        string sDecoded;
        for (; i < s.length() && s[i] != ']'; ++i) {
            if (isdigit(s[i])) {
                int rep = 0;
                while (isdigit(s[i])) {
                    rep = 10*rep + (s[i++] - '0');
                }
                string toRepeat = decode(s, ++i);
                while (rep--) {
                    sDecoded.append(toRepeat);
                }
            } else {
                sDecoded += s[i];
            }
        }
        return sDecoded;
    }

    string decodeString(string s) {
        int i = 0;
        return decode(s, i);
    }
};