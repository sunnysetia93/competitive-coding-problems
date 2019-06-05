/*
    Input type : 
        4 7
        1 3 4 5
        1 4 5 7
    Output: 
        max value possible: 9
        Items: 
        Item no. 3 => Weight: 4 with value: 5
        Item no. 2 => Weight: 3 with value: 4
*/

import java.util.*;
import java.lang.*;
import java.io.*;

class Main
{
	public static void main (String[] args) throws java.lang.Exception
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] lineOne = br.readLine().split(" ");
        int n = Integer.parseInt(lineOne[0]);
        int maxWeight = Integer.parseInt(lineOne[1]);
        
        String[] lineTwo = br.readLine().split(" ");
        int[] weights = new int[lineTwo.length];
        
        for(int k =0;k<lineTwo.length;k++){
            weights[k]= Integer.parseInt(lineTwo[k]);
        }
         
        String[] lineThree = br.readLine().split(" ");
        int[] values = new int[lineThree.length];
        
        for(int k =0;k<lineThree.length;k++){
            values[k]= Integer.parseInt(lineThree[k]);
        }
        
        int[][] matrix = new int[n][maxWeight+1];
        
        for(int r=0;r<matrix.length;r++){
            for(int c=1;c<matrix[0].length;c++){
                
                if(r==0){
                    matrix[r][c]=0;
                }
                else if(weights[r]<=c){
                        matrix[r][c]=Math.max((values[r] + matrix[r-1][c-weights[r]]),matrix[r-1][c]);
                }
                else{
                    matrix[r][c]=matrix[r-1][c];
                }
            }
        }
        
        int r = matrix.length-1;
        int c = matrix[0].length-1;
        ArrayList<Integer> result = new ArrayList<Integer>();
        while(r>0 && c>0){
            if(matrix[r][c]==0){
                break;
            }
            else if(matrix[r][c]!=matrix[r-1][c]){
                result.add(r);
                r=r-1;
                c=c-weights[r];
            }
            else{
                r=r-1;
            }
        }
        
        System.out.println("max value possible: " + matrix[matrix.length-1][matrix[0].length-1]);
        
        System.out.println("Items: ");
        for(Integer v : result){
            System.out.println("Item no. " + (v+1) + " => Weight: "+weights[v]+" with value: "+ values[v]);
        }
        
        
	}
}
