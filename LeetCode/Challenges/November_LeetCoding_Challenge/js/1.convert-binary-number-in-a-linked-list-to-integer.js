
/**
 * URL: https://leetcode.com/explore/featured/card/november-leetcoding-challenge/564/week-1-november-1st-november-7th/3516/
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let binaryString = "";
    let ptr = head;
    while (ptr != null) {
        binaryString += ptr.val;
        ptr = ptr.next;
    }
    return parseInt(binaryString, 2);
};