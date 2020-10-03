// problem: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode node) {
        if(node==null)
            return new ArrayList<List<Integer>>();
        
        List<List<Integer>> lists = new ArrayList<List<Integer>>();

        Stack<TreeNode> s1 = new Stack<TreeNode>();
        Stack<TreeNode> s2 = new Stack<TreeNode>();

        s1.push(node);
        while(!s1.isEmpty() || !s2.isEmpty()){
            TreeNode current = null;
            ArrayList<Integer> newList = new ArrayList<Integer>();
            while(!s1.isEmpty()){
                 current = s1.pop();
                if(current.left!=null)
                    s2.push(current.left);
                if(current.right!=null)
                    s2.push(current.right);

                // System.out.print(current.data + " ");
                newList.add(current.val);
            }
            
            if(newList.size()!=0)
                lists.add(newList);
            newList = new ArrayList<Integer>();
            
            while(!s2.isEmpty()){
                current = s2.pop();
                if(current.right!=null)
                    s1.push(current.right);
                if(current.left!=null)
                    s1.push(current.left);
                
                // System.out.print(current.data + " ");
                newList.add(current.val);
            }
            
            if(newList.size()!=0)
                lists.add(newList);

        }
        
        return lists;
    }
}