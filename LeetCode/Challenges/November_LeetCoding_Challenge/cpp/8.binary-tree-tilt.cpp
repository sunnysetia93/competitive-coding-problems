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
    int totalTilt = 0;

    int getSum(TreeNode* root) {
        if (!root) return 0;
        int leftSum = getSum(root->left);
        int rightSum = getSum(root->right);
        totalTilt += abs(leftSum - rightSum);
        return leftSum + root->val + rightSum;
    }

public:
    int findTilt(TreeNode* root) {
        getSum(root);
        return totalTilt;
    }
};