/*
 *  In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
    Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
    We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
    Return true if and only if the nodes corresponding to the values x and y are cousins.

 * Example 1:
    Input: root = [1,2,3,4], x = 4, y = 3
    Output: false

 * Example 2:
    Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
    Output: true

 * Example 3:
    Input: root = [1,2,3,null,4], x = 2, y = 3
    Output: false

 * Note:
    The number of nodes in the tree will be between 2 and 100.
    Each node has a unique integer value from 1 to 100.

 * Link : https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3322/

* */
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

var isCousins = function (root, x, y) {
    // check first for same parent as this will avoid finding Depth for each node if they have same parent.
    const isSameParent = checkIfSameParent(root, x, y);
    if (isSameParent)
        return false;

    let xDepth = findDepth(root, x, 0);
    let yDepth = findDepth(root, y, 0);

    return (xDepth === yDepth);
};

const findDepth = (root, val, depth) => {
    if (!root)
        return false;
    if (root && root.val === val)
        return depth;

    return findDepth(root.left, val, depth + 1) || findDepth(root.right, val, depth + 1);
}

const checkIfSameParent = (root, x, y) => {
    if (!root)
        return false;
    if (root.left && root.right && root.left.val == x && root.right.val == y)
        return true;
    if (root.left && root.right && root.left.val == y && root.right.val == x)
        return true;

    return checkIfSameParent(root.left, x, y) || checkIfSameParent(root.right, x, y);
}