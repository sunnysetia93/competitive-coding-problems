import java.io.*;
import java.util.*;
import java.text.*;

class Main {

    public static Scanner sc = new Scanner(System.in);
    private static DecimalFormat df = new DecimalFormat("0.00");
    public static void main(String[] args){

        try {
            String[] exemptedGoods = new String[]{"book","food","medical"};
            File file = new File("D:\\sunny_projects\\Competitive_projects\\competitive-coding-problems\\Implementation\\SalesTaxProblem\\input.txt"); 
            BufferedReader br = new BufferedReader(new FileReader(file)); 
            String st; 
            float totalTax=0;
            while ((st = br.readLine()) != null) 
            {
                String[] values = st.split(" ");
                int qty = Integer.parseInt(values[0]);
                float price = Float.parseFloat(values[values.length-1]);
                float total = qty*price;
                String item = values[1];
                int i=0;
                boolean foundFlag=false;
                int len=exemptedGoods.length;
                while(i<len){
                    if(item.equalsIgnoreCase(exemptedGoods[i])){
                        foundFlag=true;
                        i=len;
                    }
                    i++;
                }

                if(!foundFlag){
                    totalTax+=((total)/10);
                    System.out.println("tax calculated for item: "+item);
                }
            }
            System.out.println(df.format(totalTax));
            
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}