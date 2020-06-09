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

  it('2. Push front', () => {
    prePushFront(linkedList);
    
  });

  function prePushFront(list: DoublyLinkedList<number>){
    list.pushFront(1)
    list.pushFront(2)
    list.pushFront(3)
    expect(linkedList.size).toBe(3);
    expect(linkedList.isEmpty).toBe(false);
  }
});
