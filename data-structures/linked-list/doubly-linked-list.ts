import { DoublyNode } from '../model/doubly-node';

export class DoublyLinkedList<T> {
  private _head: DoublyNode<T>;
  private _count: number;

  constructor() {
    this._count = 0;
  }

  get head(): DoublyNode<T> {
    return this._head;
  }

  get size(): number {
    return this._count;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Adds an item to the front of the list
   * Time complexity: O(1)
   */
  pushFront(value: T): DoublyLinkedList<T> {
    this._count++;
    let node = new DoublyNode(value);
    if (this._head) {
      this._head.prev = node;
    }
    node.next = this._head;
    this._head = node;
    return this;
  }
}
