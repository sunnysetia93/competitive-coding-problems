import java.util.*;

class SetOfStacks{
    ArrayList<Stack<Integer>> stacks = new ArrayList<Stack<Integer>>();
    int capacity = 3;

    public void push(int value){
        Stack<Integer> stack = getLastStack();
        if(stack == null){
            stack = new Stack<Integer>();
            stack.push(value);
            stacks.add(stack);
        }
        else if(stack.size()==capacity){
            Stack<Integer> newStack = new Stack<Integer>();
            newStack.push(value);
            stacks.add(newStack);
            
        }
        else{
            stack.push(value);
        }
    }

    public int pop(){
        Stack<Integer> stack = getLastStack();
        if(stack==null)
            throw new EmptyStackException();
        int popped = stack.pop();
        if(stack.isEmpty()){
            stacks.remove(stacks.size()-1);
        }

        return popped;
    }

    public int peek(){
        Stack<Integer> stack = getLastStack();
        if(stack == null)
            throw new EmptyStackException();
        return stack.peek();
    }

    public Stack<Integer> getLastStack(){
        int size = stacks.size();
        if(size==0)
            return null;
        return stacks.get(size-1);
    }

    public static void main(String[] args){
        SetOfStacks stacks = new SetOfStacks();
        stacks.push(10);
        stacks.push(10);   
        stacks.push(10);   
        stacks.push(10);   
        stacks.push(10);
        
        stacks.push(20);  
        stacks.push(20);   
        stacks.push(20);   
        stacks.push(20);   
        stacks.push(20);   


        System.out.println(stacks.pop());
        System.out.println(stacks.pop());
        System.out.println(stacks.pop());


        stacks.push(30);           
        System.out.println(stacks.peek());

    }
}