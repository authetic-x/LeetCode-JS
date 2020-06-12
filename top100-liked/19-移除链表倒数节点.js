/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head || n < 1) return head;

    let len = 0, p = head, q = head;
    
    while (p != null) {
        p = p.next;
        len++;
    }
    if (n > len) throw Error('n is not a valid value.')

    if (len === n) return head.next;

    p = head;
    while (n--) q = q.next;

    while (q && q.next) {
        p = p.next;
        q = q.next;
    }
    p.next = p.next.next;
    
    return head;
};