/**
 * Explanation:
 * https://leetcode.com/problems/short-encoding-of-words/discuss/125784/Trie-Solution
 */

struct TrieNode {
    unordered_map<char, TrieNode*> nextChar;
};

class Solution {    
public:
    int minimumLengthEncoding(vector<string>& words) {
        TrieNode root;
        vector<pair<TrieNode*, int>> leaves;
        for (auto& word : unordered_set<string>(words.begin(), words.end())) {
            TrieNode* cur = &root;
            for (int i = word.length()-1, depth = 1; i >= 0; --i, ++depth) {
                if (!cur->nextChar[word[i]]) cur->nextChar[word[i]] = new TrieNode();
                cur = cur->nextChar[word[i]];
            }
            if (cur->nextChar.size() == 0)
                leaves.push_back({cur, word.length() + 1});  // 1 is added for '#'
        }
        int result = 0;
        for (auto& leaf : leaves)
            if (leaf.first->nextChar.size() == 0)
                result += leaf.second;

        return result;
    }
};