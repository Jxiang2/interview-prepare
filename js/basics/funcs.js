// // callback
function testcb(val, cb) {
  cb(val);
}

const test = (val) => {
  val **= 2;
  console.log(`the processed value is ${val}`);
};

testcb(3, test);

// cury funcs
const curry = (fn) => {
  const curried = (...args) => {
    console.log("accumulated args: ", args);
    if (fn.length !== args.length) {
      return curried.bind(null, ...args); // create new func and cache the args
    }
    return fn(...args);
  };
  return curried;
};

const total = (x, y, z) => x + y + z;
const curriedTotal = curry(total);
const val = curriedTotal(10)(20)(30);
