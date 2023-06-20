# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root: TreeNode, minVal: int, maxVal: int) -> bool:
        if not root:
            return True
        return minVal <= root.val and root.val <= maxVal and self.solve(root.left, minVal, root.val-1) and self.solve(root.right, root.val+1, maxVal)

    
    def isValidBST(self, root: TreeNode) -> bool:
        return self.solve(root, -(1 << 31), (1 << 31) - 1)