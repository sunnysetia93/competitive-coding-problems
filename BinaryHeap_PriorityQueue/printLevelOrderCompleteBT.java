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

            
            
            for(int i=0;i<n/2;i++){
                if((2*i+1)<n && (2*i+2)<n){
                    System.out.println(" PARENT : " + arr[i] 
                    + " LEFT CHILD [" + ((2 * i) + 1) + "] : " + arr[(2 * i) + 1] 
                    + " RIGHT CHILD :" + arr[(2 * i) + 2]); 
                }
            }
        }
        
    }
}