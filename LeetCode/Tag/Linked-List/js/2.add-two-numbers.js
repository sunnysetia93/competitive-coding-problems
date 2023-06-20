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
    let result = null;
    let borrow = 0;
    let resultHead = null;
    while(l1!=null && l2!=null){
        let sum = l1.val + l2.val + borrow;
        addToList(sum);
        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1!=null){
        let sum = l1.val + borrow;
        addToList(sum);
        l1 = l1.next;
    }

    while(l2!=null){
        let sum = l2.val + borrow;
        addToList(sum);
        l2 = l2.next;
    }
    if(borrow > 0){
        addToList(borrow);
    }
    return resultHead;

    function addToList(sum) {
        let val = 0;
        if(sum >=10){
            val = sum - 10;
            borrow = 1;
        }
        else {
            val = sum;
            borrow = 0;
        }

        const newNode = new ListNode(val);
        if(result === null){
            result = newNode;
            resultHead = newNode;
        }
        else{
            result.next = newNode;
            result = result.next;
        }
    }
};
