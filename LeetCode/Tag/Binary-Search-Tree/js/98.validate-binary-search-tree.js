/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, lowerBound = -Infinity, upperBound = Infinity) {
    if(!root) return true;

    if(lowerBound < root.val && root.val < upperBound){
        return isValidBST(root.left,lowerBound, root.val) && isValidBST(root.right,root.val, upperBound);
    } 
    else{
        return false;
    }
};
