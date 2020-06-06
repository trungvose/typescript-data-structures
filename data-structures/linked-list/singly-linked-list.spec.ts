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

  it('5. Front', () => {
    prePushFront(linkedList);
    expect(linkedList.front()).toBe(2);
    linkedList.popFront();
    expect(linkedList.front()).toBe(1);
  });

  it('6. Back', () => {
    prePushFront(linkedList);
    expect(linkedList.back()).toBe(0);
    linkedList.popBack();
    expect(linkedList.back()).toBe(1);
  });

  it('7. Print', () => {
    prePushFront(linkedList);
    expect(linkedList.print()).toBe('2 -> 1 -> 0');
  });

  it('8. Reverse', () => {
    prePushFront(linkedList);
    expect(linkedList.print()).toBe('2 -> 1 -> 0');    
    expect(linkedList.reverse().print()).toBe('0 -> 1 -> 2');
  });

  it('9. Has', () => {
    prePushFront(linkedList);
    expect(linkedList.has(0)).toBe(true);
    expect(linkedList.has(1)).toBe(true);
    expect(linkedList.has(2)).toBe(true);
    expect(linkedList.has(3)).toBe(false);
  });

  it('10. Remove', () => {
    prePushFront(linkedList);
    expect(linkedList.remove(0)).toBe(true);
    expect(linkedList.pushBack(3).print()).toBe('2 -> 1 -> 3');
    expect(linkedList.remove(3)).toBe(true);
    linkedList.pushFront(4);
    linkedList.pushFront(5);
    expect(linkedList.print()).toBe('5 -> 4 -> 2 -> 1');
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
