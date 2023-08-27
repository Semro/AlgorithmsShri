// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
  let cur = head;
  let prev = null;
  while (cur) {
    const nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }

  console.log(prev);
  return prev;
}
