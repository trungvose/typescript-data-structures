import { Stack } from './stack';

describe('Stack', () => {
  let stack: Stack<number>;
  beforeEach(() => {
    stack = new Stack();
  });

  it('1. Empty stack', () => {
    expect(stack.size).toBe(0);
    expect(stack.isEmpty).toBe(true);
  });

  it('2. Push', () => {
    stack.push(1);
    expect(stack.size).toBe(1);
    stack.push(2);
    expect(stack.size).toBe(2);
    stack.push(3);
    expect(stack.size).toBe(3);
  });

  it('3. Pop', () => {
    prePush(stack);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });

  it('4. Peek', () => {
    prePush(stack);
    expect(stack.peek()).toBe(3);
  });

  it('5. Clear', () => {
    prePush(stack);
    stack.clear();
    expect(stack.isEmpty).toBe(true);
    expect(stack.size).toBe(0);
  });

  it('6. Print primitive type', () => {
    prePush(stack);
    expect(stack.print()).toBe('3 -> 2 -> 1');
  });

  function prePush(s: Stack<number>) {
    s.push(1);
    s.push(2);
    s.push(3);
  }
});
