
import java.io.*;
import java.util.*;

class Team {
    public int margin;
    public int wins; //winning points
    public int totalWins;
    
    public Team(){
        this.margin=0;
        this.wins=0;
        this.totalWins=0;
    }
    
    public Team(int margin,int wins,int totalWins){
        this.margin=margin;
        this.wins=wins;
        this.totalWins=totalWins;
    }
}

public class Solution {

    private static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int n = sc.nextInt();
        String line;
        sc.nextLine();
        SortedMap<String, Team> teamMap = new TreeMap<String, Team>();
        for(int i=0;i<n;i++){
            line=sc.nextLine();
            String[] inputs = line.split(" ");
            
            int scoreTeam1 = Integer.parseInt(inputs[1]);
            int scoreTeam2 = Integer.parseInt(inputs[3]);
            
            if(!teamMap.containsKey(inputs[0])){
                teamMap.put(inputs[0],new Team(0,0,0));
            }
            if(!teamMap.containsKey(inputs[2])){
                teamMap.put(inputs[2],new Team(0,0,0));
            }
            
            if(scoreTeam1>scoreTeam2){
                //team1 won
                int matchMargin = scoreTeam1-scoreTeam2;
                Team winningTeam = teamMap.get(inputs[0]);
                int totalWins = winningTeam.totalWins;
                int newMargin = ((winningTeam.margin*totalWins) + matchMargin)/(totalWins+1);
                winningTeam.wins+=2;
                winningTeam.margin=newMargin;
                winningTeam.totalWins+=1;
                
                teamMap.put(inputs[0],winningTeam);

            }
            else if(scoreTeam1<scoreTeam2){
                //team2 won
                int matchMargin = scoreTeam2-scoreTeam1;
                Team winningTeam = teamMap.get(inputs[2]);
                int totalWins = winningTeam.totalWins;
                int newMargin = ((winningTeam.margin*totalWins) + matchMargin)/(totalWins+1);
                winningTeam.wins+=2;
                winningTeam.margin=newMargin;
                winningTeam.totalWins+=1;
                
                teamMap.put(inputs[2],winningTeam);
            }
            else{
                //draw
                Team team1 = teamMap.get(inputs[0]);
                Team team2 = teamMap.get(inputs[2]);
                
                team1.wins+=1;
                team2.wins+=1;
                
                teamMap.put(inputs[0],team1);
                teamMap.put(inputs[2],team2);

            }
        }
        SortedSet<Map.Entry<String, Team>> sortedset = new TreeSet<Map.Entry<String, Team>>(
            new Comparator<Map.Entry<String, Team>>() {
                @Override
                public int compare(Map.Entry<String, Team> e1,Map.Entry<String, Team> e2) {
                    Team a = e1.getValue();
                    Team b = e2.getValue();
                    if(a.wins==b.wins){
                        if(a.margin==b.margin){
                            return e1.getKey().compareTo(e2.getKey());
                        }
                        else if(a.margin>b.margin){
                            return -1;
                        }
                        else{
                            return 1;
                        }
                    }
                    else if(a.wins>b.wins)  
                        return -1;  
                    else  
                        return 1; 
                }
        });

        sortedset.addAll(teamMap.entrySet());
        
        int i=1;
        for(Map.Entry<String,Team> entry:sortedset){
            System.out.println(i + " " + entry.getKey() + " " + entry.getValue().wins);
            i++;
        }
    }
}