/*
 ** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

     * push(x) -- Push element x onto stack.
     * pop() -- Removes the element on top of the stack.
     * top() -- Get the top element.
     * getMin() -- Retrieve the minimum element in the stack.
     *
 ** Example 1:
 * Input
    ["MinStack","push","push","push","getMin","pop","top","getMin"]
    [[],[-2],[0],[-3],[],[],[],[]]
 * Output
    [null,null,null,null,-3,null,0,-2]
 * Explanation
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top();    // return 0
    minStack.getMin(); // return -2


 ** Constraints:
    Methods pop, top and getMin operations will always be called on non-empty stacks.
* */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.mainStack = [];
    this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.isEmpty()){
        this.minStack.push(x);
        this.mainStack.push(x);
    }
    else{
        const topElement = this.getMin();
        if(x <= topElement)
            this.minStack.push(x);
        else
            this.minStack.push(topElement);
        this.mainStack.push(x);
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.isEmpty())
        return;

    this.minStack.pop();
    return this.mainStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

MinStack.prototype.isEmpty = function(x) {
    return this.mainStack.length === 0;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */