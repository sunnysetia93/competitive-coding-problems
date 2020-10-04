import java.util.*;

class CountingSort{

    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }

        int[] sorted = countingSort(arr, n);

        for(int i : sorted){
            System.out.print(i+" ");
        }
    }

    private static int[] countingSort(int[] arr,int n){
        int[] result = new int[n];
        int max = Integer.MIN_VALUE;
        for(int i : arr){
            max=Math.max(max, i);
        }

        int[] freq = new int[max+1];
        for(int i : arr){
            freq[i]++;
        }
        
        for(int i=0,k=0;i<=max;i++){
            for(int j=1;j<=freq[i];j++){
                result[k++]=i;
            }
        }

        return result;
    }
}

// Complexity of the algorithm is O(n+m) where n is number of items in array and m is number of unique elements