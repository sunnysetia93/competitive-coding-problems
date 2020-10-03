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
 
/*----------SOLUTION----------*/

class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q){
        if(p==NULL and q==NULL){
            return true;
        }
        if(p==NULL or q==NULL){
            return false;
        }
        if(p->val==q->val){
            bool leftMatch=isSameTree(p->left, q->left);
            bool rightMatch=isSameTree(p->right, q->right);
            return leftMatch and rightMatch;
        }else{
            return false;
        }
    }
    bool isSubtree(TreeNode* s, TreeNode* t) {
        if(s==NULL and t==NULL){
            return true;
        }
        if(s==NULL or t==NULL){
            return false;
        }
        if(isSameTree(s,t)){
            return true;
        }
        bool leftMatch=isSubtree(s->left,t);
        bool rightMatch=isSubtree(s->right,t);
        return leftMatch or rightMatch;
    }
};
