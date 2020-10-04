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
    bool isEvenOddTree(TreeNode* root) {
        if (!root) return true;
        
        deque<TreeNode*> deq;
        deq.push_back(root);
        
        int level = 0, deq_size = 0;
        while (!deq.empty()) {
            ++level;
            deq_size = deq.size();
            int _max = -1;
            if (level % 2 == 0) {
                for (int i = 0; i < deq_size; ++i) {
                    int elem = deq.back()->val;
                    if (elem % 2 == 1 || elem <= _max) return false;
                    _max = elem;
                    if (deq.back()->right) deq.push_front(deq.back()->right);
                    if (deq.back()->left) deq.push_front(deq.back()->left);
                    deq.pop_back();
                }
            } else {
                for (int i = 0; i < deq_size; ++i) {
                    int elem = deq.front()->val;
                    if (elem % 2 == 0 || elem <= _max) return false;
                    _max = elem;
                    if (deq.front()->left) deq.push_back(deq.front()->left);
                    if (deq.front()->right) deq.push_back(deq.front()->right);
                    deq.pop_front();
                }
            }
        }
        return true;
    }
};