/**
 * promisify a function that originally takes a callback to process an error or several results
 * @param fn: (arg1, arg2, cb): any
 * @returns Promise<any>
 */
const myPromisify =
  (fn) =>
  (...args) => {
    const func = (resolve, reject) => {
      const customCallback = (err, ...results) => {
        // the first arg is err, then multiple results
        if (err) {
          reject(err);
        } else {
          resolve(results.length === 1 ? results[0] : results);
        }
      };

      console.log(this);

      args.push(customCallback);
      fn.call(this, ...args);
    };

    return new Promise(func);
  };

module.exports = myPromisify;
