import java.util.*;
import java.lang.*;

public class BinarySearchTree<T extends Comparable<T>> {
    private int nodeCount =0;
    private Node root = null;

    private class Node{
        T data;
        Node left,right;

        public Node(T val,Node left,Node right){
            this.data=val;
            this.left=left;
            this.right=right;
        }
    }

    public boolean isEmpty(){
        return size()==0;
    }

    public int size(){
        return nodeCount;
    }

    public boolean add(T elem){

        if(contains(root,elem))
            return false;
        else{
           
            root = add(root,elem);
            nodeCount++;
            return true;
        }
    }

    private Node add(Node node,T elem){

        // found leaf - null
        if(node==null){
            node = new Node(elem,null,null);
        }
        else{
            // iterate under a subtree - left or right

            if(elem.compareTo(node.data)>0){
                node.right = add(node.right,elem);
            }
            else{
                node.left = add(node.left,elem);
            }
        }

        return node;
    }

    public boolean remove(T elem){
        if(!contains(root,elem))
            return false;
        else {
            root = remove(root,elem);
            nodeCount--;
            return true;
        }
    }
    private Node remove(Node node,T elem){
        if(node == null)
            return null;
        
        int cmp = elem.compareTo(node.data);

        // right subtree - element greater than current node value
        if(cmp>0)
            node.right = remove(node.right,elem);
        else if( cmp<0)
            node.left = remove(node.left,elem);
        // found the node to be removed
        else{

            // only right subtree present
            if(node.left==null){
                Node rightChild = node.right;
                node.data=null;
                node=null;

                return rightChild;
            }
            // only left subtree present
            else if(node.right==null){

                Node leftChild = node.left;

                node.data=null;
                node=null;

                return leftChild;
            }
            else{
                // finding smallest element from right substree
                Node smallest = findMin(node.right);
                System.out.println(smallest.data);
                node.data=smallest.data;

                node.right = remove(node.right,smallest.data);

            }
        }
        return node;
    }

    private Node findMin(Node node){
        while(node.left!=null){
            node=node.left;
        }

        return node;
    }

    private boolean contains (Node node, T elem){
        if(node == null)
            return false;
        
        int cmp = elem.compareTo(node.data);
        
        // greater than node, move to right subtree
        if(cmp>0)
            return contains(node.right,elem);
        else if(cmp<0)
            return contains(node.left,elem);
        else 
            return true;
    }

    public void inOrderTraversal(){
        inOrderTraversal(root);
        System.out.println();
    }

    private void inOrderTraversal(Node node){
        
        if(node == null)
            return;
        
        inOrderTraversal(node.left);
        System.out.print(node.data + " ");
        inOrderTraversal(node.right);
    }

    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        System.out.println(bst.isEmpty());
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(18);
        bst.inOrderTraversal();
        bst.remove(17);
        bst.inOrderTraversal();

    }
}