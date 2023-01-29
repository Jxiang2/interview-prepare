// arrow function doesn't define its own execution context (it does not have it's own this )
// They inherit this from it' parent scope when the arrow function is DEFINED
// call, apply, bind does not work on arrow function

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
    doSomethingAsync("superCool", reusabledCallback.bind(myObject));
  },
};

myObject = {
  // or
  myMethod() {
    doSomethingAsync("superCool", () => {
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

obj.c(); // c uses this from it's parent(const obj)'s scope, which is the module.export={} object
obj.d(); // d is defined in the obj, so it's excution context is the obj, thus this is obj

const e = obj.c;
e(); // "this" of e is defined in c, fixed to be c's parent's scope, which is the module.export={} object
const f = obj.d;
f(); // e is a function, with this to be global as default
