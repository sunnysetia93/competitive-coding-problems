/*
    Input array: 8 7 9 2 1 10
                  < > < > <

                7 9 2 8 1 10
*/

import java.util.*;
import java.lang.*;

class Solution{
    
    public static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }

        zigZagSort(arr,n);
        print(arr,n);
    }

    public static void zigZagSort(int[] arr, int n){
        boolean toggle = true;
        int temp = 0;
        for(int i=0;i<n-1;i++){
            if(toggle){
                // should be a < b
                if(arr[i]>arr[i+1]){
                    temp=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=temp;   
                }
            }
            else{
                // should be a < b
                if(arr[i]<arr[i+1]){
                    temp=arr[i];
                    arr[i]=arr[i+1];
                    arr[i+1]=temp;   
                }
            }
            toggle=!toggle;
        }
    }

    public static void print(int[] arr,int n){
        for(int i=0;i<n;i++)
            System.out.print(arr[i]+" ");
        System.out.println();
    }
}