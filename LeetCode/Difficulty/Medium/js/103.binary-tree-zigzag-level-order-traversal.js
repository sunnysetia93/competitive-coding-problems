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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return [];
    }
    const result = [];
    let queue = [root];
    let deep = 0;
    while(queue.length) {
        let next = [];
        let levels = [];
        while(queue.length){
            const node = queue.shift();
            if(deep%2 === 0){
                levels.push(node.val);
            }
            else {
                levels.unshift(node.val);
            }

            if(node.left)
                next.push(node.left);
            if(node.right)
                next.push(node.right);

        }
        deep++;
        if(levels.length){
            result.push(levels);
        }
        queue = next;
    }
    return result;
};
