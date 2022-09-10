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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










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
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/user/signup");
  };

  const onFinish = () => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_IN_REQUEST"],
      data: {
        username,
        password
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      style: {
        verticalAlign: "middle"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onFinish: onFinish,
        initialValues: {
          username: undefined,
          password: undefined
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
          direction: "vertical",
          size: "large",
          style: {
            width: "100%"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: "email",
            rules: [{
              required: true,
              message: "이메일을 입력해주세요"
            }, {
              type: "email",
              message: "형식에 맞지 않는 아이디입니다"
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
              prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MailOutlined"], {}),
              size: "large",
              name: "email",
              onChange: onChangeUsername
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
            name: "password",
            rules: [{
              required: true,
              message: "비밀번호를 입력해주세요"
            }, {
              pattern: /^[0-9a-zA-Z]{6,12}$/,
              message: "형식에 맞지 않는 비밀번호입니다"
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Password, {
              name: "password",
              prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LockOutlined"], {}),
              size: "large",
              onChange: onChangePassword
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "primary",
            htmlType: "submit",
            style: {
              width: "100%"
            },
            children: "Login"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            style: {
              width: "100%"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_stock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/stock */ "./reducers/stock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








const SearchBar = ({
  setToggleSearch,
  setVisible,
  type,
  setList
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();

  const onChangeText = e => setText(e.target.value);

  const onSearch = () => {
    if (type == "menu") {
      dispatch({
        type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["SEARCH_PRODUCT_SUCCESS"],
        data: {
          text
        }
      });
    } else if (type == "index") {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://dapi.kakao.com/v2/local/search/keyword?query=${text}&size=15`, {
        headers: {
          Authorization: `KakaoAK ${"82de51c28c3208e3e5ed5a6053d7559a"}`
        }
      }).then(res => {
        const location = res.data.documents;
        setList(location);
        setVisible(true);
      });
    } else if (type == "store") {
      dispatch({
        type: _reducers_stock__WEBPACK_IMPORTED_MODULE_5__["SEARCH_STOCK_PRODUCT_SUCCESS"],
        data: {
          text
        }
      });
    }

    setText();
    setToggleSearch(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const CentralAppLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      gutter: 10,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 0,
        md: 7
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 24,
        md: 10,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_NavibarLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {}), children]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Col"], {
        xs: 0,
        md: 7
      })]
    })
  });
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);


















const NavibarLayout = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  axios__WEBPACK_IMPORTED_MODULE_10___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;
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
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(false);
  const {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    pageInfo
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.admin);
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
    setPassword(undefined);
    setUsername(undefined);
    console.log(username);
    console.log(password);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_SUCCESS"]
    });
  };

  const onToggleLogin = () => {
    setPassword(undefined);
    setUsername(undefined);
    console.log(username);
    console.log(password);
    setToggleLogin(prev => !prev);
  };

  const onToggleSearch = () => {
    setToggleSearch(prev => !prev);
  };

  const onVisible = () => {
    setVisible(prev => !prev);
  };

  const onClickPayments = () => {
    router.push("/payments");
    hideHandler();
  };

  const onClickAdmin = () => {
    router.push("/shop/admin");
    hideHandler();
  };

  const onClickShopList = coordinates => {
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("/", {
      coordinates: {
        lat: Number(coordinates.x),
        lng: Number(coordinates.y)
      }
    }).then(result => {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_11__["SET_COORDINATES_SUCCESS"],
        data: [Number(coordinates.x), Number(coordinates.y)]
      }, []);
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_11__["SET_SHOPCOORDINATES_SUCCESS"],
        data: result.data
      }, []);
      setVisible(false);
    });
  };

  const {
    isLoggedIn,
    session
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  console.log(`isMobile: ${react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"]}`);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: "Login",
      visible: toggleLogin,
      onCancel: onToggleLogin,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {
        setToggleLogin: setToggleLogin,
        username: username,
        setUsername: setUsername,
        onChangeUsername: onChangeUsername,
        password: password,
        setPassword: setPassword,
        onChangePassword: onChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: "Search",
      visible: toggleSearch,
      onCancel: onToggleSearch,
      setVisible: setVisible,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        type: pageInfo,
        setToggleSearch: setToggleSearch,
        setVisible: setVisible,
        setList: setList
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: "검색결과",
      visible: visible,
      onCancel: onVisible,
      footer: null,
      children: list.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        dataSource: list,
        renderItem: item => {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
            onClick: () => onClickShopList(item),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item.Meta, {
              title: item.place_name,
              description: item.road_address_name
            })
          });
        }
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Empty"], {
        children: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      title: "Change Password",
      visible: toggleChangePassword,
      onCancel: onToggleChangePassword,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_ChangePassword__WEBPACK_IMPORTED_MODULE_7__["default"], {
        setToggleChangePassword: setToggleChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"], {
      mode: "horizontal",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["ArrowLeftOutlined"], {
          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.back()
        })
      }, "back"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        style: react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"] ? isLoggedIn ? {
          marginLeft: "20%"
        } : {
          marginLeft: "55%"
        } : null,
        children: react_device_detect__WEBPACK_IMPORTED_MODULE_12__["isMobile"] ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
          color: "blue",
          visible: isLoggedIn,
          onClick: onToggleSearch,
          children: ["  ", " Search ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["SearchOutlined"], {}), " ", "  "]
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Search, {
          enterButton: true,
          style: {
            verticalAlign: "middle"
          },
          onClick: onToggleSearch,
          visible: pageInfo === ("store" || false || false) ? true : false,
          readOnly: true
        })
      }, "search"), !isLoggedIn ? [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
          onClick: onToggleLogin,
          children: "\uB85C\uADF8\uC778"
        })
      }, "login")] : [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popover"], {
          trigger: "click",
          placement: "bottom",
          title: session.name,
          visible: show,
          onVisibleChange: showHandler,
          content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
              direction: "vertical",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                style: {
                  cursor: "pointer"
                },
                onClick: onToggleChangePassword,
                children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                style: {
                  cursor: "pointer"
                },
                onClick: onClickPayments,
                children: "\uACB0\uC81C\uC774\uB825"
              }), session.division === true && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                style: {
                  cursor: "pointer"
                },
                onClick: onClickAdmin,
                children: "\uB9E4\uC7A5\uAD00\uB9AC \uD398\uC774\uC9C0"
              })]
            })
          }),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["UserOutlined"], {})
        })
      }, "profile"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
          onClick: onClickLogout,
          children: "\uB85C\uADF8\uC544\uC6C3"
        })
      }, "logout")]]
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





 // import "antd-mobile/cjs/global";








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
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("link", {
        rel: "shortcut icon",
        href: `/favicon.ico`,
        type: "image/x-icon"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("link", {
        rel: "icon",
        href: `/favicon.ico`,
        type: "image/x-icon"
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
/*! exports provided: LOAD_CART_REQUEST, LOAD_CART_SUCCESS, LOAD_CART_FAILURE, REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAILURE, ADD_ITEM_QUANTITY_REQUEST, SUBSTRACT_ITEM_QUANTITY_REQUEST, ADD_CART_ITEM_REQUEST, REMOVE_CART_ITEM_REQUEST, CLEAR_CART_REQUEST, GET_SHOP_TABLE_ID, SOLD_CART_SUCCESS, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLD_CART_SUCCESS", function() { return SOLD_CART_SUCCESS; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
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
const LOAD_CART_REQUEST = "LOAD_CART_REQUEST";
const LOAD_CART_SUCCESS = "LOAD_CART_SUCCESS";
const LOAD_CART_FAILURE = "LOAD_CART_FAILURE";
const REMOVE_ITEM_REQUEST = "REMOVE_ITEM_REQUEST";
const REMOVE_ITEM_SUCCESS = "REMOVE_ITEM_SUCCESS";
const REMOVE_ITEM_FAILURE = "REMOVE_ITEM_FAILURE";
const ADD_ITEM_QUANTITY_REQUEST = "ADD_ITEM_QUANTITY_REQUEST";
const SUBSTRACT_ITEM_QUANTITY_REQUEST = "SUBSTRACT_ITEM_QUANTITY_REQUEST";
const ADD_CART_ITEM_REQUEST = "ADD_CART_ITEM_REQUEST";
const REMOVE_CART_ITEM_REQUEST = "REMOVE_CART_ITEM_REQUEST";
const CLEAR_CART_REQUEST = "CLEAR_CART_REQUEST";
const GET_SHOP_TABLE_ID = "GET_SHOP_TABLE_ID";
const SOLD_CART_SUCCESS = "SOLD_CART_SUCCESS";
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_CART_REQUEST:
        break;

      case LOAD_CART_SUCCESS:
        draft.cart = [action.data];
        break;

      case LOAD_CART_FAILURE:
        break;

      case REMOVE_ITEM_REQUEST:
        const items = draft.cart.filter(item => item.id !== action.id);
        draft.cart = items;
        break;

      case ADD_CART_ITEM_REQUEST:
        {
          const product = draft.cart.find(v => v.id === action.product.id);

          if (product) {
            product.quantity = product.quantity + action.product.quantity;
            break;
          }

          draft.cart.push(action.product);
        }
        break;

      case ADD_ITEM_QUANTITY_REQUEST:
        {
          const product = draft.cart.find(stock => stock.id === action.data.id);
          console.log(product.quantity);
          console.log(product.stock);
          let quantity = product.quantity;
          const stock = product.stock;
          quantity = quantity < stock ? quantity += 1 : product.quantity;
          product.quantity = quantity;
        }
        break;

      case SUBSTRACT_ITEM_QUANTITY_REQUEST:
        {
          const product = draft.cart.find(stock => stock.id === action.data.id);
          let quantity = product.quantity;
          quantity = quantity > 1 ? quantity -= 1 : 1;
          product.quantity = quantity;
        }
        break;

      case CLEAR_CART_REQUEST:
        draft.cart = [];
        break;

      case GET_SHOP_TABLE_ID:
        draft.ShopId = action.data.ShopId;
        draft.TableId = action.data.TableId;
        break;

      case SOLD_CART_SUCCESS:
        {
          const cart = state.cart;
          const products = action.data;
          const result = cart.map(item => {
            const product = products.find(v => v.id === item.id);
            const quantity = item.quantity - product.quantity;
            return _objectSpread(_objectSpread({}, item), {}, {
              quantity
            });
          });
          draft.cart = [state.cart, ...result];
        }
        break;

      default:
        state;
        break;
    }
  });
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
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock */ "./reducers/stock.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const SET_CLIENT_STATE = "SET_CLIENT_STATE";
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
  stock: _stock__WEBPACK_IMPORTED_MODULE_8__["default"],
  payment: _payment__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/menu.js":
/*!**************************!*\
  !*** ./reducers/menu.js ***!
  \**************************/
/*! exports provided: LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS, LOAD_PRODUCTS_FAILURE, ADD_QUANTITY_REQUEST, ADD_QUANTITY_SUCCESS, ADD_QUANTITY_FAILURE, SUBSTRACT_QUANTITY_REQUEST, SUBSTRACT_QUANTITY_SUCCESS, SUBSTRACT_QUANTITY_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, LOAD_CART_REQUEST, LOAD_CART_SUCCESS, LOAD_CART_FAILURE, INITIATE_QUANTITY_REQUEST, GET_NAVIBAR_SIZE, SEARCH_PRODUCT_SUCCESS, SELECT_CATEGORY_SUCCESS, LOAD_LIST_REQUEST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_REQUEST", function() { return LOAD_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_SUCCESS", function() { return LOAD_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_FAILURE", function() { return LOAD_LIST_FAILURE; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  products: [],
  originProducts: [],
  lists: [],
  originalLists: [],
  naviSize: null,
  TableId: null,
  isAddingProduct: false,
  isLoadingCart: false,
  categories: []
};
const LOAD_PRODUCTS_REQUEST = "LOAD_PRODUCTS_REQUEST";
const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
const LOAD_PRODUCTS_FAILURE = "LOAD_PRODUCTS_FAILURE";
const ADD_QUANTITY_REQUEST = "ADD_QUANTITY_REQUEST";
const ADD_QUANTITY_SUCCESS = "ADD_QUANTITY_SUCCESS";
const ADD_QUANTITY_FAILURE = "ADD_QUANTITY_FAILURE";
const SUBSTRACT_QUANTITY_REQUEST = "SUBSTRACT_QUANTITY_REQUEST";
const SUBSTRACT_QUANTITY_SUCCESS = "SUBSTRACT_QUANTITY_SUCCESS";
const SUBSTRACT_QUANTITY_FAILURE = "SUBSTRACT_QUANTITY_FAILURE";
const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
const LOAD_CART_REQUEST = "LOAD_CART_REQUEST";
const LOAD_CART_SUCCESS = "LOAD_CART_SUCCESS";
const LOAD_CART_FAILURE = "LOAD_CART_FAILURE";
const INITIATE_QUANTITY_REQUEST = "INITIATE_QUANTITY_REQUEST";
const GET_NAVIBAR_SIZE = "GET_NAVIBAR_SIZE";
const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
const SELECT_CATEGORY_SUCCESS = "SELECT_CATEGORY_SUCCESS";
const LOAD_LIST_REQUEST = "LOAD_LIST_REQUEST";
const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS";
const LOAD_LIST_FAILURE = "LOAD_LIST_FAILURE";

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

    case LOAD_LIST_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_LIST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          lists: action.data.products,
          originalLists: action.data.products
        });
      }

    case LOAD_LIST_FAILURE:
      {
        return _objectSpread({}, state);
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
  isSeachingHistory: false,
  userCoordinates: undefined
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
/*! exports provided: ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAILURE, SELECT_PRODUCT_REQUEST, SELECT_PRODUCT_SUCCESS, SELECT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CHECK_PRODUCT_SUCCESS, CHECK_ALL_PRODUCTS_SUCCESS, DISCOUNT_PRODUCT_REQUEST, DISCOUNT_PRODUCT_SUCCESS, DISCOUNT_PRODUCT_FAILURE, DELETE_DISCOUNT_REQUEST, DELETE_DISCOUNT_SUCCESS, DELETE_DISCOUNT_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, CATEGORY_FILTERED_SUCCESS, LOAD_SHOPLIST_REQUEST, LOAD_SHOPLIST_SUCCESS, LOAD_SHOPLIST_FAILURE, SET_COORDINATES_SUCCESS, SET_SHOPCOORDINATES_SUCCESS, NEAR_ADD_QUANTITY_REQUEST, NEAR_SUBSTRACT_QUANTITY_REQUEST, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COORDINATES_SUCCESS", function() { return SET_COORDINATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SHOPCOORDINATES_SUCCESS", function() { return SET_SHOPCOORDINATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEAR_ADD_QUANTITY_REQUEST", function() { return NEAR_ADD_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEAR_SUBSTRACT_QUANTITY_REQUEST", function() { return NEAR_SUBSTRACT_QUANTITY_REQUEST; });
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
  loadingShopListError: null,
  isAddingShop: false,
  userCoordinates: undefined,
  shopCoordinates: undefined,
  productsNear: undefined
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
const SET_COORDINATES_SUCCESS = "SET_COORDINATES_SUCCESS";
const SET_SHOPCOORDINATES_SUCCESS = "SET_SHOPCOORDINATES_SUCCESS";
const NEAR_ADD_QUANTITY_REQUEST = "NEAR_ADD_QUANTITY_REQUEST";
const NEAR_SUBSTRACT_QUANTITY_REQUEST = "NEAR_SUBSTRACT_QUANTITY_REQUEST";

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

    case SET_COORDINATES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        userCoordinates: action.data
      });

    case SET_SHOPCOORDINATES_SUCCESS:
      {
        console.log(action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          shopCoordinates: action.data.shopCoordinates
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

/***/ "./reducers/stock.js":
/*!***************************!*\
  !*** ./reducers/stock.js ***!
  \***************************/
/*! exports provided: LOAD_LIST_REQUEST, LOAD_LIST_SUCCESS, LOAD_LIST_FAILURE, ADD_STOCK_REQUEST, ADD_STOCK_SUCCESS, ADD_STOCK_FAILURE, SOLD_STOCK_SUCCESS, SOLD_STOCK_FAILURE, UPDATE_STOCK_SUCCESS, UPDATE_STOCK_FAILURE, PLUS_QUANTITY_SUCCESS, MINUS_QUANTITY_SUCCESS, INITIATE_STOCK_QUANTITY_SUCCESS, SEARCH_STOCK_PRODUCT_SUCCESS, SELECT_STOCK_CATEGORY_SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_REQUEST", function() { return LOAD_LIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_SUCCESS", function() { return LOAD_LIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_LIST_FAILURE", function() { return LOAD_LIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STOCK_REQUEST", function() { return ADD_STOCK_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STOCK_SUCCESS", function() { return ADD_STOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_STOCK_FAILURE", function() { return ADD_STOCK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLD_STOCK_SUCCESS", function() { return SOLD_STOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOLD_STOCK_FAILURE", function() { return SOLD_STOCK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STOCK_SUCCESS", function() { return UPDATE_STOCK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STOCK_FAILURE", function() { return UPDATE_STOCK_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_QUANTITY_SUCCESS", function() { return PLUS_QUANTITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUS_QUANTITY_SUCCESS", function() { return MINUS_QUANTITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIATE_STOCK_QUANTITY_SUCCESS", function() { return INITIATE_STOCK_QUANTITY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_STOCK_PRODUCT_SUCCESS", function() { return SEARCH_STOCK_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_STOCK_CATEGORY_SUCCESS", function() { return SELECT_STOCK_CATEGORY_SUCCESS; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  stocks: [],
  originalStocks: [],
  isSoldStockError: false,
  errorMesssage: undefined
};
const LOAD_LIST_REQUEST = "LOAD_LIST_REQUEST";
const LOAD_LIST_SUCCESS = "LOAD_LIST_SUCCESS";
const LOAD_LIST_FAILURE = "LOAD_LIST_FAILURE";
const ADD_STOCK_REQUEST = "ADD_STOCK_REQUEST";
const ADD_STOCK_SUCCESS = "ADD_STOCK_SUCCESS";
const ADD_STOCK_FAILURE = "ADD_STOCK_FAILURE";
const SOLD_STOCK_SUCCESS = "SOLD_STOCK_SUCCESS";
const SOLD_STOCK_FAILURE = "SOLD_STOCK_FAILRUE";
const UPDATE_STOCK_SUCCESS = "UPDATE_STOCK_SUCCESS";
const UPDATE_STOCK_FAILURE = "UPDATE_STOCK_FAILURE";
const PLUS_QUANTITY_SUCCESS = "PLUS_QUANTITY_SUCCESS";
const MINUS_QUANTITY_SUCCESS = "MINUS_QUANTITY_SUCCESS";
const INITIATE_STOCK_QUANTITY_SUCCESS = "INITIATE_STOCK_QUANTITY_SUCCESS";
const SEARCH_STOCK_PRODUCT_SUCCESS = "SEARCH_STOCK_PRODUCT_SUCCESS";
const SELECT_STOCK_CATEGORY_SUCCESS = "SELECT_STOCK_CATEGORY_SUCCESS";
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_LIST_REQUEST:
        break;

      case LOAD_LIST_SUCCESS:
        draft.stocks = action.data.stocks;
        draft.originalStocks = action.data.stocks;
        break;

      case LOAD_LIST_FAILURE:
        break;

      case PLUS_QUANTITY_SUCCESS:
        {
          const product = draft.stocks.find(stock => stock.id === action.data.id);
          let quantity = product.quantity;
          const stock = product.stock;
          quantity = quantity < stock ? quantity += 1 : product.quantity;
          product.quantity = quantity;
        }
        break;

      case MINUS_QUANTITY_SUCCESS:
        {
          const product = draft.stocks.find(stock => stock.id === action.data.id);
          let quantity = product.quantity;
          quantity = quantity > 1 ? quantity -= 1 : 1;
          product.quantity = quantity;
        }
        break;

      case INITIATE_STOCK_QUANTITY_SUCCESS:
        {
          const product = draft.stocks.find(stock => stock.id === action.data.id);
          product.quantity = 1;
        }
        break;

      case SEARCH_STOCK_PRODUCT_SUCCESS:
        {
          const products = draft.originalStocks.filter(stock => stock.Product.title.includes(action.data.text));
          draft.stocks = products;
        }
        break;

      case SELECT_STOCK_CATEGORY_SUCCESS:
        {
          const products = draft.originalStocks.filter(stock => stock.Category.id === action.data.id);
          draft.stocks = products;
        }
        break;

      case ADD_STOCK_SUCCESS:
        {
          const product = draft.stocks.find(stock => stock.id === action.data.id);
          const originalProducts = draft.originalStocks.find(stock => stock.id === action.data.id);

          if (product) {
            product.stock = action.data.stock;
            originalProducts.stock = action.data.stock;
            break;
          } else {
            draft.stocks = [...state.stocks, action.data];
            draft.originalStocks = [...state.originalStocks, action.data];
            break;
          }
        }

      case ADD_STOCK_FAILURE:
        {
          draft.addStockError = action.error;
        }

      case SOLD_STOCK_SUCCESS:
        {
          if (action.data.stock === 0) {
            draft.stocks = draft.stocks.filter(stock => stock.id !== action.data.id);
            draft.originalStocks = draft.originalStocks.filter(stock => stock.id !== action.data.id);
          } else {
            const product = draft.stocks.find(stock => stock.id === action.data.id);
            const originalProducts = draft.originalStocks.find(stock => stock.id === action.data.id);
            product.stock = action.data.stock;
            originalProducts.stock = action.data.stock;
          }
        }
        break;

      case SOLD_STOCK_FAILURE:
        {
          draft.isSoldStockError = true;
          draft.errorMesssage = action.data.message;
        }
        break;

      case UPDATE_STOCK_SUCCESS:
        {
          if (action.data.stock === 0) {
            draft.stocks = draft.stocks.filter(stock => stock.id !== action.data.id);
            draft.originalStocks = draft.originalStocks.filter(stock => stock.id !== action.data.id);
          } else {
            const product = draft.stocks.find(stock => stock.id === action.data.id);
            const originalProducts = draft.originalStocks.find(stock => stock.id === action.data.id);
            product.stock = action.data.stock;
            product.discount = action.data.discount;
            originalProducts.stock = action.data.stock;
            originalProducts.discount = action.data.discount;
          }
        }

      default:
        state;
        break;
    }
  });
});

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
  addShopError: null,
  userCoordinates: undefined
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

function loadListAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/stock/load", data);
}

function* loadList(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadListAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIST_FAILURE"],
      error: err
    });
  }
}

function* watchLoadList() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_menu__WEBPACK_IMPORTED_MODULE_2__["LOAD_LIST_REQUEST"], loadList);
}

function* productsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadProducts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadList)]);
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
  console.log(ShopId);
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

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DaGFuZ2VQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L0NlbnRyYWxBcHBMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2aWJhckxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2FkbWluLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wYXltZW50LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvc3RvY2suanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy9tZW51LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3BheW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvc2hvcC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZS9zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sIm5hbWVzIjpbIkNoYW5nZVBhc3N3b3JkIiwic2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicHJlc2VudFBhc3N3b3JkIiwib25DaGFuZ2VQcmVzZW50UGFzc3dvcmQiLCJzZXRQcmVzZW50UGFzc3dvcmQiLCJ1c2VJbnB1dCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsIm9uQ2hhbmdlUGFzc3dvcmRDaGVjayIsInNldENoYW5nZVBhc3N3b3JkQ2hlY2siLCJzZXNzaW9uIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwib25GaW5pc2giLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCIsImRhdGEiLCJpZCIsInByZXYiLCJ2ZXJ0aWNhbEFsaWduIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwidmFsaWRhdG9yIiwicnVsZSIsInZhbHVlIiwicmVnZXgiLCJSZWdFeHAiLCJtYXRjaCIsInJlc3VsdCIsImF4aW9zIiwicG9zdCIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwicGF0dGVybiIsImdldEZpZWxkVmFsdWUiLCJ3aWR0aCIsIkxvZ2luIiwic2V0VG9nZ2xlTG9naW4iLCJ1c2VybmFtZSIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImxvZ2luRXJyb3IiLCJ1c2VFZmZlY3QiLCJlcnJvciIsIm9uQ2xpY2tTaWduVXAiLCJSb3V0ZXIiLCJwdXNoIiwiTE9HX0lOX1JFUVVFU1QiLCJ1bmRlZmluZWQiLCJTZWFyY2hCYXIiLCJzZXRUb2dnbGVTZWFyY2giLCJzZXRWaXNpYmxlIiwic2V0TGlzdCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJvbkNoYW5nZVRleHQiLCJlIiwidGFyZ2V0Iiwib25TZWFyY2giLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwidGhlbiIsInJlcyIsImxvY2F0aW9uIiwiZG9jdW1lbnRzIiwiU0VBUkNIX1NUT0NLX1BST0RVQ1RfU1VDQ0VTUyIsImluaXRpYWxTdGF0ZSIsImhhbmRsZXIiLCJzZXR0ZXIiLCJ1c2VDaGVja2VkIiwiQ2VudHJhbEFwcExheW91dCIsImNoaWxkcmVuIiwiTmF2aWJhckxheW91dCIsInJvdXRlciIsInVzZVJvdXRlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRvZ2dsZUxvZ2luIiwidG9nZ2xlU2VhcmNoIiwidG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJ2aXNpYmxlIiwibGlzdCIsInBhZ2VJbmZvIiwiYWRtaW4iLCJzaG93Iiwic2V0U2hvdyIsImhpZGVIYW5kbGVyIiwic2hvd0hhbmRsZXIiLCJvblRvZ2dsZUNoYW5nZVBhc3N3b3JkIiwib25DbGlja0xvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJMT0dfT1VUX1NVQ0NFU1MiLCJvblRvZ2dsZUxvZ2luIiwib25Ub2dnbGVTZWFyY2giLCJvblZpc2libGUiLCJvbkNsaWNrUGF5bWVudHMiLCJvbkNsaWNrQWRtaW4iLCJvbkNsaWNrU2hvcExpc3QiLCJjb29yZGluYXRlcyIsImxhdCIsIk51bWJlciIsIngiLCJsbmciLCJ5IiwiU0VUX0NPT1JESU5BVEVTX1NVQ0NFU1MiLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJpc01vYmlsZSIsImxlbmd0aCIsIml0ZW0iLCJwbGFjZV9uYW1lIiwicm9hZF9hZGRyZXNzX25hbWUiLCJiYWNrIiwibWFyZ2luTGVmdCIsIm5hbWUiLCJjdXJzb3IiLCJkaXZpc2lvbiIsIkFwcCIsIkNvbXBvbmVudCIsInN0b3JlIiwidXNlU3RvcmUiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaXNMb2FkaW5nU2hvcExpc3QiLCJsb2FkaW5nU2hvcExpc3RFcnJvciIsInNob3BMaXN0Iiwib3JpZ2luYWxTaG9wTGlzdCIsImlzTG9hZGluZ1VzZXJMaXN0IiwibG9hZGluZ1VzZXJMaXN0RXJyb3IiLCJ1c2VyTGlzdCIsIm9yaWdpbmFsVXNlckxpc3QiLCJldmVudHMiLCJsb2FkRXZlbnRzRXJyb3IiLCJpc0xvYWRpbmdFdmVudHMiLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwicmVkdWNlciIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNhcnQiLCJpc0xvYWRpbmdDYXJ0IiwiaXNSZW1vdmVpbmdDYXJ0IiwiU2hvcElkIiwiVGFibGVJZCIsIkxPQURfQ0FSVF9SRVFVRVNUIiwiTE9BRF9DQVJUX1NVQ0NFU1MiLCJMT0FEX0NBUlRfRkFJTFVSRSIsIlJFTU9WRV9JVEVNX1JFUVVFU1QiLCJSRU1PVkVfSVRFTV9TVUNDRVNTIiwiUkVNT1ZFX0lURU1fRkFJTFVSRSIsIkFERF9JVEVNX1FVQU5USVRZX1JFUVVFU1QiLCJTVUJTVFJBQ1RfSVRFTV9RVUFOVElUWV9SRVFVRVNUIiwiQUREX0NBUlRfSVRFTV9SRVFVRVNUIiwiUkVNT1ZFX0NBUlRfSVRFTV9SRVFVRVNUIiwiQ0xFQVJfQ0FSVF9SRVFVRVNUIiwiR0VUX1NIT1BfVEFCTEVfSUQiLCJTT0xEX0NBUlRfU1VDQ0VTUyIsInByb2R1Y2VyIiwiaXRlbXMiLCJmaWx0ZXIiLCJwcm9kdWN0IiwiZmluZCIsInYiLCJxdWFudGl0eSIsInN0b2NrIiwicHJvZHVjdHMiLCJtYXAiLCJTRVRfQ0xJRU5UX1NUQVRFIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsIkhZRFJBVEUiLCJwYXlsb2FkIiwic2hvcCIsIm1lbnUiLCJwYXltZW50Iiwib3JpZ2luUHJvZHVjdHMiLCJsaXN0cyIsIm9yaWdpbmFsTGlzdHMiLCJuYXZpU2l6ZSIsImlzQWRkaW5nUHJvZHVjdCIsImNhdGVnb3JpZXMiLCJMT0FEX1BST0RVQ1RTX1JFUVVFU1QiLCJMT0FEX1BST0RVQ1RTX1NVQ0NFU1MiLCJMT0FEX1BST0RVQ1RTX0ZBSUxVUkUiLCJBRERfUVVBTlRJVFlfUkVRVUVTVCIsIkFERF9RVUFOVElUWV9TVUNDRVNTIiwiQUREX1FVQU5USVRZX0ZBSUxVUkUiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCIsIlNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTIiwiU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUiLCJBRERfUFJPRFVDVF9SRVFVRVNUIiwiQUREX1BST0RVQ1RfU1VDQ0VTUyIsIkFERF9QUk9EVUNUX0ZBSUxVUkUiLCJJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUIiwiR0VUX05BVklCQVJfU0laRSIsIlNFTEVDVF9DQVRFR09SWV9TVUNDRVNTIiwiTE9BRF9MSVNUX1JFUVVFU1QiLCJMT0FEX0xJU1RfU1VDQ0VTUyIsIkxPQURfTElTVF9GQUlMVVJFIiwiZmluZEluZGV4IiwibWVudXMiLCJmaWx0ZXJlZFByb2R1Y3RzIiwidGl0bGUiLCJpbmRleE9mIiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCIsInIiLCJDYXRlZ29yeSIsImlzUGF5aW5nIiwicGF5aW5nRXJyb3IiLCJoaXN0b3J5IiwiaXNMb2FkaW5nSGlzdG9yeSIsImxvYWRpbmdFcnJvciIsInJlbW92aW5nSGlzdG9yeSIsInJlbW92aW5nSGlzdG9yeUVycm9yIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nIiwiY2xpZW50SGlzdG9yeVJlbW92aW5nRXJyb3IiLCJpc1NlYWNoaW5nSGlzdG9yeSIsInVzZXJDb29yZGluYXRlcyIsIlBBWU1FTlRfUkVRVUVTVCIsIlBBWU1FTlRfU1VDQ0VTUyIsIlBBWU1FTlRfRkFJTFVSRSIsIkxPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QiLCJMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTIiwiTE9BRF9QQVlNRU5UX0hJU1RPUllfRkFJTFVSRSIsIkNMSUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUIiwiQ0xJRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MiLCJDTElFTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVCIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUyIsIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSIsIlJBVElOR19SRVFVRVNUIiwiUkFUSU5HX1NVQ0NFU1MiLCJSQVRJTkdfRkFJTFVSRSIsIlNFQVJDSF9ISVNUT1JZX1JFUVVFU1QiLCJTRUFSQ0hfSElTVE9SWV9TVUNDRVNTIiwiU0VBUkNIX0hJU1RPUllfRkFJTFVSRSIsInN0YXRlbSIsInN0YXR1cyIsIlBheW1lbnRJZCIsInJhdGluZyIsInJhdGUiLCJSYXRpbmciLCJpc0FkZGluZ0ZpbGVzIiwiaXNMb2FkaW5nUHJvZHVjdHMiLCJpc1NlbGVjdGluZ1Byb2R1Y3QiLCJzZWxlY3RpbmdQcm9kdWN0RXJyb3IiLCJpc0FkZGluZ1Nob3AiLCJzaG9wQ29vcmRpbmF0ZXMiLCJwcm9kdWN0c05lYXIiLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyIsIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJFRElUX1BST0RVQ1RfUkVRVUVTVCIsIkVESVRfUFJPRFVDVF9TVUNDRVNTIiwiRURJVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyIsIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkUiLCJDSEVDS19QUk9EVUNUX1NVQ0NFU1MiLCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCIsIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUIiwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MiLCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRSIsIkFERF9DQVRFR09SWV9SRVFVRVNUIiwiQUREX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJORUFSX0FERF9RVUFOVElUWV9SRVFVRVNUIiwiTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCIsImNoZWNrZWQiLCJmaWx0ZXJlZENhdGVnb3JpZXMiLCJsb2RpbmdTaG9wTGlzdEVycm9yIiwic3RvY2tzIiwib3JpZ2luYWxTdG9ja3MiLCJpc1NvbGRTdG9ja0Vycm9yIiwiZXJyb3JNZXNzc2FnZSIsIkFERF9TVE9DS19SRVFVRVNUIiwiQUREX1NUT0NLX1NVQ0NFU1MiLCJBRERfU1RPQ0tfRkFJTFVSRSIsIlNPTERfU1RPQ0tfU1VDQ0VTUyIsIlNPTERfU1RPQ0tfRkFJTFVSRSIsIlVQREFURV9TVE9DS19TVUNDRVNTIiwiVVBEQVRFX1NUT0NLX0ZBSUxVUkUiLCJQTFVTX1FVQU5USVRZX1NVQ0NFU1MiLCJNSU5VU19RVUFOVElUWV9TVUNDRVNTIiwiSU5JVElBVEVfU1RPQ0tfUVVBTlRJVFlfU1VDQ0VTUyIsIlNFTEVDVF9TVE9DS19DQVRFR09SWV9TVUNDRVNTIiwiUHJvZHVjdCIsImluY2x1ZGVzIiwib3JpZ2luYWxQcm9kdWN0cyIsImFkZFN0b2NrRXJyb3IiLCJkaXNjb3VudCIsImlzU2lnbmluZ1VwIiwic2lnblVwU3VjY2VzcyIsInNpZ25VcEVycm9yIiwiaXNMb2dnaW5nSW4iLCJpc0xvZ2dpbmdPdXQiLCJsb2dvdXRFcnJvciIsImlzTG9hZGluZ1VzZXIiLCJsb2FkaW5nVXNlckVycm9yIiwiY2hhbmdpbmdQYXNzd29yZCIsInBhc3N3b3JkQ2hhbmdlRXJyb3IiLCJhZGRTaG9wRXJyb3IiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUIiwiUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTIiwiUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFIiwiUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MiLCJQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSIsIkFERF9TSE9QX1JFUVVFU1QiLCJBRERfU0hPUF9TVUNDRVNTIiwiQUREX1NIT1BfRkFJTFVSRSIsInNpZ25VcEZhaWx1cmUiLCJmdWxsVXNlciIsIlNob3BzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwibG9hZFByb2R1Y3RBcGkiLCJsb2FkUHJvZHVjdHMiLCJjYWxsIiwicHV0Iiwid2F0Y2hMb2FkUHJvZHVjdHMiLCJ0YWtlTGF0ZXN0IiwibG9hZExpc3RBUEkiLCJsb2FkTGlzdCIsImVyciIsIndhdGNoTG9hZExpc3QiLCJwcm9kdWN0c1NhZ2EiLCJwYXltZW50SGlzdG9yeUFQSSIsInBheW1lbnRIaXN0b3J5Iiwid2F0Y2hQYXltZW50SGlzdG9yeSIsInJhdGluZ0FQSSIsIlBheW1lbnRzSWQiLCJVc2VySWQiLCJQcm9kdWN0SWQiLCJ3YXRjaFJhdGluZyIsInNlYXJjaEhpc3RvcnlBUEkiLCJzZWFyY2hIaXN0b3J5Iiwid2F0Y2hTZWFyY2hIaXN0b3J5IiwiY2FuY2VsUGF5bWVudEFQSSIsImltcF91aWQiLCJhbW91bnQiLCJjYW5jZWxQYXltZW50Iiwid2F0Y2hDYW5jZWxQYXltZW50IiwidXNlclNhZ2EiLCJhZGRQcm9kdWN0QXBpIiwiYWRkUHJvZHVjdCIsImZvcm1EYXRhIiwid2F0Y2hBZGRQcm9kdWN0IiwibG9hZFByb2R1Y3RzQXBpIiwiZGVsZXRlUHJvZHVjdEFQSSIsImRlbGV0ZVByb2R1Y3QiLCJ3YXRjaERlbGV0ZVByb2R1Y3QiLCJzZWxlY3RQcm9kdWN0QVBJIiwic2VsZWN0UHJvZHVjdCIsIndhdGNoU2VsZWN0UHJvZHVjdCIsImVkaXRQcm9kdWRjdEFQSSIsImVkaXRQcm9kdWN0Iiwid2F0Y2hFZGl0UHJvZHVjdCIsImRpc2NvdW50UHJvZHVjdEFQSSIsImRpc2NvdW50UHJvZHVjdCIsIndhdGNoRGlzY291bnRQcm9kdWN0IiwiYWRkQ2F0ZWdvcnlBUEkiLCJhZGRDYXRlZ29yeSIsIndhdGNoQWRkQ2F0ZWdvcnkiLCJlZGl0Q2F0ZWdvcnlBUEkiLCJlZGl0Q2F0ZWdvcnkiLCJ3YXRjaEVkaXRDYXRlZ29yeSIsImRlbGV0ZUNhdGVnb3J5QVBJIiwiZGVsZXRlQ2F0ZWdvcnkiLCJ3YXRjaERlbGV0ZUNhdGVnb3J5IiwiZGVsZXRlRGlzY291bnRBUEkiLCJQcm9kdWN0SWRzIiwiQ2F0ZWdvcnlJZCIsImRlbGV0ZURpc2NvdW50Iiwid2F0Y2hEZWxldGVEaXNjb3VudCIsImxvYWRTaG9wTGlzdEFQSSIsImxvYWRTaG9wTGlzdCIsIndhdGNoTG9hZFNob3BMaXN0IiwibG9naW5BcGkiLCJsb2dpbkRhdGEiLCJsb2dpbiIsInJlc3BvbnNlIiwid2F0Y2hMb2dpbiIsInRha2VFdmVyeSIsInNpZ25VcEFwaSIsInNpZ25VcERhdGEiLCJzaWduVXAiLCJ3YXRjaFNpZ25VcCIsImxvYWRVc2VyQXBpIiwibG9hZFVzZXIiLCJ3YXRjaExvYWRVc2VyIiwiY2hhbmdlUGFzc3dvcmRBcGkiLCJwYXNzd29yZENoYW5nZSIsIndhdGNoUGFzc3dvcmRDaGFuZ2UiLCJhZGRTaG9wQVBJIiwiYWRkU2hvcCIsIndhdGNoQWRkU2hvcCIsInBlcnNpc3RTdG9yZSIsInJlcXVpcmUiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGVuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJyb290U3RvcmUiLCJjcmVhdGVTdG9yZSIsImlzU2VydmVyIiwic2FnYVRhc2siLCJydW4iLCJwZXJzaXN0UmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ3aGl0ZWxpc3QiLCJzdG9yYWdlIiwidHJhbnNmb3JtcyIsInBlcnNpc3RlZFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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Q0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDYXJkIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gJy4uL0dlbmVyYWx1aS9DdXN0b21Ib29rcyc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xuXG5jb25zdCBDaGFuZ2VQYXNzd29yZCA9ICh7IHNldFRvZ2dsZUNoYW5nZVBhc3N3b3JkIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbcHJlc2VudFBhc3N3b3JkLCBvbkNoYW5nZVByZXNlbnRQYXNzd29yZCwgc2V0UHJlc2VudFBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIG9uQ2hhbmdlUGFzc3dvcmRDaGVjaywgc2V0Q2hhbmdlUGFzc3dvcmRDaGVja10gPSB1c2VJbnB1dCgpO1xuXG4gIGNvbnN0IHsgc2Vzc2lvbiwgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBjb25zdCBvbkZpbmlzaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaWQ6IHNlc3Npb24uaWQsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZCgocHJldikgPT4gIXByZXYpO1xuICAgIHNldFByZXNlbnRQYXNzd29yZChudWxsKTtcbiAgICBzZXRQYXNzd29yZChudWxsKTtcbiAgICBzZXRDaGFuZ2VQYXNzd29yZENoZWNrKG51bGwpO1xuICB9LCBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2tdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZCBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyB9fT5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPVwicHJlc2VudFBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj1cIm9uQmx1clwiXG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+q4sOyhtCDruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBhc3luYyB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgvXltBLVphLXowLTldezYsMTJ9JC8pO1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvdXNlci9jb25maXJtL3Bhc3N3b3JkJywge1xuICAgICAgICAgICAgICAgICAgICAgIGlkOiBzZXNzaW9uLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn6riw7KG0IOu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCftmJXsi53sl5Ag66ee7KeAIOyViuuKlCDruYTrsIDrsojtmLjsnoXri4jri6QnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgIHByZWZpeD17YCog6riw7KG0IO2MqOyKpOybjOuTnGB9XG4gICAgICAgICAgICAgIHZhbHVlPXtwcmVzZW50UGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVByZXNlbnRQYXNzd29yZH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLquLDsobQg67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+u5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15bQS1aYS16MC05XXs2LDEyfSQvLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjqsIAg7ZiV7Iud7JeQIOunnuyngCDslYrsirXri4jri6QnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgcHJlZml4PXtgKiDruYTrsIDrsojtmLhgfVxuICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRDaGVja1wiXG4gICAgICAgICAgICBkZXBlbmRlbmNpZXM9e1sncGFzc3dvcmQnXX1cbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IO2ZleyduO2VtCDso7zshLjsmpQnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAoeyBnZXRGaWVsZFZhbHVlIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IGdldEZpZWxkVmFsdWUoJ3Bhc3N3b3JkJykgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICBwcmVmaXg9e2AqIOu5hOuwgOuyiO2YuCDtmZXsnbhgfVxuICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLri6Tsi5wg67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfSBodG1sVHlwZT17J3N1Ym1pdCd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICDruYTrsIDrsojtmLgg67OA6rK9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYW5nZVBhc3N3b3JkO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgbWVzc2FnZSwgQ2FyZCwgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgTWFpbE91dGxpbmVkLCBMb2NrT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3VzZXJcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IExvZ2luID0gKHtcbiAgc2V0VG9nZ2xlTG9naW4sXG4gIHVzZXJuYW1lLFxuICBvbkNoYW5nZVVzZXJuYW1lLFxuICBzZXRVc2VybmFtZSxcbiAgcGFzc3dvcmQsXG4gIG9uQ2hhbmdlUGFzc3dvcmQsXG4gIHNldFBhc3N3b3JkLFxufSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgeyBsb2dpbkVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvZ2luRXJyb3IpIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IobG9naW5FcnJvcik7XG4gICAgfVxuICB9LCBbbG9naW5FcnJvcl0pO1xuXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2dnZWRJbikge1xuICAgICAgc2V0VG9nZ2xlTG9naW4oZmFsc2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgb25DbGlja1NpZ25VcCA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGVMb2dpbihmYWxzZSk7XG4gICAgUm91dGVyLnB1c2goXCIvdXNlci9zaWdudXBcIik7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgc3R5bGU9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fT5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofSBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiB1bmRlZmluZWQsIHBhc3N3b3JkOiB1bmRlZmluZWQgfX0+XG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT17XCJsYXJnZVwifSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuydtOuplOydvOydhCDsnoXroKXtlbTso7zshLjsmpRcIiB9LFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJlbWFpbFwiLCBtZXNzYWdlOiBcIu2YleyLneyXkCDrp57sp4Ag7JWK64qUIOyVhOydtOuUlOyeheuLiOuLpFwiIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHByZWZpeD17PE1haWxPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBzaXplPXtcImxhcmdlXCJ9XG4gICAgICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVVzZXJuYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9e1wicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIiB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzAtOWEtekEtWl17NiwxMn0kLyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi7ZiV7Iud7JeQIOunnuyngCDslYrripQg67mE67CA67KI7Zi47J6F64uI64ukXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgICAgbmFtZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBzaXplPXtcImxhcmdlXCJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT17XCJwcmltYXJ5XCJ9IGh0bWxUeXBlPXtcInN1Ym1pdFwifSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG9uQ2xpY2s9e29uQ2xpY2tTaWduVXB9PlxuICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwiaW1wb3J0IHsgSW5wdXQsIE1vZGFsLCBMaXN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL21lbnVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTRUFSQ0hfU1RPQ0tfUFJPRFVDVF9TVUNDRVNTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3N0b2NrXCI7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICh7IHNldFRvZ2dsZVNlYXJjaCwgc2V0VmlzaWJsZSwgdHlwZSwgc2V0TGlzdCB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoKTtcbiAgY29uc3Qgb25DaGFuZ2VUZXh0ID0gKGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuXG4gIGNvbnN0IG9uU2VhcmNoID0gKCkgPT4ge1xuICAgIGlmICh0eXBlID09IFwibWVudVwiKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MsXG4gICAgICAgIGRhdGE6IHsgdGV4dCB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwiaW5kZXhcIikge1xuICAgICAgYXhpb3NcbiAgICAgICAgLmdldChgaHR0cHM6Ly9kYXBpLmtha2FvLmNvbS92Mi9sb2NhbC9zZWFyY2gva2V5d29yZD9xdWVyeT0ke3RleHR9JnNpemU9MTVgLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEtha2FvQUsgJHtwcm9jZXNzLmVudi5LQUtBT19BUElLRVl9YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXMuZGF0YS5kb2N1bWVudHM7XG4gICAgICAgICAgc2V0TGlzdChsb2NhdGlvbik7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09IFwic3RvcmVcIikge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTRUFSQ0hfU1RPQ0tfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgICBkYXRhOiB7IHRleHQgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRUZXh0KCk7XG4gICAgc2V0VG9nZ2xlU2VhcmNoKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cbiAgICAgIGVudGVyQnV0dG9uXG4gICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IChlKSA9PiBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2VkID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVyKChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gIXByZXY7XG4gICAgfSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcbiIsImltcG9ydCB7IENvbCwgUm93LCBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTmF2aWJhckxheW91dCBmcm9tIFwiLi9OYXZpYmFyTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5jb25zdCBDZW50cmFsQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IGd1dHRlcj17MTB9PlxuICAgICAgICA8Q29sIHhzPXswfSBtZD17N30gLz5cbiAgICAgICAgPENvbCB4cz17MjR9IG1kPXsxMH0+XG4gICAgICAgICAgPE5hdmliYXJMYXlvdXQgLz5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXswfSBtZD17N30gLz5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2VudHJhbEFwcExheW91dDtcbiIsImltcG9ydCB7IE1lbnUsIElucHV0LCBNb2RhbCwgUG9wb3ZlciwgU3BhY2UsIExpc3QsIEVtcHR5LCBUYWcgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQXJyb3dMZWZ0T3V0bGluZWQsIFVzZXJPdXRsaW5lZCwgU2VhcmNoT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExPR19PVVRfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tIFwiLi4vRm9ybXMvTG9naW5cIjtcbmltcG9ydCBTZWFyY2hCYXJNb2RhbCBmcm9tIFwiLi4vRm9ybXMvU2VhcmNoQmFyXCI7XG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmQgZnJvbSBcIi4uL0Zvcm1zL0NoYW5nZVBhc3N3b3JkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VJbnB1dCB9IGZyb20gXCIuLi9HZW5lcmFsdWkvQ3VzdG9tSG9va3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNFVF9DT09SRElOQVRFU19TVUNDRVNTLCBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiO1xuXG5jb25zdCBOYXZpYmFyTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9YDtcblxuICBjb25zdCBbdXNlcm5hbWUsIG9uQ2hhbmdlVXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlSW5wdXQoKTtcblxuICBjb25zdCBbdG9nZ2xlTG9naW4sIHNldFRvZ2dsZUxvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvZ2dsZVNlYXJjaCwgc2V0VG9nZ2xlU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvZ2dsZUNoYW5nZVBhc3N3b3JkLCBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHsgcGFnZUluZm8gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWRtaW4pO1xuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoaWRlSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRTaG93KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBzaG93SGFuZGxlciA9IChzaG93KSA9PiB7XG4gICAgc2V0U2hvdyhzaG93KTtcbiAgfTtcblxuICBjb25zdCBvblRvZ2dsZUNoYW5nZVBhc3N3b3JkID0gKCkgPT4ge1xuICAgIGhpZGVIYW5kbGVyKCk7XG4gICAgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2tMb2dvdXQgPSAoKSA9PiB7XG4gICAgc2V0UGFzc3dvcmQodW5kZWZpbmVkKTtcbiAgICBzZXRVc2VybmFtZSh1bmRlZmluZWQpO1xuICAgIGNvbnNvbGUubG9nKHVzZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwYXNzd29yZCk7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRQYXNzd29yZCh1bmRlZmluZWQpO1xuICAgIHNldFVzZXJuYW1lKHVuZGVmaW5lZCk7XG4gICAgY29uc29sZS5sb2codXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTtcbiAgICBzZXRUb2dnbGVMb2dpbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlU2VhcmNoID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZVNlYXJjaCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uVmlzaWJsZSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja1BheW1lbnRzID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3BheW1lbnRzXCIpO1xuICAgIGhpZGVIYW5kbGVyKCk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0FkbWluID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL3Nob3AvYWRtaW5cIik7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrU2hvcExpc3QgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCIvXCIsIHsgY29vcmRpbmF0ZXM6IHsgbGF0OiBOdW1iZXIoY29vcmRpbmF0ZXMueCksIGxuZzogTnVtYmVyKGNvb3JkaW5hdGVzLnkpIH0gfSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogU0VUX0NPT1JESU5BVEVTX1NVQ0NFU1MsXG4gICAgICAgICAgICBkYXRhOiBbTnVtYmVyKGNvb3JkaW5hdGVzLngpLCBOdW1iZXIoY29vcmRpbmF0ZXMueSldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW10sXG4gICAgICAgICk7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9LCBbXSk7XG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuXG4gIGNvbnNvbGUubG9nKGBpc01vYmlsZTogJHtpc01vYmlsZX1gKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWwgdGl0bGU9e1wiTG9naW5cIn0gdmlzaWJsZT17dG9nZ2xlTG9naW59IG9uQ2FuY2VsPXtvblRvZ2dsZUxvZ2lufSBmb290ZXI9e251bGx9PlxuICAgICAgICA8TG9naW5Nb2RhbFxuICAgICAgICAgIHNldFRvZ2dsZUxvZ2luPXtzZXRUb2dnbGVMb2dpbn1cbiAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlVXNlcm5hbWU9e29uQ2hhbmdlVXNlcm5hbWV9XG4gICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17XCJTZWFyY2hcIn1cbiAgICAgICAgdmlzaWJsZT17dG9nZ2xlU2VhcmNofVxuICAgICAgICBvbkNhbmNlbD17b25Ub2dnbGVTZWFyY2h9XG4gICAgICAgIHNldFZpc2libGU9e3NldFZpc2libGV9XG4gICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaEJhck1vZGFsXG4gICAgICAgICAgdHlwZT17cGFnZUluZm99XG4gICAgICAgICAgc2V0VG9nZ2xlU2VhcmNoPXtzZXRUb2dnbGVTZWFyY2h9XG4gICAgICAgICAgc2V0VmlzaWJsZT17c2V0VmlzaWJsZX1cbiAgICAgICAgICBzZXRMaXN0PXtzZXRMaXN0fVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbCB0aXRsZT17XCLqsoDsg4nqsrDqs7xcIn0gdmlzaWJsZT17dmlzaWJsZX0gb25DYW5jZWw9e29uVmlzaWJsZX0gZm9vdGVyPXtudWxsfT5cbiAgICAgICAge2xpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgZGF0YVNvdXJjZT17bGlzdH1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrU2hvcExpc3QoaXRlbSl9PlxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIHRpdGxlPXtpdGVtLnBsYWNlX25hbWV9IGRlc2NyaXB0aW9uPXtpdGVtLnJvYWRfYWRkcmVzc19uYW1lfSAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxFbXB0eT7qsoDsg4kg6rKw6rO86rCAIOyhtOyerO2VmOyngCDslYrsirXri4jri6QuPC9FbXB0eT5cbiAgICAgICAgKX1cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9e1wiQ2hhbmdlIFBhc3N3b3JkXCJ9XG4gICAgICAgIHZpc2libGU9e3RvZ2dsZUNoYW5nZVBhc3N3b3JkfVxuICAgICAgICBvbkNhbmNlbD17b25Ub2dnbGVDaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8Q2hhbmdlUGFzc3dvcmQgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmQ9e3NldFRvZ2dsZUNoYW5nZVBhc3N3b3JkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtcImJhY2tcIn0+XG4gICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IFJvdXRlci5iYWNrKCl9IC8+XG4gICAgICAgIDwvTWVudS5JdGVtPlxuXG4gICAgICAgIDxNZW51Lkl0ZW1cbiAgICAgICAgICBrZXk9e1wic2VhcmNoXCJ9XG4gICAgICAgICAgc3R5bGU9e2lzTW9iaWxlID8gKGlzTG9nZ2VkSW4gPyB7IG1hcmdpbkxlZnQ6IFwiMjAlXCIgfSA6IHsgbWFyZ2luTGVmdDogXCI1NSVcIiB9KSA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNNb2JpbGUgPyAoXG4gICAgICAgICAgICA8VGFnIGNvbG9yPXtcImJsdWVcIn0gdmlzaWJsZT17aXNMb2dnZWRJbn0gb25DbGljaz17b25Ub2dnbGVTZWFyY2h9PlxuICAgICAgICAgICAgICB7XCIgIFwifSBTZWFyY2ggPFNlYXJjaE91dGxpbmVkIC8+IHtcIiAgXCJ9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPElucHV0LlNlYXJjaFxuICAgICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlU2VhcmNofVxuICAgICAgICAgICAgICB2aXNpYmxlPXtwYWdlSW5mbyA9PT0gKFwic3RvcmVcIiB8fCBcIm1lbnVcIiB8fCBcImluZGV4XCIpID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICB7IWlzTG9nZ2VkSW5cbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e1wibG9naW5cIn0+XG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25Ub2dnbGVMb2dpbn0+66Gc6re47J24PC9hPlxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PXtcInByb2ZpbGVcIn0+XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1wiY2xpY2tcIn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17XCJib3R0b21cIn1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZXNzaW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaG93fVxuICAgICAgICAgICAgICAgICAgb25WaXNpYmxlQ2hhbmdlPXtzaG93SGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1widmVydGljYWxcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17b25Ub2dnbGVDaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOu5hOuwgOuyiO2YuCDrs4Dqsr1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e29uQ2xpY2tQYXltZW50c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOqysOygnOydtOugpVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5kaXZpc2lvbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXtvbkNsaWNrQWRtaW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOunpOyepeq0gOumrCDtjpjsnbTsp4BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPixcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e1wibG9nb3V0XCJ9PlxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tMb2dvdXR9PuuhnOq3uOyVhOybgzwvYT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgXX1cbiAgICAgIDwvTWVudT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmliYXJMYXlvdXQ7XG4iLCJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbi8vIGltcG9ydCBcImFudGQtbW9iaWxlL2Nqcy9nbG9iYWxcIjtcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSBcIm5leHQtcmVkdXgtc2FnYVwiO1xuXG5pbXBvcnQgQ2VudHJhbEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvQ2VudHJhbEFwcExheW91dFwiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3JkZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCB1c2VyLXNjYWxhYmxlPW5vXCIgLz5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTEuMTIuNC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUiZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3NsLmRhdW1jZG4ubmV0L2RtYXBzL21hcF9qc19pbml0L3Bvc3Rjb2RlLnYyLmpzP2F1dG9sb2FkPWZhbHNlXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvanMvaWFtcG9ydC5wYXltZW50LTEuMS41LmpzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAge2Bib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjUhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPXtgLy9kYXBpLmtha2FvLmNvbS92Mi9tYXBzL3Nkay5qcz9hcHBrZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19LQUtBT19SRVNUQVBJfSZsaWJyYXJpZXM9c2VydmljZXNgfVxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgICBzcmM9e2AvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2FwcGtleT0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0tBS0FPX0pBVkFTQ1JJUFR9JmxpYnJhcmllcz1zZXJ2aWNlcyxjbHVzdGVyZXJgfVxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtgL2Zhdmljb24uaWNvYH0gdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtgL2Zhdmljb24uaWNvYH0gdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0+XG4gICAgICAgIDxDZW50cmFsQXBwTGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC9DZW50cmFsQXBwTGF5b3V0PlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoQXBwKSk7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLFxuICBsb2FkaW5nU2hvcExpc3RFcnJvcjogbnVsbCxcbiAgc2hvcExpc3Q6IFtdLFxuICBvcmlnaW5hbFNob3BMaXN0OiBbXSxcbiAgaXNMb2FkaW5nVXNlckxpc3Q6IGZhbHNlLFxuICBsb2FkaW5nVXNlckxpc3RFcnJvcjogbnVsbCxcbiAgdXNlckxpc3Q6IFtdLFxuICBvcmlnaW5hbFVzZXJMaXN0OiBbXSxcbiAgZXZlbnRzOiBbXSxcbiAgbG9hZEV2ZW50c0Vycm9yOiBudWxsLFxuICBpc0xvYWRpbmdFdmVudHM6IGZhbHNlLFxuICBwYWdlSW5mbzogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1JFUVVFU1QgPSAnTE9BRF9VU0VSTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1NVQ0NFU1MgPSAnTE9BRF9VU0VSTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX0ZBSUxVUkUgPSAnTE9BRF9VU0VSTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfUkVRVUVTVCA9ICdMT0FEX1NIT1BMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9ICdMT0FEX1NIT1BMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9ICdMT0FEX1NIT1BMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUkVRVUVTVCA9ICdERUxFVEVfVVNFUl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0ZBSUxVUkUgPSAnREVMRVRFX1VTRVJfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19SRVFVRVNUID0gJ0xPQURfRVZFTlRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1NVQ0NFU1MgPSAnTE9BRF9FVkVOVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfRkFJTFVSRSA9ICdMT0FEX0VWRU5UU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9SRVFVRVNUID0gJ0FERF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfU1VDQ0VTUyA9ICdBRERfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX0ZBSUxVUkUgPSAnQUREX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9SRVFVRVNUID0gJ0VESVRfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9TVUNDRVNTID0gJ0VESVRfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9GQUlMVVJFID0gJ0VESVRfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfUkVRVUVTVCA9ICdERUxFVEVfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1NVQ0NFU1MgPSAnREVMRVRFX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9GQUlMVVJFID0gJ0RFTEVURV9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgPSAnUEFHRV9DSEFOR0VfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxVc2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckxpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTaG9wTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucGFnZUluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgcHJvZHVjZXIgZnJvbSBcImltbWVyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2FydDogW10sXG4gIGlzTG9hZGluZ0NhcnQ6IGZhbHNlLFxuICBpc1JlbW92ZWluZ0NhcnQ6IGZhbHNlLFxuICBTaG9wSWQ6IHVuZGVmaW5lZCxcbiAgVGFibGVJZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9SRVFVRVNUID0gXCJMT0FEX0NBUlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gXCJMT0FEX0NBUlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMVVJFID0gXCJMT0FEX0NBUlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU1fUkVRVUVTVCA9IFwiUkVNT1ZFX0lURU1fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX1NVQ0NFU1MgPSBcIlJFTU9WRV9JVEVNX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9GQUlMVVJFID0gXCJSRU1PVkVfSVRFTV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUID0gXCJBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVCA9IFwiU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVFwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NBUlRfSVRFTV9SRVFVRVNUID0gXCJBRERfQ0FSVF9JVEVNX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ0FSVF9JVEVNX1JFUVVFU1QgPSBcIlJFTU9WRV9DQVJUX0lURU1fUkVRVUVTVFwiO1xuXG5leHBvcnQgY29uc3QgQ0xFQVJfQ0FSVF9SRVFVRVNUID0gXCJDTEVBUl9DQVJUX1JFUVVFU1RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9TSE9QX1RBQkxFX0lEID0gXCJHRVRfU0hPUF9UQUJMRV9JRFwiO1xuXG5leHBvcnQgY29uc3QgU09MRF9DQVJUX1NVQ0NFU1MgPSBcIlNPTERfQ0FSVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlcihzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX0NBUlRfUkVRVUVTVDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfQ0FSVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5jYXJ0ID0gW2FjdGlvbi5kYXRhXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfQ0FSVF9GQUlMVVJFOlxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSRU1PVkVfSVRFTV9SRVFVRVNUOlxuICAgICAgICBjb25zdCBpdGVtcyA9IGRyYWZ0LmNhcnQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpO1xuICAgICAgICBkcmFmdC5jYXJ0ID0gaXRlbXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfQ0FSVF9JVEVNX1JFUVVFU1Q6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZHJhZnQuY2FydC5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24ucHJvZHVjdC5pZCk7XG4gICAgICAgICAgaWYgKHByb2R1Y3QpIHtcbiAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5ICsgYWN0aW9uLnByb2R1Y3QucXVhbnRpdHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgZHJhZnQuY2FydC5wdXNoKGFjdGlvbi5wcm9kdWN0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX0lURU1fUVVBTlRJVFlfUkVRVUVTVDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkcmFmdC5jYXJ0LmZpbmQoKHN0b2NrKSA9PiBzdG9jay5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QucXVhbnRpdHkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3Quc3RvY2spO1xuICAgICAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICAgICAgY29uc3Qgc3RvY2sgPSBwcm9kdWN0LnN0b2NrO1xuICAgICAgICAgIHF1YW50aXR5ID0gcXVhbnRpdHkgPCBzdG9jayA/IChxdWFudGl0eSArPSAxKSA6IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVUJTVFJBQ1RfSVRFTV9RVUFOVElUWV9SRVFVRVNUOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGRyYWZ0LmNhcnQuZmluZCgoc3RvY2spID0+IHN0b2NrLmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgICAgICBxdWFudGl0eSA9IHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDTEVBUl9DQVJUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNhcnQgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdFVF9TSE9QX1RBQkxFX0lEOlxuICAgICAgICBkcmFmdC5TaG9wSWQgPSBhY3Rpb24uZGF0YS5TaG9wSWQ7XG4gICAgICAgIGRyYWZ0LlRhYmxlSWQgPSBhY3Rpb24uZGF0YS5UYWJsZUlkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU09MRF9DQVJUX1NVQ0NFU1M6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjYXJ0ID0gc3RhdGUuY2FydDtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhcnQubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgodikgPT4gdi5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9IGl0ZW0ucXVhbnRpdHkgLSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcXVhbnRpdHkgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkcmFmdC5jYXJ0ID0gW3N0YXRlLmNhcnQsIC4uLnJlc3VsdF07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgc2hvcCBmcm9tIFwiLi9zaG9wXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY2FydCBmcm9tIFwiLi9jYXJ0XCI7XG5pbXBvcnQgcGF5bWVudCBmcm9tIFwiLi9wYXltZW50XCI7XG5pbXBvcnQgYWRtaW4gZnJvbSBcIi4vYWRtaW5cIjtcbmltcG9ydCBzdG9jayBmcm9tIFwiLi9zdG9ja1wiO1xuXG5leHBvcnQgY29uc3QgU0VUX0NMSUVOVF9TVEFURSA9IFwiU0VUX0NMSUVOVF9TVEFURVwiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGFjdGlvbi50eXBlOiAke2FjdGlvbi50eXBlfWApO1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0sXG4gIGFkbWluLFxuICB1c2VyLFxuICBzaG9wLFxuICBtZW51LFxuICBjYXJ0LFxuICBzdG9jayxcbiAgcGF5bWVudCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGxpc3RzOiBbXSxcbiAgb3JpZ2luYWxMaXN0czogW10sXG4gIG5hdmlTaXplOiBudWxsLFxuICBUYWJsZUlkOiBudWxsLFxuICBpc0FkZGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBpc0xvYWRpbmdDYXJ0OiBmYWxzZSxcbiAgY2F0ZWdvcmllczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19SRVFVRVNUID0gXCJMT0FEX1BST0RVQ1RTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkxPQURfUFJPRFVDVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfRkFJTFVSRSA9IFwiTE9BRF9QUk9EVUNUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfUkVRVUVTVCA9IFwiQUREX1FVQU5USVRZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfU1VDQ0VTUyA9IFwiQUREX1FVQU5USVRZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfRkFJTFVSRSA9IFwiQUREX1FVQU5USVRZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gXCJTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTID0gXCJTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFID0gXCJTVUJTVFJBQ1RfUVVBTlRJVFlfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9IFwiQUREX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkFERF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gXCJBRERfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfUkVRVUVTVCA9IFwiTE9BRF9DQVJUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9IFwiTE9BRF9DQVJUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTFVSRSA9IFwiTE9BRF9DQVJUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IElOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1QgPSBcIklOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1RcIjtcblxuZXhwb3J0IGNvbnN0IEdFVF9OQVZJQkFSX1NJWkUgPSBcIkdFVF9OQVZJQkFSX1NJWkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgPSBcIlNFQVJDSF9QUk9EVUNUX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTID0gXCJTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9MSVNUX1JFUVVFU1QgPSBcIkxPQURfTElTVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9MSVNUX1NVQ0NFU1MgPSBcIkxPQURfTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9MSVNUX0ZBSUxVUkUgPSBcIkxPQURfTElTVF9GQUlMVVJFXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTkFWSUJBUl9TSVpFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmF2aVNpemU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9RVUFOVElUWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA8IDEwMCA/IChxdWFudGl0eSArPSAxKSA6IDk5O1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5UYWJsZUlkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLm1lbnVzLFxuICAgICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXS5tZW51cyxcbiAgICAgICAgICBUYWJsZUlkOiBhY3Rpb24uZGF0YVswXS5UYWJsZUlkLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIGFjdGlvbi5kYXRhXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVDoge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QudGl0bGUuaW5kZXhPZihhY3Rpb24uZGF0YS50ZXh0KSA+IC0xO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmlkID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBbLi4uc3RhdGUub3JpZ2luUHJvZHVjdHNdIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4ge1xuICAgICAgICAgIHJldHVybiB2LkRpc2NvdW50ICE9PSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfVxuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigocikgPT4gci5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWQpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0xJU1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBMT0FEX0xJU1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxpc3RzOiBhY3Rpb24uZGF0YS5wcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luYWxMaXN0czogYWN0aW9uLmRhdGEucHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIExPQURfTElTVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNQYXlpbmc6IGZhbHNlLFxuICBkYXRhOiBbXSxcbiAgcGF5aW5nRXJyb3I6IG51bGwsXG4gIGhpc3Rvcnk6IFtdLFxuICBpc0xvYWRpbmdIaXN0b3J5OiBmYWxzZSxcbiAgbG9hZGluZ0Vycm9yOiBudWxsLFxuICByZW1vdmluZ0hpc3Rvcnk6IGZhbHNlLFxuICByZW1vdmluZ0hpc3RvcnlFcnJvcjogbnVsbCxcbiAgY2xpZW50SGlzdG9yeVJlbW92aW5nOiBmYWxzZSxcbiAgY2xpZW50SGlzdG9yeVJlbW92aW5nRXJyb3I6IG51bGwsXG4gIGlzU2VhY2hpbmdIaXN0b3J5OiBmYWxzZSxcbiAgdXNlckNvb3JkaW5hdGVzOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgUEFZTUVOVF9SRVFVRVNUID0gXCJQQVlNRU5UX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVlNRU5UX1NVQ0NFU1MgPSBcIlBBWU1FTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFBBWU1FTlRfRkFJTFVSRSA9IFwiUEFZTUVOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BBWU1FTlRfSElTVE9SWV9SRVFVRVNUID0gXCJMT0FEX1BBWU1FTlRfSElTVE9SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9QQVlNRU5UX0hJU1RPUllfU1VDQ0VTUyA9IFwiTE9BRF9QQVlNRU5UX0hJU1RPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfUEFZTUVOVF9ISVNUT1JZX0ZBSUxVUkUgPSBcIkxPQURfUEFZTUVOVF9ISVNUT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENMSUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUID0gXCJDTElFTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENMSUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTID0gXCJDTElFTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENMSUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFID0gXCJDTElFTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNUID0gXCJQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1NVQ0NFU1MgPSBcIlBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSA9IFwiUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBSQVRJTkdfUkVRVUVTVCA9IFwiUkFUSU5HX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBSQVRJTkdfU1VDQ0VTUyA9IFwiUkFUSU5HX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBSQVRJTkdfRkFJTFVSRSA9IFwiUkFUSU5HX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9ISVNUT1JZX1JFUVVFU1QgPSBcIlNFQVJDSF9ISVNUT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRUFSQ0hfSElTVE9SWV9TVUNDRVNTID0gXCJTRUFSQ0hfSElTVE9SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX0hJU1RPUllfRkFJTFVSRSA9IFwiU0VBUkNIX0hJU1RPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQQVlNRU5UX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlbSwgaXNQYXlpbmc6IHRydWUgfTtcbiAgICB9XG4gICAgY2FzZSBQQVlNRU5UX1NVQ0NFU1M6IHtcbiAgICAgIC8vIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ0FSVF9SRVFVRVNUIH0pO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUGF5aW5nOiBmYWxzZSB9O1xuICAgIH1cbiAgICBjYXNlIFBBWU1FTlRfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUGF5aW5nOiBmYWxzZSwgcGF5aW5nRXJyb3I6IGFjdGlvbi5lcnJvciB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QQVlNRU5UX0hJU1RPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ0hpc3Rvcnk6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIExPQURfUEFZTUVOVF9ISVNUT1JZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoaXN0b3J5OiBbLi4uYWN0aW9uLmRhdGFdLCBpc0xvYWRpbmdIaXN0b3J5OiBmYWxzZSB9O1xuICAgIH1cbiAgICBjYXNlIExPQURfUEFZTUVOVF9ISVNUT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmdIaXN0b3J5OiBmYWxzZSwgbG9hZGluZ0Vycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBjYXNlIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlbW92aW5nSGlzdG9yeTogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmhpc3RvcnkuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBoaXN0b3J5ID0gc3RhdGUuaGlzdG9yeTtcbiAgICAgIGNvbnN0IHBheW1lbnQgPSBoaXN0b3J5W2luZGV4XTtcbiAgICAgIHBheW1lbnQuc3RhdHVzID0gYWN0aW9uLmRhdGEuc3RhdHVzO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGhpc3RvcnksIHJlbW92aW5nSGlzdG9yeTogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYXNlIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHJlbW92aW5nSGlzdG9yeTogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYXNlIFJBVElOR19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgUkFUSU5HX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaGlzdG9yeS5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBheW1lbnRJZCk7XG4gICAgICBjb25zdCBsb2cgPSBzdGF0ZS5oaXN0b3J5W2luZGV4XTtcbiAgICAgIGxldCByYXRpbmcgPSBhY3Rpb24uZGF0YS5yYXRlO1xuICAgICAgY29uc3QgaGlzdG9yeSA9IFsuLi5zdGF0ZS5oaXN0b3J5XTtcbiAgICAgIGhpc3RvcnlbaW5kZXhdID0geyAuLi5sb2csIFJhdGluZzogeyByYXRlOiByYXRpbmcgfSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGhpc3RvcnksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUkFUSU5HX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUFSQ0hfSElTVE9SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNTZWFjaGluZ0hpc3Rvcnk6IHRydWUgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9ISVNUT1JZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBoaXN0b3J5OiBhY3Rpb24uZGF0YSwgaXNTZWFjaGluZ0hpc3Rvcnk6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUFSQ0hfSElTVE9SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNTZWFjaGluZ0hpc3Rvcnk6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gIH1cbn07XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3A6IG51bGwsXG4gIHByb2R1Y3RzOiBbXSxcbiAgb3JpZ2luUHJvZHVjdHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgcHJvZHVjdDogbnVsbCxcbiAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBudWxsLFxuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBpc0FkZGluZ1Nob3A6IGZhbHNlLFxuICB1c2VyQ29vcmRpbmF0ZXM6IHVuZGVmaW5lZCxcbiAgc2hvcENvb3JkaW5hdGVzOiB1bmRlZmluZWQsXG4gIHByb2R1Y3RzTmVhcjogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSBcIkFERF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gXCJBRERfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfRkFJTFVSRSA9IFwiQUREX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCA9IFwiQURNSU5fUFJPRFVDVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19GQUlMVVJFID0gXCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUID0gXCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9SRVFVRVNUID0gXCJFRElUX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9TVUNDRVNTID0gXCJFRElUX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9GQUlMVVJFID0gXCJFRElUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfUkVRVUVTVCA9IFwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MgPSBcIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9GQUlMVVJFID0gXCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19QUk9EVUNUX1NVQ0NFU1MgPSBcIkNIRUNLX1BST0RVQ1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkNIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyA9IFwiRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFID0gXCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9SRVFVRVNUID0gXCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9TVUNDRVNTID0gXCJERUxFVEVfRElTQ09VTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9GQUlMVVJFID0gXCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkFERF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkFERF9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkFERF9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkVESVRfQ0FURUdPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfU1VDQ0VTUyA9IFwiRURJVF9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9GQUlMVVJFID0gXCJFRElUX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9SRVFVRVNUID0gXCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9TVUNDRVNTID0gXCJERUxFVEVfQ0FURUdPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9GQUlMVVJFID0gXCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUyA9IFwiQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gXCJMT0FEX1NIT1BMSVNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSBcIkxPQURfU0hPUExJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9IFwiTE9BRF9TSE9QTElTVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUyA9IFwiU0VUX0NPT1JESU5BVEVTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUyA9IFwiU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBORUFSX0FERF9RVUFOVElUWV9SRVFVRVNUID0gXCJORUFSX0FERF9RVUFOVElUWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCA9IFwiTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVFwiO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IHRydWUsIC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSwgLi4uc3RhdGUsIHByb2R1Y3Q6IGFjdGlvbi5kYXRhIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlbGVjdGluZ1Byb2R1Y3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cywgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT0gYWN0aW9uLmRhdGEpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElTQ09VTlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF1cbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uZGF0YVsxXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgY2hlY2tlZCA9IHByb2R1Y3QuY2hlY2tlZDtcbiAgICAgIGNoZWNrZWQgPSBjaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBjaGVja2VkIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xuICAgICAgcHJvZHVjdHMubWFwKCh2KSA9PiAodi5jaGVja2VkID0gYWN0aW9uLmNoZWNrZWQpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gIT09IDBcbiAgICAgICAgICA/IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YVsxXSlcbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdO1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGFbMF0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IFsuLi5zdGF0ZS5jYXRlZ29yaWVzLCBhY3Rpb24uZGF0YV0gfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmNhdGVnb3JpZXMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4uc3RhdGUuY2F0ZWdvcmllc107XG4gICAgICBjYXRlZ29yaWVzW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXMgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IHN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogZmlsdGVyZWRDYXRlZ29yaWVzLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIENBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uaWQgPT0gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IHN0YXRlLm9yaWdpblByb2R1Y3RzIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5EaXNjb3VudCAhPT0gbnVsbCk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZGlzY291bnRlZFByb2R1Y3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmlkKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmdTaG9wTGlzdDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2hvcExpc3Q6IGFjdGlvbi5kYXRhLCBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSwgbG9kaW5nU2hvcExpc3RFcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VyQ29vcmRpbmF0ZXM6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcblxuICAgIGNhc2UgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2hvcENvb3JkaW5hdGVzOiBhY3Rpb24uZGF0YS5zaG9wQ29vcmRpbmF0ZXMgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc3RvY2tzOiBbXSxcclxuICBvcmlnaW5hbFN0b2NrczogW10sXHJcbiAgaXNTb2xkU3RvY2tFcnJvcjogZmFsc2UsXHJcbiAgZXJyb3JNZXNzc2FnZTogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTElTVF9SRVFVRVNUID0gXCJMT0FEX0xJU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9MSVNUX1NVQ0NFU1MgPSBcIkxPQURfTElTVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0xJU1RfRkFJTFVSRSA9IFwiTE9BRF9MSVNUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfU1RPQ0tfUkVRVUVTVCA9IFwiQUREX1NUT0NLX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9TVE9DS19TVUNDRVNTID0gXCJBRERfU1RPQ0tfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1NUT0NLX0ZBSUxVUkUgPSBcIkFERF9TVE9DS19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU09MRF9TVE9DS19TVUNDRVNTID0gXCJTT0xEX1NUT0NLX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNPTERfU1RPQ0tfRkFJTFVSRSA9IFwiU09MRF9TVE9DS19GQUlMUlVFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NUT0NLX1NVQ0NFU1MgPSBcIlVQREFURV9TVE9DS19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU1RPQ0tfRkFJTFVSRSA9IFwiVVBEQVRFX1NUT0NLX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQTFVTX1FVQU5USVRZX1NVQ0NFU1MgPSBcIlBMVVNfUVVBTlRJVFlfU1VDQ0VTU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1JTlVTX1FVQU5USVRZX1NVQ0NFU1MgPSBcIk1JTlVTX1FVQU5USVRZX1NVQ0NFU1NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJTklUSUFURV9TVE9DS19RVUFOVElUWV9TVUNDRVNTID0gXCJJTklUSUFURV9TVE9DS19RVUFOVElUWV9TVUNDRVNTXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1NUT0NLX1BST0RVQ1RfU1VDQ0VTUyA9IFwiU0VBUkNIX1NUT0NLX1BST0RVQ1RfU1VDQ0VTU1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVF9TVE9DS19DQVRFR09SWV9TVUNDRVNTID0gXCJTRUxFQ1RfU1RPQ0tfQ0FURUdPUllfU1VDQ0VTU1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9MSVNUX1JFUVVFU1Q6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9MSVNUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc3RvY2tzID0gYWN0aW9uLmRhdGEuc3RvY2tzO1xyXG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU3RvY2tzID0gYWN0aW9uLmRhdGEuc3RvY2tzO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfTElTVF9GQUlMVVJFOlxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBQTFVTX1FVQU5USVRZX1NVQ0NFU1M6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGRyYWZ0LnN0b2Nrcy5maW5kKChzdG9jaykgPT4gc3RvY2suaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XHJcbiAgICAgICAgICBjb25zdCBzdG9jayA9IHByb2R1Y3Quc3RvY2s7XHJcbiAgICAgICAgICBxdWFudGl0eSA9IHF1YW50aXR5IDwgc3RvY2sgPyAocXVhbnRpdHkgKz0gMSkgOiBwcm9kdWN0LnF1YW50aXR5O1xyXG4gICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTUlOVVNfUVVBTlRJVFlfU1VDQ0VTUzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZHJhZnQuc3RvY2tzLmZpbmQoKHN0b2NrKSA9PiBzdG9jay5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcclxuICAgICAgICAgIHF1YW50aXR5ID0gcXVhbnRpdHkgPiAxID8gKHF1YW50aXR5IC09IDEpIDogMTtcclxuICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSBxdWFudGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIElOSVRJQVRFX1NUT0NLX1FVQU5USVRZX1NVQ0NFU1M6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGRyYWZ0LnN0b2Nrcy5maW5kKChzdG9jaykgPT4gc3RvY2suaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgU0VBUkNIX1NUT0NLX1BST0RVQ1RfU1VDQ0VTUzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRyYWZ0Lm9yaWdpbmFsU3RvY2tzLmZpbHRlcigoc3RvY2spID0+XHJcbiAgICAgICAgICAgIHN0b2NrLlByb2R1Y3QudGl0bGUuaW5jbHVkZXMoYWN0aW9uLmRhdGEudGV4dCksXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZHJhZnQuc3RvY2tzID0gcHJvZHVjdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTRUxFQ1RfU1RPQ0tfQ0FURUdPUllfU1VDQ0VTUzpcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBwcm9kdWN0cyA9IGRyYWZ0Lm9yaWdpbmFsU3RvY2tzLmZpbHRlcihcclxuICAgICAgICAgICAgKHN0b2NrKSA9PiBzdG9jay5DYXRlZ29yeS5pZCA9PT0gYWN0aW9uLmRhdGEuaWQsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgZHJhZnQuc3RvY2tzID0gcHJvZHVjdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfU1RPQ0tfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBkcmFmdC5zdG9ja3MuZmluZCgoc3RvY2spID0+IHN0b2NrLmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcm9kdWN0cyA9IGRyYWZ0Lm9yaWdpbmFsU3RvY2tzLmZpbmQoKHN0b2NrKSA9PiBzdG9jay5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICBwcm9kdWN0LnN0b2NrID0gYWN0aW9uLmRhdGEuc3RvY2s7XHJcbiAgICAgICAgICBvcmlnaW5hbFByb2R1Y3RzLnN0b2NrID0gYWN0aW9uLmRhdGEuc3RvY2s7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZHJhZnQuc3RvY2tzID0gWy4uLnN0YXRlLnN0b2NrcywgYWN0aW9uLmRhdGFdO1xyXG4gICAgICAgICAgZHJhZnQub3JpZ2luYWxTdG9ja3MgPSBbLi4uc3RhdGUub3JpZ2luYWxTdG9ja3MsIGFjdGlvbi5kYXRhXTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBBRERfU1RPQ0tfRkFJTFVSRToge1xyXG4gICAgICAgIGRyYWZ0LmFkZFN0b2NrRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhc2UgU09MRF9TVE9DS19TVUNDRVNTOlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChhY3Rpb24uZGF0YS5zdG9jayA9PT0gMCkge1xyXG4gICAgICAgICAgICBkcmFmdC5zdG9ja3MgPSBkcmFmdC5zdG9ja3MuZmlsdGVyKChzdG9jaykgPT4gc3RvY2suaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgICAgZHJhZnQub3JpZ2luYWxTdG9ja3MgPSBkcmFmdC5vcmlnaW5hbFN0b2Nrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgKHN0b2NrKSA9PiBzdG9jay5pZCAhPT0gYWN0aW9uLmRhdGEuaWQsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gZHJhZnQuc3RvY2tzLmZpbmQoKHN0b2NrKSA9PiBzdG9jay5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFByb2R1Y3RzID0gZHJhZnQub3JpZ2luYWxTdG9ja3MuZmluZChcclxuICAgICAgICAgICAgICAoc3RvY2spID0+IHN0b2NrLmlkID09PSBhY3Rpb24uZGF0YS5pZCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcHJvZHVjdC5zdG9jayA9IGFjdGlvbi5kYXRhLnN0b2NrO1xyXG4gICAgICAgICAgICBvcmlnaW5hbFByb2R1Y3RzLnN0b2NrID0gYWN0aW9uLmRhdGEuc3RvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTT0xEX1NUT0NLX0ZBSUxVUkU6XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZHJhZnQuaXNTb2xkU3RvY2tFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICBkcmFmdC5lcnJvck1lc3NzYWdlID0gYWN0aW9uLmRhdGEubWVzc2FnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1NUT0NLX1NVQ0NFU1M6IHtcclxuICAgICAgICBpZiAoYWN0aW9uLmRhdGEuc3RvY2sgPT09IDApIHtcclxuICAgICAgICAgIGRyYWZ0LnN0b2NrcyA9IGRyYWZ0LnN0b2Nrcy5maWx0ZXIoKHN0b2NrKSA9PiBzdG9jay5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xyXG4gICAgICAgICAgZHJhZnQub3JpZ2luYWxTdG9ja3MgPSBkcmFmdC5vcmlnaW5hbFN0b2Nrcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChzdG9jaykgPT4gc3RvY2suaWQgIT09IGFjdGlvbi5kYXRhLmlkLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGRyYWZ0LnN0b2Nrcy5maW5kKChzdG9jaykgPT4gc3RvY2suaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcclxuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUHJvZHVjdHMgPSBkcmFmdC5vcmlnaW5hbFN0b2Nrcy5maW5kKFxyXG4gICAgICAgICAgICAoc3RvY2spID0+IHN0b2NrLmlkID09PSBhY3Rpb24uZGF0YS5pZCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBwcm9kdWN0LnN0b2NrID0gYWN0aW9uLmRhdGEuc3RvY2s7XHJcbiAgICAgICAgICBwcm9kdWN0LmRpc2NvdW50ID0gYWN0aW9uLmRhdGEuZGlzY291bnQ7XHJcbiAgICAgICAgICBvcmlnaW5hbFByb2R1Y3RzLnN0b2NrID0gYWN0aW9uLmRhdGEuc3RvY2s7XHJcbiAgICAgICAgICBvcmlnaW5hbFByb2R1Y3RzLmRpc2NvdW50ID0gYWN0aW9uLmRhdGEuZGlzY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN0YXRlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc1NpZ25pbmdVcDogZmFsc2UsXG4gIHNpZ25VcFN1Y2Nlc3M6IGZhbHNlLFxuICBzaWduVXBFcnJvcjogbnVsbCxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSxcbiAgbG9naW5FcnJvcjogbnVsbCxcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSxcbiAgbG9nb3V0RXJyb3I6IG51bGwsXG4gIHNlc3Npb246IG51bGwsXG4gIGlzTG9hZGluZ1VzZXI6IGZhbHNlLFxuICBsb2FkaW5nVXNlckVycm9yOiBudWxsLFxuICBjaGFuZ2luZ1Bhc3N3b3JkOiBmYWxzZSxcbiAgcGFzc3dvcmRDaGFuZ2VFcnJvcjogbnVsbCxcbiAgaXNBZGRpbmdTaG9wOiBmYWxzZSxcbiAgYWRkU2hvcEVycm9yOiBudWxsLFxuICB1c2VyQ29vcmRpbmF0ZXM6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUID0gXCJQQVNTV09SRF9DT05GSVJNX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1MgPSBcIlBBU1NXT1JEX0NPTkZJUk1fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRSA9IFwiUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCA9IFwiUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUyA9IFwiUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSA9IFwiUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9TSE9QX1JFUVVFU1QgPSBcIkFERF9TSE9QX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfU0hPUF9TVUNDRVNTID0gXCJBRERfU0hPUF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1NIT1BfRkFJTFVSRSA9IFwiQUREX1NIT1BfRkFJTFVSRVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEZhaWx1cmUgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zZXNzaW9uID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IGFjdGlvbi5kYXRhLmZ1bGxVc2VyO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zZXNzaW9uID0gbnVsbDtcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gbnVsbDtcblxuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IHRydWU7XG4gICAgICBjYXNlIFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5jaGFuZ2luZ1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICBjYXNlIFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2luZ1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnBhc3N3b3JkQ2hhbmdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBjYXNlIEFERF9TSE9QX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzQWRkaW5nU2hvcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbi5TaG9wcyA9IFthY3Rpb24uZGF0YSwgLi4uZHJhZnQuc2Vzc2lvbi5TaG9wc107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkU2hvcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHNob3AgZnJvbSAnLi9zaG9wJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgcGF5bWVudCBmcm9tICcuL3BheW1lbnQnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH1gO1xuXG5mdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh1c2VyKSwgZm9yayhzaG9wKSwgZm9yayhtZW51KSwgZm9yayhwYXltZW50KV0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb290U2FnYTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFsbCwgcHV0LCBmb3JrLCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtcbiAgTE9BRF9QUk9EVUNUU19TVUNDRVNTLFxuICBMT0FEX1BST0RVQ1RTX0ZBSUxVUkUsXG4gIExPQURfUFJPRFVDVFNfUkVRVUVTVCxcbiAgTE9BRF9MSVNUX1JFUVVFU1QsXG4gIExPQURfTElTVF9TVUNDRVNTLFxuICBMT0FEX0xJU1RfRkFJTFVSRSxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL21lbnVcIjtcblxuZnVuY3Rpb24gbG9hZFByb2R1Y3RBcGkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChgL21lbnVgLCB7IGRhdGEgfSk7XG59XG5cbmZ1bmN0aW9uKiBsb2FkUHJvZHVjdHMoeyBkYXRhIH0pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0QXBpLCBkYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QUk9EVUNUU19TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9QUk9EVUNUU19GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9hZFByb2R1Y3RzKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUFJPRFVDVFNfUkVRVUVTVCwgbG9hZFByb2R1Y3RzKTtcbn1cblxuZnVuY3Rpb24gbG9hZExpc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9zdG9jay9sb2FkXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9hZExpc3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTGlzdEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfTElTVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfTElTVF9GQUlMVVJFLCBlcnJvcjogZXJyIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRMaXN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTElTVF9SRVFVRVNULCBsb2FkTGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwcm9kdWN0c1NhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvYWRQcm9kdWN0cyksIGZvcmsod2F0Y2hMb2FkTGlzdCldKTtcbn1cbiIsImltcG9ydCB7XG4gIGZvcmssXG4gIHRha2VFdmVyeSxcbiAgYWxsLFxuICBwdXQsXG4gIGNhbGwsXG4gIHRha2VMYXRlc3QsXG59IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQge1xuICBMT0FEX1BBWU1FTlRfSElTVE9SWV9GQUlMVVJFLFxuICBMT0FEX1BBWU1FTlRfSElTVE9SWV9SRVFVRVNULFxuICBMT0FEX1BBWU1FTlRfSElTVE9SWV9TVUNDRVNTLFxuICBSQVRJTkdfRkFJTFVSRSxcbiAgUkFUSU5HX1NVQ0NFU1MsXG4gIFJBVElOR19SRVFVRVNULFxuICBTRUFSQ0hfSElTVE9SWV9TVUNDRVNTLFxuICBTRUFSQ0hfSElTVE9SWV9GQUlMVVJFLFxuICBTRUFSQ0hfSElTVE9SWV9SRVFVRVNULFxuICBQQVlNRU5UX0hJU1RPUllfUkVNT1ZFX1JFUVVFU1QsXG4gIFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfRkFJTFVSRSxcbiAgUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9TVUNDRVNTLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9wYXltZW50JztcblxuZnVuY3Rpb24gcGF5bWVudEhpc3RvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3BheW1lbnRzL2xvYWQnLCB7XG4gICAgaWQ6IGRhdGEuaWQsXG4gICAgU2hvcElkOiBkYXRhLlNob3BJZCxcbiAgICBkaXZpc2lvbjogZGF0YS5kaXZpc2lvbixcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBwYXltZW50SGlzdG9yeShkYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChwYXltZW50SGlzdG9yeUFQSSwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfUEFZTUVOVF9ISVNUT1JZX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfUEFZTUVOVF9ISVNUT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFBheW1lbnRIaXN0b3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUEFZTUVOVF9ISVNUT1JZX1JFUVVFU1QsIHBheW1lbnRIaXN0b3J5KTtcbn1cblxuZnVuY3Rpb24gcmF0aW5nQVBJKHsgZGF0YSB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KCcvcGF5bWVudHMvcmF0aW5nJywge1xuICAgIFBheW1lbnRzSWQ6IGRhdGEuUGF5bWVudHNJZCxcbiAgICBVc2VySWQ6IGRhdGEuVXNlcklkLFxuICAgIFByb2R1Y3RJZDogZGF0YS5Qcm9kdWN0SWQsXG4gICAgcmF0ZTogZGF0YS5yYXRlLFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIHJhdGluZyhkYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyYXRpbmdBUEksIGRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFJBVElOR19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFJBVElOR19GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hSYXRpbmcoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUkFUSU5HX1JFUVVFU1QsIHJhdGluZyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEhpc3RvcnlBUEkoeyBkYXRhIH0pIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGlmIChkYXRhLmRpdmlzaW9uID09IHRydWUpIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3BheW1lbnRzL3NlYXJjaC9zaG9wJywgeyBkYXRhIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcGF5bWVudHMvc2VhcmNoL3VzZXInLCB7IGRhdGEgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHNlYXJjaEhpc3RvcnkoZGF0YSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2VhcmNoSGlzdG9yeUFQSSwgZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogU0VBUkNIX0hJU1RPUllfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBTRUFSQ0hfSElTVE9SWV9GQUlMVVJFIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaEhpc3RvcnkoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX0hJU1RPUllfUkVRVUVTVCwgc2VhcmNoSGlzdG9yeSk7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFBheW1lbnRBUEkoeyBpZCwgVXNlcklkLCBkaXZpc2lvbiwgaW1wX3VpZCwgYW1vdW50IH0pIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wYXltZW50cy9jYW5jZWwnLCB7XG4gICAgaWQsXG4gICAgVXNlcklkLFxuICAgIGRpdmlzaW9uLFxuICAgIGltcF91aWQsXG4gICAgYW1vdW50LFxuICB9KTtcbn1cblxuZnVuY3Rpb24qIGNhbmNlbFBheW1lbnQoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjYW5jZWxQYXltZW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IFBBWU1FTlRfSElTVE9SWV9SRU1PVkVfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9GQUlMVVJFLCBlcnJvcjogZXJyIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaENhbmNlbFBheW1lbnQoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoUEFZTUVOVF9ISVNUT1JZX1JFTU9WRV9SRVFVRVNULCBjYW5jZWxQYXltZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hQYXltZW50SGlzdG9yeSksXG4gICAgZm9yayh3YXRjaFJhdGluZyksXG4gICAgZm9yayh3YXRjaFNlYXJjaEhpc3RvcnkpLFxuICAgIGZvcmsod2F0Y2hDYW5jZWxQYXltZW50KSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhbGwsIHB1dCwgZm9yaywgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7XG4gIEFERF9QUk9EVUNUX1JFUVVFU1QsXG4gIEFERF9QUk9EVUNUX1NVQ0NFU1MsXG4gIEFERF9QUk9EVUNUX0ZBSUxVUkUsXG4gIEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsXG4gIEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUsXG4gIERFTEVURV9QUk9EVUNUX0ZBSUxVUkUsXG4gIERFTEVURV9QUk9EVUNUX1NVQ0NFU1MsXG4gIERFTEVURV9QUk9EVUNUX1JFUVVFU1QsXG4gIFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MsXG4gIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QsXG4gIEVESVRfUFJPRFVDVF9SRVFVRVNULFxuICBFRElUX1BST0RVQ1RfU1VDQ0VTUyxcbiAgRURJVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSxcbiAgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLFxuICBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QsXG4gIEFERF9DQVRFR09SWV9GQUlMVVJFLFxuICBBRERfQ0FURUdPUllfU1VDQ0VTUyxcbiAgQUREX0NBVEVHT1JZX1JFUVVFU1QsXG4gIEVESVRfQ0FURUdPUllfUkVRVUVTVCxcbiAgRURJVF9DQVRFR09SWV9TVUNDRVNTLFxuICBFRElUX0NBVEVHT1JZX0ZBSUxVUkUsXG4gIERFTEVURV9DQVRFR09SWV9SRVFVRVNULFxuICBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyxcbiAgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUsXG4gIERFTEVURV9ESVNDT1VOVF9SRVFVRVNULFxuICBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyxcbiAgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUsXG4gIExPQURfU0hPUExJU1RfRkFJTFVSRSxcbiAgTE9BRF9TSE9QTElTVF9TVUNDRVNTLFxuICBMT0FEX1NIT1BMSVNUX1JFUVVFU1QsXG4gIEFERF9TSE9QX1NVQ0NFU1MsXG4gIEFERF9TSE9QX0ZBSUxVUkUsXG4gIEFERF9TSE9QX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9zaG9wXCI7XG5cbmZ1bmN0aW9uIGFkZFByb2R1Y3RBcGkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9hZGRcIiwgZGF0YSk7XG59XG5mdW5jdGlvbiogYWRkUHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFByb2R1Y3RBcGksIGFjdGlvbi5mb3JtRGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoQWRkUHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUFJPRFVDVF9SRVFVRVNULCBhZGRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2R1Y3RzQXBpKFNob3BJZCkge1xuICBjb25zb2xlLmxvZyhTaG9wSWQpO1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9sb2FkXCIsIHsgU2hvcElkIH0pO1xufVxuZnVuY3Rpb24qIGxvYWRQcm9kdWN0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0c0FwaSwgYWN0aW9uLlNob3BJZCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQURNSU5fUFJPRFVDVFNfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0cygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBsb2FkUHJvZHVjdHMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0QVBJKGlkKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2RlbGV0ZVwiLCB7IGlkIH0pO1xufVxuZnVuY3Rpb24qIGRlbGV0ZVByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChkZWxldGVQcm9kdWN0QVBJLCBhY3Rpb24uaWQpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IGFjdGlvbi5pZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QUk9EVUNUX1JFUVVFU1QsIGRlbGV0ZVByb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9kdWN0QVBJKFByb2R1Y3RJZCkge1xuICBjb25zb2xlLmxvZyh7IFByb2R1Y3RJZCB9KTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvc2VsZWN0XCIsIHsgUHJvZHVjdElkIH0pO1xufVxuZnVuY3Rpb24qIHNlbGVjdFByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWxlY3RQcm9kdWN0QVBJLCBhY3Rpb24uUHJvZHVjdElkKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBwdXQoeyB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2VsZWN0UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULCBzZWxlY3RQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2R1ZGN0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvZWRpdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdFByb2R1ZGN0QVBJLCBhY3Rpb24uZm9ybURhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfUFJPRFVDVF9SRVFVRVNULCBlZGl0UHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2NvdW50UHJvZHVjdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGlzY291bnRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGlzY291bnRQcm9kdWN0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRGlzY291bnRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCwgZGlzY291bnRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9jYXRlZ29yeS9hZGRcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENhdGVnb3J5QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENhdGVnb3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DQVRFR09SWV9SRVFVRVNULCBhZGRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDYXRlZ29yeUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2NhdGVnb3J5L3VwZGF0ZVwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGVkaXRDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfQ0FURUdPUllfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX0NBVEVHT1JZX1JFUVVFU1QsIGVkaXRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvY2F0ZWdvcnkvZGVsZXRlXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGVsZXRlQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEaXNjb3VudEFQSSh7IFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCB9KSB7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50L2RlbGV0ZVwiLCB7XG4gICAgUHJvZHVjdElkcyxcbiAgICBTaG9wSWQsXG4gICAgQ2F0ZWdvcnlJZCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVEaXNjb3VudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZURpc2NvdW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZURpc2NvdW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9ESVNDT1VOVF9SRVFVRVNULCBkZWxldGVEaXNjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaG9wTGlzdEFQSSh7IFNob3BJZCB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Nob3AvbGlzdFwiLCB7IFNob3BJZCB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRTaG9wTGlzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHsgbG9hZFNob3BMaXN0QVBJLCBTaG9wSWQ6IGFjdGlvbi5TaG9wSWQgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BRF9TSE9QTElTVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfU0hPUExJU1RfRkFJTFVSRSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkU2hvcExpc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TSE9QTElTVF9SRVFVRVNULCBsb2FkU2hvcExpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdHNTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQcm9kdWN0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3RzKSxcbiAgICBmb3JrKHdhdGNoRGVsZXRlUHJvZHVjdCksXG4gICAgZm9yayh3YXRjaFNlbGVjdFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hFZGl0UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaERpc2NvdW50UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaEVkaXRDYXRlZ29yeSksXG4gICAgZm9yayh3YXRjaERlbGV0ZUNhdGVnb3J5KSxcbiAgICBmb3JrKHdhdGNoQWRkQ2F0ZWdvcnkpLFxuICAgIGZvcmsod2F0Y2hEZWxldGVEaXNjb3VudCksXG4gICAgZm9yayh3YXRjaExvYWRTaG9wTGlzdCksXG4gICAgLy8gZm9yayh3YXRjaEFkZFNob3ApLFxuICBdKTtcbn1cbiIsImltcG9ydCB7IGZvcmssIHRha2VFdmVyeSwgYWxsLCBwdXQsIGNhbGwsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBMT0FEX1VTRVJfU1VDQ0VTUyxcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXG4gIExPQURfVVNFUl9SRVFVRVNULFxuICBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX1NVQ0NFU1MsXG4gIExPR19JTl9GQUlMVVJFLFxuICBTSUdOX1VQX1JFUVVFU1QsXG4gIFNJR05fVVBfU1VDQ0VTUyxcbiAgU0lHTl9VUF9GQUlMVVJFLFxuICBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCxcbiAgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MsXG4gIFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFLFxuICBBRERfU0hPUF9SRVFVRVNULFxuICBBRERfU0hPUF9TVUNDRVNTLFxuICBBRERfU0hPUF9GQUlMVVJFLFxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xuXG5mdW5jdGlvbiBsb2dpbkFwaShsb2dpbkRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBsb2dpbkRhdGEpO1xufVxuXG5mdW5jdGlvbiogbG9naW4oYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFwaSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZS5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCkge1xuICBjb25zb2xlLmxvZyhcIlRyeSBsb2dnaW5nIGluXCIpO1xuICB5aWVsZCB0YWtlRXZlcnkoTE9HX0lOX1JFUVVFU1QsIGxvZ2luKTtcbn1cblxuZnVuY3Rpb24gc2lnblVwQXBpKHNpZ25VcERhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9zaWdudXBcIiwgc2lnblVwRGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBcGksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGUsXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiBsb2FkVXNlckFwaSgpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xufVxuXG5mdW5jdGlvbiogbG9hZFVzZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFwaSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVBhc3N3b3JkQXBpKHsgaWQsIHBhc3N3b3JkIH0pIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9wYXNzd29yZC9jaGFuZ2VcIiwgeyBpZCwgcGFzc3dvcmQgfSk7XG59XG5cbmZ1bmN0aW9uKiBwYXNzd29yZENoYW5nZShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZVBhc3N3b3JkQXBpLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hQYXNzd29yZENoYW5nZSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCwgcGFzc3dvcmRDaGFuZ2UpO1xufVxuXG5mdW5jdGlvbiBhZGRTaG9wQVBJKGRhdGEpIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Nob3AvYWRkXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogYWRkU2hvcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFNob3BBUEksIGFjdGlvbi5kYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfU0hPUF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9TSE9QX0ZBSUxVUkUsIGVycm9yOiBlcnIgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoQWRkU2hvcCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfU0hPUF9SRVFVRVNULCBhZGRTaG9wKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hMb2dpbiksXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcbiAgICBmb3JrKHdhdGNoUGFzc3dvcmRDaGFuZ2UpLFxuICAgIGZvcmsod2F0Y2hBZGRTaG9wKSxcbiAgXSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xuY29uc3QgeyBwZXJzaXN0U3RvcmUgfSA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiO1xuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlXTtcbiAgY29uc3QgZW5oZW5jZXIgPVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XG4gIGNvbnN0IHJvb3RTdG9yZSA9IChyZWR1Y2VyKSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCB7fSwgZW5oZW5jZXIpO1xuXG4gIGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgY29uc3Qgc3RvcmUgPSByb290U3RvcmUocm9vdFJlZHVjZXIpO1xuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgICByZXR1cm4gc3RvcmU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBwZXJzaXN0UmVkdWNlciB9ID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7XG5cbiAgICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgICAga2V5OiBcIm5leHRqc1wiLFxuICAgICAgd2hpdGVsaXN0OiBbXCJ1c2VyXCJdLFxuICAgICAgc3RvcmFnZSxcbiAgICAgIHRyYW5zZm9ybXM6IFtdLFxuICAgIH07XG4gICAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcbiAgICBjb25zdCBzdG9yZSA9IHJvb3RTdG9yZShwZXJzaXN0ZWRSZWR1Y2VyKTtcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgc3RvcmUuX19wZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xuICAgIHJldHVybiBzdG9yZTtcbiAgfVxufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHsgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiB9KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGV2aWNlLWRldGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2Uvc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9