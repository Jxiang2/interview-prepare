let arr = [1, 2, 3, 4, 5];

// remove and return the element at index 0 of an array
console.log(arr.shift());
console.log(arr);

// add elements at the beginning of an array
let toAdd = [0, 1];
arr.unshift(...toAdd);
console.log(arr);
