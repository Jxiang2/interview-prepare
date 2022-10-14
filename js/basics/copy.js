const a = {
  name: "xjy",
  age: 23,
  ids: [
    { type: "1", code: 1 },
    { type: "2", code: 2 },
    { type: "3", code: 3 },
  ],
};

let b = { ...a }; // shallow copy, b is at another location than a
console.log(b.ids === a.ids); // b.ids and a.ids still point to the same array
b.ids = [
  { type: "1", code: 1 },
  { type: "2", code: 2 },
];
console.log(b.ids === a.ids);

console.log(a);
console.log(b);

console.log("###############");

b = a; // b and a point to the same
b.ids = [
  { type: "1", code: 1 },
  { type: "2", code: 2 },
];
console.log(b.ids === a.ids);

console.log(a);
console.log(b);
