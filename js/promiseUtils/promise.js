// exmaple 1
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

// example 2
const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task 1 done");
  }, 200);
});

const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task 2 done");
  }, 200);
});

const task3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("task 1 done");
  }, 200);
});

Promise.all([task1, task2, task3]).then((messages) => {
  console.log(messages);
});

Promise.race([task1, task2, task3]).then((message) => {
  console.log(message);
});
