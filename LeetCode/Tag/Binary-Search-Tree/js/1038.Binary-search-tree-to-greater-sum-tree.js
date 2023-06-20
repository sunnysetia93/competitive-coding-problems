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
 * @return {TreeNode}
 */
var bstToGst = function(root) {

    let total = 0;
    traverseAndUpdateToGST(root);
    return root;


    function traverseAndUpdateToGST(node){
        if(node === null)
            return total;

        // right
        traverseAndUpdateToGST(node.right);

        //center
        node.val = node.val + total;
        total = node.val;

        //left
        traverseAndUpdateToGST(node.left);

        return node.val;
    }


};
