import java.util.*;
import java.lang.*;
import java.io.*;

class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner sc = new Scanner(System.in);
        int a[] = {15,14,51,6};
        int b[] = {30,49,27,10};
        
        int resarr[] = calculateSum(a,b);
        
        for(int i=0;i<resarr.length;i++)
        {
            System.out.print(resarr[i] + ",");
        }
	}
	
	public static int[] calculateSum(int a[],int b[])
	{
        int j,i;
        StringBuilder str = new StringBuilder();
        
        for(i=0;i<a.length;i++)
        {
            str.append(a[i]);
        }
        
        int n1 = Integer.parseInt(new String(str));
        
        str.setLength(0);
        
        for(i=0;i<b.length;i++)
        {
            str.append(b[i]);
        }
        
        int n2 = Integer.parseInt(new String(str));
        
        int res = n1+n2;
        
        int len = (Integer.toString(res).length());
        
        int resarr[] = new int[len];
        
        for(i=len-1;i>=0;i--)
        {
            resarr[i]=res%10;
            res/=10;
        }
        
        return resarr;
	}
	
	
}
