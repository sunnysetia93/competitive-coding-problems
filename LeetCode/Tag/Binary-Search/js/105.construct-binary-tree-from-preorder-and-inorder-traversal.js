/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length && !inorder.length)
      return null;
    const root = new TreeNode(preorder[0]);
    const mid = inorder.findIndex(r => r === preorder[0]); 
    // Inorder helps to find elements to the left of mid will be in the left subtree and similarly for the right of mid
    root.left = buildTree(preorder.slice(1,mid+1), inorder.slice(0,mid)) // preorder(1=>mid) and inorder (0 => mid -1)
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1)); // preorder(right half) and inorder(right half)
    return root; 
};
