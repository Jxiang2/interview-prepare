// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this._data = [];
  }

  push(record) {
    this._data.push(record);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}

module.exports = Stack;
