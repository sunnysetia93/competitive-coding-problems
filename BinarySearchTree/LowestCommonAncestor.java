/*
    lowest common ancestor of two nodes present in a BSTs
    Tree : 
        10
        /\
       5  15
          /\
        13  17
        /   /\
       12  16 20

       Node A : 20
       Node B : 16
       lowest common ancestor : 17
 */

package BinarySearchTree;

import java.util.*;

class Solution {

    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        // System.out.println(bst.isEmpty());
        bst.add(10);
        bst.add(5);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(16);
        bst.add(20);
        bst.add(12);
        Node<Integer> root = bst.getRootNode();
        Node<Integer> nodeA = root.right.right.right; // node 20
        Node<Integer> nodeB = root.right.right.left; // node 16

        Node<Integer> commonAncestorNode = lowestCommonAncestor(root,nodeA,nodeB);  
        System.out.println(commonAncestorNode.data);    // node 17
    
    }

    private static Node<Integer> lowestCommonAncestor(Node<Integer> node, Node<Integer> nodeA, Node<Integer> nodeB) {
        
        if(node==null)
            return null;

        if(nodeA.data < node.data && nodeB.data < node.data)
            return lowestCommonAncestor(node.left, nodeA, nodeB);
        else if(nodeA.data > node.data && nodeB.data > node.data)
            return lowestCommonAncestor(node.right, nodeA, nodeB);
        else
            return node;
    }
}

