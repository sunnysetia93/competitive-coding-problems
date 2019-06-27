// https://practice.geeksforgeeks.org/problems/root-to-leaf-paths-sum/1
/*
                    6                               
                /   \                          
                3     5                      
            /   \     \
            2    5      4             
                /  \                        
            7    4                 
                    
        There are 4 leaves, hence 4 root to leaf paths:
        Path                      Number
        6->3->2                   600+30+2=632
        6->3->5->7                6000+300+50+7=6357
        6->3->5->4                6000+300+50+4=6354
        6->5>4                    600+50+4=654   
        Answer = 632 + 6357 + 6354 + 654 = 13997 
*/
package BinarySearchTree;

import java.util.*;
import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class FindAllPaths<T extends Comparable<T>>{
    
    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(12);

        Node<Integer> root = bst.getRootNode();

        FindAllPaths<Integer> paths = new FindAllPaths<Integer>();
        LinkedList<Node<Integer>> stack = new LinkedList<Node<Integer>>();
        paths.allPaths(root,stack);

        // 10 => 15 => 13 => 12 => null | sum : 11642
        // 10 => 15 => 17 => 20 => null | sum : 11690
    }

    // works like inorder traversal 
    public void allPaths(Node<Integer> node,LinkedList<Node<Integer>> stack){
        if(node==null)
            return;
        
        stack.add(node);
        allPaths(node.left,stack);

        // instead of printing node data, check if its a leaf node and print the stack.
        if(node.left==null && node.right==null){
            Integer sum=0;
            int index=stack.size()-1;
            for(Node<Integer> n : stack){
                System.out.print(n.data+" => ");
                sum+=(n.data)*((int)Math.pow(10,index));
                index--;
            }
            System.out.println(" null | sum : " + sum);
            sum=0;
        }

        allPaths(node.right, stack);
        stack.pollLast();
    }
}