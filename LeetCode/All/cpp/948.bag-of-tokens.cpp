class Solution {
public:
    int bagOfTokensScore(vector<int>& tokens, int P) {
        sort(tokens.begin(), tokens.end());
        int score = 0, max_score = 0;
        int i = 0, j = tokens.size()-1;
        while (i <= j) {
            while(i <= j && P >= tokens[i]) {
                P -= tokens[i++];
                ++score;
            }
            max_score = max(score, max_score);
            if (score <= 0) {
                break;
            }
            if (i <= j) {
                P += tokens[j--];
                --score;
            }
        }
        return max_score;
    }
};