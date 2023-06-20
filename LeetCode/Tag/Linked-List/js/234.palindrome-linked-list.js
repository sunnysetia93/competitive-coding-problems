/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true;
  }
  let ptr1 = head;
  let ptr2 = head;
  const firstHalf = [];
  const secondHalf = [];
  while (ptr2 != null && ptr2.next != null) {
    firstHalf.push(ptr1.val);
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
  }

  if (ptr2 && ptr2.next === null) {
    ptr1 = ptr1.next;
  }

  while (ptr1 != null) {
    secondHalf.unshift(ptr1.val);
    ptr1 = ptr1.next;
  }
  // console.log({firstHalf,secondHalf})
  return firstHalf.join("") === secondHalf.join("");
};


const isPalindromeUsingStack = function (head) {
  if (head === null) {
    return true;
  }
  let tempHead = head;
  const stack = [];

  while (tempHead != null) {
    stack.push(tempHead.val);
    tempHead = tempHead.next;
  }
  console.log({stack});
  tempHead = head;

  while (tempHead != null) {
    const poppedValue = stack.pop();
    if (poppedValue !== tempHead.val) {
      return false;
    }
    tempHead = tempHead.next;
  }

  if (stack.length > 1) {
    return false;
  }
  return true;
};
