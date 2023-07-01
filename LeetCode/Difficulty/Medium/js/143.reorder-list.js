/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null)
        return head;
    
    let slow = head;
    let fast = head;
    
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    let mid = slow.next;

    let stack = []
    while(mid != null){
        stack.push(mid);
        mid = mid.next;
    }

    let temp = head;
    while(stack.length){
        const last = stack.pop();
        last.next = null;
        last.next = temp.next;
        temp.next = last;

        temp = temp.next.next;
    }

    temp.next = null;

};

// smart concise solution
var reorderList2 = function (head) {
  let stack = [], node = head
  if (!node) return
  while (node) {
    stack.push(node)
    node = node.next
  }

  let len = stack.length
  node = head
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0)
      node.next = stack.shift()
    else
      node.next = stack.pop()
    node = node.next
  }
  node.next = null
};

// without extra soace -> https://leetcode.com/problems/reorder-list/solutions/1734333/3-step-space-efficient-javascript-solution/
