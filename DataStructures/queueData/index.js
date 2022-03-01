// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor () {
        this._data = [];
    }

    add = ( record ) => {
        this._data.splice( 0, 0, record );
    };

    remove = () => {
        return this._data.pop();
    };
}

module.exports = Queue;
