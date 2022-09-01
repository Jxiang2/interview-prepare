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


// Complex example
class Bear {
  constructor() { }

  scratch() {
    console.log(this)

    function innerFunction() {
      console.log('inner function this: ', this) // global does not have property
    }
    return innerFunction
  }
}

let itch = new Bear().scratch() // -> anoymous function
itch() // -> undefined
itch.call(Bear)




