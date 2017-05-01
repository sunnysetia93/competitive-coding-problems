/* 
Ques. Rotate a 2D matrix by 90 degrees clockwise
        E.g Consider Array
                
                1 2 3
                4 5 6
                7 8 9
        
        After rotating 90 degrees clockwise it will be :
               
                7 4 1
                8 5 2
                9 6 3
    
    By : Sunny Setia
  
  */

import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
        int a[][] = new int[n][n];
        int b[][] = new int[n][n];
        int cnt=0;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                a[i][j]=++cnt;
            }
        }
        
        b = rotate(a,n);
        
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                System.out.print(b[i][j] + " ");
            }
            System.out.println();
        }
        
	}
	
	public static int[][] rotate(int[][] a,int n)
	{
	    int b[][]=new int[n][n];
	    
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<n;j++)
            {
                b[j][n-1-i]=a[i][j];
            }
        }
        
        return b;
	}
}
