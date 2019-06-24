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

    public void breadthFirstSearch(){
        Node node = root;
        LinkedList<Node> queue = new LinkedList<Node>();

        if(root==null)
            return;
        
        queue.add(node);
        while(!queue.isEmpty()){
            Node temp = queue.removeFirst();
            System.out.print(temp.data+" ");
            if(temp.left!=null)
                queue.add(temp.left);
            if(temp.right!=null)
                queue.add(temp.right);
        }
        System.out.println();
        return;
    }

    public void depthFirstSearch(){
        depthFirstSearch(root);
        System.out.println();

    }

    private void depthFirstSearch(Node node){ 
        if(node!=null){
            System.out.print(node.data + " ");
            depthFirstSearch(node.left);
            depthFirstSearch(node.right);
        }
    }

    public void depthFirstSearch_NonRecursive(){
        HashSet<Node> hashSet = new HashSet<Node>();
        LinkedList<Node> stack = new LinkedList<Node>();

        if(root==null)
            return;
        stack.push(root);
        while(!stack.isEmpty()){
            Node popped = stack.pop();
            if(!hashSet.contains(popped)){
                    
                if(popped.right!=null)
                    stack.push(popped.right);
                if(popped.left!=null)
                    stack.push(popped.left);
                System.out.print(popped.data + " ");
                hashSet.add(popped);
            }
        }

        System.out.println();
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

    public void preOrderTraversal(){
        preOrderTraversal(root);
        System.out.println();
    }

    private void preOrderTraversal(Node node){
        if(node==null)
            return;

        System.out.print(node.data + " ");
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }

    public void postOrderTraversal(){
        postOrderTraversal(root);
        System.out.println();
    }

    public void postOrderTraversal(Node node){
        if(node==null)
            return;

        postOrderTraversal(node.left);
        postOrderTraversal(node.right);
        System.out.print(node.data + " ");
    }

    public static void main(String[] args){
        BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        System.out.println(bst.isEmpty());
        bst.add(10);
        bst.add(15);
        bst.add(13);
        bst.add(17);
        bst.add(20);
        bst.add(12);
        System.out.println("In-Order Traversal: ");
        bst.inOrderTraversal();
        System.out.println("Pre-Order Traversal: ");
        bst.preOrderTraversal();
        System.out.println("Post-Order Traversal: ");
        bst.postOrderTraversal();
        // bst.remove(17);
        // bst.inOrderTraversal();
        System.out.println("BFS: ");
        bst.breadthFirstSearch();
        System.out.println("DFS: ");
        bst.depthFirstSearch();
        System.out.println("DFS - Non recursive: ");
        bst.depthFirstSearch_NonRecursive();

    }
}