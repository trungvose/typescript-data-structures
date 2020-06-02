import { Queue } from './queue';

describe('Queue', () => {
  let queue: Queue<number>;
  beforeEach(() => {
    queue = new Queue();
  });

  it('1. Empty queue test case', () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty).toBe(true);
  });

  it('2. Enqueue', () => {
    queue.enqueue(1);
    expect(queue.size).toBe(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3);
  });

  it('3. Dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
  });
});
