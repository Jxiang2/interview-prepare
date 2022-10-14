const points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort((a, b) => a - b);
const lowest = points[0];
console.log(lowest);

// Sort the numbers in descending order
points.sort((a, b) => b - a);
const heighest = points[0];
console.log(heighest);
