class Solution {
    vector<string> morse = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
    
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        set<string> transformations;
        for (string word : words) {
            string t;
            for (char ch : word) {
                t.append(morse[ch-'a']);
            }
            transformations.insert(t);
        }
        return transformations.size();
    }
};