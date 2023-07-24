/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right)
        return head;
    if(!head){
        return head;
    }

    let start  = head;
    let cur = head;
    let i = 1;
    while(i < left){
        start = cur;
        cur = cur.next;
        i++;
    }
    console.log(start, cur);

    let prev = null;
    let tail = cur;

    while(i <= right){
        let nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
        i++;
    }
    // as pointers have moved past the right index
    start.next = prev;
    tail.next = cur;

    return left === 1 ? prev : head;
};
