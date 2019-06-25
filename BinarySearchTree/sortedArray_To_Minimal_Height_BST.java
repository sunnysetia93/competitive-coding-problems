package BinarySearchTree;

import java.util.*;
import java.lang.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class MinimalBST<T extends Comparable<T>>{

    public Node<T> createTreeFromArray(Node<T> node, int[] arr){
        node = createTreeFromArray(node,arr, 0, arr.length-1);
        return node;
    }

    private Node<T> createTreeFromArray(Node<T> node, int[] arr,int start, int end){
        if(start>end)
            return null;
        
        int mid = (start+end)/2;
        node = new Node(arr[mid]);
        node.left = createTreeFromArray(node.left, arr, start, mid-1);
        node.right = createTreeFromArray(node.right, arr, mid+1, end);

        return node;
    }

    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        int[] inputArr = new int[]{1,4,5,7,9,10,12};
        Node<Integer> root = bst.getRootNode();

        MinimalBST<Integer> minimalBST = new MinimalBST<Integer>();
        root = minimalBST.createTreeFromArray(root,inputArr);
        bst.inOrderTraversal(root);
    }
}