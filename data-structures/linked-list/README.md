# Linked List

In computer science, a **linked list** is a linear collection of data elements, in which linear order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing efficient insertion or removal from arbitrary element references. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality as compared to linked lists.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Implementation

### Singly Linked List

I implemented without the tail pointer.

| Operation        | Description                                        | Big O |
| ---------------- | -------------------------------------------------- | ----- |
| pushFront(value) | Adds an item to the front of the list              | O(1)  |
| popFront()       | Remove front item and return its value             | O(1)  |
| front()          | Get value of the front item                        | O(1)  |
| pushBack(value)  | Adds an item to the end of the list                | O(n)  |
| popBack()        | Remove front item and return its value             | O(n)  |
| back()           | Get value of the end item                          | O(n)  |
| reverse()        | Reverses the list                                  | O(n)  |
| has(value)       | Return boolean if the list has a value             | O(n)  |
| remove(value)    | Removes the first item in the list with this value | O(n)  |
| isEmpty          | Returns true if empty                              | O(1)  |
| size             | Returns number of data elements in list            | O(1)  |

## References

- [Coursera][1]
- [Wikipedia][2]
- [coding-interview-university][3]

[1]: https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK
[2]: https://en.wikipedia.org/wiki/Linked_list
[3]: https://github.com/jwasham/coding-interview-university#linked-lists
