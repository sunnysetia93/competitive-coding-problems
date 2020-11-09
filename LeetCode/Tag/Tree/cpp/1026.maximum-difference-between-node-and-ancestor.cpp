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
    int V = 0;

    void updateChildrenMinMax(TreeNode* root, int& siblingMin, int& siblingMax) {
        if (!root) {
            return;
        }
        int minChild = 1e5 + 1, maxChild = -1;
        updateChildrenMinMax(root->left, minChild, maxChild);
        updateChildrenMinMax(root->right, minChild, maxChild);
        if (maxChild > -1) {
            int diff = max(abs(root->val - maxChild), abs(root->val - minChild));
            if (V < diff) {
                V = diff;
            }
        }
        siblingMin = min(siblingMin, min(root->val, minChild));
        siblingMax = max(siblingMax, max(root->val, maxChild));
    }

public:
    int maxAncestorDiff(TreeNode* root) {
        int minChild = 1e5 + 1, maxChild = -1;
        updateChildrenMinMax(root, minChild, maxChild);
        return V;
    }
};