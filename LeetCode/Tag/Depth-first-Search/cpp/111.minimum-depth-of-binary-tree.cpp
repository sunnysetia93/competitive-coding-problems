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

    void minDepthUtil(TreeNode* root, int depth, int& minD) {
        if (depth >= minD) {
            return;
        }
        if (!root->left && !root->right) {
            minD = depth;
            return;
        }
        if (root->left) {
            minDepthUtil(root->left, depth+1, minD);
        }
        if (root->right) {
            minDepthUtil(root->right, depth+1, minD);
        }
    }

    int minDepth(TreeNode* root) {
        if (!root) {
            return 0;
        }
        int minD = INT_MAX;
        minDepthUtil(root, 1, minD);
        return minD;
    }
};