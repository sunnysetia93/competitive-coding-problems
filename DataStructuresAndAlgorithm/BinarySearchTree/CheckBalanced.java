package BinarySearchTree;

import java.util.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class CheckBalanced{

    public static boolean isBalanced(Node<Integer> node){
        if(checkBalanced(node)==Integer.MIN_VALUE)
            return false;
        return true;
    }

    public static Integer checkBalanced(Node<Integer> node){
        if(node==null)
            return -1;
        
        int leftSubtreeHeight = checkBalanced(node.left);
        if(leftSubtreeHeight==Integer.MIN_VALUE)
            return Integer.MIN_VALUE;

        int rightSubtreeHeight = checkBalanced(node.right);
        if(rightSubtreeHeight==Integer.MIN_VALUE)
            return Integer.MIN_VALUE;

        if(Math.abs(leftSubtreeHeight-rightSubtreeHeight)>1)
            return Integer.MIN_VALUE;
        else{
            return Math.max(leftSubtreeHeight,rightSubtreeHeight) + 1;
        }
    }
    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(12);
        bst.add(5);
        bst.add(7);
        bst.add(9);
        bst.add(4);
        bst.add(3);

        System.out.println("In-Order Traversal: ");
        bst.inOrderTraversal();

        Node<Integer> root = bst.getRootNode();

        System.out.println("Is the tree balanced: " + (CheckBalanced.isBalanced(root)?"YES":"NO"));
    }
}