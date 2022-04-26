module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/certificate/[username].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/user/certificate/[username].js":
/*!**********************************************!*\
  !*** ./pages/user/certificate/[username].js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const Certificate = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const {
    query,
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    username
  } = query;
  const {
    0: domain,
    1: setDomain
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setDomain("https://" + username.slice(username.indexOf("@") + 1, username.length + 1));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_3__["PAGE_CHANGE_SUCCESS"],
      data: "certificate"
    });
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      height: "100vh"
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Title, {
      children: "\uD68C\uC6D0\uAC00\uC785\uC744 \uCD95\uD558\uB4DC\uB9BD\uB2C8\uB2E4!"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Typography"].Paragraph, {
      ellipsis: true,
      type: "success",
      children: [username, "\uB85C \uC774\uBA54\uC77C\uC774 \uC1A1\uBD80\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C \uC778\uC99D\uC744 \uC2E4\uC2DC\uD574\uC8FC\uC138\uC694."]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("a", {
      onClick: () => push(domain),
      children: domain
    }), "\uC73C\uB85C \uC774\uB3D9\uD558\uAE30"]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Certificate);

/***/ }),

/***/ "./reducers/admin.js":
/*!***************************!*\
  !*** ./reducers/admin.js ***!
  \***************************/
/*! exports provided: LOAD_USERLIST_REQUEST, LOAD_USERLIST_SUCCESS, LOAD_USERLIST_FAILURE, LOAD_SHOPLIST_REQUEST, LOAD_SHOPLIST_SUCCESS, LOAD_SHOPLIST_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, LOAD_EVENTS_REQUEST, LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAILURE, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, EDIT_EVENT_REQUEST, EDIT_EVENT_SUCCESS, EDIT_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE, PAGE_CHANGE_SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_REQUEST", function() { return LOAD_USERLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_SUCCESS", function() { return LOAD_USERLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_FAILURE", function() { return LOAD_USERLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_REQUEST", function() { return LOAD_SHOPLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_SUCCESS", function() { return LOAD_SHOPLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_FAILURE", function() { return LOAD_SHOPLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_REQUEST", function() { return DELETE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_SUCCESS", function() { return DELETE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_FAILURE", function() { return DELETE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_REQUEST", function() { return LOAD_EVENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_SUCCESS", function() { return LOAD_EVENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_FAILURE", function() { return LOAD_EVENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_REQUEST", function() { return ADD_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_SUCCESS", function() { return ADD_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_FAILURE", function() { return ADD_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_REQUEST", function() { return EDIT_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_SUCCESS", function() { return EDIT_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_FAILURE", function() { return EDIT_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_REQUEST", function() { return DELETE_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_SUCCESS", function() { return DELETE_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_FAILURE", function() { return DELETE_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CHANGE_SUCCESS", function() { return PAGE_CHANGE_SUCCESS; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isLoadingShopList: false,
  loadingShopListError: null,
  shopList: [],
  originalShopList: [],
  isLoadingUserList: false,
  loadingUserListError: null,
  userList: [],
  originalUserList: [],
  events: [],
  loadEventsError: null,
  isLoadingEvents: false,
  pageInfo: null
};
const LOAD_USERLIST_REQUEST = 'LOAD_USERLIST_REQUEST';
const LOAD_USERLIST_SUCCESS = 'LOAD_USERLIST_SUCCESS';
const LOAD_USERLIST_FAILURE = 'LOAD_USERLIST_FAILURE';
const LOAD_SHOPLIST_REQUEST = 'LOAD_SHOPLIST_REQUEST';
const LOAD_SHOPLIST_SUCCESS = 'LOAD_SHOPLIST_SUCCESS';
const LOAD_SHOPLIST_FAILURE = 'LOAD_SHOPLIST_FAILURE';
const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE';
const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST';
const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';
const EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST';
const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS';
const EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';
const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST';
const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';
const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_SHOPLIST_REQUEST:
        draft.isLoadingUserList = true;
        break;

      case LOAD_SHOPLIST_SUCCESS:
        draft.isLoadingUserList = false;
        draft.userList = action.data;
        draft.originalUserList = action.data;
        break;

      case LOAD_SHOPLIST_FAILURE:
        draft.isLoadingUserList = false;
        draft.loadingUserListError = action.error;
        break;

      case LOAD_SHOPLIST_REQUEST:
        draft.isLoadingShopList = true;
        break;

      case LOAD_SHOPLIST_SUCCESS:
        draft.isLoadingShopList = false;
        draft.shopList = action.data;
        draft.originalShopList = action.data;
        break;

      case LOAD_SHOPLIST_FAILURE:
        draft.isLoadingShopList = false;
        draft.loadingShopListError = action.error;
        break;

      case PAGE_CHANGE_SUCCESS:
        draft.pageInfo = action.data;
        break;

      default:
        state;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci9jZXJ0aWZpY2F0ZS9bdXNlcm5hbWVdLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2FkbWluLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2VydGlmaWNhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicXVlcnkiLCJwdXNoIiwidXNlUm91dGVyIiwidXNlcm5hbWUiLCJkb21haW4iLCJzZXREb21haW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNsaWNlIiwiaW5kZXhPZiIsImxlbmd0aCIsInR5cGUiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsImhlaWdodCIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7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LGdCQUFOLEdBQXlCZ0MsTUFBTSxDQUFDdEMsSUFBaEM7QUFDQTs7QUFDRixXQUFLb0IscUJBQUw7QUFDRW9CLGFBQUssQ0FBQ3JDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FxQyxhQUFLLENBQUNwQyxvQkFBTixHQUE2QmtDLE1BQU0sQ0FBQ0csS0FBcEM7QUFDQTs7QUFDRixXQUFLMUMsbUJBQUw7QUFDRXlDLGFBQUssQ0FBQzFCLFFBQU4sR0FBaUJ3QixNQUFNLENBQUN0QyxJQUF4QjtBQUNBOztBQUNGO0FBQ0VxQyxhQUFLO0FBQ0w7QUE5Qko7QUFnQ0QsR0FqQ2EsQ0FBZDtBQWtDRCxDQW5DRDs7QUFxQ2VELHNFQUFmLEU7Ozs7Ozs7Ozs7O0FDcEZBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3VzZXIvY2VydGlmaWNhdGUvW3VzZXJuYW1lXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvdXNlci9jZXJ0aWZpY2F0ZS9bdXNlcm5hbWVdLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDYXJkLCBUeXBvZ3JhcGh5LCB0YWcgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi8uLi9yZWR1Y2Vycy9hZG1pblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgQ2VydGlmaWNhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBxdWVyeSwgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHF1ZXJ5O1xuICBjb25zdCBbZG9tYWluLCBzZXREb21haW5dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERvbWFpbihcImh0dHBzOi8vXCIgKyB1c2VybmFtZS5zbGljZSh1c2VybmFtZS5pbmRleE9mKFwiQFwiKSArIDEsIHVzZXJuYW1lLmxlbmd0aCArIDEpKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcImNlcnRpZmljYXRlXCIgfSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxDYXJkIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgPFR5cG9ncmFwaHkuVGl0bGU+7ZqM7JuQ6rCA7J6F7J2EIOy2le2VmOuTnOumveuLiOuLpCE8L1R5cG9ncmFwaHkuVGl0bGU+XG4gICAgICA8VHlwb2dyYXBoeS5QYXJhZ3JhcGggZWxsaXBzaXM9e3RydWV9IHR5cGU9e1wic3VjY2Vzc1wifT5cbiAgICAgICAge3VzZXJuYW1lfeuhnCDsnbTrqZTsnbzsnbQg7Iah67aA65CY7JeI7Iq164uI64ukLiDsnbTrqZTsnbwg7J247Kad7J2EIOyLpOyLnO2VtOyjvOyEuOyalC5cbiAgICAgIDwvVHlwb2dyYXBoeS5QYXJhZ3JhcGg+XG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiBwdXNoKGRvbWFpbil9Pntkb21haW59PC9hPuycvOuhnCDsnbTrj5ntlZjquLBcbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDZXJ0aWZpY2F0ZTtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBzaG9wTGlzdDogW10sXG4gIG9yaWdpbmFsU2hvcExpc3Q6IFtdLFxuICBpc0xvYWRpbmdVc2VyTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdVc2VyTGlzdEVycm9yOiBudWxsLFxuICB1c2VyTGlzdDogW10sXG4gIG9yaWdpbmFsVXNlckxpc3Q6IFtdLFxuICBldmVudHM6IFtdLFxuICBsb2FkRXZlbnRzRXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ0V2ZW50czogZmFsc2UsXG4gIHBhZ2VJbmZvOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfUkVRVUVTVCA9ICdMT0FEX1VTRVJMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfU1VDQ0VTUyA9ICdMT0FEX1VTRVJMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfRkFJTFVSRSA9ICdMT0FEX1VTRVJMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gJ0xPQURfU0hPUExJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gJ0xPQURfU0hPUExJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gJ0xPQURfU0hPUExJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1NVQ0NFU1MgPSAnREVMRVRFX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1JFUVVFU1QgPSAnTE9BRF9FVkVOVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfU1VDQ0VTUyA9ICdMT0FEX0VWRU5UU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19GQUlMVVJFID0gJ0xPQURfRVZFTlRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1JFUVVFU1QgPSAnQUREX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9TVUNDRVNTID0gJ0FERF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfRkFJTFVSRSA9ICdBRERfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1JFUVVFU1QgPSAnRURJVF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1NVQ0NFU1MgPSAnRURJVF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX0ZBSUxVUkUgPSAnRURJVF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9SRVFVRVNUID0gJ0RFTEVURV9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfU1VDQ0VTUyA9ICdERUxFVEVfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFHRV9DSEFOR0VfU1VDQ0VTUyA9ICdQQUdFX0NIQU5HRV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1Nob3BMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5wYWdlSW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==