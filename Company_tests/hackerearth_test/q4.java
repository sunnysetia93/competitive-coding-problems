import java.util.*;

class Solution{
    
    public static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){
        int noOfBooks = sc.nextInt();
        int[] chapters = new int[noOfBooks];
        int[] hours = new int[noOfBooks];

        for(int i=0;i<noOfBooks;i++){
            chapters[i]=sc.nextInt();
        }
        for(int i=0;i<noOfBooks;i++){
            hours[i]=sc.nextInt();
        }
        int totalHours = sc.nextInt();
        long startTime = System.nanoTime();
        int result = maxBooks(noOfBooks,chapters,hours,totalHours);
        // int result = maxBooksDP(noOfBooks,chapters,hours,totalHours);

        System.out.println(result);

        long endTime   = System.nanoTime();
        long totalTime = endTime - startTime;
        System.out.println(totalTime);
        double elapsedTimeInSecond = (double) totalTime / 1_000_000_000;

        System.out.println(elapsedTimeInSecond + " seconds");
    }

    private static int maxBooks(int noOfBooks, int[] chapters, int[] hours, int totalHours) {
        int[] bookHours = new int[noOfBooks];
        int bookCount = 0;
        int bookSum = 0;
        for(int i=0;i<noOfBooks;i++)
            bookHours[i]=chapters[i]*hours[i];
        Arrays.sort(bookHours);
        
        for(int bookHour : bookHours){
            if((bookHour+bookSum)<=totalHours){
                bookSum+=bookHour;
                bookCount++;
            }
            else{
                break;
            }
        }
        System.out.println("book sum: " + bookSum);
        System.out.println("book count: " + bookCount);
        return bookCount;
    }

    public static int maxBooksDP(int noOfBooks, int[] chapters, int[] hours, int totalHours) {
        int[][] mat = new int[noOfBooks+1][totalHours+1];

        for(int i=1;i<=noOfBooks;i++){
            int bookHour = chapters[i-1]*hours[i-1];
            for(int j=1;j<=totalHours;j++){
                if(bookHour<=j){
                    mat[i][j]=Math.max(mat[i-1][j],1 + mat[i-1][j-bookHour]);
                }
                else{
                    mat[i][j]=mat[i-1][j];
                }
            }
        }

        // for(int i=0;i<=noOfBooks;i++){
        //     for(int j=0;j<=totalHours;j++){
        //         System.out.print(mat[i][j]+" ");
        //     }
        //     System.out.println();
        // }

        return mat[noOfBooks][totalHours];
    }
}