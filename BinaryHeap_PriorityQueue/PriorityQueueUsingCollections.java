import java.util.*;

class Solution {
    
    public static void main(String[] args){
        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();

        pQueue.add(-5);
        pQueue.add(-15);
        pQueue.add(-10);
        pQueue.add(-2);

        // pQueue.

        for(int p : pQueue){
            System.out.print((-p) + " ");
        }

    }
}