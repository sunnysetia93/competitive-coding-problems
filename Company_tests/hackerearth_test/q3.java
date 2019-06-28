import java.util.*;

class Solution {
    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args){
        int n = sc.nextInt();
        int[][] input = new int[n][n];
        int[][] mat = new int[n][n];
        
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                input[i][j]=sc.nextInt();
                mat[i][j]=-1;
            }
        }

        int resultMax = 1;

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(mat[i][j]==-1)
                    maxHops(i,j,input,mat,n);

                resultMax = Math.max(resultMax,mat[i][j]);
            }
        }

        System.out.println(resultMax);
    }

    private static int maxHops(int i, int j, int[][] input, int[][] mat, int n) {

        if(i<0 || j<0 || i>=n || j>=n)
            return 0;
        
        // already present
        if(mat[i][j]!=-1)
            return mat[i][j];

        // top
        if(i>0 && ((input[i][j] + 1)==input[i-1][j]))
            mat[i][j] = Math.max(1 + maxHops(i-1,j,input,mat,n),mat[i][j]);
        // left
        if(j>0 && ((input[i][j] + 1)==input[i][j-1]))
            mat[i][j] = Math.max(1 + maxHops(i,j-1,input,mat,n),mat[i][j]);
        // bottom
        if(i<n-1 && ((input[i][j] + 1)==input[i+1][j]))
            mat[i][j] = Math.max(1 + maxHops(i+1,j,input,mat,n),mat[i][j]);
        // right
        if(j<n-1 && ((input[i][j] + 1)==input[i][j+1]))
            mat[i][j] = Math.max(1 + maxHops(i,j+1,input,mat,n),mat[i][j]);

        if(mat[i][j]==-1)
            return mat[i][j]=1;
        else
            return mat[i][j];

    }
}