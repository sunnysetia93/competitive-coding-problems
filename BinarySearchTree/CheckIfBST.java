// check if a given binary tree is a BST.
package BinarySearchTree;

import BinarySearchTree.BinarySearchTree;
import BinarySearchTree.Node;

class CheckIfBST{

    public static boolean check(Node<Integer> node){
        if(node==null)
            return false;
        
        boolean leftSubtree = check(node.left);
        boolean rightSubtree = check(node.right);
        // System.out.println(node.data + " - left result " + leftSubtree + " & right result " + rightSubtree);

        if(!leftSubtree && !rightSubtree)
            return true;
        
        boolean flag = false;
        if(node.left!=null && (node.left.data.compareTo(node.data)<0))
            flag = true;
        else
            flag=false;
        
        if(flag && node.right!=null && (node.data.compareTo(node.right.data) < 0))
            flag = true;
        else
            flag=false;

        return flag;
    }
    public static void main(String[] args){

        // example case 1 : reuslt - is a BST - true

        // BinarySearchTree<Integer> bst = new BinarySearchTree<Integer>();
        // bst.add(10);
        // bst.add(15);
        // bst.add(3);
        // bst.add(17);
        // bst.add(20);
        // bst.add(12);
        // Node<Integer> root = bst.getRootNode();

        // --------------------------------------------------------------------

        // example case 2 : result - not a BST - false

        Node<Integer> root = new Node<Integer>(10);
        root.left=new Node<Integer>(14);
        root.right=new Node<Integer>(15);
        root.right.right=new Node<Integer>(20);

        System.out.println("is this tree a BST :" + CheckIfBST.check(root));
    }
}