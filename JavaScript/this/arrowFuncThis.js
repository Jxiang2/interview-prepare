// arrow function doesn't define its own execution context (it does not have it's own this )
// They inherit this from it' parent scope when the arrow function is DEFINED
// call, apply, bind does not work on arrow function

// Pure functions
const myFunction = () => {
  console.log(this)
}

const myFunction1 = function () {
  console.log(this)
}

myFunction() // parent scope: global ; global.this: module.export = {} by default
myFunction1() // equivalent to global.myFunction1()


// Arrow functions as methods (this is defined when arrow function is defined)
let myObject = {
  myMethod: () => {
    console.log(this)
  }
}

myObject.myMethod() // this === window or global object
const myMethod = myObject.myMethod
myMethod() // this === window or global object


// Arrow function complex example
myObject = {
  myArrowFunction: null,
  myMethod: function () {
    console.log(this)
    const newFunc = () => console.log(this)
    this.myArrowFunction = newFunc
  }
}

myObject.myMethod() // this === myObject
myObject.myArrowFunction() // this === myObject
const myArrowFunction = myObject.myArrowFunction
myArrowFunction() // this === myObject


// Arrow function best practice
const reusabledCallback = function () {
  console.log(this)
}

myObject = {
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', reusabledCallback.bind(myObject))
  },
}

myObject = { // or
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', () => {
      console.log(this) // this === myObject
    })
  },
}

