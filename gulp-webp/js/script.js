/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!****************************!*\
  !*** ./ #src/js/burger.js ***!
  \****************************/
var iconMenu = document.querySelector('.header__burger-icon');
var menuBody = document.querySelector('.header__menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./ #src/js/main.js ***!
  \**************************/
function a() {}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map