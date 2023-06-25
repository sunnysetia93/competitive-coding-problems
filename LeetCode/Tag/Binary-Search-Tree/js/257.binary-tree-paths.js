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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const paths = [];


    function findAllPaths(root, currPath='') {
        if(root == null){
            return;
        }

        currPath += `${root.val}`;
        currPath +=  root.left || root.right ? '->' :'';

        if(!root.left && !root.right){
            paths.push(currPath);
            return;
        }
        
        findAllPaths(root.left,currPath);
        findAllPaths(root.right,currPath);
    }

    findAllPaths(root);
    return paths;
};
