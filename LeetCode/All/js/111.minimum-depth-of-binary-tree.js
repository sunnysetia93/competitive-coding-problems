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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root){
        return 0;
    }

    const leftDepth = minDepth(root.left);
    const rightDepth = minDepth(root.right);
    if(leftDepth === 0 || rightDepth === 0) {
        return leftDepth + rightDepth + 1;
    }
    return Math.min(leftDepth,rightDepth) + 1;
};
