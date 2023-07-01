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
var sortList = function(head) {
    if(!head || !head.next)
        return head;
    
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    const left = head;
    const right = slow.next;
    slow.next = null;

    const leftSortedList = sortList(left);
    const rightSortedList = sortList(right);
    const root = new ListNode(null);
    return merge(root, leftSortedList, rightSortedList);
};

const merge = (root, left, right) => {
    let list = root;
    while(left!=null && right!=null){
        if(left.val < right.val){
            list.next = left;
            left = left.next;
        }
        else{
            list.next = right;
            right = right.next;
        }
        list = list.next;
    }
    while(left != null){
        list.next = left;
        left = left.next;
        
        list = list.next;
    }

    while(right != null){
        list.next = right;
        right = right.next;

        list = list.next;
    }

    return root.next;
}
