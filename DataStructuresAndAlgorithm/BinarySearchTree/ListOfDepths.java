/*
    List of depths: Given a binary tree, design an algo which creates a linked list of all the nodes
    at each depth(eg: if you have a tree with depth D, then there will be D lists)

*/
package BinarySearchTree;

import java.util.*;
import java.lang.*;

class ListOfDepths<T extends Comparable<T>>{

    public void createLists(Node<T> node,ArrayList<LinkedList<Node<T>>> lists, int level){
        if(node==null)
            return;
        
        LinkedList<Node<T>> list = null;
        if(lists.size()==level){
            list = new LinkedList<Node<T>>();
            lists.add(list);
        }
        else
            list = lists.get(level);
        list.add(node);
        createLists(node.left, lists, level+1);
        createLists(node.right, lists, level+1);

    }
    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(12);
        Node<Integer> root = bst.getRootNode();
        ArrayList<LinkedList<Node<Integer>>> lists = new ArrayList<LinkedList<Node<Integer>>>();

        ListOfDepths<Integer> lod = new ListOfDepths<Integer>();
        lod.createLists(root, lists, 0);
        
        int index = 0;
        for(LinkedList<Node<Integer>> l:lists){
            System.out.print("level " + index++ + " : ");
            for(Node<Integer> n:l){
                System.out.print(n.data + " ");
            }
            System.out.println();
        }
        
    }
}