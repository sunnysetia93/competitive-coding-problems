class Solution {
    bool areDuplicatesPresent(string& A) {
        unordered_set<char> char_set(A.begin(), A.end());
        return char_set.size() < A.length();
    }

    bool areTwoMismatched(string& A, string& B) {
        vector<int> diffI;
        for (int i = 0; i < A.length(); ++i)
            if (A[i] != B[i])
                diffI.push_back(i);

        return diffI.size() == 2 && A[diffI[0]] == B[diffI[1]] && A[diffI[1]] == B[diffI[0]];
    }

public:
    bool buddyStrings(string A, string B) {
        if (A.length() != B.length())
            return false;

        if (A == B)
            return areDuplicatesPresent(A);

        return areTwoMismatched(A, B);
    }
};