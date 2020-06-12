/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
    分治，做法与归并排序十分类似
*/

var mergeKLists = function(lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];

    let divider = Math.floor(lists.length / 2);
    let up_part = mergeKLists(lists.slice(0, divider));
    let down_part = mergeKLists(lists.slice(divider));

    return mergeTwoLists(up_part, down_part);
};

var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;

    let ansNode = null;
    if (l1.val < l2.val) {
        ansNode = l1;
        ansNode.next = mergeTwoLists(l1.next, l2);
    } else {
        ansNode = l2;
        ansNode.next = mergeTwoLists(l1, l2.next);
    }
    return ansNode;
}