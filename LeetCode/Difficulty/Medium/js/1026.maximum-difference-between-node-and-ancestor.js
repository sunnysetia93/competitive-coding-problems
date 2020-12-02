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
var maxAncestorDiff = function(root) {
    let maxDiff = 0;

    function traverseSubtree(node,max,min){
        if(node==null || node.val==null)
            return max-min;

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        let left = traverseSubtree(node.left,max,min);
        let right = traverseSubtree(node.right,max,min);

        return Math.max(left,right);
    }

    return traverseSubtree(root,root.val,root.val);
};