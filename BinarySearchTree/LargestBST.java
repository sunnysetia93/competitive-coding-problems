package BinarySearchTree;

import BinarySearchTree.Node;

class LargestBST{
    class MinMaxInfo{
        public Integer min;
        public Integer max;
        public boolean isBST;
        public int size;

        public MinMaxInfo(){
            min = Integer.MAX_VALUE;
            max = Integer.MIN_VALUE;
            size = 0;
            isBST = true;
        }
    }

    public int findLargestBST(Node<Integer> node){
        MinMaxInfo res = findLargest(node);
        return res.size;
    }

    public MinMaxInfo findLargest(Node<Integer> node){
        
        if(node==null)
        return new MinMaxInfo();
        
        MinMaxInfo leftSubtree = findLargest(node.left);
        MinMaxInfo rightSubtree = findLargest(node.right);
        // System.out.println("for node left of node " + node.data + " size : " + leftSubtree.size + " min : " + leftSubtree.min + " max : " + leftSubtree.max);
        // System.out.println("for node right of node " + node.data + " size : " + rightSubtree.size + " min : " + rightSubtree.min + " max : " + rightSubtree.max);


        MinMaxInfo current = new MinMaxInfo();
        if(leftSubtree.isBST == false || rightSubtree.isBST == false || (leftSubtree.max > node.data || rightSubtree.min < node.data)){
            current.isBST=false;
            current.size=Math.max(leftSubtree.size, rightSubtree.size);
            return current;
        }
        else{
            current.size = 1 + leftSubtree.size + rightSubtree.size;
            current.min = node.left == null ? node.data : leftSubtree.min;
            current.max = node.right == null ? node.data : rightSubtree.max;
            current.isBST = true;
            // System.out.println("for node " + node.data + " size : " + current.size + " min : " + current.min + " max : " + current.max);

            return current;
        }
    }

    public static void main(String[] args){
        Node<Integer> root = new Node<Integer>(25);
        root.left = new Node<Integer>(18);
        root.left.left = new Node<Integer>(19);
        root.left.left.right = new Node<Integer>(15);
        root.left.right = new Node<Integer>(20);
        root.left.right.left = new Node<Integer>(18);
        root.left.right.right = new Node<Integer>(25);

        root.right = new Node<Integer>(50);
        root.right.right = new Node<Integer>(60);
        root.right.right.right = new Node<Integer>(70);
        root.right.right.left = new Node<Integer>(55);
        root.right.left = new Node<Integer>(35);
        root.right.left.left = new Node<Integer>(20);
        root.right.left.right = new Node<Integer>(40);
        root.right.left.left.right = new Node<Integer>(25);


        LargestBST LBST = new LargestBST();
        int res = LBST.findLargestBST(root);
        System.out.println(res);
        


    }
}