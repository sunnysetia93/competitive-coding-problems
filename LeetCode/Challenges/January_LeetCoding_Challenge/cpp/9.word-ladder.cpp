class Solution {
    unordered_set<string> wordSet;
    unordered_set<string> nextWords;
    unordered_set<string> prevWords;
    
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        for (string& word: wordList) wordSet.insert(word);
        if (wordSet.find(endWord) == wordSet.end()) return 0;
        
        wordSet.erase(beginWord);
        prevWords.insert(beginWord);
        
        wordSet.erase(endWord);
        nextWords.insert(endWord);
        
        int ladder = 2;
        while (!prevWords.empty() && !nextWords.empty()) {
            if (prevWords.size() > nextWords.size())
                swap(prevWords, nextWords);

            unordered_set<string> temp;
            for (auto itr = prevWords.begin(); itr != prevWords.end(); ++itr) {
                string word = *itr;
                for (int i = 0; i < word.length(); ++i) {
                    char letter = word[i];
                    for (char ch = 'a'; ch <= 'z'; ++ch) {
                        if (ch == letter) continue;
                        word[i] = ch;
                        if (nextWords.find(word) != nextWords.end())
                            return ladder;
                        if (wordSet.find(word) != wordSet.end()) {
                            temp.insert(word);
                            wordSet.erase(word);
                        }
                    }
                    word[i] = letter;
                }
            }
            swap(prevWords, temp);
            ++ladder;
        }
        return 0;
    }
};