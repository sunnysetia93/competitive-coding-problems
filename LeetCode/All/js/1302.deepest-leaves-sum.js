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

/**
 * Approach 1 - using DFS
 * */

let sum = 0;
var deepestLeavesSum = function (root) {
    const treeDepth = findDepthOfTree(root);
    sum = 0;
    findSumOfLeaves(root, 0, treeDepth);
    return sum;

};

function findDepthOfTree(node, level = 0) {

    if (node === null)
        return level;
    if (node.left === null && node.right === null)
        return level;

    let leftDepth = findDepthOfTree(node.left, level + 1);
    let rightDepth = findDepthOfTree(node.right, level + 1);
    return Math.max(leftDepth, rightDepth);
}

function findSumOfLeaves(node, level = 0, treeDepth) {


    if (node === null)
        return false;
    if (node.left === null && node.right === null && level === treeDepth) {
        sum += node.val;
        return true;
    }

    if (node.left === null && node.right === null)
        return false;


    const leftVal = findSumOfLeaves(node.left, level + 1, treeDepth);
    const rightVal = findSumOfLeaves(node.right, level + 1, treeDepth);

    return false;
}


/**
 * Approach 2 - using BFS
* */

var deepestLeavesSum = function (root) {
    let queue = [root], ans = 0, curr;

    while (queue.length) {
        let queueLength = queue.length;
        ans = 0;
        for (let i = 0; i < queueLength; i++) {
            curr = queue.shift();
            ans += curr.val;
            if (curr.left)
                queue.push(curr.left);
            if (curr.right)
                queue.push(curr.right);

        }

    }

    return ans;

};
