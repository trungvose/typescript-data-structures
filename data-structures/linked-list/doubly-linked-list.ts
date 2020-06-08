import { DoublyNode } from '../model/doubly-node';

export class DoublyLinkedList<T> {
  private _head: DoublyNode<T>;
  private _tail: DoublyNode<T>;
  private _count: number;

  get head(): DoublyNode<T> {
    return this._head;
  }

  get tail(): DoublyNode<T> {
    return this._tail;
  }

  get size(): number {
    return this._count;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  constructor() {
    this._count = 0;
  }
}
