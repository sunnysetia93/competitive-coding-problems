/*
    Given an array find all pairs of elements whose difference is equal to a given
    number k. i.e. find number of possible combinations of i & j, s.t. a[i] a[j] = k
    
    By:Sunny Setia
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class Pair
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int k = Math.abs(sc.nextInt());
		int[] arr = new int[n];
		
		for(int i=0;i<n;i++)
		{
		    arr[i]=sc.nextInt();
		}
		
		Arrays.sort(arr);
		
		for(int i=0;i<n;i++)
		{
		    System.out.print(arr[i] + " ");
		}
		
		System.out.println();
		
		int flag = findPair(arr,n,k);
		
		if(flag==0)
		    System.out.println("No pairs found!");
	}
	
	public static int findPair(int[] arr,int n,int k)
	{
        int i=0,j=1;
        int temp=0;
        int flag=0;
        while(j<n && i<n)
        {
            temp = arr[j]-arr[i];
        
            if(temp<k)
            {
                j++;
            }
            else if(temp>k)
            {
                i++;
            }
            else
            {
                flag=1;
                System.out.println("Pair : " + i + " & " + j);
                i++;
                j++;
            }
        }
        
        return flag;
	}
}
