/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: SyntaxError: C:/Users/jason/trial-form/src/block/block.js: Expected corresponding JSX closing tag for <input> (59:6)\\n\\n\\u001b[0m \\u001b[90m 57 | \\u001b[39m\\t\\t\\t\\t\\t\\t\\u001b[33mName\\u001b[39m\\n \\u001b[90m 58 | \\u001b[39m\\t\\t\\t\\t\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m \\u001b[36mclass\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[32m\\\"col-sm-7 form-control\\\"\\u001b[39m type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"text\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"dname\\\"\\u001b[39m name\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Name\\\"\\u001b[39m tabindex\\u001b[33m=\\u001b[39m\\u001b[32m\\\"1\\\"\\u001b[39m autocomplete\\u001b[33m=\\u001b[39m\\u001b[32m\\\"off\\\"\\u001b[39m placeholder\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Enter Full Name\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 59 | \\u001b[39m\\t\\t\\t\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mlabel\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\t\\t\\t\\t\\t\\t\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 60 | \\u001b[39m\\t\\t\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33mlabel\\u001b[39m \\u001b[36mclass\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[32m\\\"col-sm-3 control-label\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mEmail\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mlabel\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m 61 | \\u001b[39m\\t\\t\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m \\u001b[36mclass\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[32m\\\"col-sm-7\\\"\\u001b[39m type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"text\\\"\\u001b[39m \\u001b[36mclass\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[32m\\\"form-control\\\"\\u001b[39m id\\u001b[33m=\\u001b[39m\\u001b[32m\\\"demail\\\"\\u001b[39m name\\u001b[33m=\\u001b[39m\\u001b[32m\\\"email\\\"\\u001b[39m tabindex\\u001b[33m=\\u001b[39m\\u001b[32m\\\"1\\\"\\u001b[39m autocomplete\\u001b[33m=\\u001b[39m\\u001b[32m\\\"off\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\n \\u001b[90m 62 | \\u001b[39m\\t\\t\\t\\t\\t\\t\\t\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33minput\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);