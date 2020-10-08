/**
 * Desc: 给定两个链表，返回两链表的“加法”之和，结果用新的链表表示
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0)
  let carry = 0
  let p = head
  while (l1 || l2) {
    let v1 = l1 === null ? 0 : l1.val
    let v2 = l2 === null ? 0 : l2.val
    let sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    p.next = new ListNode(sum % 10)
    p = p.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry != 0) {
    p.next = new ListNode(carry)
  }
  return head.next
};