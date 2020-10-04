// implement queue using 2 stacks

import java.util.*;


class QueueUsingStacks {
    Stack<Integer> stackNew;
    Stack<Integer> stackOld;

    public QueueUsingStacks(){
        stackNew = new Stack<Integer>();
        stackOld = new Stack<Integer>();
    }

    public void add(int value){
        stackNew.push(value);
    }

    public void shiftStacks(){
        if(stackOld.isEmpty()){
            while(!stackNew.isEmpty()){
                stackOld.push(stackNew.pop());
            }
        }
    }

    public int remove(){
        shiftStacks();
        return stackOld.pop();
    }

    public int peek(){
        shiftStacks();
        return stackOld.peek();
    }

    public static void main(String[] args){
        QueueUsingStacks myQueue = new QueueUsingStacks();

        myQueue.add(5);
        myQueue.add(15);
        System.out.println(myQueue.peek()); // 5
        myQueue.add(10);
        System.out.println(myQueue.remove()); // 5
        System.out.println(myQueue.remove()); // 15

        System.out.println(myQueue.peek()); // 10 - stackOld contains only 10 and stackNew is empty

    }
}

