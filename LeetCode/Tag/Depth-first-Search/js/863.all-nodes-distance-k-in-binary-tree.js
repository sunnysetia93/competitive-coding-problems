/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {

    const findTarget = (node, parent) => {
        if(!node){
            return null;
        }
        node.parent = parent;
        if(node === target){
            return node;
        }
        return findTarget(node.left, node) || findTarget(node.right, node);
    }

    const findAllKApart = (node, k) => {
        if(!node || node.visited) return null;
        if(k === 0){
            result.push(node.val);
        }
        node.visited = true;
        findAllKApart(node.left, k - 1);
        findAllKApart(node.right, k - 1);
        findAllKApart(node.parent, k - 1);
    }

    // main
    const result = [];
    const node = findTarget(root, null);
    findAllKApart(node, k);
    return result;

};
