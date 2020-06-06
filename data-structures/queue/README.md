# Queue

In computer science, a **queue** is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, **tail**, or rear of the queue, and the end at which elements are removed is called the **head** or front of the queue, analogously to the words used when people line up to wait for goods or services.

The operation of adding an element to the rear of the queue is known as enqueue, and the operation of removing an element from the front is known as dequeue. Other operations may also be allowed, often including a peek or front operation that returns the value of the next element to be dequeued without dequeuing it.

The operations of a queue make it a first-in-first-out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. A queue is an example of a linear data structure, or more abstractly a sequential collection

Representation of a FIFO (first in, first out) queue

![Queue](https://upload.wikimedia.org/wikipedia/commons/5/52/Data_Queue.svg)

## Implementation

Implement using built-in object as a map, with tail pointer. I came up with this approach to make sure the Big O notation for the dequeue operation. You can implement with the same approach using array instead of object. But to take one element out of an array could take `O(n)`.

| Operation      | Description                                                               | Big O |
| -------------- | ------------------------------------------------------------------------- | ----- |
| enqueue(value) | adds value at tail                                                        | O(1)  |
| dequeue()      | returns value and removes least recently added element (head)             | O(1)  |
| peek()         | returns the value of the next element to be dequeued without dequeuing it | O(1)  |
| clear()        | removes all the element in the queue                                      | O(1)  |
| isEmpty        | checks if the queue is empty                                              | O(1)  |
| size           | checks the size of the queue                                              | O(1)  |

## Alternative Implementation

1. [Trivial implementation using Array][0] - Using `arr.shift()` for dequeuing, take `O(n)` time. That will not meet the requirement of `O(1)` for dequeuing.
2. [Queue][1]

## References

- [Wikipedia](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>)

[0]: https://github.com/davidshariff/computer-science/blob/master/Data%20Structures/Queue.js
[1]: https://github.com/yangshun/lago/blob/master/lib/data-structures/Queue.js
