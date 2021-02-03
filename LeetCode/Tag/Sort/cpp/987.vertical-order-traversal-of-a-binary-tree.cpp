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
    map<int, vector<pair<int, int>>> M;
    
public:
    void dfs(TreeNode* root, int x, int y) {
        if (!root) return;

        M[x].push_back({-y, root->val});
        dfs(root->left, x - 1, y - 1);
        dfs(root->right, x + 1, y - 1);
    }

    vector<vector<int>> verticalTraversal(TreeNode* root) {
        vector<vector<int>> res;
        dfs(root, 0, 0);
        
        for (auto& p : M) {
            res.emplace_back();
            sort(p.second.begin(), p.second.end());

            for (auto [_, v] : p.second)
                res.back().push_back(v);
        }
        return res;
    }
};