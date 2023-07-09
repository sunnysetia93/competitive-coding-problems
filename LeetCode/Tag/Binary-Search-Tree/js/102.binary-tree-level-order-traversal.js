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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null){
        return [];
    }
    let q1 = [];
    let q2 = [];

    q1.push(root);
    let i = 0;
    let result = [];
    let activeQ;
    let oldQ;
    let subArr = [];
    while(q1.length || q2.length){
        if(result.length%2===0){
            activeQ = q1;
            oldQ = q2;
        }
        else{
            activeQ = q2;
            oldQ = q1;
        }
        
        let ele = activeQ.shift();
        subArr.push(ele);
        if(activeQ.length === 0){
            result.push([...subArr.map(x=>x.val)]);
            subArr = [];
        }


        if(ele.left != null){
            oldQ.push(ele.left);
        }
        if(ele.right != null){
            oldQ.push(ele.right);
        }
    }

    return result;
};
