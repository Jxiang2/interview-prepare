const myPromisify = require("./Promisify");

// test function
const getSumCb = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error("Missing arguments"), null);
  }
  const sum = num1 + num2;
  const message = `Sum is ${sum}`;
  return callback(null, message, sum);
};

// Callback based solution
// put the callback as the last argument
getSumCb(1, 1, (err, ...res) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(res); // 2
  }
});

// Promisification based solution:
// conversion of a function accepting a callback into a function returning a promise.
const getSumPromise = myPromisify(getSumCb);
getSumPromise(1, 1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.dir(err.message);
  });
