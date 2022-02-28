/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplates */ \"./src/classes/ListTemplates.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nconst form = document.querySelector('.new-item-form');\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\nconst ul = document.querySelector('ul');\r\nconst list = new _classes_ListTemplates__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBNEM7QUFDVztBQUNYO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnRUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBTztBQUN6QjtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFPO0FBQ3pCO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2FwcC50cz8yMzk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuL2NsYXNzZXMvSW52b2ljZSc7XHJcbmltcG9ydCB7IExpc3RUZW1wbGF0ZSB9IGZyb20gJy4vY2xhc3Nlcy9MaXN0VGVtcGxhdGVzJztcclxuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gJy4vY2xhc3Nlcy9QYXltZW50JztcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctaXRlbS1mb3JtJyk7XHJcbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpO1xyXG5jb25zdCB0b2Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9mcm9tJyk7XHJcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpO1xyXG5jb25zdCBhbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW1vdW50Jyk7XHJcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuY29uc3QgbGlzdCA9IG5ldyBMaXN0VGVtcGxhdGUodWwpO1xyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZG9jO1xyXG4gICAgaWYgKHR5cGUudmFsdWUgPT09ICdpbnZvaWNlJykge1xyXG4gICAgICAgIGRvYyA9IG5ldyBJbnZvaWNlKHRvZnJvbS52YWx1ZSwgZGV0YWlscy52YWx1ZSwgYW1vdW50LnZhbHVlQXNOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jID0gbmV3IFBheW1lbnQodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XHJcbiAgICB9XHJcbiAgICBsaXN0LnJlbmRlcihkb2MsIHR5cGUudmFsdWUsICdlbmQnKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Invoice\": () => (/* binding */ Invoice)\n/* harmony export */ });\n// Invoice must have all attritues and methods in HasFormatter interface\r\nclass Invoice {\r\n    constructor(client, details, amount) {\r\n        this.client = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.client} owes $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGFBQWEsUUFBUSxhQUFhLE1BQU0sYUFBYTtBQUN2RTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NsYXNzZXMvSW52b2ljZS50cz9iNWY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEludm9pY2UgbXVzdCBoYXZlIGFsbCBhdHRyaXR1ZXMgYW5kIG1ldGhvZHMgaW4gSGFzRm9ybWF0dGVyIGludGVyZmFjZVxyXG5leHBvcnQgY2xhc3MgSW52b2ljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjbGllbnQsIGRldGFpbHMsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xyXG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbiAgICBmb3JtYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xpZW50fSBvd2VzICQke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9YDtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/Invoice.ts\n");

/***/ }),

/***/ "./src/classes/ListTemplates.ts":
/*!**************************************!*\
  !*** ./src/classes/ListTemplates.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListTemplate\": () => (/* binding */ ListTemplate)\n/* harmony export */ });\nclass ListTemplate {\r\n    constructor(container) {\r\n        this.container = container;\r\n    }\r\n    render(item, heading, pos) {\r\n        const li = document.createElement('li');\r\n        const h4 = document.createElement('h4');\r\n        h4.innerText = heading;\r\n        li.append(h4);\r\n        const p = document.createElement('p');\r\n        p.innerText = item.format();\r\n        li.append(p);\r\n        if (pos === 'start') {\r\n            this.container.prepend(li);\r\n        }\r\n        else {\r\n            this.container.append(li);\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NsYXNzZXMvTGlzdFRlbXBsYXRlcy50cz80OWQwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMaXN0VGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoaXRlbSwgaGVhZGluZywgcG9zKSB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICBoNC5pbm5lclRleHQgPSBoZWFkaW5nO1xyXG4gICAgICAgIGxpLmFwcGVuZChoNCk7XHJcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLmlubmVyVGV4dCA9IGl0ZW0uZm9ybWF0KCk7XHJcbiAgICAgICAgbGkuYXBwZW5kKHApO1xyXG4gICAgICAgIGlmIChwb3MgPT09ICdzdGFydCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucHJlcGVuZChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/classes/ListTemplates.ts\n");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Payment\": () => (/* binding */ Payment)\n/* harmony export */ });\n// Invoice must have all attritues and methods in HasFormatter interface\r\nclass Payment {\r\n    constructor(recipient, details, amount) {\r\n        this.recipient = recipient;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.recipient} is owed $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQixXQUFXLGFBQWEsTUFBTSxhQUFhO0FBQzdFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzP2Y3NGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW52b2ljZSBtdXN0IGhhdmUgYWxsIGF0dHJpdHVlcyBhbmQgbWV0aG9kcyBpbiBIYXNGb3JtYXR0ZXIgaW50ZXJmYWNlXHJcbmV4cG9ydCBjbGFzcyBQYXltZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHJlY2lwaWVudCwgZGV0YWlscywgYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5yZWNpcGllbnQgPSByZWNpcGllbnQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscztcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxuICAgIGZvcm1hdCgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5yZWNpcGllbnR9IGlzIG93ZWQgJCR7dGhpcy5hbW91bnR9IGZvciAke3RoaXMuZGV0YWlsc31gO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Payment.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;