const a = {
  name: "xjy",
  age: 23,
  ids: [
    { type: "1", code: 1 },
    { type: "2", code: 2 },
    { type: "3", code: 3 },
  ],
};

let b = { ...a };
b.ids = [
  { type: "1", code: 1 },
  { type: "2", code: 2 },
];

console.log(a);
console.log(b);

console.log("###############");

b = a;
b.ids = [
  { type: "1", code: 1 },
  { type: "2", code: 2 },
];

console.log(a);
console.log(b);
