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
    
    void traverse(TreeNode* root, TreeNode*& inorderSuccessor) {
        if (!root) return;
        traverse(root->right, inorderSuccessor);
        if (inorderSuccessor) root->val += inorderSuccessor->val;
        inorderSuccessor = root;
        traverse(root->left, inorderSuccessor);
    }

public:
    TreeNode* convertBST(TreeNode* root) {
        TreeNode* inorderSuccessor = NULL;
        traverse(root, inorderSuccessor);
        return root;
    }
};