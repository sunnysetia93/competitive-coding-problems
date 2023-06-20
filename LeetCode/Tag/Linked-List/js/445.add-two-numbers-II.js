/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = listToStack(l1)
        , stack2 = listToStack(l2);

    let resultList = null;
    let carry = 0;

    while(stack1.length > 0 && stack2.length > 0){
        const num1 = stack1.pop();
        const num2 = stack2.pop();

        let sum = num1 + num2 + carry;
        carry = sum > 9 ? 1: 0;
        sum = carry === 1 ?  sum%10 : sum;
        resultList = addToHead(resultList,sum);
    }


    while(stack1.length > 0){
        const num = stack1.pop();
        let sum = num + carry;
        carry = sum > 9? 1: 0;
        sum = carry === 1 ?  sum%10  : sum;
        resultList = addToHead(resultList,(sum));

    }

    while(stack2.length > 0){
        const num = stack2.pop();
        let sum = num + carry;
        carry = sum > 9? 1: 0;
        sum = carry === 1 ? sum%10 : sum;
        resultList = addToHead(resultList,(sum));
    }

    if(carry === 1){
        resultList = addToHead(resultList,(carry));
        carry = 0;
    }

    return resultList;
};

function listToStack(head){
    const stack = [];
    while(head!=null){
        stack.push(head.val);
        head=head.next;
    }
    return stack;
}

function addToHead(head,val){
    const newHead = new ListNode(val,null);
    newHead.next = head;
    return newHead;
}