/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/userContext.jsx":
/*!*************************************!*\
  !*** ./src/context/userContext.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserContextProvider\": () => (/* binding */ UserContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    user: {},\n    loading: true,\n    balance: \"\",\n    threshold: {},\n    provider: {},\n    setUser: ()=>{},\n    setLoading: ()=>{},\n    setBalance: ()=>{},\n    setThreshold: ()=>{},\n    setProvider: ()=>{}\n});\nconst UserContextProvider = (props)=>{\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        address: \"\",\n        network: \"\"\n    });\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [threshold, setThreshold] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user: currentUser,\n            loading: isLoading,\n            balance: balance,\n            threshold: threshold,\n            provider: provider,\n            setUser: setCurrentUser,\n            setLoading: setIsLoading,\n            setBalance: setBalance,\n            setThreshold: setThreshold,\n            setProvider: setProvider\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/kumargauravsingh/dev/projects/alphaVault/UniqueAssetVerification/verifyui/src/context/userContext.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC91c2VyQ29udGV4dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNLO0FBRS9CLE1BQU1FLDRCQUFjRCxvREFBYUEsQ0FBQztJQUN2Q0UsTUFBTSxDQUFDO0lBQ1BDLFNBQVMsSUFBSTtJQUNiQyxTQUFTO0lBQ1RDLFdBQVcsQ0FBQztJQUNaQyxVQUFVLENBQUM7SUFDWEMsU0FBUyxJQUFNLENBQUM7SUFDaEJDLFlBQVksSUFBTSxDQUFDO0lBQ25CQyxZQUFZLElBQU0sQ0FBQztJQUNuQkMsY0FBYyxJQUFNLENBQUM7SUFDckJDLGFBQWEsSUFBTSxDQUFDO0FBQ3RCLEdBQUc7QUFFSSxNQUFNQyxzQkFBc0IsQ0FBQ0MsUUFBVTtJQUM1QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQzdDaUIsU0FBUztRQUNUQyxTQUFTO0lBQ1g7SUFDQSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDLElBQUk7SUFDL0MsTUFBTSxDQUFDSyxTQUFTSyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ00sV0FBV0ssYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ08sVUFBVUssWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRTFDLHFCQUNFLDhEQUFDRSxZQUFZbUIsUUFBUTtRQUNuQkMsT0FBTztZQUNMbkIsTUFBTVk7WUFDTlgsU0FBU2U7WUFDVGQsU0FBU0E7WUFDVEMsV0FBV0E7WUFDWEMsVUFBVUE7WUFDVkMsU0FBU1E7WUFDVFAsWUFBWVc7WUFDWlYsWUFBWUE7WUFDWkMsY0FBY0E7WUFDZEMsYUFBYUE7UUFDZjtrQkFFQ0UsTUFBTVMsUUFBUTs7Ozs7O0FBR3JCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZXJpZnl1aS8uL3NyYy9jb250ZXh0L3VzZXJDb250ZXh0LmpzeD80NGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICB1c2VyOiB7fSxcbiAgbG9hZGluZzogdHJ1ZSxcbiAgYmFsYW5jZTogXCJcIixcbiAgdGhyZXNob2xkOiB7fSxcbiAgcHJvdmlkZXI6IHt9LFxuICBzZXRVc2VyOiAoKSA9PiB7fSxcbiAgc2V0TG9hZGluZzogKCkgPT4ge30sXG4gIHNldEJhbGFuY2U6ICgpID0+IHt9LFxuICBzZXRUaHJlc2hvbGQ6ICgpID0+IHt9LFxuICBzZXRQcm92aWRlcjogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBuZXR3b3JrOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RocmVzaG9sZCwgc2V0VGhyZXNob2xkXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXI6IGN1cnJlbnRVc2VyLFxuICAgICAgICBsb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgICAgIGJhbGFuY2U6IGJhbGFuY2UsXG4gICAgICAgIHRocmVzaG9sZDogdGhyZXNob2xkLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIHNldFVzZXI6IHNldEN1cnJlbnRVc2VyLFxuICAgICAgICBzZXRMb2FkaW5nOiBzZXRJc0xvYWRpbmcsXG4gICAgICAgIHNldEJhbGFuY2U6IHNldEJhbGFuY2UsXG4gICAgICAgIHNldFRocmVzaG9sZDogc2V0VGhyZXNob2xkLFxuICAgICAgICBzZXRQcm92aWRlcjogc2V0UHJvdmlkZXIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVzZXIiLCJsb2FkaW5nIiwiYmFsYW5jZSIsInRocmVzaG9sZCIsInByb3ZpZGVyIiwic2V0VXNlciIsInNldExvYWRpbmciLCJzZXRCYWxhbmNlIiwic2V0VGhyZXNob2xkIiwic2V0UHJvdmlkZXIiLCJVc2VyQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiYWRkcmVzcyIsIm5ldHdvcmsiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/userContext.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/userContext */ \"./src/context/userContext.jsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_userContext__WEBPACK_IMPORTED_MODULE_2__.UserContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/kumargauravsingh/dev/projects/alphaVault/UniqueAssetVerification/verifyui/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kumargauravsingh/dev/projects/alphaVault/UniqueAssetVerification/verifyui/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBQytCO0FBRTlDLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0gscUVBQW1CQTtrQkFDbEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlcmlmeXVpLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgVXNlckNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L3VzZXJDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJDb250ZXh0UHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVXNlckNvbnRleHRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();