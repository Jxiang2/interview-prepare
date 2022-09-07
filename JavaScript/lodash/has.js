const { has } = require("lodash")

const obj = {
  FAILURE: "viewer/LOAD_COUNTERS.FAILURE",
  REQUEST: "viewer/LOAD_COUNTERS.REQUEST",
  SUCCESS: "viewer/LOAD_COUNTERS.SUCCESS"
}

console.log(has(obj, "viewer"))
console.log(has(obj, "SUCCESS")) // has() check if the object contains the 2nd argument as a key



