// myArr.reduce((acc, cur, index, array) => {...}, init)


export const name = "simulate Array.reduce with Array.myReduce";
declare global {
  interface Array<T> {
    myReduce: (
      callback: (accumulator: any, current: T, index: number, array: Array<T>) => T,
      initialValue?: any
    ) => any;
  }
}


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

  for (; index < this.length; index++) { // index declared above
    accumulator = callback.call(this, accumulator, this[index], index, this);
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


