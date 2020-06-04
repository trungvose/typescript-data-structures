# Stack

In computer science, a **stack** is an abstract data type that serves 
as a collection of elements, with two principal operations:

* **push**, which adds an element to the collection, and
* **pop**, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

Simple representation of a stack runtime with push and pop operations.

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

## Implementation

Implement using built-in object as a map, with tail pointer. I came up with this approach to make sure the Big O notation for the dequeue operation.

| Operation   | Description                                                         | Big O |
| ----------- | ------------------------------------------------------------------- | ----- |
| push(value) | adds an element to the collection                                   | O(1)  |
| pop()       | removes the most recently added element                             | O(1)  |
| peek()      | returns the most recently added element without modifying the stack | O(1)  |
| clear()     | removes all the element in the stack                                | O(1)  |
| isEmpty     | checks if the stack is empty                                        | O(1)  |
| size        | checks the size of the stack                                        | O(1)  |

## Alternative Implementation

1. [Trivial implementation using Array][0] - Using `arr.splice()` for pop, could take `O(n)`. That will not meet the requirement of `O(1)` for pop operation.
2. [Stack][1]

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))

[0]: https://github.com/davidshariff/computer-science/blob/master/Data%20Structures/Stack.js
[1]: https://github.com/yangshun/lago/blob/master/lib/data-structures/Stack.js
