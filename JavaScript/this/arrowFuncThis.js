// pure functions
const myFunction = () => {
  console.log(this)
}

const myFunction1 = function () {
  console.log(this)
}

myFunction() // parent scope: global ; global.this: module.export = {} by default
myFunction1() // equivalent to global.myFunction1()


// arrow functions as methods (this is defined when arrow function is defined)
let myObject = {
  myMethod: () => {
    console.log(this)
  }
}

myObject.myMethod() // this === window or global object
const myMethod = myObject.myMethod
myMethod() // this === window or global object


// arrow function complex example
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


// arrow function best practice
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

