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
var oddEvenList = function(head) {
    let temp = head;
    let len = 0;
    let lastNode;
    // calculate length of the list and get last node
    while(temp!=null){
        lastNode = temp;
        temp=temp.next;
        len++;
    }
    if(len <= 2){
        return head;
    }
    let i = 0;
    temp = head;
    let prev = null;
    while(i<len){
        if(i%2!=0) { //odd position
            //move odd node (temp) to last
            let newNode = temp; // 2
            prev.next = temp.next; // 1->2->3 <==> 1->3

            lastNode.next = newNode; 
            lastNode = lastNode.next;
            lastNode.next = null; // important to avoid cycle
            
            temp = prev.next; 
        }
        else {
            prev = temp;
            temp = temp.next;
        }
        i++;
    }

    return head;
};
