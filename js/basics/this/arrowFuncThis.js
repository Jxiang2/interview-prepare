// arrow function doesn't define its own execution context (it does not have it's own this )
// They inherit this from it' parent scope when the arrow function is DEFINED
// call, apply, bind does not work on arrow function

// Pure functions
const myFunction = () => {
  console.log(this);
};

const myFunction1 = function () {
  console.log(this);
};

myFunction(); // parent scope: global ; global.this: module.export = {} by default
myFunction1(); // equivalent to global.myFunction1()

// Arrow functions as methods (this is defined when arrow function is defined)
let myObject = {
  myMethod: () => {
    console.log(this);
  },
};

myObject.myMethod(); // this === window or global object
const { myMethod } = myObject;
myMethod(); // this === window or global object

// Arrow function complex example
myObject = {
  myArrowFunction: null,
  myMethod() {
    console.log(this);
    const newFunc = () => console.log(this);
    this.myArrowFunction = newFunc;
  },
};

myObject.myMethod(); // this === myObject
myObject.myArrowFunction(); // this === myObject
const { myArrowFunction } = myObject;
myArrowFunction(); // this === myObject

// Arrow function best practice
const reusabledCallback = function () {
  console.log(this);
};

myObject = {
  myMethod() {
    helperObject.doSomethingAsync(
      "superCool",
      reusabledCallback.bind(myObject),
    );
  },
};

myObject = {
  // or
  myMethod() {
    helperObject.doSomethingAsync("superCool", () => {
      console.log(this); // this === myObject
    });
  },
};

// Complex example: arrow func vs. normal func in objects
const obj = {
  a: 1,
  b: 2,
  c: () => {
    console.log(this);
  },
  d() {
    console.log(this);
  },
};

obj.c(); // c does not has this, it uses this from it's parent scope, which is the module.export object
obj.d(); // d is defined in the obj, so it's excution context is the obj, thus this is obj
const e = obj.d;
e(); // e is just a pure function, with this to be global as default
