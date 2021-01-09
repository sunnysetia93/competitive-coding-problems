class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> wordDict;
        for (string& word: wordList) wordDict.insert(word);
        if (wordDict.find(endWord) == wordDict.end()) return 0;
        wordDict.erase(beginWord);
        wordDict.erase(endWord);
        unordered_set<string> nextWords ({beginWord}), prevWords ({endWord});
        int ladder = 2;
        while (!nextWords.empty() && !prevWords.empty()) {
            if (nextWords.size() > prevWords.size())
                swap(nextWords, prevWords);
            unordered_set<string> temp;
            for (auto itr = nextWords.begin(); itr != nextWords.end(); itr++) {
                string word = *itr;
                for (int p = 0; p < word.length(); p++) {
                    char letter = word[p];
                    for (char ch = 'a'; ch <= 'z'; ++ch) {
                        if (ch == letter) continue;
                        word[p] = ch;
                        if (prevWords.find(word) != prevWords.end())
                            return ladder;
                        if (wordDict.find(word) != wordDict.end()) {
                            temp.insert(word);
                            wordDict.erase(word);
                        }
                    }
                    word[p] = letter;
                }
            }
            swap(nextWords, temp);
            ladder++; 
        }
        return 0;
    }
};