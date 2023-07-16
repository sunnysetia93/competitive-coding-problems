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
//     let curr = root;

//     while(curr != null){
//         if(p.val > curr.val && q.val > curr.val){
//             curr = curr.right;
//         }
//         else if(p.val < curr.val && q.val < curr.val){
//             curr = curr.left;
//         }
//         else { // split
//             break;
//         }
//     }
//     return curr;
// };

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;

    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right,p,q);
    }
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left,p,q);
    }

    return root;

};
