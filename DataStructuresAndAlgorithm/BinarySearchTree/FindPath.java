package BinarySearchTree;

import java.util.*;
import java.lang.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class FindPath<T extends Comparable<T>> {

    public LinkedList<Node<T>> path(Node<T> start, Node<T> end){
        LinkedList<Node<T>> finalPath = new LinkedList<Node<T>>();
        
        if(start==null || end==null || start==end)
            return null;
        
        finalPath.add(start);
        int flag = 0;

        Node<T> node = start;

        while(node!=null){
            int cmp = (end.data).compareTo(node.data);
            // System.out.println(cmp + " where : start: "+ node.data + " and end : " + end.data);
            if(cmp>0){
                finalPath.add(node.right);
                node=node.right;
            }
            else if(cmp<0){
                finalPath.add(node.left);
                node=node.left;
            }
            else{
                flag=1;
                break;
            }
        }

        if(flag==0)
            return null;

        return finalPath;

    }
    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(12);

        Node<Integer> start = bst.search(10);
        if(start!=null)
        System.out.println(start.data);
        Node<Integer> end = bst.search(20);
        if(end!=null)
        System.out.println(end.data);

        FindPath<Integer> findPath = new FindPath<Integer>();
        LinkedList<Node<Integer>> result = findPath.path(start,end);

        if(result==null)
            System.out.println("no path found!");
        else
            for(Node<Integer> n : result){
                System.out.print(n.data + " => ");  // output : 10 => 15 => 17 => 20 =>
            }
    }
}