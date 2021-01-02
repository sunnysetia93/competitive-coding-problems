/**
 * If height of left and right subtree is same, then current node is lowest ancestor of the deepest nodes
 * If height of left subtree is more, the lowest ancestor lies in the left subtree
 * If height of right subtree is more, the lowest ancestor lies in the right subtree
 */
class Solution {
    public TreeNode subtreeWithAllDeepest(TreeNode root) {
        return getHeight(root).getKey();
    }

    private Pair<TreeNode, Integer> getHeight(TreeNode root) {
        if (root == null) {
            return new Pair<>(null, 0);
        }
        Pair<TreeNode, Integer> l = getHeight(root.left), r = getHeight(root.right);
        int leftHt = l.getValue(), rightHt = r.getValue();
        if (leftHt == rightHt) {
            return new Pair<>(root, 1 + leftHt);
        } else if (l.getValue() > r.getValue()) {
            return new Pair<>(l.getKey(), 1 + leftHt);
        } else {
            return new Pair<>(r.getKey(), 1 + rightHt);
        }
    }
}