/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const listLength = findListLength(head);
    const intersectionPoint = k%listLength;

    if(listLength <= 1) return head;
    if(listLength === intersectionPoint || intersectionPoint === 0) return head;
    let tempHead = head;
    let i = 0;
    while(i < (listLength - intersectionPoint - 1)){
        tempHead = tempHead.next;
        i++;
    }

    let newHead = tempHead.next;
    let newTemp = tempHead.next;
    tempHead.next = null;

    while(newTemp.next!=null){
        newTemp = newTemp.next;
    }

    newTemp.next = head;
    head = newHead;

    return head;

};

const findListLength = (head) => {
    let length = 0;
    while(head!=null){
        length++;
        head = head.next;
    }
    return length;
}
