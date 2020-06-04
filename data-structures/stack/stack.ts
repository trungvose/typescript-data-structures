import { ObjectType } from '../model/objectType';

export class Stack<T> {
  private _stack: ObjectType<T>;
  private _count: number;

  constructor() {
    this._stack = {};
    this._count = 0;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  get size(): number {
    return this._count;
  }

  push(value: T) {
    this._stack[this._count] = value;
    this._count++;
  }

  pop(): T {
    if (this.isEmpty) {
      return undefined;
    }
    this._count--;
    const value = this._stack[this._count];
    delete this._stack[this._count];
    return value;
  }

  peek(): T {
    if (this.isEmpty) {
      return undefined;
    }
    return this._stack[this._count - 1];
  }

  clear(): void {
    this._stack = {};
    this._count = 0;
  }

  print(): string {
    if (this.isEmpty) {
      return '';
    }
    let values = [];
    for (let i = 0; i < this._count; i++) {
      values.unshift((this._stack[i] as any).toString());
    }
    return values.join(' -> ');
  }
}
