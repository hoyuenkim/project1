module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Forms/ChangePassword.js":
/*!********************************************!*\
  !*** ./components/Forms/ChangePassword.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const ChangePassword = ({
  setToggleChangePassword
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const [presentPassword, onChangePresentPassword, setPresentPassword] = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const [password, onChangePassword, setPassword] = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const [passwordCheck, onChangePasswordCheck, setChangePasswordCheck] = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const {
    session,
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.user);
  const onFinish = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["PASSWORD_CHANGE_REQUEST"],
      data: {
        id: session.id,
        password
      }
    });
    setToggleChangePassword(prev => !prev);
    setPresentPassword(null);
    setPassword(null);
    setChangePasswordCheck(null);
  }, [password, passwordCheck]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        verticalAlign: 'middle'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onFinish: onFinish,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "presentPassword",
          validateTrigger: "onBlur",
          rules: [{
            required: true,
            message: '기존 비밀번호를 입력해주세요'
          }, () => ({
            async validator(rule, value) {
              const regex = new RegExp(/^[A-Za-z0-9]{6,12}$/);

              if (value && value.match(regex)) {
                const result = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/user/confirm/password', {
                  id: session.id,
                  password: value
                });

                if (!result.data) {
                  // console.log(result);
                  return Promise.reject('기존 비밀번호가 일치하지 않습니다.');
                } else {
                  return Promise.resolve();
                }
              } else {
                return Promise.reject('형식에 맞지 않는 비밀번호입니다');
              }
            }

          })],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
            size: `large`,
            prefix: `* 기존 패스워드`,
            value: presentPassword,
            onChange: onChangePresentPassword,
            placeholder: "\uAE30\uC874 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "password",
          rules: [{
            required: true,
            message: '비밀번호를 확인해주세요'
          }, {
            pattern: /^[A-Za-z0-9]{6,12}$/,
            message: '비밀번호가 형식에 맞지 않습니다'
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
            prefix: `* 비밀번호`,
            size: `large`,
            value: password,
            onChange: onChangePassword,
            placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "passwordCheck",
          dependencies: ['password'],
          rules: [{
            required: true,
            message: '비밀번호를 확인해 주세요'
          }, ({
            getFieldValue
          }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('비밀번호가 일치하지 않습니다.');
            }

          })],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
            prefix: `* 비밀번호 확인`,
            size: `large`,
            value: passwordCheck,
            onChange: onChangePasswordCheck,
            placeholder: "\uB2E4\uC2DC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary',
          htmlType: 'submit',
          style: {
            width: '100%'
          },
          children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "./components/Forms/Login.js":
/*!***********************************!*\
  !*** ./components/Forms/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const Login = ({
  setToggleLogin,
  username,
  onChangeUsername,
  setUsername,
  password,
  onChangePassword,
  setPassword
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    loginError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (loginError) {
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(loginError);
    }
  }, [loginError]);
  const {
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoggedIn) {
      setToggleLogin(false);
    }
  });

  const onClickSignUp = () => {
    setToggleLogin(false);
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/user/signup');
  };

  const onFinish = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"],
      data: {
        username,
        password
      }
    });
  }, [username, password]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        verticalAlign: 'middle'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onFinish,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
          direction: "vertical",
          size: 'large',
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: 'email',
            rules: [{
              required: true,
              message: '이메일을 입력해주세요'
            }, {
              type: 'email',
              message: '형식에 맞지 않는 아이디입니다'
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {}),
              size: 'large',
              name: 'email',
              onChange: onChangeUsername
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: 'password',
            rules: [{
              required: true,
              message: '비밀번호를 입력해주세요'
            }, {
              pattern: /^[0-9a-zA-Z]{6,12}$/,
              message: '형식에 맞지 않는 비밀번호입니다'
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
              name: 'password',
              prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}),
              size: 'large',
              onChange: onChangePassword
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: 'primary',
            htmlType: 'submit',
            style: {
              width: '100%'
            },
            children: "Login"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            style: {
              width: '100%'
            },
            onClick: onClickSignUp,
            children: "\uD68C\uC6D0\uAC00\uC785"
          })]
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/Forms/SearchBar.js":
/*!***************************************!*\
  !*** ./components/Forms/SearchBar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/menu */ "./reducers/menu.js");
/* harmony import */ var _reducers_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/payment */ "./reducers/payment.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const SearchBar = ({
  setToggleSearch
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();

  const onChangeText = e => setText(e.target.value);

  const onSearch = () => {
    dispatch({
      type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["SEARCH_PRODUCT_SUCCESS"],
      data: {
        text
      }
    });
    setText();
    console.log(text);
    setToggleSearch(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
    size: "large",
    value: text,
    onChange: onChangeText,
    enterButton: true,
    onSearch: onSearch
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./components/Generalui/CustomHooks.js":
/*!*********************************************!*\
  !*** ./components/Generalui/CustomHooks.js ***!
  \*********************************************/
/*! exports provided: useInput, useChecked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChecked", function() { return useChecked; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInput = (initialState = null) => {
  const {
    0: value,
    1: handler
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);

  const setter = e => handler(e.target.value);

  return [value, setter, handler];
};
const useChecked = (initialState = null) => {
  const {
    0: value,
    1: handler
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  const setter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    handler(prev => {
      return !prev;
    });
  }, [value]);
  return [value, setter, handler];
};

/***/ }),

/***/ "./components/Layout/CentralAppLayout.js":
/*!***********************************************!*\
  !*** ./components/Layout/CentralAppLayout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavibarLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavibarLayout */ "./components/Layout/NavibarLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hoyuen\\Documents\\dev\\project1\\frontend\\components\\Layout\\CentralAppLayout.js";





const CentralAppLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      gutter: 10,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 0,
        md: 7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 24,
        md: 10,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_NavibarLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 0,
        md: 7
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (CentralAppLayout);

/***/ }),

/***/ "./components/Layout/NavibarLayout.js":
/*!********************************************!*\
  !*** ./components/Layout/NavibarLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Forms_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Forms/Login */ "./components/Forms/Login.js");
/* harmony import */ var _Forms_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Forms/SearchBar */ "./components/Forms/SearchBar.js");
/* harmony import */ var _Forms_ChangePassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Forms/ChangePassword */ "./components/Forms/ChangePassword.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);















const NavibarLayout = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const [username, onChangeUsername, setUsername] = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_9__["useInput"])();
  const [password, onChangePassword, setPassword] = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_9__["useInput"])();
  const {
    0: toggleLogin,
    1: setToggleLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: toggleSearch,
    1: setToggleSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: toggleChangePassword,
    1: setToggleChangePassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false); // const [searchShow, setSearchShow] = useState(false);

  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);

  const hideHandler = () => {
    setShow(false);
  };

  const showHandler = show => {
    setShow(show);
  };

  const onToggleChangePassword = () => {
    hideHandler();
    setToggleChangePassword(prev => !prev);
  };

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const onClickLogout = () => {
    setPassword('');
    setUsername('');
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_SUCCESS"]
    });
  };

  const onToggleLogin = () => {
    setPassword('');
    setUsername('');
    setToggleLogin(prev => !prev);
  };

  const onToggleSearch = () => {
    setToggleSearch(prev => !prev);
  };

  const onClickPayments = () => {
    router.push('/payments');
    hideHandler();
  };

  const onClickAdmin = () => {
    router.push('/shop/admin');
    hideHandler();
  };

  const {
    isLoggedIn,
    session
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    originProducts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.menu);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: 'Login',
      visible: toggleLogin,
      onCancel: onToggleLogin,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_Forms_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setToggleLogin: setToggleLogin,
        username: username,
        onChangeUsername: onChangeUsername,
        password: password,
        onChangePassword: onChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: 'Search',
      visible: toggleSearch,
      onCancel: onToggleSearch,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_Forms_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: 'product',
        setToggleSearch: setToggleSearch
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: 'Change Password',
      visible: toggleChangePassword,
      onCancel: onToggleChangePassword,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_Forms_ChangePassword__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setToggleChangePassword: setToggleChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      style: {
        marginTop: '10px',
        backGroundColor: 'white'
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
        mode: "horizontal",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {
            onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back()
          })
        }, 'back'), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
          style: {
            float: 'right'
          },
          children: originProducts.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
            enterButton: true,
            style: {
              verticalAlign: 'middle'
            },
            onClick: onToggleSearch,
            readOnly: true
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
            enterButton: true,
            style: {
              verticalAlign: 'middle',
              visibility: 'hidden'
            },
            disabled: true,
            onClick: onToggleSearch,
            readOnly: true
          })
        }, 'search'), !isLoggedIn ? [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            onClick: onToggleLogin,
            children: "\uB85C\uADF8\uC778"
          })
        }, 'login')] : [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
            trigger: 'click',
            placement: 'bottom',
            title: session.name,
            visible: show,
            onVisibleChange: showHandler,
            content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
                direction: 'vertical',
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
                  onClick: onToggleChangePassword,
                  children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
                  onClick: onClickPayments,
                  children: "\uACB0\uC81C\uC774\uB825"
                }), session.division === true && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
                  onClick: onClickAdmin,
                  children: "\uB9E4\uC7A5\uAD00\uB9AC \uD398\uC774\uC9C0"
                })]
              })
            }),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], {})
          })
        }, 'profile'), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
          style: {
            float: 'right'
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
            onClick: onClickLogout,
            children: "\uB85C\uADF8\uC544\uC6C3"
          })
        }, 'logout')]]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavibarLayout);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_CentralAppLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/CentralAppLayout */ "./components/Layout/CentralAppLayout.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);













const App = ({
  Component
}) => {
  const store = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useStore"])(state => state);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("title", {
        children: "Order"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, user-scalable=no"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-1.12.4.min.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        type: "text/javascript",
        src: "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        src: "https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js?autoload=false"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        type: "text/javascript",
        src: "https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("style", {
        children: `body {
            background-color: #EFF2F5!important;
            font-family: 'Noto Sans KR', sans-serif;
          }`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${"82de51c28c3208e3e5ed5a6053d7559a"}&libraries=services`
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("script", {
        type: "text/javascript",
        src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${"30aa9f7294d93d6e6545c454cf809a37"}&libraries=services,clusterer`
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_1__["PersistGate"], {
      persistor: store.__persistor,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Layout_CentralAppLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Component, {})
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default()(App)));

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

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: LOAD_CART_REQUEST, LOAD_CART_SUCCESS, LOAD_CART_FAILURE, REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAILURE, ADD_ITEM_QUANTITY_REQUEST, SUBSTRACT_ITEM_QUANTITY_REQUEST, ADD_CART_ITEM_REQUEST, REMOVE_CART_ITEM_REQUEST, CLEAR_CART_REQUEST, GET_SHOP_TABLE_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_REQUEST", function() { return LOAD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_SUCCESS", function() { return LOAD_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_FAILURE", function() { return LOAD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_REQUEST", function() { return REMOVE_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_SUCCESS", function() { return REMOVE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FAILURE", function() { return REMOVE_ITEM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM_QUANTITY_REQUEST", function() { return ADD_ITEM_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRACT_ITEM_QUANTITY_REQUEST", function() { return SUBSTRACT_ITEM_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_ITEM_REQUEST", function() { return ADD_CART_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_ITEM_REQUEST", function() { return REMOVE_CART_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART_REQUEST", function() { return CLEAR_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHOP_TABLE_ID", function() { return GET_SHOP_TABLE_ID; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  cart: [],
  isLoadingCart: false,
  isRemoveingCart: false,
  ShopId: undefined,
  TableId: undefined
};
const LOAD_CART_REQUEST = 'LOAD_CART_REQUEST';
const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';
const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';
const ADD_ITEM_QUANTITY_REQUEST = 'ADD_ITEM_QUANTITY_REQUEST';
const SUBSTRACT_ITEM_QUANTITY_REQUEST = 'SUBSTRACT_ITEM_QUANTITY_REQUEST';
const ADD_CART_ITEM_REQUEST = 'ADD_CART_ITEM_REQUEST';
const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST';
const CLEAR_CART_REQUEST = 'CLEAR_CART_REQUEST';
const GET_SHOP_TABLE_ID = 'GET_SHOP_TABLE_ID';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_CART_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, action.data]
        });
      }

    case LOAD_CART_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_ITEM_REQUEST:
      {
        const items = state.cart.filter(item => item.id !== action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...items]
        });
      }

    case ADD_CART_ITEM_REQUEST:
      {
        const newProduct = action.product;
        const productIndex = state.cart.findIndex(v => v.id === newProduct.id);

        if (productIndex !== -1) {
          const formerProduct = state.cart[productIndex];

          const finalProduct = _objectSpread(_objectSpread({}, formerProduct), {}, {
            quantity: formerProduct.quantity + newProduct.quantity
          });

          const cartList = [...state.cart.filter(v => v.id !== newProduct.id), finalProduct];
          return _objectSpread(_objectSpread({}, state), {}, {
            cart: cartList
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, newProduct]
        });
      }

    case ADD_ITEM_QUANTITY_REQUEST:
      {
        const index = state.cart.findIndex(cart => cart.id == action.data.id);
        const product = state.cart[index];
        let quantity = product.quantity;
        quantity < 100 ? quantity += 1 : 99;
        const cart = [...state.cart];
        cart[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          cart
        });
      }

    case SUBSTRACT_ITEM_QUANTITY_REQUEST:
      {
        const index = state.cart.findIndex(cart => cart.id === action.data.id);
        const product = state.cart[index];
        let quantity = product.quantity;
        quantity > 1 ? quantity -= 1 : 1;
        const cart = [...state.cart];
        cart[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          cart
        });
      }

    case CLEAR_CART_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: []
        });
      }

    case GET_SHOP_TABLE_ID:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          ShopId: action.data.ShopId,
          TableId: action.data.TableId
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: SET_CLIENT_STATE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CLIENT_STATE", function() { return SET_CLIENT_STATE; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop */ "./reducers/shop.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./reducers/menu.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart */ "./reducers/cart.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment */ "./reducers/payment.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin */ "./reducers/admin.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const SET_CLIENT_STATE = 'SET_CLIENT_STATE';
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  index: (state = {}, action) => {
    console.log(`action.type: ${action.type}`);

    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  admin: _admin__WEBPACK_IMPORTED_MODULE_7__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  shop: _shop__WEBPACK_IMPORTED_MODULE_3__["default"],
  menu: _menu__WEBPACK_IMPORTED_MODULE_4__["default"],
  cart: _cart__WEBPACK_IMPORTED_MODULE_5__["default"],
  payment: _payment__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/menu.js":
/*!**************************!*\
  !*** ./reducers/menu.js ***!
  \**************************/
/*! exports provided: LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE, ADD_QUANTITY_REQUEST, ADD_QUANTITY_SUCCESS, ADD_QUANTITY_FAILURE, SUBSTRACT_QUANTITY_REQUEST, SUBSTRACT_QUANTITY_SUCCESS, SUBSTRACT_QUANTITY_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, LOAD_CART_REQUEST, LOAD_CART_SUCCESS, LOAD_CART_FAILURE, INITIATE_QUANTITY_REQUEST, GET_NAVIBAR_SIZE, SEARCH_PRODUCT_SUCCESS, SELECT_CATEGORY_SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCTS_REQUEST", function() { return LOAD_PRODUCTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCTS_SUCCESS", function() { return LOAD_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PRODUCTS_FAILURE", function() { return LOAD_PRODUCTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_REQUEST", function() { return ADD_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_SUCCESS", function() { return ADD_QUANTITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_FAILURE", function() { return ADD_QUANTITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRACT_QUANTITY_REQUEST", function() { return SUBSTRACT_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRACT_QUANTITY_SUCCESS", function() { return SUBSTRACT_QUANTITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRACT_QUANTITY_FAILURE", function() { return SUBSTRACT_QUANTITY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_REQUEST", function() { return ADD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_SUCCESS", function() { return ADD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_FAILURE", function() { return ADD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_REQUEST", function() { return LOAD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_SUCCESS", function() { return LOAD_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_FAILURE", function() { return LOAD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIATE_QUANTITY_REQUEST", function() { return INITIATE_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NAVIBAR_SIZE", function() { return GET_NAVIBAR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_PRODUCT_SUCCESS", function() { return SEARCH_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_CATEGORY_SUCCESS", function() { return SELECT_CATEGORY_SUCCESS; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  products: [],
  originProducts: [],
  naviSize: null,
  TableId: null,
  isAddingProduct: false,
  isLoadingCart: false,
  categories: []
};
const LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST';
const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
const LOAD_PRODUCTS_FAILURE = 'LOAD_PRODUCTS_FAILURE';
const ADD_QUANTITY_REQUEST = 'ADD_QUANTITY_REQUEST';
const ADD_QUANTITY_SUCCESS = 'ADD_QUANTITY_SUCCESS';
const ADD_QUANTITY_FAILURE = 'ADD_QUANTITY_FAILURE';
const SUBSTRACT_QUANTITY_REQUEST = 'SUBSTRACT_QUANTITY_REQUEST';
const SUBSTRACT_QUANTITY_SUCCESS = 'SUBSTRACT_QUANTITY_SUCCESS';
const SUBSTRACT_QUANTITY_FAILURE = 'SUBSTRACT_QUANTITY_FAILURE';
const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
const LOAD_CART_REQUEST = 'LOAD_CART_REQUEST';
const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';
const INITIATE_QUANTITY_REQUEST = 'INITIATE_QUANTITY_REQUEST';
const GET_NAVIBAR_SIZE = 'GET_NAVIBAR_SIZE';
const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS';
const SELECT_CATEGORY_SUCCESS = 'SELECT_CATEGORY_SUCCESS';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NAVIBAR_SIZE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          naviSize: action.data
        });
      }

    case ADD_QUANTITY_SUCCESS:
      {
        const index = state.products.findIndex(product => product.id === action.data.id);
        const product = state.products[index];
        let quantity = product.quantity;
        quantity < 100 ? quantity += 1 : 99;
        const products = [...state.products];
        products[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case SUBSTRACT_QUANTITY_SUCCESS:
      {
        const index = state.products.findIndex(product => product.id === action.data.id);
        const product = state.products[index];
        let quantity = product.quantity;
        quantity > 1 ? quantity -= 1 : 1;
        const products = [...state.products];
        products[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case LOAD_PRODUCTS_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_PRODUCTS_SUCCESS:
      {
        if (action.data[0].TableId) {
          return _objectSpread(_objectSpread({}, state), {}, {
            products: action.data[0].menus,
            originProducts: action.data[0].menus,
            TableId: action.data[0].TableId,
            categories: action.data[1]
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          originProducts: action.data[0],
          products: action.data[0],
          categories: action.data[1]
        });
      }

    case LOAD_PRODUCTS_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case ADD_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case ADD_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          products: [action.data, ...state.products]
        });
      }

    case ADD_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case LOAD_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_CART_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, action.data]
        });
      }

    case LOAD_CART_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case INITIATE_QUANTITY_REQUEST:
      {
        const product = action.data;
        const index = state.products.findIndex(v => v.id == action.data.id);
        const products = [...state.products];
        products[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity: 1
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case SEARCH_PRODUCT_SUCCESS:
      {
        const filteredProducts = state.originProducts.filter(product => {
          return product.title.indexOf(action.data.text) > -1;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts
        });
      }

    case SELECT_CATEGORY_SUCCESS:
      {
        if (action.id == 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            products: [...state.originProducts]
          });
        } else if (action.id == -1) {
          const discountedProduct = state.originProducts.filter(v => {
            return v.Discount !== null;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            products: discountedProduct
          });
        }

        const filteredProducts = state.originProducts.filter(r => r.Category.id == action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/payment.js":
/*!*****************************!*\
  !*** ./reducers/payment.js ***!
  \*****************************/
/*! exports provided: PAYMENT_REQUEST, PAYMENT_SUCCESS, PAYMENT_FAILURE, LOAD_PAYMENT_HISTORY_REQUEST, LOAD_PAYMENT_HISTORY_SUCCESS, LOAD_PAYMENT_HISTORY_FAILURE, CLIENT_HISTORY_REMOVE_REQUEST, CLIENT_HISTORY_REMOVE_SUCCESS, CLIENT_HISTORY_REMOVE_FAILURE, PAYMENT_HISTORY_REMOVE_REQUEST, PAYMENT_HISTORY_REMOVE_SUCCESS, PAYMENT_HISTORY_REMOVE_FAILURE, RATING_REQUEST, RATING_SUCCESS, RATING_FAILURE, SEARCH_HISTORY_REQUEST, SEARCH_HISTORY_SUCCESS, SEARCH_HISTORY_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_REQUEST", function() { return PAYMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_SUCCESS", function() { return PAYMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_FAILURE", function() { return PAYMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PAYMENT_HISTORY_REQUEST", function() { return LOAD_PAYMENT_HISTORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PAYMENT_HISTORY_SUCCESS", function() { return LOAD_PAYMENT_HISTORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_PAYMENT_HISTORY_FAILURE", function() { return LOAD_PAYMENT_HISTORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_HISTORY_REMOVE_REQUEST", function() { return CLIENT_HISTORY_REMOVE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_HISTORY_REMOVE_SUCCESS", function() { return CLIENT_HISTORY_REMOVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_HISTORY_REMOVE_FAILURE", function() { return CLIENT_HISTORY_REMOVE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_HISTORY_REMOVE_REQUEST", function() { return PAYMENT_HISTORY_REMOVE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_HISTORY_REMOVE_SUCCESS", function() { return PAYMENT_HISTORY_REMOVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_HISTORY_REMOVE_FAILURE", function() { return PAYMENT_HISTORY_REMOVE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_REQUEST", function() { return RATING_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_SUCCESS", function() { return RATING_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATING_FAILURE", function() { return RATING_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HISTORY_REQUEST", function() { return SEARCH_HISTORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HISTORY_SUCCESS", function() { return SEARCH_HISTORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_HISTORY_FAILURE", function() { return SEARCH_HISTORY_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isPaying: false,
  data: [],
  payingError: null,
  history: [],
  isLoadingHistory: false,
  loadingError: null,
  removingHistory: false,
  removingHistoryError: null,
  clientHistoryRemoving: false,
  clientHistoryRemovingError: null,
  isSeachingHistory: false
};
const PAYMENT_REQUEST = "PAYMENT_REQUEST";
const PAYMENT_SUCCESS = "PAYMENT_SUCCESS";
const PAYMENT_FAILURE = "PAYMENT_FAILURE";
const LOAD_PAYMENT_HISTORY_REQUEST = "LOAD_PAYMENT_HISTORY_REQUEST";
const LOAD_PAYMENT_HISTORY_SUCCESS = "LOAD_PAYMENT_HISTORY_SUCCESS";
const LOAD_PAYMENT_HISTORY_FAILURE = "LOAD_PAYMENT_HISTORY_FAILURE";
const CLIENT_HISTORY_REMOVE_REQUEST = "CLIENT_HISTORY_REMOVE_REQUEST";
const CLIENT_HISTORY_REMOVE_SUCCESS = "CLIENT_HISTORY_REMOVE_SUCCESS";
const CLIENT_HISTORY_REMOVE_FAILURE = "CLIENT_HISTORY_REMOVE_FAILURE";
const PAYMENT_HISTORY_REMOVE_REQUEST = "PAYMENT_HISTORY_REMOVE_REQUEST";
const PAYMENT_HISTORY_REMOVE_SUCCESS = "PAYMENT_HISTORY_REMOVE_SUCCESS";
const PAYMENT_HISTORY_REMOVE_FAILURE = "PAYMENT_HISTORY_REMOVE_FAILURE";
const RATING_REQUEST = "RATING_REQUEST";
const RATING_SUCCESS = "RATING_SUCCESS";
const RATING_FAILURE = "RATING_FAILURE";
const SEARCH_HISTORY_REQUEST = "SEARCH_HISTORY_REQUEST";
const SEARCH_HISTORY_SUCCESS = "SEARCH_HISTORY_SUCCESS";
const SEARCH_HISTORY_FAILURE = "SEARCH_HISTORY_FAILURE";
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, statem), {}, {
          isPaying: true
        });
      }

    case PAYMENT_SUCCESS:
      {
        // dispatch({ type: CLEAR_CART_REQUEST });
        return _objectSpread(_objectSpread({}, state), {}, {
          isPaying: false
        });
      }

    case PAYMENT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isPaying: false,
          payingError: action.error
        });
      }

    case LOAD_PAYMENT_HISTORY_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingHistory: true
        });
      }

    case LOAD_PAYMENT_HISTORY_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          history: [...action.data],
          isLoadingHistory: false
        });
      }

    case LOAD_PAYMENT_HISTORY_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingHistory: false,
          loadingError: action.error
        });
      }

    case PAYMENT_HISTORY_REMOVE_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          removingHistory: true
        });
      }

    case PAYMENT_HISTORY_REMOVE_SUCCESS:
      {
        const index = state.history.findIndex(v => v.id === action.data.id);
        const history = state.history;
        const payment = history[index];
        payment.status = action.data.status;
        return _objectSpread(_objectSpread({}, state), {}, {
          history,
          removingHistory: false
        });
      }

    case PAYMENT_HISTORY_REMOVE_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          removingHistory: false
        });
      }

    case RATING_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case RATING_SUCCESS:
      {
        const index = state.history.findIndex(v => v.id === action.data.PaymentId);
        const log = state.history[index];
        let rating = action.data.rate;
        const history = [...state.history];
        history[index] = _objectSpread(_objectSpread({}, log), {}, {
          Rating: {
            rate: rating
          }
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          history
        });
      }

    case RATING_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case SEARCH_HISTORY_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSeachingHistory: true
        });
      }

    case SEARCH_HISTORY_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          history: action.data,
          isSeachingHistory: false
        });
      }

    case SEARCH_HISTORY_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSeachingHistory: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/shop.js":
/*!**************************!*\
  !*** ./reducers/shop.js ***!
  \**************************/
/*! exports provided: ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAILURE, SELECT_PRODUCT_REQUEST, SELECT_PRODUCT_SUCCESS, SELECT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CHECK_PRODUCT_SUCCESS, CHECK_ALL_PRODUCTS_SUCCESS, DISCOUNT_PRODUCT_REQUEST, DISCOUNT_PRODUCT_SUCCESS, DISCOUNT_PRODUCT_FAILURE, DELETE_DISCOUNT_REQUEST, DELETE_DISCOUNT_SUCCESS, DELETE_DISCOUNT_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, CATEGORY_FILTERED_SUCCESS, LOAD_SHOPLIST_REQUEST, LOAD_SHOPLIST_SUCCESS, LOAD_SHOPLIST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_REQUEST", function() { return ADD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_SUCCESS", function() { return ADD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_FAILURE", function() { return ADD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_REQUEST", function() { return ADMIN_PRODUCTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_SUCCESS", function() { return ADMIN_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_FAILURE", function() { return ADMIN_PRODUCTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_REQUEST", function() { return SELECT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_SUCCESS", function() { return SELECT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_FAILURE", function() { return SELECT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_REQUEST", function() { return EDIT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_SUCCESS", function() { return EDIT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_FAILURE", function() { return EDIT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_REQUEST", function() { return DELETE_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_SUCCESS", function() { return DELETE_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_FAILURE", function() { return DELETE_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_PRODUCT_SUCCESS", function() { return CHECK_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_ALL_PRODUCTS_SUCCESS", function() { return CHECK_ALL_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_REQUEST", function() { return DISCOUNT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_SUCCESS", function() { return DISCOUNT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_FAILURE", function() { return DISCOUNT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_REQUEST", function() { return DELETE_DISCOUNT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_SUCCESS", function() { return DELETE_DISCOUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_FAILURE", function() { return DELETE_DISCOUNT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_REQUEST", function() { return ADD_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_SUCCESS", function() { return ADD_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_FAILURE", function() { return ADD_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_REQUEST", function() { return EDIT_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_SUCCESS", function() { return EDIT_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_FAILURE", function() { return EDIT_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_REQUEST", function() { return DELETE_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_SUCCESS", function() { return DELETE_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_FAILURE", function() { return DELETE_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_FILTERED_SUCCESS", function() { return CATEGORY_FILTERED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_REQUEST", function() { return LOAD_SHOPLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_SUCCESS", function() { return LOAD_SHOPLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_FAILURE", function() { return LOAD_SHOPLIST_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  shop: null,
  products: [],
  originProducts: [],
  categories: [],
  product: null,
  isAddingFiles: false,
  isLoadingProducts: false,
  isSelectingProduct: false,
  selectingProductError: null,
  isLoadingShopList: false,
  shopList: [],
  loadingShopListError: null,
  isAddingShop: false
};
const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
const ADMIN_PRODUCTS_REQUEST = "ADMIN_PRODUCTS_REQUEST";
const ADMIN_PRODUCTS_SUCCESS = "ADMIN_PRODUCTS_SUCCESS";
const ADMIN_PRODUCTS_FAILURE = "ADMIN_PRODUCTS_FAILURE";
const SELECT_PRODUCT_REQUEST = "SELECT_PRODUCT_REQUEST";
const SELECT_PRODUCT_SUCCESS = "SELECT_PRODUCT_SUCCESS";
const SELECT_PRODUCT_FAILURE = "SELECT_PRODUCT_FAILURE";
const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
const EDIT_PRODUCT_FAILURE = "EDIT_PRODUCT_FAILURE";
const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";
const CHECK_PRODUCT_SUCCESS = "CHECK_PRODUCT_SUCCESS";
const CHECK_ALL_PRODUCTS_SUCCESS = "CHECK_ALL_PRODUCTS_SUCCESS";
const DISCOUNT_PRODUCT_REQUEST = "DISCOUNT_PRODUCT_REQUEST";
const DISCOUNT_PRODUCT_SUCCESS = "DISCOUNT_PRODUCT_SUCCESS";
const DISCOUNT_PRODUCT_FAILURE = "DISCOUNT_PRODUCT_FAILURE";
const DELETE_DISCOUNT_REQUEST = "DELETE_DISCOUNT_REQUEST";
const DELETE_DISCOUNT_SUCCESS = "DELETE_DISCOUNT_SUCCESS";
const DELETE_DISCOUNT_FAILURE = "DELETE_DISCOUNT_FAILURE";
const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";
const EDIT_CATEGORY_REQUEST = "EDIT_CATEGORY_REQUEST";
const EDIT_CATEGORY_SUCCESS = "EDIT_CATEGORY_SUCCESS";
const EDIT_CATEGORY_FAILURE = "EDIT_CATEGORY_FAILURE";
const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";
const CATEGORY_FILTERED_SUCCESS = "CATEGORY_FILTERED_SUCCESS";
const LOAD_SHOPLIST_REQUEST = "LOAD_SHOPLIST_REQUEST";
const LOAD_SHOPLIST_SUCCESS = "LOAD_SHOPLIST_SUCCESS";
const LOAD_SHOPLIST_FAILURE = "LOAD_SHOPLIST_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingFiles: true
        });
      }

    case ADD_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          products: [action.data, ...state.products],
          originProducts: [action.data, ...state.products],
          isAddingFiles: false
        });
      }

    case ADD_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingFiles: false
        });
      }

    case ADMIN_PRODUCTS_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: true
        });
      }

    case ADMIN_PRODUCTS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: false,
          products: action.data[0],
          originProducts: action.data[0],
          categories: action.data[1]
        });
      }

    case ADMIN_PRODUCTS_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: false
        });
      }

    case SELECT_PRODUCT_REQUEST:
      {
        return _objectSpread({
          isSelectingProduct: true
        }, state);
      }

    case SELECT_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({
          isSelectingProduct: false
        }, state), {}, {
          product: action.data
        });
      }

    case SELECT_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({
          isSelectingProduct: false
        }, state), {}, {
          selectingProductError: action.error
        });
      }

    case EDIT_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case EDIT_PRODUCT_SUCCESS:
      {
        console.log(action.data);
        const index = state.products.findIndex(v => v.id === action.data.id);
        const products = [...state.products];
        products[index] = action.data;
        return _objectSpread(_objectSpread({}, state), {}, {
          products,
          originProducts: products
        });
      }

    case EDIT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_PRODUCT_SUCCESS:
      {
        const products = state.products.filter(v => v.id != action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          products,
          originProducts: products
        });
      }

    case DELETE_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_DISCOUNT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_DISCOUNT_SUCCESS:
      {
        console.log(action.data);
        const filteredProducts = action.data[1] == 0 ? action.data[0] : action.data[0].filter(v => v.Category.id == action.data[1]);
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts,
          originProducts: action.data[0]
        });
      }

    case DELETE_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case CHECK_PRODUCT_SUCCESS:
      {
        const index = state.products.findIndex(v => v.id === action.id);
        const product = state.products[index];
        let checked = product.checked;
        checked = checked ? false : true;
        const products = [...state.products];
        products[index] = _objectSpread(_objectSpread({}, product), {}, {
          checked
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case CHECK_ALL_PRODUCTS_SUCCESS:
      {
        const products = state.products;
        products.map(v => v.checked = action.checked);
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case DISCOUNT_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DISCOUNT_PRODUCT_SUCCESS:
      {
        const filteredProducts = action.data[1] !== 0 ? action.data[0].filter(v => v.id == action.data[1]) : action.data[0];
        console.log(action.data[0]);
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts,
          originProducts: action.data[0]
        });
      }

    case DISCOUNT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case ADD_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case ADD_CATEGORY_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          categories: [...state.categories, action.data]
        });
      }

    case ADD_CATEGORY_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case EDIT_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case EDIT_CATEGORY_SUCCESS:
      {
        const index = state.categories.findIndex(v => v.id == action.data.id);
        const categories = [...state.categories];
        categories[index] = action.data;
        return _objectSpread(_objectSpread({}, state), {}, {
          categories
        });
      }

    case EDIT_CATEGORY_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_CATEGORY_SUCCESS:
      {
        const filteredCategories = state.categories.filter(v => v.id !== action.data.id);
        const products = state.originProducts.filter(v => v.Category.id !== action.data.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          categories: filteredCategories,
          products,
          originProducts: products
        });
      }

    case DISCOUNT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case CATEGORY_FILTERED_SUCCESS:
      {
        if (action.id == 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            products: state.originProducts
          });
        } else if (action.id == -1) {
          const discountedProduct = state.originProducts.filter(v => v.Discount !== null);
          return _objectSpread(_objectSpread({}, state), {}, {
            products: discountedProduct
          });
        } else {
          const filteredProducts = state.originProducts.filter(v => v.Category.id == action.id);
          return _objectSpread(_objectSpread({}, state), {}, {
            products: filteredProducts
          });
        }
      }

    case LOAD_SHOPLIST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingShopList: true
        });
      }

    case LOAD_SHOPLIST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          shopList: action.data,
          isLoadingShopList: false
        });
      }

    case LOAD_SHOPLIST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingShopList: false,
          lodingShopListError: action.error
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, PASSWORD_CONFIRM_REQUEST, PASSWORD_CONFIRM_SUCCESS, PASSWORD_CONFIRM_FAILURE, PASSWORD_CHANGE_REQUEST, PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILURE, ADD_SHOP_REQUEST, ADD_SHOP_SUCCESS, ADD_SHOP_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CONFIRM_REQUEST", function() { return PASSWORD_CONFIRM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CONFIRM_SUCCESS", function() { return PASSWORD_CONFIRM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CONFIRM_FAILURE", function() { return PASSWORD_CONFIRM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CHANGE_REQUEST", function() { return PASSWORD_CHANGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CHANGE_SUCCESS", function() { return PASSWORD_CHANGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSWORD_CHANGE_FAILURE", function() { return PASSWORD_CHANGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHOP_REQUEST", function() { return ADD_SHOP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHOP_SUCCESS", function() { return ADD_SHOP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHOP_FAILURE", function() { return ADD_SHOP_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isSigningUp: false,
  signUpSuccess: false,
  signUpError: null,
  isLoggedIn: false,
  isLoggingIn: false,
  loginError: null,
  isLoggingOut: false,
  logoutError: null,
  session: null,
  isLoadingUser: false,
  loadingUserError: null,
  changingPassword: false,
  passwordChangeError: null,
  isAddingShop: false,
  addShopError: null
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const SIGN_UP_REQUEST = "SIGN_IN_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_IN_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const PASSWORD_CONFIRM_REQUEST = "PASSWORD_CONFIRM_REQUEST";
const PASSWORD_CONFIRM_SUCCESS = "PASSWORD_CONFIRM_SUCCESS";
const PASSWORD_CONFIRM_FAILURE = "PASSWORD_CONFIRM_FAILURE";
const PASSWORD_CHANGE_REQUEST = "PASSWORD_CHANGE_REQUEST";
const PASSWORD_CHANGE_SUCCESS = "PASSWORD_CHANGE_SUCCESS";
const PASSWORD_CHANGE_FAILURE = "PASSWORD_CHANGE_FAILURE";
const ADD_SHOP_REQUEST = "ADD_SHOP_REQUEST";
const ADD_SHOP_SUCCESS = "ADD_SHOP_SUCCESS";
const ADD_SHOP_FAILURE = "ADD_SHOP_FAILURE";
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        break;

      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.signUpSuccess = true;
        break;

      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.signUpFailure = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.isLoadingUser = true;
        break;

      case LOAD_USER_SUCCESS:
        draft.isLoadingUser = false;
        draft.session = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.isLoadingUser = false;
        draft.loadingUserError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        break;

      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.session = action.data.fullUser;
        draft.loginError = null;
        break;

      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.loginError = action.error;
        break;

      case LOG_OUT_SUCCESS:
        draft.session = null;
        draft.isLoggedIn = false;
        draft.loginError = null;

      case PASSWORD_CHANGE_REQUEST:
        draft.changingPassword = true;

      case PASSWORD_CHANGE_SUCCESS:
        draft.changingPassword = false;

      case PASSWORD_CHANGE_FAILURE:
        draft.changingPassword = false;
        draft.passwordChangeError = action.error;

      default:
        state;
        break;

      case ADD_SHOP_REQUEST:
        draft.isAddingShop = true;
        break;

      case ADD_SHOP_SUCCESS:
        draft.isAddingShop = false;
        draft.session.Shops = [action.data, ...draft.session.Shops];
        break;

      case ADD_SHOP_FAILURE:
        draft.isAddingShop = false;
        draft.addShopError = action.error;
        break;
    }
  });
});

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop */ "./sagas/shop.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./sagas/menu.js");
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment */ "./sagas/payment.js");






axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_shop__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_menu__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_payment__WEBPACK_IMPORTED_MODULE_5__["default"])]);
}

/* harmony default export */ __webpack_exports__["default"] = (rootSaga);

/***/ }),

/***/ "./sagas/menu.js":
/*!***********************!*\
  !*** ./sagas/menu.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productsSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/menu */ "./reducers/menu.js");




function loadProductApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/menu`, {
    data
  });
}

function* loadProducts({
  data
}) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductApi, data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_PRODUCTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_PRODUCTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadProducts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_PRODUCTS_REQUEST"], loadProducts);
}

function* productsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProducts)]);
}

/***/ }),

/***/ "./sagas/payment.js":
/*!**************************!*\
  !*** ./sagas/payment.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/payment */ "./reducers/payment.js");




function paymentHistoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/payments/load', {
    id: data.id,
    ShopId: data.ShopId,
    division: data.division
  });
}

function* paymentHistory(data) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(paymentHistoryAPI, data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["LOAD_PAYMENT_HISTORY_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["LOAD_PAYMENT_HISTORY_FAILURE"],
      error: e
    });
  }
}

function* watchPaymentHistory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_payment__WEBPACK_IMPORTED_MODULE_2__["LOAD_PAYMENT_HISTORY_REQUEST"], paymentHistory);
}

function ratingAPI({
  data
}) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/payments/rating', {
    PaymentsId: data.PaymentsId,
    UserId: data.UserId,
    ProductId: data.ProductId,
    rate: data.rate
  });
}

function* rating(data) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(ratingAPI, data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["RATING_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["RATING_FAILURE"],
      error: e
    });
  }
}

function* watchRating() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_payment__WEBPACK_IMPORTED_MODULE_2__["RATING_REQUEST"], rating);
}

function searchHistoryAPI({
  data
}) {
  console.log(data);

  if (data.division == true) {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/payments/search/shop', {
      data
    });
  } else {
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/payments/search/user', {
      data
    });
  }
}

function* searchHistory(data) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(searchHistoryAPI, data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HISTORY_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HISTORY_FAILURE"]
    });
  }
}

function* watchSearchHistory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_payment__WEBPACK_IMPORTED_MODULE_2__["SEARCH_HISTORY_REQUEST"], searchHistory);
}

function cancelPaymentAPI({
  id,
  UserId,
  division,
  imp_uid,
  amount
}) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/payments/cancel', {
    id,
    UserId,
    division,
    imp_uid,
    amount
  });
}

function* cancelPayment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(cancelPaymentAPI, action.data);
    console.log(result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_HISTORY_REMOVE_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_payment__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_HISTORY_REMOVE_FAILURE"],
      error: err
    });
  }
}

function* watchCancelPayment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_payment__WEBPACK_IMPORTED_MODULE_2__["PAYMENT_HISTORY_REMOVE_REQUEST"], cancelPayment);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchPaymentHistory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRating), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchHistory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchCancelPayment)]);
}

/***/ }),

/***/ "./sagas/shop.js":
/*!***********************!*\
  !*** ./sagas/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productsSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/shop */ "./reducers/shop.js");




function addProductApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/add", data);
}

function* addProduct(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addProductApi, action.formData);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_PRODUCT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_PRODUCT_FAILURE"],
      error: e
    });
  }
}

function* watchAddProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_PRODUCT_REQUEST"], addProduct);
}

function loadProductsApi(ShopId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/load", {
    ShopId
  });
}

function* loadProducts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadProductsApi, action.ShopId);
    console.log(result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADMIN_PRODUCTS_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADMIN_PRODUCTS_FAILURE"],
      error: e
    });
  }
}

function* watchLoadProducts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADMIN_PRODUCTS_REQUEST"], loadProducts);
}

function deleteProductAPI(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/delete", {
    id
  });
}

function* deleteProduct(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deleteProductAPI, action.id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_PRODUCT_SUCCESS"],
      data: action.id
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_PRODUCT_FAILURE"],
      error: e
    });
  }
}

function* watchDeleteProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_PRODUCT_REQUEST"], deleteProduct);
}

function selectProductAPI(ProductId) {
  console.log({
    ProductId
  });
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/select", {
    ProductId
  });
}

function* selectProduct(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(selectProductAPI, action.ProductId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["SELECT_PRODUCT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["SELECT_PRODUCT_FAILURE"],
      error: e
    });
  }
}

function* watchSelectProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["SELECT_PRODUCT_REQUEST"], selectProduct);
}

function editProdudctAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/edit", data);
}

function* editProduct(action) {
  try {
    console.log("result");
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(editProdudctAPI, action.formData);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_PRODUCT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_PRODUCT_FAILURE"],
      error: e
    });
  }
}

function* watchEditProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_PRODUCT_REQUEST"], editProduct);
}

function discountProductAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/discount", data);
}

function* discountProduct(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(discountProductAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DISCOUNT_PRODUCT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DISCOUNT_PRODUCT_FAILURE"],
      error: e
    });
  }
}

function* watchDiscountProduct() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DISCOUNT_PRODUCT_REQUEST"], discountProduct);
}

function addCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/category/add", data);
}

function* addCategory(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCategoryAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_FAILURE"],
      error: e
    });
  }
}

function* watchAddCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["ADD_CATEGORY_REQUEST"], addCategory);
}

function editCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/category/update", data);
}

function* editCategory(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(editCategoryAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_CATEGORY_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_CATEGORY_FAILURE"],
      error: e
    });
  }
}

function* watchEditCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["EDIT_CATEGORY_REQUEST"], editCategory);
}

function deleteCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/category/delete", data);
}

function* deleteCategory(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deleteCategoryAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_CATEGORY_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_CATEGORY_FAILURE"],
      error: e
    });
  }
}

function* watchDeleteCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_CATEGORY_REQUEST"], deleteCategory);
}

function deleteDiscountAPI({
  ProductIds,
  ShopId,
  CategoryId
}) {
  console.log(ProductIds, ShopId, CategoryId);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/products/discount/delete", {
    ProductIds,
    ShopId,
    CategoryId
  });
}

function* deleteDiscount(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(deleteDiscountAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_DISCOUNT_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_DISCOUNT_FAILURE"],
      error: e
    });
  }
}

function* watchDeleteDiscount() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["DELETE_DISCOUNT_REQUEST"], deleteDiscount);
}

function loadShopListAPI({
  ShopId
}) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/shop/list", {
    ShopId
  });
}

function* loadShopList(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])({
      loadShopListAPI,
      ShopId: action.ShopId
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["LOAD_SHOPLIST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["LOAD_SHOPLIST_FAILURE"]
    });
  }
}

function* watchLoadShopList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_2__["LOAD_SHOPLIST_REQUEST"], loadShopList);
}

function* productsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProducts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSelectProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchEditProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDiscountProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchEditCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteDiscount), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadShopList) // fork(watchAddShop),
  ]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




function loginApi(loginData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/login", loginData);
}

function* login(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: e.response.data
    });
  }
}

function* watchLogin() {
  console.log("Try logging in");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);
}

function signUpApi(signUpData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/signup", signUpData);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: e
    });
  }
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function loadUserApi() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user");
}

function* loadUser() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserApi);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.log(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: e
    });
  }
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function changePasswordApi({
  id,
  password
}) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/password/change", {
    id,
    password
  });
}

function* passwordChange(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changePasswordApi, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["PASSWORD_CHANGE_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["PASSWORD_CHANGE_FAILURE"],
      error: e
    });
  }
}

function* watchPasswordChange() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["PASSWORD_CHANGE_REQUEST"], passwordChange);
}

function addShopAPI(data) {
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/shop/add", data);
}

function* addShop(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addShopAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_SHOP_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_SHOP_FAILURE"],
      error: err
    });
  }
}

function* watchAddShop() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_SHOP_REQUEST"], addShop);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchPasswordChange), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddShop)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/lib/storage/session */ "redux-persist/lib/storage/session");
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_6__);







const {
  persistStore
} = __webpack_require__(/*! redux-persist */ "redux-persist");



const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware];
  const enhencer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));

  const rootStore = reducer => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, {}, enhencer);

  const isServer = true;

  if (isServer) {
    const store = rootStore(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"]);
    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
    return store;
  } else {
    const {
      persistReducer
    } = __webpack_require__(/*! redux-persist */ "redux-persist");

    const persistConfig = {
      key: "nextjs",
      whitelist: ["user"],
      storage: (redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_6___default()),
      transforms: []
    };
    const persistedReducer = persistReducer(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_5__["default"]);
    const store = rootStore(persistedReducer);
    store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
    store.__persistor = persistStore(store);
    return store;
  }
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/session");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvQ2hhbmdlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmVyYWx1aS9DdXN0b21Ib29rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9DZW50cmFsQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmliYXJMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaG9wLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wYXltZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkNoYW5nZVBhc3N3b3JkIiwic2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJlc2VudFBhc3N3b3JkIiwib25DaGFuZ2VQcmVzZW50UGFzc3dvcmQiLCJzZXRQcmVzZW50UGFzc3dvcmQiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInNldENoYW5nZVBhc3N3b3JkQ2hlY2siLCJzZXNzaW9uIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwib25GaW5pc2giLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCIsImRhdGEiLCJpZCIsInByZXYiLCJ2ZXJ0aWNhbEFsaWduIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwicmVnZXgiLCJSZWdFeHAiLCJtYXRjaCIsInJlc3VsdCIsImF4aW9zIiwicG9zdCIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwicGF0dGVybiIsImdldEZpZWxkVmFsdWUiLCJ3aWR0aCIsIkxvZ2luIiwic2V0VG9nZ2xlTG9naW4iLCJ1c2VybmFtZSIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImxvZ2luRXJyb3IiLCJ1c2VFZmZlY3QiLCJlcnJvciIsIm9uQ2xpY2tTaWduVXAiLCJSb3V0ZXIiLCJwdXNoIiwiTE9HX0lOX1JFUVVFU1QiLCJTZWFyY2hCYXIiLCJzZXRUb2dnbGVTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwib25DaGFuZ2VUZXh0IiwiZSIsInRhcmdldCIsIm9uU2VhcmNoIiwiU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVyIiwic2V0dGVyIiwidXNlQ2hlY2tlZCIsIkNlbnRyYWxBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmliYXJMYXlvdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2dnbGVMb2dpbiIsInRvZ2dsZVNlYXJjaCIsInRvZ2dsZUNoYW5nZVBhc3N3b3JkIiwic2hvdyIsInNldFNob3ciLCJoaWRlSGFuZGxlciIsInNob3dIYW5kbGVyIiwib25Ub2dnbGVDaGFuZ2VQYXNzd29yZCIsIm9uQ2xpY2tMb2dvdXQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJvblRvZ2dsZUxvZ2luIiwib25Ub2dnbGVTZWFyY2giLCJvbkNsaWNrUGF5bWVudHMiLCJvbkNsaWNrQWRtaW4iLCJvcmlnaW5Qcm9kdWN0cyIsIm1lbnUiLCJtYXJnaW5Ub3AiLCJiYWNrR3JvdW5kQ29sb3IiLCJiYWNrIiwiZmxvYXQiLCJsZW5ndGgiLCJ2aXNpYmlsaXR5IiwibmFtZSIsImRpdmlzaW9uIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiZXJyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwic3RvcmUiLCJ1c2VTdG9yZSIsIl9fcGVyc2lzdG9yIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJpc0xvYWRpbmdTaG9wTGlzdCIsImxvYWRpbmdTaG9wTGlzdEVycm9yIiwic2hvcExpc3QiLCJvcmlnaW5hbFNob3BMaXN0IiwiaXNMb2FkaW5nVXNlckxpc3QiLCJsb2FkaW5nVXNlckxpc3RFcnJvciIsInVzZXJMaXN0Iiwib3JpZ2luYWxVc2VyTGlzdCIsImxvYWRFdmVudHNFcnJvciIsImlzTG9hZGluZ0V2ZW50cyIsInBhZ2VJbmZvIiwiTE9BRF9VU0VSTElTVF9SRVFVRVNUIiwiTE9BRF9VU0VSTElTVF9TVUNDRVNTIiwiTE9BRF9VU0VSTElTVF9GQUlMVVJFIiwiTE9BRF9TSE9QTElTVF9SRVFVRVNUIiwiTE9BRF9TSE9QTElTVF9TVUNDRVNTIiwiTE9BRF9TSE9QTElTVF9GQUlMVVJFIiwiREVMRVRFX1VTRVJfUkVRVUVTVCIsIkRFTEVURV9VU0VSX1NVQ0NFU1MiLCJERUxFVEVfVVNFUl9GQUlMVVJFIiwiTE9BRF9FVkVOVFNfUkVRVUVTVCIsIkxPQURfRVZFTlRTX1NVQ0NFU1MiLCJMT0FEX0VWRU5UU19GQUlMVVJFIiwiQUREX0VWRU5UX1JFUVVFU1QiLCJBRERfRVZFTlRfU1VDQ0VTUyIsIkFERF9FVkVOVF9GQUlMVVJFIiwiRURJVF9FVkVOVF9SRVFVRVNUIiwiRURJVF9FVkVOVF9TVUNDRVNTIiwiRURJVF9FVkVOVF9GQUlMVVJFIiwiREVMRVRFX0VWRU5UX1JFUVVFU1QiLCJERUxFVEVfRVZFTlRfU1VDQ0VTUyIsIkRFTEVURV9FVkVOVF9GQUlMVVJFIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjYXJ0IiwiaXNMb2FkaW5nQ2FydCIsImlzUmVtb3ZlaW5nQ2FydCIsIlNob3BJZCIsInVuZGVmaW5lZCIsIlRhYmxlSWQiLCJMT0FEX0NBUlRfUkVRVUVTVCIsIkxPQURfQ0FSVF9TVUNDRVNTIiwiTE9BRF9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfSVRFTV9SRVFVRVNUIiwiUkVNT1ZFX0lURU1fU1VDQ0VTUyIsIlJFTU9WRV9JVEVNX0ZBSUxVUkUiLCJBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUIiwiU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVCIsIkFERF9DQVJUX0lURU1fUkVRVUVTVCIsIlJFTU9WRV9DQVJUX0lURU1fUkVRVUVTVCIsIkNMRUFSX0NBUlRfUkVRVUVTVCIsIkdFVF9TSE9QX1RBQkxFX0lEIiwiaXRlbXMiLCJmaWx0ZXIiLCJuZXdQcm9kdWN0IiwicHJvZHVjdCIsInByb2R1Y3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJmb3JtZXJQcm9kdWN0IiwiZmluYWxQcm9kdWN0IiwicXVhbnRpdHkiLCJjYXJ0TGlzdCIsImluZGV4IiwiU0VUX0NMSUVOVF9TVEFURSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiSFlEUkFURSIsInBheWxvYWQiLCJhZG1pbiIsInNob3AiLCJwYXltZW50IiwicHJvZHVjdHMiLCJuYXZpU2l6ZSIsImlzQWRkaW5nUHJvZHVjdCIsImNhdGVnb3JpZXMiLCJMT0FEX1BST0RVQ1RTX1JFUVVFU1QiLCJMT0FEX1BST0RVQ1RTX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RTX0ZBSUxVUkUiLCJBRERfUVVBTlRJVFlfUkVRVUVTVCIsIkFERF9RVUFOVElUWV9TVUNDRVNTIiwiQUREX1FVQU5USVRZX0ZBSUxVUkUiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCIsIlNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTIiwiU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUiLCJBRERfUFJPRFVDVF9SRVFVRVNUIiwiQUREX1BST0RVQ1RfU1VDQ0VTUyIsIkFERF9QUk9EVUNUX0ZBSUxVUkUiLCJJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUIiwiR0VUX05BVklCQVJfU0laRSIsIlNFTEVDVF9DQVRFR09SWV9TVUNDRVNTIiwibWVudXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwidGl0bGUiLCJpbmRleE9mIiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCIsInIiLCJDYXRlZ29yeSIsImlzUGF5aW5nIiwicGF5aW5nRXJyb3IiLCJoaXN0b3J5IiwiaXNMb2FkaW5nSGlzdG9yeSIsImxvYWRpbmdFcnJvciIsInJlbW92aW5nSGlzdG9yeSIsInJlbW92aW5nSGlzdG9yeUVycm9yIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nRXJyb3IiLCJpc1NlYWNoaW5nSGlzdG9yeSIsIlBBWU1FTlRfUkVRVUVTVCIsIlBBWU1FTlRfU1VDQ0VTUyIsIlBBWU1FTlRfRkFJTFVSRSIsIkxPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QiLCJMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTIiwiTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSIsIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUIiwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MiLCJDTElFTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlJBVElOR19SRVFVRVNUIiwiUkFUSU5HX1NVQ0NFU1MiLCJSQVRJTkdfRkFJTFVSRSIsIlNFQVJDSF9ISVNUT1JZX1JFUVVFU1QiLCJTRUFSQ0hfSElTVE9SWV9TVUNDRVNTIiwiU0VBUkNIX0hJU1RPUllfRkFJTFVSRSIsInN0YXRlbSIsInN0YXR1cyIsIlBheW1lbnRJZCIsInJhdGluZyIsInJhdGUiLCJSYXRpbmciLCJpc0FkZGluZ0ZpbGVzIiwiaXNMb2FkaW5nUHJvZHVjdHMiLCJpc1NlbGVjdGluZ1Byb2R1Y3QiLCJzZWxlY3RpbmdQcm9kdWN0RXJyb3IiLCJpc0FkZGluZ1Nob3AiLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyIsIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJFRElUX1BST0RVQ1RfUkVRVUVTVCIsIkVESVRfUFJPRFVDVF9TVUNDRVNTIiwiRURJVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyIsIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkUiLCJDSEVDS19QUk9EVUNUX1NVQ0NFU1MiLCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCIsIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUIiwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MiLCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRSIsIkFERF9DQVRFR09SWV9SRVFVRVNUIiwiQUREX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJjaGVja2VkIiwibWFwIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwibG9kaW5nU2hvcExpc3RFcnJvciIsImlzU2lnbmluZ1VwIiwic2lnblVwU3VjY2VzcyIsInNpZ25VcEVycm9yIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dpbmdPdXQiLCJsb2dvdXRFcnJvciIsImlzTG9hZGluZ1VzZXIiLCJsb2FkaW5nVXNlckVycm9yIiwiY2hhbmdpbmdQYXNzd29yZCIsInBhc3N3b3JkQ2hhbmdlRXJyb3IiLCJhZGRTaG9wRXJyb3IiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUIiwiUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTIiwiUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFIiwiUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MiLCJQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSIsIkFERF9TSE9QX1JFUVVFU1QiLCJBRERfU0hPUF9TVUNDRVNTIiwiQUREX1NIT1BfRkFJTFVSRSIsInNpZ25VcEZhaWx1cmUiLCJmdWxsVXNlciIsIlNob3BzIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJmb3JrIiwibG9hZFByb2R1Y3RBcGkiLCJsb2FkUHJvZHVjdHMiLCJjYWxsIiwicHV0Iiwid2F0Y2hMb2FkUHJvZHVjdHMiLCJ0YWtlTGF0ZXN0IiwicHJvZHVjdHNTYWdhIiwicGF5bWVudEhpc3RvcnlBUEkiLCJwYXltZW50SGlzdG9yeSIsIndhdGNoUGF5bWVudEhpc3RvcnkiLCJyYXRpbmdBUEkiLCJQYXltZW50c0lkIiwiVXNlcklkIiwiUHJvZHVjdElkIiwid2F0Y2hSYXRpbmciLCJzZWFyY2hIaXN0b3J5QVBJIiwic2VhcmNoSGlzdG9yeSIsIndhdGNoU2VhcmNoSGlzdG9yeSIsImNhbmNlbFBheW1lbnRBUEkiLCJpbXBfdWlkIiwiYW1vdW50IiwiY2FuY2VsUGF5bWVudCIsIndhdGNoQ2FuY2VsUGF5bWVudCIsInVzZXJTYWdhIiwiYWRkUHJvZHVjdEFwaSIsImFkZFByb2R1Y3QiLCJmb3JtRGF0YSIsIndhdGNoQWRkUHJvZHVjdCIsImxvYWRQcm9kdWN0c0FwaSIsImRlbGV0ZVByb2R1Y3RBUEkiLCJkZWxldGVQcm9kdWN0Iiwid2F0Y2hEZWxldGVQcm9kdWN0Iiwic2VsZWN0UHJvZHVjdEFQSSIsInNlbGVjdFByb2R1Y3QiLCJ3YXRjaFNlbGVjdFByb2R1Y3QiLCJlZGl0UHJvZHVkY3RBUEkiLCJlZGl0UHJvZHVjdCIsIndhdGNoRWRpdFByb2R1Y3QiLCJkaXNjb3VudFByb2R1Y3RBUEkiLCJkaXNjb3VudFByb2R1Y3QiLCJ3YXRjaERpc2NvdW50UHJvZHVjdCIsImFkZENhdGVnb3J5QVBJIiwiYWRkQ2F0ZWdvcnkiLCJ3YXRjaEFkZENhdGVnb3J5IiwiZWRpdENhdGVnb3J5QVBJIiwiZWRpdENhdGVnb3J5Iiwid2F0Y2hFZGl0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeUFQSSIsImRlbGV0ZUNhdGVnb3J5Iiwid2F0Y2hEZWxldGVDYXRlZ29yeSIsImRlbGV0ZURpc2NvdW50QVBJIiwiUHJvZHVjdElkcyIsIkNhdGVnb3J5SWQiLCJkZWxldGVEaXNjb3VudCIsIndhdGNoRGVsZXRlRGlzY291bnQiLCJsb2FkU2hvcExpc3RBUEkiLCJsb2FkU2hvcExpc3QiLCJ3YXRjaExvYWRTaG9wTGlzdCIsImxvZ2luQXBpIiwibG9naW5EYXRhIiwibG9naW4iLCJyZXNwb25zZSIsIndhdGNoTG9naW4iLCJ0YWtlRXZlcnkiLCJzaWduVXBBcGkiLCJzaWduVXBEYXRhIiwic2lnblVwIiwid2F0Y2hTaWduVXAiLCJsb2FkVXNlckFwaSIsImxvYWRVc2VyIiwid2F0Y2hMb2FkVXNlciIsImNoYW5nZVBhc3N3b3JkQXBpIiwicGFzc3dvcmRDaGFuZ2UiLCJ3YXRjaFBhc3N3b3JkQ2hhbmdlIiwiYWRkU2hvcEFQSSIsImFkZFNob3AiLCJ3YXRjaEFkZFNob3AiLCJwZXJzaXN0U3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGVuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJyb290U3RvcmUiLCJjcmVhdGVTdG9yZSIsImlzU2VydmVyIiwic2FnYVRhc2siLCJydW4iLCJwZXJzaXN0UmVkdWNlciIsInBlcnNpc3RDb25maWciLCJ3aGl0ZWxpc3QiLCJzdG9yYWdlIiwidHJhbnNmb3JtcyIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWlDO0FBQ3RELFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxRQUFNLENBQUNDLGVBQUQsRUFBa0JDLHVCQUFsQixFQUEyQ0Msa0JBQTNDLElBQWlFQyx1RUFBUSxFQUEvRTtBQUNBLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxnQkFBWCxFQUE2QkMsV0FBN0IsSUFBNENILHVFQUFRLEVBQTFEO0FBQ0EsUUFBTSxDQUFDSSxhQUFELEVBQWdCQyxxQkFBaEIsRUFBdUNDLHNCQUF2QyxJQUFpRU4sdUVBQVEsRUFBL0U7QUFFQSxRQUFNO0FBQUVPLFdBQUY7QUFBV0M7QUFBWCxNQUEwQkMsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQWxCLENBQTNDO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLE1BQU07QUFDakNsQixZQUFRLENBQUM7QUFDUG1CLFVBQUksRUFBRUMsc0VBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0pDLFVBQUUsRUFBRVYsT0FBTyxDQUFDVSxFQURSO0FBRUpoQjtBQUZJO0FBRkMsS0FBRCxDQUFSO0FBT0FQLDJCQUF1QixDQUFFd0IsSUFBRCxJQUFVLENBQUNBLElBQVosQ0FBdkI7QUFDQW5CLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUksZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNBRywwQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0QsR0FaMkIsRUFZekIsQ0FBQ0wsUUFBRCxFQUFXRyxhQUFYLENBWnlCLENBQTVCO0FBY0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssRUFBRTtBQUFFZSxxQkFBYSxFQUFFO0FBQWpCLE9BQWI7QUFBQSw2QkFDRSwrREFBQyx5Q0FBRDtBQUFNLGdCQUFRLEVBQUVQLFFBQWhCO0FBQUEsZ0NBQ0UsOERBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBSSxFQUFDLGlCQURQO0FBRUUseUJBQWUsRUFBQyxRQUZsQjtBQUdFLGVBQUssRUFBRSxDQUNMO0FBQ0VRLG9CQUFRLEVBQUUsSUFEWjtBQUVFQyxtQkFBTyxFQUFFO0FBRlgsV0FESyxFQUtMLE9BQU87QUFDTCxrQkFBTUMsU0FBTixDQUFnQkMsSUFBaEIsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLG9CQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXLHFCQUFYLENBQWQ7O0FBQ0Esa0JBQUlGLEtBQUssSUFBSUEsS0FBSyxDQUFDRyxLQUFOLENBQVlGLEtBQVosQ0FBYixFQUFpQztBQUMvQixzQkFBTUcsTUFBTSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLElBQU4sQ0FBVyx3QkFBWCxFQUFxQztBQUN4RGIsb0JBQUUsRUFBRVYsT0FBTyxDQUFDVSxFQUQ0QztBQUV4RGhCLDBCQUFRLEVBQUV1QjtBQUY4QyxpQkFBckMsQ0FBckI7O0FBSUEsb0JBQUksQ0FBQ0ksTUFBTSxDQUFDWixJQUFaLEVBQWtCO0FBQ2hCO0FBQ0EseUJBQU9lLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLHFCQUFmLENBQVA7QUFDRCxpQkFIRCxNQUdPO0FBQ0wseUJBQU9ELE9BQU8sQ0FBQ0UsT0FBUixFQUFQO0FBQ0Q7QUFDRixlQVhELE1BV087QUFDTCx1QkFBT0YsT0FBTyxDQUFDQyxNQUFSLENBQWUsbUJBQWYsQ0FBUDtBQUNEO0FBQ0Y7O0FBakJJLFdBQVAsQ0FMSyxDQUhUO0FBQUEsaUNBNkJFLDhEQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLGdCQUFJLEVBQUcsT0FEVDtBQUVFLGtCQUFNLEVBQUcsV0FGWDtBQUdFLGlCQUFLLEVBQUVuQyxlQUhUO0FBSUUsb0JBQVEsRUFBRUMsdUJBSlo7QUFLRSx1QkFBVyxFQUFDO0FBTGQ7QUE3QkYsVUFERixlQXNDRSw4REFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGVBQUssRUFBRSxDQUNMO0FBQ0VzQixvQkFBUSxFQUFFLElBRFo7QUFFRUMsbUJBQU8sRUFBRTtBQUZYLFdBREssRUFLTDtBQUNFYSxtQkFBTyxFQUFFLHFCQURYO0FBRUViLG1CQUFPLEVBQUU7QUFGWCxXQUxLLENBRlQ7QUFBQSxpQ0FhRSw4REFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDRSxrQkFBTSxFQUFHLFFBRFg7QUFFRSxnQkFBSSxFQUFHLE9BRlQ7QUFHRSxpQkFBSyxFQUFFcEIsUUFIVDtBQUlFLG9CQUFRLEVBQUVDLGdCQUpaO0FBS0UsdUJBQVcsRUFBQztBQUxkO0FBYkYsVUF0Q0YsZUEyREUsOERBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBSSxFQUFDLGVBRFA7QUFFRSxzQkFBWSxFQUFFLENBQUMsVUFBRCxDQUZoQjtBQUdFLGVBQUssRUFBRSxDQUNMO0FBQ0VrQixvQkFBUSxFQUFFLElBRFo7QUFFRUMsbUJBQU8sRUFBRTtBQUZYLFdBREssRUFLTCxDQUFDO0FBQUVjO0FBQUYsV0FBRCxNQUF3QjtBQUN0QmIscUJBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWM7QUFDckIsa0JBQUksQ0FBQ0EsS0FBRCxJQUFVVyxhQUFhLENBQUMsVUFBRCxDQUFiLEtBQThCWCxLQUE1QyxFQUFtRDtBQUNqRCx1QkFBT08sT0FBTyxDQUFDRSxPQUFSLEVBQVA7QUFDRDs7QUFDRCxxQkFBT0YsT0FBTyxDQUFDQyxNQUFSLENBQWUsa0JBQWYsQ0FBUDtBQUNEOztBQU5xQixXQUF4QixDQUxLLENBSFQ7QUFBQSxpQ0FrQkUsOERBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0Usa0JBQU0sRUFBRyxXQURYO0FBRUUsZ0JBQUksRUFBRyxPQUZUO0FBR0UsaUJBQUssRUFBRTVCLGFBSFQ7QUFJRSxvQkFBUSxFQUFFQyxxQkFKWjtBQUtFLHVCQUFXLEVBQUM7QUFMZDtBQWxCRixVQTNERixlQXFGRSw4REFBQywyQ0FBRDtBQUFRLGNBQUksRUFBRSxTQUFkO0FBQXlCLGtCQUFRLEVBQUUsUUFBbkM7QUFBNkMsZUFBSyxFQUFFO0FBQUUrQixpQkFBSyxFQUFFO0FBQVQsV0FBcEQ7QUFBQTtBQUFBLFVBckZGO0FBQUE7QUFERjtBQURGLElBREY7QUErRkQsQ0FySEQ7O0FBdUhlM0MsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsTUFBTTRDLEtBQUssR0FBRyxDQUFDO0FBQ2JDLGdCQURhO0FBRWJDLFVBRmE7QUFHYkMsa0JBSGE7QUFJYkMsYUFKYTtBQUtieEMsVUFMYTtBQU1iQyxrQkFOYTtBQU9iQztBQVBhLENBQUQsS0FRUjtBQUNKLFFBQU1SLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxRQUFNO0FBQUU4QztBQUFGLE1BQWlCakMsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQWxCLENBQWxDO0FBRUFnQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJRCxVQUFKLEVBQWdCO0FBQ2RyQixrREFBTyxDQUFDdUIsS0FBUixDQUFjRixVQUFkO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsVUFBRCxDQUpNLENBQVQ7QUFNQSxRQUFNO0FBQUVsQztBQUFGLE1BQWlCQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsSUFBbEIsQ0FBbEM7QUFDQWdDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUluQyxVQUFKLEVBQWdCO0FBQ2Q4QixvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEO0FBQ0YsR0FKUSxDQUFUOztBQU1BLFFBQU1PLGFBQWEsR0FBRyxNQUFNO0FBQzFCUCxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBUSxzREFBTSxDQUFDQyxJQUFQLENBQVksY0FBWjtBQUNELEdBSEQ7O0FBS0EsUUFBTW5DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxNQUFNO0FBQ2pDbEIsWUFBUSxDQUFDO0FBQ1BtQixVQUFJLEVBQUVrQyw2REFEQztBQUVQaEMsVUFBSSxFQUFFO0FBQ0p1QixnQkFESTtBQUVKdEM7QUFGSTtBQUZDLEtBQUQsQ0FBUjtBQU9ELEdBUjJCLEVBUXpCLENBQUNzQyxRQUFELEVBQVd0QyxRQUFYLENBUnlCLENBQTVCO0FBVUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx5Q0FBRDtBQUFNLFdBQUssRUFBRTtBQUFFa0IscUJBQWEsRUFBRTtBQUFqQixPQUFiO0FBQUEsNkJBQ0UsOERBQUMseUNBQUQ7QUFBTSxnQkFBUSxFQUFFUCxRQUFoQjtBQUFBLCtCQUNFLCtEQUFDLDBDQUFEO0FBQU8sbUJBQVMsRUFBQyxVQUFqQjtBQUE0QixjQUFJLEVBQUUsT0FBbEM7QUFBMkMsZUFBSyxFQUFFO0FBQUV3QixpQkFBSyxFQUFFO0FBQVQsV0FBbEQ7QUFBQSxrQ0FDRSw4REFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxnQkFBSSxFQUFFLE9BRFI7QUFFRSxpQkFBSyxFQUFFLENBQ0w7QUFBRWhCLHNCQUFRLEVBQUUsSUFBWjtBQUFrQkMscUJBQU8sRUFBRTtBQUEzQixhQURLLEVBRUw7QUFBRVAsa0JBQUksRUFBRSxPQUFSO0FBQWlCTyxxQkFBTyxFQUFFO0FBQTFCLGFBRkssQ0FGVDtBQUFBLG1DQU9FLDhEQUFDLDBDQUFEO0FBQ0Usb0JBQU0sZUFBRSw4REFBQyw4REFBRCxLQURWO0FBRUUsa0JBQUksRUFBRSxPQUZSO0FBR0Usa0JBQUksRUFBRSxPQUhSO0FBSUUsc0JBQVEsRUFBRW1CO0FBSlo7QUFQRixZQURGLGVBZUUsOERBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsZ0JBQUksRUFBRSxVQURSO0FBRUUsaUJBQUssRUFBRSxDQUNMO0FBQUVwQixzQkFBUSxFQUFFLElBQVo7QUFBa0JDLHFCQUFPLEVBQUU7QUFBM0IsYUFESyxFQUVMO0FBQ0VhLHFCQUFPLEVBQUUscUJBRFg7QUFFRWIscUJBQU8sRUFBRTtBQUZYLGFBRkssQ0FGVDtBQUFBLG1DQVVFLDhEQUFDLDBDQUFELENBQU8sUUFBUDtBQUNFLGtCQUFJLEVBQUUsVUFEUjtBQUVFLG9CQUFNLGVBQUUsOERBQUMsOERBQUQsS0FGVjtBQUdFLGtCQUFJLEVBQUUsT0FIUjtBQUlFLHNCQUFRLEVBQUVuQjtBQUpaO0FBVkYsWUFmRixlQWdDRSw4REFBQywyQ0FBRDtBQUNFLGdCQUFJLEVBQUUsU0FEUjtBQUVFLG9CQUFRLEVBQUUsUUFGWjtBQUdFLGlCQUFLLEVBQUU7QUFBRWtDLG1CQUFLLEVBQUU7QUFBVCxhQUhUO0FBQUE7QUFBQSxZQWhDRixlQXdDRSw4REFBQywyQ0FBRDtBQUFRLGlCQUFLLEVBQUU7QUFBRUEsbUJBQUssRUFBRTtBQUFULGFBQWY7QUFBa0MsbUJBQU8sRUFBRVMsYUFBM0M7QUFBQTtBQUFBLFlBeENGO0FBQUE7QUFERjtBQURGO0FBREYsSUFERjtBQW9ERCxDQTdGRDs7QUErRmVSLG9FQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTVksU0FBUyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQXlCO0FBQ3pDLFFBQU12RCxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTtBQUFBLE9BQUN1RCxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsRUFBaEM7O0FBQ0EsUUFBTUMsWUFBWSxHQUFJQyxDQUFELElBQU9ILE9BQU8sQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNoQyxLQUFWLENBQW5DOztBQUVBLFFBQU1pQyxRQUFRLEdBQUcsTUFBTTtBQUNyQjlELFlBQVEsQ0FBQztBQUNQbUIsVUFBSSxFQUFFNEMscUVBREM7QUFFUDFDLFVBQUksRUFBRTtBQUFFbUM7QUFBRjtBQUZDLEtBQUQsQ0FBUjtBQUlBQyxXQUFPO0FBQ1BPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxJQUFaO0FBQ0FELG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0QsR0FSRDs7QUFVQSxzQkFDRSw4REFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSxRQUFJLEVBQUUsT0FEUjtBQUVFLFNBQUssRUFBRUMsSUFGVDtBQUdFLFlBQVEsRUFBRUcsWUFIWjtBQUlFLGVBQVcsTUFKYjtBQUtFLFlBQVEsRUFBRUc7QUFMWixJQURGO0FBU0QsQ0F4QkQ7O0FBMEJlUix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWpELFFBQVEsR0FBRyxDQUFDNkQsWUFBWSxHQUFHLElBQWhCLEtBQXlCO0FBQy9DLFFBQU07QUFBQSxPQUFDckMsS0FBRDtBQUFBLE9BQVFzQztBQUFSLE1BQW1CVCxzREFBUSxDQUFDUSxZQUFELENBQWpDOztBQUNBLFFBQU1FLE1BQU0sR0FBSVIsQ0FBRCxJQUFPTyxPQUFPLENBQUNQLENBQUMsQ0FBQ0MsTUFBRixDQUFTaEMsS0FBVixDQUE3Qjs7QUFDQSxTQUFPLENBQUNBLEtBQUQsRUFBUXVDLE1BQVIsRUFBZ0JELE9BQWhCLENBQVA7QUFDRCxDQUpNO0FBTUEsTUFBTUUsVUFBVSxHQUFHLENBQUNILFlBQVksR0FBRyxJQUFoQixLQUF5QjtBQUNqRCxRQUFNO0FBQUEsT0FBQ3JDLEtBQUQ7QUFBQSxPQUFRc0M7QUFBUixNQUFtQlQsc0RBQVEsQ0FBQ1EsWUFBRCxDQUFqQztBQUNBLFFBQU1FLE1BQU0sR0FBR2xELHlEQUFXLENBQUMsTUFBTTtBQUMvQmlELFdBQU8sQ0FBRTVDLElBQUQsSUFBVTtBQUNoQixhQUFPLENBQUNBLElBQVI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUp5QixFQUl2QixDQUFDTSxLQUFELENBSnVCLENBQTFCO0FBS0EsU0FBTyxDQUFDQSxLQUFELEVBQVF1QyxNQUFSLEVBQWdCRCxPQUFoQixDQUFQO0FBQ0QsQ0FSTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUlA7QUFDQTs7OztBQUVBLE1BQU1HLGdCQUFnQixHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ3pDLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsd0NBQUQ7QUFBSyxZQUFNLEVBQUUsRUFBYjtBQUFBLDhCQUNFLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLHdDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsRUFBakI7QUFBQSxnQ0FDRSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdBLFFBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBTUUscUVBQUMsd0NBQUQ7QUFBSyxVQUFFLEVBQUUsQ0FBVDtBQUFZLFVBQUUsRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBWUQsQ0FiRDs7QUFlZUQsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsTUFBTUUsYUFBYSxHQUFHLE1BQU07QUFDMUIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU0sQ0FBQzlCLFFBQUQsRUFBV0MsZ0JBQVgsRUFBNkJDLFdBQTdCLElBQTRDekMsdUVBQVEsRUFBMUQ7QUFDQSxRQUFNLENBQUNDLFFBQUQsRUFBV0MsZ0JBQVgsRUFBNkJDLFdBQTdCLElBQTRDSCx1RUFBUSxFQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDc0UsV0FBRDtBQUFBLE9BQWNoQztBQUFkLE1BQWdDZSxzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2tCLFlBQUQ7QUFBQSxPQUFlckI7QUFBZixNQUFrQ0csc0RBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQixvQkFBRDtBQUFBLE9BQXVCOUU7QUFBdkIsTUFBa0QyRCxzREFBUSxDQUFDLEtBQUQsQ0FBaEUsQ0FQMEIsQ0FRMUI7O0FBQ0EsUUFBTTtBQUFBLE9BQUNvQixJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQnJCLHNEQUFRLENBQUMsS0FBRCxDQUFoQzs7QUFFQSxRQUFNc0IsV0FBVyxHQUFHLE1BQU07QUFDeEJELFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxHQUZEOztBQUlBLFFBQU1FLFdBQVcsR0FBSUgsSUFBRCxJQUFVO0FBQzVCQyxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsUUFBTUksc0JBQXNCLEdBQUcsTUFBTTtBQUNuQ0YsZUFBVztBQUNYakYsMkJBQXVCLENBQUV3QixJQUFELElBQVUsQ0FBQ0EsSUFBWixDQUF2QjtBQUNELEdBSEQ7O0FBS0EsUUFBTXZCLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EsUUFBTWtGLGFBQWEsR0FBRyxNQUFNO0FBQzFCM0UsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBc0MsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBOUMsWUFBUSxDQUFDO0FBQUVtQixVQUFJLEVBQUVpRSw4REFBZUE7QUFBdkIsS0FBRCxDQUFSO0FBQ0QsR0FKRDs7QUFNQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUMxQjdFLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQXNDLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUgsa0JBQWMsQ0FBRXBCLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQWQ7QUFDRCxHQUpEOztBQU1BLFFBQU0rRCxjQUFjLEdBQUcsTUFBTTtBQUMzQi9CLG1CQUFlLENBQUVoQyxJQUFELElBQVUsQ0FBQ0EsSUFBWixDQUFmO0FBQ0QsR0FGRDs7QUFJQSxRQUFNZ0UsZUFBZSxHQUFHLE1BQU07QUFDNUJkLFVBQU0sQ0FBQ3JCLElBQVAsQ0FBWSxXQUFaO0FBQ0E0QixlQUFXO0FBQ1osR0FIRDs7QUFLQSxRQUFNUSxZQUFZLEdBQUcsTUFBTTtBQUN6QmYsVUFBTSxDQUFDckIsSUFBUCxDQUFZLGFBQVo7QUFDQTRCLGVBQVc7QUFDWixHQUhEOztBQUtBLFFBQU07QUFBRW5FLGNBQUY7QUFBY0Q7QUFBZCxNQUEwQkUsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQWxCLENBQTNDO0FBQ0EsUUFBTTtBQUFFeUU7QUFBRixNQUFxQjNFLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDMkUsSUFBbEIsQ0FBdEM7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLCtEQUFDLDBDQUFEO0FBQ0UsV0FBSyxFQUFFLE9BRFQ7QUFFRSxhQUFPLEVBQUVmLFdBRlg7QUFHRSxjQUFRLEVBQUVVLGFBSFo7QUFJRSxZQUFNLEVBQUUsSUFKVjtBQUFBLDZCQU1FLCtEQUFDLG9EQUFEO0FBQ0Usc0JBQWMsRUFBRTFDLGNBRGxCO0FBRUUsZ0JBQVEsRUFBRUMsUUFGWjtBQUdFLHdCQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxnQkFBUSxFQUFFdkMsUUFKWjtBQUtFLHdCQUFnQixFQUFFQztBQUxwQjtBQU5GLE1BREYsZUFlRSwrREFBQywwQ0FBRDtBQUNFLFdBQUssRUFBRSxRQURUO0FBRUUsYUFBTyxFQUFFcUUsWUFGWDtBQUdFLGNBQVEsRUFBRVUsY0FIWjtBQUlFLFlBQU0sRUFBRSxJQUpWO0FBQUEsNkJBTUUsK0RBQUMsd0RBQUQ7QUFBZ0IsWUFBSSxFQUFFLFNBQXRCO0FBQWlDLHVCQUFlLEVBQUUvQjtBQUFsRDtBQU5GLE1BZkYsZUF1QkUsK0RBQUMsMENBQUQ7QUFDRSxXQUFLLEVBQUUsaUJBRFQ7QUFFRSxhQUFPLEVBQUVzQixvQkFGWDtBQUdFLGNBQVEsRUFBRUssc0JBSFo7QUFJRSxZQUFNLEVBQUUsSUFKVjtBQUFBLDZCQU1FLCtEQUFDLDZEQUFEO0FBQWdCLCtCQUF1QixFQUFFbkY7QUFBekM7QUFORixNQXZCRixlQStCRTtBQUFLLFdBQUssRUFBRTtBQUFFNEYsaUJBQVMsRUFBRSxNQUFiO0FBQXFCQyx1QkFBZSxFQUFFO0FBQXRDLE9BQVo7QUFBQSw2QkFDRSxnRUFBQyx5Q0FBRDtBQUFNLFlBQUksRUFBQyxZQUFYO0FBQUEsZ0NBQ0UsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsaUNBQ0UsK0RBQUMsbUVBQUQ7QUFBbUIsbUJBQU8sRUFBRSxNQUFNekMsa0RBQU0sQ0FBQzBDLElBQVA7QUFBbEM7QUFERixXQUFnQixNQUFoQixDQURGLGVBS0UsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQTBCLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FBakM7QUFBQSxvQkFDR0wsY0FBYyxDQUFDTSxNQUFmLEdBQXdCLENBQXhCLGdCQUNDLCtEQUFDLDBDQUFELENBQU8sTUFBUDtBQUNFLHVCQUFXLE1BRGI7QUFFRSxpQkFBSyxFQUFFO0FBQUV2RSwyQkFBYSxFQUFFO0FBQWpCLGFBRlQ7QUFHRSxtQkFBTyxFQUFFOEQsY0FIWDtBQUlFLG9CQUFRO0FBSlYsWUFERCxnQkFRQywrREFBQywwQ0FBRCxDQUFPLE1BQVA7QUFDRSx1QkFBVyxNQURiO0FBRUUsaUJBQUssRUFBRTtBQUFFOUQsMkJBQWEsRUFBRSxRQUFqQjtBQUEyQndFLHdCQUFVLEVBQUU7QUFBdkMsYUFGVDtBQUdFLG9CQUFRLEVBQUUsSUFIWjtBQUlFLG1CQUFPLEVBQUVWLGNBSlg7QUFLRSxvQkFBUTtBQUxWO0FBVEosV0FBZ0IsUUFBaEIsQ0FMRixFQXdCRyxDQUFDekUsVUFBRCxHQUNHLGNBQ0UsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsaUNBQ0U7QUFBRyxtQkFBTyxFQUFFd0UsYUFBWjtBQUFBO0FBQUE7QUFERixXQUFnQixPQUFoQixDQURGLENBREgsR0FNRyxjQUNFLCtEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLGlDQUNFLCtEQUFDLDRDQUFEO0FBQ0UsbUJBQU8sRUFBRSxPQURYO0FBRUUscUJBQVMsRUFBRSxRQUZiO0FBR0UsaUJBQUssRUFBRXpFLE9BQU8sQ0FBQ3FGLElBSGpCO0FBSUUsbUJBQU8sRUFBRW5CLElBSlg7QUFLRSwyQkFBZSxFQUFFRyxXQUxuQjtBQU1FLG1CQUFPLGVBQ0w7QUFBQSxxQ0FDRSxnRUFBQywwQ0FBRDtBQUFPLHlCQUFTLEVBQUUsVUFBbEI7QUFBQSx3Q0FDRTtBQUFLLHlCQUFPLEVBQUVDLHNCQUFkO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUsseUJBQU8sRUFBRUssZUFBZDtBQUFBO0FBQUEsa0JBSkYsRUFLRzNFLE9BQU8sQ0FBQ3NGLFFBQVIsS0FBcUIsSUFBckIsaUJBQ0M7QUFBSyx5QkFBTyxFQUFFVixZQUFkO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBREYsY0FQSjtBQUFBLG1DQW9CRSwrREFBQyw4REFBRDtBQXBCRjtBQURGLFdBQWdCLFNBQWhCLENBREYsZUF5QkUsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsZUFBSyxFQUFFO0FBQUVNLGlCQUFLLEVBQUU7QUFBVCxXQUFsQjtBQUFBLGlDQUNFO0FBQUcsbUJBQU8sRUFBRVgsYUFBWjtBQUFBO0FBQUE7QUFERixXQUEyQyxRQUEzQyxDQXpCRixDQTlCTjtBQUFBO0FBREYsTUEvQkY7QUFBQSxJQURGO0FBZ0dELENBdEpEOztBQXdKZVgsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBOztBQUVBOztBQVFBOztBQXNCQTtBQUNBLE1BQU0yQixTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FDeEIsUUFBZ0NDLFNBQWhDLEdBREY7QUFFQSxNQUFNQyxVQUEyQyxHQUFqRDs7QUFFQSx1QkFBeUQ7QUFDdkQ7QUFDQSxzQkFBb0I7QUFDbEI7QUFHRixHQU51RCxDQU12RDs7O0FBQ0EsTUFBSSxDQUFKLHNCQUEyQjtBQUN6QjtBQUdGOztBQUFBLFNBQVFDLGNBQWMsR0FBRyx5QkFDdEJDLE9BQUQsSUFBYTtBQUNYQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsVUFBSSxDQUFDTixTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBeEIsTUFBS04sQ0FBTCxFQUFrQztBQUNoQztBQUdGOztBQUFBLFlBQU1PLEVBQUUsR0FBR1AsU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQTlCLE1BQVdOLENBQVg7O0FBQ0EsVUFBSU0sS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTVCLEdBQXlEO0FBQ3ZERixzQkFBYyxDQUFkQSxVQUF5QkUsS0FBSyxDQUE5QkY7QUFDQUosaUJBQVMsQ0FBVEEsT0FBaUJNLEtBQUssQ0FBdEJOO0FBQ0FPLFVBQUU7QUFFTDtBQVhERjtBQUZxQixLQWV2QjtBQUFFRyxjQUFVLEVBZmQ7QUFlRSxHQWZ1QixDQUF6QjtBQW1CRjs7QUFBQSxNQUFNQyxxQkFBcUIsR0FBRyxZQUFpQztBQUM3RCxRQUFNQyxRQUFRLEdBQUdDLFdBQWpCOztBQUNBLE1BQUksQ0FBSixVQUFlO0FBQ2IsV0FBTyxNQUFNLENBQWI7QUFHRkQ7O0FBQUFBLFVBQVEsQ0FBUkE7QUFDQVYsV0FBUyxDQUFUQTtBQUNBLFNBQU8sTUFBTTtBQUNYLFFBQUk7QUFDRlUsY0FBUSxDQUFSQTtBQUNBLEtBRkYsQ0FFRSxZQUFZO0FBQ1o3QyxhQUFPLENBQVBBO0FBRUZtQzs7QUFBQUEsYUFBUyxDQUFUQTtBQU5GO0FBUkY7O0FBa0JBLDZDQUtRO0FBQ04sWUFBbUM7QUFDbkMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBMUIsUUFBTSxDQUFOQSxrQ0FBMENzQyxHQUFELElBQVM7QUFDaEQsY0FBMkM7QUFDekM7QUFDQTtBQUVIO0FBTER0QyxLQVBNLENBYU47O0FBQ0E2QixZQUFVLENBQUNVLElBQUksR0FBSkEsTUFBWFYsRUFBVSxDQUFWQTtBQUdGOztBQUFBLGdDQUFrRDtBQUNoRCxRQUFNO0FBQUE7QUFBQSxNQUFhVyxLQUFLLENBQXhCO0FBQ0EsU0FDR3BELE1BQU0sSUFBSUEsTUFBTSxLQUFqQixPQUFDQSxJQUNEb0QsS0FBSyxDQURMLE9BQUNwRCxJQUVEb0QsS0FBSyxDQUZMLE9BQUNwRCxJQUdEb0QsS0FBSyxDQUhMLFFBQUNwRCxJQUlEb0QsS0FBSyxDQUpMLE1BQUNwRCxJQUllO0FBQ2ZvRCxPQUFLLENBQUxBLGVBQXFCQSxLQUFLLENBQUxBLHNCQU54QjtBQVVGOztBQUFBLG9FQVFRO0FBQ04sUUFBTTtBQUFBO0FBQUEsTUFBZXJELENBQUMsQ0FBdEI7O0FBRUEsTUFBSXNELFFBQVEsS0FBUkEsUUFBcUJDLGVBQWUsQ0FBZkEsQ0FBZSxDQUFmQSxJQUFzQixDQUFDLHdCQUFoRCxJQUFnRCxDQUE1Q0QsQ0FBSixFQUFtRTtBQUNqRTtBQUNBO0FBR0Z0RDs7QUFBQUEsR0FBQyxDQUFEQSxpQkFSTSxDQVVOOztBQUNBLE1BQUl3RCxNQUFNLElBQVYsTUFBb0I7QUFDbEJBLFVBQU0sR0FBR0MsRUFBRSxDQUFGQSxlQUFURDtBQUdGLEdBZk0sQ0FlTjs7O0FBQ0EzQyxRQUFNLENBQUM2QyxPQUFPLGVBQWQ3QyxNQUFNLENBQU5BLFdBQStDO0FBQS9DQTtBQUErQyxHQUEvQ0EsT0FDRzhDLE9BQUQsSUFBc0I7QUFDcEIsUUFBSSxDQUFKLFNBQWM7O0FBQ2QsZ0JBQVk7QUFDVmxCLFlBQU0sQ0FBTkE7QUFDQW1CLGNBQVEsQ0FBUkE7QUFFSDtBQVBIL0M7QUFXRjs7QUFBQSxxQkFBeUQ7QUFDdkQsWUFBMkM7QUFDekMsbUNBSUc7QUFDRCxhQUFPLFVBQ0osZ0NBQStCZ0QsSUFBSSxDQUFDQyxHQUFJLGdCQUFlRCxJQUFJLENBQUNFLFFBQVMsNkJBQTRCRixJQUFJLENBQUNHLE1BQXZHLGFBQUMsSUFDRSxvQkFGTCxFQUNHLENBREksQ0FBUDtBQVFGLEtBZHlDLENBY3pDOzs7QUFDQSxVQUFNQyxrQkFBbUQsR0FBRztBQUMxRGIsVUFBSSxFQUROO0FBQTRELEtBQTVEO0FBR0EsVUFBTWMsYUFBa0MsR0FBR0MsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsUUFBb0I7QUFDbEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQ0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixpQkFBa0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUZyQyxVQUdFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFSSxLQUFLLENBQUxBLEdBQUssQ0FBTEEscUJBQStCLE9BQU9BLEtBQUssQ0FIckQsR0FHcUQ7QUFIL0IsV0FBRCxDQUFyQjtBQU1IO0FBWEQsYUFXTztBQUNMO0FBQ0E7QUFDQSxjQUFNRSxDQUFRLEdBQWQ7QUFFSDtBQWpCRCxPQXJCeUMsQ0F3Q3pDOztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEZCxRQUFFLEVBRHdEO0FBRTFEQyxhQUFPLEVBRm1EO0FBRzFERixZQUFNLEVBSG9EO0FBSTFEZ0IsYUFBTyxFQUptRDtBQUsxREMsY0FBUSxFQUxrRDtBQU0xREMsY0FBUSxFQU5WO0FBQTRELEtBQTVEO0FBUUEsVUFBTUMsYUFBa0MsR0FBR1IsTUFBTSxDQUFOQSxLQUEzQyxrQkFBMkNBLENBQTNDO0FBR0EsaUJBQWEsQ0FBYixRQUF1QkwsR0FBRCxJQUE0QjtBQUNoRCxVQUFJQSxHQUFHLEtBQVAsTUFBa0I7QUFDaEIsWUFDRU0sS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQ0EsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQURBQSxZQUVBLE9BQU9BLEtBQUssQ0FBWixHQUFZLENBQVosS0FIRixVQUlFO0FBQ0EsZ0JBQU1DLGVBQWUsQ0FBQztBQUFBO0FBRXBCTixvQkFBUSxFQUZZO0FBR3BCQyxrQkFBTSxFQUFFLE9BQU9JLEtBQUssQ0FIdEIsR0FHc0I7QUFIQSxXQUFELENBQXJCO0FBTUg7QUFaRCxhQVlPLElBQ0xOLEdBQUcsS0FBSEEsYUFDQUEsR0FBRyxLQURIQSxZQUVBQSxHQUFHLEtBRkhBLGFBR0FBLEdBQUcsS0FISEEsY0FJQUEsR0FBRyxLQUxFLFlBTUw7QUFDQSxZQUFJTSxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0IsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUExQixXQUEyRDtBQUN6RCxnQkFBTUMsZUFBZSxDQUFDO0FBQUE7QUFFcEJOLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBQUUsT0FBT0ksS0FBSyxDQUh0QixHQUdzQjtBQUhBLFdBQUQsQ0FBckI7QUFNSDtBQWRNLGFBY0E7QUFDTDtBQUNBO0FBQ0EsY0FBTUUsQ0FBUSxHQUFkO0FBRUg7QUFoQ0QsT0FwRHlDLENBc0Z6QztBQUNBOztBQUNBLFVBQU1NLFNBQVMsR0FBR0Msc0JBQWxCLEtBQWtCQSxDQUFsQjs7QUFDQSxRQUFJVCxLQUFLLENBQUxBLFlBQWtCLENBQUNRLFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQXhFLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU0wRSxDQUFDLEdBQUdWLEtBQUssQ0FBTEEsYUFBVjs7QUFFQSxRQUFNLDBCQUEwQlMsZUFBaEMsUUFBZ0NBLEVBQWhDOztBQUVBLFFBQU1oRSxNQUFNLEdBQUcsYUFBZixTQUFlLEdBQWY7QUFDQSxRQUFNa0UsUUFBUSxHQUFJbEUsTUFBTSxJQUFJQSxNQUFNLENBQWpCLFFBQUNBLElBQWxCOztBQUVBLFFBQU07QUFBQTtBQUFBO0FBQUEsTUFBZWdFLHVCQUFjLE1BQU07QUFDdkMsVUFBTSw2QkFBNkIsbUNBQXNCVCxLQUFLLENBQTNCLE1BQW5DLElBQW1DLENBQW5DO0FBQ0EsV0FBTztBQUNMaEIsVUFBSSxFQURDO0FBRUxLLFFBQUUsRUFBRVcsS0FBSyxDQUFMQSxLQUNBLG1DQUFzQkEsS0FBSyxDQUQzQkEsRUFDQSxDQURBQSxHQUVBWSxVQUFVLElBSmhCO0FBQU8sS0FBUDtBQUZtQkgsS0FRbEIsV0FBV1QsS0FBSyxDQUFoQixNQUF1QkEsS0FBSyxDQVIvQixFQVFHLENBUmtCUyxDQUFyQjs7QUFVQSwyQkFBZ0IsTUFBTTtBQUNwQixRQUNFQyxDQUFDLElBQURBLG9DQUdBRyxRQUFRLENBSFJILFdBSUEsd0JBTEYsSUFLRSxDQUxGLEVBTUU7QUFDQTtBQUNBLFlBQU1JLFlBQVksR0FBR3hDLFVBQVUsQ0FBQ1UsSUFBSSxHQUFKQSxNQUFoQyxFQUErQixDQUEvQjs7QUFDQSxVQUFJLENBQUosY0FBbUI7QUFDakIsZUFBT0oscUJBQXFCLFdBQVcsTUFBTTtBQUMzQzBCLGtCQUFRLGVBQVJBLEVBQVEsQ0FBUkE7QUFERixTQUE0QixDQUE1QjtBQUlIO0FBQ0Y7QUFoQkQsS0FnQkcsd0JBaEJILE1BZ0JHLENBaEJIOztBQWtCQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKLE1BcEl1RCxDQXFJdkQ7O0FBQ0EsTUFBSSxvQkFBSixVQUFrQztBQUNoQy9ELFlBQVEsZ0JBQUcsd0NBQVhBLFFBQVcsQ0FBWEE7QUFHRixHQTFJdUQsQ0EwSXZEOzs7QUFDQSxRQUFNd0UsS0FBVSxHQUFHQyxxQkFBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQU1DLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBQUdDLEVBQUQsSUFBYTtBQUNoQixjQUFRQyxXQUFXLENBQVhBLEVBQVcsQ0FBWEE7O0FBRVIsVUFBSUwsS0FBSyxJQUFJLGlCQUFUQSxZQUFzQ0EsS0FBSyxDQUEvQyxLQUFxRDtBQUNuRCxZQUFJLE9BQU9BLEtBQUssQ0FBWixRQUFKLFlBQXFDQSxLQUFLLENBQUxBLElBQXJDLEVBQXFDQSxFQUFyQyxLQUNLLElBQUksT0FBT0EsS0FBSyxDQUFaLFFBQUosVUFBbUM7QUFDdENBLGVBQUssQ0FBTEE7QUFFSDtBQUNGO0FBVkM7QUFXRk0sV0FBTyxFQUFHekYsQ0FBRCxJQUF5QjtBQUNoQyxVQUFJbUYsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxZQUFuQixZQUE4RDtBQUM1REEsYUFBSyxDQUFMQTtBQUVGOztBQUFBLFVBQUksQ0FBQ25GLENBQUMsQ0FBTixrQkFBeUI7QUFDdkIwRixtQkFBVyx3Q0FBWEEsTUFBVyxDQUFYQTtBQUVIO0FBdkJIO0FBS0ksR0FMSjs7QUEwQkEsU0FBTztBQUNMTCxjQUFVLENBQVZBLGVBQTJCckYsQ0FBRCxJQUF5QjtBQUNqRCxVQUFJLENBQUMsd0JBQUwsSUFBSyxDQUFMLEVBQXVCOztBQUN2QixVQUFJbUYsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxpQkFBbkIsWUFBbUU7QUFDakVBLGFBQUssQ0FBTEE7QUFFRlQ7O0FBQUFBLGNBQVEsbUJBQW1CO0FBQUVpQixnQkFBUSxFQUFyQ2pCO0FBQTJCLE9BQW5CLENBQVJBO0FBTEZXO0FBU0YsR0FoTHVELENBZ0x2RDtBQUNBOzs7QUFDQSxNQUFJakIsS0FBSyxDQUFMQSxZQUFtQmUsS0FBSyxDQUFMQSxnQkFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQTlELEtBQTZDLENBQTdDLEVBQXdFO0FBQ3RFRSxjQUFVLENBQVZBLE9BQWtCLHlCQUNoQiwyQkFBY3hFLE1BQU0sSUFBSUEsTUFBTSxDQUE5QixRQUF1Q0EsTUFBTSxJQUFJQSxNQUFNLENBRHpEd0UsYUFDRSxDQURnQixDQUFsQkE7QUFLRjs7QUFBQSxzQkFBT1IsbUNBQVAsVUFBT0EsQ0FBUDs7O2VBR2FlLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RWZjs7OztBQUdPLHVDQUF1RDtBQUM1RCxTQUFPQyxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSU8sTUFBTUMsMEJBQTBCLEdBQUdDLFNBQ3JDRixTQURxQ0UsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQOztBQUNBOzs7OztBQUNBOztBQXNIQTs7O0FBekhBOztBQW1CQSxNQUFNQyxlQUFvQyxHQUFHO0FBQzNDbkYsUUFBTSxFQURxQztBQUM3QjtBQUNkb0YsZ0JBQWMsRUFGNkI7O0FBRzNDQyxPQUFLLEtBQWlCO0FBQ3BCLFFBQUksS0FBSixRQUFpQixPQUFPcEQsRUFBUDs7QUFDakIsZUFBbUMsRUFHcEM7QUFSSDs7QUFBNkMsQ0FBN0MsQyxDQVdBOztBQUNBLE1BQU1xRCxpQkFBaUIsR0FBRyxzR0FBMUIsZUFBMEIsQ0FBMUI7QUFZQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBbEMsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0NtQyxLQUFHLEdBQUc7QUFDSixXQUFPL0csaUJBQVA7QUFGSjRFOztBQUFpRCxDQUFqREE7QUFNQWdDLGlCQUFpQixDQUFqQkEsUUFBMkJJLEtBQUQsSUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBcEMsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNtQyxPQUFHLEdBQUc7QUFDSixZQUFNekYsTUFBTSxHQUFHMkYsU0FBZjtBQUNBLGFBQU8zRixNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpzRDs7QUFBOEMsR0FBOUNBO0FBTEZnQztBQWFBLGdCQUFnQixDQUFoQixRQUEwQkksS0FBRCxJQUFXO0FBQ2xDO0FBQ0E7O0FBQUVQLGlCQUFELE9BQUNBLEdBQWlDLENBQUMsR0FBRCxTQUFvQjtBQUNyRCxVQUFNbkYsTUFBTSxHQUFHMkYsU0FBZjtBQUNBLFdBQU8zRixNQUFNLENBQU5BLEtBQU0sQ0FBTkEsQ0FBYyxHQUFyQixJQUFPQSxDQUFQO0FBRkQsR0FBQ21GO0FBRko7QUFRQUksWUFBWSxDQUFaQSxRQUFzQi9DLEtBQUQsSUFBVztBQUM5QjJDLGlCQUFlLENBQWZBLE1BQXNCLE1BQU07QUFDMUJ6RyxzQ0FBd0IsQ0FBQyxHQUFELFNBQWE7QUFDbkMsWUFBTWtILFVBQVUsR0FBSSxLQUFJcEQsS0FBSyxDQUFMQSx1QkFBOEIsR0FBRUEsS0FBSyxDQUFMQSxZQUF4RDtBQUdBLFlBQU1xRCxnQkFBZ0IsR0FBdEI7O0FBQ0EsVUFBSUEsZ0JBQWdCLENBQXBCLFVBQW9CLENBQXBCLEVBQWtDO0FBQ2hDLFlBQUk7QUFDRkEsMEJBQWdCLENBQWhCQSxVQUFnQixDQUFoQkEsQ0FBNkIsR0FBN0JBO0FBQ0EsU0FGRixDQUVFLFlBQVk7QUFDWnRHLGlCQUFPLENBQVBBLE1BQWUsd0NBQXVDcUcsVUFBdERyRztBQUNBQSxpQkFBTyxDQUFQQSxNQUFlLEdBQUUrQyxHQUFHLENBQUNyRixPQUFRLEtBQUlxRixHQUFHLENBQUN3RCxLQUFyQ3ZHO0FBRUg7QUFDRjtBQWJEYjtBQURGeUc7QUFERkk7O0FBbUJBLHFCQUE2QjtBQUMzQixNQUFJLENBQUNKLGVBQWUsQ0FBcEIsUUFBNkI7QUFDM0IsVUFBTWxJLE9BQU8sR0FDWCxnQ0FERjtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFFRjs7QUFBQSxTQUFPa0ksZUFBZSxDQUF0QjtBQUdGLEMsQ0FBQTs7O2VBQ2VBLGUsRUFFZjs7OztBQUdPLHFCQUFpQztBQUN0QyxTQUFPbkIsMEJBQWlCK0IsZUFBeEIsYUFBTy9CLENBQVA7QUFHRixDLENBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDTyxNQUFNZ0MsWUFBWSxHQUFHLENBQUMsR0FBRCxTQUFpQztBQUMzRGIsaUJBQWUsQ0FBZkEsU0FBeUIsSUFBSXpHLFNBQUosUUFBVyxHQUFwQ3lHLElBQXlCLENBQXpCQTtBQUNBQSxpQkFBZSxDQUFmQSx1QkFBd0NsRCxFQUFELElBQVFBLEVBQS9Da0Q7QUFDQUEsaUJBQWUsQ0FBZkE7QUFFQSxTQUFPQSxlQUFlLENBQXRCO0FBTEssRSxDQVFQOzs7OztBQUNPLDBDQUE4RDtBQUNuRSxRQUFNYyxPQUFPLEdBQWI7QUFDQSxRQUFNQyxRQUFRLEdBQWQ7O0FBRUEsT0FBSyxNQUFMLCtCQUEwQztBQUN4QyxRQUFJLE9BQU9ELE9BQU8sQ0FBZCxRQUFjLENBQWQsS0FBSixVQUEyQztBQUN6Q0MsY0FBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCNUMsTUFBTSxDQUFOQSxPQUNuQjZDLEtBQUssQ0FBTEEsUUFBY0YsT0FBTyxDQUFyQkUsUUFBcUIsQ0FBckJBLFNBRG1CN0MsSUFFbkIyQyxPQUFPLENBRlRDLFFBRVMsQ0FGWTVDLENBQXJCNEMsQ0FEeUMsQ0FJdkM7O0FBQ0Y7QUFHRkE7O0FBQUFBLFlBQVEsQ0FBUkEsUUFBUSxDQUFSQSxHQUFxQkQsT0FBTyxDQUE1QkMsUUFBNEIsQ0FBNUJBO0FBR0YsR0FoQm1FLENBZ0JuRTs7O0FBQ0FBLFVBQVEsQ0FBUkEsU0FBa0J4SCxpQkFBbEJ3SDtBQUVBVixrQkFBZ0IsQ0FBaEJBLFFBQTBCRSxLQUFELElBQVc7QUFDbENRLFlBQVEsQ0FBUkEsS0FBUSxDQUFSQSxHQUFrQixDQUFDLEdBQUQsU0FBb0I7QUFDcEMsYUFBT0QsT0FBTyxDQUFQQSxLQUFPLENBQVBBLENBQWUsR0FBdEIsSUFBT0EsQ0FBUDtBQURGQztBQURGVjtBQU1BO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRDs7QUFFQTs7QUFXZSx1Q0FLK0I7QUFDNUMsb0NBQXVDO0FBQ3JDLHdCQUFPO0FBQW1CLFlBQU0sRUFBRSxZQUEzQixTQUEyQjtBQUEzQixPQUFQLEtBQU8sRUFBUDtBQUdGOztBQUFBLG1CQUFpQixDQUFqQixrQkFBb0NZLGlCQUFpQixDQUFDQyxlQUF0RCxDQUNBO0FBREE7QUFFRUMsbUJBQUQsb0JBQUNBLEdBQWlERixpQkFBRCxDQUFqRCxtQkFBQ0U7O0FBQ0YsWUFBMkM7QUFDekMsVUFBTTlFLElBQUksR0FDUjRFLGlCQUFpQixDQUFqQkEsZUFBaUNBLGlCQUFpQixDQUFsREEsUUFERjtBQUVBRSxxQkFBaUIsQ0FBakJBLGNBQWlDLGNBQWE5RSxJQUE5QzhFO0FBR0Y7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNqQ1k7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQThDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBb0Q7QUFDN0U7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIseUJBQXlCLDJDQUEyQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNDQUFzQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBDQUEwQztBQUMvRDtBQUNBLGlCQUFpQixtQ0FBbUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQSxvRUFBb0UsVUFBVSxFQUFFO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsaURBQWlELEVBQUU7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msd09BQXdPLFVBQVUsRUFBRTtBQUNwUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxzQkFBc0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2REFBNkQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWkE7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7O0FBVWUsZ0JBQTZCO0FBQzFDLFFBQU1DLEdBQStCLEdBQUdqRCxNQUFNLENBQU5BLE9BQXhDLElBQXdDQSxDQUF4QztBQUVBLFNBQU87QUFDTGtELE1BQUUsZ0JBQWlDO0FBQ2pDO0FBQUMsT0FBQ0QsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEtBQWNBLEdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxHQUFmLEVBQUNBLENBQUQ7QUFGRTs7QUFLTEUsT0FBRyxnQkFBaUM7QUFDbEMsVUFBSUYsR0FBRyxDQUFQLElBQU8sQ0FBUCxFQUFlO0FBQ2JBLFdBQUcsQ0FBSEEsSUFBRyxDQUFIQSxRQUFpQkEsR0FBRyxDQUFIQSxJQUFHLENBQUhBLHNCQUFqQkE7QUFFSDtBQVRJOztBQVdMRyxRQUFJLE9BQWUsR0FBZixNQUErQjtBQUNqQztBQUNBO0FBQUMsT0FBQ0gsR0FBRyxDQUFIQSxJQUFHLENBQUhBLElBQUQsZ0JBQStCN0csT0FBRCxJQUFzQjtBQUNuREEsZUFBTyxDQUFDLEdBQVJBLElBQU8sQ0FBUEE7QUFERDtBQWJMOztBQUFPLEdBQVA7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQTNCQTtBQUFBO0FBQ0E7OztBQXdDQSxNQUFNaUgsUUFBUSxHQUFJekIsVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU81QixNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakRzRCxhQUFTLEVBRFg7QUFBbUQsR0FBNUN0RCxDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU91RCxNQUFNLElBQUk3QixJQUFJLENBQUpBLFdBQVY2QixHQUFVN0IsQ0FBVjZCLEdBQ0g3QixJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFNkIsTUFBTyxHQUFFN0IsSUFIWDZCLEtBQVA7QUFPSzs7QUFBQSxnREFJTDtBQUNBLE1BQUkzQixLQUFKLEVBQXFDLEVBS3JDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFLckM7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBT0YsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQjJCLFFBQVEsR0FBcEQsR0FBNEIzQixDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU84QixhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hELFNBQU85QixJQUFJLENBQUpBLE1BQVcyQixRQUFRLENBQW5CM0IsV0FBUDtBQUdGO0FBQUE7Ozs7O0FBR08seUJBQTBDO0FBQy9DLE1BQUkrQixHQUFHLENBQUhBLFdBQUosR0FBSUEsQ0FBSixFQUF5Qjs7QUFDekIsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLFdBQXZCLGlCQUF1QixHQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxhQUFqQixjQUFpQixDQUFqQjtBQUNBLFdBQU9BLFFBQVEsQ0FBUkEsNkJBQXNDQyxXQUFXLENBQUNELFFBQVEsQ0FBakUsUUFBd0QsQ0FBeEQ7QUFDQSxHQUxGLENBS0UsVUFBVTtBQUNWO0FBRUg7QUFJTTs7QUFBQSxpREFJTDtBQUNBLE1BQUlFLGlCQUFpQixHQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBRywrQkFBckIsS0FBcUIsQ0FBckI7QUFDQSxRQUFNQyxhQUFhLEdBQUdELFlBQVksQ0FBbEM7QUFDQSxRQUFNRSxjQUFjLEdBQ2xCO0FBQ0EsR0FBQ0MsVUFBVSxLQUFWQSxRQUF1QixpREFBdkJBLFVBQXVCLENBQXZCQSxHQUFELE9BQ0E7QUFDQTtBQUpGO0FBT0FKLG1CQUFpQixHQUFqQkE7QUFDQSxRQUFNSyxNQUFNLEdBQUdsRSxNQUFNLENBQU5BLEtBQWYsYUFBZUEsQ0FBZjs7QUFFQSxNQUNFLENBQUNrRSxNQUFNLENBQU5BLE1BQWNDLEtBQUQsSUFBVztBQUN2QixRQUFJckssS0FBSyxHQUFHa0ssY0FBYyxDQUFkQSxLQUFjLENBQWRBLElBQVo7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQXVCRCxhQUFhLENBQTFDLEtBQTBDLENBQTFDLENBRnVCLENBSXZCO0FBQ0E7O0FBQ0EsUUFBSUssUUFBUSxHQUFJLElBQUdDLE1BQU0sV0FBVyxFQUFHLEdBQUVGLEtBQXpDOztBQUNBLGtCQUFjO0FBQ1pDLGNBQVEsR0FBSSxHQUFFLGVBQWUsRUFBRyxJQUFHQSxRQUFuQ0E7QUFFRjs7QUFBQSxRQUFJQyxNQUFNLElBQUksQ0FBQ3hCLEtBQUssQ0FBTEEsUUFBZixLQUFlQSxDQUFmLEVBQXFDL0ksS0FBSyxHQUFHLENBQVJBLEtBQVEsQ0FBUkE7QUFFckMsV0FDRSxDQUFDd0ssUUFBUSxJQUFJSCxLQUFLLElBQWxCLHFCQUNBO0FBQ0NOLHFCQUFpQixHQUNoQkEsaUJBQWlCLENBQWpCQSxrQkFFRVEsTUFBTSxHQUNEdkssS0FBRCxJQUFDQSxDQUF1QnlLLHNCQUF4QixPQUFDekssRUFBRCxJQUFDQSxDQURDLEdBQ0RBLENBREMsR0FFRixtQ0FKTitKLEtBSU0sQ0FKTkEsS0FKSixHQUNFLENBREY7QUFiSixHQUNHSyxDQURILEVBeUJFO0FBQ0FMLHFCQUFpQixHQUFqQkEsR0FEQSxDQUN1QjtBQUV2QjtBQUNBO0FBRUY7O0FBQUEsU0FBTztBQUFBO0FBRUwzSixVQUFNLEVBRlI7QUFBTyxHQUFQO0FBTUY7O0FBQUEsMkNBQXFFO0FBQ25FLFFBQU1zSyxhQUE2QixHQUFuQztBQUVBeEUsUUFBTSxDQUFOQSxvQkFBNEJMLEdBQUQsSUFBUztBQUNsQyxRQUFJLENBQUN1RSxNQUFNLENBQU5BLFNBQUwsR0FBS0EsQ0FBTCxFQUEyQjtBQUN6Qk0sbUJBQWEsQ0FBYkEsR0FBYSxDQUFiQSxHQUFxQkMsS0FBSyxDQUExQkQsR0FBMEIsQ0FBMUJBO0FBRUg7QUFKRHhFO0FBS0E7QUFHRjtBQUFBOzs7Ozs7QUFJTyxtREFJRztBQUNSO0FBQ0EsUUFBTTBFLElBQUksR0FBRyxxQkFBYixVQUFhLENBQWI7QUFDQSxRQUFNQyxXQUFXLEdBQ2Ysa0NBQWtDLGlDQURwQyxJQUNvQyxDQURwQzs7QUFFQSxNQUFJO0FBQ0YsVUFBTUMsUUFBUSxHQUFHLHFCQUFqQixJQUFpQixDQUFqQjtBQUNBQSxZQUFRLENBQVJBLFdBQW9CLHdEQUEyQkEsUUFBUSxDQUF2REEsUUFBb0IsQ0FBcEJBO0FBQ0EsUUFBSUMsY0FBYyxHQUFsQjs7QUFFQSxRQUNFLCtCQUFlRCxRQUFRLENBQXZCLGFBQ0FBLFFBQVEsQ0FEUixnQkFERixXQUlFO0FBQ0EsWUFBTUgsS0FBSyxHQUFHLHlDQUF1QkcsUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDakUsa0JBQVEsRUFENEI7QUFFcENtRSxjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcENILGVBQUssRUFBRU8sa0JBQWtCLFFBSDNCSCxNQUcyQjtBQUhXLFNBQXJCLENBQWpCQTtBQU1IO0FBRUQsS0EzQkUsQ0EyQkY7OztBQUNBLFVBQU1JLFlBQVksR0FDaEJMLFFBQVEsQ0FBUkEsV0FBb0JGLElBQUksQ0FBeEJFLFNBQ0lBLFFBQVEsQ0FBUkEsV0FBb0JBLFFBQVEsQ0FBUkEsT0FEeEJBLE1BQ0lBLENBREpBLEdBRUlBLFFBQVEsQ0FIZDtBQUtBLFdBQVFNLFNBQVMsR0FDYixlQUFlTCxjQUFjLElBRGhCLFlBQ2IsQ0FEYSxHQUFqQjtBQUdBLEdBcENGLENBb0NFLFVBQVU7QUFDVixXQUFRSyxTQUFTLEdBQUcsQ0FBSCxXQUFHLENBQUgsR0FBakI7QUFFSDtBQUVEOztBQUFBLE1BQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUE5QixpQkFBOEIsQ0FBOUI7O0FBQ08sK0JBQTZDO0FBQ2xELFNBQU9wRixNQUFNLENBQU5BLHFDQUFQLEVBQU9BLENBQVA7QUFHRjs7QUFBQSx1Q0FBNkQ7QUFDM0Q7QUFDQTtBQUNBLFNBQU87QUFDTHlELE9BQUcsRUFBRTRCLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDNUksTUFBTSxDQUFQLFVBRHZCLEdBQ3VCLENBQVosQ0FEWDtBQUVMNEMsTUFBRSxFQUFFQSxFQUFFLEdBQUcrRixXQUFXLENBQUNDLFdBQVcsQ0FBQzVJLE1BQU0sQ0FBUCxVQUExQixFQUEwQixDQUFaLENBQWQsR0FGUjtBQUFPLEdBQVA7QUF5REY7O0FBQUEsTUFBTTZJLHVCQUF1QixHQUMzQjNELFVBRUEsS0FIRjs7QUFLQSxtQ0FBaUU7QUFDL0QsU0FBTyxLQUFLLE1BQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBNEQsZUFBVyxFQVpOO0FBQVcsR0FBTixDQUFMLE1BYUVDLEdBQUQsSUFBUztBQUNmLFFBQUksQ0FBQ0EsR0FBRyxDQUFSLElBQWE7QUFDWCxVQUFJQyxRQUFRLEdBQVJBLEtBQWdCRCxHQUFHLENBQUhBLFVBQXBCLEtBQXVDO0FBQ3JDLGVBQU9FLFVBQVUsTUFBTUQsUUFBUSxHQUEvQixDQUFpQixDQUFqQjtBQUVGOztBQUFBLFlBQU0sVUFBTiw2QkFBTSxDQUFOO0FBR0Y7O0FBQUEsV0FBT0QsR0FBRyxDQUFWLElBQU9BLEVBQVA7QUFyQkYsR0FBTyxDQUFQO0FBeUJGOztBQUFBLGlEQUFrRTtBQUNoRSxTQUFPLFVBQVUsV0FBV0csY0FBYyxPQUFuQyxDQUFVLENBQVYsT0FBb0Q1RyxHQUFELElBQWdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBSixnQkFBcUI7QUFDbkI2RyxzQkFBZ0IsQ0FBaEJBLEdBQWdCLENBQWhCQTtBQUVGOztBQUFBO0FBUEYsR0FBTyxDQUFQO0FBV2E7O0FBQUEsTUFBTXpLLE1BQU4sQ0FBbUM7QUFPaEQ7O0FBUGdEO0FBV2hEO0FBa0JBMEssYUFBVyx5QkFJVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKUztBQUlULEdBSlMsRUErQlQ7QUFBQSxTQTNERkMsS0EyREU7QUFBQSxTQTFERm5GLFFBMERFO0FBQUEsU0F6REY2RCxLQXlERTtBQUFBLFNBeERGdUIsTUF3REU7QUFBQSxTQXZERjNDLFFBdURFO0FBQUEsU0FsREY0QyxVQWtERTtBQUFBLFNBaERGQyxHQWdERSxHQWhEa0MsRUFnRGxDO0FBQUEsU0EvQ0ZDLEdBK0NFO0FBQUEsU0E5Q0ZDLEdBOENFO0FBQUEsU0E3Q0ZDLFVBNkNFO0FBQUEsU0E1Q0ZDLElBNENFO0FBQUEsU0EzQ0ZDLE1BMkNFO0FBQUEsU0ExQ0ZDLFFBMENFO0FBQUEsU0F6Q0ZDLEtBeUNFO0FBQUEsU0F4Q0ZDLFVBd0NFO0FBQUEsU0F2Q0ZDLGNBdUNFO0FBQUEsU0F0Q0ZDLFFBc0NFO0FBQUEsU0FyQ0ZDLE1BcUNFO0FBQUEsU0FwQ0ZDLE9Bb0NFO0FBQUEsU0FuQ0ZDLGFBbUNFOztBQUFBLHNCQXFHWWxMLENBQUQsSUFBNEI7QUFDdkMsWUFBTTdDLEtBQUssR0FBRzZDLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFK0Usa0JBQVEsRUFBRXlFLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUNyTSxLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0E1QnVDLENBOEJ2QztBQUNBOztBQUNBLFVBQUksY0FBY3NHLEVBQUUsS0FBSyxLQUFyQixVQUFvQ3NCLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BcEN1QyxDQW9DdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRVosTUFBTSxDQUFOQSxvQkFBMkI7QUFDekJLLGVBQU8sRUFBRTJHLE9BQU8sQ0FBUEEsV0FBbUIsS0FMaEM7QUFJNkIsT0FBM0JoSCxDQUpGO0FBL0lBLE9BQ0E7OztBQUNBLGlCQUFhLHFEQUFiLFNBQWEsQ0FBYixDQUZBLENBSUE7O0FBQ0EseUJBTEEsQ0FNQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSVksU0FBUSxLQUFaLFdBQTRCO0FBQzFCLHNCQUFnQixLQUFoQixTQUE4QjtBQUFBO0FBRTVCcUcsbUJBQVcsRUFGaUI7QUFHNUJoSCxhQUFLLEVBSHVCO0FBQUE7QUFLNUJpSCxlQUFPLEVBQUVDLFlBQVksSUFBSUEsWUFBWSxDQUxUO0FBTTVCQyxlQUFPLEVBQUVELFlBQVksSUFBSUEsWUFBWSxDQU52QztBQUE4QixPQUE5QjtBQVVGOztBQUFBLCtCQUEyQjtBQUN6QkUsZUFBUyxFQURnQjtBQUV6QkosaUJBQVcsRUFBRTtBQUZmO0FBRWU7QUFGWSxLQUEzQixDQXBCQSxDQTJCQTtBQUNBOztBQUNBLGtCQUFjN0wsTUFBTSxDQUFwQjtBQUVBO0FBQ0E7QUFDQSx3QkFqQ0EsQ0FrQ0E7QUFDQTs7QUFDQSxrQkFDRTtBQUNBLGlEQUE0QmtNLGFBQWEsQ0FBekMseUJBRkY7QUFHQTtBQUNBO0FBQ0E7QUFDQSw0QkExQ0EsQ0EyQ0E7QUFDQTs7QUFDQTtBQUVBOztBQUVBLFFBQUkxRixLQUFKLEVBQXFDLEVBTXJDOztBQUFBLGVBQW1DLEVBNENwQztBQXNERDJGOztBQUFBQSxRQUFNLEdBQVM7QUFDYmpKLFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7OztBQUdBUixNQUFJLEdBQUc7QUFDTFEsVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUFqRCxNQUFJLE1BQVdpRSxFQUFPLEdBQWxCLEtBQTBCMEgsT0FBMEIsR0FBcEQsSUFBMkQ7QUFDN0Q7QUFBQyxLQUFDO0FBQUE7QUFBQTtBQUFBLFFBQWNRLFlBQVksWUFBM0IsRUFBMkIsQ0FBM0I7QUFDRCxXQUFPLGtDQUFQLE9BQU8sQ0FBUDtBQUdGO0FBQUE7Ozs7Ozs7O0FBTUFqSSxTQUFPLE1BQVdELEVBQU8sR0FBbEIsS0FBMEIwSCxPQUEwQixHQUFwRCxJQUEyRDtBQUNoRTtBQUFDLEtBQUM7QUFBQTtBQUFBO0FBQUEsUUFBY1EsWUFBWSxZQUEzQixFQUEyQixDQUEzQjtBQUNELFdBQU8scUNBQVAsT0FBTyxDQUFQO0FBR0Y7O0FBQUEsUUFBTUMsTUFBTiwyQkFLb0I7QUFDbEIsUUFBSSxDQUFDQyxVQUFVLENBQWYsR0FBZSxDQUFmLEVBQXNCO0FBQ3BCcEosWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSSxDQUFFMEksT0FBRCxDQUFMLElBQTBCO0FBQ3hCO0FBRUYsS0FUa0IsQ0FTbEI7OztBQUNBLFFBQUlXLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0Z0STs7QUFBQUEsTUFBRSxHQUFHdUksU0FBUyxLQUFLLEtBQUwsUUFBa0IsS0FBaEN2SSxhQUFjLENBQWRBO0FBQ0EsVUFBTXdJLFNBQVMsR0FBR0MsU0FBUyxDQUN6Qm5FLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQm9FLFdBQVcsQ0FBN0JwRSxFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQXZCa0IsQ0F5QmxCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFb0QsT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBNUwsWUFBTSxDQUFOQSxtQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0YsS0ExQ2tCLENBMENsQjtBQUNBO0FBQ0E7OztBQUNBLFVBQU02TSxLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFDQSxVQUFNO0FBQUVDLGdCQUFVLEVBQVo7QUFBQSxRQUEyQixNQUFNLGdCQUF2QztBQUVBLFFBQUlDLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUo7QUFFQUEsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ3ZILGNBQVEsR0FBR3VILE1BQU0sQ0FBakJ2SDtBQUNBNkMsU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0EzRGtCLENBMkRsQjtBQUNBO0FBQ0E7OztBQUNBN0MsWUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCb0gsV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5CcEgsU0E5RGtCLENBa0VsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQyxjQUFMLFNBQUssQ0FBTCxFQUErQjtBQUM3QndILFlBQU0sR0FBTkE7QUFHRjs7QUFBQSxRQUFJckMsS0FBSyxHQUFHLHFEQUFaLFFBQVksQ0FBWjtBQUNBLFVBQU07QUFBRTFGLGFBQU8sR0FBVDtBQUFBLFFBQU4sUUE1RWtCLENBOEVsQjtBQUNBOztBQUNBLFFBQUlRLFVBQVUsR0FBZDs7QUFFQSxRQUFJZSxJQUFKLEVBQXFDO0FBQ25DZixnQkFBVSxHQUFHLDhCQUNYLDRDQURXLDRDQU1WRixDQUFELElBQWUsa0JBQWtCO0FBQUVDLGdCQUFRLEVBQTVCO0FBQWtCLE9BQWxCLFNBTmpCQyxRQUFhLENBQWJBOztBQVNBLFVBQUlBLFVBQVUsS0FBZCxJQUF1QjtBQUNyQixjQUFNd0gsYUFBYSxHQUFHLHFEQUNwQixrQkFDRXJJLE1BQU0sQ0FBTkEsbUJBQTBCO0FBQUVZLGtCQUFRLEVBRHRDO0FBQzRCLFNBQTFCWixDQURGLGdCQURGLFFBQXNCLENBQXRCLENBRHFCLENBU3JCO0FBQ0E7O0FBQ0EsWUFBSWlJLEtBQUssQ0FBTEEsU0FBSixhQUFJQSxDQUFKLEVBQW1DO0FBQ2pDbEMsZUFBSyxHQUFMQTtBQUNBbkYsa0JBQVEsR0FBUkE7QUFDQXVILGdCQUFNLENBQU5BO0FBQ0ExRSxhQUFHLEdBQUcsaUNBQU5BLE1BQU0sQ0FBTkE7QUFFSDtBQUNGO0FBQ0Q1Qzs7QUFBQUEsY0FBVSxHQUFHa0gsU0FBUyxDQUFDQyxXQUFXLENBQVosVUFBWSxDQUFaLEVBQTBCLEtBQWhEbkgsTUFBc0IsQ0FBdEJBOztBQUVBLFFBQUksK0JBQUosS0FBSSxDQUFKLEVBQTJCO0FBQ3pCLFlBQU15SCxRQUFRLEdBQUcsd0NBQWpCLFVBQWlCLENBQWpCO0FBQ0EsWUFBTXJFLFVBQVUsR0FBR3FFLFFBQVEsQ0FBM0I7QUFFQSxZQUFNQyxVQUFVLEdBQUcsK0JBQW5CLEtBQW1CLENBQW5CO0FBQ0EsWUFBTUMsVUFBVSxHQUFHLCtDQUFuQixVQUFtQixDQUFuQjtBQUNBLFlBQU1DLGlCQUFpQixHQUFHMUMsS0FBSyxLQUEvQjtBQUNBLFlBQU1sQixjQUFjLEdBQUc0RCxpQkFBaUIsR0FDcEMzRCxhQUFhLG9CQUR1QixLQUN2QixDQUR1QixHQUF4Qzs7QUFJQSxVQUFJLGVBQWdCMkQsaUJBQWlCLElBQUksQ0FBQzVELGNBQWMsQ0FBeEQsUUFBa0U7QUFDaEUsY0FBTTZELGFBQWEsR0FBRzFJLE1BQU0sQ0FBTkEsS0FBWXVJLFVBQVUsQ0FBdEJ2SSxlQUNuQm1FLEtBQUQsSUFBVyxDQUFDTSxLQUFLLENBRG5CLEtBQ21CLENBREd6RSxDQUF0Qjs7QUFJQSxZQUFJMEksYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLG9CQUEyQztBQUN6Q3pNLG1CQUFPLENBQVBBLEtBQ0csR0FDQ3dNLGlCQUFpQiwwQkFFWixpQ0FIUCw4QkFBQyxHQUtFLGVBQWNDLGFBQWEsQ0FBYkEsVUFObkJ6TTtBQVlGOztBQUFBLGdCQUFNLFVBQ0osQ0FBQ3dNLGlCQUFpQixHQUNiLDBCQUF5QmhGLEdBQUksb0NBQW1DaUYsYUFBYSxDQUFiQSxVQURuRCxvQ0FJYiw4QkFBNkJ6RSxVQUFXLDhDQUE2QzhCLEtBSjFGLFNBS0csNENBQ0MwQyxpQkFBaUIsaUNBRWIsc0JBVFYsRUFBTSxDQUFOO0FBYUg7QUFoQ0QsYUFnQ08sdUJBQXVCO0FBQzVCbkosVUFBRSxHQUFHLGlDQUNIVSxNQUFNLENBQU5BLHFCQUE0QjtBQUMxQlksa0JBQVEsRUFBRWlFLGNBQWMsQ0FERTtBQUUxQkosZUFBSyxFQUFFTyxrQkFBa0IsUUFBUUgsY0FBYyxDQUhuRHZGLE1BRzZCO0FBRkMsU0FBNUJVLENBREcsQ0FBTFY7QUFESyxhQU9BO0FBQ0w7QUFDQVUsY0FBTSxDQUFOQTtBQUVIO0FBRUQ1RTs7QUFBQUEsVUFBTSxDQUFOQTs7QUFFQSxRQUFJO0FBQ0YsWUFBTXVOLFNBQVMsR0FBRyxNQUFNLDhDQUF4QixPQUF3QixDQUF4QjtBQU9BLFVBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUosVUFSRSxDQVVGOztBQUNBLFVBQ0UsQ0FBQ3pCLE9BQU8sSUFBUixxQkFFQ2pILEtBQUQsQ0FGQSxhQUdDQSxLQUFELFVBQUNBLENBSkgsY0FLRTtBQUNBLGNBQU0ySSxXQUFXLEdBQUkzSSxLQUFELFVBQUNBLENBQXJCLGFBREEsQ0FHQTtBQUNBO0FBQ0E7O0FBQ0EsWUFBSTJJLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CLGdCQUFNQyxVQUFVLEdBQUcsd0NBQW5CLFdBQW1CLENBQW5COztBQUNBOztBQUVBLGNBQUlaLEtBQUssQ0FBTEEsU0FBZVksVUFBVSxDQUE3QixRQUFJWixDQUFKLEVBQXlDO0FBQ3ZDLG1CQUFPLHNEQUFQLE9BQU8sQ0FBUDtBQU9IO0FBRUQzSjs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8sWUFBWSxNQUFNLENBQXpCLENBQU8sQ0FBUDtBQUdGbEQ7O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQSxvQ0FHRXlNLFNBQVMsS0FBSyxLQUFMLFFBQWtCLEtBSDdCLGFBR1csQ0FIWDs7QUFPQSxnQkFBMkM7QUFDekMsY0FBTWlCLE9BQVksR0FBRyx5QkFBckI7QUFDRXhLLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBd0ssT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVILFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNySztBQUtKOztBQUFBLFlBQU0sNkRBQ0h6QyxDQUFELElBQU87QUFDTCxZQUFJQSxDQUFDLENBQUwsV0FBaUJYLEtBQUssR0FBR0EsS0FBSyxJQUE5QixDQUFpQkEsQ0FBakIsS0FDSztBQUhULE9BQU0sQ0FBTjs7QUFPQSxpQkFBVztBQUNURSxjQUFNLENBQU5BO0FBQ0E7QUFHRjs7QUFBQSxVQUFJd0csS0FBSixFQUEyQyxFQUszQ3hHOztBQUFBQSxZQUFNLENBQU5BO0FBRUE7QUFDQSxLQTNFRixDQTJFRSxZQUFZO0FBQ1osVUFBSTRELEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUVGOztBQUFBO0FBRUg7QUFFRCtKOztBQUFBQSxhQUFXLGtCQUlUL0IsT0FBMEIsR0FKakIsSUFLSDtBQUNOLGNBQTJDO0FBQ3pDLFVBQUksT0FBTzFJLE1BQU0sQ0FBYixZQUFKLGFBQTJDO0FBQ3pDckMsZUFBTyxDQUFQQTtBQUNBO0FBR0Y7O0FBQUEsVUFBSSxPQUFPcUMsTUFBTSxDQUFOQSxRQUFQLE1BQU9BLENBQVAsS0FBSixhQUFtRDtBQUNqRHJDLGVBQU8sQ0FBUEEsTUFBZSwyQkFBMEJtTSxNQUF6Q25NO0FBQ0E7QUFFSDtBQUVEOztBQUFBLFFBQUltTSxNQUFNLEtBQU5BLGVBQTBCLHlCQUE5QixJQUErQztBQUM3QyxzQkFBZ0JwQixPQUFPLENBQXZCO0FBQ0EsWUFBTSxDQUFOLGdCQUNFO0FBQUE7QUFBQTtBQUFBO0FBSUVnQyxXQUFHLEVBTFA7QUFDRSxPQURGLEVBT0U7QUFDQTtBQUNBO0FBVEY7QUFjSDtBQUVEOztBQUFBLFFBQU1DLG9CQUFOLDBDQU02QjtBQUMzQixRQUFJakssR0FBRyxDQUFQLFdBQW1CO0FBQ2pCO0FBQ0E7QUFHRjs7QUFBQSxRQUFJbUcsZUFBZSxJQUFmQSxPQUFKLGVBQTZDO0FBQzNDL0osWUFBTSxDQUFOQSx5Q0FEMkMsQ0FHM0M7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQWtELFlBQU0sQ0FBTkEsbUJBVDJDLENBVzNDO0FBQ0E7O0FBQ0EsWUFBTTRLLHNCQUFOO0FBR0Y7O0FBQUEsUUFBSTtBQUNGLFlBQU07QUFBRUMsWUFBSSxFQUFOO0FBQUE7QUFBQSxVQUFtQyxNQUFNLG9CQUEvQyxTQUErQyxDQUEvQztBQUdBLFlBQU1SLFNBQTJCLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFJbEN6TixhQUFLLEVBSlA7QUFBb0MsT0FBcEM7O0FBT0EsVUFBSTtBQUNGeU4saUJBQVMsQ0FBVEEsUUFBa0IsTUFBTSxnQ0FBZ0M7QUFBQTtBQUFBO0FBQXhEQTtBQUF3RCxTQUFoQyxDQUF4QkE7QUFLQSxPQU5GLENBTUUsZUFBZTtBQUNmMU0sZUFBTyxDQUFQQTtBQUNBME0saUJBQVMsQ0FBVEE7QUFHRjs7QUFBQTtBQUNBLEtBdkJGLENBdUJFLHFCQUFxQjtBQUNyQixhQUFPLDZEQUFQLElBQU8sQ0FBUDtBQUVIO0FBRUQ7O0FBQUEsUUFBTVMsWUFBTiw2QkFLRS9JLE9BQWdCLEdBTGxCLE9BTTZCO0FBQzNCLFFBQUk7QUFDRixZQUFNZ0osZUFBZSxHQUFHLGdCQUF4QixLQUF3QixDQUF4Qjs7QUFFQSxVQUFJaEosT0FBTyxJQUFQQSxtQkFBOEIsZUFBbEMsT0FBd0Q7QUFDdEQ7QUFHRjs7QUFBQSxZQUFNc0ksU0FBMkIsR0FBR1UsZUFBZSxxQkFFL0MsTUFBTSxnQ0FBaUM1RCxHQUFELEtBQVU7QUFDOUM0QixpQkFBUyxFQUFFNUIsR0FBRyxDQURnQztBQUU5Q3dCLG1CQUFXLEVBQUV4QixHQUFHLENBRjhCO0FBRzlDeUIsZUFBTyxFQUFFekIsR0FBRyxDQUFIQSxJQUhxQztBQUk5QzJCLGVBQU8sRUFBRTNCLEdBQUcsQ0FBSEEsSUFOZjtBQUVvRCxPQUFWLENBQWhDLENBRlY7QUFTQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUI2RCxtQkFBTyxDQUF0QyxvRUFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDQyxrQkFBa0IsQ0FBdkIsU0FBdUIsQ0FBdkIsRUFBb0M7QUFDbEMsZ0JBQU0sVUFDSCx5REFBd0QzSSxRQUQzRCxHQUFNLENBQU47QUFJSDtBQUVEOztBQUFBOztBQUVBLFVBQUlzRyxPQUFPLElBQVgsU0FBd0I7QUFDdEJzQyxnQkFBUSxHQUFHLDRCQUNULGlDQUFxQjtBQUFBO0FBRFo7QUFDWSxTQUFyQixDQURTLEVBRVR4QixXQUFXLENBRkYsRUFFRSxDQUZGLFdBSVQsS0FKUyxRQUtULEtBTEZ3QixhQUFXLENBQVhBO0FBU0Y7O0FBQUEsWUFBTXZKLEtBQUssR0FBRyxNQUFNLGNBQWdDLE1BQ2xEaUgsT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRXBCLGNBQU0sRUFYaEI7QUFRUSxPQUhGLENBTGMsQ0FBcEI7QUFnQkEyQyxlQUFTLENBQVRBO0FBQ0E7QUFDQTtBQUNBLEtBMURGLENBMERFLFlBQVk7QUFDWixhQUFPLGdEQUFQLEVBQU8sQ0FBUDtBQUVIO0FBRURjOztBQUFBQSxLQUFHLG1DQU1jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sWUFBUCxJQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7QUFJQUMsZ0JBQWMsS0FBNkI7QUFDekM7QUFHRkM7O0FBQUFBLGlCQUFlLEtBQXNCO0FBQ25DLFFBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2xCLFVBQU0sMEJBQTBCLGtCQUFoQyxHQUFnQyxDQUFoQztBQUNBLFVBQU0sMEJBQTBCckssRUFBRSxDQUFGQSxNQUFoQyxHQUFnQ0EsQ0FBaEMsQ0FIbUMsQ0FLbkM7O0FBQ0EsUUFBSXNLLE9BQU8sSUFBSUMsWUFBWSxLQUF2QkQsZ0JBQTRDRSxPQUFPLEtBQXZELFNBQXFFO0FBQ25FO0FBR0YsS0FWbUMsQ0FVbkM7OztBQUNBLFFBQUlELFlBQVksS0FBaEIsY0FBbUM7QUFDakM7QUFHRixLQWZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0MsT0FBTyxLQUFkO0FBR0ZDOztBQUFBQSxjQUFZLEtBQW1CO0FBQzdCLFVBQU0sV0FBV3pLLEVBQUUsQ0FBRkEsTUFBakIsR0FBaUJBLENBQWpCLENBRDZCLENBRTdCOztBQUNBLFFBQUl5RixJQUFJLEtBQVIsSUFBaUI7QUFDZnpHLFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBUjZCLENBUTdCOzs7QUFDQSxVQUFNMEwsSUFBSSxHQUFHdkssUUFBUSxDQUFSQSxlQUFiLElBQWFBLENBQWI7O0FBQ0EsY0FBVTtBQUNSdUssVUFBSSxDQUFKQTtBQUNBO0FBRUYsS0FkNkIsQ0FjN0I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHeEssUUFBUSxDQUFSQSx3QkFBZixDQUFlQSxDQUFmOztBQUNBLGdCQUFZO0FBQ1Z3SyxZQUFNLENBQU5BO0FBRUg7QUFFREM7O0FBQUFBLFVBQVEsU0FBMEI7QUFDaEMsV0FBTyxnQkFBUDtBQUdGQzs7QUFBQUEsY0FBWSxvQkFBeUNDLGFBQWEsR0FBdEQsTUFBK0Q7QUFDekUsVUFBTTtBQUFBO0FBQUEsUUFBTjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUdwQyxXQUFXLENBQWQsUUFBYyxDQUFkLEdBRG5DLFFBQ0UsQ0FEb0IsQ0FBdEI7O0FBSUEsUUFBSXFDLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixLQVZ5RSxDQVV6RTs7O0FBQ0EsUUFBSSxDQUFDcEMsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsV0FBSyxDQUFMQSxLQUFZa0IsSUFBRCxJQUFVO0FBQ25CLFlBQ0Usd0NBQ0EsNkNBRkYsYUFFRSxDQUZGLEVBR0U7QUFDQU4sb0JBQVUsQ0FBVkEsV0FBc0J1QixhQUFhLEdBQUcvRSxXQUFXLENBQWQsSUFBYyxDQUFkLEdBQW5Dd0Q7QUFDQTtBQUVIO0FBUkRaO0FBVUY7O0FBQUE7QUFHRjtBQUFBOzs7OztBQU1BOzs7QUFBQSxRQUFNMUgsUUFBTixNQUVFeUYsTUFBYyxHQUZoQixLQUdFZ0IsT0FBd0IsR0FIMUIsSUFJaUI7QUFDZixRQUFJbUIsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBLFFBQUo7QUFFQSxVQUFNRixLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFFQUUsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ3ZILGNBQVEsR0FBR3VILE1BQU0sQ0FBakJ2SDtBQUNBNkMsU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0FkZSxDQWNmOzs7QUFDQSxjQUEyQztBQUN6QztBQUdGOztBQUFBLFVBQU1zQyxLQUFLLEdBQUcscURBQWQsUUFBYyxDQUFkO0FBQ0EsVUFBTTFMLE9BQU8sQ0FBUEEsSUFBWSxDQUNoQiwwQ0FHRSxLQUhGLFFBSUUsS0FMYyxhQUNoQixDQURnQixFQU9oQixnQkFBZ0IyTSxPQUFPLENBQVBBLHdCQUFoQixZQVBGLEtBT0UsQ0FQZ0IsQ0FBWjNNLENBQU47QUFXRjs7QUFBQSxRQUFNaVEsY0FBTixRQUE0RDtBQUMxRCxRQUFJaEgsU0FBUyxHQUFiOztBQUNBLFVBQU1pSCxNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9CakgsZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU1rSCxlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNdFAsS0FBVSxHQUFHLFVBQ2hCLHdDQUF1QzZLLEtBRDFDLEdBQW1CLENBQW5CO0FBR0E3SyxXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJcVAsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQTtBQUdGRTs7QUFBQUEsVUFBUSxLQUFzQztBQUM1QyxRQUFJbkgsU0FBUyxHQUFiOztBQUNBLFVBQU1pSCxNQUFNLEdBQUcsTUFBTTtBQUNuQmpILGVBQVMsR0FBVEE7QUFERjs7QUFHQTtBQUNBLFdBQU9vSCxFQUFFLEdBQUZBLEtBQVdwUixJQUFELElBQVU7QUFDekIsVUFBSWlSLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNdkwsR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU8wTCxDQUFQO0FBZUZDOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUUxTCxVQUFJLEVBQU47QUFBQSxRQUFxQixrQkFBa0JYLE1BQU0sQ0FBTkEsU0FBN0MsSUFBMkIsQ0FBM0I7O0FBQ0EsUUFBSXNELEtBQUosRUFBaUUsRUFHakU7O0FBQUEsV0FBT2dKLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUEwQ3RSLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT3NSLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGN0g7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFc0UsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU15RCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdERyTyxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRnNPOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWjVQLFlBQU0sQ0FBTkEsZ0NBQXVDOE4sc0JBQXZDOU47QUFDQTtBQUNBO0FBRUg7QUFFRDZQOztBQUFBQSxRQUFNLE9BQXdDO0FBQzVDLFdBQU8sZUFBZSx5QkFBdEIsU0FBTyxDQUFQO0FBejNCOEM7O0FBQUE7OztBQUE3QjdQLE0sQ0EyQlptTCxNQTNCWW5MLEdBMkJVLG9CQTNCVkEsQzs7Ozs7Ozs7Ozs7Ozs7O3dDQ2xWckI7O0FBQ2UsdUNBQXVEO0FBQ3BFLFNBQU84UCxPQUFPLENBQVBBLGtCQUEyQkMsSUFBRCxJQUFrQkMsa0JBQWtCLENBQXJFLElBQXFFLENBQTlERixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4QkEsQyxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUcsZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUkzSyxRQUFRLEdBQUcySyxNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJeEcsSUFBSSxHQUFHd0csTUFBTSxDQUFOQSxRQUFYO0FBQ0EsTUFBSTlHLEtBQUssR0FBRzhHLE1BQU0sQ0FBTkEsU0FBWjtBQUNBLE1BQUlDLElBQW9CLEdBQXhCO0FBRUFDLE1BQUksR0FBR0EsSUFBSSxHQUFHTCxrQkFBa0IsQ0FBbEJBLElBQWtCLENBQWxCQSx3QkFBSCxNQUFYSzs7QUFFQSxNQUFJRixNQUFNLENBQVYsTUFBaUI7QUFDZkMsUUFBSSxHQUFHQyxJQUFJLEdBQUdGLE1BQU0sQ0FBcEJDO0FBREYsU0FFTyxjQUFjO0FBQ25CQSxRQUFJLEdBQUdDLElBQUksSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQUQsR0FBQ0EsQ0FBRCxHQUEwQixJQUFHQSxRQUE3QixNQUFmRixRQUFXLENBQVhBOztBQUNBLFFBQUlELE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxVQUFJLElBQUksTUFBTUQsTUFBTSxDQUFwQkM7QUFFSDtBQUVEOztBQUFBLE1BQUkvRyxLQUFLLElBQUksaUJBQWIsVUFBd0M7QUFDdENBLFNBQUssR0FBR2tILE1BQU0sQ0FBQ0MsV0FBVyxDQUFYQSx1QkFBZm5ILEtBQWVtSCxDQUFELENBQWRuSDtBQUdGOztBQUFBLE1BQUlvSCxNQUFNLEdBQUdOLE1BQU0sQ0FBTkEsVUFBa0I5RyxLQUFLLElBQUssSUFBR0EsS0FBL0I4RyxNQUFiO0FBRUEsTUFBSUQsUUFBUSxJQUFJQSxRQUFRLENBQVJBLE9BQWdCLENBQWhCQSxPQUFoQixLQUE2Q0EsUUFBUSxJQUFSQTs7QUFFN0MsTUFDRUMsTUFBTSxDQUFOQSxXQUNDLENBQUMsYUFBYUYsZ0JBQWdCLENBQWhCQSxLQUFkLFFBQWNBLENBQWQsS0FBa0RHLElBQUksS0FGekQsT0FHRTtBQUNBQSxRQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFuQkEsRUFBTyxDQUFQQTtBQUNBLFFBQUk1SyxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsQ0FBUSxDQUFSQSxLQUFoQixLQUFxQ0EsUUFBUSxHQUFHLE1BQVhBO0FBTHZDLFNBTU8sSUFBSSxDQUFKLE1BQVc7QUFDaEI0SyxRQUFJLEdBQUpBO0FBR0Y7O0FBQUEsTUFBSXpHLElBQUksSUFBSUEsSUFBSSxDQUFKQSxDQUFJLENBQUpBLEtBQVosS0FBNkJBLElBQUksR0FBRyxNQUFQQTtBQUM3QixNQUFJOEcsTUFBTSxJQUFJQSxNQUFNLENBQU5BLENBQU0sQ0FBTkEsS0FBZCxLQUFpQ0EsTUFBTSxHQUFHLE1BQVRBO0FBRWpDakwsVUFBUSxHQUFHQSxRQUFRLENBQVJBLGlCQUFYQSxrQkFBV0EsQ0FBWEE7QUFDQWlMLFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxhQUFUQSxLQUFTQSxDQUFUQTtBQUVBLFNBQVEsR0FBRVAsUUFBUyxHQUFFRSxJQUFLLEdBQUU1SyxRQUFTLEdBQUVpTCxNQUFPLEdBQUU5RyxJQUFoRDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozt5Q0N4RUQ7O0FBQ0EsTUFBTStHLFVBQVUsR0FBaEI7O0FBRU8sK0JBQWdEO0FBQ3JELFNBQU9BLFVBQVUsQ0FBVkEsS0FBUCxLQUFPQSxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBSUE7Ozs7Ozs7QUFNTyxxQ0FBc0Q7QUFDM0QsUUFBTUMsWUFBWSxHQUFHdEgsSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixhQVJKLFlBUUksQ0FSSjs7QUFTQSxNQUNFdUgsTUFBTSxLQUFLRixVQUFVLENBQXJCRSxVQUNDWCxRQUFRLEtBQVJBLFdBQXdCQSxRQUFRLEtBRm5DLFVBR0U7QUFDQSxVQUFNLFVBQU4saUNBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMN0csU0FBSyxFQUFFLHlDQUZGLFlBRUUsQ0FGRjtBQUFBO0FBQUE7QUFLTHhGLFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXOE0sVUFBVSxDQUFWQSxPQUxuQixNQUtROU07QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPOztBQUFBLE1BQU1pTixjQUNjLEdBQUc7QUFDNUJDLFdBQVMsRUFEbUI7QUFFNUJDLFdBQVMsRUFISjtBQUN1QixDQUR2Qjs7O0FBTUEsTUFBTUMseUJBQ2MsbUNBQUcsY0FBSDtBQUV6QkMsUUFBTSxFQUhEO0FBQ29CLEVBRHBCOzs7O2VBTVEsQ0FBQ0MsV0FBVyxHQUFaLFVBQXlCO0FBQ3RDLFNBQVE3SyxJQUFELElBQWtCO0FBQ3ZCLFVBQU04SyxJQUF3QixHQUE5QjtBQUNBLFVBQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFaQSx5QkFHbkJILFdBQVcsK0JBSGIsY0FBcUJHLENBQXJCO0FBS0EsVUFBTUMsT0FBTyxHQUFHRCxZQUFZLENBQVpBLCtCQUFoQixJQUFnQkEsQ0FBaEI7QUFFQSxXQUFPLHNCQUF1RDtBQUM1RCxZQUFNakgsR0FBRyxHQUFHN0UsUUFBUSxJQUFSQSxlQUEyQitMLE9BQU8sQ0FBOUMsUUFBOEMsQ0FBOUM7O0FBQ0EsVUFBSSxDQUFKLEtBQVU7QUFDUjtBQUdGOztBQUFBLHVCQUFpQjtBQUNmLGFBQUssTUFBTCxhQUF3QjtBQUN0QjtBQUNBO0FBQ0EsY0FBSSxPQUFPaE4sR0FBRyxDQUFWLFNBQUosVUFBa0M7QUFDaEMsbUJBQVE4RixHQUFHLENBQUosTUFBQ0EsQ0FBbUI5RixHQUFHLENBQTlCLElBQVE4RixDQUFSO0FBRUg7QUFDRjtBQUVEOztBQUFBLDZDQUFPLE1BQVAsR0FBdUJBLEdBQUcsQ0FBMUI7QUFoQkY7QUFURjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZTs7QUFBQSx1RkFNYjtBQUNBLE1BQUltSCxpQkFLbUMsR0FMdkM7O0FBT0EsTUFBSWhFLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CZ0UscUJBQWlCLEdBQUcsd0NBQXBCQSxXQUFvQixDQUFwQkE7QUFERixTQUVPO0FBQ0wsVUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVNGLFFBVEosV0FTSSxDQVRKO0FBV0FBLHFCQUFpQixHQUFHO0FBQUE7QUFFbEJuSSxXQUFLLEVBQUUseUNBRlcsWUFFWCxDQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQm1JO0FBQW9CLEtBQXBCQTtBQVlGOztBQUFBLFFBQU1DLFNBQVMsR0FBR0QsaUJBQWlCLENBQW5DO0FBQ0EsUUFBTUUsUUFBUSxHQUFJLEdBQUVGLGlCQUFpQixDQUFDaE0sUUFBVSxHQUM5Q2dNLGlCQUFpQixDQUFqQkEsUUFBMEIsRUFENUI7QUFHQSxRQUFNRyxpQkFBcUMsR0FBM0M7QUFDQUwsY0FBWSxDQUFaQTtBQUVBLFFBQU1NLGNBQWMsR0FBR0QsaUJBQWlCLENBQWpCQSxJQUF1QnBOLEdBQUQsSUFBU0EsR0FBRyxDQUF6RCxJQUF1Qm9OLENBQXZCO0FBRUEsTUFBSUUsbUJBQW1CLEdBQUcsWUFBWSxDQUFaLGtCQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFFQyxZQUFRLEVBUlo7QUFRRSxHQVJ3QixDQUExQjtBQVVBLGFBckRBLENBdURBOztBQUNBLE9BQUssTUFBTSxNQUFYLFVBQVcsQ0FBWCxJQUFnQ2xOLE1BQU0sQ0FBTkEsUUFBaEMsU0FBZ0NBLENBQWhDLEVBQTJEO0FBQ3pELFFBQUlsRyxLQUFLLEdBQUcrSSxLQUFLLENBQUxBLHNCQUE0QnNLLFVBQVUsQ0FBdEN0SyxDQUFzQyxDQUF0Q0EsR0FBWjs7QUFDQSxlQUFXO0FBQ1Q7QUFDQTtBQUNBL0ksV0FBSyxHQUFJLElBQUdBLEtBQVpBO0FBQ0EsWUFBTXNULGFBQWEsR0FBR1YsWUFBWSxDQUFaQSxlQUE0QjtBQUFFUSxnQkFBUSxFQUE1RDtBQUFrRCxPQUE1QlIsQ0FBdEI7QUFDQTVTLFdBQUssR0FBR3NULGFBQWEsQ0FBYkEsTUFBYSxDQUFiQSxRQUFSdFQsQ0FBUXNULENBQVJ0VDtBQUVGK1M7O0FBQUFBLGFBQVMsQ0FBVEEsR0FBUyxDQUFUQTtBQUdGLEdBcEVBLENBb0VBO0FBQ0E7OztBQUNBLFFBQU1RLFNBQVMsR0FBR3JOLE1BQU0sQ0FBTkEsS0FBbEIsTUFBa0JBLENBQWxCOztBQUVBLE1BQ0VzTixtQkFBbUIsSUFDbkIsQ0FBQ0QsU0FBUyxDQUFUQSxLQUFnQjFOLEdBQUQsSUFBU3FOLGNBQWMsQ0FBZEEsU0FGM0IsR0FFMkJBLENBQXhCSyxDQUZILEVBR0U7QUFDQSxTQUFLLE1BQUwsa0JBQTZCO0FBQzNCLFVBQUksRUFBRTFOLEdBQUcsSUFBVCxTQUFJLENBQUosRUFBeUI7QUFDdkJrTixpQkFBUyxDQUFUQSxHQUFTLENBQVRBLEdBQWlCM0ksTUFBTSxDQUF2QjJJLEdBQXVCLENBQXZCQTtBQUVIO0FBQ0Y7QUFFRDs7QUFBQSxRQUFNVSxpQkFBaUIsR0FBRzNFLFdBQVcsQ0FBWEEsbUJBQTFCOztBQUVBLE1BQUk7QUFDRjRFLFVBQU0sR0FBSSxHQUFFRCxpQkFBaUIsY0FBYyxFQUFHLEdBQUVOLG1CQUFtQixRQUFuRU87QUFJQSxVQUFNLG1CQUFtQkEsTUFBTSxDQUFOQSxNQUF6QixHQUF5QkEsQ0FBekI7QUFDQVoscUJBQWlCLENBQWpCQTtBQUNBQSxxQkFBaUIsQ0FBakJBLE9BQTBCLEdBQUU3SCxJQUFJLFNBQVMsRUFBRyxHQUFFQSxJQUFJLElBQUksRUFBdEQ2SDtBQUNBLFdBQU9BLGlCQUFpQixDQUF4QjtBQUNBLEdBVEYsQ0FTRSxZQUFZO0FBQ1osUUFBSTVOLEdBQUcsQ0FBSEEsY0FBSiw4Q0FBSUEsQ0FBSixFQUF1RTtBQUNyRSxZQUFNLFVBQU4sd0tBQU0sQ0FBTjtBQUlGOztBQUFBO0FBR0YsR0F2R0EsQ0F1R0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBNE4sbUJBQWlCLENBQWpCQSx3Q0FBMEIsS0FBMUJBLEdBRUtBLGlCQUFpQixDQUZ0QkE7QUFLQSxTQUFPO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hNLDhDQUVXO0FBQ2hCLFFBQU1uSSxLQUFxQixHQUEzQjtBQUNBZ0osY0FBWSxDQUFaQSxRQUFxQixnQkFBZ0I7QUFDbkMsUUFBSSxPQUFPaEosS0FBSyxDQUFaLEdBQVksQ0FBWixLQUFKLGFBQXVDO0FBQ3JDQSxXQUFLLENBQUxBLEdBQUssQ0FBTEE7QUFERixXQUVPLElBQUk1QixLQUFLLENBQUxBLFFBQWM0QixLQUFLLENBQXZCLEdBQXVCLENBQW5CNUIsQ0FBSixFQUErQjtBQUNwQztBQUFFNEIsV0FBSyxDQUFOLEdBQU0sQ0FBTEEsQ0FBRCxJQUFDQSxDQUFELEtBQUNBO0FBREcsV0FFQTtBQUNMQSxXQUFLLENBQUxBLEdBQUssQ0FBTEEsR0FBYSxDQUFDQSxLQUFLLENBQU4sR0FBTSxDQUFOLEVBQWJBLEtBQWEsQ0FBYkE7QUFFSDtBQVJEZ0o7QUFTQTtBQUdGOztBQUFBLHVDQUF1RDtBQUNyRCxNQUNFLDZCQUNDLDZCQUE2QixDQUFDQyxLQUFLLENBRHBDLEtBQ29DLENBRHBDLElBRUEsaUJBSEYsV0FJRTtBQUNBLFdBQU8vQixNQUFNLENBQWIsS0FBYSxDQUFiO0FBTEYsU0FNTztBQUNMO0FBRUg7QUFFTTs7QUFBQSwwQ0FFWTtBQUNqQixRQUFNelIsTUFBTSxHQUFHLElBQWYsZUFBZSxFQUFmO0FBQ0E4RixRQUFNLENBQU5BLDBCQUFpQyxDQUFDLE1BQUQsS0FBQyxDQUFELEtBQWtCO0FBQ2pELFFBQUk2QyxLQUFLLENBQUxBLFFBQUosS0FBSUEsQ0FBSixFQUEwQjtBQUN4Qi9JLFdBQUssQ0FBTEEsUUFBZTZULElBQUQsSUFBVXpULE1BQU0sQ0FBTkEsWUFBbUIwVCxzQkFBc0IsQ0FBakU5VCxJQUFpRSxDQUF6Q0ksQ0FBeEJKO0FBREYsV0FFTztBQUNMSSxZQUFNLENBQU5BLFNBQWdCMFQsc0JBQXNCLENBQXRDMVQsS0FBc0MsQ0FBdENBO0FBRUg7QUFORDhGO0FBT0E7QUFHSzs7QUFBQSx3QkFFTCxHQUZLLGtCQUdZO0FBQ2pCNk4sa0JBQWdCLENBQWhCQSxRQUEwQkosWUFBRCxJQUFrQjtBQUN6QzVLLFNBQUssQ0FBTEEsS0FBVzRLLFlBQVksQ0FBdkI1SyxJQUFXNEssRUFBWDVLLFVBQXlDbEQsR0FBRCxJQUFTN0QsTUFBTSxDQUFOQSxPQUFqRCtHLEdBQWlEL0csQ0FBakQrRztBQUNBNEssZ0JBQVksQ0FBWkEsUUFBcUIsZ0JBQWdCM1IsTUFBTSxDQUFOQSxZQUFyQzJSLEtBQXFDM1IsQ0FBckMyUjtBQUZGSTtBQUlBO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOztBQUFBLE1BQU1DLGtCQUFrQixHQUFHLHdCQUEzQixJQUEyQixDQUEzQjs7QUFFZSxnRkFPYjtBQUNBLE1BQUksQ0FBQzdGLEtBQUssQ0FBTEEsU0FBTCxNQUFLQSxDQUFMLEVBQTZCO0FBQzNCLFNBQUssTUFBTCxxQkFBZ0M7QUFDOUIsWUFBTTBFLE9BQU8sR0FBR21CLGtCQUFrQixDQUFDQyxPQUFPLENBQTFDLE1BQWtDLENBQWxDO0FBQ0EsWUFBTTdKLE1BQU0sR0FBR3lJLE9BQU8sQ0FBdEIsTUFBc0IsQ0FBdEI7O0FBRUEsa0JBQVk7QUFDVixZQUFJLENBQUNvQixPQUFPLENBQVosYUFBMEI7QUFDeEI7QUFDQTtBQUVGOztBQUFBLGNBQU1DLE9BQU8sR0FBRyxpQ0FDZEQsT0FBTyxDQURPLGtDQUtkQSxPQUFPLENBQVBBLDBCQUxGLFFBQWdCLENBQWhCO0FBT0EvSCxjQUFNLEdBQUdnSSxPQUFPLENBQVBBLGtCQUFUaEk7QUFDQWhHLGNBQU0sQ0FBTkEsY0FBcUJnTyxPQUFPLENBQVBBLGtCQUFyQmhPOztBQUVBLFlBQUlpSSxLQUFLLENBQUxBLFNBQWUscURBQW5CLE1BQW1CLENBQWZBLENBQUosRUFBcUQ7QUFDbkQ7QUFDQTtBQUNBO0FBR0YsU0FyQlUsQ0FxQlY7OztBQUNBLGNBQU1oRCxZQUFZLEdBQUdLLFdBQVcsQ0FBaEMsTUFBZ0MsQ0FBaEM7O0FBRUEsWUFBSUwsWUFBWSxLQUFaQSxVQUEyQmdELEtBQUssQ0FBTEEsU0FBL0IsWUFBK0JBLENBQS9CLEVBQTZEO0FBQzNEO0FBRUg7QUFDRjtBQUNGO0FBQ0Q7O0FBQUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xETSxxQ0FBdUU7QUFDNUUsUUFBTTtBQUFBO0FBQUE7QUFBQSxNQUFOO0FBQ0EsU0FBUXJILFFBQUQsSUFBeUM7QUFDOUMsVUFBTTRILFVBQVUsR0FBR3lGLEVBQUUsQ0FBRkEsS0FBbkIsUUFBbUJBLENBQW5COztBQUNBLFFBQUksQ0FBSixZQUFpQjtBQUNmO0FBR0Y7O0FBQUEsVUFBTUMsTUFBTSxHQUFJL0osS0FBRCxJQUFtQjtBQUNoQyxVQUFJO0FBQ0YsZUFBT2dLLGtCQUFrQixDQUF6QixLQUF5QixDQUF6QjtBQUNBLE9BRkYsQ0FFRSxVQUFVO0FBQ1YsY0FBTW5QLEdBQThCLEdBQUcsVUFBdkMsd0JBQXVDLENBQXZDO0FBR0FBLFdBQUcsQ0FBSEE7QUFDQTtBQUVIO0FBVkQ7O0FBV0EsVUFBTWtGLE1BQWtELEdBQXhEO0FBRUFsRSxVQUFNLENBQU5BLHFCQUE2Qm9PLFFBQUQsSUFBc0I7QUFDaEQsWUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQWhCLFFBQWdCLENBQWhCO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHL0YsVUFBVSxDQUFDNkYsQ0FBQyxDQUF0QixHQUFvQixDQUFwQjs7QUFDQSxVQUFJRSxDQUFDLEtBQUwsV0FBcUI7QUFDbkJySyxjQUFNLENBQU5BLFFBQU0sQ0FBTkEsR0FBbUIsQ0FBQ3FLLENBQUMsQ0FBREEsUUFBRCxHQUFDQSxDQUFELEdBQ2ZBLENBQUMsQ0FBREEsZUFBa0I3UCxLQUFELElBQVd3UCxNQUFNLENBRG5CLEtBQ21CLENBQWxDSyxDQURlLEdBRWZGLENBQUMsQ0FBREEsU0FDQSxDQUFDSCxNQUFNLENBRFBHLENBQ08sQ0FBUCxDQURBQSxHQUVBSCxNQUFNLENBSlZoSyxDQUlVLENBSlZBO0FBTUg7QUFWRGxFO0FBV0E7QUE5QkY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7O3VDQzlCRDtBQUNBOztBQUNBLDBCQUFrQztBQUNoQyxTQUFPd08sR0FBRyxDQUFIQSxnQ0FBUCxNQUFPQSxDQUFQO0FBR0Y7O0FBQUEsK0JBQXVDO0FBQ3JDLFFBQU1sSyxRQUFRLEdBQUdILEtBQUssQ0FBTEEsbUJBQXlCQSxLQUFLLENBQUxBLFNBQTFDLEdBQTBDQSxDQUExQzs7QUFDQSxnQkFBYztBQUNaQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsU0FBZSxDQUF2QkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxRQUFNRSxNQUFNLEdBQUdGLEtBQUssQ0FBTEEsV0FBZixLQUFlQSxDQUFmOztBQUNBLGNBQVk7QUFDVkEsU0FBSyxHQUFHQSxLQUFLLENBQUxBLE1BQVJBLENBQVFBLENBQVJBO0FBRUY7O0FBQUEsU0FBTztBQUFFeEUsT0FBRyxFQUFMO0FBQUE7QUFBUDtBQUFPLEdBQVA7QUFHSzs7QUFBQSx3Q0FPTDtBQUNBLFFBQU04TyxRQUFRLEdBQUcsQ0FBQ0MsZUFBZSxDQUFmQSxzQkFBRCxvQkFBakIsR0FBaUIsQ0FBakI7QUFJQSxRQUFNSixNQUFzQyxHQUE1QztBQUNBLE1BQUlLLFVBQVUsR0FBZDtBQUNBLFFBQU1DLGtCQUFrQixHQUFHSCxRQUFRLENBQVJBLElBQ25CdkQsT0FBRCxJQUFhO0FBQ2hCLFFBQUlBLE9BQU8sQ0FBUEEsbUJBQTJCQSxPQUFPLENBQVBBLFNBQS9CLEdBQStCQSxDQUEvQixFQUFzRDtBQUNwRCxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNEIyRCxjQUFjLENBQUMzRCxPQUFPLENBQVBBLFNBQWlCLENBQWxFLENBQWlEQSxDQUFELENBQWhEO0FBQ0FvRCxZQUFNLENBQU5BLEdBQU0sQ0FBTkEsR0FBYztBQUFFUSxXQUFHLEVBQUVILFVBQVA7QUFBQTtBQUFkTDtBQUFjLE9BQWRBO0FBQ0EsYUFBT2pLLE1BQU0sR0FBSUMsUUFBUSxtQkFBWixXQUFiO0FBSEYsV0FJTztBQUNMLGFBQVEsSUFBR3lLLFdBQVcsU0FBdEI7QUFFSDtBQVR3Qk4sVUFBM0IsRUFBMkJBLENBQTNCLENBUEEsQ0FtQkE7QUFDQTs7QUFDQSxZQUFtQztBQUNqQyxRQUFJTyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxrQkFBa0IsR0FBdEIsRUFGaUMsQ0FJakM7O0FBQ0EsVUFBTUMsZUFBZSxHQUFHLE1BQU07QUFDNUIsVUFBSUMsUUFBUSxHQUFaOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQWpCLG9CQUF3Q0EsQ0FBeEMsSUFBNkM7QUFDM0NELGdCQUFRLElBQUl4RCxNQUFNLENBQU5BLGFBQVp3RCxnQkFBWXhELENBQVp3RDtBQUNBSCx3QkFBZ0I7O0FBRWhCLFlBQUlBLGdCQUFnQixHQUFwQixLQUE0QjtBQUMxQkMsNEJBQWtCO0FBQ2xCRCwwQkFBZ0IsR0FBaEJBO0FBRUg7QUFDRDs7QUFBQTtBQVpGOztBQWVBLFVBQU1LLFNBQXNDLEdBQTVDO0FBRUEsUUFBSUMsdUJBQXVCLEdBQUdiLFFBQVEsQ0FBUkEsSUFDdEJ2RCxPQUFELElBQWE7QUFDaEIsVUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELGNBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE0QjJELGNBQWMsQ0FBQzNELE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQsQ0FEb0QsQ0FFcEQ7QUFDQTs7QUFDQSxZQUFJcUUsVUFBVSxHQUFHNVAsR0FBRyxDQUFIQSxlQUFqQixFQUFpQkEsQ0FBakI7QUFDQSxZQUFJNlAsVUFBVSxHQUFkLE1BTG9ELENBT3BEO0FBQ0E7O0FBQ0EsWUFBSUQsVUFBVSxDQUFWQSxnQkFBMkJBLFVBQVUsQ0FBVkEsU0FBL0IsSUFBdUQ7QUFDckRDLG9CQUFVLEdBQVZBO0FBRUY7O0FBQUEsWUFBSSxDQUFDOUIsS0FBSyxDQUFDK0IsUUFBUSxDQUFDRixVQUFVLENBQVZBLFVBQXBCLENBQW9CQSxDQUFELENBQVQsQ0FBVixFQUErQztBQUM3Q0Msb0JBQVUsR0FBVkE7QUFHRjs7QUFBQSx3QkFBZ0I7QUFDZEQsb0JBQVUsR0FBR0wsZUFBYks7QUFHRkY7O0FBQUFBLGlCQUFTLENBQVRBLFVBQVMsQ0FBVEE7QUFDQSxlQUFPaEwsTUFBTSxHQUNUQyxRQUFRLEdBQ0wsVUFBU2lMLFVBREosWUFFTCxPQUFNQSxVQUhBLFVBSVIsT0FBTUEsVUFKWDtBQXJCRixhQTBCTztBQUNMLGVBQVEsSUFBR1IsV0FBVyxTQUF0QjtBQUVIO0FBL0IyQk4sWUFBOUIsRUFBOEJBLENBQTlCO0FBa0NBLFdBQU87QUFDTFIsUUFBRSxFQUFFLFdBQVksSUFBR1csa0JBRGQsU0FDRCxDQURDO0FBQUE7QUFBQTtBQUlMYyxnQkFBVSxFQUFHLElBQUdKLHVCQUpsQjtBQUFPLEtBQVA7QUFRRjs7QUFBQSxTQUFPO0FBQ0xyQixNQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBUDtBQUFPLEdBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEQ7QUF5UUE7Ozs7O0FBR08sc0JBRUY7QUFDSCxNQUFJZSxJQUFJLEdBQVI7QUFDQTtBQUVBLFNBQVEsQ0FBQyxHQUFELFNBQW9CO0FBQzFCLFFBQUksQ0FBSixNQUFXO0FBQ1RBLFVBQUksR0FBSkE7QUFDQXpWLFlBQU0sR0FBR3dRLEVBQUUsQ0FBQyxHQUFaeFEsSUFBVyxDQUFYQTtBQUVGOztBQUFBO0FBTEY7QUFTSzs7QUFBQSw2QkFBNkI7QUFDbEMsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQStCb0UsTUFBTSxDQUEzQztBQUNBLFNBQVEsR0FBRWdOLFFBQVMsS0FBSUksUUFBUyxHQUFFa0UsSUFBSSxHQUFHLE1BQUgsT0FBZ0IsRUFBdEQ7QUFHSzs7QUFBQSxrQkFBa0I7QUFDdkIsUUFBTTtBQUFBO0FBQUEsTUFBV3RSLE1BQU0sQ0FBdkI7QUFDQSxRQUFNMk4sTUFBTSxHQUFHNEQsaUJBQWY7QUFDQSxTQUFPNVEsSUFBSSxDQUFKQSxVQUFlZ04sTUFBTSxDQUE1QixNQUFPaE4sQ0FBUDtBQUdLOztBQUFBLG1DQUF3RDtBQUM3RCxTQUFPLDRDQUVIb0ksU0FBUyxDQUFUQSxlQUF5QkEsU0FBUyxDQUFsQ0EsUUFGSjtBQUtLOztBQUFBLHdCQUF3QztBQUM3QyxTQUFPNUIsR0FBRyxDQUFIQSxZQUFnQkEsR0FBRyxDQUExQjtBQUdLOztBQUFBLDZDQUlrRDtBQUN2RCxZQUEyQztBQUFBOztBQUN6QywwQkFBSXFLLEdBQUcsQ0FBUCw4QkFBSUEsZUFBSixpQkFBb0M7QUFDbEMsWUFBTW5XLE9BQU8sR0FBSSxJQUFHb1csY0FBYyxLQUFsQztBQUdBLFlBQU0sVUFBTixPQUFNLENBQU47QUFFSDtBQUNELEdBVHVELENBU3ZEOzs7QUFDQSxRQUFNdEssR0FBRyxHQUFHc0YsR0FBRyxDQUFIQSxPQUFZQSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBSEEsSUFBbkM7O0FBRUEsTUFBSSxDQUFDK0UsR0FBRyxDQUFSLGlCQUEwQjtBQUN4QixRQUFJL0UsR0FBRyxDQUFIQSxPQUFXQSxHQUFHLENBQWxCLFdBQThCO0FBQzVCO0FBQ0EsYUFBTztBQUNMaUYsaUJBQVMsRUFBRSxNQUFNQyxtQkFBbUIsQ0FBQ2xGLEdBQUcsQ0FBSixXQUFnQkEsR0FBRyxDQUR6RCxHQUNzQztBQUQvQixPQUFQO0FBSUY7O0FBQUE7QUFHRjs7QUFBQSxRQUFNOUssS0FBSyxHQUFHLE1BQU02UCxHQUFHLENBQUhBLGdCQUFwQixHQUFvQkEsQ0FBcEI7O0FBRUEsTUFBSXJLLEdBQUcsSUFBSXlLLFNBQVMsQ0FBcEIsR0FBb0IsQ0FBcEIsRUFBMkI7QUFDekI7QUFHRjs7QUFBQSxNQUFJLENBQUosT0FBWTtBQUNWLFVBQU12VyxPQUFPLEdBQUksSUFBR29XLGNBQWMsS0FFaEMsK0RBQThEOVAsS0FGaEU7QUFHQSxVQUFNLFVBQU4sT0FBTSxDQUFOO0FBR0Y7O0FBQUEsWUFBMkM7QUFDekMsUUFBSUQsTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQytLLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0M5TyxhQUFPLENBQVBBLEtBQ0csR0FBRThULGNBQWMsS0FEbkI5VDtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNa1UsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUkxTSxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDekQsWUFBTSxDQUFOQSxrQkFBMEJMLEdBQUQsSUFBUztBQUNoQyxZQUFJd1EsYUFBYSxDQUFiQSxpQkFBK0IsQ0FBbkMsR0FBdUM7QUFDckNsVSxpQkFBTyxDQUFQQSxLQUNHLHFEQUFvRDBELEdBRHZEMUQ7QUFJSDtBQU5EK0Q7QUFRSDtBQUVEOztBQUFBLFNBQU8sMEJBQVAsR0FBTyxDQUFQO0FBR0s7O0FBQUEsTUFBTW9RLEVBQUUsR0FBRyx1QkFBWDs7QUFDQSxNQUFNekksRUFBRSxHQUNieUksRUFBRSxJQUNGLE9BQU94SSxXQUFXLENBQWxCLFNBREF3SSxjQUVBLE9BQU94SSxXQUFXLENBQWxCLFlBSEs7Ozs7Ozs7Ozs7Ozs7QUN4WU0sd0JBQXdCLDBDQUEwQyxnREFBZ0QsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsNEZBQW1COztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEU7QUFDMUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBRUEsTUFBTTVKLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5Qjs7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OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSAnLi4vR2VuZXJhbHVpL0N1c3RvbUhvb2tzJztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFBBU1NXT1JEX0NIQU5HRV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XG5cbmNvbnN0IENoYW5nZVBhc3N3b3JkID0gKHsgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtwcmVzZW50UGFzc3dvcmQsIG9uQ2hhbmdlUHJlc2VudFBhc3N3b3JkLCBzZXRQcmVzZW50UGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgb25DaGFuZ2VQYXNzd29yZENoZWNrLCBzZXRDaGFuZ2VQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCk7XG5cbiAgY29uc3QgeyBzZXNzaW9uLCBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFBBU1NXT1JEX0NIQU5HRV9SRVFVRVNULFxuICAgICAgZGF0YToge1xuICAgICAgICBpZDogc2Vzc2lvbi5pZCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHNldFRvZ2dsZUNoYW5nZVBhc3N3b3JkKChwcmV2KSA9PiAhcHJldik7XG4gICAgc2V0UHJlc2VudFBhc3N3b3JkKG51bGwpO1xuICAgIHNldFBhc3N3b3JkKG51bGwpO1xuICAgIHNldENoYW5nZVBhc3N3b3JkQ2hlY2sobnVsbCk7XG4gIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVja10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19PlxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25GaW5pc2h9PlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJwcmVzZW50UGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPVwib25CbHVyXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6riw7KG0IOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIGFzeW5jIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWmEtejAtOV17NiwxMn0kLyk7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy91c2VyL2NvbmZpcm0vcGFzc3dvcmQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHNlc3Npb24uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCfquLDsobQg67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ+2YleyLneyXkCDrp57sp4Ag7JWK64qUIOu5hOuwgOuyiO2YuOyeheuLiOuLpCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgc2l6ZT17YGxhcmdlYH1cbiAgICAgICAgICAgICAgcHJlZml4PXtgKiDquLDsobQg7Yyo7Iqk7JuM65OcYH1cbiAgICAgICAgICAgICAgdmFsdWU9e3ByZXNlbnRQYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUHJlc2VudFBhc3N3b3JkfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuq4sOyhtCDruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IO2ZleyduO2VtOyjvOyEuOyalCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXltBLVphLXowLTldezYsMTJ9JC8sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOqwgCDtmJXsi53sl5Ag66ee7KeAIOyViuyKteuLiOuLpCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICBwcmVmaXg9e2AqIOu5hOuwgOuyiO2YuGB9XG4gICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZENoZWNrXCJcbiAgICAgICAgICAgIGRlcGVuZGVuY2llcz17WydwYXNzd29yZCddfVxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW0IOyjvOyEuOyalCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICh7IGdldEZpZWxkVmFsdWUgfSkgPT4gKHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCfruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgIHByZWZpeD17YCog67mE67CA67KI7Zi4IO2ZleyduGB9XG4gICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuLpOyLnCDruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9IGh0bWxUeXBlPXsnc3VibWl0J30gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIOu5hOuwgOuyiO2YuCDrs4Dqsr1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlUGFzc3dvcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIG1lc3NhZ2UsIENhcmQsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBNYWlsT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IExvZ2luID0gKHtcbiAgc2V0VG9nZ2xlTG9naW4sXG4gIHVzZXJuYW1lLFxuICBvbkNoYW5nZVVzZXJuYW1lLFxuICBzZXRVc2VybmFtZSxcbiAgcGFzc3dvcmQsXG4gIG9uQ2hhbmdlUGFzc3dvcmQsXG4gIHNldFBhc3N3b3JkLFxufSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgeyBsb2dpbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ2luRXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IobG9naW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9naW5FcnJvcl0pO1xuXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgc2V0VG9nZ2xlTG9naW4oZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb25DbGlja1NpZ25VcCA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVMb2dpbihmYWxzZSk7XG4gICAgUm91dGVyLnB1c2goJy91c2VyL3NpZ251cCcpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbdXNlcm5hbWUsIHBhc3N3b3JkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvbkZpbmlzaH0+XG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT17J2xhcmdlJ30gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17J2VtYWlsJ31cbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7J2066mU7J287J2EIOyeheugpe2VtOyjvOyEuOyalCcgfSxcbiAgICAgICAgICAgICAgICB7IHR5cGU6ICdlbWFpbCcsIG1lc3NhZ2U6ICftmJXsi53sl5Ag66ee7KeAIOyViuuKlCDslYTsnbTrlJTsnoXri4jri6QnIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHByZWZpeD17PE1haWxPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfVxuICAgICAgICAgICAgICAgIG5hbWU9eydlbWFpbCd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT17J3Bhc3N3b3JkJ31cbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCcgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlswLTlhLXpBLVpdezYsMTJ9JC8sXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7ZiV7Iud7JeQIOunnuyngCDslYrripQg67mE67CA67KI7Zi47J6F64uI64ukJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgICBuYW1lPXsncGFzc3dvcmQnfVxuICAgICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cbiAgICAgICAgICAgICAgaHRtbFR5cGU9eydzdWJtaXQnfVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19IG9uQ2xpY2s9e29uQ2xpY2tTaWduVXB9PlxuICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvbWVudVwiO1xuaW1wb3J0IHsgU0VBUkNIX0hJU1RPUllfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9wYXltZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoeyBzZXRUb2dnbGVTZWFyY2ggfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IG9uQ2hhbmdlVGV4dCA9IChlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcblxuICBjb25zdCBvblNlYXJjaCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgZGF0YTogeyB0ZXh0IH0sXG4gICAgfSk7XG4gICAgc2V0VGV4dCgpO1xuICAgIGNvbnNvbGUubG9nKHRleHQpO1xuICAgIHNldFRvZ2dsZVNlYXJjaChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXQuU2VhcmNoXG4gICAgICBzaXplPXtcImxhcmdlXCJ9XG4gICAgICB2YWx1ZT17dGV4dH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRleHR9XG4gICAgICBlbnRlckJ1dHRvblxuICAgICAgb25TZWFyY2g9e29uU2VhcmNofVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSAoZSkgPT4gaGFuZGxlcihlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiBbdmFsdWUsIHNldHRlciwgaGFuZGxlcl07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tlZCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFuZGxlcigocHJldikgPT4ge1xuICAgICAgcmV0dXJuICFwcmV2O1xuICAgIH0pO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG4iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE5hdmliYXJMYXlvdXQgZnJvbSAnLi9OYXZpYmFyTGF5b3V0JztcblxuY29uc3QgQ2VudHJhbEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBndXR0ZXI9ezEwfT5cbiAgICAgICAgPENvbCB4cz17MH0gbWQ9ezd9IC8+XG4gICAgICAgIDxDb2wgeHM9ezI0fSBtZD17MTB9PlxuICAgICAgICAgIDxOYXZpYmFyTGF5b3V0IC8+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MH0gbWQ9ezd9IC8+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENlbnRyYWxBcHBMYXlvdXQ7XG4iLCJpbXBvcnQgeyBNZW51LCBJbnB1dCwgTW9kYWwsIFBvcG92ZXIsIFNwYWNlIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBBcnJvd0xlZnRPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBMT0dfT1VUX1NVQ0NFU1MgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJy4uL0Zvcm1zL0xvZ2luJztcbmltcG9ydCBTZWFyY2hCYXJNb2RhbCBmcm9tICcuLi9Gb3Jtcy9TZWFyY2hCYXInO1xuaW1wb3J0IENoYW5nZVBhc3N3b3JkIGZyb20gJy4uL0Zvcm1zL0NoYW5nZVBhc3N3b3JkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi9HZW5lcmFsdWkvQ3VzdG9tSG9va3MnO1xuXG5jb25zdCBOYXZpYmFyTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXJuYW1lLCBvbkNoYW5nZVVzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG5cbiAgY29uc3QgW3RvZ2dsZUxvZ2luLCBzZXRUb2dnbGVMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2dnbGVTZWFyY2gsIHNldFRvZ2dsZVNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2dnbGVDaGFuZ2VQYXNzd29yZCwgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBjb25zdCBbc2VhcmNoU2hvdywgc2V0U2VhcmNoU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoaWRlSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRTaG93KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzaG93SGFuZGxlciA9IChzaG93KSA9PiB7XG4gICAgc2V0U2hvdyhzaG93KTtcbiAgfTtcblxuICBjb25zdCBvblRvZ2dsZUNoYW5nZVBhc3N3b3JkID0gKCkgPT4ge1xuICAgIGhpZGVIYW5kbGVyKCk7XG4gICAgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2tMb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0UGFzc3dvcmQoJycpO1xuICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR19PVVRfU1VDQ0VTUyB9KTtcbiAgfTtcblxuICBjb25zdCBvblRvZ2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIHNldFBhc3N3b3JkKCcnKTtcbiAgICBzZXRVc2VybmFtZSgnJyk7XG4gICAgc2V0VG9nZ2xlTG9naW4oKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvblRvZ2dsZVNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVTZWFyY2goKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrUGF5bWVudHMgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9wYXltZW50cycpO1xuICAgIGhpZGVIYW5kbGVyKCk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0FkbWluID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvc2hvcC9hZG1pbicpO1xuICAgIGhpZGVIYW5kbGVyKCk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IG9yaWdpblByb2R1Y3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1lbnUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17J0xvZ2luJ31cbiAgICAgICAgdmlzaWJsZT17dG9nZ2xlTG9naW59XG4gICAgICAgIG9uQ2FuY2VsPXtvblRvZ2dsZUxvZ2lufVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxMb2dpbk1vZGFsXG4gICAgICAgICAgc2V0VG9nZ2xlTG9naW49e3NldFRvZ2dsZUxvZ2lufVxuICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICBvbkNoYW5nZVVzZXJuYW1lPXtvbkNoYW5nZVVzZXJuYW1lfVxuICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17J1NlYXJjaCd9XG4gICAgICAgIHZpc2libGU9e3RvZ2dsZVNlYXJjaH1cbiAgICAgICAgb25DYW5jZWw9e29uVG9nZ2xlU2VhcmNofVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hCYXJNb2RhbCB0eXBlPXsncHJvZHVjdCd9IHNldFRvZ2dsZVNlYXJjaD17c2V0VG9nZ2xlU2VhcmNofSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17J0NoYW5nZSBQYXNzd29yZCd9XG4gICAgICAgIHZpc2libGU9e3RvZ2dsZUNoYW5nZVBhc3N3b3JkfVxuICAgICAgICBvbkNhbmNlbD17b25Ub2dnbGVDaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8Q2hhbmdlUGFzc3dvcmQgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQ9e3NldFRvZ2dsZUNoYW5nZVBhc3N3b3JkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcsIGJhY2tHcm91bmRDb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT17J2JhY2snfT5cbiAgICAgICAgICAgIDxBcnJvd0xlZnRPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIuYmFjaygpfSAvPlxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9eydzZWFyY2gnfSBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgIHtvcmlnaW5Qcm9kdWN0cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlU2VhcmNofVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVNlYXJjaH1cbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgIHshaXNMb2dnZWRJblxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9eydsb2dpbid9PlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25Ub2dnbGVMb2dpbn0+66Gc6re47J24PC9hPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9eydwcm9maWxlJ30+XG4gICAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPXsnY2xpY2snfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9eydib3R0b20nfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17c2Vzc2lvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaG93fVxuICAgICAgICAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3Nob3dIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17J3ZlcnRpY2FsJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17b25Ub2dnbGVDaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg67mE67CA67KI7Zi4IOuzgOqyvVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrUGF5bWVudHN9PuqysOygnOydtOugpTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5kaXZpc2lvbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrQWRtaW59PuunpOyepeq0gOumrCDtjpjsnbTsp4A8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19IGtleT17J2xvZ291dCd9PlxuICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja0xvZ291dH0+66Gc6re47JWE7JuDPC9hPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpYmFyTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XG5cbmltcG9ydCBDZW50cmFsQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0NlbnRyYWxBcHBMYXlvdXQnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3JkZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0xLjEyLjQubWluLmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uaWFtcG9ydC5rci9qcy9pYW1wb3J0LnBheW1lbnQtMS4xLjUuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zc2wuZGF1bWNkbi5uZXQvZG1hcHMvbWFwX2pzX2luaXQvcG9zdGNvZGUudjIuanM/YXV0b2xvYWQ9ZmFsc2VcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jZG4uaWFtcG9ydC5rci9qcy9pYW1wb3J0LnBheW1lbnQtMS4xLjUuanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICB7YGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGNSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfWB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9e2AvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2FwcGtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0tBS0FPX1JFU1RBUEl9JmxpYnJhcmllcz1zZXJ2aWNlc2B9XG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz17YC8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXBwa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfS0FLQU9fSkFWQVNDUklQVH0mbGlicmFyaWVzPXNlcnZpY2VzLGNsdXN0ZXJlcmB9XG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQZXJzaXN0R2F0ZSBwZXJzaXN0b3I9e3N0b3JlLl9fcGVyc2lzdG9yfT5cbiAgICAgICAgPENlbnRyYWxBcHBMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICA8L0NlbnRyYWxBcHBMYXlvdXQ+XG4gICAgICA8L1BlcnNpc3RHYXRlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBzaG9wTGlzdDogW10sXG4gIG9yaWdpbmFsU2hvcExpc3Q6IFtdLFxuICBpc0xvYWRpbmdVc2VyTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdVc2VyTGlzdEVycm9yOiBudWxsLFxuICB1c2VyTGlzdDogW10sXG4gIG9yaWdpbmFsVXNlckxpc3Q6IFtdLFxuICBldmVudHM6IFtdLFxuICBsb2FkRXZlbnRzRXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ0V2ZW50czogZmFsc2UsXG4gIHBhZ2VJbmZvOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfUkVRVUVTVCA9ICdMT0FEX1VTRVJMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfU1VDQ0VTUyA9ICdMT0FEX1VTRVJMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfRkFJTFVSRSA9ICdMT0FEX1VTRVJMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gJ0xPQURfU0hPUExJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gJ0xPQURfU0hPUExJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gJ0xPQURfU0hPUExJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1NVQ0NFU1MgPSAnREVMRVRFX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1JFUVVFU1QgPSAnTE9BRF9FVkVOVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfU1VDQ0VTUyA9ICdMT0FEX0VWRU5UU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19GQUlMVVJFID0gJ0xPQURfRVZFTlRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1JFUVVFU1QgPSAnQUREX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9TVUNDRVNTID0gJ0FERF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfRkFJTFVSRSA9ICdBRERfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1JFUVVFU1QgPSAnRURJVF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1NVQ0NFU1MgPSAnRURJVF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX0ZBSUxVUkUgPSAnRURJVF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9SRVFVRVNUID0gJ0RFTEVURV9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfU1VDQ0VTUyA9ICdERUxFVEVfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFHRV9DSEFOR0VfU1VDQ0VTUyA9ICdQQUdFX0NIQU5HRV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1Nob3BMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5wYWdlSW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2FydDogW10sXG4gIGlzTG9hZGluZ0NhcnQ6IGZhbHNlLFxuICBpc1JlbW92ZWluZ0NhcnQ6IGZhbHNlLFxuICBTaG9wSWQ6IHVuZGVmaW5lZCxcbiAgVGFibGVJZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9SRVFVRVNUID0gJ0xPQURfQ0FSVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9ICdMT0FEX0NBUlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX0ZBSUxVUkUgPSAnTE9BRF9DQVJUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU1fUkVRVUVTVCA9ICdSRU1PVkVfSVRFTV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9TVUNDRVNTID0gJ1JFTU9WRV9JVEVNX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX0ZBSUxVUkUgPSAnUkVNT1ZFX0lURU1fRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUID0gJ0FERF9JVEVNX1FVQU5USVRZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9JVEVNX1FVQU5USVRZX1JFUVVFU1QgPSAnU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVCc7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FSVF9JVEVNX1JFUVVFU1QgPSAnQUREX0NBUlRfSVRFTV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9JVEVNX1JFUVVFU1QgPSAnUkVNT1ZFX0NBUlRfSVRFTV9SRVFVRVNUJztcblxuZXhwb3J0IGNvbnN0IENMRUFSX0NBUlRfUkVRVUVTVCA9ICdDTEVBUl9DQVJUX1JFUVVFU1QnO1xuXG5leHBvcnQgY29uc3QgR0VUX1NIT1BfVEFCTEVfSUQgPSAnR0VUX1NIT1BfVEFCTEVfSUQnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBMT0FEX0NBUlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWN0aW9uLmRhdGFdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBSRU1PVkVfSVRFTV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpdGVtcyA9IHN0YXRlLmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IFsuLi5pdGVtc10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBUlRfSVRFTV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBuZXdQcm9kdWN0ID0gYWN0aW9uLnByb2R1Y3Q7XG4gICAgICBjb25zdCBwcm9kdWN0SW5kZXggPSBzdGF0ZS5jYXJ0LmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gbmV3UHJvZHVjdC5pZCk7XG4gICAgICBpZiAocHJvZHVjdEluZGV4ICE9PSAtMSkge1xuICAgICAgICBjb25zdCBmb3JtZXJQcm9kdWN0ID0gc3RhdGUuY2FydFtwcm9kdWN0SW5kZXhdO1xuICAgICAgICBjb25zdCBmaW5hbFByb2R1Y3QgPSB7XG4gICAgICAgICAgLi4uZm9ybWVyUHJvZHVjdCxcbiAgICAgICAgICBxdWFudGl0eTogZm9ybWVyUHJvZHVjdC5xdWFudGl0eSArIG5ld1Byb2R1Y3QucXVhbnRpdHksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNhcnRMaXN0ID0gWy4uLnN0YXRlLmNhcnQuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBuZXdQcm9kdWN0LmlkKSwgZmluYWxQcm9kdWN0XTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGNhcnQ6IGNhcnRMaXN0LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IFsuLi5zdGF0ZS5jYXJ0LCBuZXdQcm9kdWN0XSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KChjYXJ0KSA9PiBjYXJ0LmlkID09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5jYXJ0W2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA8IDEwMCA/IChxdWFudGl0eSArPSAxKSA6IDk5O1xuICAgICAgY29uc3QgY2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcbiAgICAgIGNhcnRbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTVUJTVFJBQ1RfSVRFTV9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KChjYXJ0KSA9PiBjYXJ0LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUuY2FydFtpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPiAxID8gKHF1YW50aXR5IC09IDEpIDogMTtcbiAgICAgIGNvbnN0IGNhcnQgPSBbLi4uc3RhdGUuY2FydF07XG4gICAgICBjYXJ0W2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENMRUFSX0NBUlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IFtdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEdFVF9TSE9QX1RBQkxFX0lEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgU2hvcElkOiBhY3Rpb24uZGF0YS5TaG9wSWQsXG4gICAgICAgIFRhYmxlSWQ6IGFjdGlvbi5kYXRhLlRhYmxlSWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHNob3AgZnJvbSAnLi9zaG9wJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgY2FydCBmcm9tICcuL2NhcnQnO1xuaW1wb3J0IHBheW1lbnQgZnJvbSAnLi9wYXltZW50JztcbmltcG9ydCBhZG1pbiBmcm9tICcuL2FkbWluJztcblxuZXhwb3J0IGNvbnN0IFNFVF9DTElFTlRfU1RBVEUgPSAnU0VUX0NMSUVOVF9TVEFURSc7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhgYWN0aW9uLnR5cGU6ICR7YWN0aW9uLnR5cGV9YCk7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBIWURSQVRFOlxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfSxcbiAgYWRtaW4sXG4gIHVzZXIsXG4gIHNob3AsXG4gIG1lbnUsXG4gIGNhcnQsXG4gIHBheW1lbnQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2R1Y3RzOiBbXSxcbiAgb3JpZ2luUHJvZHVjdHM6IFtdLFxuICBuYXZpU2l6ZTogbnVsbCxcbiAgVGFibGVJZDogbnVsbCxcbiAgaXNBZGRpbmdQcm9kdWN0OiBmYWxzZSxcbiAgaXNMb2FkaW5nQ2FydDogZmFsc2UsXG4gIGNhdGVnb3JpZXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfUkVRVUVTVCA9ICdMT0FEX1BST0RVQ1RTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfU1VDQ0VTUyA9ICdMT0FEX1BST0RVQ1RTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfRkFJTFVSRSA9ICdMT0FEX1BST0RVQ1RTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1JFUVVFU1QgPSAnQUREX1FVQU5USVRZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9TVUNDRVNTID0gJ0FERF9RVUFOVElUWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfRkFJTFVSRSA9ICdBRERfUVVBTlRJVFlfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCA9ICdTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1MgPSAnU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFID0gJ1NVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSAnQUREX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfU1VDQ0VTUyA9ICdBRERfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gJ0FERF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1JFUVVFU1QgPSAnTE9BRF9DQVJUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gJ0xPQURfQ0FSVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTFVSRSA9ICdMT0FEX0NBUlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUID0gJ0lOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1QnO1xuXG5leHBvcnQgY29uc3QgR0VUX05BVklCQVJfU0laRSA9ICdHRVRfTkFWSUJBUl9TSVpFJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgPSAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyA9ICdTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTkFWSUJBUl9TSVpFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmF2aVNpemU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9RVUFOVElUWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleChcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA8IDEwMCA/IChxdWFudGl0eSArPSAxKSA6IDk5O1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5UYWJsZUlkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLm1lbnVzLFxuICAgICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXS5tZW51cyxcbiAgICAgICAgICBUYWJsZUlkOiBhY3Rpb24uZGF0YVswXS5UYWJsZUlkLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIGFjdGlvbi5kYXRhXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVDoge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QudGl0bGUuaW5kZXhPZihhY3Rpb24uZGF0YS50ZXh0KSA+IC0xO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmlkID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBbLi4uc3RhdGUub3JpZ2luUHJvZHVjdHNdIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4ge1xuICAgICAgICAgIHJldHVybiB2LkRpc2NvdW50ICE9PSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfVxuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgKHIpID0+IHIuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmlkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNQYXlpbmc6IGZhbHNlLFxuICBkYXRhOiBbXSxcbiAgcGF5aW5nRXJyb3I6IG51bGwsXG4gIGhpc3Rvcnk6IFtdLFxuICBpc0xvYWRpbmdIaXN0b3J5OiBmYWxzZSxcbiAgbG9hZGluZ0Vycm9yOiBudWxsLFxuICByZW1vdmluZ0hpc3Rvcnk6IGZhbHNlLFxuICByZW1vdmluZ0hpc3RvcnlFcnJvcjogbnVsbCxcbiAgY2xpZW50SGlzdG9yeVJlbW92aW5nOiBmYWxzZSxcbiAgY2xpZW50SGlzdG9yeVJlbW92aW5nRXJyb3I6IG51bGwsXG4gIGlzU2VhY2hpbmdIaXN0b3J5OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBQQVlNRU5UX1JFUVVFU1QgPSBcIlBBWU1FTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFBBWU1FTlRfU1VDQ0VTUyA9IFwiUEFZTUVOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUEFZTUVOVF9GQUlMVVJFID0gXCJQQVlNRU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QgPSBcIkxPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTID0gXCJMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSA9IFwiTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1QgPSBcIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MgPSBcIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkUgPSBcIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1QgPSBcIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyA9IFwiUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFID0gXCJQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJBVElOR19SRVFVRVNUID0gXCJSQVRJTkdfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJBVElOR19TVUNDRVNTID0gXCJSQVRJTkdfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFJBVElOR19GQUlMVVJFID0gXCJSQVRJTkdfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX0hJU1RPUllfUkVRVUVTVCA9IFwiU0VBUkNIX0hJU1RPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9ISVNUT1JZX1NVQ0NFU1MgPSBcIlNFQVJDSF9ISVNUT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSElTVE9SWV9GQUlMVVJFID0gXCJTRUFSQ0hfSElTVE9SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFBBWU1FTlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGVtLCBpc1BheWluZzogdHJ1ZSB9O1xuICAgIH1cbiAgICBjYXNlIFBBWU1FTlRfU1VDQ0VTUzoge1xuICAgICAgLy8gZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DQVJUX1JFUVVFU1QgfSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNQYXlpbmc6IGZhbHNlIH07XG4gICAgfVxuICAgIGNhc2UgUEFZTUVOVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNQYXlpbmc6IGZhbHNlLCBwYXlpbmdFcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BBWU1FTlRfSElTVE9SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nSGlzdG9yeTogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgTE9BRF9QQVlNRU5UX0hJU1RPUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGhpc3Rvcnk6IFsuLi5hY3Rpb24uZGF0YV0sIGlzTG9hZGluZ0hpc3Rvcnk6IGZhbHNlIH07XG4gICAgfVxuICAgIGNhc2UgTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ0hpc3Rvcnk6IGZhbHNlLCBsb2FkaW5nRXJyb3I6IGFjdGlvbi5lcnJvciB9O1xuICAgIH1cblxuICAgIGNhc2UgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVtb3ZpbmdIaXN0b3J5OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaGlzdG9yeS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBzdGF0ZS5oaXN0b3J5O1xuICAgICAgY29uc3QgcGF5bWVudCA9IGhpc3RvcnlbaW5kZXhdO1xuICAgICAgcGF5bWVudC5zdGF0dXMgPSBhY3Rpb24uZGF0YS5zdGF0dXM7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaGlzdG9yeSwgcmVtb3ZpbmdIaXN0b3J5OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcmVtb3ZpbmdIaXN0b3J5OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgUkFUSU5HX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBSQVRJTkdfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5oaXN0b3J5LmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUGF5bWVudElkKTtcbiAgICAgIGNvbnN0IGxvZyA9IHN0YXRlLmhpc3RvcnlbaW5kZXhdO1xuICAgICAgbGV0IHJhdGluZyA9IGFjdGlvbi5kYXRhLnJhdGU7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gWy4uLnN0YXRlLmhpc3RvcnldO1xuICAgICAgaGlzdG9yeVtpbmRleF0gPSB7IC4uLmxvZywgUmF0aW5nOiB7IHJhdGU6IHJhdGluZyB9IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaGlzdG9yeSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBSQVRJTkdfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9ISVNUT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1NlYWNoaW5nSGlzdG9yeTogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VBUkNIX0hJU1RPUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGhpc3Rvcnk6IGFjdGlvbi5kYXRhLCBpc1NlYWNoaW5nSGlzdG9yeTogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9ISVNUT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1NlYWNoaW5nSGlzdG9yeTogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfVxufTtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvcDogbnVsbCxcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwcm9kdWN0OiBudWxsLFxuICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgc2hvcExpc3Q6IFtdLFxuICBsb2FkaW5nU2hvcExpc3RFcnJvcjogbnVsbCxcbiAgaXNBZGRpbmdTaG9wOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9SRVFVRVNUID0gXCJBRERfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfU1VDQ0VTUyA9IFwiQUREX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkFERF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QgPSBcIkFETUlOX1BST0RVQ1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19TVUNDRVNTID0gXCJBRE1JTl9QUk9EVUNUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfRkFJTFVSRSA9IFwiQURNSU5fUFJPRFVDVFNfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCA9IFwiU0VMRUNUX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIlNFTEVDVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFID0gXCJTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfUkVRVUVTVCA9IFwiRURJVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiRURJVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfRkFJTFVSRSA9IFwiRURJVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX1JFUVVFU1QgPSBcIkRFTEVURV9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9TVUNDRVNTID0gXCJERUxFVEVfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfRkFJTFVSRSA9IFwiREVMRVRFX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTID0gXCJDSEVDS19QUk9EVUNUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTID0gXCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUID0gXCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSA9IFwiRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfUkVRVUVTVCA9IFwiREVMRVRFX0RJU0NPVU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyA9IFwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfRkFJTFVSRSA9IFwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9SRVFVRVNUID0gXCJBRERfQ0FURUdPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9TVUNDRVNTID0gXCJBRERfQ0FURUdPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9GQUlMVVJFID0gXCJBRERfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9SRVFVRVNUID0gXCJFRElUX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkVESVRfQ0FURUdPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfRkFJTFVSRSA9IFwiRURJVF9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCA9IFwiREVMRVRFX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyA9IFwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfRkFJTFVSRSA9IFwiREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MgPSBcIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfUkVRVUVTVCA9IFwiTE9BRF9TSE9QTElTVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gXCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgPSBcIkxPQURfU0hPUExJU1RfRkFJTFVSRVwiO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IHRydWUsIC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSwgLi4uc3RhdGUsIHByb2R1Y3Q6IGFjdGlvbi5kYXRhIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlbGVjdGluZ1Byb2R1Y3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cywgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT0gYWN0aW9uLmRhdGEpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElTQ09VTlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF1cbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uZGF0YVsxXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgY2hlY2tlZCA9IHByb2R1Y3QuY2hlY2tlZDtcbiAgICAgIGNoZWNrZWQgPSBjaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBjaGVja2VkIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xuICAgICAgcHJvZHVjdHMubWFwKCh2KSA9PiAodi5jaGVja2VkID0gYWN0aW9uLmNoZWNrZWQpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gIT09IDBcbiAgICAgICAgICA/IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YVsxXSlcbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdO1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGFbMF0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IFsuLi5zdGF0ZS5jYXRlZ29yaWVzLCBhY3Rpb24uZGF0YV0gfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmNhdGVnb3JpZXMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4uc3RhdGUuY2F0ZWdvcmllc107XG4gICAgICBjYXRlZ29yaWVzW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXMgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IHN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogZmlsdGVyZWRDYXRlZ29yaWVzLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIENBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uaWQgPT0gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IHN0YXRlLm9yaWdpblByb2R1Y3RzIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5EaXNjb3VudCAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZGlzY291bnRlZFByb2R1Y3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmlkKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmdTaG9wTGlzdDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2hvcExpc3Q6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSwgbG9kaW5nU2hvcExpc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzU2lnbmluZ1VwOiBmYWxzZSxcbiAgc2lnblVwU3VjY2VzczogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNMb2dnaW5nSW46IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICBsb2dvdXRFcnJvcjogbnVsbCxcbiAgc2Vzc2lvbjogbnVsbCxcbiAgaXNMb2FkaW5nVXNlcjogZmFsc2UsXG4gIGxvYWRpbmdVc2VyRXJyb3I6IG51bGwsXG4gIGNoYW5naW5nUGFzc3dvcmQ6IGZhbHNlLFxuICBwYXNzd29yZENoYW5nZUVycm9yOiBudWxsLFxuICBpc0FkZGluZ1Nob3A6IGZhbHNlLFxuICBhZGRTaG9wRXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fSU5fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fUkVRVUVTVCA9IFwiUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTID0gXCJQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DT05GSVJNX0ZBSUxVUkUgPSBcIlBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QgPSBcIlBBU1NXT1JEX0NIQU5HRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MgPSBcIlBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkUgPSBcIlBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfU0hPUF9SRVFVRVNUID0gXCJBRERfU0hPUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1NIT1BfU1VDQ0VTUyA9IFwiQUREX1NIT1BfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9TSE9QX0ZBSUxVUkUgPSBcIkFERF9TSE9QX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBGYWlsdXJlID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24gPSBhY3Rpb24uZGF0YS5mdWxsVXNlcjtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG5cbiAgICAgIGNhc2UgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5naW5nUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5wYXNzd29yZENoYW5nZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1NIT1BfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNBZGRpbmdTaG9wID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24uU2hvcHMgPSBbYWN0aW9uLmRhdGEsIC4uLmRyYWZ0LnNlc3Npb24uU2hvcHNdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1NIT1BfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNBZGRpbmdTaG9wID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFNob3BFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgc2hvcCBmcm9tICcuL3Nob3AnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBwYXltZW50IGZyb20gJy4vcGF5bWVudCc7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfWA7XG5cbmZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHVzZXIpLCBmb3JrKHNob3ApLCBmb3JrKG1lbnUpLCBmb3JrKHBheW1lbnQpXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RTYWdhO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGFsbCwgcHV0LCBmb3JrLCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7XG4gIExPQURfUFJPRFVDVFNfU1VDQ0VTUyxcbiAgTE9BRF9QUk9EVUNUU19GQUlMVVJFLFxuICBMT0FEX1BST0RVQ1RTX1JFUVVFU1QsXG59IGZyb20gJy4uL3JlZHVjZXJzL21lbnUnO1xuXG5mdW5jdGlvbiBsb2FkUHJvZHVjdEFwaShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvbWVudWAsIHsgZGF0YSB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRQcm9kdWN0cyh7IGRhdGEgfSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFByb2R1Y3RBcGksIGRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BST0RVQ1RTX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BST0RVQ1RTX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdHMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QUk9EVUNUU19SRVFVRVNULCBsb2FkUHJvZHVjdHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdHNTYWdhKCkge1xuICB5aWVsZCBhbGwoW2Zvcmsod2F0Y2hMb2FkUHJvZHVjdHMpXSk7XG59XG4iLCJpbXBvcnQge1xuICBmb3JrLFxuICB0YWtlRXZlcnksXG4gIGFsbCxcbiAgcHV0LFxuICBjYWxsLFxuICB0YWtlTGF0ZXN0LFxufSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHtcbiAgTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSxcbiAgTE9BRF9QQVlNRU5UX0hJU1RPUllfUkVRVUVTVCxcbiAgTE9BRF9QQVlNRU5UX0hJU1RPUllfU1VDQ0VTUyxcbiAgUkFUSU5HX0ZBSUxVUkUsXG4gIFJBVElOR19TVUNDRVNTLFxuICBSQVRJTkdfUkVRVUVTVCxcbiAgU0VBUkNIX0hJU1RPUllfU1VDQ0VTUyxcbiAgU0VBUkNIX0hJU1RPUllfRkFJTFVSRSxcbiAgU0VBUkNIX0hJU1RPUllfUkVRVUVTVCxcbiAgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNULFxuICBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkUsXG4gIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyxcbn0gZnJvbSAnLi4vcmVkdWNlcnMvcGF5bWVudCc7XG5cbmZ1bmN0aW9uIHBheW1lbnRIaXN0b3J5QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wYXltZW50cy9sb2FkJywge1xuICAgIGlkOiBkYXRhLmlkLFxuICAgIFNob3BJZDogZGF0YS5TaG9wSWQsXG4gICAgZGl2aXNpb246IGRhdGEuZGl2aXNpb24sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogcGF5bWVudEhpc3RvcnkoZGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocGF5bWVudEhpc3RvcnlBUEksIGRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FEX1BBWU1FTlRfSElTVE9SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hQYXltZW50SGlzdG9yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BBWU1FTlRfSElTVE9SWV9SRVFVRVNULCBwYXltZW50SGlzdG9yeSk7XG59XG5cbmZ1bmN0aW9uIHJhdGluZ0FQSSh7IGRhdGEgfSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3BheW1lbnRzL3JhdGluZycsIHtcbiAgICBQYXltZW50c0lkOiBkYXRhLlBheW1lbnRzSWQsXG4gICAgVXNlcklkOiBkYXRhLlVzZXJJZCxcbiAgICBQcm9kdWN0SWQ6IGRhdGEuUHJvZHVjdElkLFxuICAgIHJhdGU6IGRhdGEucmF0ZSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiByYXRpbmcoZGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmF0aW5nQVBJLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBSQVRJTkdfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBSQVRJTkdfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUmF0aW5nKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFJBVElOR19SRVFVRVNULCByYXRpbmcpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hIaXN0b3J5QVBJKHsgZGF0YSB9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAoZGF0YS5kaXZpc2lvbiA9PSB0cnVlKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wYXltZW50cy9zZWFyY2gvc2hvcCcsIHsgZGF0YSB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3BheW1lbnRzL3NlYXJjaC91c2VyJywgeyBkYXRhIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiBzZWFyY2hIaXN0b3J5KGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNlYXJjaEhpc3RvcnlBUEksIGRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFQVJDSF9ISVNUT1JZX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogU0VBUkNIX0hJU1RPUllfRkFJTFVSRSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hIaXN0b3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNFQVJDSF9ISVNUT1JZX1JFUVVFU1QsIHNlYXJjaEhpc3RvcnkpO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxQYXltZW50QVBJKHsgaWQsIFVzZXJJZCwgZGl2aXNpb24sIGltcF91aWQsIGFtb3VudCB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcGF5bWVudHMvY2FuY2VsJywge1xuICAgIGlkLFxuICAgIFVzZXJJZCxcbiAgICBkaXZpc2lvbixcbiAgICBpbXBfdWlkLFxuICAgIGFtb3VudCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBjYW5jZWxQYXltZW50KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2FuY2VsUGF5bWVudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSwgZXJyb3I6IGVyciB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hDYW5jZWxQYXltZW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCwgY2FuY2VsUGF5bWVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoUGF5bWVudEhpc3RvcnkpLFxuICAgIGZvcmsod2F0Y2hSYXRpbmcpLFxuICAgIGZvcmsod2F0Y2hTZWFyY2hIaXN0b3J5KSxcbiAgICBmb3JrKHdhdGNoQ2FuY2VsUGF5bWVudCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgYWxsLCBwdXQsIGZvcmssIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQge1xuICBBRERfUFJPRFVDVF9SRVFVRVNULFxuICBBRERfUFJPRFVDVF9TVUNDRVNTLFxuICBBRERfUFJPRFVDVF9GQUlMVVJFLFxuICBBRE1JTl9QUk9EVUNUU19SRVFVRVNULFxuICBBRE1JTl9QUk9EVUNUU19TVUNDRVNTLFxuICBBRE1JTl9QUk9EVUNUU19GQUlMVVJFLFxuICBERUxFVEVfUFJPRFVDVF9GQUlMVVJFLFxuICBERUxFVEVfUFJPRFVDVF9TVUNDRVNTLFxuICBERUxFVEVfUFJPRFVDVF9SRVFVRVNULFxuICBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLFxuICBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULFxuICBFRElUX1BST0RVQ1RfUkVRVUVTVCxcbiAgRURJVF9QUk9EVUNUX1NVQ0NFU1MsXG4gIEVESVRfUFJPRFVDVF9GQUlMVVJFLFxuICBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyxcbiAgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNULFxuICBBRERfQ0FURUdPUllfRkFJTFVSRSxcbiAgQUREX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIEFERF9DQVRFR09SWV9SRVFVRVNULFxuICBFRElUX0NBVEVHT1JZX1JFUVVFU1QsXG4gIEVESVRfQ0FURUdPUllfU1VDQ0VTUyxcbiAgRURJVF9DQVRFR09SWV9GQUlMVVJFLFxuICBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCxcbiAgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIERFTEVURV9DQVRFR09SWV9GQUlMVVJFLFxuICBERUxFVEVfRElTQ09VTlRfUkVRVUVTVCxcbiAgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MsXG4gIERFTEVURV9ESVNDT1VOVF9GQUlMVVJFLFxuICBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUsXG4gIExPQURfU0hPUExJU1RfU1VDQ0VTUyxcbiAgTE9BRF9TSE9QTElTVF9SRVFVRVNULFxuICBBRERfU0hPUF9TVUNDRVNTLFxuICBBRERfU0hPUF9GQUlMVVJFLFxuICBBRERfU0hPUF9SRVFVRVNULFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvc2hvcFwiO1xuXG5mdW5jdGlvbiBhZGRQcm9kdWN0QXBpKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvYWRkXCIsIGRhdGEpO1xufVxuZnVuY3Rpb24qIGFkZFByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQcm9kdWN0QXBpLCBhY3Rpb24uZm9ybURhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaEFkZFByb2R1Y3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BST0RVQ1RfUkVRVUVTVCwgYWRkUHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9kdWN0c0FwaShTaG9wSWQpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvbG9hZFwiLCB7IFNob3BJZCB9KTtcbn1cbmZ1bmN0aW9uKiBsb2FkUHJvZHVjdHMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdHNBcGksIGFjdGlvbi5TaG9wSWQpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdHMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgbG9hZFByb2R1Y3RzKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFQSShpZCkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9kZWxldGVcIiwgeyBpZCB9KTtcbn1cbmZ1bmN0aW9uKiBkZWxldGVQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwoZGVsZXRlUHJvZHVjdEFQSSwgYWN0aW9uLmlkKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiBhY3Rpb24uaWQgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlUHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfUFJPRFVDVF9SRVFVRVNULCBkZWxldGVQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0UHJvZHVjdEFQSShQcm9kdWN0SWQpIHtcbiAgY29uc29sZS5sb2coeyBQcm9kdWN0SWQgfSk7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL3NlbGVjdFwiLCB7IFByb2R1Y3RJZCB9KTtcbn1cbmZ1bmN0aW9uKiBzZWxlY3RQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VsZWN0UHJvZHVjdEFQSSwgYWN0aW9uLlByb2R1Y3RJZCk7XG5cbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgcHV0KHsgdHlwZTogU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaFNlbGVjdFByb2R1Y3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCwgc2VsZWN0UHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9kdWRjdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2VkaXRcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBlZGl0UHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiKTtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGVkaXRQcm9kdWRjdEFQSSwgYWN0aW9uLmZvcm1EYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hFZGl0UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX1BST0RVQ1RfUkVRVUVTVCwgZWRpdFByb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBkaXNjb3VudFByb2R1Y3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9kaXNjb3VudFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGRpc2NvdW50UHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRpc2NvdW50UHJvZHVjdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaERpc2NvdW50UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QsIGRpc2NvdW50UHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGFkZENhdGVnb3J5QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvY2F0ZWdvcnkvYWRkXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ0FURUdPUllfUkVRVUVTVCwgYWRkQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBlZGl0Q2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9jYXRlZ29yeS91cGRhdGVcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBlZGl0Q2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChlZGl0Q2F0ZWdvcnlBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX0NBVEVHT1JZX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hFZGl0Q2F0ZWdvcnkoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9DQVRFR09SWV9SRVFVRVNULCBlZGl0Q2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVDYXRlZ29yeUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2NhdGVnb3J5L2RlbGV0ZVwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGRlbGV0ZUNhdGVnb3J5KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlQ2F0ZWdvcnlBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBERUxFVEVfQ0FURUdPUllfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlQ2F0ZWdvcnkoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QsIGRlbGV0ZUNhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRGlzY291bnRBUEkoeyBQcm9kdWN0SWRzLCBTaG9wSWQsIENhdGVnb3J5SWQgfSkge1xuICBjb25zb2xlLmxvZyhQcm9kdWN0SWRzLCBTaG9wSWQsIENhdGVnb3J5SWQpO1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9kaXNjb3VudC9kZWxldGVcIiwge1xuICAgIFByb2R1Y3RJZHMsXG4gICAgU2hvcElkLFxuICAgIENhdGVnb3J5SWQsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlRGlzY291bnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVEaXNjb3VudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9ESVNDT1VOVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9ESVNDT1VOVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVEaXNjb3VudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfRElTQ09VTlRfUkVRVUVTVCwgZGVsZXRlRGlzY291bnQpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2hvcExpc3RBUEkoeyBTaG9wSWQgfSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9zaG9wL2xpc3RcIiwgeyBTaG9wSWQgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkU2hvcExpc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh7IGxvYWRTaG9wTGlzdEFQSSwgU2hvcElkOiBhY3Rpb24uU2hvcElkIH0pO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfU0hPUExJU1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFNob3BMaXN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfU0hPUExJU1RfUkVRVUVTVCwgbG9hZFNob3BMaXN0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHByb2R1Y3RzU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoQWRkUHJvZHVjdCksXG4gICAgZm9yayh3YXRjaExvYWRQcm9kdWN0cyksXG4gICAgZm9yayh3YXRjaERlbGV0ZVByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hTZWxlY3RQcm9kdWN0KSxcbiAgICBmb3JrKHdhdGNoRWRpdFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hEaXNjb3VudFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hFZGl0Q2F0ZWdvcnkpLFxuICAgIGZvcmsod2F0Y2hEZWxldGVDYXRlZ29yeSksXG4gICAgZm9yayh3YXRjaEFkZENhdGVnb3J5KSxcbiAgICBmb3JrKHdhdGNoRGVsZXRlRGlzY291bnQpLFxuICAgIGZvcmsod2F0Y2hMb2FkU2hvcExpc3QpLFxuICAgIC8vIGZvcmsod2F0Y2hBZGRTaG9wKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBmb3JrLCB0YWtlRXZlcnksIGFsbCwgcHV0LCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXG4gIExPQURfVVNFUl9GQUlMVVJFLFxuICBMT0FEX1VTRVJfUkVRVUVTVCxcbiAgTE9HX0lOX1JFUVVFU1QsXG4gIExPR19JTl9TVUNDRVNTLFxuICBMT0dfSU5fRkFJTFVSRSxcbiAgU0lHTl9VUF9SRVFVRVNULFxuICBTSUdOX1VQX1NVQ0NFU1MsXG4gIFNJR05fVVBfRkFJTFVSRSxcbiAgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QsXG4gIFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTLFxuICBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSxcbiAgQUREX1NIT1BfUkVRVUVTVCxcbiAgQUREX1NIT1BfU1VDQ0VTUyxcbiAgQUREX1NIT1BfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcblxuZnVuY3Rpb24gbG9naW5BcGkobG9naW5EYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvbG9naW5cIiwgbG9naW5EYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ2luKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9naW5BcGksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUucmVzcG9uc2UuZGF0YSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgY29uc29sZS5sb2coXCJUcnkgbG9nZ2luZyBpblwiKTtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPR19JTl9SRVFVRVNULCBsb2dpbik7XG59XG5cbmZ1bmN0aW9uIHNpZ25VcEFwaShzaWduVXBEYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvc2lnbnVwXCIsIHNpZ25VcERhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQXBpLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJBcGkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoXCIvdXNlclwiKTtcbn1cblxuZnVuY3Rpb24qIGxvYWRVc2VyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBcGkpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQYXNzd29yZEFwaSh7IGlkLCBwYXNzd29yZCB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3VzZXIvcGFzc3dvcmQvY2hhbmdlXCIsIHsgaWQsIHBhc3N3b3JkIH0pO1xufVxuXG5mdW5jdGlvbiogcGFzc3dvcmRDaGFuZ2UoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VQYXNzd29yZEFwaSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUGFzc3dvcmRDaGFuZ2UoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QsIHBhc3N3b3JkQ2hhbmdlKTtcbn1cblxuZnVuY3Rpb24gYWRkU2hvcEFQSShkYXRhKSB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9zaG9wL2FkZFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGFkZFNob3AoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRTaG9wQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1NIT1BfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfU0hPUF9GQUlMVVJFLCBlcnJvcjogZXJyIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFNob3AoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1NIT1BfUkVRVUVTVCwgYWRkU2hvcCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoTG9naW4pLFxuICAgIGZvcmsod2F0Y2hMb2FkVXNlciksXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXG4gICAgZm9yayh3YXRjaFBhc3N3b3JkQ2hhbmdlKSxcbiAgICBmb3JrKHdhdGNoQWRkU2hvcCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmNvbnN0IHsgcGVyc2lzdFN0b3JlIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGVuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBjb25zdCByb290U3RvcmUgPSAocmVkdWNlcikgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwge30sIGVuaGVuY2VyKTtcblxuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIGNvbnN0IHN0b3JlID0gcm9vdFN0b3JlKHJvb3RSZWR1Y2VyKTtcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xuXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICAgIGtleTogXCJuZXh0anNcIixcbiAgICAgIHdoaXRlbGlzdDogW1widXNlclwiXSxcbiAgICAgIHN0b3JhZ2UsXG4gICAgICB0cmFuc2Zvcm1zOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG4gICAgY29uc3Qgc3RvcmUgPSByb290U3RvcmUocGVyc2lzdGVkUmVkdWNlcik7XG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9