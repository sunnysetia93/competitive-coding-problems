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
    let diameter = 0;
    let height = 0; // also finding height here - just for fun 
    // as the login is based around finding height of the tree.
    
    dfsHeightAndDiameter(root);

    console.log({diameter, height});
    return diameter;

    function dfsHeightAndDiameter(node,level){
        if(!node) return 0;

        const left = dfsHeightAndDiameter(node.left);
        const right = dfsHeightAndDiameter(node.right);

        diameter = Math.max(diameter, left + right);
        height = Math.max(left, right);
        // console.log({diameter, height});

        return 1 + Math.max(left,right);
    }
    


};
