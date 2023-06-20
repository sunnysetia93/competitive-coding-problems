/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const mergedList = new ListNode(-Infinity);
  let m1 = mergedList;
  let h1 = list1;
  let h2 = list2;

  while(h1!=null && h2!=null){
    const val1 = h1 ? h1.val : Infinity;
    const val2 = h2 ? h2.val : Infinity;
    if(val1 <= val2){
      m1.next = new ListNode(val1);
      h1 = h1.next;
    }
    else{
      m1.next = new ListNode(val2);
      h2 = h2.next;
    }
    m1 = m1.next;
  }

  if(h1!=null){
    m1.next = h1;
  }

  if(h2!=null){
    m1.next = h2;
  }

  return mergedList.next;
};
