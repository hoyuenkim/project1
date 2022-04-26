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
/*! exports provided: ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAILURE, SELECT_PRODUCT_REQUEST, SELECT_PRODUCT_SUCCESS, SELECT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CHECK_PRODUCT_SUCCESS, CHECK_ALL_PRODUCTS_SUCCESS, DISCOUNT_PRODUCT_REQUEST, DISCOUNT_PRODUCT_SUCCESS, DISCOUNT_PRODUCT_FAILURE, DELETE_DISCOUNT_REQUEST, DELETE_DISCOUNT_SUCCESS, DELETE_DISCOUNT_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, CATEGORY_FILTERED_SUCCESS, default */
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
  selectingProductError: null
};
const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
const ADMIN_PRODUCTS_REQUEST = 'ADMIN_PRODUCTS_REQUEST';
const ADMIN_PRODUCTS_SUCCESS = 'ADMIN_PRODUCTS_SUCCESS';
const ADMIN_PRODUCTS_FAILURE = 'ADMIN_PRODUCTS_FAILURE';
const SELECT_PRODUCT_REQUEST = 'SELECT_PRODUCT_REQUEST';
const SELECT_PRODUCT_SUCCESS = 'SELECT_PRODUCT_SUCCESS';
const SELECT_PRODUCT_FAILURE = 'SELECT_PRODUCT_FAILURE';
const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';
const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
const CHECK_PRODUCT_SUCCESS = 'CHECK_PRODUCT_SUCCESS';
const CHECK_ALL_PRODUCTS_SUCCESS = 'CHECK_ALL_PRODUCTS_SUCCESS';
const DISCOUNT_PRODUCT_REQUEST = 'DISCOUNT_PRODUCT_REQUEST';
const DISCOUNT_PRODUCT_SUCCESS = 'DISCOUNT_PRODUCT_SUCCESS';
const DISCOUNT_PRODUCT_FAILURE = 'DISCOUNT_PRODUCT_FAILURE';
const DELETE_DISCOUNT_REQUEST = 'DELETE_DISCOUNT_REQUEST';
const DELETE_DISCOUNT_SUCCESS = 'DELETE_DISCOUNT_SUCCESS';
const DELETE_DISCOUNT_FAILURE = 'DELETE_DISCOUNT_FAILURE';
const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';
const EDIT_CATEGORY_REQUEST = 'EDIT_CATEGORY_REQUEST';
const EDIT_CATEGORY_SUCCESS = 'EDIT_CATEGORY_SUCCESS';
const EDIT_CATEGORY_FAILURE = 'EDIT_CATEGORY_FAILURE';
const DELETE_CATEGORY_REQUEST = 'DELETE_CATEGORY_REQUEST';
const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
const DELETE_CATEGORY_FAILURE = 'DELETE_CATEGORY_FAILURE';
const CATEGORY_FILTERED_SUCCESS = 'CATEGORY_FILTERED_SUCCESS';

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
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, PASSWORD_CONFIRM_REQUEST, PASSWORD_CONFIRM_SUCCESS, PASSWORD_CONFIRM_FAILURE, PASSWORD_CHANGE_REQUEST, PASSWORD_CHANGE_SUCCESS, PASSWORD_CHANGE_FAILURE, default */
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
 // import { useRouter } from 'next/router';

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
  passwordChangeError: null
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const SIGN_UP_REQUEST = 'SIGN_IN_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_IN_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const PASSWORD_CONFIRM_REQUEST = 'PASSWORD_CONFIRM_REQUEST';
const PASSWORD_CONFIRM_SUCCESS = 'PASSWORD_CONFIRM_SUCCESS';
const PASSWORD_CONFIRM_FAILURE = 'PASSWORD_CONFIRM_FAILURE';
const PASSWORD_CHANGE_REQUEST = 'PASSWORD_CHANGE_REQUEST';
const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS';
const PASSWORD_CHANGE_FAILURE = 'PASSWORD_CHANGE_FAILURE';
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/add', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/load', {
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/delete', {
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/select', {
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/edit', data);
}

function* editProduct(action) {
  try {
    console.log('result');
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/discount', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/category/add', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/category/update', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/category/delete', data);
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
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/products/discount/delete', {
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

function* productsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProducts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSelectProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchEditProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDiscountProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchEditCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchDeleteDiscount)]);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', loginData);
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
  console.log('Try logging in');
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], login);
}

function signUpApi(signUpData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/signup', signUpData);
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
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
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/password/change', {
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

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchPasswordChange)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvQ2hhbmdlUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmVyYWx1aS9DdXN0b21Ib29rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9DZW50cmFsQXBwTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmliYXJMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaG9wLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9wYXltZW50LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkNoYW5nZVBhc3N3b3JkIiwic2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJlc2VudFBhc3N3b3JkIiwib25DaGFuZ2VQcmVzZW50UGFzc3dvcmQiLCJzZXRQcmVzZW50UGFzc3dvcmQiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInNldENoYW5nZVBhc3N3b3JkQ2hlY2siLCJzZXNzaW9uIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwib25GaW5pc2giLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCIsImRhdGEiLCJpZCIsInByZXYiLCJ2ZXJ0aWNhbEFsaWduIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwicmVnZXgiLCJSZWdFeHAiLCJtYXRjaCIsInJlc3VsdCIsImF4aW9zIiwicG9zdCIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwicGF0dGVybiIsImdldEZpZWxkVmFsdWUiLCJ3aWR0aCIsIkxvZ2luIiwic2V0VG9nZ2xlTG9naW4iLCJ1c2VybmFtZSIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImxvZ2luRXJyb3IiLCJ1c2VFZmZlY3QiLCJlcnJvciIsIm9uQ2xpY2tTaWduVXAiLCJSb3V0ZXIiLCJwdXNoIiwiTE9HX0lOX1JFUVVFU1QiLCJTZWFyY2hCYXIiLCJzZXRUb2dnbGVTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwib25DaGFuZ2VUZXh0IiwiZSIsInRhcmdldCIsIm9uU2VhcmNoIiwiU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsU3RhdGUiLCJoYW5kbGVyIiwic2V0dGVyIiwidXNlQ2hlY2tlZCIsIkNlbnRyYWxBcHBMYXlvdXQiLCJjaGlsZHJlbiIsIk5hdmliYXJMYXlvdXQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2dnbGVMb2dpbiIsInRvZ2dsZVNlYXJjaCIsInRvZ2dsZUNoYW5nZVBhc3N3b3JkIiwic2hvdyIsInNldFNob3ciLCJoaWRlSGFuZGxlciIsInNob3dIYW5kbGVyIiwib25Ub2dnbGVDaGFuZ2VQYXNzd29yZCIsIm9uQ2xpY2tMb2dvdXQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJvblRvZ2dsZUxvZ2luIiwib25Ub2dnbGVTZWFyY2giLCJvbkNsaWNrUGF5bWVudHMiLCJvbkNsaWNrQWRtaW4iLCJvcmlnaW5Qcm9kdWN0cyIsIm1lbnUiLCJtYXJnaW5Ub3AiLCJiYWNrR3JvdW5kQ29sb3IiLCJiYWNrIiwiZmxvYXQiLCJsZW5ndGgiLCJ2aXNpYmlsaXR5IiwibmFtZSIsImRpdmlzaW9uIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiZXJyIiwiaHJlZiIsImV2ZW50Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwic3RvcmUiLCJ1c2VTdG9yZSIsIl9fcGVyc2lzdG9yIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJpc0xvYWRpbmdTaG9wTGlzdCIsImxvYWRpbmdTaG9wTGlzdEVycm9yIiwic2hvcExpc3QiLCJvcmlnaW5hbFNob3BMaXN0IiwiaXNMb2FkaW5nVXNlckxpc3QiLCJsb2FkaW5nVXNlckxpc3RFcnJvciIsInVzZXJMaXN0Iiwib3JpZ2luYWxVc2VyTGlzdCIsImxvYWRFdmVudHNFcnJvciIsImlzTG9hZGluZ0V2ZW50cyIsInBhZ2VJbmZvIiwiTE9BRF9VU0VSTElTVF9SRVFVRVNUIiwiTE9BRF9VU0VSTElTVF9TVUNDRVNTIiwiTE9BRF9VU0VSTElTVF9GQUlMVVJFIiwiTE9BRF9TSE9QTElTVF9SRVFVRVNUIiwiTE9BRF9TSE9QTElTVF9TVUNDRVNTIiwiTE9BRF9TSE9QTElTVF9GQUlMVVJFIiwiREVMRVRFX1VTRVJfUkVRVUVTVCIsIkRFTEVURV9VU0VSX1NVQ0NFU1MiLCJERUxFVEVfVVNFUl9GQUlMVVJFIiwiTE9BRF9FVkVOVFNfUkVRVUVTVCIsIkxPQURfRVZFTlRTX1NVQ0NFU1MiLCJMT0FEX0VWRU5UU19GQUlMVVJFIiwiQUREX0VWRU5UX1JFUVVFU1QiLCJBRERfRVZFTlRfU1VDQ0VTUyIsIkFERF9FVkVOVF9GQUlMVVJFIiwiRURJVF9FVkVOVF9SRVFVRVNUIiwiRURJVF9FVkVOVF9TVUNDRVNTIiwiRURJVF9FVkVOVF9GQUlMVVJFIiwiREVMRVRFX0VWRU5UX1JFUVVFU1QiLCJERUxFVEVfRVZFTlRfU1VDQ0VTUyIsIkRFTEVURV9FVkVOVF9GQUlMVVJFIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjYXJ0IiwiaXNMb2FkaW5nQ2FydCIsImlzUmVtb3ZlaW5nQ2FydCIsIlNob3BJZCIsInVuZGVmaW5lZCIsIlRhYmxlSWQiLCJMT0FEX0NBUlRfUkVRVUVTVCIsIkxPQURfQ0FSVF9TVUNDRVNTIiwiTE9BRF9DQVJUX0ZBSUxVUkUiLCJSRU1PVkVfSVRFTV9SRVFVRVNUIiwiUkVNT1ZFX0lURU1fU1VDQ0VTUyIsIlJFTU9WRV9JVEVNX0ZBSUxVUkUiLCJBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUIiwiU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVCIsIkFERF9DQVJUX0lURU1fUkVRVUVTVCIsIlJFTU9WRV9DQVJUX0lURU1fUkVRVUVTVCIsIkNMRUFSX0NBUlRfUkVRVUVTVCIsIkdFVF9TSE9QX1RBQkxFX0lEIiwiaXRlbXMiLCJmaWx0ZXIiLCJuZXdQcm9kdWN0IiwicHJvZHVjdCIsInByb2R1Y3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJmb3JtZXJQcm9kdWN0IiwiZmluYWxQcm9kdWN0IiwicXVhbnRpdHkiLCJjYXJ0TGlzdCIsImluZGV4IiwiU0VUX0NMSUVOVF9TVEFURSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiSFlEUkFURSIsInBheWxvYWQiLCJhZG1pbiIsInNob3AiLCJwYXltZW50IiwicHJvZHVjdHMiLCJuYXZpU2l6ZSIsImlzQWRkaW5nUHJvZHVjdCIsImNhdGVnb3JpZXMiLCJMT0FEX1BST0RVQ1RTX1JFUVVFU1QiLCJMT0FEX1BST0RVQ1RTX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RTX0ZBSUxVUkUiLCJBRERfUVVBTlRJVFlfUkVRVUVTVCIsIkFERF9RVUFOVElUWV9TVUNDRVNTIiwiQUREX1FVQU5USVRZX0ZBSUxVUkUiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCIsIlNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTIiwiU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUiLCJBRERfUFJPRFVDVF9SRVFVRVNUIiwiQUREX1BST0RVQ1RfU1VDQ0VTUyIsIkFERF9QUk9EVUNUX0ZBSUxVUkUiLCJJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUIiwiR0VUX05BVklCQVJfU0laRSIsIlNFTEVDVF9DQVRFR09SWV9TVUNDRVNTIiwibWVudXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwidGl0bGUiLCJpbmRleE9mIiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCIsInIiLCJDYXRlZ29yeSIsImlzUGF5aW5nIiwicGF5aW5nRXJyb3IiLCJoaXN0b3J5IiwiaXNMb2FkaW5nSGlzdG9yeSIsImxvYWRpbmdFcnJvciIsInJlbW92aW5nSGlzdG9yeSIsInJlbW92aW5nSGlzdG9yeUVycm9yIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nRXJyb3IiLCJpc1NlYWNoaW5nSGlzdG9yeSIsIlBBWU1FTlRfUkVRVUVTVCIsIlBBWU1FTlRfU1VDQ0VTUyIsIlBBWU1FTlRfRkFJTFVSRSIsIkxPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QiLCJMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTIiwiTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSIsIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUIiwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MiLCJDTElFTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlJBVElOR19SRVFVRVNUIiwiUkFUSU5HX1NVQ0NFU1MiLCJSQVRJTkdfRkFJTFVSRSIsIlNFQVJDSF9ISVNUT1JZX1JFUVVFU1QiLCJTRUFSQ0hfSElTVE9SWV9TVUNDRVNTIiwiU0VBUkNIX0hJU1RPUllfRkFJTFVSRSIsInN0YXRlbSIsInN0YXR1cyIsIlBheW1lbnRJZCIsInJhdGluZyIsInJhdGUiLCJSYXRpbmciLCJpc0FkZGluZ0ZpbGVzIiwiaXNMb2FkaW5nUHJvZHVjdHMiLCJpc1NlbGVjdGluZ1Byb2R1Y3QiLCJzZWxlY3RpbmdQcm9kdWN0RXJyb3IiLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyIsIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJFRElUX1BST0RVQ1RfUkVRVUVTVCIsIkVESVRfUFJPRFVDVF9TVUNDRVNTIiwiRURJVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyIsIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkUiLCJDSEVDS19QUk9EVUNUX1NVQ0NFU1MiLCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCIsIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUIiwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MiLCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRSIsIkFERF9DQVRFR09SWV9SRVFVRVNUIiwiQUREX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJjaGVja2VkIiwibWFwIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwiaXNTaWduaW5nVXAiLCJzaWduVXBTdWNjZXNzIiwic2lnblVwRXJyb3IiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2luZ091dCIsImxvZ291dEVycm9yIiwiaXNMb2FkaW5nVXNlciIsImxvYWRpbmdVc2VyRXJyb3IiLCJjaGFuZ2luZ1Bhc3N3b3JkIiwicGFzc3dvcmRDaGFuZ2VFcnJvciIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJQQVNTV09SRF9DT05GSVJNX1JFUVVFU1QiLCJQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1MiLCJQQVNTV09SRF9DT05GSVJNX0ZBSUxVUkUiLCJQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUyIsIlBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFIiwic2lnblVwRmFpbHVyZSIsImZ1bGxVc2VyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJmb3JrIiwibG9hZFByb2R1Y3RBcGkiLCJsb2FkUHJvZHVjdHMiLCJjYWxsIiwicHV0Iiwid2F0Y2hMb2FkUHJvZHVjdHMiLCJ0YWtlTGF0ZXN0IiwicHJvZHVjdHNTYWdhIiwicGF5bWVudEhpc3RvcnlBUEkiLCJwYXltZW50SGlzdG9yeSIsIndhdGNoUGF5bWVudEhpc3RvcnkiLCJyYXRpbmdBUEkiLCJQYXltZW50c0lkIiwiVXNlcklkIiwiUHJvZHVjdElkIiwid2F0Y2hSYXRpbmciLCJzZWFyY2hIaXN0b3J5QVBJIiwic2VhcmNoSGlzdG9yeSIsIndhdGNoU2VhcmNoSGlzdG9yeSIsImNhbmNlbFBheW1lbnRBUEkiLCJpbXBfdWlkIiwiYW1vdW50IiwiY2FuY2VsUGF5bWVudCIsIndhdGNoQ2FuY2VsUGF5bWVudCIsInVzZXJTYWdhIiwiYWRkUHJvZHVjdEFwaSIsImFkZFByb2R1Y3QiLCJmb3JtRGF0YSIsIndhdGNoQWRkUHJvZHVjdCIsImxvYWRQcm9kdWN0c0FwaSIsImRlbGV0ZVByb2R1Y3RBUEkiLCJkZWxldGVQcm9kdWN0Iiwid2F0Y2hEZWxldGVQcm9kdWN0Iiwic2VsZWN0UHJvZHVjdEFQSSIsInNlbGVjdFByb2R1Y3QiLCJ3YXRjaFNlbGVjdFByb2R1Y3QiLCJlZGl0UHJvZHVkY3RBUEkiLCJlZGl0UHJvZHVjdCIsIndhdGNoRWRpdFByb2R1Y3QiLCJkaXNjb3VudFByb2R1Y3RBUEkiLCJkaXNjb3VudFByb2R1Y3QiLCJ3YXRjaERpc2NvdW50UHJvZHVjdCIsImFkZENhdGVnb3J5QVBJIiwiYWRkQ2F0ZWdvcnkiLCJ3YXRjaEFkZENhdGVnb3J5IiwiZWRpdENhdGVnb3J5QVBJIiwiZWRpdENhdGVnb3J5Iiwid2F0Y2hFZGl0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeUFQSSIsImRlbGV0ZUNhdGVnb3J5Iiwid2F0Y2hEZWxldGVDYXRlZ29yeSIsImRlbGV0ZURpc2NvdW50QVBJIiwiUHJvZHVjdElkcyIsIkNhdGVnb3J5SWQiLCJkZWxldGVEaXNjb3VudCIsIndhdGNoRGVsZXRlRGlzY291bnQiLCJsb2dpbkFwaSIsImxvZ2luRGF0YSIsImxvZ2luIiwicmVzcG9uc2UiLCJ3YXRjaExvZ2luIiwidGFrZUV2ZXJ5Iiwic2lnblVwQXBpIiwic2lnblVwRGF0YSIsInNpZ25VcCIsIndhdGNoU2lnblVwIiwibG9hZFVzZXJBcGkiLCJsb2FkVXNlciIsIndhdGNoTG9hZFVzZXIiLCJjaGFuZ2VQYXNzd29yZEFwaSIsInBhc3N3b3JkQ2hhbmdlIiwid2F0Y2hQYXNzd29yZENoYW5nZSIsInBlcnNpc3RTdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oZW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInJvb3RTdG9yZSIsImNyZWF0ZVN0b3JlIiwiaXNTZXJ2ZXIiLCJzYWdhVGFzayIsInJ1biIsInBlcnNpc3RSZWR1Y2VyIiwicGVyc2lzdENvbmZpZyIsIndoaXRlbGlzdCIsInN0b3JhZ2UiLCJ0cmFuc2Zvcm1zIiwicGVyc2lzdGVkUmVkdWNlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBaUM7QUFDdEQsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxF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QUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNwTGE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsbUJBQW1CLG1CQUFPLENBQUMsNEdBQStCO0FBQzFEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFFQSxNQUFNa0ksR0FBRyxHQUFHLENBQUM7QUFBRXpJO0FBQUYsQ0FBRCxLQUFtQjtBQUM3QixRQUFNZ0osS0FBSyxHQUFHQyw0REFBUSxDQUFFdFgsS0FBRCxJQUFXQSxLQUFaLENBQXRCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSwrREFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQSxRQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUIsUUFGRixlQUdFO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsV0FBRyxFQUFDO0FBRk4sUUFIRixlQU9FO0FBQ0UsWUFBSSxFQUFDLGlCQURQO0FBRUUsV0FBRyxFQUFDO0FBRk4sUUFQRixlQVdFO0FBQ0UsWUFBSSxFQUFDLG9FQURQO0FBRUUsV0FBRyxFQUFDO0FBRk4sUUFYRixlQWVFO0FBQVEsV0FBRyxFQUFDO0FBQVosUUFmRixlQWlCRTtBQUNFLFlBQUksRUFBQyxpQkFEUDtBQUVFLFdBQUcsRUFBQztBQUZOLFFBakJGLGVBcUJFO0FBQUEsa0JBQ0k7QUFDWjtBQUNBO0FBQ0E7QUFKUSxRQXJCRixlQTJCRTtBQUNFLFdBQUcsRUFBRywwQ0FBeUM0SSxrQ0FBc0M7QUFEdkYsUUEzQkYsZUE4QkU7QUFDRSxZQUFJLEVBQUMsaUJBRFA7QUFFRSxXQUFHLEVBQUcsMENBQXlDQSxrQ0FBeUM7QUFGMUYsUUE5QkY7QUFBQSxNQURGLGVBb0NFLDhEQUFDLDJFQUFEO0FBQWEsZUFBUyxFQUFFeU8sS0FBSyxDQUFDRSxXQUE5QjtBQUFBLDZCQUNFLDhEQUFDLDJFQUFEO0FBQUEsK0JBQ0UsOERBQUMsU0FBRDtBQURGO0FBREYsTUFwQ0Y7QUFBQSxJQURGO0FBNENELENBL0NEOztBQWlEZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQkMsc0RBQWEsQ0FBQ1osR0FBRCxDQUEvQixDQUFmLEU7Ozs7Ozs7Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTTNULFlBQVksR0FBRztBQUNuQndVLG1CQUFpQixFQUFFLEtBREE7QUFFbkJDLHNCQUFvQixFQUFFLElBRkg7QUFHbkJDLFVBQVEsRUFBRSxFQUhTO0FBSW5CQyxrQkFBZ0IsRUFBRSxFQUpDO0FBS25CQyxtQkFBaUIsRUFBRSxLQUxBO0FBTW5CQyxzQkFBb0IsRUFBRSxJQU5IO0FBT25CQyxVQUFRLEVBQUUsRUFQUztBQVFuQkMsa0JBQWdCLEVBQUUsRUFSQztBQVNuQjNLLFFBQU0sRUFBRSxFQVRXO0FBVW5CNEssaUJBQWUsRUFBRSxJQVZFO0FBV25CQyxpQkFBZSxFQUFFLEtBWEU7QUFZbkJDLFVBQVEsRUFBRTtBQVpTLENBQXJCO0FBZU8sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCOztBQUVQLE1BQU1DLE9BQU8sR0FBRyxDQUFDNVosS0FBSyxHQUFHbUQsWUFBVCxFQUF1QjBXLE1BQXZCLEtBQWtDO0FBQ2hELFNBQU9DLDRDQUFPLENBQUM5WixLQUFELEVBQVMrWixLQUFELElBQVc7QUFDL0IsWUFBUUYsTUFBTSxDQUFDelosSUFBZjtBQUNFLFdBQUtxWSxxQkFBTDtBQUNFc0IsYUFBSyxDQUFDaEMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTs7QUFDRixXQUFLVyxxQkFBTDtBQUNFcUIsYUFBSyxDQUFDaEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWdDLGFBQUssQ0FBQzlCLFFBQU4sR0FBaUI0QixNQUFNLENBQUN2WixJQUF4QjtBQUNBeVosYUFBSyxDQUFDN0IsZ0JBQU4sR0FBeUIyQixNQUFNLENBQUN2WixJQUFoQztBQUNBOztBQUNGLFdBQUtxWSxxQkFBTDtBQUNFb0IsYUFBSyxDQUFDaEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQWdDLGFBQUssQ0FBQy9CLG9CQUFOLEdBQTZCNkIsTUFBTSxDQUFDM1gsS0FBcEM7QUFDQTs7QUFDRixXQUFLdVcscUJBQUw7QUFDRXNCLGFBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBQ0YsV0FBS2UscUJBQUw7QUFDRXFCLGFBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FvQyxhQUFLLENBQUNsQyxRQUFOLEdBQWlCZ0MsTUFBTSxDQUFDdlosSUFBeEI7QUFDQXlaLGFBQUssQ0FBQ2pDLGdCQUFOLEdBQXlCK0IsTUFBTSxDQUFDdlosSUFBaEM7QUFDQTs7QUFDRixXQUFLcVkscUJBQUw7QUFDRW9CLGFBQUssQ0FBQ3BDLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0FvQyxhQUFLLENBQUNuQyxvQkFBTixHQUE2QmlDLE1BQU0sQ0FBQzNYLEtBQXBDO0FBQ0E7O0FBQ0YsV0FBS3lYLG1CQUFMO0FBQ0VJLGFBQUssQ0FBQzFCLFFBQU4sR0FBaUJ3QixNQUFNLENBQUN2WixJQUF4QjtBQUNBOztBQUNGO0FBQ0VOLGFBQUs7QUFDTDtBQTlCSjtBQWdDRCxHQWpDYSxDQUFkO0FBa0NELENBbkNEOztBQXFDZTRaLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkEsTUFBTXpXLFlBQVksR0FBRztBQUNuQjZXLE1BQUksRUFBRSxFQURhO0FBRW5CQyxlQUFhLEVBQUUsS0FGSTtBQUduQkMsaUJBQWUsRUFBRSxLQUhFO0FBSW5CQyxRQUFNLEVBQUVDLFNBSlc7QUFLbkJDLFNBQU8sRUFBRUQ7QUFMVSxDQUFyQjtBQVFPLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLHlCQUF5QixHQUFHLDJCQUFsQztBQUNBLE1BQU1DLCtCQUErQixHQUFHLGlDQUF4QztBQUVBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVRLGdFQUFDamIsS0FBSyxHQUFHbUQsWUFBVCxFQUF1QjBXLE1BQXZCLEtBQWtDO0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ3paLElBQWY7QUFDRSxTQUFLa2EsaUJBQUw7QUFBd0I7QUFDdEIsaUNBQ0t0YSxLQURMO0FBR0Q7O0FBRUQsU0FBS3VhLGlCQUFMO0FBQXdCO0FBQ3RCLCtDQUNLdmEsS0FETDtBQUVFZ2EsY0FBSSxFQUFFLENBQUMsR0FBR2hhLEtBQUssQ0FBQ2dhLElBQVYsRUFBZ0JILE1BQU0sQ0FBQ3ZaLElBQXZCO0FBRlI7QUFJRDs7QUFFRCxTQUFLa2EsaUJBQUw7QUFBd0I7QUFDdEIsaUNBQ0t4YSxLQURMO0FBR0Q7O0FBRUQsU0FBS3lhLG1CQUFMO0FBQTBCO0FBQ3hCLGNBQU1TLEtBQUssR0FBR2xiLEtBQUssQ0FBQ2dhLElBQU4sQ0FBV21CLE1BQVgsQ0FBbUJ4RyxJQUFELElBQVVBLElBQUksQ0FBQ3BVLEVBQUwsS0FBWXNaLE1BQU0sQ0FBQ3RaLEVBQS9DLENBQWQ7QUFDQSwrQ0FDS1AsS0FETDtBQUVFZ2EsY0FBSSxFQUFFLENBQUMsR0FBR2tCLEtBQUo7QUFGUjtBQUlEOztBQUVELFNBQUtKLHFCQUFMO0FBQTRCO0FBQzFCLGNBQU1NLFVBQVUsR0FBR3ZCLE1BQU0sQ0FBQ3dCLE9BQTFCO0FBQ0EsY0FBTUMsWUFBWSxHQUFHdGIsS0FBSyxDQUFDZ2EsSUFBTixDQUFXdUIsU0FBWCxDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNqYixFQUFGLEtBQVM2YSxVQUFVLENBQUM3YSxFQUFoRCxDQUFyQjs7QUFDQSxZQUFJK2EsWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkIsZ0JBQU1HLGFBQWEsR0FBR3piLEtBQUssQ0FBQ2dhLElBQU4sQ0FBV3NCLFlBQVgsQ0FBdEI7O0FBQ0EsZ0JBQU1JLFlBQVksbUNBQ2JELGFBRGE7QUFFaEJFLG9CQUFRLEVBQUVGLGFBQWEsQ0FBQ0UsUUFBZCxHQUF5QlAsVUFBVSxDQUFDTztBQUY5QixZQUFsQjs7QUFJQSxnQkFBTUMsUUFBUSxHQUFHLENBQUMsR0FBRzViLEtBQUssQ0FBQ2dhLElBQU4sQ0FBV21CLE1BQVgsQ0FBbUJLLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixLQUFTNmEsVUFBVSxDQUFDN2EsRUFBN0MsQ0FBSixFQUFzRG1iLFlBQXRELENBQWpCO0FBRUEsaURBQ0sxYixLQURMO0FBRUVnYSxnQkFBSSxFQUFFNEI7QUFGUjtBQUlEOztBQUNELCtDQUNLNWIsS0FETDtBQUVFZ2EsY0FBSSxFQUFFLENBQUMsR0FBR2hhLEtBQUssQ0FBQ2dhLElBQVYsRUFBZ0JvQixVQUFoQjtBQUZSO0FBSUQ7O0FBRUQsU0FBS1IseUJBQUw7QUFBZ0M7QUFDOUIsY0FBTWlCLEtBQUssR0FBRzdiLEtBQUssQ0FBQ2dhLElBQU4sQ0FBV3VCLFNBQVgsQ0FBc0J2QixJQUFELElBQVVBLElBQUksQ0FBQ3paLEVBQUwsSUFBV3NaLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWUMsRUFBdEQsQ0FBZDtBQUNBLGNBQU04YSxPQUFPLEdBQUdyYixLQUFLLENBQUNnYSxJQUFOLENBQVc2QixLQUFYLENBQWhCO0FBQ0EsWUFBSUYsUUFBUSxHQUFHTixPQUFPLENBQUNNLFFBQXZCO0FBQ0FBLGdCQUFRLEdBQUcsR0FBWCxHQUFrQkEsUUFBUSxJQUFJLENBQTlCLEdBQW1DLEVBQW5DO0FBQ0EsY0FBTTNCLElBQUksR0FBRyxDQUFDLEdBQUdoYSxLQUFLLENBQUNnYSxJQUFWLENBQWI7QUFDQUEsWUFBSSxDQUFDNkIsS0FBRCxDQUFKLG1DQUFtQlIsT0FBbkI7QUFBNEJNO0FBQTVCO0FBRUEsK0NBQ0szYixLQURMO0FBRUVnYTtBQUZGO0FBSUQ7O0FBRUQsU0FBS2EsK0JBQUw7QUFBc0M7QUFDcEMsY0FBTWdCLEtBQUssR0FBRzdiLEtBQUssQ0FBQ2dhLElBQU4sQ0FBV3VCLFNBQVgsQ0FBc0J2QixJQUFELElBQVVBLElBQUksQ0FBQ3paLEVBQUwsS0FBWXNaLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWUMsRUFBdkQsQ0FBZDtBQUNBLGNBQU04YSxPQUFPLEdBQUdyYixLQUFLLENBQUNnYSxJQUFOLENBQVc2QixLQUFYLENBQWhCO0FBQ0EsWUFBSUYsUUFBUSxHQUFHTixPQUFPLENBQUNNLFFBQXZCO0FBQ0FBLGdCQUFRLEdBQUcsQ0FBWCxHQUFnQkEsUUFBUSxJQUFJLENBQTVCLEdBQWlDLENBQWpDO0FBQ0EsY0FBTTNCLElBQUksR0FBRyxDQUFDLEdBQUdoYSxLQUFLLENBQUNnYSxJQUFWLENBQWI7QUFDQUEsWUFBSSxDQUFDNkIsS0FBRCxDQUFKLG1DQUFtQlIsT0FBbkI7QUFBNEJNO0FBQTVCO0FBQ0EsK0NBQ0szYixLQURMO0FBRUVnYTtBQUZGO0FBSUQ7O0FBRUQsU0FBS2dCLGtCQUFMO0FBQXlCO0FBQ3ZCLCtDQUNLaGIsS0FETDtBQUVFZ2EsY0FBSSxFQUFFO0FBRlI7QUFJRDs7QUFFRCxTQUFLaUIsaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0tqYixLQURMO0FBRUVtYSxnQkFBTSxFQUFFTixNQUFNLENBQUN2WixJQUFQLENBQVk2WixNQUZ0QjtBQUdFRSxpQkFBTyxFQUFFUixNQUFNLENBQUN2WixJQUFQLENBQVkrWjtBQUh2QjtBQUtEOztBQUVEO0FBQVM7QUFDUCxpQ0FBWXJhLEtBQVo7QUFDRDtBQTlGSDtBQWdHRCxDQWpHRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU04YixnQkFBZ0IsR0FBRyxrQkFBekI7QUFFUCxNQUFNQyxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbENILE9BQUssRUFBRSxDQUFDN2IsS0FBSyxHQUFHLEVBQVQsRUFBYTZaLE1BQWIsS0FBd0I7QUFDN0I1VyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxnQkFBZTJXLE1BQU0sQ0FBQ3paLElBQUssRUFBeEM7O0FBQ0EsWUFBUXlaLE1BQU0sQ0FBQ3paLElBQWY7QUFDRSxXQUFLNmIsMERBQUw7QUFDRSwrQ0FBWWpjLEtBQVosR0FBc0I2WixNQUFNLENBQUNxQyxPQUE3Qjs7QUFFRjtBQUNFLGVBQU9sYyxLQUFQO0FBTEo7QUFPRCxHQVZpQztBQVdsQ21jLHVEQVhrQztBQVlsQ2xjLHFEQVprQztBQWFsQ21jLHFEQWJrQztBQWNsQ3pYLHFEQWRrQztBQWVsQ3FWLHFEQWZrQztBQWdCbENxQywyREFBT0E7QUFoQjJCLENBQUQsQ0FBbkM7QUFtQmVOLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLE1BQU01WSxZQUFZLEdBQUc7QUFDbkJtWixVQUFRLEVBQUUsRUFEUztBQUVuQjVYLGdCQUFjLEVBQUUsRUFGRztBQUduQjZYLFVBQVEsRUFBRSxJQUhTO0FBSW5CbEMsU0FBTyxFQUFFLElBSlU7QUFLbkJtQyxpQkFBZSxFQUFFLEtBTEU7QUFNbkJ2QyxlQUFhLEVBQUUsS0FOSTtBQU9uQndDLFlBQVUsRUFBRTtBQVBPLENBQXJCO0FBVU8sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBQ0EsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTS9DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU04Qyx5QkFBeUIsR0FBRywyQkFBbEM7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxNQUFNdmEsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTXdhLHVCQUF1QixHQUFHLHlCQUFoQzs7QUFFUCxNQUFNNUQsT0FBTyxHQUFHLENBQUM1WixLQUFLLEdBQUdtRCxZQUFULEVBQXVCMFcsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDelosSUFBZjtBQUNFLFNBQUttZCxnQkFBTDtBQUF1QjtBQUNyQiwrQ0FDS3ZkLEtBREw7QUFFRXVjLGtCQUFRLEVBQUUxQyxNQUFNLENBQUN2WjtBQUZuQjtBQUlEOztBQUVELFNBQUt3YyxvQkFBTDtBQUEyQjtBQUN6QixjQUFNakIsS0FBSyxHQUFHN2IsS0FBSyxDQUFDc2MsUUFBTixDQUFlZixTQUFmLENBQ1hGLE9BQUQsSUFBYUEsT0FBTyxDQUFDOWEsRUFBUixLQUFlc1osTUFBTSxDQUFDdlosSUFBUCxDQUFZQyxFQUQ1QixDQUFkO0FBR0EsY0FBTThhLE9BQU8sR0FBR3JiLEtBQUssQ0FBQ3NjLFFBQU4sQ0FBZVQsS0FBZixDQUFoQjtBQUNBLFlBQUlGLFFBQVEsR0FBR04sT0FBTyxDQUFDTSxRQUF2QjtBQUNBQSxnQkFBUSxHQUFHLEdBQVgsR0FBa0JBLFFBQVEsSUFBSSxDQUE5QixHQUFtQyxFQUFuQztBQUNBLGNBQU1XLFFBQVEsR0FBRyxDQUFDLEdBQUd0YyxLQUFLLENBQUNzYyxRQUFWLENBQWpCO0FBQ0FBLGdCQUFRLENBQUNULEtBQUQsQ0FBUixtQ0FBdUJSLE9BQXZCO0FBQWdDTTtBQUFoQztBQUVBLCtDQUNLM2IsS0FETDtBQUVFc2M7QUFGRjtBQUlEOztBQUVELFNBQUtXLDBCQUFMO0FBQWlDO0FBQy9CLGNBQU1wQixLQUFLLEdBQUc3YixLQUFLLENBQUNzYyxRQUFOLENBQWVmLFNBQWYsQ0FDWEYsT0FBRCxJQUFhQSxPQUFPLENBQUM5YSxFQUFSLEtBQWVzWixNQUFNLENBQUN2WixJQUFQLENBQVlDLEVBRDVCLENBQWQ7QUFHQSxjQUFNOGEsT0FBTyxHQUFHcmIsS0FBSyxDQUFDc2MsUUFBTixDQUFlVCxLQUFmLENBQWhCO0FBQ0EsWUFBSUYsUUFBUSxHQUFHTixPQUFPLENBQUNNLFFBQXZCO0FBQ0FBLGdCQUFRLEdBQUcsQ0FBWCxHQUFnQkEsUUFBUSxJQUFJLENBQTVCLEdBQWlDLENBQWpDO0FBQ0EsY0FBTVcsUUFBUSxHQUFHLENBQUMsR0FBR3RjLEtBQUssQ0FBQ3NjLFFBQVYsQ0FBakI7QUFDQUEsZ0JBQVEsQ0FBQ1QsS0FBRCxDQUFSLG1DQUF1QlIsT0FBdkI7QUFBZ0NNO0FBQWhDO0FBQ0EsK0NBQ0szYixLQURMO0FBRUVzYztBQUZGO0FBSUQ7O0FBRUQsU0FBS0kscUJBQUw7QUFBNEI7QUFDMUIsaUNBQ0sxYyxLQURMO0FBR0Q7O0FBRUQsU0FBSzJjLHFCQUFMO0FBQTRCO0FBQzFCLFlBQUk5QyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixFQUFlK1osT0FBbkIsRUFBNEI7QUFDMUIsaURBQ0tyYSxLQURMO0FBRUVzYyxvQkFBUSxFQUFFekMsTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosRUFBZW1kLEtBRjNCO0FBR0UvWSwwQkFBYyxFQUFFbVYsTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosRUFBZW1kLEtBSGpDO0FBSUVwRCxtQkFBTyxFQUFFUixNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixFQUFlK1osT0FKMUI7QUFLRW9DLHNCQUFVLEVBQUU1QyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWjtBQUxkO0FBT0Q7O0FBQ0QsK0NBQ0tOLEtBREw7QUFFRTBFLHdCQUFjLEVBQUVtVixNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixDQUZsQjtBQUdFZ2Msa0JBQVEsRUFBRXpDLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWSxDQUFaLENBSFo7QUFJRW1jLG9CQUFVLEVBQUU1QyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWjtBQUpkO0FBTUQ7O0FBRUQsU0FBS3NjLHFCQUFMO0FBQTRCO0FBQzFCLGlDQUNLNWMsS0FETDtBQUdEOztBQUVELFNBQUttZCxtQkFBTDtBQUEwQjtBQUN4QixpQ0FDS25kLEtBREw7QUFHRDs7QUFFRCxTQUFLb2QsbUJBQUw7QUFBMEI7QUFDeEIsK0NBQ0twZCxLQURMO0FBRUVzYyxrQkFBUSxFQUFFLENBQUN6QyxNQUFNLENBQUN2WixJQUFSLEVBQWMsR0FBR04sS0FBSyxDQUFDc2MsUUFBdkI7QUFGWjtBQUlEOztBQUVELFNBQUtlLG1CQUFMO0FBQTBCO0FBQ3hCLGlDQUNLcmQsS0FETDtBQUdEOztBQUVELFNBQUtzYSxpQkFBTDtBQUF3QjtBQUN0QixpQ0FDS3RhLEtBREw7QUFHRDs7QUFFRCxTQUFLdWEsaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0t2YSxLQURMO0FBRUVnYSxjQUFJLEVBQUUsQ0FBQyxHQUFHaGEsS0FBSyxDQUFDZ2EsSUFBVixFQUFnQkgsTUFBTSxDQUFDdlosSUFBdkI7QUFGUjtBQUlEOztBQUVELFNBQUtrYSxpQkFBTDtBQUF3QjtBQUN0QixpQ0FDS3hhLEtBREw7QUFHRDs7QUFFRCxTQUFLc2QseUJBQUw7QUFBZ0M7QUFDOUIsY0FBTWpDLE9BQU8sR0FBR3hCLE1BQU0sQ0FBQ3ZaLElBQXZCO0FBQ0EsY0FBTXViLEtBQUssR0FBRzdiLEtBQUssQ0FBQ3NjLFFBQU4sQ0FBZWYsU0FBZixDQUEwQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNqYixFQUFGLElBQVFzWixNQUFNLENBQUN2WixJQUFQLENBQVlDLEVBQXBELENBQWQ7QUFDQSxjQUFNK2IsUUFBUSxHQUFHLENBQUMsR0FBR3RjLEtBQUssQ0FBQ3NjLFFBQVYsQ0FBakI7QUFDQUEsZ0JBQVEsQ0FBQ1QsS0FBRCxDQUFSLG1DQUF1QlIsT0FBdkI7QUFBZ0NNLGtCQUFRLEVBQUU7QUFBMUM7QUFDQSwrQ0FDSzNiLEtBREw7QUFFRXNjO0FBRkY7QUFJRDs7QUFFRCxTQUFLdFosc0JBQUw7QUFBNkI7QUFDM0IsY0FBTTBhLGdCQUFnQixHQUFHMWQsS0FBSyxDQUFDMEUsY0FBTixDQUFxQnlXLE1BQXJCLENBQTZCRSxPQUFELElBQWE7QUFDaEUsaUJBQU9BLE9BQU8sQ0FBQ3NDLEtBQVIsQ0FBY0MsT0FBZCxDQUFzQi9ELE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWW1DLElBQWxDLElBQTBDLENBQUMsQ0FBbEQ7QUFDRCxTQUZ3QixDQUF6QjtBQUdBLCtDQUFZekMsS0FBWjtBQUFtQnNjLGtCQUFRLEVBQUVvQjtBQUE3QjtBQUNEOztBQUVELFNBQUtGLHVCQUFMO0FBQThCO0FBQzVCLFlBQUkzRCxNQUFNLENBQUN0WixFQUFQLElBQWEsQ0FBakIsRUFBb0I7QUFDbEIsaURBQVlQLEtBQVo7QUFBbUJzYyxvQkFBUSxFQUFFLENBQUMsR0FBR3RjLEtBQUssQ0FBQzBFLGNBQVY7QUFBN0I7QUFDRCxTQUZELE1BRU8sSUFBSW1WLE1BQU0sQ0FBQ3RaLEVBQVAsSUFBYSxDQUFDLENBQWxCLEVBQXFCO0FBQzFCLGdCQUFNc2QsaUJBQWlCLEdBQUc3ZCxLQUFLLENBQUMwRSxjQUFOLENBQXFCeVcsTUFBckIsQ0FBNkJLLENBQUQsSUFBTztBQUMzRCxtQkFBT0EsQ0FBQyxDQUFDc0MsUUFBRixLQUFlLElBQXRCO0FBQ0QsV0FGeUIsQ0FBMUI7QUFHQSxpREFBWTlkLEtBQVo7QUFBbUJzYyxvQkFBUSxFQUFFdUI7QUFBN0I7QUFDRDs7QUFDRCxjQUFNSCxnQkFBZ0IsR0FBRzFkLEtBQUssQ0FBQzBFLGNBQU4sQ0FBcUJ5VyxNQUFyQixDQUN0QjRDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxRQUFGLENBQVd6ZCxFQUFYLElBQWlCc1osTUFBTSxDQUFDdFosRUFEUixDQUF6QjtBQUdBLCtDQUFZUCxLQUFaO0FBQW1Cc2Msa0JBQVEsRUFBRW9CO0FBQTdCO0FBQ0Q7O0FBRUQ7QUFBUztBQUNQLGlDQUNLMWQsS0FETDtBQUdEO0FBaEpIO0FBa0pELENBbkpEOztBQXFKZTRaLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTEEsTUFBTXpXLFlBQVksR0FBRztBQUNuQjhhLFVBQVEsRUFBRSxLQURTO0FBRW5CM2QsTUFBSSxFQUFFLEVBRmE7QUFHbkI0ZCxhQUFXLEVBQUUsSUFITTtBQUluQkMsU0FBTyxFQUFFLEVBSlU7QUFLbkJDLGtCQUFnQixFQUFFLEtBTEM7QUFNbkJDLGNBQVksRUFBRSxJQU5LO0FBT25CQyxpQkFBZSxFQUFFLEtBUEU7QUFRbkJDLHNCQUFvQixFQUFFLElBUkg7QUFTbkJDLHVCQUFxQixFQUFFLEtBVEo7QUFVbkJDLDRCQUEwQixFQUFFLElBVlQ7QUFXbkJDLG1CQUFpQixFQUFFO0FBWEEsQ0FBckI7QUFjTyxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFDQSxNQUFNQyw0QkFBNEIsR0FBRyw4QkFBckM7QUFFQSxNQUFNQyw2QkFBNkIsR0FBRywrQkFBdEM7QUFDQSxNQUFNQyw2QkFBNkIsR0FBRywrQkFBdEM7QUFDQSxNQUFNQyw2QkFBNkIsR0FBRywrQkFBdEM7QUFFQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFDQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFDQSxNQUFNQyw4QkFBOEIsR0FBRyxnQ0FBdkM7QUFFQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFUSxnRUFBQzVmLEtBQUssR0FBR21ELFlBQVQsRUFBdUIwVyxNQUF2QixLQUFrQztBQUMvQyxVQUFRQSxNQUFNLENBQUN6WixJQUFmO0FBQ0UsU0FBS3VlLGVBQUw7QUFBc0I7QUFDcEIsK0NBQVlrQixNQUFaO0FBQW9CNUIsa0JBQVEsRUFBRTtBQUE5QjtBQUNEOztBQUNELFNBQUtXLGVBQUw7QUFBc0I7QUFDcEI7QUFDQSwrQ0FBWTVlLEtBQVo7QUFBbUJpZSxrQkFBUSxFQUFFO0FBQTdCO0FBQ0Q7O0FBQ0QsU0FBS1ksZUFBTDtBQUFzQjtBQUNwQiwrQ0FBWTdlLEtBQVo7QUFBbUJpZSxrQkFBUSxFQUFFLEtBQTdCO0FBQW9DQyxxQkFBVyxFQUFFckUsTUFBTSxDQUFDM1g7QUFBeEQ7QUFDRDs7QUFFRCxTQUFLNGMsNEJBQUw7QUFBbUM7QUFDakMsK0NBQ0s5ZSxLQURMO0FBRUVvZSwwQkFBZ0IsRUFBRTtBQUZwQjtBQUlEOztBQUNELFNBQUtXLDRCQUFMO0FBQW1DO0FBQ2pDLCtDQUFZL2UsS0FBWjtBQUFtQm1lLGlCQUFPLEVBQUUsQ0FBQyxHQUFHdEUsTUFBTSxDQUFDdlosSUFBWCxDQUE1QjtBQUE4QzhkLDBCQUFnQixFQUFFO0FBQWhFO0FBQ0Q7O0FBQ0QsU0FBS1ksNEJBQUw7QUFBbUM7QUFDakMsK0NBQVloZixLQUFaO0FBQW1Cb2UsMEJBQWdCLEVBQUUsS0FBckM7QUFBNENDLHNCQUFZLEVBQUV4RSxNQUFNLENBQUMzWDtBQUFqRTtBQUNEOztBQUVELFNBQUtrZCw4QkFBTDtBQUFxQztBQUNuQywrQ0FBWXBmLEtBQVo7QUFBbUJzZSx5QkFBZSxFQUFFO0FBQXBDO0FBQ0Q7O0FBRUQsU0FBS2UsOEJBQUw7QUFBcUM7QUFDbkMsY0FBTXhELEtBQUssR0FBRzdiLEtBQUssQ0FBQ21lLE9BQU4sQ0FBYzVDLFNBQWQsQ0FBeUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixLQUFTc1osTUFBTSxDQUFDdlosSUFBUCxDQUFZQyxFQUFwRCxDQUFkO0FBQ0EsY0FBTTRkLE9BQU8sR0FBR25lLEtBQUssQ0FBQ21lLE9BQXRCO0FBQ0EsY0FBTTlCLE9BQU8sR0FBRzhCLE9BQU8sQ0FBQ3RDLEtBQUQsQ0FBdkI7QUFDQVEsZUFBTyxDQUFDeUQsTUFBUixHQUFpQmpHLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWXdmLE1BQTdCO0FBQ0EsK0NBQVk5ZixLQUFaO0FBQW1CbWUsaUJBQW5CO0FBQTRCRyx5QkFBZSxFQUFFO0FBQTdDO0FBQ0Q7O0FBRUQsU0FBS2dCLDhCQUFMO0FBQXFDO0FBQ25DLCtDQUFZdGYsS0FBWjtBQUFtQnNlLHlCQUFlLEVBQUU7QUFBcEM7QUFDRDs7QUFFRCxTQUFLaUIsY0FBTDtBQUFxQjtBQUNuQixpQ0FBWXZmLEtBQVo7QUFDRDs7QUFFRCxTQUFLd2YsY0FBTDtBQUFxQjtBQUNuQixjQUFNM0QsS0FBSyxHQUFHN2IsS0FBSyxDQUFDbWUsT0FBTixDQUFjNUMsU0FBZCxDQUF5QkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNqYixFQUFGLEtBQVNzWixNQUFNLENBQUN2WixJQUFQLENBQVl5ZixTQUFwRCxDQUFkO0FBQ0EsY0FBTTdjLEdBQUcsR0FBR2xELEtBQUssQ0FBQ21lLE9BQU4sQ0FBY3RDLEtBQWQsQ0FBWjtBQUNBLFlBQUltRSxNQUFNLEdBQUduRyxNQUFNLENBQUN2WixJQUFQLENBQVkyZixJQUF6QjtBQUNBLGNBQU05QixPQUFPLEdBQUcsQ0FBQyxHQUFHbmUsS0FBSyxDQUFDbWUsT0FBVixDQUFoQjtBQUNBQSxlQUFPLENBQUN0QyxLQUFELENBQVAsbUNBQXNCM1ksR0FBdEI7QUFBMkJnZCxnQkFBTSxFQUFFO0FBQUVELGdCQUFJLEVBQUVEO0FBQVI7QUFBbkM7QUFDQSwrQ0FDS2hnQixLQURMO0FBRUVtZTtBQUZGO0FBSUQ7O0FBRUQsU0FBS3NCLGNBQUw7QUFBcUI7QUFDbkIsaUNBQVl6ZixLQUFaO0FBQ0Q7O0FBRUQsU0FBSzBmLHNCQUFMO0FBQTZCO0FBQzNCLCtDQUFZMWYsS0FBWjtBQUFtQjBlLDJCQUFpQixFQUFFO0FBQXRDO0FBQ0Q7O0FBRUQsU0FBS2lCLHNCQUFMO0FBQTZCO0FBQzNCLCtDQUFZM2YsS0FBWjtBQUFtQm1lLGlCQUFPLEVBQUV0RSxNQUFNLENBQUN2WixJQUFuQztBQUF5Q29lLDJCQUFpQixFQUFFO0FBQTVEO0FBQ0Q7O0FBRUQsU0FBS2tCLHNCQUFMO0FBQTZCO0FBQzNCLCtDQUFZNWYsS0FBWjtBQUFtQjBlLDJCQUFpQixFQUFFO0FBQXRDO0FBQ0Q7O0FBRUQ7QUFBUztBQUNQLGlDQUFZMWUsS0FBWjtBQUNEO0FBM0VIO0FBNkVELENBOUVELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsTUFBTW1ELFlBQVksR0FBRztBQUNuQmlaLE1BQUksRUFBRSxJQURhO0FBRW5CRSxVQUFRLEVBQUUsRUFGUztBQUduQjVYLGdCQUFjLEVBQUUsRUFIRztBQUluQitYLFlBQVUsRUFBRSxFQUpPO0FBS25CcEIsU0FBTyxFQUFFLElBTFU7QUFNbkI4RSxlQUFhLEVBQUUsS0FOSTtBQU9uQkMsbUJBQWlCLEVBQUUsS0FQQTtBQVFuQkMsb0JBQWtCLEVBQUUsS0FSRDtBQVNuQkMsdUJBQXFCLEVBQUU7QUFUSixDQUFyQjtBQVlPLE1BQU1uRCxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNa0Qsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsMEJBQTBCLEdBQUcsNEJBQW5DO0FBRUEsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDOztBQUVQLE1BQU14SSxPQUFPLEdBQUcsQ0FBQzVaLEtBQUssR0FBR21ELFlBQVQsRUFBdUIwVyxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUN6WixJQUFmO0FBQ0UsU0FBSytjLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLbmQsS0FETDtBQUVFbWdCLHVCQUFhLEVBQUU7QUFGakI7QUFJRDs7QUFDRCxTQUFLL0MsbUJBQUw7QUFBMEI7QUFDeEIsK0NBQ0twZCxLQURMO0FBRUVzYyxrQkFBUSxFQUFFLENBQUN6QyxNQUFNLENBQUN2WixJQUFSLEVBQWMsR0FBR04sS0FBSyxDQUFDc2MsUUFBdkIsQ0FGWjtBQUdFNVgsd0JBQWMsRUFBRSxDQUFDbVYsTUFBTSxDQUFDdlosSUFBUixFQUFjLEdBQUdOLEtBQUssQ0FBQ3NjLFFBQXZCLENBSGxCO0FBSUU2RCx1QkFBYSxFQUFFO0FBSmpCO0FBTUQ7O0FBQ0QsU0FBSzlDLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLcmQsS0FETDtBQUVFbWdCLHVCQUFhLEVBQUU7QUFGakI7QUFJRDs7QUFFRCxTQUFLSSxzQkFBTDtBQUE2QjtBQUMzQiwrQ0FDS3ZnQixLQURMO0FBRUVvZ0IsMkJBQWlCLEVBQUU7QUFGckI7QUFJRDs7QUFDRCxTQUFLSSxzQkFBTDtBQUE2QjtBQUMzQiwrQ0FDS3hnQixLQURMO0FBRUVvZ0IsMkJBQWlCLEVBQUUsS0FGckI7QUFHRTlELGtCQUFRLEVBQUV6QyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixDQUhaO0FBSUVvRSx3QkFBYyxFQUFFbVYsTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosQ0FKbEI7QUFLRW1jLG9CQUFVLEVBQUU1QyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWjtBQUxkO0FBT0Q7O0FBQ0QsU0FBS21nQixzQkFBTDtBQUE2QjtBQUMzQiwrQ0FDS3pnQixLQURMO0FBRUVvZ0IsMkJBQWlCLEVBQUU7QUFGckI7QUFJRDs7QUFFRCxTQUFLTSxzQkFBTDtBQUE2QjtBQUMzQjtBQUFTTCw0QkFBa0IsRUFBRTtBQUE3QixXQUFzQ3JnQixLQUF0QztBQUNEOztBQUNELFNBQUsyZ0Isc0JBQUw7QUFBNkI7QUFDM0I7QUFBU04sNEJBQWtCLEVBQUU7QUFBN0IsV0FBdUNyZ0IsS0FBdkM7QUFBOENxYixpQkFBTyxFQUFFeEIsTUFBTSxDQUFDdlo7QUFBOUQ7QUFDRDs7QUFDRCxTQUFLc2dCLHNCQUFMO0FBQTZCO0FBQzNCO0FBQ0VQLDRCQUFrQixFQUFFO0FBRHRCLFdBRUtyZ0IsS0FGTDtBQUdFc2dCLCtCQUFxQixFQUFFekcsTUFBTSxDQUFDM1g7QUFIaEM7QUFLRDs7QUFFRCxTQUFLMmUsb0JBQUw7QUFBMkI7QUFDekIsaUNBQVk3Z0IsS0FBWjtBQUNEOztBQUNELFNBQUs4Z0Isb0JBQUw7QUFBMkI7QUFDekI3ZCxlQUFPLENBQUNDLEdBQVIsQ0FBWTJXLE1BQU0sQ0FBQ3ZaLElBQW5CO0FBQ0EsY0FBTXViLEtBQUssR0FBRzdiLEtBQUssQ0FBQ3NjLFFBQU4sQ0FBZWYsU0FBZixDQUEwQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNqYixFQUFGLEtBQVNzWixNQUFNLENBQUN2WixJQUFQLENBQVlDLEVBQXJELENBQWQ7QUFDQSxjQUFNK2IsUUFBUSxHQUFHLENBQUMsR0FBR3RjLEtBQUssQ0FBQ3NjLFFBQVYsQ0FBakI7QUFDQUEsZ0JBQVEsQ0FBQ1QsS0FBRCxDQUFSLEdBQWtCaEMsTUFBTSxDQUFDdlosSUFBekI7QUFFQSwrQ0FBWU4sS0FBWjtBQUFtQnNjLGtCQUFuQjtBQUE2QjVYLHdCQUFjLEVBQUU0WDtBQUE3QztBQUNEOztBQUNELFNBQUt5RSxvQkFBTDtBQUEyQjtBQUN6QixpQ0FBWS9nQixLQUFaO0FBQ0Q7O0FBRUQsU0FBS2doQixzQkFBTDtBQUE2QjtBQUMzQixpQ0FBWWhoQixLQUFaO0FBQ0Q7O0FBRUQsU0FBS2loQixzQkFBTDtBQUE2QjtBQUMzQixjQUFNM0UsUUFBUSxHQUFHdGMsS0FBSyxDQUFDc2MsUUFBTixDQUFlbkIsTUFBZixDQUF1QkssQ0FBRCxJQUFPQSxDQUFDLENBQUNqYixFQUFGLElBQVFzWixNQUFNLENBQUN2WixJQUE1QyxDQUFqQjtBQUNBLCtDQUFZTixLQUFaO0FBQW1Cc2Msa0JBQW5CO0FBQTZCNVgsd0JBQWMsRUFBRTRYO0FBQTdDO0FBQ0Q7O0FBRUQsU0FBSzRFLHNCQUFMO0FBQTZCO0FBQzNCLGlDQUFZbGhCLEtBQVo7QUFDRDs7QUFFRCxTQUFLd2hCLHVCQUFMO0FBQThCO0FBQzVCLGlDQUFZeGhCLEtBQVo7QUFDRDs7QUFFRCxTQUFLeWhCLHVCQUFMO0FBQThCO0FBQzVCeGUsZUFBTyxDQUFDQyxHQUFSLENBQVkyVyxNQUFNLENBQUN2WixJQUFuQjtBQUNBLGNBQU1vZCxnQkFBZ0IsR0FDcEI3RCxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixLQUFrQixDQUFsQixHQUNJdVosTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosQ0FESixHQUVJdVosTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosRUFBZTZhLE1BQWYsQ0FBdUJLLENBQUQsSUFBT0EsQ0FBQyxDQUFDd0MsUUFBRixDQUFXemQsRUFBWCxJQUFpQnNaLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWSxDQUFaLENBQTlDLENBSE47QUFJQSwrQ0FDS04sS0FETDtBQUVFc2Msa0JBQVEsRUFBRW9CLGdCQUZaO0FBR0VoWix3QkFBYyxFQUFFbVYsTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVo7QUFIbEI7QUFLRDs7QUFFRCxTQUFLNGdCLHNCQUFMO0FBQTZCO0FBQzNCLGlDQUFZbGhCLEtBQVo7QUFDRDs7QUFFRCxTQUFLbWhCLHFCQUFMO0FBQTRCO0FBQzFCLGNBQU10RixLQUFLLEdBQUc3YixLQUFLLENBQUNzYyxRQUFOLENBQWVmLFNBQWYsQ0FBMEJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixLQUFTc1osTUFBTSxDQUFDdFosRUFBaEQsQ0FBZDtBQUNBLGNBQU04YSxPQUFPLEdBQUdyYixLQUFLLENBQUNzYyxRQUFOLENBQWVULEtBQWYsQ0FBaEI7QUFDQSxZQUFJd0csT0FBTyxHQUFHaEgsT0FBTyxDQUFDZ0gsT0FBdEI7QUFDQUEsZUFBTyxHQUFHQSxPQUFPLEdBQUcsS0FBSCxHQUFXLElBQTVCO0FBQ0EsY0FBTS9GLFFBQVEsR0FBRyxDQUFDLEdBQUd0YyxLQUFLLENBQUNzYyxRQUFWLENBQWpCO0FBQ0FBLGdCQUFRLENBQUNULEtBQUQsQ0FBUixtQ0FBdUJSLE9BQXZCO0FBQWdDZ0g7QUFBaEM7QUFDQSwrQ0FBWXJpQixLQUFaO0FBQW1Cc2M7QUFBbkI7QUFDRDs7QUFFRCxTQUFLOEUsMEJBQUw7QUFBaUM7QUFDL0IsY0FBTTlFLFFBQVEsR0FBR3RjLEtBQUssQ0FBQ3NjLFFBQXZCO0FBQ0FBLGdCQUFRLENBQUNnRyxHQUFULENBQWM5RyxDQUFELElBQVFBLENBQUMsQ0FBQzZHLE9BQUYsR0FBWXhJLE1BQU0sQ0FBQ3dJLE9BQXhDO0FBQ0EsK0NBQVlyaUIsS0FBWjtBQUFtQnNjO0FBQW5CO0FBQ0Q7O0FBRUQsU0FBSytFLHdCQUFMO0FBQStCO0FBQzdCLGlDQUFZcmhCLEtBQVo7QUFDRDs7QUFFRCxTQUFLc2hCLHdCQUFMO0FBQStCO0FBQzdCLGNBQU01RCxnQkFBZ0IsR0FDcEI3RCxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixNQUFtQixDQUFuQixHQUNJdVosTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosRUFBZTZhLE1BQWYsQ0FBdUJLLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixJQUFRc1osTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosQ0FBckMsQ0FESixHQUVJdVosTUFBTSxDQUFDdlosSUFBUCxDQUFZLENBQVosQ0FITjtBQUlBMkMsZUFBTyxDQUFDQyxHQUFSLENBQVkyVyxNQUFNLENBQUN2WixJQUFQLENBQVksQ0FBWixDQUFaO0FBQ0EsK0NBQ0tOLEtBREw7QUFFRXNjLGtCQUFRLEVBQUVvQixnQkFGWjtBQUdFaFosd0JBQWMsRUFBRW1WLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWSxDQUFaO0FBSGxCO0FBS0Q7O0FBRUQsU0FBS2loQix3QkFBTDtBQUErQjtBQUM3QixpQ0FBWXZoQixLQUFaO0FBQ0Q7O0FBRUQsU0FBSzJoQixvQkFBTDtBQUEyQjtBQUN6QixpQ0FBWTNoQixLQUFaO0FBQ0Q7O0FBRUQsU0FBSzRoQixvQkFBTDtBQUEyQjtBQUN6QiwrQ0FBWTVoQixLQUFaO0FBQW1CeWMsb0JBQVUsRUFBRSxDQUFDLEdBQUd6YyxLQUFLLENBQUN5YyxVQUFWLEVBQXNCNUMsTUFBTSxDQUFDdlosSUFBN0I7QUFBL0I7QUFDRDs7QUFFRCxTQUFLdWhCLG9CQUFMO0FBQTJCO0FBQ3pCLGlDQUFZN2hCLEtBQVo7QUFDRDs7QUFFRCxTQUFLOGhCLHFCQUFMO0FBQTRCO0FBQzFCLGlDQUFZOWhCLEtBQVo7QUFDRDs7QUFFRCxTQUFLK2hCLHFCQUFMO0FBQTRCO0FBQzFCLGNBQU1sRyxLQUFLLEdBQUc3YixLQUFLLENBQUN5YyxVQUFOLENBQWlCbEIsU0FBakIsQ0FBNEJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixJQUFRc1osTUFBTSxDQUFDdlosSUFBUCxDQUFZQyxFQUF0RCxDQUFkO0FBQ0EsY0FBTWtjLFVBQVUsR0FBRyxDQUFDLEdBQUd6YyxLQUFLLENBQUN5YyxVQUFWLENBQW5CO0FBQ0FBLGtCQUFVLENBQUNaLEtBQUQsQ0FBVixHQUFvQmhDLE1BQU0sQ0FBQ3ZaLElBQTNCO0FBQ0EsK0NBQVlOLEtBQVo7QUFBbUJ5YztBQUFuQjtBQUNEOztBQUVELFNBQUt1RixxQkFBTDtBQUE0QjtBQUMxQixpQ0FBWWhpQixLQUFaO0FBQ0Q7O0FBRUQsU0FBS2lpQix1QkFBTDtBQUE4QjtBQUM1QixpQ0FBWWppQixLQUFaO0FBQ0Q7O0FBRUQsU0FBS2tpQix1QkFBTDtBQUE4QjtBQUM1QixjQUFNSyxrQkFBa0IsR0FBR3ZpQixLQUFLLENBQUN5YyxVQUFOLENBQWlCdEIsTUFBakIsQ0FDeEJLLENBQUQsSUFBT0EsQ0FBQyxDQUFDamIsRUFBRixLQUFTc1osTUFBTSxDQUFDdlosSUFBUCxDQUFZQyxFQURILENBQTNCO0FBR0EsY0FBTStiLFFBQVEsR0FBR3RjLEtBQUssQ0FBQzBFLGNBQU4sQ0FBcUJ5VyxNQUFyQixDQUNkSyxDQUFELElBQU9BLENBQUMsQ0FBQ3dDLFFBQUYsQ0FBV3pkLEVBQVgsS0FBa0JzWixNQUFNLENBQUN2WixJQUFQLENBQVlDLEVBRHRCLENBQWpCO0FBSUEsK0NBQ0tQLEtBREw7QUFFRXljLG9CQUFVLEVBQUU4RixrQkFGZDtBQUdFakcsa0JBSEY7QUFJRTVYLHdCQUFjLEVBQUU0WDtBQUpsQjtBQU1EOztBQUVELFNBQUtpRix3QkFBTDtBQUErQjtBQUM3QixpQ0FBWXZoQixLQUFaO0FBQ0Q7O0FBRUQsU0FBS29pQix5QkFBTDtBQUFnQztBQUM5QixZQUFJdkksTUFBTSxDQUFDdFosRUFBUCxJQUFhLENBQWpCLEVBQW9CO0FBQ2xCLGlEQUFZUCxLQUFaO0FBQW1Cc2Msb0JBQVEsRUFBRXRjLEtBQUssQ0FBQzBFO0FBQW5DO0FBQ0QsU0FGRCxNQUVPLElBQUltVixNQUFNLENBQUN0WixFQUFQLElBQWEsQ0FBQyxDQUFsQixFQUFxQjtBQUMxQixnQkFBTXNkLGlCQUFpQixHQUFHN2QsS0FBSyxDQUFDMEUsY0FBTixDQUFxQnlXLE1BQXJCLENBQ3ZCSyxDQUFELElBQU9BLENBQUMsQ0FBQ3NDLFFBQUYsS0FBZSxJQURFLENBQTFCO0FBR0EsaURBQVk5ZCxLQUFaO0FBQW1Cc2Msb0JBQVEsRUFBRXVCO0FBQTdCO0FBQ0QsU0FMTSxNQUtBO0FBQ0wsZ0JBQU1ILGdCQUFnQixHQUFHMWQsS0FBSyxDQUFDMEUsY0FBTixDQUFxQnlXLE1BQXJCLENBQ3RCSyxDQUFELElBQU9BLENBQUMsQ0FBQ3dDLFFBQUYsQ0FBV3pkLEVBQVgsSUFBaUJzWixNQUFNLENBQUN0WixFQURSLENBQXpCO0FBR0EsaURBQVlQLEtBQVo7QUFBbUJzYyxvQkFBUSxFQUFFb0I7QUFBN0I7QUFDRDtBQUNGOztBQUVEO0FBQVM7QUFDUCxpQ0FDSzFkLEtBREw7QUFHRDtBQXZOSDtBQXlORCxDQTFORDs7QUE0TmU0WixzRUFBZixFOzs7Ozs7Ozs7Ozs7QUN0UkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7QUFFQSxNQUFNelcsWUFBWSxHQUFHO0FBQ25CcWYsYUFBVyxFQUFFLEtBRE07QUFFbkJDLGVBQWEsRUFBRSxLQUZJO0FBR25CQyxhQUFXLEVBQUUsSUFITTtBQUluQjVpQixZQUFVLEVBQUUsS0FKTztBQUtuQjZpQixhQUFXLEVBQUUsS0FMTTtBQU1uQjNnQixZQUFVLEVBQUUsSUFOTztBQU9uQjRnQixjQUFZLEVBQUUsS0FQSztBQVFuQkMsYUFBVyxFQUFFLElBUk07QUFTbkJoakIsU0FBTyxFQUFFLElBVFU7QUFVbkJpakIsZUFBYSxFQUFFLEtBVkk7QUFXbkJDLGtCQUFnQixFQUFFLElBWEM7QUFZbkJDLGtCQUFnQixFQUFFLEtBWkM7QUFhbkJDLHFCQUFtQixFQUFFO0FBYkYsQ0FBckI7QUFnQk8sTUFBTTNnQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTTRnQixjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLE1BQU05ZSxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsTUFBTStlLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUNBLE1BQU1DLHdCQUF3QixHQUFHLDBCQUFqQztBQUVBLE1BQU12akIsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsTUFBTXdqQix1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFUSxnRUFBQzlqQixLQUFLLEdBQUdtRCxZQUFULEVBQXVCMFcsTUFBdkIsS0FBa0M7QUFDL0MsU0FBT0MsNENBQU8sQ0FBQzlaLEtBQUQsRUFBUytaLEtBQUQsSUFBVztBQUMvQixZQUFRRixNQUFNLENBQUN6WixJQUFmO0FBQ0UsV0FBS2dqQixlQUFMO0FBQ0VySixhQUFLLENBQUN5SSxXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0YsV0FBS2EsZUFBTDtBQUNFdEosYUFBSyxDQUFDeUksV0FBTixHQUFvQixLQUFwQjtBQUNBekksYUFBSyxDQUFDMEksYUFBTixHQUFzQixJQUF0QjtBQUNBOztBQUNGLFdBQUthLGVBQUw7QUFDRXZKLGFBQUssQ0FBQ3lJLFdBQU4sR0FBb0IsS0FBcEI7QUFDQXpJLGFBQUssQ0FBQ2dLLGFBQU4sR0FBc0JsSyxNQUFNLENBQUMzWCxLQUE3QjtBQUNBOztBQUNGLFdBQUtxaEIsaUJBQUw7QUFDRXhKLGFBQUssQ0FBQytJLGFBQU4sR0FBc0IsSUFBdEI7QUFDQTs7QUFDRixXQUFLVSxpQkFBTDtBQUNFekosYUFBSyxDQUFDK0ksYUFBTixHQUFzQixLQUF0QjtBQUNBL0ksYUFBSyxDQUFDbGEsT0FBTixHQUFnQmdhLE1BQU0sQ0FBQ3ZaLElBQXZCO0FBQ0E7O0FBQ0YsV0FBS21qQixpQkFBTDtBQUNFMUosYUFBSyxDQUFDK0ksYUFBTixHQUFzQixLQUF0QjtBQUNBL0ksYUFBSyxDQUFDZ0osZ0JBQU4sR0FBeUJsSixNQUFNLENBQUMzWCxLQUFoQztBQUNBOztBQUNGLFdBQUtJLGNBQUw7QUFDRXlYLGFBQUssQ0FBQzRJLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDRixXQUFLTyxjQUFMO0FBQ0VuSixhQUFLLENBQUM0SSxXQUFOLEdBQW9CLEtBQXBCO0FBQ0E1SSxhQUFLLENBQUNqYSxVQUFOLEdBQW1CLElBQW5CO0FBQ0FpYSxhQUFLLENBQUNsYSxPQUFOLEdBQWdCZ2EsTUFBTSxDQUFDdlosSUFBUCxDQUFZMGpCLFFBQTVCO0FBQ0FqSyxhQUFLLENBQUMvWCxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7O0FBQ0YsV0FBS21oQixjQUFMO0FBQ0VwSixhQUFLLENBQUM0SSxXQUFOLEdBQW9CLEtBQXBCO0FBQ0E1SSxhQUFLLENBQUMvWCxVQUFOLEdBQW1CNlgsTUFBTSxDQUFDM1gsS0FBMUI7QUFDQTs7QUFDRixXQUFLbUMsZUFBTDtBQUNFMFYsYUFBSyxDQUFDbGEsT0FBTixHQUFnQixJQUFoQjtBQUNBa2EsYUFBSyxDQUFDamEsVUFBTixHQUFtQixLQUFuQjtBQUNBaWEsYUFBSyxDQUFDL1gsVUFBTixHQUFtQixJQUFuQjs7QUFFRixXQUFLM0IsdUJBQUw7QUFDRTBaLGFBQUssQ0FBQ2lKLGdCQUFOLEdBQXlCLElBQXpCOztBQUNGLFdBQUthLHVCQUFMO0FBQ0U5SixhQUFLLENBQUNpSixnQkFBTixHQUF5QixLQUF6Qjs7QUFDRixXQUFLYyx1QkFBTDtBQUNFL0osYUFBSyxDQUFDaUosZ0JBQU4sR0FBeUIsS0FBekI7QUFDQWpKLGFBQUssQ0FBQ2tKLG1CQUFOLEdBQTRCcEosTUFBTSxDQUFDM1gsS0FBbkM7O0FBRUY7QUFDRWxDLGFBQUs7QUFDTDtBQW5ESjtBQXFERCxHQXREYSxDQUFkO0FBdURELENBeERELEU7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQW1CLDRDQUFLLENBQUM4aUIsUUFBTixDQUFlQyxPQUFmLEdBQTBCLEdBQUV0Yix3QkFBdUIsRUFBbkQ7O0FBRUEsVUFBVXViLFFBQVYsR0FBcUI7QUFDbkIsUUFBTWxhLDhEQUFHLENBQUMsQ0FBQ21hLCtEQUFJLENBQUNua0IsNkNBQUQsQ0FBTCxFQUFhbWtCLCtEQUFJLENBQUNoSSw2Q0FBRCxDQUFqQixFQUF5QmdJLCtEQUFJLENBQUN6Ziw2Q0FBRCxDQUE3QixFQUFxQ3lmLCtEQUFJLENBQUMvSCxnREFBRCxDQUF6QyxDQUFELENBQVQ7QUFDRDs7QUFFYzhILHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQU1BLFNBQVNFLGNBQVQsQ0FBd0IvakIsSUFBeEIsRUFBOEI7QUFDNUIsU0FBT2EsNENBQUssQ0FBQ0MsSUFBTixDQUFZLE9BQVosRUFBb0I7QUFBRWQ7QUFBRixHQUFwQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVWdrQixZQUFWLENBQXVCO0FBQUVoa0I7QUFBRixDQUF2QixFQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTVksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQ0YsY0FBRCxFQUFpQi9qQixJQUFqQixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUNScGtCLFVBQUksRUFBRXVjLG9FQURFO0FBRVJyYyxVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUNScGtCLFVBQUksRUFBRXdjLG9FQURFO0FBRVIxYSxXQUFLLEVBQUVXO0FBRkMsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVNGhCLGlCQUFWLEdBQThCO0FBQzVCLFFBQU1DLHFFQUFVLENBQUNoSSxvRUFBRCxFQUF3QjRILFlBQXhCLENBQWhCO0FBQ0Q7O0FBRWMsVUFBVUssWUFBVixHQUF5QjtBQUN0QyxRQUFNMWEsOERBQUcsQ0FBQyxDQUFDbWEsK0RBQUksQ0FBQ0ssaUJBQUQsQ0FBTCxDQUFELENBQVQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNsQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBRUE7O0FBZUEsU0FBU0csaUJBQVQsQ0FBMkJ0a0IsSUFBM0IsRUFBaUM7QUFDL0IsU0FBT2EsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGdCQUFYLEVBQTZCO0FBQ2xDYixNQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFEeUI7QUFFbEM0WixVQUFNLEVBQUU3WixJQUFJLENBQUM2WixNQUZxQjtBQUdsQ2hWLFlBQVEsRUFBRTdFLElBQUksQ0FBQzZFO0FBSG1CLEdBQTdCLENBQVA7QUFLRDs7QUFFRCxVQUFVMGYsY0FBVixDQUF5QnZrQixJQUF6QixFQUErQjtBQUM3QixNQUFJO0FBQ0YsVUFBTVksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQ0ssaUJBQUQsRUFBb0J0a0IsSUFBcEIsQ0FBekI7QUFDQSxVQUFNa2tCLDhEQUFHLENBQUM7QUFDUnBrQixVQUFJLEVBQUUyZSw4RUFERTtBQUVSemUsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU91QyxDQUFQLEVBQVU7QUFDVixVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUU0ZSw4RUFBUjtBQUFzQzljLFdBQUssRUFBRVc7QUFBN0MsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxVQUFVaWlCLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU1KLHFFQUFVLENBQUM1Riw4RUFBRCxFQUErQitGLGNBQS9CLENBQWhCO0FBQ0Q7O0FBRUQsU0FBU0UsU0FBVCxDQUFtQjtBQUFFemtCO0FBQUYsQ0FBbkIsRUFBNkI7QUFDM0IsU0FBT2EsNENBQUssQ0FBQ0MsSUFBTixDQUFXLGtCQUFYLEVBQStCO0FBQ3BDNGpCLGNBQVUsRUFBRTFrQixJQUFJLENBQUMwa0IsVUFEbUI7QUFFcENDLFVBQU0sRUFBRTNrQixJQUFJLENBQUMya0IsTUFGdUI7QUFHcENDLGFBQVMsRUFBRTVrQixJQUFJLENBQUM0a0IsU0FIb0I7QUFJcENqRixRQUFJLEVBQUUzZixJQUFJLENBQUMyZjtBQUp5QixHQUEvQixDQUFQO0FBTUQ7O0FBRUQsVUFBVUQsTUFBVixDQUFpQjFmLElBQWpCLEVBQXVCO0FBQ3JCLE1BQUk7QUFDRixVQUFNWSxNQUFNLEdBQUcsTUFBTXFqQiwrREFBSSxDQUFDUSxTQUFELEVBQVl6a0IsSUFBWixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRW9mLGdFQUFSO0FBQXdCbGYsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBQXJDLEtBQUQsQ0FBVDtBQUNELEdBSEQsQ0FHRSxPQUFPdUMsQ0FBUCxFQUFVO0FBQ1ZJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFaO0FBQ0EsVUFBTTJoQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFcWYsZ0VBQVI7QUFBd0J2ZCxXQUFLLEVBQUVXO0FBQS9CLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVXNpQixXQUFWLEdBQXdCO0FBQ3RCLFFBQU1ULHFFQUFVLENBQUNuRixnRUFBRCxFQUFpQlMsTUFBakIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTb0YsZ0JBQVQsQ0FBMEI7QUFBRTlrQjtBQUFGLENBQTFCLEVBQW9DO0FBQ2xDMkMsU0FBTyxDQUFDQyxHQUFSLENBQVk1QyxJQUFaOztBQUNBLE1BQUlBLElBQUksQ0FBQzZFLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDekIsV0FBT2hFLDRDQUFLLENBQUNDLElBQU4sQ0FBVyx1QkFBWCxFQUFvQztBQUFFZDtBQUFGLEtBQXBDLENBQVA7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPYSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsdUJBQVgsRUFBb0M7QUFBRWQ7QUFBRixLQUFwQyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxVQUFVK2tCLGFBQVYsQ0FBd0Iva0IsSUFBeEIsRUFBOEI7QUFDNUIsTUFBSTtBQUNGLFVBQU1ZLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUNhLGdCQUFELEVBQW1COWtCLElBQW5CLENBQXpCO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFdWYsd0VBQVI7QUFBZ0NyZixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFBN0MsS0FBRCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUV3Zix3RUFBc0JBO0FBQTlCLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVTBGLGtCQUFWLEdBQStCO0FBQzdCLFFBQU1aLHFFQUFVLENBQUNoRix3RUFBRCxFQUF5QjJGLGFBQXpCLENBQWhCO0FBQ0Q7O0FBRUQsU0FBU0UsZ0JBQVQsQ0FBMEI7QUFBRWhsQixJQUFGO0FBQU0wa0IsUUFBTjtBQUFjOWYsVUFBZDtBQUF3QnFnQixTQUF4QjtBQUFpQ0M7QUFBakMsQ0FBMUIsRUFBcUU7QUFDbkUsU0FBT3RrQiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsa0JBQVgsRUFBK0I7QUFDcENiLE1BRG9DO0FBRXBDMGtCLFVBRm9DO0FBR3BDOWYsWUFIb0M7QUFJcENxZ0IsV0FKb0M7QUFLcENDO0FBTG9DLEdBQS9CLENBQVA7QUFPRDs7QUFFRCxVQUFVQyxhQUFWLENBQXdCN0wsTUFBeEIsRUFBZ0M7QUFDOUIsTUFBSTtBQUNGLFVBQU0zWSxNQUFNLEdBQUcsTUFBTXFqQiwrREFBSSxDQUFDZ0IsZ0JBQUQsRUFBbUIxTCxNQUFNLENBQUN2WixJQUExQixDQUF6QjtBQUNBMkMsV0FBTyxDQUFDQyxHQUFSLENBQVloQyxNQUFNLENBQUNaLElBQW5CO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFaWYsZ0ZBQVI7QUFBd0MvZSxVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFBckQsS0FBRCxDQUFUO0FBQ0QsR0FKRCxDQUlFLE9BQU8wRixHQUFQLEVBQVk7QUFDWi9DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZOEMsR0FBWjtBQUNBLFVBQU13ZSw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFa2YsZ0ZBQVI7QUFBd0NwZCxXQUFLLEVBQUU4RDtBQUEvQyxLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVUyZixrQkFBVixHQUErQjtBQUM3QixRQUFNakIscUVBQVUsQ0FBQ3RGLGdGQUFELEVBQWlDc0csYUFBakMsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVRSxRQUFWLEdBQXFCO0FBQ2xDLFFBQU0zYiw4REFBRyxDQUFDLENBQ1JtYSwrREFBSSxDQUFDVSxtQkFBRCxDQURJLEVBRVJWLCtEQUFJLENBQUNlLFdBQUQsQ0FGSSxFQUdSZiwrREFBSSxDQUFDa0Isa0JBQUQsQ0FISSxFQUlSbEIsK0RBQUksQ0FBQ3VCLGtCQUFELENBSkksQ0FBRCxDQUFUO0FBTUQsQzs7Ozs7Ozs7Ozs7O0FDL0hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQWlDQSxTQUFTRSxhQUFULENBQXVCdmxCLElBQXZCLEVBQTZCO0FBQzNCLFNBQU9hLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxlQUFYLEVBQTRCZCxJQUE1QixDQUFQO0FBQ0Q7O0FBQ0QsVUFBVXdsQixVQUFWLENBQXFCak0sTUFBckIsRUFBNkI7QUFDM0IsTUFBSTtBQUNGLFVBQU0zWSxNQUFNLEdBQUcsTUFBTXFqQiwrREFBSSxDQUFDc0IsYUFBRCxFQUFnQmhNLE1BQU0sQ0FBQ2tNLFFBQXZCLENBQXpCO0FBQ0EsVUFBTXZCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUVnZCxrRUFBUjtBQUE2QjljLFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUExQyxLQUFELENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRWlkLGtFQUFSO0FBQTZCbmIsV0FBSyxFQUFFVztBQUFwQyxLQUFELENBQVQ7QUFDRDtBQUNGOztBQUNELFVBQVVtakIsZUFBVixHQUE0QjtBQUMxQixRQUFNdEIscUVBQVUsQ0FBQ3ZILGtFQUFELEVBQXNCMkksVUFBdEIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRyxlQUFULENBQXlCOUwsTUFBekIsRUFBaUM7QUFDL0IsU0FBT2haLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxnQkFBWCxFQUE2QjtBQUFFK1k7QUFBRixHQUE3QixDQUFQO0FBQ0Q7O0FBQ0QsVUFBVW1LLFlBQVYsQ0FBdUJ6SyxNQUF2QixFQUErQjtBQUM3QixNQUFJO0FBQ0YsVUFBTTNZLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUMwQixlQUFELEVBQWtCcE0sTUFBTSxDQUFDTSxNQUF6QixDQUF6QjtBQUNBbFgsV0FBTyxDQUFDQyxHQUFSLENBQVloQyxNQUFNLENBQUNaLElBQW5CO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFb2dCLHFFQUFSO0FBQWdDbGdCLFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUE3QyxLQUFELENBQVQ7QUFDRCxHQUpELENBSUUsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRXFnQixxRUFBUjtBQUFnQ3ZlLFdBQUssRUFBRVc7QUFBdkMsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFDRCxVQUFVNGhCLGlCQUFWLEdBQThCO0FBQzVCLFFBQU1DLHFFQUFVLENBQUNuRSxxRUFBRCxFQUF5QitELFlBQXpCLENBQWhCO0FBQ0Q7O0FBRUQsU0FBUzRCLGdCQUFULENBQTBCM2xCLEVBQTFCLEVBQThCO0FBQzVCLFNBQU9ZLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxrQkFBWCxFQUErQjtBQUFFYjtBQUFGLEdBQS9CLENBQVA7QUFDRDs7QUFDRCxVQUFVNGxCLGFBQVYsQ0FBd0J0TSxNQUF4QixFQUFnQztBQUM5QixNQUFJO0FBQ0YsVUFBTTBLLCtEQUFJLENBQUMyQixnQkFBRCxFQUFtQnJNLE1BQU0sQ0FBQ3RaLEVBQTFCLENBQVY7QUFDQSxVQUFNaWtCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUU2Z0IscUVBQVI7QUFBZ0MzZ0IsVUFBSSxFQUFFdVosTUFBTSxDQUFDdFo7QUFBN0MsS0FBRCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU9zQyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUU4Z0IscUVBQVI7QUFBZ0NoZixXQUFLLEVBQUVXO0FBQXZDLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBVXVqQixrQkFBVixHQUErQjtBQUM3QixRQUFNMUIscUVBQVUsQ0FBQzFELHFFQUFELEVBQXlCbUYsYUFBekIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRSxnQkFBVCxDQUEwQm5CLFNBQTFCLEVBQXFDO0FBQ25DamlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVnaUI7QUFBRixHQUFaO0FBQ0EsU0FBTy9qQiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsa0JBQVgsRUFBK0I7QUFBRThqQjtBQUFGLEdBQS9CLENBQVA7QUFDRDs7QUFDRCxVQUFVb0IsYUFBVixDQUF3QnpNLE1BQXhCLEVBQWdDO0FBQzlCLE1BQUk7QUFDRixVQUFNM1ksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQzhCLGdCQUFELEVBQW1CeE0sTUFBTSxDQUFDcUwsU0FBMUIsQ0FBekI7QUFFQSxVQUFNViw4REFBRyxDQUFDO0FBQ1Jwa0IsVUFBSSxFQUFFdWdCLHFFQURFO0FBRVJyZ0IsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FQRCxDQU9FLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQTJoQixrRUFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFd2dCLHFFQUFSO0FBQWdDMWUsV0FBSyxFQUFFVztBQUF2QyxLQUFELENBQUg7QUFDRDtBQUNGOztBQUNELFVBQVUwakIsa0JBQVYsR0FBK0I7QUFDN0IsUUFBTTdCLHFFQUFVLENBQUNoRSxxRUFBRCxFQUF5QjRGLGFBQXpCLENBQWhCO0FBQ0Q7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QmxtQixJQUF6QixFQUErQjtBQUM3QixTQUFPYSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsZ0JBQVgsRUFBNkJkLElBQTdCLENBQVA7QUFDRDs7QUFFRCxVQUFVbW1CLFdBQVYsQ0FBc0I1TSxNQUF0QixFQUE4QjtBQUM1QixNQUFJO0FBQ0Y1VyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsVUFBTWhDLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUNpQyxlQUFELEVBQWtCM00sTUFBTSxDQUFDa00sUUFBekIsQ0FBekI7QUFDQTlpQixXQUFPLENBQUNDLEdBQVIsQ0FBWWhDLE1BQVo7QUFDQSxVQUFNc2pCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUUwZ0IsbUVBQVI7QUFBOEJ4Z0IsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBQTNDLEtBQUQsQ0FBVDtBQUNELEdBTEQsQ0FLRSxPQUFPdUMsQ0FBUCxFQUFVO0FBQ1ZJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxDQUFaO0FBQ0EsVUFBTTJoQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFMmdCLG1FQUFSO0FBQThCN2UsV0FBSyxFQUFFVztBQUFyQyxLQUFELENBQVQ7QUFDRDtBQUNGOztBQUVELFVBQVU2akIsZ0JBQVYsR0FBNkI7QUFDM0IsUUFBTWhDLHFFQUFVLENBQUM3RCxtRUFBRCxFQUF1QjRGLFdBQXZCLENBQWhCO0FBQ0Q7O0FBRUQsU0FBU0Usa0JBQVQsQ0FBNEJybUIsSUFBNUIsRUFBa0M7QUFDaEMsU0FBT2EsNENBQUssQ0FBQ0MsSUFBTixDQUFXLG9CQUFYLEVBQWlDZCxJQUFqQyxDQUFQO0FBQ0Q7O0FBRUQsVUFBVXNtQixlQUFWLENBQTBCL00sTUFBMUIsRUFBa0M7QUFDaEMsTUFBSTtBQUNGLFVBQU0zWSxNQUFNLEdBQUcsTUFBTXFqQiwrREFBSSxDQUFDb0Msa0JBQUQsRUFBcUI5TSxNQUFNLENBQUN2WixJQUE1QixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRWtoQix1RUFBUjtBQUFrQ2hoQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFBL0MsS0FBRCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUVtaEIsdUVBQVI7QUFBa0NyZixXQUFLLEVBQUVXO0FBQXpDLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVWdrQixvQkFBVixHQUFpQztBQUMvQixRQUFNbkMscUVBQVUsQ0FBQ3JELHVFQUFELEVBQTJCdUYsZUFBM0IsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRSxjQUFULENBQXdCeG1CLElBQXhCLEVBQThCO0FBQzVCLFNBQU9hLDRDQUFLLENBQUNDLElBQU4sQ0FBVyx3QkFBWCxFQUFxQ2QsSUFBckMsQ0FBUDtBQUNEOztBQUVELFVBQVV5bUIsV0FBVixDQUFzQmxOLE1BQXRCLEVBQThCO0FBQzVCLE1BQUk7QUFDRixVQUFNM1ksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQ3VDLGNBQUQsRUFBaUJqTixNQUFNLENBQUN2WixJQUF4QixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRXdoQixtRUFBUjtBQUE4QnRoQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFBM0MsS0FBRCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUV5aEIsbUVBQVI7QUFBOEIzZixXQUFLLEVBQUVXO0FBQXJDLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVW1rQixnQkFBVixHQUE2QjtBQUMzQixRQUFNdEMscUVBQVUsQ0FBQy9DLG1FQUFELEVBQXVCb0YsV0FBdkIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRSxlQUFULENBQXlCM21CLElBQXpCLEVBQStCO0FBQzdCLFNBQU9hLDRDQUFLLENBQUNDLElBQU4sQ0FBVywyQkFBWCxFQUF3Q2QsSUFBeEMsQ0FBUDtBQUNEOztBQUVELFVBQVU0bUIsWUFBVixDQUF1QnJOLE1BQXZCLEVBQStCO0FBQzdCLE1BQUk7QUFDRixVQUFNM1ksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQzBDLGVBQUQsRUFBa0JwTixNQUFNLENBQUN2WixJQUF6QixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRTJoQixvRUFBUjtBQUErQnpoQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFBNUMsS0FBRCxDQUFUO0FBQ0QsR0FIRCxDQUdFLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFBRXBrQixVQUFJLEVBQUU0aEIsb0VBQVI7QUFBK0I5ZixXQUFLLEVBQUVXO0FBQXRDLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVXNrQixpQkFBVixHQUE4QjtBQUM1QixRQUFNekMscUVBQVUsQ0FBQzVDLG9FQUFELEVBQXdCb0YsWUFBeEIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRSxpQkFBVCxDQUEyQjltQixJQUEzQixFQUFpQztBQUMvQixTQUFPYSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsMkJBQVgsRUFBd0NkLElBQXhDLENBQVA7QUFDRDs7QUFFRCxVQUFVK21CLGNBQVYsQ0FBeUJ4TixNQUF6QixFQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTTNZLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUM2QyxpQkFBRCxFQUFvQnZOLE1BQU0sQ0FBQ3ZaLElBQTNCLENBQXpCO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFOGhCLHNFQUFSO0FBQWlDNWhCLFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUE5QyxLQUFELENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRStoQixzRUFBUjtBQUFpQ2pnQixXQUFLLEVBQUVXO0FBQXhDLEtBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsVUFBVXlrQixtQkFBVixHQUFnQztBQUM5QixRQUFNNUMscUVBQVUsQ0FBQ3pDLHNFQUFELEVBQTBCb0YsY0FBMUIsQ0FBaEI7QUFDRDs7QUFFRCxTQUFTRSxpQkFBVCxDQUEyQjtBQUFFQyxZQUFGO0FBQWNyTixRQUFkO0FBQXNCc047QUFBdEIsQ0FBM0IsRUFBK0Q7QUFDN0R4a0IsU0FBTyxDQUFDQyxHQUFSLENBQVlza0IsVUFBWixFQUF3QnJOLE1BQXhCLEVBQWdDc04sVUFBaEM7QUFDQSxTQUFPdG1CLDRDQUFLLENBQUNDLElBQU4sQ0FBVywyQkFBWCxFQUF3QztBQUM3Q29tQixjQUQ2QztBQUU3Q3JOLFVBRjZDO0FBRzdDc047QUFINkMsR0FBeEMsQ0FBUDtBQUtEOztBQUVELFVBQVVDLGNBQVYsQ0FBeUI3TixNQUF6QixFQUFpQztBQUMvQixNQUFJO0FBQ0YsVUFBTTNZLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUNnRCxpQkFBRCxFQUFvQjFOLE1BQU0sQ0FBQ3ZaLElBQTNCLENBQXpCO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQUVwa0IsVUFBSSxFQUFFcWhCLHNFQUFSO0FBQWlDbmhCLFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUE5QyxLQUFELENBQVQ7QUFDRCxHQUhELENBR0UsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUFFcGtCLFVBQUksRUFBRXNoQixzRUFBUjtBQUFpQ3hmLFdBQUssRUFBRVc7QUFBeEMsS0FBRCxDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxVQUFVOGtCLG1CQUFWLEdBQWdDO0FBQzlCLFFBQU1qRCxxRUFBVSxDQUFDbEQsc0VBQUQsRUFBMEJrRyxjQUExQixDQUFoQjtBQUNEOztBQUVjLFVBQVUvQyxZQUFWLEdBQXlCO0FBQ3RDLFFBQU0xYSw4REFBRyxDQUFDLENBQ1JtYSwrREFBSSxDQUFDNEIsZUFBRCxDQURJLEVBRVI1QiwrREFBSSxDQUFDSyxpQkFBRCxDQUZJLEVBR1JMLCtEQUFJLENBQUNnQyxrQkFBRCxDQUhJLEVBSVJoQywrREFBSSxDQUFDbUMsa0JBQUQsQ0FKSSxFQUtSbkMsK0RBQUksQ0FBQ3NDLGdCQUFELENBTEksRUFNUnRDLCtEQUFJLENBQUN5QyxvQkFBRCxDQU5JLEVBT1J6QywrREFBSSxDQUFDK0MsaUJBQUQsQ0FQSSxFQVFSL0MsK0RBQUksQ0FBQ2tELG1CQUFELENBUkksRUFTUmxELCtEQUFJLENBQUM0QyxnQkFBRCxDQVRJLEVBVVI1QywrREFBSSxDQUFDdUQsbUJBQUQsQ0FWSSxDQUFELENBQVQ7QUFZRCxDOzs7Ozs7Ozs7Ozs7QUN6T0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7O0FBZUEsU0FBU0MsUUFBVCxDQUFrQkMsU0FBbEIsRUFBNkI7QUFDM0IsU0FBTzFtQiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsYUFBWCxFQUEwQnltQixTQUExQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVUMsS0FBVixDQUFnQmpPLE1BQWhCLEVBQXdCO0FBQ3RCLE1BQUk7QUFDRixVQUFNM1ksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQ3FELFFBQUQsRUFBVy9OLE1BQU0sQ0FBQ3ZaLElBQWxCLENBQXpCO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQ1Jwa0IsVUFBSSxFQUFFOGlCLDZEQURFO0FBRVI1aUIsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDZixLQUFSLENBQWNXLENBQWQ7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFDUnBrQixVQUFJLEVBQUUraUIsNkRBREU7QUFFUmpoQixXQUFLLEVBQUVXLENBQUMsQ0FBQ2tsQixRQUFGLENBQVd6bkI7QUFGVixLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVUwbkIsVUFBVixHQUF1QjtBQUNyQi9rQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLFFBQU0ra0Isb0VBQVMsQ0FBQzNsQiw2REFBRCxFQUFpQndsQixLQUFqQixDQUFmO0FBQ0Q7O0FBRUQsU0FBU0ksU0FBVCxDQUFtQkMsVUFBbkIsRUFBK0I7QUFDN0IsU0FBT2huQiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsY0FBWCxFQUEyQittQixVQUEzQixDQUFQO0FBQ0Q7O0FBRUQsVUFBVUMsTUFBVixDQUFpQnZPLE1BQWpCLEVBQXlCO0FBQ3ZCLE1BQUk7QUFDRixVQUFNM1ksTUFBTSxHQUFHLE1BQU1xakIsK0RBQUksQ0FBQzJELFNBQUQsRUFBWXJPLE1BQU0sQ0FBQ3ZaLElBQW5CLENBQXpCO0FBQ0EsVUFBTWtrQiw4REFBRyxDQUFDO0FBQ1Jwa0IsVUFBSSxFQUFFaWpCLDhEQURFO0FBRVIvaUIsVUFBSSxFQUFFWSxNQUFNLENBQUNaO0FBRkwsS0FBRCxDQUFUO0FBSUQsR0FORCxDQU1FLE9BQU91QyxDQUFQLEVBQVU7QUFDVkksV0FBTyxDQUFDQyxHQUFSLENBQVlMLENBQVo7QUFDQSxVQUFNMmhCLDhEQUFHLENBQUM7QUFDUnBrQixVQUFJLEVBQUVrakIsOERBREU7QUFFUnBoQixXQUFLLEVBQUVXO0FBRkMsS0FBRCxDQUFUO0FBSUQ7QUFDRjs7QUFFRCxVQUFVd2xCLFdBQVYsR0FBd0I7QUFDdEIsUUFBTUosb0VBQVMsQ0FBQzdFLDhEQUFELEVBQWtCZ0YsTUFBbEIsQ0FBZjtBQUNEOztBQUVELFNBQVNFLFdBQVQsR0FBdUI7QUFDckIsU0FBT25uQiw0Q0FBSyxDQUFDZ0ksR0FBTixDQUFVLE9BQVYsQ0FBUDtBQUNEOztBQUVELFVBQVVvZixRQUFWLEdBQXFCO0FBQ25CLE1BQUk7QUFDRixVQUFNcm5CLE1BQU0sR0FBRyxNQUFNcWpCLCtEQUFJLENBQUMrRCxXQUFELENBQXpCO0FBQ0EsVUFBTTlELDhEQUFHLENBQUM7QUFDUnBrQixVQUFJLEVBQUVvakIsZ0VBREU7QUFFUmxqQixVQUFJLEVBQUVZLE1BQU0sQ0FBQ1o7QUFGTCxLQUFELENBQVQ7QUFJRCxHQU5ELENBTUUsT0FBT3VDLENBQVAsRUFBVTtBQUNWSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsQ0FBWjtBQUNBLFVBQU0yaEIsOERBQUcsQ0FBQztBQUNScGtCLFVBQUksRUFBRXFqQixnRUFERTtBQUVSdmhCLFdBQUssRUFBRVc7QUFGQyxLQUFELENBQVQ7QUFJRDtBQUNGOztBQUVELFVBQVUybEIsYUFBVixHQUEwQjtBQUN4QixRQUFNUCxvRUFBUyxDQUFDMUUsZ0VBQUQsRUFBb0JnRixRQUFwQixDQUFmO0FBQ0Q7O0FBRUQsU0FBU0UsaUJBQVQsQ0FBMkI7QUFBRWxvQixJQUFGO0FBQU1oQjtBQUFOLENBQTNCLEVBQTZDO0FBQzNDLFNBQU80Qiw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsdUJBQVgsRUFBb0M7QUFBRWIsTUFBRjtBQUFNaEI7QUFBTixHQUFwQyxDQUFQO0FBQ0Q7O0FBRUQsVUFBVW1wQixjQUFWLENBQXlCN08sTUFBekIsRUFBaUM7QUFDL0IsTUFBSTtBQUNGLFVBQU0zWSxNQUFNLEdBQUcsTUFBTXFqQiwrREFBSSxDQUFDa0UsaUJBQUQsRUFBb0I1TyxNQUFNLENBQUN2WixJQUEzQixDQUF6QjtBQUNBLFVBQU1ra0IsOERBQUcsQ0FBQztBQUNScGtCLFVBQUksRUFBRXlqQixzRUFERTtBQUVSdmpCLFVBQUksRUFBRVksTUFBTSxDQUFDWjtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBTkQsQ0FNRSxPQUFPdUMsQ0FBUCxFQUFVO0FBQ1YsVUFBTTJoQiw4REFBRyxDQUFDO0FBQ1Jwa0IsVUFBSSxFQUFFMGpCLHNFQURFO0FBRVI1aEIsV0FBSyxFQUFFVztBQUZDLEtBQUQsQ0FBVDtBQUlEO0FBQ0Y7O0FBRUQsVUFBVThsQixtQkFBVixHQUFnQztBQUM5QixRQUFNakUscUVBQVUsQ0FBQ3JrQixzRUFBRCxFQUEwQnFvQixjQUExQixDQUFoQjtBQUNEOztBQUVjLFVBQVU5QyxRQUFWLEdBQXFCO0FBQ2xDLFFBQU0zYiw4REFBRyxDQUFDLENBQ1JtYSwrREFBSSxDQUFDNEQsVUFBRCxDQURJLEVBRVI1RCwrREFBSSxDQUFDb0UsYUFBRCxDQUZJLEVBR1JwRSwrREFBSSxDQUFDaUUsV0FBRCxDQUhJLEVBSVJqRSwrREFBSSxDQUFDdUUsbUJBQUQsQ0FKSSxDQUFELENBQVQ7QUFNRCxDOzs7Ozs7Ozs7Ozs7QUMvSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQW1CdFksbUJBQU8sQ0FBQyxvQ0FBRCxDQUFoQzs7QUFDQTs7QUFFQSxNQUFNdVksY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFFQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLFFBQU1HLFFBQVEsR0FDWixRQUNJQyxTQURKLEdBRUlDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FIekI7O0FBSUEsUUFBTUssU0FBUyxHQUFJelAsT0FBRCxJQUFhMFAseURBQVcsQ0FBQzFQLE9BQUQsRUFBVSxFQUFWLEVBQWNxUCxRQUFkLENBQTFDOztBQUVBLFFBQU1NLFFBQVEsT0FBZDs7QUFDQSxNQUFJQSxRQUFKLEVBQWM7QUFDWixVQUFNbFMsS0FBSyxHQUFHZ1MsU0FBUyxDQUFDdE4saURBQUQsQ0FBdkI7QUFDQTFFLFNBQUssQ0FBQ21TLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQnRGLDhDQUFuQixDQUFqQjtBQUNBLFdBQU85TSxLQUFQO0FBQ0QsR0FKRCxNQUlPO0FBQ0wsVUFBTTtBQUFFcVM7QUFBRixRQUFxQnBaLG1CQUFPLENBQUMsb0NBQUQsQ0FBbEM7O0FBRUEsVUFBTXFaLGFBQWEsR0FBRztBQUNwQmhqQixTQUFHLEVBQUUsUUFEZTtBQUVwQmlqQixlQUFTLEVBQUUsQ0FBQyxNQUFELENBRlM7QUFHcEJDLHlGQUhvQjtBQUlwQkMsZ0JBQVUsRUFBRTtBQUpRLEtBQXRCO0FBTUEsVUFBTUMsZ0JBQWdCLEdBQUdMLGNBQWMsQ0FBQ0MsYUFBRCxFQUFnQjVOLGlEQUFoQixDQUF2QztBQUNBLFVBQU0xRSxLQUFLLEdBQUdnUyxTQUFTLENBQUNVLGdCQUFELENBQXZCO0FBQ0ExUyxTQUFLLENBQUNtUyxRQUFOLEdBQWlCVixjQUFjLENBQUNXLEdBQWYsQ0FBbUJ0Riw4Q0FBbkIsQ0FBakI7QUFDQTlNLFNBQUssQ0FBQ0UsV0FBTixHQUFvQnFSLFlBQVksQ0FBQ3ZSLEtBQUQsQ0FBaEM7QUFDQSxXQUFPQSxLQUFQO0FBQ0Q7QUFDRixDQTlCRDs7QUFnQ0EsTUFBTUcsT0FBTyxHQUFHd1Msd0VBQWEsQ0FBQ25CLGNBQUQsRUFBaUI7QUFBRW9CLE9BQUs7QUFBUCxDQUFqQixDQUE3QjtBQUVlelMsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi9HZW5lcmFsdWkvQ3VzdG9tSG9va3MnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcblxuY29uc3QgQ2hhbmdlUGFzc3dvcmQgPSAoeyBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3ByZXNlbnRQYXNzd29yZCwgb25DaGFuZ2VQcmVzZW50UGFzc3dvcmQsIHNldFByZXNlbnRQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2ssIHNldENoYW5nZVBhc3N3b3JkQ2hlY2tdID0gdXNlSW5wdXQoKTtcblxuICBjb25zdCB7IHNlc3Npb24sIGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiBzZXNzaW9uLmlkLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KTtcbiAgICBzZXRQcmVzZW50UGFzc3dvcmQobnVsbCk7XG4gICAgc2V0UGFzc3dvcmQobnVsbCk7XG4gICAgc2V0Q2hhbmdlUGFzc3dvcmRDaGVjayhudWxsKTtcbiAgfSwgW3Bhc3N3b3JkLCBwYXNzd29yZENoZWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogJ21pZGRsZScgfX0+XG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvbkZpbmlzaH0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInByZXNlbnRQYXNzd29yZFwiXG4gICAgICAgICAgICB2YWxpZGF0ZVRyaWdnZXI9XCJvbkJsdXJcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfquLDsobQg67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalCcsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICgpID0+ICh7XG4gICAgICAgICAgICAgICAgYXN5bmMgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoL15bQS1aYS16MC05XXs2LDEyfSQvKTtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5tYXRjaChyZWdleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvY29uZmlybS9wYXNzd29yZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogc2Vzc2lvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ+q4sOyhtCDruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn7ZiV7Iud7JeQIOunnuyngCDslYrripQg67mE67CA67KI7Zi47J6F64uI64ukJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICBwcmVmaXg9e2AqIOq4sOyhtCDtjKjsiqTsm4zrk5xgfVxuICAgICAgICAgICAgICB2YWx1ZT17cHJlc2VudFBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQcmVzZW50UGFzc3dvcmR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6riw7KG0IOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW0EtWmEtejAtOV17NiwxMn0kLyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi46rCAIO2YleyLneyXkCDrp57sp4Ag7JWK7Iq164uI64ukJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgIHByZWZpeD17YCog67mE67CA67KI7Zi4YH1cbiAgICAgICAgICAgICAgc2l6ZT17YGxhcmdlYH1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ2hlY2tcIlxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbQg7KO87IS47JqUJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCBnZXRGaWVsZFZhbHVlKCdwYXNzd29yZCcpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ+u5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLicpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgcHJlZml4PXtgKiDruYTrsIDrsojtmLgg7ZmV7J24YH1cbiAgICAgICAgICAgICAgc2l6ZT17YGxhcmdlYH1cbiAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64uk7IucIOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30gaHRtbFR5cGU9eydzdWJtaXQnfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAg67mE67CA67KI7Zi4IOuzgOqyvVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFuZ2VQYXNzd29yZDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgbWVzc2FnZSwgQ2FyZCwgU3BhY2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IE1haWxPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTG9naW4gPSAoe1xuICBzZXRUb2dnbGVMb2dpbixcbiAgdXNlcm5hbWUsXG4gIG9uQ2hhbmdlVXNlcm5hbWUsXG4gIHNldFVzZXJuYW1lLFxuICBwYXNzd29yZCxcbiAgb25DaGFuZ2VQYXNzd29yZCxcbiAgc2V0UGFzc3dvcmQsXG59KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCB7IGxvZ2luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9naW5FcnJvcikge1xuICAgICAgbWVzc2FnZS5lcnJvcihsb2dpbkVycm9yKTtcbiAgICB9XG4gIH0sIFtsb2dpbkVycm9yXSk7XG5cbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0xvZ2dlZEluKSB7XG4gICAgICBzZXRUb2dnbGVMb2dpbihmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBvbkNsaWNrU2lnblVwID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZUxvZ2luKGZhbHNlKTtcbiAgICBSb3V0ZXIucHVzaCgnL3VzZXIvc2lnbnVwJyk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFt1c2VybmFtZSwgcGFzc3dvcmRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZCBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofT5cbiAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIiBzaXplPXsnbGFyZ2UnfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPXsnZW1haWwnfVxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfsnbTrqZTsnbzsnYQg7J6F66Cl7ZW07KO87IS47JqUJyB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogJ2VtYWlsJywgbWVzc2FnZTogJ+2YleyLneyXkCDrp57sp4Ag7JWK64qUIOyVhOydtOuUlOyeheuLiOuLpCcgfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcHJlZml4PXs8TWFpbE91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgIHNpemU9eydsYXJnZSd9XG4gICAgICAgICAgICAgICAgbmFtZT17J2VtYWlsJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VVc2VybmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICBuYW1lPXsncGFzc3dvcmQnfVxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUJyB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzAtOWEtekEtWl17NiwxMn0kLyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICftmJXsi53sl5Ag66ee7KeAIOyViuuKlCDruYTrsIDrsojtmLjsnoXri4jri6QnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICAgIG5hbWU9eydwYXNzd29yZCd9XG4gICAgICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgIHNpemU9eydsYXJnZSd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxuICAgICAgICAgICAgICBodG1sVHlwZT17J3N1Ym1pdCd9XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gb25DbGljaz17b25DbGlja1NpZ25VcH0+XG4gICAgICAgICAgICAgIO2ajOybkOqwgOyehVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9tZW51XCI7XG5pbXBvcnQgeyBTRUFSQ0hfSElTVE9SWV9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3BheW1lbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICh7IHNldFRvZ2dsZVNlYXJjaCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gKGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiB7IHRleHQgfSxcbiAgICB9KTtcbiAgICBzZXRUZXh0KCk7XG4gICAgY29uc29sZS5sb2codGV4dCk7XG4gICAgc2V0VG9nZ2xlU2VhcmNoKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgIGVudGVyQnV0dG9uXG4gICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IChlKSA9PiBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2VkID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVyKChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gIXByZXY7XG4gICAgfSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcbiIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgTmF2aWJhckxheW91dCBmcm9tICcuL05hdmliYXJMYXlvdXQnO1xuXG5jb25zdCBDZW50cmFsQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IGd1dHRlcj17MTB9PlxuICAgICAgICA8Q29sIHhzPXswfSBtZD17N30gLz5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMH0+XG4gICAgICAgICAgPE5hdmliYXJMYXlvdXQgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXswfSBtZD17N30gLz5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VudHJhbEFwcExheW91dDtcbiIsImltcG9ydCB7IE1lbnUsIElucHV0LCBNb2RhbCwgUG9wb3ZlciwgU3BhY2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEFycm93TGVmdE91dGxpbmVkLCBVc2VyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IExPR19PVVRfU1VDQ0VTUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnLi4vRm9ybXMvTG9naW4nO1xuaW1wb3J0IFNlYXJjaEJhck1vZGFsIGZyb20gJy4uL0Zvcm1zL1NlYXJjaEJhcic7XG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmQgZnJvbSAnLi4vRm9ybXMvQ2hhbmdlUGFzc3dvcmQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uL0dlbmVyYWx1aS9DdXN0b21Ib29rcyc7XG5cbmNvbnN0IE5hdmliYXJMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlcm5hbWUsIG9uQ2hhbmdlVXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcblxuICBjb25zdCBbdG9nZ2xlTG9naW4sIHNldFRvZ2dsZUxvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvZ2dsZVNlYXJjaCwgc2V0VG9nZ2xlU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvZ2dsZUNoYW5nZVBhc3N3b3JkLCBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFtzZWFyY2hTaG93LCBzZXRTZWFyY2hTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhpZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dIYW5kbGVyID0gKHNob3cpID0+IHtcbiAgICBzZXRTaG93KHNob3cpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ2hhbmdlUGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgICBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGlja0xvZ291dCA9ICgpID0+IHtcbiAgICBzZXRQYXNzd29yZCgnJyk7XG4gICAgc2V0VXNlcm5hbWUoJycpO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9HX09VVF9TVUNDRVNTIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgc2V0UGFzc3dvcmQoJycpO1xuICAgIHNldFVzZXJuYW1lKCcnKTtcbiAgICBzZXRUb2dnbGVMb2dpbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZVNlYXJjaCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tQYXltZW50cyA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaCgnL3BheW1lbnRzJyk7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQWRtaW4gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9zaG9wL2FkbWluJyk7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9nZ2VkSW4sIHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgb3JpZ2luUHJvZHVjdHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubWVudSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPXsnTG9naW4nfVxuICAgICAgICB2aXNpYmxlPXt0b2dnbGVMb2dpbn1cbiAgICAgICAgb25DYW5jZWw9e29uVG9nZ2xlTG9naW59XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAgPExvZ2luTW9kYWxcbiAgICAgICAgICBzZXRUb2dnbGVMb2dpbj17c2V0VG9nZ2xlTG9naW59XG4gICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlVXNlcm5hbWU9e29uQ2hhbmdlVXNlcm5hbWV9XG4gICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlUGFzc3dvcmQ9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPXsnU2VhcmNoJ31cbiAgICAgICAgdmlzaWJsZT17dG9nZ2xlU2VhcmNofVxuICAgICAgICBvbkNhbmNlbD17b25Ub2dnbGVTZWFyY2h9XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaEJhck1vZGFsIHR5cGU9eydwcm9kdWN0J30gc2V0VG9nZ2xlU2VhcmNoPXtzZXRUb2dnbGVTZWFyY2h9IC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPXsnQ2hhbmdlIFBhc3N3b3JkJ31cbiAgICAgICAgdmlzaWJsZT17dG9nZ2xlQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIG9uQ2FuY2VsPXtvblRvZ2dsZUNoYW5nZVBhc3N3b3JkfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxDaGFuZ2VQYXNzd29yZCBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZD17c2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JywgYmFja0dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXsnYmFjayd9PlxuICAgICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IFJvdXRlci5iYWNrKCl9IC8+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT17J3NlYXJjaCd9IHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PlxuICAgICAgICAgICAge29yaWdpblByb2R1Y3RzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlU2VhcmNofVxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgICAgeyFpc0xvZ2dlZEluXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17J2xvZ2luJ30+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRvZ2dsZUxvZ2lufT7roZzqt7jsnbg8L2E+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17J3Byb2ZpbGUnfT5cbiAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI9eydjbGljayd9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17J2JvdHRvbSd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZXNzaW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Nob3d9XG4gICAgICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17c2hvd0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXsndmVydGljYWwnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvblRvZ2dsZUNoYW5nZVBhc3N3b3JkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDruYTrsIDrsojtmLgg67OA6rK9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tQYXltZW50c30+6rKw7KCc7J2066ClPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmRpdmlzaW9uID09PSB0cnVlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2tBZG1pbn0+66ek7J6l6rSA66asIO2OmOydtOyngDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VXNlck91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0ga2V5PXsnbG9nb3V0J30+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrTG9nb3V0fT7roZzqt7jslYTsm4M8L2E+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmliYXJMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcblxuaW1wb3J0IENlbnRyYWxBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvQ2VudHJhbEFwcExheW91dCc7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PcmRlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIHVzZXItc2NhbGFibGU9bm9cIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5pYW1wb3J0LmtyL2pzL2lhbXBvcnQucGF5bWVudC0xLjEuNS5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1ImZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3NzbC5kYXVtY2RuLm5ldC9kbWFwcy9tYXBfanNfaW5pdC9wb3N0Y29kZS52Mi5qcz9hdXRvbG9hZD1mYWxzZVwiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5pYW1wb3J0LmtyL2pzL2lhbXBvcnQucGF5bWVudC0xLjEuNS5qc1wiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgIHtgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGMkY1IWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9YH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz17YC8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXBwa2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfS0FLQU9fUkVTVEFQSX0mbGlicmFyaWVzPXNlcnZpY2VzYH1cbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgc3JjPXtgLy9kYXBpLmtha2FvLmNvbS92Mi9tYXBzL3Nkay5qcz9hcHBrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19LQUtBT19KQVZBU0NSSVBUfSZsaWJyYXJpZXM9c2VydmljZXMsY2x1c3RlcmVyYH1cbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17c3RvcmUuX19wZXJzaXN0b3J9PlxuICAgICAgICA8Q2VudHJhbEFwcExheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgIDwvQ2VudHJhbEFwcExheW91dD5cbiAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKEFwcCkpO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIHNob3BMaXN0OiBbXSxcbiAgb3JpZ2luYWxTaG9wTGlzdDogW10sXG4gIGlzTG9hZGluZ1VzZXJMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1VzZXJMaXN0RXJyb3I6IG51bGwsXG4gIHVzZXJMaXN0OiBbXSxcbiAgb3JpZ2luYWxVc2VyTGlzdDogW10sXG4gIGV2ZW50czogW10sXG4gIGxvYWRFdmVudHNFcnJvcjogbnVsbCxcbiAgaXNMb2FkaW5nRXZlbnRzOiBmYWxzZSxcbiAgcGFnZUluZm86IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9SRVFVRVNUID0gJ0xPQURfVVNFUkxJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9TVUNDRVNTID0gJ0xPQURfVVNFUkxJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9GQUlMVVJFID0gJ0xPQURfVVNFUkxJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSAnTE9BRF9TSE9QTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSAnTE9BRF9TSE9QTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgPSAnTE9BRF9TSE9QTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9GQUlMVVJFID0gJ0RFTEVURV9VU0VSX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfUkVRVUVTVCA9ICdMT0FEX0VWRU5UU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19TVUNDRVNTID0gJ0xPQURfRVZFTlRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX0ZBSUxVUkUgPSAnTE9BRF9FVkVOVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfUkVRVUVTVCA9ICdBRERfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1NVQ0NFU1MgPSAnQUREX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9GQUlMVVJFID0gJ0FERF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfUkVRVUVTVCA9ICdFRElUX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfU1VDQ0VTUyA9ICdFRElUX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfRkFJTFVSRSA9ICdFRElUX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1JFUVVFU1QgPSAnREVMRVRFX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9TVUNDRVNTID0gJ0RFTEVURV9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfRkFJTFVSRSA9ICdERUxFVEVfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBQQUdFX0NIQU5HRV9TVUNDRVNTID0gJ1BBR0VfQ0hBTkdFX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxTaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nU2hvcExpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfQ0hBTkdFX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnBhZ2VJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjYXJ0OiBbXSxcbiAgaXNMb2FkaW5nQ2FydDogZmFsc2UsXG4gIGlzUmVtb3ZlaW5nQ2FydDogZmFsc2UsXG4gIFNob3BJZDogdW5kZWZpbmVkLFxuICBUYWJsZUlkOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1JFUVVFU1QgPSAnTE9BRF9DQVJUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gJ0xPQURfQ0FSVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTFVSRSA9ICdMT0FEX0NBUlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9SRVFVRVNUID0gJ1JFTU9WRV9JVEVNX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX1NVQ0NFU1MgPSAnUkVNT1ZFX0lURU1fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU1fRkFJTFVSRSA9ICdSRU1PVkVfSVRFTV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9JVEVNX1FVQU5USVRZX1JFUVVFU1QgPSAnQUREX0lURU1fUVVBTlRJVFlfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVCA9ICdTVUJTVFJBQ1RfSVRFTV9RVUFOVElUWV9SRVFVRVNUJztcblxuZXhwb3J0IGNvbnN0IEFERF9DQVJUX0lURU1fUkVRVUVTVCA9ICdBRERfQ0FSVF9JVEVNX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9DQVJUX0lURU1fUkVRVUVTVCA9ICdSRU1PVkVfQ0FSVF9JVEVNX1JFUVVFU1QnO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0FSVF9SRVFVRVNUID0gJ0NMRUFSX0NBUlRfUkVRVUVTVCc7XG5cbmV4cG9ydCBjb25zdCBHRVRfU0hPUF9UQUJMRV9JRCA9ICdHRVRfU0hPUF9UQUJMRV9JRCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIExPQURfQ0FSVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IFsuLi5zdGF0ZS5jYXJ0LCBhY3Rpb24uZGF0YV0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFJFTU9WRV9JVEVNX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gc3RhdGUuY2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLml0ZW1zXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FSVF9JVEVNX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnN0IG5ld1Byb2R1Y3QgPSBhY3Rpb24ucHJvZHVjdDtcbiAgICAgIGNvbnN0IHByb2R1Y3RJbmRleCA9IHN0YXRlLmNhcnQuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBuZXdQcm9kdWN0LmlkKTtcbiAgICAgIGlmIChwcm9kdWN0SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGZvcm1lclByb2R1Y3QgPSBzdGF0ZS5jYXJ0W3Byb2R1Y3RJbmRleF07XG4gICAgICAgIGNvbnN0IGZpbmFsUHJvZHVjdCA9IHtcbiAgICAgICAgICAuLi5mb3JtZXJQcm9kdWN0LFxuICAgICAgICAgIHF1YW50aXR5OiBmb3JtZXJQcm9kdWN0LnF1YW50aXR5ICsgbmV3UHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2FydExpc3QgPSBbLi4uc3RhdGUuY2FydC5maWx0ZXIoKHYpID0+IHYuaWQgIT09IG5ld1Byb2R1Y3QuaWQpLCBmaW5hbFByb2R1Y3RdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgY2FydDogY2FydExpc3QsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIG5ld1Byb2R1Y3RdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9JVEVNX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoKGNhcnQpID0+IGNhcnQuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLmNhcnRbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5IDwgMTAwID8gKHF1YW50aXR5ICs9IDEpIDogOTk7XG4gICAgICBjb25zdCBjYXJ0ID0gWy4uLnN0YXRlLmNhcnRdO1xuICAgICAgY2FydFtpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNVQlNUUkFDVF9JVEVNX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoKGNhcnQpID0+IGNhcnQuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5jYXJ0W2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA+IDEgPyAocXVhbnRpdHkgLT0gMSkgOiAxO1xuICAgICAgY29uc3QgY2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcbiAgICAgIGNhcnRbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0xFQVJfQ0FSVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogW10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgR0VUX1NIT1BfVEFCTEVfSUQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBTaG9wSWQ6IGFjdGlvbi5kYXRhLlNob3BJZCxcbiAgICAgICAgVGFibGVJZDogYWN0aW9uLmRhdGEuVGFibGVJZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgc2hvcCBmcm9tICcuL3Nob3AnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjYXJ0IGZyb20gJy4vY2FydCc7XG5pbXBvcnQgcGF5bWVudCBmcm9tICcuL3BheW1lbnQnO1xuaW1wb3J0IGFkbWluIGZyb20gJy4vYWRtaW4nO1xuXG5leHBvcnQgY29uc3QgU0VUX0NMSUVOVF9TVEFURSA9ICdTRVRfQ0xJRU5UX1NUQVRFJztcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBhY3Rpb24udHlwZTogJHthY3Rpb24udHlwZX1gKTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICBhZG1pbixcbiAgdXNlcixcbiAgc2hvcCxcbiAgbWVudSxcbiAgY2FydCxcbiAgcGF5bWVudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIG5hdmlTaXplOiBudWxsLFxuICBUYWJsZUlkOiBudWxsLFxuICBpc0FkZGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBpc0xvYWRpbmdDYXJ0OiBmYWxzZSxcbiAgY2F0ZWdvcmllczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19SRVFVRVNUID0gJ0xPQURfUFJPRFVDVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19TVUNDRVNTID0gJ0xPQURfUFJPRFVDVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19GQUlMVVJFID0gJ0xPQURfUFJPRFVDVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfUkVRVUVTVCA9ICdBRERfUVVBTlRJVFlfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1NVQ0NFU1MgPSAnQUREX1FVQU5USVRZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9GQUlMVVJFID0gJ0FERF9RVUFOVElUWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gJ1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyA9ICdTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUgPSAnU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9ICdBRERfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gJ0FERF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0ZBSUxVUkUgPSAnQUREX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfUkVRVUVTVCA9ICdMT0FEX0NBUlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnTE9BRF9DQVJUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMVVJFID0gJ0xPQURfQ0FSVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IElOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1QgPSAnSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVCc7XG5cbmV4cG9ydCBjb25zdCBHRVRfTkFWSUJBUl9TSVpFID0gJ0dFVF9OQVZJQkFSX1NJWkUnO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9ICdTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTID0gJ1NFTEVDVF9DQVRFR09SWV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9OQVZJQkFSX1NJWkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuYXZpU2l6ZTogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1FVQU5USVRZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5IDwgMTAwID8gKHF1YW50aXR5ICs9IDEpIDogOTk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPiAxID8gKHF1YW50aXR5IC09IDEpIDogMTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLlRhYmxlSWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0ubWVudXMsXG4gICAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLm1lbnVzLFxuICAgICAgICAgIFRhYmxlSWQ6IGFjdGlvbi5kYXRhWzBdLlRhYmxlSWQsXG4gICAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLmRhdGFbMV0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUFJPRFVDVFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWN0aW9uLmRhdGFdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC50aXRsZS5pbmRleE9mKGFjdGlvbi5kYXRhLnRleHQpID4gLTE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uaWQgPT0gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IFsuLi5zdGF0ZS5vcmlnaW5Qcm9kdWN0c10gfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHYuRGlzY291bnQgIT09IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGRpc2NvdW50ZWRQcm9kdWN0IH07XG4gICAgICB9XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAocikgPT4gci5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWRcbiAgICAgICk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1BheWluZzogZmFsc2UsXG4gIGRhdGE6IFtdLFxuICBwYXlpbmdFcnJvcjogbnVsbCxcbiAgaGlzdG9yeTogW10sXG4gIGlzTG9hZGluZ0hpc3Rvcnk6IGZhbHNlLFxuICBsb2FkaW5nRXJyb3I6IG51bGwsXG4gIHJlbW92aW5nSGlzdG9yeTogZmFsc2UsXG4gIHJlbW92aW5nSGlzdG9yeUVycm9yOiBudWxsLFxuICBjbGllbnRIaXN0b3J5UmVtb3Zpbmc6IGZhbHNlLFxuICBjbGllbnRIaXN0b3J5UmVtb3ZpbmdFcnJvcjogbnVsbCxcbiAgaXNTZWFjaGluZ0hpc3Rvcnk6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfUkVRVUVTVCA9IFwiUEFZTUVOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFZTUVOVF9TVUNDRVNTID0gXCJQQVlNRU5UX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVlNRU5UX0ZBSUxVUkUgPSBcIlBBWU1FTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9QQVlNRU5UX0hJU1RPUllfUkVRVUVTVCA9IFwiTE9BRF9QQVlNRU5UX0hJU1RPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfUEFZTUVOVF9ISVNUT1JZX1NVQ0NFU1MgPSBcIkxPQURfUEFZTUVOVF9ISVNUT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BBWU1FTlRfSElTVE9SWV9GQUlMVVJFID0gXCJMT0FEX1BBWU1FTlRfSElTVE9SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDTElFTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCA9IFwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBDTElFTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyA9IFwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBDTElFTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSA9IFwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCA9IFwiUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTID0gXCJQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkUgPSBcIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkFUSU5HX1JFUVVFU1QgPSBcIlJBVElOR19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUkFUSU5HX1NVQ0NFU1MgPSBcIlJBVElOR19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkFUSU5HX0ZBSUxVUkUgPSBcIlJBVElOR19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTRUFSQ0hfSElTVE9SWV9SRVFVRVNUID0gXCJTRUFSQ0hfSElTVE9SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX0hJU1RPUllfU1VDQ0VTUyA9IFwiU0VBUkNIX0hJU1RPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9ISVNUT1JZX0ZBSUxVUkUgPSBcIlNFQVJDSF9ISVNUT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUEFZTUVOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZW0sIGlzUGF5aW5nOiB0cnVlIH07XG4gICAgfVxuICAgIGNhc2UgUEFZTUVOVF9TVUNDRVNTOiB7XG4gICAgICAvLyBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NBUlRfUkVRVUVTVCB9KTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1BheWluZzogZmFsc2UgfTtcbiAgICB9XG4gICAgY2FzZSBQQVlNRU5UX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1BheWluZzogZmFsc2UsIHBheWluZ0Vycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdIaXN0b3J5OiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaGlzdG9yeTogWy4uLmFjdGlvbi5kYXRhXSwgaXNMb2FkaW5nSGlzdG9yeTogZmFsc2UgfTtcbiAgICB9XG4gICAgY2FzZSBMT0FEX1BBWU1FTlRfSElTVE9SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nSGlzdG9yeTogZmFsc2UsIGxvYWRpbmdFcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuXG4gICAgY2FzZSBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmluZ0hpc3Rvcnk6IHRydWUgfTtcbiAgICB9XG5cbiAgICBjYXNlIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5oaXN0b3J5LmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgaGlzdG9yeSA9IHN0YXRlLmhpc3Rvcnk7XG4gICAgICBjb25zdCBwYXltZW50ID0gaGlzdG9yeVtpbmRleF07XG4gICAgICBwYXltZW50LnN0YXR1cyA9IGFjdGlvbi5kYXRhLnN0YXR1cztcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoaXN0b3J5LCByZW1vdmluZ0hpc3Rvcnk6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY2FzZSBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCByZW1vdmluZ0hpc3Rvcnk6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY2FzZSBSQVRJTkdfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIFJBVElOR19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmhpc3RvcnkuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5QYXltZW50SWQpO1xuICAgICAgY29uc3QgbG9nID0gc3RhdGUuaGlzdG9yeVtpbmRleF07XG4gICAgICBsZXQgcmF0aW5nID0gYWN0aW9uLmRhdGEucmF0ZTtcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBbLi4uc3RhdGUuaGlzdG9yeV07XG4gICAgICBoaXN0b3J5W2luZGV4XSA9IHsgLi4ubG9nLCBSYXRpbmc6IHsgcmF0ZTogcmF0aW5nIH0gfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBoaXN0b3J5LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFJBVElOR19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VBUkNIX0hJU1RPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzU2VhY2hpbmdIaXN0b3J5OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUFSQ0hfSElTVE9SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaGlzdG9yeTogYWN0aW9uLmRhdGEsIGlzU2VhY2hpbmdIaXN0b3J5OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VBUkNIX0hJU1RPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzU2VhY2hpbmdIaXN0b3J5OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICB9XG59O1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG9wOiBudWxsLFxuICBwcm9kdWN0czogW10sXG4gIG9yaWdpblByb2R1Y3RzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG4gIHByb2R1Y3Q6IG51bGwsXG4gIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gIGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsXG4gIHNlbGVjdGluZ1Byb2R1Y3RFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9SRVFVRVNUID0gJ0FERF9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSAnQUREX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfRkFJTFVSRSA9ICdBRERfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QgPSAnQURNSU5fUFJPRFVDVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyA9ICdBRE1JTl9QUk9EVUNUU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19GQUlMVVJFID0gJ0FETUlOX1BST0RVQ1RTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCA9ICdTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTID0gJ1NFTEVDVF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUgPSAnU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfUkVRVUVTVCA9ICdFRElUX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1NVQ0NFU1MgPSAnRURJVF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9GQUlMVVJFID0gJ0VESVRfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX1JFUVVFU1QgPSAnREVMRVRFX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyA9ICdERUxFVEVfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9GQUlMVVJFID0gJ0RFTEVURV9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTID0gJ0NIRUNLX1BST0RVQ1RfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyA9ICdDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QgPSAnRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MgPSAnRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUgPSAnRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9SRVFVRVNUID0gJ0RFTEVURV9ESVNDT1VOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyA9ICdERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUgPSAnREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1JFUVVFU1QgPSAnQUREX0NBVEVHT1JZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9TVUNDRVNTID0gJ0FERF9DQVRFR09SWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfRkFJTFVSRSA9ICdBRERfQ0FURUdPUllfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX1JFUVVFU1QgPSAnRURJVF9DQVRFR09SWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX1NVQ0NFU1MgPSAnRURJVF9DQVRFR09SWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX0ZBSUxVUkUgPSAnRURJVF9DQVRFR09SWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9SRVFVRVNUID0gJ0RFTEVURV9DQVRFR09SWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyA9ICdERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUgPSAnREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUyA9ICdDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRERfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRERfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLmRhdGFbMV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgaXNTZWxlY3RpbmdQcm9kdWN0OiB0cnVlLCAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsIC4uLnN0YXRlLCBwcm9kdWN0OiBhY3Rpb24uZGF0YSB9O1xuICAgIH1cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xuXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9IGFjdGlvbi5kYXRhKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cywgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9XG4gICAgICAgIGFjdGlvbi5kYXRhWzFdID09IDBcbiAgICAgICAgICA/IGFjdGlvbi5kYXRhWzBdXG4gICAgICAgICAgOiBhY3Rpb24uZGF0YVswXS5maWx0ZXIoKHYpID0+IHYuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmRhdGFbMV0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIENIRUNLX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IGNoZWNrZWQgPSBwcm9kdWN0LmNoZWNrZWQ7XG4gICAgICBjaGVja2VkID0gY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgY2hlY2tlZCB9O1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcbiAgICAgIHByb2R1Y3RzLm1hcCgodikgPT4gKHYuY2hlY2tlZCA9IGFjdGlvbi5jaGVja2VkKSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9XG4gICAgICAgIGFjdGlvbi5kYXRhWzFdICE9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXS5maWx0ZXIoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGFbMV0pXG4gICAgICAgICAgOiBhY3Rpb24uZGF0YVswXTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhWzBdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWVzOiBbLi4uc3RhdGUuY2F0ZWdvcmllcywgYWN0aW9uLmRhdGFdIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5jYXRlZ29yaWVzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gWy4uLnN0YXRlLmNhdGVnb3JpZXNdO1xuICAgICAgY2F0ZWdvcmllc1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWVzIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBzdGF0ZS5jYXRlZ29yaWVzLmZpbHRlcihcbiAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgICh2KSA9PiB2LkNhdGVnb3J5LmlkICE9PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IGZpbHRlcmVkQ2F0ZWdvcmllcyxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmlkID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBzdGF0ZS5vcmlnaW5Qcm9kdWN0cyB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24uaWQgPT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnRlZFByb2R1Y3QgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuRGlzY291bnQgIT09IG51bGxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWRcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1NpZ25pbmdVcDogZmFsc2UsXG4gIHNpZ25VcFN1Y2Nlc3M6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgbG9naW5FcnJvcjogbnVsbCxcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgbG9nb3V0RXJyb3I6IG51bGwsXG4gIHNlc3Npb246IG51bGwsXG4gIGlzTG9hZGluZ1VzZXI6IGZhbHNlLFxuICBsb2FkaW5nVXNlckVycm9yOiBudWxsLFxuICBjaGFuZ2luZ1Bhc3N3b3JkOiBmYWxzZSxcbiAgcGFzc3dvcmRDaGFuZ2VFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fSU5fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fSU5fRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fUkVRVUVTVCA9ICdQQVNTV09SRF9DT05GSVJNX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fU1VDQ0VTUyA9ICdQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRSA9ICdQQVNTV09SRF9DT05GSVJNX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QgPSAnUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTID0gJ1BBU1NXT1JEX0NIQU5HRV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSA9ICdQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBTdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwRmFpbHVyZSA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICBkcmFmdC5zZXNzaW9uID0gYWN0aW9uLmRhdGEuZnVsbFVzZXI7XG4gICAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnNlc3Npb24gPSBudWxsO1xuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvZ2luRXJyb3IgPSBudWxsO1xuXG4gICAgICBjYXNlIFBBU1NXT1JEX0NIQU5HRV9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5jaGFuZ2luZ1Bhc3N3b3JkID0gdHJ1ZTtcbiAgICAgIGNhc2UgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmNoYW5naW5nUGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgIGNhc2UgUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmNoYW5naW5nUGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQucGFzc3dvcmRDaGFuZ2VFcnJvciA9IGFjdGlvbi5lcnJvcjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHNob3AgZnJvbSAnLi9zaG9wJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgcGF5bWVudCBmcm9tICcuL3BheW1lbnQnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH1gO1xuXG5mdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh1c2VyKSwgZm9yayhzaG9wKSwgZm9yayhtZW51KSwgZm9yayhwYXltZW50KV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb290U2FnYTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBhbGwsIHB1dCwgZm9yaywgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBMT0FEX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIExPQURfUFJPRFVDVFNfRkFJTFVSRSxcbiAgTE9BRF9QUk9EVUNUU19SRVFVRVNULFxufSBmcm9tICcuLi9yZWR1Y2Vycy9tZW51JztcblxuZnVuY3Rpb24gbG9hZFByb2R1Y3RBcGkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL21lbnVgLCB7IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkUHJvZHVjdHMoeyBkYXRhIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QXBpLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QUk9EVUNUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QUk9EVUNUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFByb2R1Y3RzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUFJPRFVDVFNfUkVRVUVTVCwgbG9hZFByb2R1Y3RzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHByb2R1Y3RzU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoTG9hZFByb2R1Y3RzKV0pO1xufVxuIiwiaW1wb3J0IHtcbiAgZm9yayxcbiAgdGFrZUV2ZXJ5LFxuICBhbGwsXG4gIHB1dCxcbiAgY2FsbCxcbiAgdGFrZUxhdGVzdCxcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7XG4gIExPQURfUEFZTUVOVF9ISVNUT1JZX0ZBSUxVUkUsXG4gIExPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QsXG4gIExPQURfUEFZTUVOVF9ISVNUT1JZX1NVQ0NFU1MsXG4gIFJBVElOR19GQUlMVVJFLFxuICBSQVRJTkdfU1VDQ0VTUyxcbiAgUkFUSU5HX1JFUVVFU1QsXG4gIFNFQVJDSF9ISVNUT1JZX1NVQ0NFU1MsXG4gIFNFQVJDSF9ISVNUT1JZX0ZBSUxVUkUsXG4gIFNFQVJDSF9ISVNUT1JZX1JFUVVFU1QsXG4gIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCxcbiAgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFLFxuICBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MsXG59IGZyb20gJy4uL3JlZHVjZXJzL3BheW1lbnQnO1xuXG5mdW5jdGlvbiBwYXltZW50SGlzdG9yeUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcGF5bWVudHMvbG9hZCcsIHtcbiAgICBpZDogZGF0YS5pZCxcbiAgICBTaG9wSWQ6IGRhdGEuU2hvcElkLFxuICAgIGRpdmlzaW9uOiBkYXRhLmRpdmlzaW9uLFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIHBheW1lbnRIaXN0b3J5KGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHBheW1lbnRIaXN0b3J5QVBJLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QQVlNRU5UX0hJU1RPUllfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoUGF5bWVudEhpc3RvcnkoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QQVlNRU5UX0hJU1RPUllfUkVRVUVTVCwgcGF5bWVudEhpc3RvcnkpO1xufVxuXG5mdW5jdGlvbiByYXRpbmdBUEkoeyBkYXRhIH0pIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wYXltZW50cy9yYXRpbmcnLCB7XG4gICAgUGF5bWVudHNJZDogZGF0YS5QYXltZW50c0lkLFxuICAgIFVzZXJJZDogZGF0YS5Vc2VySWQsXG4gICAgUHJvZHVjdElkOiBkYXRhLlByb2R1Y3RJZCxcbiAgICByYXRlOiBkYXRhLnJhdGUsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogcmF0aW5nKGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJhdGluZ0FQSSwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkFUSU5HX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUkFUSU5HX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFJhdGluZygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChSQVRJTkdfUkVRVUVTVCwgcmF0aW5nKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoSGlzdG9yeUFQSSh7IGRhdGEgfSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgaWYgKGRhdGEuZGl2aXNpb24gPT0gdHJ1ZSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcGF5bWVudHMvc2VhcmNoL3Nob3AnLCB7IGRhdGEgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wYXltZW50cy9zZWFyY2gvdXNlcicsIHsgZGF0YSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogc2VhcmNoSGlzdG9yeShkYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWFyY2hIaXN0b3J5QVBJLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBTRUFSQ0hfSElTVE9SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFNFQVJDSF9ISVNUT1JZX0ZBSUxVUkUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoU2VhcmNoSGlzdG9yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfSElTVE9SWV9SRVFVRVNULCBzZWFyY2hIaXN0b3J5KTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsUGF5bWVudEFQSSh7IGlkLCBVc2VySWQsIGRpdmlzaW9uLCBpbXBfdWlkLCBhbW91bnQgfSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3BheW1lbnRzL2NhbmNlbCcsIHtcbiAgICBpZCxcbiAgICBVc2VySWQsXG4gICAgZGl2aXNpb24sXG4gICAgaW1wX3VpZCxcbiAgICBhbW91bnQsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogY2FuY2VsUGF5bWVudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNhbmNlbFBheW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX0ZBSUxVUkUsIGVycm9yOiBlcnIgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQ2FuY2VsUGF5bWVudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1QsIGNhbmNlbFBheW1lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaFBheW1lbnRIaXN0b3J5KSxcbiAgICBmb3JrKHdhdGNoUmF0aW5nKSxcbiAgICBmb3JrKHdhdGNoU2VhcmNoSGlzdG9yeSksXG4gICAgZm9yayh3YXRjaENhbmNlbFBheW1lbnQpLFxuICBdKTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBhbGwsIHB1dCwgZm9yaywgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBBRERfUFJPRFVDVF9SRVFVRVNULFxuICBBRERfUFJPRFVDVF9TVUNDRVNTLFxuICBBRERfUFJPRFVDVF9GQUlMVVJFLFxuICBBRE1JTl9QUk9EVUNUU19SRVFVRVNULFxuICBBRE1JTl9QUk9EVUNUU19TVUNDRVNTLFxuICBBRE1JTl9QUk9EVUNUU19GQUlMVVJFLFxuICBERUxFVEVfUFJPRFVDVF9GQUlMVVJFLFxuICBERUxFVEVfUFJPRFVDVF9TVUNDRVNTLFxuICBERUxFVEVfUFJPRFVDVF9SRVFVRVNULFxuICBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLFxuICBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULFxuICBFRElUX1BST0RVQ1RfUkVRVUVTVCxcbiAgRURJVF9QUk9EVUNUX1NVQ0NFU1MsXG4gIEVESVRfUFJPRFVDVF9GQUlMVVJFLFxuICBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyxcbiAgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNULFxuICBBRERfQ0FURUdPUllfRkFJTFVSRSxcbiAgQUREX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIEFERF9DQVRFR09SWV9SRVFVRVNULFxuICBFRElUX0NBVEVHT1JZX1JFUVVFU1QsXG4gIEVESVRfQ0FURUdPUllfU1VDQ0VTUyxcbiAgRURJVF9DQVRFR09SWV9GQUlMVVJFLFxuICBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCxcbiAgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIERFTEVURV9DQVRFR09SWV9GQUlMVVJFLFxuICBERUxFVEVfRElTQ09VTlRfUkVRVUVTVCxcbiAgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MsXG4gIERFTEVURV9ESVNDT1VOVF9GQUlMVVJFLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9zaG9wJztcblxuZnVuY3Rpb24gYWRkUHJvZHVjdEFwaShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcHJvZHVjdHMvYWRkJywgZGF0YSk7XG59XG5mdW5jdGlvbiogYWRkUHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFByb2R1Y3RBcGksIGFjdGlvbi5mb3JtRGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoQWRkUHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUFJPRFVDVF9SRVFVRVNULCBhZGRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2R1Y3RzQXBpKFNob3BJZCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL2xvYWQnLCB7IFNob3BJZCB9KTtcbn1cbmZ1bmN0aW9uKiBsb2FkUHJvZHVjdHMoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUHJvZHVjdHNBcGksIGFjdGlvbi5TaG9wSWQpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hMb2FkUHJvZHVjdHMoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgbG9hZFByb2R1Y3RzKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvZHVjdEFQSShpZCkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL2RlbGV0ZScsIHsgaWQgfSk7XG59XG5mdW5jdGlvbiogZGVsZXRlUHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICB5aWVsZCBjYWxsKGRlbGV0ZVByb2R1Y3RBUEksIGFjdGlvbi5pZCk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogYWN0aW9uLmlkIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZVByb2R1Y3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX1BST0RVQ1RfUkVRVUVTVCwgZGVsZXRlUHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2R1Y3RBUEkoUHJvZHVjdElkKSB7XG4gIGNvbnNvbGUubG9nKHsgUHJvZHVjdElkIH0pO1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL3NlbGVjdCcsIHsgUHJvZHVjdElkIH0pO1xufVxuZnVuY3Rpb24qIHNlbGVjdFByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWxlY3RQcm9kdWN0QVBJLCBhY3Rpb24uUHJvZHVjdElkKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBwdXQoeyB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2VsZWN0UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULCBzZWxlY3RQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2R1ZGN0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wcm9kdWN0cy9lZGl0JywgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBlZGl0UHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygncmVzdWx0Jyk7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChlZGl0UHJvZHVkY3RBUEksIGFjdGlvbi5mb3JtRGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRWRpdFByb2R1Y3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRURJVF9QUk9EVUNUX1JFUVVFU1QsIGVkaXRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gZGlzY291bnRQcm9kdWN0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wcm9kdWN0cy9kaXNjb3VudCcsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGlzY291bnRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGlzY291bnRQcm9kdWN0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRGlzY291bnRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCwgZGlzY291bnRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL2NhdGVnb3J5L2FkZCcsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hBZGRDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ0FURUdPUllfUkVRVUVTVCwgYWRkQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBlZGl0Q2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL2NhdGVnb3J5L3VwZGF0ZScsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZWRpdENhdGVnb3J5KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdENhdGVnb3J5QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfQ0FURUdPUllfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRWRpdENhdGVnb3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfQ0FURUdPUllfUkVRVUVTVCwgZWRpdENhdGVnb3J5KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3Byb2R1Y3RzL2NhdGVnb3J5L2RlbGV0ZScsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGVsZXRlQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEaXNjb3VudEFQSSh7IFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCB9KSB7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcHJvZHVjdHMvZGlzY291bnQvZGVsZXRlJywge1xuICAgIFByb2R1Y3RJZHMsXG4gICAgU2hvcElkLFxuICAgIENhdGVnb3J5SWQsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlRGlzY291bnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVEaXNjb3VudEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9ESVNDT1VOVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9ESVNDT1VOVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVEaXNjb3VudCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfRElTQ09VTlRfUkVRVUVTVCwgZGVsZXRlRGlzY291bnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdHNTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQcm9kdWN0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3RzKSxcbiAgICBmb3JrKHdhdGNoRGVsZXRlUHJvZHVjdCksXG4gICAgZm9yayh3YXRjaFNlbGVjdFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hFZGl0UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaERpc2NvdW50UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaEVkaXRDYXRlZ29yeSksXG4gICAgZm9yayh3YXRjaERlbGV0ZUNhdGVnb3J5KSxcbiAgICBmb3JrKHdhdGNoQWRkQ2F0ZWdvcnkpLFxuICAgIGZvcmsod2F0Y2hEZWxldGVEaXNjb3VudCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHtcbiAgZm9yayxcbiAgdGFrZUV2ZXJ5LFxuICBhbGwsXG4gIHB1dCxcbiAgY2FsbCxcbiAgdGFrZUxhdGVzdCxcbn0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCxcbiAgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MsXG4gIFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFLFxufSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcblxuZnVuY3Rpb24gbG9naW5BcGkobG9naW5EYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dpbicsIGxvZ2luRGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBsb2dpbihhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ2luQXBpLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XG4gIGNvbnNvbGUubG9nKCdUcnkgbG9nZ2luZyBpbicpO1xuICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTtcbn1cblxuZnVuY3Rpb24gc2lnblVwQXBpKHNpZ25VcERhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL3NpZ251cCcsIHNpZ25VcERhdGEpO1xufVxuXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQXBpLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJBcGkoKSB7XG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkVXNlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRVc2VyQXBpKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmRBcGkoeyBpZCwgcGFzc3dvcmQgfSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvcGFzc3dvcmQvY2hhbmdlJywgeyBpZCwgcGFzc3dvcmQgfSk7XG59XG5cbmZ1bmN0aW9uKiBwYXNzd29yZENoYW5nZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZVBhc3N3b3JkQXBpLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hQYXNzd29yZENoYW5nZSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCwgcGFzc3dvcmRDaGFuZ2UpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxuICAgIGZvcmsod2F0Y2hQYXNzd29yZENoYW5nZSksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcbmltcG9ydCByb290U2FnYSBmcm9tIFwiLi4vc2FnYXNcIjtcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcbmNvbnN0IHsgcGVyc2lzdFN0b3JlIH0gPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTtcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlL3Nlc3Npb25cIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGVuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuICBjb25zdCByb290U3RvcmUgPSAocmVkdWNlcikgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwge30sIGVuaGVuY2VyKTtcblxuICBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChpc1NlcnZlcikge1xuICAgIGNvbnN0IHN0b3JlID0gcm9vdFN0b3JlKHJvb3RSZWR1Y2VyKTtcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgcGVyc2lzdFJlZHVjZXIgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xuXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICAgIGtleTogXCJuZXh0anNcIixcbiAgICAgIHdoaXRlbGlzdDogW1widXNlclwiXSxcbiAgICAgIHN0b3JhZ2UsXG4gICAgICB0cmFuc2Zvcm1zOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG4gICAgY29uc3Qgc3RvcmUgPSByb290U3RvcmUocGVyc2lzdGVkUmVkdWNlcik7XG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH1cbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7IGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9