import { Node } from '../model/node';
import { ComparatorFunction } from '../model/objectType';

export class LinkedList<T> {
  private _head: Node<T>;
  private _count: number;
  get head() {
    return this._head;
  }

  constructor(comparatorFunction?: ComparatorFunction<T>) {
    this._head = null;
    this._count = 0;
  }

  /**
   * Returns true if empty
   */
  get isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Returns number of data elements in list
   */
  get size(): number {
    return this._count;
  }

  /**
   * Adds an item to the front of the list
   * Time complexity: O(1)
   */
  pushFront(value: T): void {
    this._count++;
    let newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
  }

  /**
   * Remove front item and return its value
   * Time complexity: O(1)
   */
  popFront(): T {
    this._count--;
    if (!this._head) {
      return undefined;
    }
    let val = this._head.val;
    this._head = this._head.next;
    return val;
  }

  /**
   * Adds an item to the end of the list
   * Time complexity: O(n)
   */
  pushBack(value: T): void {
    let newNode = new Node(value);
    this._count++;
    if (!this._head) {
      this._head = newNode;
      return;
    }
    let curr = this._head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  /**
   * Remove front item and return its value
   * Time complexity: O(n)
   */
  popBack(): T {
    if (!this._head) {
      return undefined;
    }
    if (this.size === 1) {
      let val = this._head.val;
      this._head = null;
      this._count--;
      return val;
    }
    let curr = this._head;
    while (curr.next?.next) {
      curr = curr.next;
    }
    let val = curr.next.val;
    curr.next = null;
    this._count--;
    return val;
  }
}
