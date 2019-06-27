import java.util.*;

class solution {

    public static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){
        String input = sc.next();
        int res = longestPalindromicSubSequence(input.toCharArray());
        System.out.println(res);
    }

    public static int longestPalindromicSubSequence(char[] arr){
        int len = arr.length;
        int[][] mat = new int[len][len];

        for(int i=0;i<len;i++){
            mat[i][i]=1;
        }

        for(int i=0;i<len-1;i++){
            for(int j=0;j<len-1-i;j++){
                    // System.out.println("["+ j+ "]"+"["+ (j+i+1) +"] =>" + mat[j][j+1+i]);
                if(arr[j]==arr[j+i+1]){
                    mat[j][j+1+i] = mat[j+1][j+i] + 2;
                }
                else{
                    mat[j][j+1+i]= Math.max(mat[j][j+i],mat[j+1][j+i+1]);
                }
            }
        }

        // for(int i=0;i<len;i++){
        //     for(int j=0;j<len;j++){
        //         System.out.print(mat[i][j]+" ");
        //     }
        //     System.out.println();
        // }
        return mat[0][len-1];
    }
}