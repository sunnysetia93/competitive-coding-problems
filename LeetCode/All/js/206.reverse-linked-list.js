/**
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
var reverseList = function(head) {
  let newHead = null
  while(head!=null){
    let temp = head.next;
    head.next = newHead; // newHead is similar to prev node
    newHead = head;
    head = temp;
  }
  return newHead;
};

// recursive
const reverseListRecursive = function(head){
  if(!head) return head;
  if(!head.next){
    return head;
  }

  const newHead = reverseListRecursive(head.next);
  // 1->2->3: in a way (2).next = 2 where (2).next is actually 3
  (head.next).next = head;
  head.next = null;
  return newHead;
}
