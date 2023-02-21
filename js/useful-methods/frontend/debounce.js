/**
 * debounce def:
 * excute the event at the last click
 * the button while constantly clicking it
 */
const debounce = (fn, delay) => {
  let timeOutId = undefined;
  return (...args) => {
    timeOutId && clearTimeout(timeOutId);
    timeOutId = setTimeout(() => fn(...args), delay);
  };
};

document.getElementById("btn1").addEventListener(
  "click",
  debounce((e) => {
    console.log("clicked");
  }, 1000),
);
