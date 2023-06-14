/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2, mergedRoot=null) {
  if(!root1 && !root2)
    return null;
  const root1Val = root1 ? root1.val : 0;
  const root2Val = root2 ? root2.val : 0;
  const newRootVal = root1Val + root2Val;

  mergedRoot = new TreeNode(newRootVal);
  mergedRoot.left = mergeTrees(root1?.left, root2?.left, mergedRoot.left);
  mergedRoot.right = mergeTrees(root1?.right, root2?.right, mergedRoot.right);
  return mergedRoot;
};
