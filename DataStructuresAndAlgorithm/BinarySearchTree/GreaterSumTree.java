// convert BST to greater sum tree i.e., replace every node with sum of nodes greater than that node.

package BinarySearchTree;

import java.util.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class GreaterSumTree<T extends Comparable<T>>{

    private int sum = 0;
    public void convert(Node<Integer> node) {
        if(node==null)
            return;

        //right 
        convert(node.right);
        
        // middle node
        sum = sum + node.data;
        node.data =  sum - node.data;
        //left
        convert(node.left);        
    }
    
    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        bst.add(11);
        bst.add(2);
        bst.add(29);
        bst.add(1);
        bst.add(7);
        bst.add(15);
        bst.add(40);
        bst.add(35);
        Node<Integer> root = bst.getRootNode();
        bst.inOrderTraversalNonRecursive();
        GreaterSumTree<Integer> gst = new GreaterSumTree<Integer>();
        Integer sum = 0;
        gst.convert(root);
        bst.inOrderTraversalNonRecursive();
    }
}