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
 
/* -------SOLUTION------- */
class Solution {
public:
    TreeNode* helper(TreeNode* root, int low, int high){
        if(root==NULL){
            return NULL;
        }
        TreeNode* left=helper(root->left,low,high);
        TreeNode* right=helper(root->right, low, high);
        int curr=root->val;
        if(curr>=low and curr<=high){
            root->left=left;
            root->right=right;
            return root;
        }else{
            if(left!=NULL){
                return left;
            }else{
                return right;
            }
        }
    }
    TreeNode* trimBST(TreeNode* root, int low, int high) {
        return helper(root,low,high);
    }
};

/*--------- TEST CASES--------*/
/*
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]

Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]

Input: root = [1], low = 1, high = 2
Output: [1]

Input: root = [1,null,2], low = 1, high = 3
Output: [1,null,2]

Input: root = [1,null,2], low = 2, high = 4
Output: [2]
*/