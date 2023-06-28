/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//     let len = 0;
//     let temp = head;
//     while(temp!=null){
//         temp = temp.next;
//         len++;
//     }

//     let index = len - n;
//     if(index < 0) return null;
    
//     temp = head;
//     let prev = null;
//     let i = 0;
//     while(i < index){
//         prev = temp;
//         temp = temp.next;
//         i++;
//     }

//     if(prev === null){
//         head = head.next;
//     }
//     else{
//         prev.next = temp.next;
//     }

//     return head;
// };


// in one pass
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let i=0;
    while(i < n){
        fast = fast.next;
        i++;
    }

    if(!fast) return head.next;

    while(fast.next){
        fast=fast.next;
        slow=slow.next
    }
    
    slow.next = slow.next.next;

    return head;
};
