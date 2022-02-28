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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplates */ \"./src/classes/ListTemplates.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nconst form = document.querySelector('.new-item-form');\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\nconst ul = document.querySelector('ul');\r\nconst list = new _classes_ListTemplates__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);\r\nconsole.log('hello world');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEM7QUFDVztBQUNYO0FBRzFDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW9CLENBQUM7QUFDekUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQXNCLENBQUM7QUFDbEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7QUFDckUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFDdkUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQXFCLENBQUM7QUFFckUsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQXFCLENBQUM7QUFDNUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxnRUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFJM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQVEsRUFBRSxFQUFFO0lBQ3pDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUVuQixJQUFJLEdBQWlCLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUMxQixHQUFHLEdBQUcsSUFBSSxxREFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDeEU7U0FBTTtRQUNILEdBQUcsR0FBRyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN4RTtJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvYXBwLnRzPzA2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnZvaWNlfSBmcm9tICcuL2NsYXNzZXMvSW52b2ljZSc7XHJcbmltcG9ydCB7TGlzdFRlbXBsYXRlfSBmcm9tICcuL2NsYXNzZXMvTGlzdFRlbXBsYXRlcyc7XHJcbmltcG9ydCB7UGF5bWVudH0gZnJvbSAnLi9jbGFzc2VzL1BheW1lbnQnO1xyXG5pbXBvcnQge0hhc0Zvcm1hdHRlcn0gZnJvbSAnLi9pbnRlcmZhY2VzL0hhc0Zvcm1hdHRlcic7XHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1pdGVtLWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5jb25zdCB0b2Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9mcm9tJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ftb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykgYXMgSFRNTFVMaXN0RWxlbWVudDtcclxuY29uc3QgbGlzdCA9IG5ldyBMaXN0VGVtcGxhdGUodWwpO1xyXG5cclxuY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkJyk7XHJcblxyXG5cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGU6IEV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IGRvYzogSGFzRm9ybWF0dGVyO1xyXG5cclxuICAgIGlmICh0eXBlLnZhbHVlID09PSAnaW52b2ljZScpIHtcclxuICAgICAgICBkb2MgPSBuZXcgSW52b2ljZSh0b2Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jID0gbmV3IFBheW1lbnQodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdC5yZW5kZXIoZG9jLCB0eXBlLnZhbHVlLCAnZW5kJyk7XHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Invoice\": () => (/* binding */ Invoice)\n/* harmony export */ });\n// Invoice must have all attritues and methods in HasFormatter interface\r\nclass Invoice {\r\n    constructor(client, details, amount) {\r\n        this.client = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.client} owes $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSx3RUFBd0U7QUFDakUsTUFBTSxPQUFPO0lBQ2hCLFlBQ1ksTUFBYyxFQUNkLE9BQWUsRUFDZixNQUFjO1FBRmQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUU5QixNQUFNO1FBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLFVBQVUsSUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckUsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NsYXNzZXMvSW52b2ljZS50cz83YTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGFzRm9ybWF0dGVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXJcIjtcclxuXHJcbi8vIEludm9pY2UgbXVzdCBoYXZlIGFsbCBhdHRyaXR1ZXMgYW5kIG1ldGhvZHMgaW4gSGFzRm9ybWF0dGVyIGludGVyZmFjZVxyXG5leHBvcnQgY2xhc3MgSW52b2ljZSBpbXBsZW1lbnRzIEhhc0Zvcm1hdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJpdmF0ZSBjbGllbnQ6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyKSB7fVxyXG5cclxuICAgIGZvcm1hdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY2xpZW50fSBvd2VzICQke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9YDtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Invoice.ts\n");

/***/ }),

/***/ "./src/classes/ListTemplates.ts":
/*!**************************************!*\
  !*** ./src/classes/ListTemplates.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListTemplate\": () => (/* binding */ ListTemplate)\n/* harmony export */ });\nclass ListTemplate {\r\n    constructor(container) {\r\n        this.container = container;\r\n    }\r\n    render(item, heading, pos) {\r\n        const li = document.createElement('li');\r\n        const h4 = document.createElement('h4');\r\n        h4.innerText = heading;\r\n        li.append(h4);\r\n        const p = document.createElement('p');\r\n        p.innerText = item.format();\r\n        li.append(p);\r\n        if (pos === 'start') {\r\n            this.container.prepend(li);\r\n        }\r\n        else {\r\n            this.container.append(li);\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNLFlBQVk7SUFDckIsWUFBcUIsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRXBELE1BQU0sQ0FBRSxJQUFrQixFQUFFLE9BQWUsRUFBRSxHQUFvQjtRQUM3RCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVkLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUViLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcmMvLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGVzLnRzPzc2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNGb3JtYXR0ZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0Zvcm1hdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBjb250YWluZXI6IEhUTUxVTGlzdEVsZW1lbnQpIHt9XHJcblxyXG4gICAgcmVuZGVyIChpdGVtOiBIYXNGb3JtYXR0ZXIsIGhlYWRpbmc6IHN0cmluZywgcG9zOiAnc3RhcnQnIHwgJ2VuZCcpIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG5cclxuICAgICAgICBoNC5pbm5lclRleHQgPSBoZWFkaW5nO1xyXG4gICAgICAgIGxpLmFwcGVuZChoNCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5pbm5lclRleHQgPSBpdGVtLmZvcm1hdCgpO1xyXG4gICAgICAgIGxpLmFwcGVuZChwKTtcclxuXHJcbiAgICAgICAgaWYgKHBvcyA9PT0gJ3N0YXJ0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wcmVwZW5kKGxpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/ListTemplates.ts\n");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Payment\": () => (/* binding */ Payment)\n/* harmony export */ });\n// Invoice must have all attritues and methods in HasFormatter interface\r\nclass Payment {\r\n    constructor(recipient, details, amount) {\r\n        this.recipient = recipient;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        return `${this.recipient} is owed $${this.amount} for ${this.details}`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQSx3RUFBd0U7QUFDakUsTUFBTSxPQUFPO0lBQ2hCLFlBQ1ksU0FBaUIsRUFDakIsT0FBZSxFQUNmLE1BQWM7UUFGZCxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUU5QixNQUFNO1FBQ0YsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLGFBQWEsSUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0UsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3JjLy4vc3JjL2NsYXNzZXMvUGF5bWVudC50cz9mYzBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGFzRm9ybWF0dGVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXJcIjtcclxuXHJcbi8vIEludm9pY2UgbXVzdCBoYXZlIGFsbCBhdHRyaXR1ZXMgYW5kIG1ldGhvZHMgaW4gSGFzRm9ybWF0dGVyIGludGVyZmFjZVxyXG5leHBvcnQgY2xhc3MgUGF5bWVudCBpbXBsZW1lbnRzIEhhc0Zvcm1hdHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJpdmF0ZSByZWNpcGllbnQ6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGRldGFpbHM6IHN0cmluZyxcclxuICAgICAgICBwcml2YXRlIGFtb3VudDogbnVtYmVyKSB7fVxyXG5cclxuICAgIGZvcm1hdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMucmVjaXBpZW50fSBpcyBvd2VkICQke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9YDtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Payment.ts\n");

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