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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];

    const inOrderTraversal = (root) => {
        if(!root) 
            return;
        inOrderTraversal(root.left);
        arr.push(root.val);
        inOrderTraversal(root.right);
    }

    inOrderTraversal(root);

    return arr[k-1];
};
