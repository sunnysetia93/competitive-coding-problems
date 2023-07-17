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
var widthOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    let queue = [{node:root, num:1n}];
    let max = 1;
    while(queue.length){
        let next = [];
        while(queue.length){
            let {node, num} = queue.shift();
            if(node.left)
                next.push({node: node.left, num: num*2n});
            if(node.right)
                next.push({node: node.right, num: num * 2n + 1n});
        }
        let count = getMax(next);
        max = count > max ? count : max;
        queue = next;
    }

    return max;
};

function getMax(arr) {
    if(arr.length === 0){
        return 0;
    }

    let left = arr[0];
    let right = arr[arr.length - 1];
    return right.num - left.num + 1n;
}


