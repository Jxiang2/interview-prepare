/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/summary.ts":
/*!************************!*\
  !*** ./src/summary.ts ***!
  \************************/
/***/ (function() {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// arrays
var characters = [];
characters.push('hello');
characters.push('world');
console.log('characters: ', characters);
// unions for multi-type variables
var mixed = [];
mixed.push('hello');
mixed.push(20);
console.log('mixed:', mixed);
var uid;
uid = 13;
console.log(uid);
uid = '12345';
console.log(uid);
// objects, the properties can not be changed once defined
var ninjaOne;
ninjaOne = { name: 'xjy', age: 22, belt: 'black' };
console.log(ninjaOne);
var greet;
var add;
var minus;
greet = function (user) {
    console.log("".concat(user.name, " | ").concat(user.uid));
};
greet({ name: 'xjy', uid: 1537572 });
add = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b + Number(c));
};
add(5, 10);
minus = function (a, b) {
    return a - b;
};
var result = minus(10, 7);
console.log(result);
var me = {
    name: 'xjy',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('I spent', amount);
        return amount;
    }
};
var greetperson = function (person) {
    console.log('hello', person.name);
};
greetperson(me);
// generics
// capture whatever item we pass in the function
// I need to pass a object with a property called name
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.age);
// generics
// specify the type of input when calling a generic function
var printAny = function (state, name) {
    console.log(state);
};
printAny("hello", "me");
printAny(1, "me");
var docThree = {
    uid: 12345,
    resourceName: 'person',
    data: 'string data'
};
var docFour = {
    uid: 12345,
    resourceName: 'person',
    data: ['string data 1', 'string data 2']
};
console.log(docThree);
console.log(docFour);
;
var var1 = true;
var var2 = true;
var var3 = false;
var id1 = {
    k1: 1,
    k2: 2,
    k3: 5,
    helloWord: 15
};
console.log(id1);
;
var optionalObj = {
    id: "3d2ce32",
    birthDate: new Date(Date.now()),
    tropies: []
};
console.log(optionalObj);
var hello;
hello = {};
hello.age = 12;
hello.name = "hello";
console.log(hello);
// enums : 0, 1, ,2, 3, 4
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
console.log(ResourceType.AUTHOR);
var mixedBase = {
    id: "3r23f0jewfewf",
    name: "xjy",
    age: 12,
    isMarried: false
};
console.log(mixedBase);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/summary.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map