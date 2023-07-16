/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
    
//     const findPath = (node, target, arr = []) => {
//       if(!node) {
//         return false;
//       }
//       arr.push(node);
//       if(node === target) {
//         return true;
//       }
//       const left = findPath(node.left, target,arr);
//       if(left)
//         return true;

//       const right = findPath(node.right, target,arr);
//       if(right)
//         return true;

//       arr.pop();
       
//       return false;
//     }
//     let arr = [];
//     findPath(root, p, arr);
//     let qArr = [];
//     findPath(root, q, qArr);

//     let i = 0;

//     let prev = null;
//     while(i < arr.length || i < qArr.length){
//       if(arr[i] === qArr[i]){
//         prev = arr[i];
//       }
//       else {
//         return prev;
//       }
//       i++;
//     }
//     return prev;

// };

const lowestCommonAncestor = (root,p,q) => {
  if(!root || root === p || root === q){
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right  // p and q are in the right subtree
  if (!right) return left  // p and q are in the left subtree
  return root // p is in one side and q is in the other
}
