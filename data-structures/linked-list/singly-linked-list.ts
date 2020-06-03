import { Node } from '../model/node';

export class LinkedList<T> {
  private _head: Node<T> | null;

  get head() {
    return this._head;
  }

  constructor() {
    this._head = null;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  get size(): number {
    return 0;
  }
}
