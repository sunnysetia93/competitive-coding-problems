
import java.util.*;

class TestClass {
    public static Scanner sc = new Scanner(System.in);
    public static void main(String args[] ) throws Exception {
        int l1 = sc.nextInt();
        int s1 = sc.nextInt();
        int l2 = sc.nextInt();
        int s2 = sc.nextInt();
        
        boolean result = checkIfStepmanMeet(l1,s1,l2,s2);
        System.out.println(result);
    }
    
    public static boolean checkIfStepmanMeet(int l1,int s1,int l2,int s2){
        
        if(l1==l2)
            return true;
        // if(s1==0 || s2==0)
        //     return false;
            
        if((s1>0 && s2<0 && l1>l2) || (s1<0 && s2>0 && l2>l1)){
            return false;
        }
        
        if((l1<l2 && s1>0 && s2<0) || (l2<l1 && s1<0 && s2>0)){
            // System.out.println("coming towards each other");
            s1 = Math.abs(s1);
            s2 = Math.abs(s2);
            if(s1+s2==0)
                return true;
            
            int rem =0;
            if(l1>l2)
                rem = (l1-l2)%(s1+s2);
            else
                rem = (l2-l1)%(s1+s2);
            if(rem==0)
                return true;
            else
                return false;
        }
        
   
        
        if(s1>s2){
            
            int rem =0;
            if(l1>l2)
                rem = (l1-l2)%(s1-s2);
            else
                rem = (l2-l1)%(s1-s2);
            if(rem==0)
                return true;
            else
                return false;
        }
        else if(s2>s1){
            int rem =0;
            if(l1>l2)
                rem = (l1-l2)%(s2-s1);
            else
                rem = (l2-l1)%(s2-s1);
            if(rem==0)
                return false;
            else
                return true;
        }
        else
            return false;
        
        
    }
}
