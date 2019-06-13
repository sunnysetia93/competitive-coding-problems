// Problem link : https://github.com/sunnysetia93/competitive-coding-problems/blob/master/HackerRank_Problems/ProblemSolving/tony-and-his-books-English.pdf

// Find the question PDF in this directory.


import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int totalBooks = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> authorNames = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .collect(toList());

        List<String> bookTitles = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
            .collect(toList());

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int bookShelfRows = Integer.parseInt(firstMultipleInput[0]);

        int bookShelfCols = Integer.parseInt(firstMultipleInput[1]);
        
        SortedMap<String, TreeMap<String,Integer>> authorMap = new TreeMap<String, TreeMap<String,Integer>>();
        
        for(int i=0;i<totalBooks;i++){
            if(authorMap.containsKey(authorNames.get(i))){
                TreeMap<String,Integer> titleMap = authorMap.get(authorNames.get(i));
                if(titleMap.containsKey(bookTitles.get(i))){
                    int count = titleMap.get(bookTitles.get(i)) + 1;
                    titleMap.put(bookTitles.get(i),count);
                }
                else{
                    titleMap.put(bookTitles.get(i),1);
                }
                authorMap.put(authorNames.get(i),titleMap);
            }
            else{
                TreeMap<String,Integer> titleMap = new TreeMap<String,Integer>();
                titleMap.put(bookTitles.get(i),1);
                authorMap.put(authorNames.get(i),titleMap);

            }
        }
        
        SortedSet<Map.Entry<String,TreeMap<String,Integer>>> authorSet = new TreeSet<Map.Entry<String,TreeMap<String,Integer>>>(
        
        new Comparator<Map.Entry<String,TreeMap<String,Integer>>>(){
            @Override
            public int compare(Map.Entry<String,TreeMap<String,Integer>> a,Map.Entry<String,TreeMap<String,Integer>> b)             {
                int sizeA=0,sizeB=0;
                for(Map.Entry<String,Integer> val:a.getValue().entrySet()){
                    sizeA+=val.getValue();
                }
                for(Map.Entry<String,Integer> val:b.getValue().entrySet()){
                    sizeB+=val.getValue();
                }
                if(sizeA==sizeB){
                    return a.getKey().compareTo(b.getKey());
                }
                else if(sizeA>sizeB){
                    return -1;
                }
                else{
                    return 1;
                }
            }
        });
        
        
        SortedSet<Map.Entry<String,Integer>> titleSet = new TreeSet<Map.Entry<String,Integer>>(
        
        new Comparator<Map.Entry<String,Integer>>(){
            @Override
            public int compare(Map.Entry<String,Integer> a,Map.Entry<String,Integer> b){
                int countA = (a.getValue()).intValue();
                int countB = (b.getValue()).intValue();
                if(countA==countB){
                    return a.getKey().compareTo(b.getKey());
                }
                else if(countA>countB){
                    return -1;
                }
                else{
                    return 1;
                }
            }
        });
        authorSet.addAll(authorMap.entrySet());
        
        String[][] result = new String[bookShelfRows][bookShelfCols];
        
        for(String[] array : result) {
            Arrays.fill(array, "-");
        }
        
        int row=0;
        int col=0;
        
        for(Map.Entry<String,TreeMap<String,Integer>> e: authorSet){
            TreeMap<String,Integer> titleMap = e.getValue();
            
            titleSet.clear();
            titleSet.addAll(titleMap.entrySet());
            
            for(Map.Entry<String,Integer> s:titleSet){

                for(int i=0;i<s.getValue();i++){
                    
                    if(row%2==0){
                        result[row][col]=e.getKey()+"-"+s.getKey();
                        col++;
                        if(col>=bookShelfCols){
                            row++;
                            col=0;
                        }
                    }
                    else{
                        result[row][bookShelfCols -1 - col]=e.getKey()+"-"+s.getKey();
                        col++;
                        if(col>=bookShelfCols){
                            row++;
                            col=0;
                        }
                    }

                }
            }
            
        }
        
        for (String[] array : result) {
            int len=array.length;
            for(int i=0;i<len;i++){
                System.out.print(array[i]);
                if(i<len-1){
                    System.out.print(",");
                }
            }
            System.out.println();
        }
        
        bufferedReader.close();
    }
}

