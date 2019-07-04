package BinarySearchTree;

import java.util.*;


class Node<T extends Comparable<T>>{
    T data;
    Node<T> left,right;

    public Node(T val){
        this.data=val;
        this.left=null;
        this.right=null;
    }

    public Node(T val,Node<T> left,Node<T> right){
        this.data=val;
        this.left=left;
        this.right=right;
    }
}

class BinaryTreeLevelSortedOrder{
    public static void main(String[] args) throws InterruptedException {

        // test case 1 
        // Node<Integer> root = new Node<Integer>(7);
        // root.left = new Node<Integer>(6); 
        // root.right = new Node<Integer>(5); 
        // root.left.left = new Node<Integer>(4); 
        // root.left.right = new Node<Integer>(3); 
        // root.right.left = new Node<Integer>(2);
        // root.right.right = new Node<Integer>(1);


        // test case 2
        Node<Integer> root = new Node<Integer>(7);
        root.left = new Node<Integer>(16); 
        root.right = new Node<Integer>(1); 
        root.left.left = new Node<Integer>(4); 
        root.left.right = new Node<Integer>(13); 
        printSortedLevelOrder(root); 

    }


    private static void printSortedLevelOrder(Node<Integer> root) throws InterruptedException {
        if(root ==null)
            return;
        
        LinkedList<Node<Integer>> queue = new LinkedList<Node<Integer>>(); 
        PriorityQueue<Integer> currentQueue = new PriorityQueue<Integer>();
        PriorityQueue<Integer> nextQueue = new PriorityQueue<Integer>();

        queue.addLast(root);
        queue.addLast(null);
        currentQueue.add(root.data);

        while(!queue.isEmpty()){
            Node<Integer> node = queue.getFirst();
            
            if(node!=null){
                int element = currentQueue.peek();
                System.out.print(element + " ");
                queue.removeFirst();
                currentQueue.poll();
                if(node.left!=null){
                    nextQueue.add(node.left.data);
                    queue.addLast(node.left);
                }
                if(node.right!=null){
                    nextQueue.add(node.right.data);
                    queue.addLast(node.right);

                }
            }
            else{
                queue.removeFirst();
                currentQueue.poll();
                if(queue.isEmpty())
                    break;
                
                queue.addLast(null);
                System.out.println();


                //swap 
                PriorityQueue<Integer> temp = currentQueue;
                currentQueue = nextQueue;
                nextQueue = temp;
                

            }
            
        }
    }
}