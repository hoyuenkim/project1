module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/user/signup.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Generalui/Terms.js":
/*!***************************************!*\
  !*** ./components/Generalui/Terms.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CustomHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\hoyuen\\Documents\\dev\\project1\\frontend\\components\\Generalui\\Terms.js";







const Terms = ({
  setTerms
}) => {
  const CheckCircleStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return {
      color: '#40A9FF',
      marginRight: '3%'
    };
  }, []);
  const terms = [{
    title: '개인정보동의',
    content: '개인정보를 동의해주세요'
  }, {
    title: '3자정보동의',
    content: '3자 정보동의를 해주세요'
  }];
  const {
    0: allTerms,
    1: setAllTerms
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [individualInformationModal, setIndividualInformationModal] = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const [thirdPartyInformationModal, setThirdPartyInformationModal] = Object(_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const setModals = [setIndividualInformationModal, setThirdPartyInformationModal];
  const modals = [individualInformationModal, thirdPartyInformationModal];
  const toggleAllTerms = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setAllTerms(prev => !prev);

    if (!allTerms) {
      setTerms.map(term => {
        term[2](true);
      });
    } else {
      setTerms.map(term => {
        term[2](false);
      });
    }
  }, [allTerms]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
      header: '약관동의',
      bordered: true,
      itemLayout: 'horizontal',
      dataSource: terms,
      renderItem: (term, index) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            onClick: setModals[index],
            children: "\uC790\uC138\uD788\uBCF4\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 46
          }, undefined)],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
            title: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
                  span: 2,
                  children: setTerms[index][0] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckCircleFilled"], {
                    style: CheckCircleStyle,
                    onClick: setTerms[index][1]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 27
                  }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckCircleOutlined"], {
                    style: CheckCircleStyle,
                    onClick: setTerms[index][1]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
                  span: 22,
                  children: term.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 21
              }, undefined)
            }, void 0, false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
            title: term.title,
            visible: modals[index],
            onOk: setModals[index],
            onCancel: setModals[index],
            zIndex: 100,
            style: {
              overflowY: 'auto'
            },
            children: term.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, undefined);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      bordered: false,
      children: [allTerms ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckCircleFilled"], {
        style: CheckCircleStyle,
        onClick: toggleAllTerms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CheckCircleOutlined"], {
        style: CheckCircleStyle,
        onClick: toggleAllTerms
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined), "\uC804\uCCB4 \uB3D9\uC758\uD558\uAE30"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Terms);

/***/ }),

/***/ "./pages/user/signup.js":
/*!******************************!*\
  !*** ./pages/user/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-daum-postcode */ "react-daum-postcode");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Generalui_Terms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Generalui/Terms */ "./components/Generalui/Terms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













axios__WEBPACK_IMPORTED_MODULE_6___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;

const Signup = () => {
  const [email, onChangeEmail] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [password, onChangePassword] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [passwordCheck, onChangePasswordCheck] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [name, onChangeName] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const [shopName, onChangeShopName] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const {
    0: bizcode,
    1: setBizcode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [addressDetail, onChangeAddressDetail] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])();
  const {
    0: termToggle,
    1: setTermToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: termError,
    1: setTermError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: divisionToggle,
    1: setDivisionToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: addressToggle,
    1: setAddressToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: coordinates,
    1: setCoordinates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [personalInformationTerm, togglePersonalInformationTerm, setPersonalInformationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const [thirdPartyIngormationTerm, toggleThirdPartyInformationTerm, setThirdPartyInformationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const [locationTerm, toggleLocationTerm, setLocationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_9__["PAGE_CHANGE_SUCCESS"],
      data: 'signup'
    });
  });

  const onClickTermToggle = () => {
    return setTermToggle(!termToggle);
  };

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`, {
      headers: {
        Authorization: `KakaoAK ${"82de51c28c3208e3e5ed5a6053d7559a"}`
      }
    }).then(res => {
      const location = res.data.documents[0];
      console.log(location.address);
      setCoordinates([Number(location.address.x), Number(location.address.y)]);
    });
    setAddressToggle(false);
  };

  const onFinish = () => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["SIGN_UP_REQUEST"],
      data: {
        username: email,
        password,
        name,
        bizcode,
        address,
        addressDetail,
        coordinates,
        shopName,
        division: divisionToggle
      }
    });
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push(`/user/certificate/${email}`);
  };

  const onChangeDivisionToggle = () => {
    setDivisionToggle(!divisionToggle);
  };

  const onChangeBizcode = e => {
    setBizcode(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
        direction: "horizental",
        align: `baseline`,
        size: `large`,
        children: [divisionToggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("h1", {
          children: "\uAC00\uB9F9\uC810"
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("h1", {
          children: "\uC77C\uBC18\uD68C\uC6D0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
          onClick: onChangeDivisionToggle,
          checkedChildren: `가맹점`,
          unCheckedChildren: `일반회원`,
          size: 'middle'
        })]
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
        onFinish: onFinish,
        encType: 'multipart/form-data',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
          direction: "vertical",
          size: 'large',
          style: {
            width: '100%'
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_Generalui_Terms__WEBPACK_IMPORTED_MODULE_5__["default"], {
            setTerms: [[personalInformationTerm, togglePersonalInformationTerm, setPersonalInformationTerm], [thirdPartyIngormationTerm, toggleThirdPartyInformationTerm, setThirdPartyInformationTerm]]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "email",
            validateTrigger: "onBlur",
            rules: [{
              required: true,
              message: '이메일를 입력해 주세요!'
            }, () => ({
              async validator(rule, value) {
                const regex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);

                if (value && value.match(regex)) {
                  const result = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/user/confirm/email', {
                    email: value
                  });

                  if (result.data) {
                    return Promise.reject('이미 존재하는 이메일입니다');
                  } else {
                    return Promise.resolve();
                  }
                } else {
                  return Promise.reject('형식에 맞지 않는 이메일입니다');
                }
              }

            })],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
              size: `large`,
              prefix: `* Email`,
              value: email,
              onChange: onChangeEmail,
              placeholder: "Email\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "password",
            rules: [{
              required: true,
              message: '비밀번호를 확인해주세요'
            }, {
              pattern: /^[A-Za-z0-9]{6,12}$/,
              message: '비밀번호가 형식에 맞지 않습니다'
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
              prefix: `* 비밀번호`,
              size: `large`,
              value: password,
              onChange: onChangePassword,
              placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
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
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
              prefix: `* 비밀번호 확인`,
              size: `large`,
              value: passwordCheck,
              onChange: onChangePasswordCheck,
              placeholder: "\uB2E4\uC2DC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "name",
            rules: [{
              required: true,
              message: '이름을 입력해주세요'
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
              prefix: divisionToggle ? '* 대표자명' : '* 이름',
              size: `large`,
              onChange: onChangeName,
              value: name
            })
          }), divisionToggle && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
              name: 'shopName',
              rules: [{
                required: true,
                message: '점포명을 입력해주세요'
              }],
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
                prefix: '* 점포명',
                size: `large`,
                onChange: onChangeShopName,
                value: shopName
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
              name: "bizcode",
              validateTrigger: "onBlur",
              rules: [{
                required: true,
                message: '사업자 등록번호를 입력해주세요'
              }, () => ({
                async validator(rule, value) {
                  if (!value || !value.match(/\d{1}/g) || !value.length === 10) {
                    return Promise.reject('형식에 맞지 않은 사업자 등록번호입니다');
                  } else {
                    function checkBizID(bizID) {
                      var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
                      var tmpBizID,
                          i,
                          chkSum = 0,
                          c2,
                          remander;
                      bizID = bizID.replace(/-/gi, '');

                      for (i = 0; i <= 7; i++) chkSum += checkID[i] * bizID.charAt(i);

                      c2 = '0' + checkID[8] * bizID.charAt(8);
                      c2 = c2.substring(c2.length - 2, c2.length);
                      chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
                      remander = (10 - chkSum % 10) % 10;
                      if (Math.floor(bizID.charAt(9)) == remander) return true;
                      return false;
                    }

                    if (checkBizID(value)) {
                      const result = await axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/user/confirm/bizcode', {
                        bizcode: value
                      });

                      if (!result.data) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject('이미 존재하는 사업자 등록번호입니다');
                      }
                    } else {
                      return Promise.reject('형식에 맞지 않은 사업자 등록번호입니다');
                    }
                  }
                }

              })],
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
                prefix: '* 사업자등록번호',
                size: `large`,
                name: 'bizcode',
                value: bizcode,
                onChange: onChangeBizcode
              })
            })]
          }), addressToggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_4___default.a, {
              onComplete: handleComplete,
              autoClose: true,
              height: '10'
            })
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "address",
            initialValue: address,
            rules: [{
              required: true,
              message: '주소를 입력해주세요'
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
              prefix: "* \uC8FC\uC18C",
              name: 'address',
              readOnly: true,
              onClick: () => setAddressToggle(true),
              size: 'large'
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
              prefix: "* \uC0C1\uC138\uC8FC\uC18C",
              name: 'addressDetail',
              onChange: onChangeAddressDetail,
              size: 'large'
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
              type: "primary",
              htmlType: "submit",
              style: {
                width: `100%`
              },
              children: "\uC81C\uCD9C"
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Signup);

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

/***/ "react-daum-postcode":
/*!**************************************!*\
  !*** external "react-daum-postcode" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-daum-postcode");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvVGVybXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdW0tcG9zdGNvZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiXSwibmFtZXMiOlsidXNlSW5wdXQiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImhhbmRsZXIiLCJ1c2VTdGF0ZSIsInNldHRlciIsImUiLCJ0YXJnZXQiLCJ1c2VDaGVja2VkIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwiVGVybXMiLCJzZXRUZXJtcyIsIkNoZWNrQ2lyY2xlU3R5bGUiLCJ1c2VNZW1vIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsInRlcm1zIiwidGl0bGUiLCJjb250ZW50IiwiYWxsVGVybXMiLCJzZXRBbGxUZXJtcyIsImluZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsIiwic2V0SW5kaXZpZHVhbEluZm9ybWF0aW9uTW9kYWwiLCJ0aGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbCIsInNldFRoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsIiwic2V0TW9kYWxzIiwibW9kYWxzIiwidG9nZ2xlQWxsVGVybXMiLCJtYXAiLCJ0ZXJtIiwiaW5kZXgiLCJvdmVyZmxvd1kiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJTaWdudXAiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwibmFtZSIsIm9uQ2hhbmdlTmFtZSIsInNob3BOYW1lIiwib25DaGFuZ2VTaG9wTmFtZSIsImJpemNvZGUiLCJzZXRCaXpjb2RlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhZGRyZXNzRGV0YWlsIiwib25DaGFuZ2VBZGRyZXNzRGV0YWlsIiwidGVybVRvZ2dsZSIsInNldFRlcm1Ub2dnbGUiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJkaXZpc2lvblRvZ2dsZSIsInNldERpdmlzaW9uVG9nZ2xlIiwiYWRkcmVzc1RvZ2dsZSIsInNldEFkZHJlc3NUb2dnbGUiLCJjb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzIiwicGVyc29uYWxJbmZvcm1hdGlvblRlcm0iLCJ0b2dnbGVQZXJzb25hbEluZm9ybWF0aW9uVGVybSIsInNldFBlcnNvbmFsSW5mb3JtYXRpb25UZXJtIiwidGhpcmRQYXJ0eUluZ29ybWF0aW9uVGVybSIsInRvZ2dsZVRoaXJkUGFydHlJbmZvcm1hdGlvblRlcm0iLCJzZXRUaGlyZFBhcnR5SW5mb3JtYXRpb25UZXJtIiwibG9jYXRpb25UZXJtIiwidG9nZ2xlTG9jYXRpb25UZXJtIiwic2V0TG9jYXRpb25UZXJtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsIm9uQ2xpY2tUZXJtVG9nZ2xlIiwiaGFuZGxlQ29tcGxldGUiLCJmdWxsQWRkcmVzcyIsImV4dHJhQWRkcmVzcyIsImFkZHJlc3NUeXBlIiwiYm5hbWUiLCJidWlsZGluZ05hbWUiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJsb2NhdGlvbiIsImRvY3VtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJ4IiwieSIsIm9uRmluaXNoIiwiU0lHTl9VUF9SRVFVRVNUIiwidXNlcm5hbWUiLCJkaXZpc2lvbiIsIlJvdXRlciIsInB1c2giLCJvbkNoYW5nZURpdmlzaW9uVG9nZ2xlIiwib25DaGFuZ2VCaXpjb2RlIiwid2lkdGgiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ2YWxpZGF0b3IiLCJydWxlIiwicmVnZXgiLCJSZWdFeHAiLCJtYXRjaCIsInJlc3VsdCIsInBvc3QiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsInBhdHRlcm4iLCJnZXRGaWVsZFZhbHVlIiwibGVuZ3RoIiwiY2hlY2tCaXpJRCIsImJpeklEIiwiY2hlY2tJRCIsIkFycmF5IiwidG1wQml6SUQiLCJpIiwiY2hrU3VtIiwiYzIiLCJyZW1hbmRlciIsInJlcGxhY2UiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJpc0xvYWRpbmdTaG9wTGlzdCIsImxvYWRpbmdTaG9wTGlzdEVycm9yIiwic2hvcExpc3QiLCJvcmlnaW5hbFNob3BMaXN0IiwiaXNMb2FkaW5nVXNlckxpc3QiLCJsb2FkaW5nVXNlckxpc3RFcnJvciIsInVzZXJMaXN0Iiwib3JpZ2luYWxVc2VyTGlzdCIsImV2ZW50cyIsImxvYWRFdmVudHNFcnJvciIsImlzTG9hZGluZ0V2ZW50cyIsInBhZ2VJbmZvIiwiTE9BRF9VU0VSTElTVF9SRVFVRVNUIiwiTE9BRF9VU0VSTElTVF9TVUNDRVNTIiwiTE9BRF9VU0VSTElTVF9GQUlMVVJFIiwiTE9BRF9TSE9QTElTVF9SRVFVRVNUIiwiTE9BRF9TSE9QTElTVF9TVUNDRVNTIiwiTE9BRF9TSE9QTElTVF9GQUlMVVJFIiwiREVMRVRFX1VTRVJfUkVRVUVTVCIsIkRFTEVURV9VU0VSX1NVQ0NFU1MiLCJERUxFVEVfVVNFUl9GQUlMVVJFIiwiTE9BRF9FVkVOVFNfUkVRVUVTVCIsIkxPQURfRVZFTlRTX1NVQ0NFU1MiLCJMT0FEX0VWRU5UU19GQUlMVVJFIiwiQUREX0VWRU5UX1JFUVVFU1QiLCJBRERfRVZFTlRfU1VDQ0VTUyIsIkFERF9FVkVOVF9GQUlMVVJFIiwiRURJVF9FVkVOVF9SRVFVRVNUIiwiRURJVF9FVkVOVF9TVUNDRVNTIiwiRURJVF9FVkVOVF9GQUlMVVJFIiwiREVMRVRFX0VWRU5UX1JFUVVFU1QiLCJERUxFVEVfRVZFTlRfU1VDQ0VTUyIsIkRFTEVURV9FVkVOVF9GQUlMVVJFIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJpc1NpZ25pbmdVcCIsInNpZ25VcFN1Y2Nlc3MiLCJzaWduVXBFcnJvciIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImxvZ2luRXJyb3IiLCJpc0xvZ2dpbmdPdXQiLCJsb2dvdXRFcnJvciIsInNlc3Npb24iLCJpc0xvYWRpbmdVc2VyIiwibG9hZGluZ1VzZXJFcnJvciIsImNoYW5naW5nUGFzc3dvcmQiLCJwYXNzd29yZENoYW5nZUVycm9yIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9TVUNDRVNTIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUIiwiUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTIiwiUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFIiwiUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QiLCJQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUyIsIlBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFIiwic2lnblVwRmFpbHVyZSIsImZ1bGxVc2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLFFBQVEsR0FBRyxDQUFDQyxZQUFZLEdBQUcsSUFBaEIsS0FBeUI7QUFDL0MsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW1CQyxzREFBUSxDQUFDSCxZQUFELENBQWpDOztBQUNBLFFBQU1JLE1BQU0sR0FBSUMsQ0FBRCxJQUFPSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTTCxLQUFWLENBQTdCOztBQUNBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRRyxNQUFSLEVBQWdCRixPQUFoQixD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LGFBQUssQ0FBQ08sVUFBTixHQUFtQlQsTUFBTSxDQUFDRyxLQUExQjtBQUNBOztBQUNGLFdBQUtpQixlQUFMO0FBQ0VsQixhQUFLLENBQUNVLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQVYsYUFBSyxDQUFDSyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FMLGFBQUssQ0FBQ08sVUFBTixHQUFtQixJQUFuQjs7QUFFRixXQUFLb0IsdUJBQUw7QUFDRTNCLGFBQUssQ0FBQ2EsZ0JBQU4sR0FBeUIsSUFBekI7O0FBQ0YsV0FBS2UsdUJBQUw7QUFDRTVCLGFBQUssQ0FBQ2EsZ0JBQU4sR0FBeUIsS0FBekI7O0FBQ0YsV0FBS2dCLHVCQUFMO0FBQ0U3QixhQUFLLENBQUNhLGdCQUFOLEdBQXlCLEtBQXpCO0FBQ0FiLGFBQUssQ0FBQ2MsbUJBQU4sR0FBNEJoQixNQUFNLENBQUNHLEtBQW5DOztBQUVGO0FBQ0VKLGFBQUs7QUFDTDtBQW5ESjtBQXFERCxHQXREYSxDQUFkO0FBdURELENBeERELEU7Ozs7Ozs7Ozs7O0FDekNBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3VzZXIvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyL3NpZ251cC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IChlKSA9PiBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2VkID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVyKChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gIXByZXY7XG4gICAgfSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0LCBNb2RhbCwgQ29sLCBSb3csIENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IENoZWNrQ2lyY2xlRmlsbGVkLCBDaGVja0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5pbXBvcnQgeyB1c2VDaGVja2VkIH0gZnJvbSAnLi9DdXN0b21Ib29rcyc7XG5jb25zdCBUZXJtcyA9ICh7IHNldFRlcm1zIH0pID0+IHtcbiAgY29uc3QgQ2hlY2tDaXJjbGVTdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7IGNvbG9yOiAnIzQwQTlGRicsIG1hcmdpblJpZ2h0OiAnMyUnIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCB0ZXJtcyA9IFtcbiAgICB7IHRpdGxlOiAn6rCc7J247KCV67O064+Z7J2YJywgY29udGVudDogJ+qwnOyduOygleuztOulvCDrj5nsnZjtlbTso7zshLjsmpQnIH0sXG4gICAgeyB0aXRsZTogJzPsnpDsoJXrs7Trj5nsnZgnLCBjb250ZW50OiAnM+yekCDsoJXrs7Trj5nsnZjrpbwg7ZW07KO87IS47JqUJyB9LFxuICBdO1xuICBjb25zdCBbYWxsVGVybXMsIHNldEFsbFRlcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsLCBzZXRJbmRpdmlkdWFsSW5mb3JtYXRpb25Nb2RhbF0gPSB1c2VDaGVja2VkKGZhbHNlKTtcbiAgY29uc3QgW3RoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsLCBzZXRUaGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbF0gPSB1c2VDaGVja2VkKGZhbHNlKTtcblxuICBjb25zdCBzZXRNb2RhbHMgPSBbc2V0SW5kaXZpZHVhbEluZm9ybWF0aW9uTW9kYWwsIHNldFRoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsXTtcbiAgY29uc3QgbW9kYWxzID0gW2luZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsLCB0aGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbF07XG5cbiAgY29uc3QgdG9nZ2xlQWxsVGVybXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QWxsVGVybXMoKHByZXYpID0+ICFwcmV2KTtcbiAgICBpZiAoIWFsbFRlcm1zKSB7XG4gICAgICBzZXRUZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICAgICAgdGVybVsyXSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICAgICAgdGVybVsyXShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFthbGxUZXJtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0XG4gICAgICAgIGhlYWRlcj17J+yVveq0gOuPmeydmCd9XG4gICAgICAgIGJvcmRlcmVkPXt0cnVlfVxuICAgICAgICBpdGVtTGF5b3V0PXsnaG9yaXpvbnRhbCd9XG4gICAgICAgIGRhdGFTb3VyY2U9e3Rlcm1zfVxuICAgICAgICByZW5kZXJJdGVtPXsodGVybSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2luZGV4fSBhY3Rpb25zPXtbPGRpdiBvbkNsaWNrPXtzZXRNb2RhbHNbaW5kZXhdfT7snpDshLjtnojrs7TquLA8L2Rpdj5dfT5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3NldFRlcm1zW2luZGV4XVswXSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlRmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0NoZWNrQ2lyY2xlU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0VGVybXNbaW5kZXhdWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlT3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Q2hlY2tDaXJjbGVTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRUZXJtc1tpbmRleF1bMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9Pnt0ZXJtLnRpdGxlfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Rlcm0udGl0bGV9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17bW9kYWxzW2luZGV4XX1cbiAgICAgICAgICAgICAgICBvbk9rPXtzZXRNb2RhbHNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtzZXRNb2RhbHNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIHpJbmRleD17MTAwfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVybS5jb250ZW50fVxuICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICB7YWxsVGVybXMgPyAoXG4gICAgICAgICAgPENoZWNrQ2lyY2xlRmlsbGVkIHN0eWxlPXtDaGVja0NpcmNsZVN0eWxlfSBvbkNsaWNrPXt0b2dnbGVBbGxUZXJtc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBzdHlsZT17Q2hlY2tDaXJjbGVTdHlsZX0gb25DbGljaz17dG9nZ2xlQWxsVGVybXN9IC8+XG4gICAgICAgICl9XG4gICAgICAgIOyghOyytCDrj5nsnZjtlZjquLBcbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zO1xuIiwiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgQ2FyZCwgU3BhY2UsIFN3aXRjaCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlSW5wdXQsIHVzZUNoZWNrZWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0dlbmVyYWx1aS9DdXN0b21Ib29rcyc7XG5pbXBvcnQgRGF1bVBvc3Rjb2RlIGZyb20gJ3JlYWN0LWRhdW0tcG9zdGNvZGUnO1xuaW1wb3J0IFRlcm1zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL1Rlcm1zJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBTSUdOX1VQX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL2FkbWluJztcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9YDtcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgb25DaGFuZ2VQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtuYW1lLCBvbkNoYW5nZU5hbWVdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Nob3BOYW1lLCBvbkNoYW5nZVNob3BOYW1lXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtiaXpjb2RlLCBzZXRCaXpjb2RlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthZGRyZXNzRGV0YWlsLCBvbkNoYW5nZUFkZHJlc3NEZXRhaWxdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Rlcm1Ub2dnbGUsIHNldFRlcm1Ub2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGl2aXNpb25Ub2dnbGUsIHNldERpdmlzaW9uVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZHJlc3NUb2dnbGUsIHNldEFkZHJlc3NUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29vcmRpbmF0ZXMsIHNldENvb3JkaW5hdGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW1xuICAgIHBlcnNvbmFsSW5mb3JtYXRpb25UZXJtLFxuICAgIHRvZ2dsZVBlcnNvbmFsSW5mb3JtYXRpb25UZXJtLFxuICAgIHNldFBlcnNvbmFsSW5mb3JtYXRpb25UZXJtLFxuICBdID0gdXNlQ2hlY2tlZChmYWxzZSk7XG4gIGNvbnN0IFtcbiAgICB0aGlyZFBhcnR5SW5nb3JtYXRpb25UZXJtLFxuICAgIHRvZ2dsZVRoaXJkUGFydHlJbmZvcm1hdGlvblRlcm0sXG4gICAgc2V0VGhpcmRQYXJ0eUluZm9ybWF0aW9uVGVybSxcbiAgXSA9IHVzZUNoZWNrZWQoZmFsc2UpO1xuXG4gIGNvbnN0IFtsb2NhdGlvblRlcm0sIHRvZ2dsZUxvY2F0aW9uVGVybSwgc2V0TG9jYXRpb25UZXJtXSA9IHVzZUNoZWNrZWQoZmFsc2UpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHRV9DSEFOR0VfU1VDQ0VTUywgZGF0YTogJ3NpZ251cCcgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9uQ2xpY2tUZXJtVG9nZ2xlID0gKCkgPT4ge1xuICAgIHJldHVybiBzZXRUZXJtVG9nZ2xlKCF0ZXJtVG9nZ2xlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb21wbGV0ZSA9IChkYXRhKSA9PiB7XG4gICAgbGV0IGZ1bGxBZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xuICAgIGxldCBleHRyYUFkZHJlc3MgPSAnJztcblxuICAgIGlmIChkYXRhLmFkZHJlc3NUeXBlID09PSAnUicpIHtcbiAgICAgIGlmIChkYXRhLmJuYW1lICE9PSAnJykge1xuICAgICAgICBleHRyYUFkZHJlc3MgKz0gZGF0YS5ibmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhLmJ1aWxkaW5nTmFtZSAhPT0gJycpIHtcbiAgICAgICAgZXh0cmFBZGRyZXNzICs9XG4gICAgICAgICAgZXh0cmFBZGRyZXNzICE9PSAnJyA/IGAsICR7ZGF0YS5idWlsZGluZ05hbWV9YCA6IGRhdGEuYnVpbGRpbmdOYW1lO1xuICAgICAgfVxuICAgICAgZnVsbEFkZHJlc3MgKz0gZXh0cmFBZGRyZXNzICE9PSAnJyA/IGAgKCR7ZXh0cmFBZGRyZXNzfSlgIDogJyc7XG4gICAgfVxuXG4gICAgc2V0QWRkcmVzcyhmdWxsQWRkcmVzcyk7XG5cbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHBzOi8vZGFwaS5rYWthby5jb20vdjIvbG9jYWwvc2VhcmNoL2FkZHJlc3MuanNvbj9xdWVyeT0ke2Z1bGxBZGRyZXNzfWAsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgS2FrYW9BSyAke3Byb2Nlc3MuZW52LktBS0FPX0FQSUtFWX1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXMuZGF0YS5kb2N1bWVudHNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLmFkZHJlc3MpO1xuICAgICAgICBzZXRDb29yZGluYXRlcyhbXG4gICAgICAgICAgTnVtYmVyKGxvY2F0aW9uLmFkZHJlc3MueCksXG4gICAgICAgICAgTnVtYmVyKGxvY2F0aW9uLmFkZHJlc3MueSksXG4gICAgICAgIF0pO1xuICAgICAgfSk7XG5cbiAgICBzZXRBZGRyZXNzVG9nZ2xlKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGJpemNvZGUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGFkZHJlc3NEZXRhaWwsXG4gICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgICBzaG9wTmFtZSxcbiAgICAgICAgZGl2aXNpb246IGRpdmlzaW9uVG9nZ2xlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBSb3V0ZXIucHVzaChgL3VzZXIvY2VydGlmaWNhdGUvJHtlbWFpbH1gKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZURpdmlzaW9uVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldERpdmlzaW9uVG9nZ2xlKCFkaXZpc2lvblRvZ2dsZSk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VCaXpjb2RlID0gKGUpID0+IHtcbiAgICBzZXRCaXpjb2RlKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cImhvcml6ZW50YWxcIiBhbGlnbj17YGJhc2VsaW5lYH0gc2l6ZT17YGxhcmdlYH0+XG4gICAgICAgICAgICB7ZGl2aXNpb25Ub2dnbGUgPyA8aDE+6rCA66e57KCQPC9oMT4gOiA8aDE+7J2867CY7ZqM7JuQPC9oMT59XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlRGl2aXNpb25Ub2dnbGV9XG4gICAgICAgICAgICAgIGNoZWNrZWRDaGlsZHJlbj17YOqwgOunueygkGB9XG4gICAgICAgICAgICAgIHVuQ2hlY2tlZENoaWxkcmVuPXtg7J2867CY7ZqM7JuQYH1cbiAgICAgICAgICAgICAgc2l6ZT17J21pZGRsZSd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofSBlbmNUeXBlPXsnbXVsdGlwYXJ0L2Zvcm0tZGF0YSd9PlxuICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIHNpemU9eydsYXJnZSd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICA8VGVybXNcbiAgICAgICAgICAgICAgc2V0VGVybXM9e1tcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBwZXJzb25hbEluZm9ybWF0aW9uVGVybSxcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVBlcnNvbmFsSW5mb3JtYXRpb25UZXJtLFxuICAgICAgICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvcm1hdGlvblRlcm0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlyZFBhcnR5SW5nb3JtYXRpb25UZXJtLFxuICAgICAgICAgICAgICAgICAgdG9nZ2xlVGhpcmRQYXJ0eUluZm9ybWF0aW9uVGVybSxcbiAgICAgICAgICAgICAgICAgIHNldFRoaXJkUGFydHlJbmZvcm1hdGlvblRlcm0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsaWRhdGVUcmlnZ2VyPVwib25CbHVyXCJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfsnbTrqZTsnbzrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgIGFzeW5jIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXG4gICAgICAgICAgICAgICAgICAgICAgL15bMC05YS16QS1aXShbLV8uXT9bMC05YS16QS1aXSkqQFswLTlhLXpBLVpdKFstXy5dP1swLTlhLXpBLVpdKSouW2EtekEtWl17MiwzfSQvaVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubWF0Y2gocmVnZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCgnL3VzZXIvY29uZmlybS9lbWFpbCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgn7J2066+4IOyhtOyerO2VmOuKlCDsnbTrqZTsnbzsnoXri4jri6QnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ+2YleyLneyXkCDrp57sp4Ag7JWK64qUIOydtOuplOydvOyeheuLiOuLpCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICAgIHByZWZpeD17YCogRW1haWxgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWls7J2EIOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW07KO87IS47JqUJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW0EtWmEtejAtOV17NiwxMn0kLyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfruYTrsIDrsojtmLjqsIAg7ZiV7Iud7JeQIOunnuyngCDslYrsirXri4jri6QnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICAgIHByZWZpeD17YCog67mE67CA67KI7Zi4YH1cbiAgICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZENoZWNrXCJcbiAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzPXtbJ3Bhc3N3b3JkJ119XG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn67mE67CA67KI7Zi466W8IO2ZleyduO2VtCDso7zshLjsmpQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZSgncGFzc3dvcmQnKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCfruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC4nKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxuICAgICAgICAgICAgICAgIHByZWZpeD17YCog67mE67CA67KI7Zi4IO2ZleyduGB9XG4gICAgICAgICAgICAgICAgc2l6ZT17YGxhcmdlYH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZENoZWNrfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64uk7IucIOu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalCcgfV19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHByZWZpeD17ZGl2aXNpb25Ub2dnbGUgPyAnKiDrjIDtkZzsnpDrqoUnIDogJyog7J2066aEJ31cbiAgICAgICAgICAgICAgICBzaXplPXtgbGFyZ2VgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5hbWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIHtkaXZpc2lvblRvZ2dsZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgICAgbmFtZT17J3Nob3BOYW1lJ31cbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ygkO2PrOuqheydhCDsnoXroKXtlbTso7zshLjsmpQnIH1dfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9eycqIOygkO2PrOuqhSd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNob3BOYW1lfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hvcE5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJiaXpjb2RlXCJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlVHJpZ2dlcj1cIm9uQmx1clwiXG4gICAgICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yCrOyXheyekCDrk7HroZ3rsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICBhc3luYyB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZS5tYXRjaCgvXFxkezF9L2cpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICF2YWx1ZS5sZW5ndGggPT09IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICftmJXsi53sl5Ag66ee7KeAIOyViuydgCDsgqzsl4XsnpAg65Ox66Gd67KI7Zi47J6F64uI64ukJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tCaXpJRChiaXpJRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja0lEID0gbmV3IEFycmF5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRtcEJpeklELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoa1N1bSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFuZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpeklEID0gYml6SUQucmVwbGFjZSgvLS9naSwgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSA3OyBpKyspXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGtTdW0gKz0gY2hlY2tJRFtpXSAqIGJpeklELmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjMiA9ICcwJyArIGNoZWNrSURbOF0gKiBiaXpJRC5jaGFyQXQoOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzIgPSBjMi5zdWJzdHJpbmcoYzIubGVuZ3RoIC0gMiwgYzIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGtTdW0gKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoYzIuY2hhckF0KDApKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGMyLmNoYXJBdCgxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtYW5kZXIgPSAoMTAgLSAoY2hrU3VtICUgMTApKSAlIDEwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3IoYml6SUQuY2hhckF0KDkpKSA9PSByZW1hbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tCaXpJRCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy91c2VyL2NvbmZpcm0vYml6Y29kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpemNvZGU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfsnbTrr7gg7KG07J6s7ZWY64qUIOyCrOyXheyekCDrk7HroZ3rsojtmLjsnoXri4jri6QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn7ZiV7Iud7JeQIOunnuyngCDslYrsnYAg7IKs7JeF7J6QIOuTseuhneuyiO2YuOyeheuLiOuLpCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9eycqIOyCrOyXheyekOuTseuhneuyiO2YuCd9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydiaXpjb2RlJ31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JpemNvZGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpemNvZGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7YWRkcmVzc1RvZ2dsZSA/IChcbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPERhdW1Qb3N0Y29kZVxuICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZT17aGFuZGxlQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U9e3RydWV9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycxMCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAn7KO87IaM66W8IOyeheugpe2VtOyjvOyEuOyalCcgfV19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiog7KO87IaMXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9eydhZGRyZXNzJ31cbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRyZXNzVG9nZ2xlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgc2l6ZT17J2xhcmdlJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwcmVmaXg9XCIqIOyDgeyEuOyjvOyGjFwiXG4gICAgICAgICAgICAgICAgbmFtZT17J2FkZHJlc3NEZXRhaWwnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFkZHJlc3NEZXRhaWx9XG4gICAgICAgICAgICAgICAgc2l6ZT17J2xhcmdlJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAxMDAlYCB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAg7KCc7LacXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIHNob3BMaXN0OiBbXSxcbiAgb3JpZ2luYWxTaG9wTGlzdDogW10sXG4gIGlzTG9hZGluZ1VzZXJMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1VzZXJMaXN0RXJyb3I6IG51bGwsXG4gIHVzZXJMaXN0OiBbXSxcbiAgb3JpZ2luYWxVc2VyTGlzdDogW10sXG4gIGV2ZW50czogW10sXG4gIGxvYWRFdmVudHNFcnJvcjogbnVsbCxcbiAgaXNMb2FkaW5nRXZlbnRzOiBmYWxzZSxcbiAgcGFnZUluZm86IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9SRVFVRVNUID0gJ0xPQURfVVNFUkxJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9TVUNDRVNTID0gJ0xPQURfVVNFUkxJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9GQUlMVVJFID0gJ0xPQURfVVNFUkxJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSAnTE9BRF9TSE9QTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSAnTE9BRF9TSE9QTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgPSAnTE9BRF9TSE9QTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9GQUlMVVJFID0gJ0RFTEVURV9VU0VSX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfUkVRVUVTVCA9ICdMT0FEX0VWRU5UU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19TVUNDRVNTID0gJ0xPQURfRVZFTlRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX0ZBSUxVUkUgPSAnTE9BRF9FVkVOVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfUkVRVUVTVCA9ICdBRERfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1NVQ0NFU1MgPSAnQUREX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9GQUlMVVJFID0gJ0FERF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfUkVRVUVTVCA9ICdFRElUX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfU1VDQ0VTUyA9ICdFRElUX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfRkFJTFVSRSA9ICdFRElUX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1JFUVVFU1QgPSAnREVMRVRFX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9TVUNDRVNTID0gJ0RFTEVURV9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfRkFJTFVSRSA9ICdERUxFVEVfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBQQUdFX0NIQU5HRV9TVUNDRVNTID0gJ1BBR0VfQ0hBTkdFX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxTaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nU2hvcExpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfQ0hBTkdFX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnBhZ2VJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzU2lnbmluZ1VwOiBmYWxzZSxcbiAgc2lnblVwU3VjY2VzczogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNMb2dnaW5nSW46IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICBsb2dvdXRFcnJvcjogbnVsbCxcbiAgc2Vzc2lvbjogbnVsbCxcbiAgaXNMb2FkaW5nVXNlcjogZmFsc2UsXG4gIGxvYWRpbmdVc2VyRXJyb3I6IG51bGwsXG4gIGNoYW5naW5nUGFzc3dvcmQ6IGZhbHNlLFxuICBwYXNzd29yZENoYW5nZUVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9JTl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9JTl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9JTl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUID0gJ1BBU1NXT1JEX0NPTkZJUk1fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTID0gJ1BBU1NXT1JEX0NPTkZJUk1fU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFID0gJ1BBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCA9ICdQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MgPSAnUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFID0gJ1BBU1NXT1JEX0NIQU5HRV9GQUlMVVJFJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBGYWlsdXJlID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24gPSBhY3Rpb24uZGF0YS5mdWxsVXNlcjtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG5cbiAgICAgIGNhc2UgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5naW5nUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5wYXNzd29yZENoYW5nZUVycm9yID0gYWN0aW9uLmVycm9yO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdW0tcG9zdGNvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=