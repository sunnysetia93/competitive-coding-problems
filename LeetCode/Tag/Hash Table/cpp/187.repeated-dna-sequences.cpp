class Solution {
    unordered_map<unsigned long, int> freqMap;

public:
    vector<string> findRepeatedDnaSequences(string s) {
        vector<string> repeatedDnaSequences;
        unsigned long v = 0;
        
        for (int i = 0; i < s.length(); ++i) {
            v <<= 3;
            v |= s[i] & 7;      // last three bits of all nucleotides are different
            v &= 0x3FFFFFFF;    /* we only need 10*3 = 30 bits,
                                 * to represent a 10-letter-long sequence
                                 */
            if (++freqMap[v] == 2)
                repeatedDnaSequences.push_back(s.substr(i-9, 10));
        }
        return repeatedDnaSequences;
    }
};