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
var increasingBST = function(root) {
    let resultNode,currentNode;

    function traverseTree(node){
        if(node==null)
            return;
        traverseTree(node.left);
        addToFinalTree(node.val);
        traverseTree(node.right);
    }

    function addToFinalTree(val){
        const newNode = new TreeNode(val,null,null);
        if(resultNode==null){
            currentNode = newNode;
            resultNode = currentNode;
        }
        else{
            currentNode.right = newNode;
            currentNode = currentNode.right;
        }
    }

    traverseTree(root);

    return resultNode;
};