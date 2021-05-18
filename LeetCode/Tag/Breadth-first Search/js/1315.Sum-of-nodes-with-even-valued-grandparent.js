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
var sumEvenGrandparent = function (root) {
    const queue = [{
        node: root,
        parent: null,
        gp: null
    }];

    let sum = 0;

    while (queue.length) {
        const {node, parent, gp} = queue.shift();

        // console.log({node:node.val,parent,gp});

        if (gp && gp % 2 === 0)
            sum += node.val;

        if (node.left != null) {
            queue.push({
                node: node.left,
                parent: node.val,
                gp: parent
            })
        }

        if (node.right != null) {
            queue.push({
                node: node.right,
                parent: node.val,
                gp: parent
            })
        }
    }

    return sum;
};

// Approach 2 - recursive

var sumEvenGrandparent = function (node, p = 1, gp = 1) {
    if (node == null) return 0;
    return sumEvenGrandparent(node.left, node.val, p) + sumEvenGrandparent(node.right, node.val, p) + (gp % 2 == 0 ? node.val : 0);
}
