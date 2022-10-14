/**
 * promisify a function that originally takes a callback to process an error or several results
 * @param fn: (arg1, arg2, cb): any
 * @returns Promise<any>
 */
const myPromisify =
  (fn) =>
  (
    ...args // no need to pass callback to args
  ) =>
    new Promise((resolve, reject) => {
      const customCallback = (err, ...results) => {
        // the first arg is err, then multiple results
        if (err) {
          reject(err);
        } else {
          resolve(results.length === 1 ? results[0] : results);
        }
      };
      args.push(customCallback);
      // this is the promise
      fn.call(this, ...args);
    });

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
