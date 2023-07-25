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
 * @param {number} targetSum
 * @return {number}
 */
// var pathSum = function(root, targetSum) {
//     let count = 0;

//     const helper = (node, sum = 0) => {
//         if(!node)
//             return;
//         sum = node.val + sum;
//         if(sum === targetSum){
//             count += 1;
//         }

//         helper(node.left, sum);
//         helper(node.right, sum);
//     }
//     const dfs = (node) => {
//         if(!node){
//             return;
//         }

//         helper(node, 0);
//         dfs(node.left);
//         dfs(node.right);
//     }

//     dfs(root);
//     return count;
// };


var pathSum = function(root, targetSum) {
    let count = 0;
    const map = {0:1};

    const dfs = (node,sum = 0) => {
        if(!node){
            return;
        }
        sum += node.val;
        if(map[sum - targetSum] != null){
            count += map[sum - targetSum];
        }
        map[sum] = map[sum] ? map[sum] + 1 : 1;
        dfs(node.left, sum);
        dfs(node.right, sum);
        map[sum] -= 1;
    }

    dfs(root);
    return count;
};
