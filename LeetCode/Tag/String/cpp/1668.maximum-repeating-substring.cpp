class Solution {
public:
    int maxRepeating(string sequence, string word) {
        int maxK = 0, k = 0;
        int prv_i;
        int cr_i = sequence.find(word);

        while (cr_i != string::npos) {
            if (cr_i != prv_i + word.length())
                k = 0;

            if (maxK < ++k)
                maxK = k;

            prv_i = cr_i;
            cr_i = sequence.find(word, cr_i + word.length());
        }
        return maxK;
    }
};