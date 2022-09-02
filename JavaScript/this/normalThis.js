// When a function is created, a keyword called this is created
// The this keyword’s value has nothing to do with the function itself; 
// how the function is called determines this's value


// Pure functions
var myFunction = function () {
  console.log(this)
}

myFunction() // global.myFunction() ==> this === global


// Object literals
var myMethod = function () {
  console.log(this)
}

var myObject = {
  myMethod: myMethod
}

myObject.myMethod() // this === myObject
myMethod() // this === window


// API calls
myObject = {
  onSomethingCoolDone: function () {
    console.log(this)
    /// Only god knows what is "this" here BAD
  },

  myMethod: function () {
    helperObject.doSomethingCool('superCool', this.onSomethingCoolDone)
  },
}

myObject = {
  onSomethingCoolDone: function () {
    console.log(this)
    /// Now everybody know that "this" === myObject GOOD
  },

  myMethod: function () {
    helperObject.doSomethingCool('superCool', this.onSomethingCoolDone.bind(this))
  },
}


// new binding: bind "this" to "Newed" instance, 
// and be independetn to other instances of the same prototype
// old implicit, explicit, or hard binding are ignored
function foo(sth) {
  console.log(this)
  this.a = sth
}
let obj1 = {}
let bar = foo.bind(obj1)

bar(2) // obj1.foo()
console.log(obj1) // obj1 is updated with a : 2

let baz = new bar(3) // "new" create a new context, and bind this to it
console.log(baz)


// Complex example: this of class/function/object methods that return a function
class Bear {
  name = "bear"

  constructor() { }

  scratch() {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      const thisObj = this
      console.log('inner function this: ', thisObj) // global does not have property
    }

    return innerFunction
  }
}
let itch = new Bear().scratch() // new binding
itch() // special case --> undefined
itch.call(Bear)
console.log("############################")

const BearFunction = function () {
  this.name = "bear"

  this.scratch = function () {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      const thisObj = this
      console.log('inner function this: ', thisObj) // global does not have property
    }

    return innerFunction
  }
}
const funcItch = new BearFunction().scratch()
funcItch() // global as expected since funcItch is a pure function
console.log("############################")

const bearObj = {
  name: "bear",

  scratch: function () {
    console.log("scratch's this: ", this)

    const innerFunction = function () {
      const thisObj = this
      console.log('inner function this: ', thisObj) // global does not have property
    }

    return innerFunction
  }
}
const objItch = bearObj.scratch()
objItch() // global as expected since funcItch is a pure function
console.log("############################");



