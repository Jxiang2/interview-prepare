const omit = require("lodash/omit");
const isEqual = require("lodash/isEqual");

// The source object
let obj = {
  Name: "GeeksforGeeks",
  password: "gfg@1234",
  username: "your_geeks",
};

const omitted = omit(obj);

console.log(omitted === obj);
console.log(omitted);
console.log(obj);

let obja = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: [{ f: 1 }, { f: 2 }, { f: 3 }],
};
let objb = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: [{ f: 3 }, { f: 4 }, { f: 5 }],
};

// deep comparison
console.log(isEqual(obja, objb));
