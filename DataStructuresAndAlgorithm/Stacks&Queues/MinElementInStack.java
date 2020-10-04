/* Design a stack which along with push and pop, has a min function which returns the minimum element.
    Operations should take O(1)
    
    By: Sunny Setia    
*/

import java.util.*;
import java.lang.*;
import java.io.*;


import java.util.*;
import java.lang.*;
import java.io.*;


class MinStack extends Stack<Integer> {
    Stack<Integer> stack;

    public MinStack() {
        stack = new Stack<Integer>();
    }

    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(val);
            super.push(val);
            return;
        }

        int minVal = min();
        if (val <= minVal) {
            stack.push(val);
        } else {
            stack.push(minVal);
        }
        super.push(val);

    }

    public Integer pop() {
        if (stack.isEmpty())
            return Integer.MAX_VALUE;

        int val = super.pop();
        stack.pop();
        return val;
    }

    public int min() {
        if (stack.isEmpty())
            return Integer.MAX_VALUE;
        else {
            return stack.peek();
        }

    }

    public static void main(String[] args) {
        MinStack minstack = new MinStack();
        minstack.push(5);
        minstack.push(10);
        System.out.println(minstack.min()); //5
        minstack.push(25);
        System.out.println(minstack.min()); //5
        minstack.push(2);
        System.out.println(minstack.min()); //2
        minstack.pop();
        System.out.println(minstack.min()); //5
        minstack.pop();
        System.out.println(minstack.min()); //5
        minstack.pop();
        System.out.println(minstack.min()); //5
        minstack.pop();
        System.out.println(minstack.min()); //2147483647 =>empty
        minstack.pop();
        System.out.println(minstack.min()); //2147483647 =>empty

    }
}