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
        if(topElement<=value)
            maxStack.push(value);
        else
            maxStack.push(topElement);

        mainStack.push(value);
    }

    public int pop(){
        if(mainStack.isEmpty())
            return Integer.MIN_VALUE;
        int popped = mainStack.pop();
        maxStack.pop();

        return popped;
    }

    public int max(){
        if(mainStack.isEmpty())
            return Integer.MIN_VALUE;
        return maxStack.peek();
    }

    public static void main(String[] args){

        MaxStack mStack = new MaxStack();

        mStack.push(10);
        System.out.println(mStack.max()); //10
        mStack.push(3);
        System.out.println(mStack.max()); //10
        mStack.push(15);
        System.out.println(mStack.max()); //15

        mStack.pop();
        System.out.println(mStack.max()); //10

        mStack.pop();
        System.out.println(mStack.max()); //10

        mStack.pop();
        System.out.println(mStack.max()); //-2147483648 => empty

        mStack.pop();
        System.out.println(mStack.max()); //-2147483648 => empty

    }
}