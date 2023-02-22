const axios = require("axios");

// 1. return in then
function getDataA(id) {
  const promise = axios.get(`https://swapi.dev/api/people/${id}`);
  promise
    .then((res) => {
      const additionalPromise = new Promise((resolve, reject) =>
        res.data.name ? resolve(res.data.name) : reject(-1),
      );
      // additionalPromise has to be resolved first, then additionalPromise's value is promisified to be chained
      return additionalPromise;
    })
    .then((res) => {
      // res isn't a promise, it's directly promisified to be chained
      return res.toUpperCase();
    })
    .then((res) => console.log(res));
}
getDataA(1);

// 2. uncaught error
function getDataB(id) {
  const promise = axios.get(`https://swapi.dev/api/pp/${id}`);
  promise.then((res) => {
    console.log(res.data.name);
    return res.data.name;
  });
  // catch is not found, an error is thrown
}
getDataB(1);

// 3. mutiple then(...) can be called on the same promise
const test = (number) =>
  new Promise((resolve, reject) => {
    if (number >= 0) {
      resolve({
        name: "success",
        result: " number >= 0 ",
      });
    } else {
      reject({
        name: "failure",
        result: " number < 0 ",
      });
    }
  });

const testPromise = test(2);
testPromise.then((msg) => console.log(msg));
testPromise.then((msg) => console.log(msg));
testPromise.then((msg) => console.log(msg)).catch((err) => console.log(err));
