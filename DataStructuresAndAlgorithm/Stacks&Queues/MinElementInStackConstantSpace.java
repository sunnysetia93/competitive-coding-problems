// https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/

// similary for max element => condition in push and pop will get reversed 
// i.e., for value<=currentMax => stack.push(value) else stack.push(2*value-currentMax); currentMax=value;
// same situation for pop();

import java.util.*;

class StackMin {
    int currentMin;
    private Stack<Integer> stack = new Stack<Integer>();

    public void push(int value){
        if(stack.isEmpty()){
            stack.push(value);
            currentMin=value;
        }
        else{
            if(value>=currentMin){
                stack.push(value);
            }
            else{
                stack.push(2*value - currentMin);
                currentMin = value;
            }
        }
    }

    public int pop(){
        if(stack.isEmpty())
            throw new EmptyStackException();

        int popped = stack.pop();
        if(popped<currentMin){
            int min = currentMin;
            currentMin = 2*currentMin - popped;
            return min;
        }

        return popped;
    }

    public int peek(){
        if(stack.isEmpty())
            throw new EmptyStackException();
        
        int popped = stack.peek();
        if(popped<currentMin)
            return currentMin;
        return popped;
    }

    public int getMin(){
        if(stack.isEmpty())
            throw new EmptyStackException();
        
        return currentMin;
    }

    public static void main(String[] args){
        StackMin s = new StackMin();
        s.push(3); 
        s.push(5); 
        System.out.println(s.getMin()); 
        s.push(2); 
        s.push(1); 
        System.out.println(s.getMin()); 
        System.out.println(s.pop()); 
        System.out.println(s.getMin()); 
        System.out.println(s.pop()); 
        System.out.println(s.peek()); 
    }
}