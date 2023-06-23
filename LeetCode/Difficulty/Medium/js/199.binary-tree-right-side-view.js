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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    const stack = [];
    const result = [];
    let printLevel = 0;
    stack.push({node:root, level:0});
    
    while(stack.length!=0) {
        const {node, level} = stack.pop();
        if(level === printLevel){
            result.push(node.val);
            printLevel++;
        }
        
        if(node.left != null){
            stack.push({node: node.left, level: level+1});
        }
        if(node.right != null){
            stack.push({node: node.right, level: level+1});
        }

    }
    return result;
};
