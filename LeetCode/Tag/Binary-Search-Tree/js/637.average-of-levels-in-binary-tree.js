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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root) return [];
    let q1 = [], q2 = [];
    q1.push(root);

    const arr = [];
    let count = 0, sum=0;
    let activeQ, oldQ;
    while(q1.length || q2.length){
        if(arr.length % 2 === 0){
            activeQ = q1;
            oldQ = q2;
        }
        else{
            activeQ = q2;
            oldQ = q1;
        }

        const node = activeQ.pop();
        sum += node.val;
        count++;
        if(activeQ.length === 0){
            const avg = sum/count;
            arr.push(avg);
            sum = 0;
            count = 0;
        }
        if(node.left){
            oldQ.push(node.left);
        }
        if(node.right){
            oldQ.push(node.right);
        }
    }

    return arr;
};
