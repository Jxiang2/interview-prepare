let arr = [1, 2, 3, 4, 5, 4, 3];

let largest = arr[0];
arr.forEach((e) => e > largest ? largest = e : largest);

console.log(largest);
