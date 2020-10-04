package BinarySearchTree;

import java.util.*;
import java.lang.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class Index { 
  
    int index = 0; 
} 
  

class MinimalBST<T extends Comparable<T>>{

    Index index = new Index(); 

    public Node<T> createTreeFromInOrderArray(Node<T> node, int[] arr){
        node = createTreeFromInOrderArray(node,arr, 0, arr.length-1);
        return node;
    }

    private Node<T> createTreeFromInOrderArray(Node<T> node, int[] arr,int start, int end){
        if(start>end)
            return null;
        
        int mid = (start+end)/2;
        node = new Node(arr[mid]);
        node.left = createTreeFromInOrderArray(node.left, arr, start, mid-1);
        node.right = createTreeFromInOrderArray(node.right, arr, mid+1, end);

        return node;
    }

    public Node<Integer> createTreeFromPreOrderArray(int[] arr){
        return createTreeFromPreOrderArray(arr,index,arr[0],Integer.MIN_VALUE, Integer.MAX_VALUE, arr.length);

    }
    private Node<Integer> createTreeFromPreOrderArray(int[] preOrderArr, Index preIndex, int element, int min, int max, int size) {
        if(preIndex.index>=size)
            return null;
        
        Node<Integer> node = null;

        if(max>element && element>min){
            
            node = new Node<Integer>(element);
            preIndex.index+=1;
            if(preIndex.index<size){
                node.left = createTreeFromPreOrderArray(preOrderArr,preIndex,preOrderArr[preIndex.index],min,element,size);
                node.right = createTreeFromPreOrderArray(preOrderArr,preIndex,preOrderArr[preIndex.index],element,max,size);
            }
        }
        return node;
    }

    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        // int[] inputArr = new int[]{1,4,5,7,9,10,12};
        Node<Integer> root = bst.getRootNode();

        MinimalBST<Integer> minimalBST = new MinimalBST<Integer>();
        // root = minimalBST.createTreeFromInOrderArray(root,inputArr);
        // bst.inOrderTraversal(root);

        int[] preOrderArr = new int[]{7,4,1,5,10,9,12};
        root = minimalBST.createTreeFromPreOrderArray(preOrderArr);
        bst.inOrderTraversal(root);
    }

}