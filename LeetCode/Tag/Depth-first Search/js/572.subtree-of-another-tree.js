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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!root){
      return false;
    }

    if(root.val === subRoot.val){
      if(checkIfSameTree(root,subRoot)){
        return true;
      }
    }
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot);
};

const checkIfSameTree = function(root,subRoot){
  if(!root && !subRoot)
    return true;
  if(!subRoot && root)
    return false;
  if(!root && subRoot)
    return false;
  if(root.val !== subRoot.val)
    return false;

  return checkIfSameTree(root.left, subRoot.left) && checkIfSameTree(root.right, subRoot.right);

}
