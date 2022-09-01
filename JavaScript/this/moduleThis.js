// arrow function doesn't define its own execution context (it does not have it's own this )
// They inherit this from it' parent scope when the arrow function is INITIIATED
// call, apply, bind does not work on arrow function

// regular function has it's defined this,
// if it's invoked by it's non-defualt object (call apply bind), this changes.

module.exports.foo = 5

console.log(this)
let f1 = () => {
  console.log(this)
}
let f2 = function () {
  console.log(this)
}

f1() // f1 does not has this, it uses the module as it's this
f2() // f2 has it's own scope "global", which is auto-set when a function is created

let obj = {
  a: 1,
  b: 2,
  c: () => {
    console.log(this)
  },
  d: function () {
    console.log(this)
  },
}

obj.c() // c does not has this, it uses this from it's parent scope, which is the module.export object
obj.d() // d is defined in the obj, so it's excution context is the obj, thus this is obj




