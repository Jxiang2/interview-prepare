/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/summary.ts":
/*!************************!*\
  !*** ./src/summary.ts ***!
  \************************/
/***/ (function() {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n// arrays\nvar characters = [];\ncharacters.push('hello');\ncharacters.push('world');\nconsole.log('characters: ', characters);\n// unions for multi-type variables\nvar mixed = [];\nmixed.push('hello');\nmixed.push(20);\nconsole.log('mixed:', mixed);\nvar uid;\nuid = 13;\nconsole.log(uid);\nuid = '12345';\nconsole.log(uid);\n// objects, the properties can not be changed once defined\nvar ninjaOne;\nninjaOne = { name: 'xjy', age: 22, belt: 'black' };\nconsole.log(ninjaOne);\nvar greet;\nvar add;\nvar minus;\ngreet = function (user) {\n    console.log(\"\".concat(user.name, \" | \").concat(user.uid));\n};\ngreet({ name: 'xjy', uid: 1537572 });\nadd = function (a, b, c) {\n    if (c === void 0) { c = 20; }\n    console.log(a + b + Number(c));\n};\nadd(5, 10);\nminus = function (a, b) {\n    return a - b;\n};\nvar result = minus(10, 7);\nconsole.log(result);\nvar me = {\n    name: 'xjy',\n    age: 30,\n    speak: function (text) {\n        console.log(text);\n    },\n    spend: function (amount) {\n        console.log('I spent', amount);\n        return amount;\n    }\n};\nvar greetperson = function (person) {\n    console.log('hello', person.name);\n};\ngreetperson(me);\n// generics\n// capture whatever item we pass in the function\n// I need to pass a object with a property called name\nvar addUID = function (obj) {\n    var uid = Math.floor(Math.random() * 100);\n    return __assign(__assign({}, obj), { uid: uid });\n};\nvar docOne = addUID({ name: 'yoshi', age: 40 });\nconsole.log(docOne.age);\n// generics\n// specify the type of input when calling a generic function\nvar printAny = function (state, name) {\n    console.log(state);\n};\nprintAny(\"hello\", \"me\");\nprintAny(1, \"me\");\nvar docThree = {\n    uid: 12345,\n    resourceName: 'person',\n    data: 'string data'\n};\nvar docFour = {\n    uid: 12345,\n    resourceName: 'person',\n    data: ['string data 1', 'string data 2']\n};\nconsole.log(docThree);\nconsole.log(docFour);\n;\nvar var1 = true;\nvar var2 = true;\nvar var3 = false;\nvar id1 = {\n    k1: 1,\n    k2: 2,\n    k3: 5,\n    helloWord: 15\n};\nconsole.log(id1);\n;\nvar optionalObj = {\n    id: \"3d2ce32\",\n    birthDate: new Date(Date.now()),\n    tropies: []\n};\nconsole.log(optionalObj);\nvar hello;\nhello = {};\nhello.age = 12;\nhello.name = \"hello\";\nconsole.log(hello);\n// enums : 0, 1, ,2, 3, 4\nvar ResourceType;\n(function (ResourceType) {\n    ResourceType[ResourceType[\"BOOK\"] = 0] = \"BOOK\";\n    ResourceType[ResourceType[\"AUTHOR\"] = 1] = \"AUTHOR\";\n    ResourceType[ResourceType[\"FILM\"] = 2] = \"FILM\";\n    ResourceType[ResourceType[\"DIRECTOR\"] = 3] = \"DIRECTOR\";\n    ResourceType[ResourceType[\"PERSON\"] = 4] = \"PERSON\";\n})(ResourceType || (ResourceType = {}));\nconsole.log(ResourceType.AUTHOR);\nvar mixedBase = {\n    id: \"3r23f0jewfewf\",\n    name: \"xjy\",\n    age: 12,\n    isMarried: false\n};\nconsole.log(mixedBase);\n\n\n//# sourceURL=webpack://typescript/./src/summary.ts?");

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