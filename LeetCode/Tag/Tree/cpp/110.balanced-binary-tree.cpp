/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    pair<bool, int> isBalancedUtil(TreeNode* node) {
        // If node is NULL, its height is 0 and it is a balanced binary tree
        if (!node)
            return {true, 0};

        // If left sub-tree is not balanced, return {false, -1}
        pair<bool, int> left = isBalancedUtil(node->left);
        if (!left.first) return {false, -1};

        // If right sub-tree is not balanced, return {false, -1}
        pair<bool, int> right = isBalancedUtil(node->right);
        if (!right.first) return {false, -1};

        // check if curr subtree is balanced;
        bool is_balanced = abs(left.second - right.second) <= 1;

        // Update the height of the current subtree
        int height = 1 + max(left.second, right.second);

        return {is_balanced, height};
    }

    bool isBalanced(TreeNode* root) {
        return isBalancedUtil(root).first;
    }
};