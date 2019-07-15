// single array tp implement three stacks

import java.util.*;
import java.lang.*;

class MultipleStack{
    private int stackCapacity;
    private int totalCapacity;
    private int numOfStacks = 3;
    private int[] values;
    private int[] sizes;

    public MultipleStack(int stackSize){
        stackCapacity = stackSize;
        totalCapacity = stackSize * numOfStacks;
        values = new int[totalCapacity];
        sizes = new int[stackCapacity];
    }

    private boolean isFull(int stackNum){
        if(sizes[stackNum]==stackCapacity)
            return true;
        return false;
    }

    private boolean isEmpty(int stackNum){
        if(sizes[stackNum]==0)
            return true;
        return false;
    }

    public void push(int stackNum,int value){
        if(isFull(stackNum))
            throw new StackOverflowError();
        
        int pos = stackNum*stackCapacity + sizes[stackNum];
        values[pos]=value;
        sizes[stackNum]++;

    }

    public int pop(int stackNum) throws Exception {
        if(isEmpty(stackNum))
            throw new Exception("stack is empty");
        
        int pos = stackNum*stackCapacity + sizes[stackNum] - 1;
        int poppedElement = values[pos];
        values[pos]=0;
        sizes[stackNum]--;

        return poppedElement;
    }

    public int peek(int stackNum) throws Exception {

        if(isEmpty(stackNum))
            throw new Exception("stack is empty");
    
        int pos = stackNum*stackCapacity + sizes[stackNum] - 1;
        int poppedElement = values[pos];
        return poppedElement;
    }

    public void printStacks(){
        int count=0;
        for(int i=0;i<numOfStacks;i++){
            System.out.print("Stack "+ i + " : ");
            for(int j=i*stackCapacity;j<i*stackCapacity+stackCapacity;j++)
                System.out.print(values[j] + " ");
            System.out.println();
        }
    }

    public static void main(String[] args) throws Exception{
        MultipleStack threeStacks = new MultipleStack(5);
        threeStacks.push(0, 5);
        threeStacks.push(0, 6);
        threeStacks.push(0, 7);
        threeStacks.push(1, 10);
        threeStacks.push(2, 15);
        threeStacks.push(2, 30);
        threeStacks.push(2, 35);
        // threeStacks.push(2, 45);

        threeStacks.printStacks();
        System.out.print("peek stack 3 : ");
        System.out.println(threeStacks.peek(2));

        System.out.print("after popping from all three stacks : \n");
        threeStacks.pop(0);
        threeStacks.pop(1);
        threeStacks.pop(2);


        threeStacks.printStacks();

    }
    
}