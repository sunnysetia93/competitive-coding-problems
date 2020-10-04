// reversing a stack
import java.util.*;

class ReverseStack{

    public static void reverse(LinkedList<Integer> s){
        Object[] arr = s.toArray();
        
        s.clear();
        for(int i=0;i<arr.length;i++) {
            System.out.print(arr[i] + " ");
            s.push((Integer)arr[i]);
        }
        System.out.println();

    }

    public static void main(String[] args){
        LinkedList<Integer> stack = new LinkedList<Integer>();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);

        ReverseStack.reverse(stack);
        
        // System.out.println(stack.peek());

        for(Integer s:stack){
            System.out.print(s + " ");
        }

    }
}