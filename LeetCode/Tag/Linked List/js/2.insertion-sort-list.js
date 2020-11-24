/**
 *
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3517/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if(!head)
        return head
    if(!head.next)
        return head;

    let result = head;
    let curr = head.next;
    result.next = null;
    while(curr!=null){
        // console.log(curr.val);
        let tempHead = result;
        let prev = null;

        while(tempHead && tempHead.val < curr.val){
            prev = tempHead;
            tempHead = tempHead.next;
        }

        if(!prev){
            // add to head
            prev = curr;
            curr = curr.next;
            prev.next = result;
            result = prev
        }
        else {
            let nextNode = prev.next;
            prev.next = curr;
            curr = curr.next;
            prev.next.next = nextNode;

        }
    }

    // console.log("final",head);
    return result;
};