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

        for(int i=0;i<n;i++){
            System.out.print(sorted[i]+" ");
        }
    }

    private static int[] countingSort(int[] arr,int n){
        int[] result = new int[n];
        int max = Integer.MIN_VALUE;
        for(int i=0;i<n;i++){
            max=Math.max(max, arr[i]);
        }

        int[] freq = new int[max+1];
        for(int i=0;i<n;i++){
            freq[arr[i]]++;
        }
        int k=0;
        for(int i=0;i<=max;i++){
            for(int j=1;j<=freq[i];j++){
                result[k++]=i;
            }
        }

        return result;
    }
}