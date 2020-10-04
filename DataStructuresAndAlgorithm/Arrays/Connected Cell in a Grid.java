/*
    https://www.hackerrank.com/challenges/ctci-connected-cell-in-a-grid

    by : Sunny Setia

*/
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int m = in.nextInt();
        int grid[][] = new int[n][m];
        for(int grid_i=0; grid_i < n; grid_i++){
            for(int grid_j=0; grid_j < m; grid_j++){
                grid[grid_i][grid_j] = in.nextInt();
            }
        }
        int max=0;
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<m;j++)
            {
                max = Math.max(max,countCells(grid,i,j));
            }
        }
        
        System.out.println(max);
    }
    
    public static int countCells(int grid[][],int i,int j)
    {
        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]==0)
            return 0;
        
        int count = grid[i][j]--;
        count += countCells(grid, i + 1, j);
        count += countCells(grid, i - 1, j);
        count += countCells(grid, i, j + 1);
        count += countCells(grid, i, j - 1);
        count += countCells(grid, i + 1, j + 1);
        count += countCells(grid, i - 1, j - 1);
        count += countCells(grid, i - 1, j + 1);
        count += countCells(grid, i + 1, j - 1);
        return count;
    }
}
