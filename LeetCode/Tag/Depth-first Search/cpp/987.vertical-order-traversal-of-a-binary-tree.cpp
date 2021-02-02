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

    map<int, map<int, multiset<int>>> xmap;

    void inorder(TreeNode* root, int x, int y) {
        if (!root) return;
        inorder(root->left, x-1, y+1);
        xmap[x][y].insert(root->val);
        inorder(root->right, x+1, y+1);
    }

public:
    vector<vector<int>> verticalTraversal(TreeNode* root) {
        vector<vector<int>> result;
        inorder(root, 0, 0);
        for (auto& p : xmap) {
            auto& ymap = p.second;
            result.emplace_back();
            vector<int>& v1 = result.back();
            for (auto& q : ymap) {
                auto& mset = q.second;
                v1.insert(v1.end(), mset.begin(), mset.end());
            }
        }
        return result;
    }
};