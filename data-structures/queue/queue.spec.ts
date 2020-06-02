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
    preEnqueue(queue);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(undefined);
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  it('4. Peek', () => {
    preEnqueue(queue);
    expect(queue.peek()).toBe(1);
  });

  it('5. Clear', () => {
    preEnqueue(queue);
    queue.clear();
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  it('6. Print primitive type', () => {
    preEnqueue(queue);        
    expect(queue.print()).toBe("3 -> 2 -> 1");
  });

  function preEnqueue(q: Queue<number>) {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
  }
});

