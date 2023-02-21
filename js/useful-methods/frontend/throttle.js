/**
 * throttle def:
 * excute the event on the first click
 * within the throttle delay, the event won't fire again
 */
const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) {
      last = now;
      return;
    }
    return fn(...args);
  };
};

document.getElementById("btn1").addEventListener(
  "click",
  debounce((e) => {
    console.log("clicked");
  }, 2000),
);
