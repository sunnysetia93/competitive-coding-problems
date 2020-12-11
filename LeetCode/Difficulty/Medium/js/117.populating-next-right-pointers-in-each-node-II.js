/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    const stack = runBFS(root);
    console.log(stack);

    let prev = null;
    while (stack.length > 0) {
        const top = stack.pop();
        if (prev && (top.level === prev.level)) {
            top.node.next = prev;
            prev = top;
        } else {
            prev = top;
        }
    }

    return root;
};

function runBFS(root) {
    const queue = []
        , stack = [];
    queue.push({
        node: root,
        level: 0
    });
    while (queue.length > 0) {
        const topNode = queue.shift();
        if (topNode.node && topNode.node.left)
            queue.push({
                node: topNode.node.left,
                level: topNode.level + 1
            });
        if (topNode.node && topNode.node.right)
            queue.push({
                node: topNode.node.right,
                level: topNode.level + 1
            });
        stack.push(topNode);
    }

    return stack;
}