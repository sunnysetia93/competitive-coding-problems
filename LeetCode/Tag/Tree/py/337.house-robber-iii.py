# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def robUtil(self, root: TreeNode) -> (int, int):
        if not root:
            return (0, 0)
        wLeftRoot, woLeftRoot = self.robUtil(root.left)
        wRightRoot, woRightRoot = self.robUtil(root.right)
        return (root.val + woLeftRoot + woRightRoot, max(wLeftRoot, woLeftRoot) + max(wRightRoot, woRightRoot))
    
    def rob(self, root: TreeNode) -> int:
        wRoot, woRoot = self.robUtil(root)
        return max(wRoot, woRoot)