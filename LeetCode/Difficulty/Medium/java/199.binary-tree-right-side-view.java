/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private List<Integer> result = new ArrayList<>();

    void solve(TreeNode root, int level) {
        if (root == null) return;

        if (result.size()-1 < level)
            result.add(root.val);
        else
            result.set(level, root.val);

        solve(root.left, level+1);
        solve(root.right, level+1);
    }

    public List<Integer> rightSideView(TreeNode root) {
        solve(root, 0);
        return result;
    }
}