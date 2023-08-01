/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 // O(nlogk)
var mergeKLists = function(lists) {
    if(!lists || lists.length === 0){
        return null;
    }

    while(lists.length > 1){
        let l1 = lists.shift();
        let l2 = lists.shift();
        const mergedList = mergeList(l1,l2);
        lists.push(mergedList);
    }
    return lists[0];
};

const mergeList = (l1, l2) => {
    let newList = new ListNode(0);
    let temp = newList;
    while(l1 != null && l2 != null){
        if(l1.val > l2.val){
            temp.next = l2;
            l2 = l2.next;
        }
        else {
            temp.next = l1;
            l1 = l1.next;
        }
        temp = temp.next;
    }

    while(l1 != null){
        temp.next = l1;
        l1 = l1.next;
        temp = temp.next;
    }
    while(l2 != null){
        temp.next = l2;
        l2 = l2.next;
        temp = temp.next;
    }

    return newList.next;
}
