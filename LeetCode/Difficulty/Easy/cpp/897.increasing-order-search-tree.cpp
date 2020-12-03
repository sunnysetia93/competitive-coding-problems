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
public:
    pair<TreeNode*, TreeNode*> solve(TreeNode* root) {
        TreeNode *head = root, *tail = root;

        if (root->left) {
            auto res = solve(root->left);
            root->left = NULL;
            res.second->right = root;
            
            head = res.first;
        }

        if (root->right) {
            auto res = solve(root->right);
            root->right = res.first;
            
            tail = res.second;
        }
        return {head, tail};
    }

    TreeNode* increasingBST(TreeNode* root) {
        return solve(root).first;
    }
};