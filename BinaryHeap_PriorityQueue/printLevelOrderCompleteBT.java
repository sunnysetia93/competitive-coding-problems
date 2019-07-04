// https://practice.geeksforgeeks.org/problems/print-binary-tree-levels-in-sorted-order/0

import java.util.*;
import java.lang.*;
import java.io.*;
class Solution
 {
	public static Scanner sc = new Scanner(System.in);
	public static void main (String[] args){
        int t = sc.nextInt();

        while((t--)>0){
            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++)
                arr[i]=sc.nextInt();

            printLevelOrder(arr,n);
        }
    }

    private static void printLevelOrder(int[] arr, int n) {
        if(arr.length == 0)
            return;

        LinkedList<Integer> queue = new LinkedList<Integer>();
        SortedSet<Integer> pq = new TreeSet<Integer>();

        queue.addLast(0);
        queue.addLast(null);

        while(!queue.isEmpty()){
            Integer index = queue.getFirst();
            queue.removeFirst();

            if(index!=null){
                pq.add(arr[index]);
                if(((2*index)+1)<n){
                    queue.addLast(((2*index)+1));
                }

                if(((2*index)+2)<n){
                    queue.addLast(((2*index)+2));
                }

            }
            else{
                if(pq.isEmpty())
                    break;
                for(int val:pq){
                    System.out.print(val + " ");
                }

                System.out.println();
                queue.addLast(null);
                pq.clear();
            }
        }
        
    }
}