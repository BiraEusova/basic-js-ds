const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  _head = null;
  _tail = null;

  getUnderlyingList() {
    return this._head;
  }

  enqueue( value ) {
    const newNode = new ListNode(value);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
  }

  dequeue() {
    if (!this._head) {
      return null;
    }

    const dequeuedValue = this._head.value;
    this._head = this._head.next;

    if (!this._head) {
      this._tail = null;
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
