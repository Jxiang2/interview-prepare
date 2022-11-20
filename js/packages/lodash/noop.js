const { noop } = require("lodash");

const afunc = () => console.log("hello");

const bfunc = noop;

console.log(afunc === noop);
console.log(bfunc === noop);

noop();
console.log(noop());
