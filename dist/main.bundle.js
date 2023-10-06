/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/elements.js
const boxBtn = document.getElementById('boxBtn');
const headerBtn = document.getElementById('headerBtn');
const boxEl = document.getElementById('box');
const headerEl = document.getElementById('header');
;// CONCATENATED MODULE: ./src/images/blue-robot.png
const blue_robot_namespaceObject = __webpack_require__.p + "f0c1cd433b981c1b71d4.png";
;// CONCATENATED MODULE: ./src/images/yellow-robot.png
const yellow_robot_namespaceObject = __webpack_require__.p + "fac150a232c28ac1bc83.png";
;// CONCATENATED MODULE: ./src/js/box.js



const changeBoxColor = () => {
  if (boxEl.dataset.color === 'yellow') {
    boxEl.src = blue_robot_namespaceObject;
    boxEl.dataset.color = 'blue';
  } else {
    boxEl.src = yellow_robot_namespaceObject;
    boxEl.dataset.color = 'yellow';
  }
};
boxEl.dataset.color = 'yellow';
boxEl.src = yellow_robot_namespaceObject;
;// CONCATENATED MODULE: ./src/js/header.js

function changeHeaderColor() {
  const currColor = headerEl.style.color;
  if (currColor === 'black') {
    headerEl.style.color = 'blue';
  } else {
    headerEl.style.color = 'black';
  }
}
;// CONCATENATED MODULE: ./src/js/main.js




headerEl.style.color = 'black';
boxBtn.addEventListener('click', changeBoxColor);
headerBtn.addEventListener('click', changeHeaderColor);
/******/ })()
;