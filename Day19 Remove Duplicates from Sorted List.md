Given the `head` of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

```
Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
```

# solution

```
var deleteDuplicates = function(head) {
    // if(head.length <= 1){
    //     return head
    // }
let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
```
