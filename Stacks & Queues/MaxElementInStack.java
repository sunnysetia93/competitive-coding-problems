import java.util.*;

class MaxStack {
    Stack<Integer> mainStack;
    Stack<Integer> maxStack;

    public MaxStack(){
        mainStack = new Stack<Integer>();
        maxStack = new Stack<Integer>();
    }

    public void push(int value){
        if(mainStack.isEmpty()){
            maxStack.push(value);
            mainStack.push(value);
            return;
        }
        int topElement = maxStack.peek();
        if(topElement>value)
            maxStack.push(topElement);
        else
            maxStack.push(value);
        
        mainStack.push(value);
    }

    public int pop(){
        if(mainStack.isEmpty())
            return -1;
        maxStack.pop();
        return mainStack.pop();
    }

    public int max(){
        return maxStack.peek();
    }

    public static void main(String[] args){

        MaxStack mStack = new MaxStack();

        mStack.push(10);
        System.out.println(mStack.max());
        mStack.push(3);
        System.out.println(mStack.max());
        mStack.push(15);
        System.out.println(mStack.max());

        mStack.pop();
        System.out.println(mStack.max());

        mStack.pop();
        System.out.println(mStack.max());


    }
}