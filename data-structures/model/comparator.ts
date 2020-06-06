export class Comparator<T> {
  constructor(private _compareFunction = primitiveCompare) {}

  equal(a: T, b: T): boolean {
    return this._compareFunction(a, b);
  }
}

export function primitiveCompare<T>(a: T, b: T): boolean {
  return a === b;
}