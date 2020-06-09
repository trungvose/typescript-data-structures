import { Node } from '../model/node';
import { Comparator } from '../model/comparator';

export class LinkedList<T> {
  private _head: Node<T>;
  private _count: number;
  get head() {
    return this._head;
  }

  constructor(private _comparatorFunction = new Comparator<T>()) {
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
  pushFront(value: T): LinkedList<T> {
    this._count++;
    let node = new Node(value);
    node.next = this._head;
    this._head = node;
    return this;
  }

  /**
   * Remove front item and return its value
   * Time complexity: O(1)
   */
  popFront(): T {
    if (!this._head) {
      return undefined;
    }
    this._count--;
    let val = this._head.val;
    this._head = this._head.next;
    return val;
  }

  /**
   * Get value of the front item
   * Time complexity: O(1)
   */
  front(): T {
    if (!this._head) {
      return undefined;
    }
    return this._head.val;
  }

  /**
   * Adds an item to the end of the list
   * Time complexity: O(n)
   */
  pushBack(value: T): LinkedList<T> {
    let newNode = new Node(value);
    this._count++;
    if (!this._head) {
      this._head = newNode;
      return this;
    }
    let curr = this._head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    return this;
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
    while (curr.next.next) {
      curr = curr.next;
    }
    let val = curr.next.val;
    curr.next = null;
    this._count--;
    return val;
  }

  /**
   * Get value of the end item
   * Time complexity: O(n)
   */
  back(): T {
    if (!this._head) {
      return undefined;
    }
    let curr = this._head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.val;
  }

  /**
   * Reverses the list
   * Time complexity: O(n)
   */
  reverse(): LinkedList<T> {
    let curr = this._head;
    let prev = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this._head = prev;
    return this;
  }

  /**
   * Return boolean if the list has a value
   * Time complexity: O(n)
   */
  has(value: T): boolean {
    if (!this._head) {
      return undefined;
    }
    let curr = this._head;
    while (curr) {
      let hasValue = this._comparatorFunction.equal(value, curr.val);
      if (hasValue) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  /**
   * Removes the first item in the list with this value
   * Return true if delete success.
   * Time complexity: O(n)
   */
  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }
    if (this._comparatorFunction.equal(this.head.val, value)) {
      this._head = this._head.next;
      this._count--;
      return true;
    }
    let curr = this._head;
    while (curr.next) {
      if (this._comparatorFunction.equal(curr.next.val, value)) {
        curr.next = curr.next?.next;
        this._count--;
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  print(): string {
    let arr = [];
    let curr = this._head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr.join(' -> ');
  }

  clear(): void {
    this._head = null;
    this._count = 0;
  }
}
