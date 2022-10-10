// When a function is created, a keyword called this is created
// The this keyword’s value has nothing to do with the function itself;
// how the function is called determines this's value

// Pure functions
const myFunction = function () {
  console.log(this)
}

myFunction() // global.myFunction() ==> this === global

// Object literals
const myMethod = function () {
  console.log(this)
}

let myObject = {
  myMethod,
}

myObject.myMethod() // this === myObject
myMethod() // this === window

// API calls
myObject = {
  onSomethingCoolDone() {
    console.log(this)
    /// Only god knows what is "this" here BAD
  },

  myMethod() {
    helperObject.doSomethingCool("superCool", this.onSomethingCoolDone)
  },
}

myObject = {
  onSomethingCoolDone() {
    console.log(this)
    /// Now everybody know that "this" === myObject GOOD
  },

  myMethod() {
    helperObject.doSomethingCool(
      "superCool",
      this.onSomethingCoolDone.bind(this),
    )
  },
}

// new binding: bind "this" to "Newed" instance,
// and be independetn to other instances of the same prototype
// old implicit, explicit, or hard binding are ignored
function foo(sth) {
  console.log(this)
  this.a = sth
}
const obj1 = {}
const bar = foo.bind(obj1)

bar(2) // obj1.foo()
console.log(obj1) // obj1 is updated with a : 2

const baz = new bar(3) // "new" create a new context, and bind this to it
console.log(baz)

// Complex example: this of class/function/object methods that return a function
class Bear {
  name = "bear"

  constructor() { }

  scratch() {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      console.log("inner function this: ", this) // global does not have property
    }

    return innerFunction
  }
}
const itch = new Bear().scratch() // new binding
itch() // special case --> undefined
itch.call(Bear)
console.log("############################")

const BearFunction = function () {
  this.name = "bear"

  this.scratch = function () {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      console.log("inner function this: ", this) // global does not have property
    }

    return innerFunction
  }
}
const funcItch = new BearFunction().scratch()
funcItch() // global as expected since funcItch is a pure function
console.log("############################")

const bearObj = {
  name: "bear",

  scratch() {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      console.log("inner function this: ", this) // global does not have property
    }

    return innerFunction
  },
}
const objItch = bearObj.scratch()
objItch() // global as expected since funcItch is a pure function
console.log("############################")
