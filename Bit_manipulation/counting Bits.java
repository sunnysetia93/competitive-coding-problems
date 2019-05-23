/*
    https://leetcode.com/problems/counting-bits/

    in O(n) time

    By : Sunny Setia
*/

class Solution {
    public int[] countBits(int num) {
        
        int[] arr = new int[num+1];
        int p=1;
        int pow=1;
        arr[0]=0;
        for(int i=1;i<=num;i++)
        {
            if(i==pow)
            {
                arr[i]=1;
                pow = pow << 1;
                p=1;
            }
            else
            {
                arr[i]=arr[p]+1;
                p++;
            }
                
        }
        
        return arr;
        
    }
    
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        
        int n=sc.nextInt();
        
        Solution s = new Solution();
        
        int arr[] = s.countBits(n);
        
        for(int i : arr)
            System.out.print(i+",");
    }
}
