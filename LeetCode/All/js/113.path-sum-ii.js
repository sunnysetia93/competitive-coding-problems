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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const result = [];

    const dfs = (node, path = [], sum = 0) => {
        if(!node)
            return;
        if(!node.left && !node.right && (node.val + sum) === targetSum){
            result.push([...path,node.val]);
            return;
        }

        if(node.left)
            dfs(node.left, [...path, node.val], sum + node.val);
        if(node.right)
            dfs(node.right, [...path, node.val], sum + node.val);
    }
    dfs(root);
    return result;
};
