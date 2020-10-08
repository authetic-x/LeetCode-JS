/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	if (!headA || !headB) return null

	let pa = headA, pb = headB
	while (pa !== pb) {
		!pa ? pa = headB : pa = pa.next
		!pb ? pb = headA : pb = pb.next
	}

	return pa
};