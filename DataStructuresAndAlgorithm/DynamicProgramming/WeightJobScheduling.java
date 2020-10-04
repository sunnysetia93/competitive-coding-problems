/*
    // problem link : https://www.youtube.com/watch?v=cr6Ip0J9izc
    input : 
            6                   //no of elements
            1 2 4 6 5 7         // startTime
            4 6 7 8 9 10        // endTime
            3 5 2 6 4 8         // profit
    output:
            13
*/

import java.util.*;

public class WeightJobScheduling{
    
    public static Scanner sc = new Scanner(System.in);
    
    public static int[] splitLine(String[] input,int n){
        int[] res = new int[input.length];

        for(int i=0;i<n;i++){
            res[i]=Integer.parseInt(input[i]);
        }
        
        return res;
    }

    private static int profitCalculation(int[] startTime, int[] endTime, int[] profit, int n) {
        int[] resultArray = new int[n];

        for(int i=0;i<n;i++){
            resultArray[i]=profit[i];
        }
        for(int i=1;i<n;i++){    
            for(int j=0;j<i;j++){
                if(endTime[j]<=startTime[i]){
                    resultArray[i]=Math.max(profit[i],resultArray[j]+profit[i]);
                }
            }
            
        }

        //find max in array
        int resultMax = Integer.MIN_VALUE;
        for(int i=0;i<n;i++){
            resultMax=Math.max(resultArray[i], resultMax);
        }
        return resultMax;
    }
    public static void main(String[] args) {
        int n = sc.nextInt();
        int[] startTime = new int[n];
        int[] endTime = new int[n];
        int[] profit = new int[n];
        sc.nextLine();

        String[] readline = sc.nextLine().split(" "); 
        startTime = splitLine(readline, n);

        readline = sc.nextLine().split(" "); 
        endTime = splitLine(readline, n);

        readline = sc.nextLine().split(" "); 
        profit = splitLine(readline, n);

        int totalProfit = profitCalculation(startTime,endTime,profit,n);
        System.out.println(totalProfit);
    }

}