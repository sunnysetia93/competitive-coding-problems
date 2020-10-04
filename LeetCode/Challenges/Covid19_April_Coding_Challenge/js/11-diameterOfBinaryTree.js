/*
    Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

    Example:
        Given a binary tree
                  1
                 / \
                2   3
               / \
              4   5
        Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

    Note: The length of path between two nodes is represented by the number of edges between them.

    Link: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3293/
*/

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
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;
    return (findDiameter(root) - 1);
};

const findDiameter = (root) =>{
    if(!root)
        return 0;

    const lHeight = findHeight(root.left);
    const rHeight = findHeight(root.right);

    const lDiameter = findDiameter(root.left);
    const rDiameter = findDiameter(root.right);

    return Math.max(lHeight + rHeight + 1, Math.max(lDiameter,rDiameter));
}

const findHeight = (node) => {
    if (!node)
        return 0;
    return (1 + Math.max(findHeight(node.left), findHeight(node.right)));
}