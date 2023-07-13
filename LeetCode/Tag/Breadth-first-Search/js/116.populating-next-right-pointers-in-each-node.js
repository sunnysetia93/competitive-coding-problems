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
//dfs
// var connect = function(root, rightNode = null) {
//     if(!root) return root;

//     root.next = rightNode;
//     connect(root.left,root.right);
//     connect(root.right, rightNode ? rightNode.left : null); // genius
//     return root;

// };

//bfs

var connect = function(root) {
    if(!root) return root;
    let queue = [root];
    while(queue.length != 0){
        let next = [];
        while(queue.length!=0){
            let node = queue.shift();
            node.next = queue[0] || null;
            if(node.left != null){
                next.push(node.left);
                next.push(node.right);
            }
        }
        queue = next;
    }

    return root;
}
