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
var findTilt = function(root) {
    let sumOfDifference = 0;

    function findDifference(node){
        if(!node)
            return 0;
        if(node.val==null)
            return 0;

        const leftSum = findDifference(node.left);
        const rightSum = findDifference(node.right);

        sumOfDifference += Math.abs(leftSum - rightSum);

        return node.val + leftSum + rightSum;
    }

    findDifference(root);
    return sumOfDifference
};