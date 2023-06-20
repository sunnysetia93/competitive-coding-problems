/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
    int freq = 0;

public:

    int pseudoPalindromicPaths (TreeNode* root) {
        if (!root) return 0;
        int res;
        freq ^= 1 << (root->val);   // toggle the bit

        if (!root->left && !root->right)
            res = (freq & (freq-1)) == 0;
        else
            res = pseudoPalindromicPaths(root->left) + pseudoPalindromicPaths(root->right);

        freq ^= 1 << (root->val);   // toggle again while backtracking
        return res;
    }
};