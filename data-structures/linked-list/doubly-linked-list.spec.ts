import { DoublyLinkedList } from './doubly-linked-list';

describe('Doubly Linked List', () => {
  let linkedList: DoublyLinkedList<number>;
  beforeEach(() => {
    linkedList = new DoublyLinkedList();
  });

  it('1. Empty linked list', () => {
    expect(linkedList.isEmpty).toBe(true);
    expect(linkedList.size).toBe(0);
  });
});
