import java.util.*;
import java.lang.*;
// import java.math.*;
import java.io.*;
public class Main
{
	public static void main (String[] args) throws java.lang.Exception
	{
		
		try{
            //Name file as input file name (present in same directory)
            BufferedReader br=new BufferedReader(new FileReader("e.txt"));
            //Firstly make a file named output.txt
            PrintWriter ot=new PrintWriter("output.txt");

            String q[]=br.readLine().trim().split(" ");
            int time=Integer.parseInt(q[0]);
            int intersections=Integer.parseInt(q[1]);
            int n_streets=Integer.parseInt(q[2]);
            int n_cars=Integer.parseInt(q[3]);
            int bonusPoints=Integer.parseInt(q[4]);
            ArrayList<Street> street=new ArrayList<Street>();
            HashMap<String,Integer> hm1=new HashMap<>();
            ArrayList<Car> car=new ArrayList<Car>();
            ArrayList<Intersection> intersection=new ArrayList<Intersection>();
            for(int i=0;i<intersections;i++)
            intersection.add(new Intersection());
            for(int i=0;i<n_streets;i++)
            {
                Street str=new Street();
                String s[]=br.readLine().trim().split(" ");
                str.start=Integer.parseInt(s[0]);
                str.end=Integer.parseInt(s[1]);
                str.name=s[2];
                str.timeToCross=Integer.parseInt(s[3]);
                street.add(str);
                // intersection.get(str.start).nameOfStreets.add(str.name);
                intersection.get(str.end).nameOfStreets.add(str.name);
                // intersection.get(str.start).numberOfStreets++;
                hm1.put(str.name, str.timeToCross);
                intersection.get(str.end).numberOfStreets++;
            }
            HashMap<String,Integer> hm=new HashMap<>();
            for(int i=0;i<n_cars;i++)
            {
                Car cr=new Car();
                String s[]=br.readLine().trim().split(" ");
                cr.streetsCarWantToGo=Integer.parseInt(s[0]);
                ArrayList<String> routeList=new ArrayList<>();
                for(int j=0;j<cr.streetsCarWantToGo;j++)
                {
                    routeList.add(s[j+1]);
                    hm.put(s[j+1], hm.get(s[j+1])==null?1:hm.get(s[j+1])+1);
                }
                cr.route=new ArrayList<>(routeList);
                car.add(cr);
            }
            for(int i=0;i<n_streets;i++)
            {
                Street str=street.get(i);
                str.carsCrossing=hm.get(str.name)==null?0:hm.get(str.name);
                street.set(i, str);
            }
            StringBuilder sb=new StringBuilder("");
            int count=0;
            for(int i=0;i<intersections;i++)
            {
                // sb.append((intersection.get(i).numberOfStreets)+"\n");
                StringBuilder ss=new StringBuilder("");
                int temp=0;
                boolean bool=false;
                for(int j=0;j<intersection.get(i).numberOfStreets;j++)
                {
                    
                    int x=hm.get(intersection.get(i).nameOfStreets.get(j))==null?0:hm.get(intersection.get(i).nameOfStreets.get(j));
                    if(x==0)
                    continue;
                    bool=true;
                    temp++;
                    ss.append(intersection.get(i).nameOfStreets.get(j)+" "+Math.min(time, Math.max(1,x/2))+"\n");
                }
                if(bool)
                {
                    sb.append(i+"\n");
                    count++;
                    sb.append(temp+"\n");
                    sb.append(ss.toString());
                }
            }
            ot.println(count);
            ot.print(sb.toString());
            ot.close();
            br.close();
            
        }catch(Exception e){
            e.printStackTrace();
            return;
        }
    }
    static class Street{
        int start;
        int end;
        String name;
        int timeToCross;
        int carsCrossing;
    }
    static class Car{
        int streetsCarWantToGo;
        ArrayList<String> route=new ArrayList<>();
    }
    static class Intersection{
        int numberOfStreets;
        int carsCrossing;
        ArrayList<String> nameOfStreets=new ArrayList<>();
    }
}
    
