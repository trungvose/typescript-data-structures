export interface ObjectType<T> {
  [key: number]: T;
}

export interface ComparatorFunction<T> {
  (a: T, b: T): boolean;
}
