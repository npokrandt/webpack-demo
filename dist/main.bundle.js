/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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

//register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => console.log('sw registered!')).catch(err => console.log('error with sw', err));
} else {
  console.log('no bueno');
}
/******/ })()
;