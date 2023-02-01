// myArr.reduce((acc, cur, index, array) => {...}, init)
Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array without initial value");
  }

  let accumulator = initialValue;
  let index = 0;
  if (initialValue === undefined) {
    accumulator = this[0];
    index = 1;
  }

  for (; index < this.length; index++) {
    // index declared above
    const callbackArgs = [accumulator, this[index], index, this];
    accumulator = callback.call(this, ...callbackArgs);
  }

  return accumulator;
};

// test
const myArr = [1, 2, 3, 4, 5];
const reduce = myArr.myReduce((acc, cur, idx, arr) => {
  console.log(cur, this);
  return acc + cur;
}, "lets start: ");
console.log(reduce);
