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
var deleteDuplicates = function (head) {
  let curr = head;
  let temp = head;
  while (temp != null) {
    if (temp.val !== curr.val) {
      curr.next = temp;
      curr = temp;
    }
    temp = temp.next;
  }
  if (curr != null && curr.next != null) {
    curr.next = null;
  }
  return head;

};
