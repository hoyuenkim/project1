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

/***/ "./components/Forms/AddressDetailForm.js":
/*!***********************************************!*\
  !*** ./components/Forms/AddressDetailForm.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const AddressDetailForm = ({
  onChangeAddressDetail
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
      prefix: "* \uC0C1\uC138\uC8FC\uC18C",
      name: "addressDetail",
      onChange: onChangeAddressDetail,
      size: "large"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddressDetailForm);

/***/ }),

/***/ "./components/Forms/BizcodeForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/BizcodeForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const BizcdeForm = ({
  onChangeBizcode
}) => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "bizcode",
    validateTrigger: "onBlur",
    rules: [{
      required: true,
      message: "사업자 등록번호를 입력해주세요"
    }, () => ({
      async validator(rule, value) {
        if (!value || !value.match(/\d{1}/g) || !value.length === 10) {
          return Promise.reject("형식에 맞지 않은 사업자 등록번호입니다");
        } else {
          function checkBizID(bizID) {
            var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
            var tmpBizID,
                i,
                chkSum = 0,
                c2,
                remander;
            bizID = bizID.replace(/-/gi, "");

            for (i = 0; i <= 7; i++) chkSum += checkID[i] * bizID.charAt(i);

            c2 = "0" + checkID[8] * bizID.charAt(8);
            c2 = c2.substring(c2.length - 2, c2.length);
            chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
            remander = (10 - chkSum % 10) % 10;
            if (Math.floor(bizID.charAt(9)) == remander) return true;
            return false;
          }

          if (checkBizID(value)) {
            const result = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/confirm/bizcode", {
              bizcode: value
            });

            if (!result.data) {
              return Promise.resolve();
            } else {
              return Promise.reject("이미 존재하는 사업자 등록번호입니다");
            }
          } else {
            return Promise.reject("형식에 맞지 않은 사업자 등록번호입니다");
          }
        }
      }

    })],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
      prefix: "* 사업자등록번호",
      size: `large`,
      name: "bizcode",
      onChange: onChangeBizcode
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (BizcdeForm);

/***/ }),

/***/ "./components/Forms/EmailForm.js":
/*!***************************************!*\
  !*** ./components/Forms/EmailForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const EmailForm = ({
  onChangeEmail
}) => {
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "https://127.0.0.1:3065";
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
    name: "email",
    validateTrigger: "onBlur",
    rules: [{
      required: true,
      message: "이메일를 입력해 주세요!"
    }, () => ({
      async validator(rule, value) {
        const regex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);

        if (value && value.match(regex)) {
          const result = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/confirm/email", {
            email: value
          });

          if (result.data) {
            return Promise.reject("이미 존재하는 이메일입니다");
          } else {
            return Promise.resolve();
          }
        } else {
          return Promise.reject("형식에 맞지 않는 이메일입니다");
        }
      }

    })],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
      size: `large`,
      prefix: `* Email`,
      onChange: onChangeEmail,
      placeholder: "Email\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

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

/***/ "./components/Generalui/KakaoAddress.js":
/*!**********************************************!*\
  !*** ./components/Generalui/KakaoAddress.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-daum-postcode */ "react-daum-postcode");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const KakaoAddress = ({
  address,
  setAddress,
  setCoordinates
}) => {
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "https://127.0.0.1:3065";
  const {
    0: addressToggle,
    1: setAddressToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${fullAddress}`, {
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

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: addressToggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onComplete: handleComplete,
        autoClose: true,
        height: "10"
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      name: "address",
      initialValue: address,
      rules: [{
        required: true,
        message: "주소를 입력해주세요"
      }],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        prefix: "* \uC8FC\uC18C",
        name: "address",
        readOnly: true,
        onClick: () => setAddressToggle(true),
        size: "large"
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (KakaoAddress);

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
/* harmony import */ var _components_Generalui_Terms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Generalui/Terms */ "./components/Generalui/Terms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var _components_Generalui_KakaoAddress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Generalui/KakaoAddress */ "./components/Generalui/KakaoAddress.js");
/* harmony import */ var _components_Forms_AddressDetailForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Forms/AddressDetailForm */ "./components/Forms/AddressDetailForm.js");
/* harmony import */ var _components_Forms_BizcodeForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Forms/BizcodeForm */ "./components/Forms/BizcodeForm.js");
/* harmony import */ var _components_Forms_EmailForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Forms/EmailForm */ "./components/Forms/EmailForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
















axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;

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
    0: coordinates,
    1: setCoordinates
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [personalInformationTerm, togglePersonalInformationTerm, setPersonalInformationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const [thirdPartyIngormationTerm, toggleThirdPartyInformationTerm, setThirdPartyInformationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const [locationTerm, toggleLocationTerm, setLocationTerm] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useChecked"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_8__["PAGE_CHANGE_SUCCESS"],
      data: "signup"
    });
  });
  console.log(address);

  const onClickTermToggle = () => {
    return setTermToggle(!termToggle);
  };

  const onFinish = () => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_REQUEST"],
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
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push(`/user/certificate/${email}`);
  };

  const onChangeDivisionToggle = () => {
    setDivisionToggle(!divisionToggle);
  };

  const onChangeBizcode = e => {
    setBizcode(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
        direction: "horizental",
        align: `baseline`,
        size: `large`,
        children: [divisionToggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("h1", {
          children: "\uAC00\uB9F9\uC810"
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("h1", {
          children: "\uC77C\uBC18\uD68C\uC6D0"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
          onClick: onChangeDivisionToggle,
          checkedChildren: `가맹점`,
          unCheckedChildren: `일반회원`,
          size: "middle"
        })]
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
        onFinish: onFinish,
        encType: "multipart/form-data",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
          direction: "vertical",
          size: "large",
          style: {
            width: "100%"
          },
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_Generalui_Terms__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setTerms: [[personalInformationTerm, togglePersonalInformationTerm, setPersonalInformationTerm], [thirdPartyIngormationTerm, toggleThirdPartyInformationTerm, setThirdPartyInformationTerm]]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_Forms_EmailForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onChangeEmail: onChangeEmail
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "password",
            rules: [{
              required: true,
              message: "비밀번호를 확인해주세요"
            }, {
              pattern: /^[A-Za-z0-9]{6,12}$/,
              message: "비밀번호가 형식에 맞지 않습니다"
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
              prefix: `* 비밀번호`,
              size: `large`,
              value: password,
              onChange: onChangePassword,
              placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "passwordCheck",
            dependencies: ["password"],
            rules: [{
              required: true,
              message: "비밀번호를 확인해 주세요"
            }, ({
              getFieldValue
            }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject("비밀번호가 일치하지 않습니다.");
              }

            })],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"].Password, {
              prefix: `* 비밀번호 확인`,
              size: `large`,
              value: passwordCheck,
              onChange: onChangePasswordCheck,
              placeholder: "\uB2E4\uC2DC \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            name: "name",
            rules: [{
              required: true,
              message: "이름을 입력해주세요"
            }],
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
              prefix: divisionToggle ? "* 대표자명" : "* 이름",
              size: `large`,
              onChange: onChangeName,
              value: name
            })
          }), divisionToggle && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
              name: "shopName",
              rules: [{
                required: true,
                message: "점포명을 입력해주세요"
              }],
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
                prefix: "* 점포명",
                size: `large`,
                onChange: onChangeShopName,
                value: shopName
              })
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_Forms_BizcodeForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
              onChangeBizcode: onChangeBizcode
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_Generalui_KakaoAddress__WEBPACK_IMPORTED_MODULE_9__["default"], {
            address: address,
            setAddress: setAddress,
            setCoordinates: setCoordinates
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_Forms_AddressDetailForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
            onChangeAddressDetail: onChangeAddressDetail
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9BZGRyZXNzRGV0YWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0JpemNvZGVGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvRW1haWxGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0tha2FvQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dlbmVyYWx1aS9UZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy91c2VyL3NpZ251cC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF1bS1wb3N0Y29kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBZGRyZXNzRGV0YWlsRm9ybSIsIm9uQ2hhbmdlQWRkcmVzc0RldGFpbCIsIkJpemNkZUZvcm0iLCJvbkNoYW5nZUJpemNvZGUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJ2YWxpZGF0b3IiLCJydWxlIiwidmFsdWUiLCJtYXRjaCIsImxlbmd0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjaGVja0JpeklEIiwiYml6SUQiLCJjaGVja0lEIiwiQXJyYXkiLCJ0bXBCaXpJRCIsImkiLCJjaGtTdW0iLCJjMiIsInJlbWFuZGVyIiwicmVwbGFjZSIsImNoYXJBdCIsInN1YnN0cmluZyIsIk1hdGgiLCJmbG9vciIsInJlc3VsdCIsInBvc3QiLCJiaXpjb2RlIiwiZGF0YSIsInJlc29sdmUiLCJFbWFpbEZvcm0iLCJvbkNoYW5nZUVtYWlsIiwicmVnZXgiLCJSZWdFeHAiLCJlbWFpbCIsInVzZUlucHV0IiwiaW5pdGlhbFN0YXRlIiwiaGFuZGxlciIsInVzZVN0YXRlIiwic2V0dGVyIiwiZSIsInRhcmdldCIsInVzZUNoZWNrZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJLYWthb0FkZHJlc3MiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInNldENvb3JkaW5hdGVzIiwiYWRkcmVzc1RvZ2dsZSIsInNldEFkZHJlc3NUb2dnbGUiLCJoYW5kbGVDb21wbGV0ZSIsImZ1bGxBZGRyZXNzIiwiZXh0cmFBZGRyZXNzIiwiYWRkcmVzc1R5cGUiLCJibmFtZSIsImJ1aWxkaW5nTmFtZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInJlcyIsImxvY2F0aW9uIiwiZG9jdW1lbnRzIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsIngiLCJ5IiwiVGVybXMiLCJzZXRUZXJtcyIsIkNoZWNrQ2lyY2xlU3R5bGUiLCJ1c2VNZW1vIiwiY29sb3IiLCJtYXJnaW5SaWdodCIsInRlcm1zIiwidGl0bGUiLCJjb250ZW50IiwiYWxsVGVybXMiLCJzZXRBbGxUZXJtcyIsImluZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsIiwic2V0SW5kaXZpZHVhbEluZm9ybWF0aW9uTW9kYWwiLCJ0aGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbCIsInNldFRoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsIiwic2V0TW9kYWxzIiwibW9kYWxzIiwidG9nZ2xlQWxsVGVybXMiLCJtYXAiLCJ0ZXJtIiwiaW5kZXgiLCJvdmVyZmxvd1kiLCJTaWdudXAiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwibmFtZSIsIm9uQ2hhbmdlTmFtZSIsInNob3BOYW1lIiwib25DaGFuZ2VTaG9wTmFtZSIsInNldEJpemNvZGUiLCJhZGRyZXNzRGV0YWlsIiwidGVybVRvZ2dsZSIsInNldFRlcm1Ub2dnbGUiLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJkaXZpc2lvblRvZ2dsZSIsInNldERpdmlzaW9uVG9nZ2xlIiwiY29vcmRpbmF0ZXMiLCJwZXJzb25hbEluZm9ybWF0aW9uVGVybSIsInRvZ2dsZVBlcnNvbmFsSW5mb3JtYXRpb25UZXJtIiwic2V0UGVyc29uYWxJbmZvcm1hdGlvblRlcm0iLCJ0aGlyZFBhcnR5SW5nb3JtYXRpb25UZXJtIiwidG9nZ2xlVGhpcmRQYXJ0eUluZm9ybWF0aW9uVGVybSIsInNldFRoaXJkUGFydHlJbmZvcm1hdGlvblRlcm0iLCJsb2NhdGlvblRlcm0iLCJ0b2dnbGVMb2NhdGlvblRlcm0iLCJzZXRMb2NhdGlvblRlcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidHlwZSIsIlBBR0VfQ0hBTkdFX1NVQ0NFU1MiLCJvbkNsaWNrVGVybVRvZ2dsZSIsIm9uRmluaXNoIiwiU0lHTl9VUF9SRVFVRVNUIiwidXNlcm5hbWUiLCJkaXZpc2lvbiIsIlJvdXRlciIsInB1c2giLCJvbkNoYW5nZURpdmlzaW9uVG9nZ2xlIiwid2lkdGgiLCJwYXR0ZXJuIiwiZ2V0RmllbGRWYWx1ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsImlzU2lnbmluZ1VwIiwic2lnblVwU3VjY2VzcyIsInNpZ25VcEVycm9yIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwibG9naW5FcnJvciIsImlzTG9nZ2luZ091dCIsImxvZ291dEVycm9yIiwic2Vzc2lvbiIsImlzTG9hZGluZ1VzZXIiLCJsb2FkaW5nVXNlckVycm9yIiwiY2hhbmdpbmdQYXNzd29yZCIsInBhc3N3b3JkQ2hhbmdlRXJyb3IiLCJpc0FkZGluZ1Nob3AiLCJhZGRTaG9wRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJQQVNTV09SRF9DT05GSVJNX1JFUVVFU1QiLCJQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1MiLCJQQVNTV09SRF9DT05GSVJNX0ZBSUxVUkUiLCJQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCIsIlBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTIiwiUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkUiLCJBRERfU0hPUF9SRVFVRVNUIiwiQUREX1NIT1BfU1VDQ0VTUyIsIkFERF9TSE9QX0ZBSUxVUkUiLCJzaWduVXBGYWlsdXJlIiwiZnVsbFVzZXIiLCJTaG9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFD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QUFLLENBQUNhLGdCQUFOLEdBQXlCLEtBQXpCOztBQUNGLFdBQUtrQix1QkFBTDtBQUNFL0IsYUFBSyxDQUFDYSxnQkFBTixHQUF5QixLQUF6QjtBQUNBYixhQUFLLENBQUNjLG1CQUFOLEdBQTRCaEIsTUFBTSxDQUFDRyxLQUFuQzs7QUFDRjtBQUNFSixhQUFLO0FBQ0w7O0FBQ0YsV0FBS21DLGdCQUFMO0FBQ0VoQyxhQUFLLENBQUNlLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixXQUFLa0IsZ0JBQUw7QUFDRWpDLGFBQUssQ0FBQ2UsWUFBTixHQUFxQixLQUFyQjtBQUNBZixhQUFLLENBQUNVLE9BQU4sQ0FBYzJCLEtBQWQsR0FBc0IsQ0FBQ3ZDLE1BQU0sQ0FBQzdJLElBQVIsRUFBYyxHQUFHK0ksS0FBSyxDQUFDVSxPQUFOLENBQWMyQixLQUEvQixDQUF0QjtBQUNBOztBQUNGLFdBQUtILGdCQUFMO0FBQ0VsQyxhQUFLLENBQUNlLFlBQU4sR0FBcUIsS0FBckI7QUFDQWYsYUFBSyxDQUFDZ0IsWUFBTixHQUFxQmxCLE1BQU0sQ0FBQ0csS0FBNUI7QUFDQTtBQTdESjtBQStERCxHQWhFYSxDQUFkO0FBaUVELENBbEVELEU7Ozs7Ozs7Ozs7O0FDOUNBLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3VzZXIvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy91c2VyL3NpZ251cC5qc1wiKTtcbiIsImltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEFkZHJlc3NEZXRhaWxGb3JtID0gKHsgb25DaGFuZ2VBZGRyZXNzRGV0YWlsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcHJlZml4PVwiKiDsg4HshLjso7zshoxcIlxyXG4gICAgICAgIG5hbWU9e1wiYWRkcmVzc0RldGFpbFwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFkZHJlc3NEZXRhaWx9XHJcbiAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NEZXRhaWxGb3JtO1xyXG4iLCJpbXBvcnQgeyBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEJpemNkZUZvcm0gPSAoeyBvbkNoYW5nZUJpemNvZGUgfSkgPT4ge1xyXG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtLkl0ZW1cclxuICAgICAgbmFtZT1cImJpemNvZGVcIlxyXG4gICAgICB2YWxpZGF0ZVRyaWdnZXI9XCJvbkJsdXJcIlxyXG4gICAgICBydWxlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCLsgqzsl4XsnpAg65Ox66Gd67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gKHtcclxuICAgICAgICAgIGFzeW5jIHZhbGlkYXRvcihydWxlLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICF2YWx1ZS5tYXRjaCgvXFxkezF9L2cpIHx8ICF2YWx1ZS5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwi7ZiV7Iud7JeQIOunnuyngCDslYrsnYAg7IKs7JeF7J6QIOuTseuhneuyiO2YuOyeheuLiOuLpFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja0JpeklEKGJpeklEKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tJRCA9IG5ldyBBcnJheSgxLCAzLCA3LCAxLCAzLCA3LCAxLCAzLCA1LCAxKTtcclxuICAgICAgICAgICAgICAgIHZhciB0bXBCaXpJRCxcclxuICAgICAgICAgICAgICAgICAgaSxcclxuICAgICAgICAgICAgICAgICAgY2hrU3VtID0gMCxcclxuICAgICAgICAgICAgICAgICAgYzIsXHJcbiAgICAgICAgICAgICAgICAgIHJlbWFuZGVyO1xyXG4gICAgICAgICAgICAgICAgYml6SUQgPSBiaXpJRC5yZXBsYWNlKC8tL2dpLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IDc7IGkrKykgY2hrU3VtICs9IGNoZWNrSURbaV0gKiBiaXpJRC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBjMiA9IFwiMFwiICsgY2hlY2tJRFs4XSAqIGJpeklELmNoYXJBdCg4KTtcclxuICAgICAgICAgICAgICAgIGMyID0gYzIuc3Vic3RyaW5nKGMyLmxlbmd0aCAtIDIsIGMyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjaGtTdW0gKz0gTWF0aC5mbG9vcihjMi5jaGFyQXQoMCkpICsgTWF0aC5mbG9vcihjMi5jaGFyQXQoMSkpO1xyXG4gICAgICAgICAgICAgICAgcmVtYW5kZXIgPSAoMTAgLSAoY2hrU3VtICUgMTApKSAlIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKGJpeklELmNoYXJBdCg5KSkgPT0gcmVtYW5kZXIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoY2hlY2tCaXpJRCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvdXNlci9jb25maXJtL2JpemNvZGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICBiaXpjb2RlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLsnbTrr7gg7KG07J6s7ZWY64qUIOyCrOyXheyekCDrk7HroZ3rsojtmLjsnoXri4jri6RcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIu2YleyLneyXkCDrp57sp4Ag7JWK7J2AIOyCrOyXheyekCDrk7HroZ3rsojtmLjsnoXri4jri6RcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgICBdfVxyXG4gICAgPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBwcmVmaXg9e1wiKiDsgqzsl4XsnpDrk7HroZ3rsojtmLhcIn1cclxuICAgICAgICBzaXplPXtgbGFyZ2VgfVxyXG4gICAgICAgIG5hbWU9e1wiYml6Y29kZVwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUJpemNvZGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQml6Y2RlRm9ybTtcclxuIiwiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBFbWFpbEZvcm0gPSAoeyBvbkNoYW5nZUVtYWlsIH0pID0+IHtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9JUDtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICB2YWxpZGF0ZVRyaWdnZXI9XCJvbkJsdXJcIlxyXG4gICAgICBydWxlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCLsnbTrqZTsnbzrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICBhc3luYyB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgIC9eWzAtOWEtekEtWl0oWy1fLl0/WzAtOWEtekEtWl0pKkBbMC05YS16QS1aXShbLV8uXT9bMC05YS16QS1aXSkqLlthLXpBLVpdezIsM30kL2ksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3VzZXIvY29uZmlybS9lbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLsnbTrr7gg7KG07J6s7ZWY64qUIOydtOuplOydvOyeheuLiOuLpFwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLtmJXsi53sl5Ag66ee7KeAIOyViuuKlCDsnbTrqZTsnbzsnoXri4jri6RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHNpemU9e2BsYXJnZWB9XHJcbiAgICAgICAgcHJlZml4PXtgKiBFbWFpbGB9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsRm9ybTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIGhhbmRsZXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc2V0dGVyID0gKGUpID0+IGhhbmRsZXIoZS50YXJnZXQudmFsdWUpO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrZWQgPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIGhhbmRsZXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc2V0dGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZXIoKHByZXYpID0+IHtcbiAgICAgIHJldHVybiAhcHJldjtcbiAgICB9KTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBbdmFsdWUsIHNldHRlciwgaGFuZGxlcl07XG59O1xuIiwiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRGF1bVBvc3Rjb2RlIGZyb20gXCJyZWFjdC1kYXVtLXBvc3Rjb2RlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEtha2FvQWRkcmVzcyA9ICh7IGFkZHJlc3MsIHNldEFkZHJlc3MsIHNldENvb3JkaW5hdGVzIH0pID0+IHtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9JUDtcclxuICBjb25zdCBbYWRkcmVzc1RvZ2dsZSwgc2V0QWRkcmVzc1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKGRhdGEpID0+IHtcclxuICAgIGxldCBmdWxsQWRkcmVzcyA9IGRhdGEuYWRkcmVzcztcclxuICAgIGxldCBleHRyYUFkZHJlc3MgPSBcIlwiO1xyXG5cclxuICAgIGlmIChkYXRhLmFkZHJlc3NUeXBlID09PSBcIlJcIikge1xyXG4gICAgICBpZiAoZGF0YS5ibmFtZSAhPT0gXCJcIikge1xyXG4gICAgICAgIGV4dHJhQWRkcmVzcyArPSBkYXRhLmJuYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkYXRhLmJ1aWxkaW5nTmFtZSAhPT0gXCJcIikge1xyXG4gICAgICAgIGV4dHJhQWRkcmVzcyArPSBleHRyYUFkZHJlc3MgIT09IFwiXCIgPyBgLCAke2RhdGEuYnVpbGRpbmdOYW1lfWAgOiBkYXRhLmJ1aWxkaW5nTmFtZTtcclxuICAgICAgfVxyXG4gICAgICBmdWxsQWRkcmVzcyArPSBleHRyYUFkZHJlc3MgIT09IFwiXCIgPyBgICgke2V4dHJhQWRkcmVzc30pYCA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWRkcmVzcyhmdWxsQWRkcmVzcyk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChgaHR0cHM6Ly9kYXBpLmtha2FvLmNvbS92Mi9sb2NhbC9zZWFyY2gvYWRkcmVzcy5qc29uP3F1ZXJ5PSR7ZnVsbEFkZHJlc3N9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBLYWthb0FLICR7cHJvY2Vzcy5lbnYuS0FLQU9fQVBJS0VZfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzLmRhdGEuZG9jdW1lbnRzWzBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLmFkZHJlc3MpO1xyXG4gICAgICAgIHNldENvb3JkaW5hdGVzKFtOdW1iZXIobG9jYXRpb24uYWRkcmVzcy54KSwgTnVtYmVyKGxvY2F0aW9uLmFkZHJlc3MueSldKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgc2V0QWRkcmVzc1RvZ2dsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHthZGRyZXNzVG9nZ2xlID8gKFxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgPERhdW1Qb3N0Y29kZSBvbkNvbXBsZXRlPXtoYW5kbGVDb21wbGV0ZX0gYXV0b0Nsb3NlPXt0cnVlfSBoZWlnaHQ9e1wiMTBcIn0gLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuyjvOyGjOulvCDsnoXroKXtlbTso7zshLjsmpRcIiB9XX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcHJlZml4PVwiKiDso7zshoxcIlxyXG4gICAgICAgICAgICBuYW1lPXtcImFkZHJlc3NcIn1cclxuICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWRkcmVzc1RvZ2dsZSh0cnVlKX1cclxuICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb0FkZHJlc3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaXN0LCBNb2RhbCwgQ29sLCBSb3csIENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IENoZWNrQ2lyY2xlRmlsbGVkLCBDaGVja0NpcmNsZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5pbXBvcnQgeyB1c2VDaGVja2VkIH0gZnJvbSAnLi9DdXN0b21Ib29rcyc7XG5jb25zdCBUZXJtcyA9ICh7IHNldFRlcm1zIH0pID0+IHtcbiAgY29uc3QgQ2hlY2tDaXJjbGVTdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7IGNvbG9yOiAnIzQwQTlGRicsIG1hcmdpblJpZ2h0OiAnMyUnIH07XG4gIH0sIFtdKTtcblxuICBjb25zdCB0ZXJtcyA9IFtcbiAgICB7IHRpdGxlOiAn6rCc7J247KCV67O064+Z7J2YJywgY29udGVudDogJ+qwnOyduOygleuztOulvCDrj5nsnZjtlbTso7zshLjsmpQnIH0sXG4gICAgeyB0aXRsZTogJzPsnpDsoJXrs7Trj5nsnZgnLCBjb250ZW50OiAnM+yekCDsoJXrs7Trj5nsnZjrpbwg7ZW07KO87IS47JqUJyB9LFxuICBdO1xuICBjb25zdCBbYWxsVGVybXMsIHNldEFsbFRlcm1zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2luZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsLCBzZXRJbmRpdmlkdWFsSW5mb3JtYXRpb25Nb2RhbF0gPSB1c2VDaGVja2VkKGZhbHNlKTtcbiAgY29uc3QgW3RoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsLCBzZXRUaGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbF0gPSB1c2VDaGVja2VkKGZhbHNlKTtcblxuICBjb25zdCBzZXRNb2RhbHMgPSBbc2V0SW5kaXZpZHVhbEluZm9ybWF0aW9uTW9kYWwsIHNldFRoaXJkUGFydHlJbmZvcm1hdGlvbk1vZGFsXTtcbiAgY29uc3QgbW9kYWxzID0gW2luZGl2aWR1YWxJbmZvcm1hdGlvbk1vZGFsLCB0aGlyZFBhcnR5SW5mb3JtYXRpb25Nb2RhbF07XG5cbiAgY29uc3QgdG9nZ2xlQWxsVGVybXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QWxsVGVybXMoKHByZXYpID0+ICFwcmV2KTtcbiAgICBpZiAoIWFsbFRlcm1zKSB7XG4gICAgICBzZXRUZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICAgICAgdGVybVsyXSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUZXJtcy5tYXAoKHRlcm0pID0+IHtcbiAgICAgICAgdGVybVsyXShmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFthbGxUZXJtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0XG4gICAgICAgIGhlYWRlcj17J+yVveq0gOuPmeydmCd9XG4gICAgICAgIGJvcmRlcmVkPXt0cnVlfVxuICAgICAgICBpdGVtTGF5b3V0PXsnaG9yaXpvbnRhbCd9XG4gICAgICAgIGRhdGFTb3VyY2U9e3Rlcm1zfVxuICAgICAgICByZW5kZXJJdGVtPXsodGVybSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2luZGV4fSBhY3Rpb25zPXtbPGRpdiBvbkNsaWNrPXtzZXRNb2RhbHNbaW5kZXhdfT7snpDshLjtnojrs7TquLA8L2Rpdj5dfT5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3NldFRlcm1zW2luZGV4XVswXSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlRmlsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e0NoZWNrQ2lyY2xlU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2V0VGVybXNbaW5kZXhdWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlT3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17Q2hlY2tDaXJjbGVTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzZXRUZXJtc1tpbmRleF1bMV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjJ9Pnt0ZXJtLnRpdGxlfTwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Rlcm0udGl0bGV9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17bW9kYWxzW2luZGV4XX1cbiAgICAgICAgICAgICAgICBvbk9rPXtzZXRNb2RhbHNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtzZXRNb2RhbHNbaW5kZXhdfVxuICAgICAgICAgICAgICAgIHpJbmRleD17MTAwfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG92ZXJmbG93WTogJ2F1dG8nIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGVybS5jb250ZW50fVxuICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9PlxuICAgICAgICB7YWxsVGVybXMgPyAoXG4gICAgICAgICAgPENoZWNrQ2lyY2xlRmlsbGVkIHN0eWxlPXtDaGVja0NpcmNsZVN0eWxlfSBvbkNsaWNrPXt0b2dnbGVBbGxUZXJtc30gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2hlY2tDaXJjbGVPdXRsaW5lZCBzdHlsZT17Q2hlY2tDaXJjbGVTdHlsZX0gb25DbGljaz17dG9nZ2xlQWxsVGVybXN9IC8+XG4gICAgICAgICl9XG4gICAgICAgIOyghOyytCDrj5nsnZjtlZjquLBcbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zO1xuIiwiaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbnB1dCwgQ2FyZCwgU3BhY2UsIFN3aXRjaCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlSW5wdXQsIHVzZUNoZWNrZWQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3NcIjtcbmltcG9ydCBUZXJtcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvVGVybXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFNJR05fVVBfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9hZG1pblwiO1xuaW1wb3J0IEtha2FvQWRkcmVzcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvS2FrYW9BZGRyZXNzXCI7XG5pbXBvcnQgQWRkcmVzc0RldGFpbEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9ybXMvQWRkcmVzc0RldGFpbEZvcm1cIjtcbmltcG9ydCBCaXpjb2RlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9CaXpjb2RlRm9ybVwiO1xuaW1wb3J0IEVtYWlsRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9FbWFpbEZvcm1cIjtcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9YDtcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmRDaGVjaywgb25DaGFuZ2VQYXNzd29yZENoZWNrXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtuYW1lLCBvbkNoYW5nZU5hbWVdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Nob3BOYW1lLCBvbkNoYW5nZVNob3BOYW1lXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtiaXpjb2RlLCBzZXRCaXpjb2RlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthZGRyZXNzRGV0YWlsLCBvbkNoYW5nZUFkZHJlc3NEZXRhaWxdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3Rlcm1Ub2dnbGUsIHNldFRlcm1Ub2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGl2aXNpb25Ub2dnbGUsIHNldERpdmlzaW9uVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtwZXJzb25hbEluZm9ybWF0aW9uVGVybSwgdG9nZ2xlUGVyc29uYWxJbmZvcm1hdGlvblRlcm0sIHNldFBlcnNvbmFsSW5mb3JtYXRpb25UZXJtXSA9XG4gICAgdXNlQ2hlY2tlZChmYWxzZSk7XG4gIGNvbnN0IFt0aGlyZFBhcnR5SW5nb3JtYXRpb25UZXJtLCB0b2dnbGVUaGlyZFBhcnR5SW5mb3JtYXRpb25UZXJtLCBzZXRUaGlyZFBhcnR5SW5mb3JtYXRpb25UZXJtXSA9XG4gICAgdXNlQ2hlY2tlZChmYWxzZSk7XG5cbiAgY29uc3QgW2xvY2F0aW9uVGVybSwgdG9nZ2xlTG9jYXRpb25UZXJtLCBzZXRMb2NhdGlvblRlcm1dID0gdXNlQ2hlY2tlZChmYWxzZSk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcInNpZ251cFwiIH0pO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhhZGRyZXNzKTtcblxuICBjb25zdCBvbkNsaWNrVGVybVRvZ2dsZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc2V0VGVybVRvZ2dsZSghdGVybVRvZ2dsZSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogZW1haWwsXG4gICAgICAgIHBhc3N3b3JkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBiaXpjb2RlLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBhZGRyZXNzRGV0YWlsLFxuICAgICAgICBjb29yZGluYXRlcyxcbiAgICAgICAgc2hvcE5hbWUsXG4gICAgICAgIGRpdmlzaW9uOiBkaXZpc2lvblRvZ2dsZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgUm91dGVyLnB1c2goYC91c2VyL2NlcnRpZmljYXRlLyR7ZW1haWx9YCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VEaXZpc2lvblRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXREaXZpc2lvblRvZ2dsZSghZGl2aXNpb25Ub2dnbGUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlQml6Y29kZSA9IChlKSA9PiB7XG4gICAgc2V0Qml6Y29kZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmRcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249XCJob3JpemVudGFsXCIgYWxpZ249e2BiYXNlbGluZWB9IHNpemU9e2BsYXJnZWB9PlxuICAgICAgICAgICAge2RpdmlzaW9uVG9nZ2xlID8gPGgxPuqwgOunueygkDwvaDE+IDogPGgxPuydvOuwmO2ajOybkDwvaDE+fVxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZURpdmlzaW9uVG9nZ2xlfVxuICAgICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49e2DqsIDrp7nsoJBgfVxuICAgICAgICAgICAgICB1bkNoZWNrZWRDaGlsZHJlbj17YOydvOuwmO2ajOybkGB9XG4gICAgICAgICAgICAgIHNpemU9e1wibWlkZGxlXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uRmluaXNofSBlbmNUeXBlPXtcIm11bHRpcGFydC9mb3JtLWRhdGFcIn0+XG4gICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj1cInZlcnRpY2FsXCIgc2l6ZT17XCJsYXJnZVwifSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICA8VGVybXNcbiAgICAgICAgICAgICAgc2V0VGVybXM9e1tcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBwZXJzb25hbEluZm9ybWF0aW9uVGVybSxcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVBlcnNvbmFsSW5mb3JtYXRpb25UZXJtLFxuICAgICAgICAgICAgICAgICAgc2V0UGVyc29uYWxJbmZvcm1hdGlvblRlcm0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICB0aGlyZFBhcnR5SW5nb3JtYXRpb25UZXJtLFxuICAgICAgICAgICAgICAgICAgdG9nZ2xlVGhpcmRQYXJ0eUluZm9ybWF0aW9uVGVybSxcbiAgICAgICAgICAgICAgICAgIHNldFRoaXJkUGFydHlJbmZvcm1hdGlvblRlcm0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RW1haWxGb3JtIG9uQ2hhbmdlRW1haWw9e29uQ2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuu5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eW0EtWmEtejAtOV17NiwxMn0kLyxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi67mE67CA67KI7Zi46rCAIO2YleyLneyXkCDrp57sp4Ag7JWK7Iq164uI64ukXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXG4gICAgICAgICAgICAgICAgcHJlZml4PXtgKiDruYTrsIDrsojtmLhgfVxuICAgICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkQ2hlY2tcIlxuICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM9e1tcInBhc3N3b3JkXCJdfVxuICAgICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLruYTrsIDrsojtmLjrpbwg7ZmV7J247ZW0IOyjvOyEuOyalFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHsgZ2V0RmllbGRWYWx1ZSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yKHJ1bGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgZ2V0RmllbGRWYWx1ZShcInBhc3N3b3JkXCIpID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC5cIik7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcbiAgICAgICAgICAgICAgICBwcmVmaXg9e2AqIOu5hOuwgOuyiO2YuCDtmZXsnbhgfVxuICAgICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuLpOyLnCDruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibmFtZVwiIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIgfV19PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwcmVmaXg9e2RpdmlzaW9uVG9nZ2xlID8gXCIqIOuMgO2RnOyekOuqhVwiIDogXCIqIOydtOumhFwifVxuICAgICAgICAgICAgICAgIHNpemU9e2BsYXJnZWB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmFtZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgICAge2RpdmlzaW9uVG9nZ2xlICYmIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXG4gICAgICAgICAgICAgICAgICBuYW1lPXtcInNob3BOYW1lXCJ9XG4gICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7KCQ7Y+s66qF7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH1dfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9e1wiKiDsoJDtj6zrqoVcIn1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17YGxhcmdlYH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlU2hvcE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzaG9wTmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAgPEJpemNvZGVGb3JtIG9uQ2hhbmdlQml6Y29kZT17b25DaGFuZ2VCaXpjb2RlfSAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxLYWthb0FkZHJlc3NcbiAgICAgICAgICAgICAgYWRkcmVzcz17YWRkcmVzc31cbiAgICAgICAgICAgICAgc2V0QWRkcmVzcz17c2V0QWRkcmVzc31cbiAgICAgICAgICAgICAgc2V0Q29vcmRpbmF0ZXM9e3NldENvb3JkaW5hdGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBZGRyZXNzRGV0YWlsRm9ybSBvbkNoYW5nZUFkZHJlc3NEZXRhaWw9e29uQ2hhbmdlQWRkcmVzc0RldGFpbH0gLz5cbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IHdpZHRoOiBgMTAwJWAgfX0+XG4gICAgICAgICAgICAgICAg7KCc7LacXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIHNob3BMaXN0OiBbXSxcbiAgb3JpZ2luYWxTaG9wTGlzdDogW10sXG4gIGlzTG9hZGluZ1VzZXJMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1VzZXJMaXN0RXJyb3I6IG51bGwsXG4gIHVzZXJMaXN0OiBbXSxcbiAgb3JpZ2luYWxVc2VyTGlzdDogW10sXG4gIGV2ZW50czogW10sXG4gIGxvYWRFdmVudHNFcnJvcjogbnVsbCxcbiAgaXNMb2FkaW5nRXZlbnRzOiBmYWxzZSxcbiAgcGFnZUluZm86IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9SRVFVRVNUID0gJ0xPQURfVVNFUkxJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9TVUNDRVNTID0gJ0xPQURfVVNFUkxJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9GQUlMVVJFID0gJ0xPQURfVVNFUkxJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSAnTE9BRF9TSE9QTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSAnTE9BRF9TSE9QTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgPSAnTE9BRF9TSE9QTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9GQUlMVVJFID0gJ0RFTEVURV9VU0VSX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfUkVRVUVTVCA9ICdMT0FEX0VWRU5UU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19TVUNDRVNTID0gJ0xPQURfRVZFTlRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX0ZBSUxVUkUgPSAnTE9BRF9FVkVOVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfUkVRVUVTVCA9ICdBRERfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1NVQ0NFU1MgPSAnQUREX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9GQUlMVVJFID0gJ0FERF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfUkVRVUVTVCA9ICdFRElUX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfU1VDQ0VTUyA9ICdFRElUX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfRkFJTFVSRSA9ICdFRElUX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1JFUVVFU1QgPSAnREVMRVRFX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9TVUNDRVNTID0gJ0RFTEVURV9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfRkFJTFVSRSA9ICdERUxFVEVfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBQQUdFX0NIQU5HRV9TVUNDRVNTID0gJ1BBR0VfQ0hBTkdFX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxTaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nU2hvcExpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfQ0hBTkdFX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnBhZ2VJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNTaWduaW5nVXA6IGZhbHNlLFxuICBzaWduVXBTdWNjZXNzOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBpc0xvZ2dpbmdJbjogZmFsc2UsXG4gIGxvZ2luRXJyb3I6IG51bGwsXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsXG4gIGxvZ291dEVycm9yOiBudWxsLFxuICBzZXNzaW9uOiBudWxsLFxuICBpc0xvYWRpbmdVc2VyOiBmYWxzZSxcbiAgbG9hZGluZ1VzZXJFcnJvcjogbnVsbCxcbiAgY2hhbmdpbmdQYXNzd29yZDogZmFsc2UsXG4gIHBhc3N3b3JkQ2hhbmdlRXJyb3I6IG51bGwsXG4gIGlzQWRkaW5nU2hvcDogZmFsc2UsXG4gIGFkZFNob3BFcnJvcjogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fSU5fUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gXCJMT0FEX1VTRVJfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gXCJMT0FEX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gXCJMT0FEX1VTRVJfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUID0gXCJQQVNTV09SRF9DT05GSVJNX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1MgPSBcIlBBU1NXT1JEX0NPTkZJUk1fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRSA9IFwiUEFTU1dPUkRfQ09ORklSTV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVCA9IFwiUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUyA9IFwiUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSA9IFwiUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEFERF9TSE9QX1JFUVVFU1QgPSBcIkFERF9TSE9QX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfU0hPUF9TVUNDRVNTID0gXCJBRERfU0hPUF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1NIT1BfRkFJTFVSRSA9IFwiQUREX1NIT1BfRkFJTFVSRVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2lnblVwU3VjY2VzcyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEZhaWx1cmUgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zZXNzaW9uID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1VTRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlciA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IGFjdGlvbi5kYXRhLmZ1bGxVc2VyO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zZXNzaW9uID0gbnVsbDtcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dpbkVycm9yID0gbnVsbDtcblxuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IHRydWU7XG4gICAgICBjYXNlIFBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5jaGFuZ2luZ1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICBjYXNlIFBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2luZ1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnBhc3N3b3JkQ2hhbmdlRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9TSE9QX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzQWRkaW5nU2hvcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbi5TaG9wcyA9IFthY3Rpb24uZGF0YSwgLi4uZHJhZnQuc2Vzc2lvbi5TaG9wc107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuYWRkU2hvcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF1bS1wb3N0Y29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==