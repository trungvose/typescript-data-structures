import { LinkedList } from './singly-linked-list';

describe('Singly Linked List', () => {
  let linkedList: LinkedList<number>;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('1. Empty linked list', () => {
    expect(linkedList.size).toBe(0);
    expect(linkedList.isEmpty).toBe(true);
  });

  it('2. Push front', () => {
    prePushFront(linkedList);
    expect(linkedList.size).toBe(3);
    expect(linkedList.isEmpty).toBe(false);
  });

  it('3. Pop front', () => {
    prePushFront(linkedList);
    expect(linkedList.popFront()).toBe(2);
    expect(linkedList.popFront()).toBe(1);
    expect(linkedList.popFront()).toBe(0);
    expect(linkedList.size).toBe(0);
    expect(linkedList.isEmpty).toBe(true);
  });

  it('4. Push back', () => {
    prePushBack(linkedList);
    expect(linkedList.size).toBe(3);
    expect(linkedList.isEmpty).toBe(false);
  }); 

  it('4. Pop back', () => {
    prePushBack(linkedList);
    expect(linkedList.popBack()).toBe(0);
    expect(linkedList.popBack()).toBe(1);
    expect(linkedList.popBack()).toBe(2);
    expect(linkedList.size).toBe(0);
    expect(linkedList.isEmpty).toBe(true);
  }); 

  function prePushBack(linkedList: LinkedList<number>) {
    linkedList.pushBack(2);
    linkedList.pushBack(1);
    linkedList.pushBack(0);
  }

  function prePushFront(linkedList: LinkedList<number>) {
    linkedList.pushFront(0);
    linkedList.pushFront(1);
    linkedList.pushFront(2);
  }
});
