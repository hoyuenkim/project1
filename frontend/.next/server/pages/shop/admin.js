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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/admin/index.js");
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

/***/ "./components/Forms/ShopAddForm.js":
/*!*****************************************!*\
  !*** ./components/Forms/ShopAddForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Generalui_KakaoAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Generalui/KakaoAddress */ "./components/Generalui/KakaoAddress.js");
/* harmony import */ var _AddressDetailForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddressDetailForm */ "./components/Forms/AddressDetailForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const ShopAddForm = ({
  onChangeShopName,
  address,
  setAddress,
  onChangeAddressDetail,
  onFinish,
  setCoordinates
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: onFinish,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      name: "shopName",
      rules: [{
        required: true,
        message: "점포명을 입력해주세요"
      }],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        prefix: "* 점포명",
        size: "large",
        onChange: onChangeShopName
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_Generalui_KakaoAddress__WEBPACK_IMPORTED_MODULE_1__["default"], {
      address: address,
      setAddress: setAddress,
      setCoordinates: setCoordinates
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_AddressDetailForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChangeAddressDetail: onChangeAddressDetail
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "primary",
        htmlType: "submit",
        style: {
          width: `100%`
        },
        children: "\uC81C\uCD9C"
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ShopAddForm);

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

/***/ "./pages/shop/admin/index.js":
/*!***********************************!*\
  !*** ./pages/shop/admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var _components_Forms_ShopAddForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Forms/ShopAddForm */ "./components/Forms/ShopAddForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const Index = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const {
    session,
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [shopName, onChangeShopName] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"])();
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [addressDetail, onChangeAddressDetail] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"])();
  const {
    0: coordinates,
    1: setCoordinates
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();

  if (!session || !isLoggedIn) {
    router.push("/");
  }

  const onClickAddShop = () => {
    return setModal(prev => !prev);
  };

  const onFinish = () => {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_SHOP_REQUEST"],
      data: {
        UserId: session.id,
        shopName,
        address,
        addressDetail,
        bizcode: session.Shops[0].bizcode,
        coordinates
      }
    });
    return setModal(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      visible: modal,
      onCancel: onClickAddShop,
      title: "점포 추가",
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_Forms_ShopAddForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onFinish: onFinish,
        onChangeShopName: onChangeShopName,
        address: address,
        setAddress: setAddress,
        onChangeAddressDetail: onChangeAddressDetail,
        setCoordinates: setCoordinates
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      title: session ? `${session.name}님의 매장 리스트` : "매장 리스트",
      extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: onClickAddShop,
        children: "\uB9E4\uC7A5\uCD94\uAC00"
      }),
      children: session.Shops.map(shop => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        title: shop.name,
        actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          onClick: () => router.push(`/shop/admin/${shop.id}`),
          children: "\uB9E4\uC7A5\uAD00\uB9AC"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          children: "\uB9E4\uC7A5\uC0AD\uC81C"
        })]
      }))
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9BZGRyZXNzRGV0YWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1Nob3BBZGRGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0tha2FvQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL2FkbWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF1bS1wb3N0Y29kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBZGRyZXNzRGV0YWlsRm9ybSIsIm9uQ2hhbmdlQWRkcmVzc0RldGFpbCIsIlNob3BBZGRGb3JtIiwib25DaGFuZ2VTaG9wTmFtZSIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwib25GaW5pc2giLCJzZXRDb29yZGluYXRlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIndpZHRoIiwidXNlSW5wdXQiLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsImhhbmRsZXIiLCJ1c2VTdGF0ZSIsInNldHRlciIsImUiLCJ0YXJnZXQiLCJ1c2VDaGVja2VkIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwiS2FrYW9BZGRyZXNzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwiYWRkcmVzc1RvZ2dsZSIsInNldEFkZHJlc3NUb2dnbGUiLCJoYW5kbGVDb21wbGV0ZSIsImRhdGEiLCJmdWxsQWRkcmVzcyIsImV4dHJhQWRkcmVzcyIsImFkZHJlc3NUeXBlIiwiYm5hbWUiLCJidWlsZGluZ05hbWUiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJyZXMiLCJsb2NhdGlvbiIsImRvY3VtZW50cyIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJ4IiwieSIsIkluZGV4IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInNlc3Npb24iLCJpc0xvZ2dlZEluIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtb2RhbCIsInNldE1vZGFsIiwic2hvcE5hbWUiLCJhZGRyZXNzRGV0YWlsIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwib25DbGlja0FkZFNob3AiLCJ0eXBlIiwiQUREX1NIT1BfUkVRVUVTVCIsIlVzZXJJZCIsImlkIiwiYml6Y29kZSIsIlNob3BzIiwibmFtZSIsIm1hcCIsInNob3AiLCJpc1NpZ25pbmdVcCIsInNpZ25VcFN1Y2Nlc3MiLCJzaWduVXBFcnJvciIsImlzTG9nZ2luZ0luIiwibG9naW5FcnJvciIsImlzTG9nZ2luZ091dCIsImxvZ291dEVycm9yIiwiaXNMb2FkaW5nVXNlciIsImxvYWRpbmdVc2VyRXJyb3IiLCJjaGFuZ2luZ1Bhc3N3b3JkIiwicGFzc3dvcmRDaGFuZ2VFcnJvciIsImlzQWRkaW5nU2hvcCIsImFkZFNob3BFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIlBBU1NXT1JEX0NPTkZJUk1fUkVRVUVTVCIsIlBBU1NXT1JEX0NPTkZJUk1fU1VDQ0VTUyIsIlBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRSIsIlBBU1NXT1JEX0NIQU5HRV9SRVFVRVNUIiwiUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MiLCJQQVNTV09SRF9DSEFOR0VfRkFJTFVSRSIsIkFERF9TSE9QX1NVQ0NFU1MiLCJBRERfU0hPUF9GQUlMVVJFIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0Iiwic2lnblVwRmFpbHVyZSIsImVycm9yIiwiZnVsbFVzZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFFQSxNQUFNQSxpQkFBaUIsR0FBRyxDQUFDO0FB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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2hvcC9hZG1pbi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEFkZHJlc3NEZXRhaWxGb3JtID0gKHsgb25DaGFuZ2VBZGRyZXNzRGV0YWlsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbT5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgcHJlZml4PVwiKiDsg4HshLjso7zshoxcIlxyXG4gICAgICAgIG5hbWU9e1wiYWRkcmVzc0RldGFpbFwifVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFkZHJlc3NEZXRhaWx9XHJcbiAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NEZXRhaWxGb3JtO1xyXG4iLCJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IEtha2FvQWRkcmVzcyBmcm9tIFwiLi4vR2VuZXJhbHVpL0tha2FvQWRkcmVzc1wiO1xyXG5pbXBvcnQgQWRkcmVzc0RldGFpbCBmcm9tIFwiLi9BZGRyZXNzRGV0YWlsRm9ybVwiO1xyXG5cclxuY29uc3QgU2hvcEFkZEZvcm0gPSAoe1xyXG4gIG9uQ2hhbmdlU2hvcE5hbWUsXHJcbiAgYWRkcmVzcyxcclxuICBzZXRBZGRyZXNzLFxyXG4gIG9uQ2hhbmdlQWRkcmVzc0RldGFpbCxcclxuICBvbkZpbmlzaCxcclxuICBzZXRDb29yZGluYXRlcyxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25GaW5pc2h9PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9e1wic2hvcE5hbWVcIn0gcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuygkO2PrOuqheydhCDsnoXroKXtlbTso7zshLjsmpRcIiB9XX0+XHJcbiAgICAgICAgPElucHV0IHByZWZpeD17XCIqIOygkO2PrOuqhVwifSBzaXplPXtcImxhcmdlXCJ9IG9uQ2hhbmdlPXtvbkNoYW5nZVNob3BOYW1lfSAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEtha2FvQWRkcmVzcyBhZGRyZXNzPXthZGRyZXNzfSBzZXRBZGRyZXNzPXtzZXRBZGRyZXNzfSBzZXRDb29yZGluYXRlcz17c2V0Q29vcmRpbmF0ZXN9IC8+XHJcbiAgICAgIDxBZGRyZXNzRGV0YWlsIG9uQ2hhbmdlQWRkcmVzc0RldGFpbD17b25DaGFuZ2VBZGRyZXNzRGV0YWlsfSAvPlxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IHdpZHRoOiBgMTAwJWAgfX0+XHJcbiAgICAgICAgICDsoJzstpxcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BBZGRGb3JtO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSAoZSkgPT4gaGFuZGxlcihlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiBbdmFsdWUsIHNldHRlciwgaGFuZGxlcl07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tlZCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFuZGxlcigocHJldikgPT4ge1xuICAgICAgcmV0dXJuICFwcmV2O1xuICAgIH0pO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG4iLCJpbXBvcnQgeyBGb3JtLCBJbnB1dCwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBEYXVtUG9zdGNvZGUgZnJvbSBcInJlYWN0LWRhdW0tcG9zdGNvZGVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgS2FrYW9BZGRyZXNzID0gKHsgYWRkcmVzcywgc2V0QWRkcmVzcywgc2V0Q29vcmRpbmF0ZXMgfSkgPT4ge1xyXG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5CQUNLRU5EX0lQO1xyXG4gIGNvbnN0IFthZGRyZXNzVG9nZ2xlLCBzZXRBZGRyZXNzVG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IGZ1bGxBZGRyZXNzID0gZGF0YS5hZGRyZXNzO1xyXG4gICAgbGV0IGV4dHJhQWRkcmVzcyA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGRhdGEuYWRkcmVzc1R5cGUgPT09IFwiUlwiKSB7XHJcbiAgICAgIGlmIChkYXRhLmJuYW1lICE9PSBcIlwiKSB7XHJcbiAgICAgICAgZXh0cmFBZGRyZXNzICs9IGRhdGEuYm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuYnVpbGRpbmdOYW1lICE9PSBcIlwiKSB7XHJcbiAgICAgICAgZXh0cmFBZGRyZXNzICs9IGV4dHJhQWRkcmVzcyAhPT0gXCJcIiA/IGAsICR7ZGF0YS5idWlsZGluZ05hbWV9YCA6IGRhdGEuYnVpbGRpbmdOYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIGZ1bGxBZGRyZXNzICs9IGV4dHJhQWRkcmVzcyAhPT0gXCJcIiA/IGAgKCR7ZXh0cmFBZGRyZXNzfSlgIDogXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBZGRyZXNzKGZ1bGxBZGRyZXNzKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KGBodHRwczovL2RhcGkua2FrYW8uY29tL3YyL2xvY2FsL3NlYXJjaC9hZGRyZXNzLmpzb24/cXVlcnk9JHtmdWxsQWRkcmVzc31gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEtha2FvQUsgJHtwcm9jZXNzLmVudi5LQUtBT19BUElLRVl9YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXMuZGF0YS5kb2N1bWVudHNbMF07XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24uYWRkcmVzcyk7XHJcbiAgICAgICAgc2V0Q29vcmRpbmF0ZXMoW051bWJlcihsb2NhdGlvbi5hZGRyZXNzLngpLCBOdW1iZXIobG9jYXRpb24uYWRkcmVzcy55KV0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBzZXRBZGRyZXNzVG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2FkZHJlc3NUb2dnbGUgPyAoXHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICA8RGF1bVBvc3Rjb2RlIG9uQ29tcGxldGU9e2hhbmRsZUNvbXBsZXRlfSBhdXRvQ2xvc2U9e3RydWV9IGhlaWdodD17XCIxMFwifSAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7KO87IaM66W8IOyeheugpe2VtOyjvOyEuOyalFwiIH1dfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwcmVmaXg9XCIqIOyjvOyGjFwiXHJcbiAgICAgICAgICAgIG5hbWU9e1wiYWRkcmVzc1wifVxyXG4gICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBZGRyZXNzVG9nZ2xlKHRydWUpfVxyXG4gICAgICAgICAgICBzaXplPXtcImxhcmdlXCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvQWRkcmVzcztcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgTW9kYWwsIExpc3QsIENvbW1lbnQsIEZvcm0sIElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEFERF9TSE9QX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3NcIjtcbmltcG9ydCBTaG9wQWRkRm9ybSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9TaG9wQWRkRm9ybVwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzZXNzaW9uLCBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3BOYW1lLCBvbkNoYW5nZVNob3BOYW1lXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFthZGRyZXNzRGV0YWlsLCBvbkNoYW5nZUFkZHJlc3NEZXRhaWxdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW2Nvb3JkaW5hdGVzLCBzZXRDb29yZGluYXRlc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGlmICghc2Vzc2lvbiB8fCAhaXNMb2dnZWRJbikge1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2tBZGRTaG9wID0gKCkgPT4ge1xuICAgIHJldHVybiBzZXRNb2RhbCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFERF9TSE9QX1JFUVVFU1QsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIFVzZXJJZDogc2Vzc2lvbi5pZCxcbiAgICAgICAgc2hvcE5hbWUsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIGFkZHJlc3NEZXRhaWwsXG4gICAgICAgIGJpemNvZGU6IHNlc3Npb24uU2hvcHNbMF0uYml6Y29kZSxcbiAgICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBzZXRNb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHZpc2libGU9e21vZGFsfSBvbkNhbmNlbD17b25DbGlja0FkZFNob3B9IHRpdGxlPXtcIuygkO2PrCDstpTqsIBcIn0gZm9vdGVyPXtudWxsfT5cbiAgICAgICAgPFNob3BBZGRGb3JtXG4gICAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICAgIG9uQ2hhbmdlU2hvcE5hbWU9e29uQ2hhbmdlU2hvcE5hbWV9XG4gICAgICAgICAgYWRkcmVzcz17YWRkcmVzc31cbiAgICAgICAgICBzZXRBZGRyZXNzPXtzZXRBZGRyZXNzfVxuICAgICAgICAgIG9uQ2hhbmdlQWRkcmVzc0RldGFpbD17b25DaGFuZ2VBZGRyZXNzRGV0YWlsfVxuICAgICAgICAgIHNldENvb3JkaW5hdGVzPXtzZXRDb29yZGluYXRlc31cbiAgICAgICAgLz5cbiAgICAgIDwvTW9kYWw+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17c2Vzc2lvbiA/IGAke3Nlc3Npb24ubmFtZX3ri5jsnZgg66ek7J6lIOumrOyKpO2KuGAgOiBcIuunpOyepSDrpqzsiqTtirhcIn1cbiAgICAgICAgZXh0cmE9ezxCdXR0b24gb25DbGljaz17b25DbGlja0FkZFNob3B9PuunpOyepey2lOqwgDwvQnV0dG9uPn1cbiAgICAgID5cbiAgICAgICAge3Nlc3Npb24uU2hvcHMubWFwKChzaG9wKSA9PiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPXtzaG9wLm5hbWV9XG4gICAgICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zaG9wL2FkbWluLyR7c2hvcC5pZH1gKX0+66ek7J6l6rSA66asPC9kaXY+LFxuICAgICAgICAgICAgICA8ZGl2PuunpOyepeyCreygnDwvZGl2PixcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPjwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzU2lnbmluZ1VwOiBmYWxzZSxcbiAgc2lnblVwU3VjY2VzczogZmFsc2UsXG4gIHNpZ25VcEVycm9yOiBudWxsLFxuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgaXNMb2dnaW5nSW46IGZhbHNlLFxuICBsb2dpbkVycm9yOiBudWxsLFxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxuICBsb2dvdXRFcnJvcjogbnVsbCxcbiAgc2Vzc2lvbjogbnVsbCxcbiAgaXNMb2FkaW5nVXNlcjogZmFsc2UsXG4gIGxvYWRpbmdVc2VyRXJyb3I6IG51bGwsXG4gIGNoYW5naW5nUGFzc3dvcmQ6IGZhbHNlLFxuICBwYXNzd29yZENoYW5nZUVycm9yOiBudWxsLFxuICBpc0FkZGluZ1Nob3A6IGZhbHNlLFxuICBhZGRTaG9wRXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fSU5fU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9JTl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9IFwiTE9BRF9VU0VSX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9IFwiTE9BRF9VU0VSX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9IFwiTE9BRF9VU0VSX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFBBU1NXT1JEX0NPTkZJUk1fUkVRVUVTVCA9IFwiUEFTU1dPUkRfQ09ORklSTV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ09ORklSTV9TVUNDRVNTID0gXCJQQVNTV09SRF9DT05GSVJNX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBQQVNTV09SRF9DT05GSVJNX0ZBSUxVUkUgPSBcIlBBU1NXT1JEX0NPTkZJUk1fRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1QgPSBcIlBBU1NXT1JEX0NIQU5HRV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX1NVQ0NFU1MgPSBcIlBBU1NXT1JEX0NIQU5HRV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUEFTU1dPUkRfQ0hBTkdFX0ZBSUxVUkUgPSBcIlBBU1NXT1JEX0NIQU5HRV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfU0hPUF9SRVFVRVNUID0gXCJBRERfU0hPUF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX1NIT1BfU1VDQ0VTUyA9IFwiQUREX1NIT1BfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFERF9TSE9QX0ZBSUxVUkUgPSBcIkFERF9TSE9QX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcFN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaWduVXBGYWlsdXJlID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXIgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24gPSBhY3Rpb24uZGF0YS5mdWxsVXNlcjtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuc2Vzc2lvbiA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9naW5FcnJvciA9IG51bGw7XG5cbiAgICAgIGNhc2UgUEFTU1dPUkRfQ0hBTkdFX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5naW5nUGFzc3dvcmQgPSB0cnVlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgY2FzZSBQQVNTV09SRF9DSEFOR0VfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuY2hhbmdpbmdQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5wYXNzd29yZENoYW5nZUVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBBRERfU0hPUF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0FkZGluZ1Nob3AgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1NIT1BfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNBZGRpbmdTaG9wID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNlc3Npb24uU2hvcHMgPSBbYWN0aW9uLmRhdGEsIC4uLmRyYWZ0LnNlc3Npb24uU2hvcHNdO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUREX1NIT1BfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNBZGRpbmdTaG9wID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmFkZFNob3BFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdW0tcG9zdGNvZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==