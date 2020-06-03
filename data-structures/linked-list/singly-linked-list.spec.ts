import { LinkedList } from './singly-linked-list';

describe('Singly Linked List', () => {
  let linkedList: LinkedList<number>;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('1. Empty linked list test case', () => {
    expect(linkedList.size).toBe(0);
    expect(linkedList.isEmpty).toBe(true);
  });
});
