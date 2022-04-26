module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/admin/product/add.js");
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

/***/ "./pages/shop/admin/product/add.js":
/*!*****************************************!*\
  !*** ./pages/shop/admin/product/add.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-img-crop */ "antd-img-crop");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_img_crop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../reducers/menu */ "./reducers/menu.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const Regist = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    session,
    isLoggedIn
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    categories
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.shop);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_9__["PAGE_CHANGE_SUCCESS"],
      data: 'admin'
    });
  }, []);
  if (!session || isLoggedIn === false || session.division === false) router.push('/');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_6__["ADMIN_PRODUCTS_REQUEST"],
      ShopId: session.Shops[0].id
    });
  }, []);
  const [title, onChangeTitle] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const [price, onChangePrice] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const [description, onChangeDecription] = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__["useInput"])();
  const {
    0: fileList,
    1: setFileList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: fileError,
    1: setFileError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const onImagesChange = ({
    fileList: newFileList
  }) => {
    setFileList(newFileList);
    setFileError(false);
  };

  const onPreview = async file => {
    let src = file.url;

    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);

        reader.onload = () => resolve(reader.result);
      });
    }

    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onChangeCategory = e => {
    console.log(e);
    setCategory(e);
  };

  const onFinish = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    fileList.forEach(({
      originFileObj
    }) => {
      formData.append('files', originFileObj);
    });
    formData.append('UserId', session.id);
    formData.append('CategoryId', category);
    console.log(formData);

    if (fileList.length > 0) {
      dispatch({
        type: _reducers_menu__WEBPACK_IMPORTED_MODULE_5__["ADD_PRODUCT_REQUEST"],
        formData
      });
      return router.push('/shop/admin/product');
    } else {
      return setFileError(true);
    }
  };

  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories[0].id);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    encType: 'multipart/form-data',
    onFinish: onFinish,
    style: {
      height: '100vh'
    },
    layout: 'vertical',
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
        className: 'site-page-header',
        title: "\uC0C1\uD488\uB4F1\uB85D"
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
        direction: 'vertical',
        size: 'middle',
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: 'title',
          rules: [{
            required: true,
            message: '상품명을 입력해주세요'
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            name: 'title',
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["GiftOutlined"], {}),
            size: 'large',
            onChange: onChangeTitle
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "price",
          rules: [{
            required: true,
            message: '가격을 입력해주세요'
          }, {
            pattern: /^[0-9]/g,
            message: '숫자를 입력해주세요'
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            name: "price",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DollarOutlined"], {}),
            size: 'large',
            value: price,
            onChange: onChangePrice
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "description",
          label: "\uC124\uBA85",
          rules: [{
            required: true,
            message: '상세내역을 입력해주세요'
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
            name: "description",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["ProfileOutlined"], {}),
            size: 'large',
            placeholder: '상세사항을 입력해주세요',
            maxLength: 200,
            onChange: onChangeDecription
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "category",
          label: "\uCE74\uD14C\uACE0\uB9AC",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
            onChange: onChangeCategory,
            defaultValue: categories[0].id,
            children: categories.map((category, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
              value: category.id,
              children: category.name
            }, index))
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
          title: `image`,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd_img_crop__WEBPACK_IMPORTED_MODULE_3___default.a, {
            rotate: true,
            aspect: 4 / 3,
            name: 'image',
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
              action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
              listType: "picture-card",
              fileList: fileList,
              onChange: onImagesChange,
              onPreview: onPreview,
              children: fileList.length < 5 && '+ Upload'
            })
          }), fileError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
            style: {
              color: 'red'
            },
            children: "\uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC \uD574\uC8FC\uC138\uC694"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          style: {
            width: `100%`
          },
          children: "\uC81C\uCD9C"
        })]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Regist);

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

/***/ "antd-img-crop":
/*!********************************!*\
  !*** external "antd-img-crop" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd-img-crop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9wcm9kdWN0L2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC1pbWctY3JvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiaGFuZGxlciIsInVzZVN0YXRlIiwic2V0dGVyIiwiZSIsInRhcmdldCIsInVzZUNoZWNrZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJSZWdpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwic2Vzc2lvbiIsImlzTG9nZ2VkSW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNhdGVnb3JpZXMiLCJzaG9wIiwidXNlRWZmZWN0IiwidHlwZSIsIlBBR0VfQ0hBTkdFX1NVQ0NFU1MiLCJkYXRhIiwiZGl2aXNpb24iLCJwdXNoIiwiQURNSU5fUFJPRFVDVFNfUkVRVUVTVCIsIlNob3BJZCIsIlNob3BzIiwiaWQiLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJwcmljZSIsIm9uQ2hhbmdlUHJpY2UiLCJkZXNjcmlwdGlvbiIsIm9uQ2hhbmdlRGVjcmlwdGlvbiIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlRXJyb3IiLCJzZXRGaWxlRXJyb3IiLCJvbkltYWdlc0NoYW5nZSIsIm5ld0ZpbGVMaXN0Iiwib25QcmV2aWV3IiwiZmlsZSIsInNyYyIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvcmlnaW5GaWxlT2JqIiwib25sb2FkIiwicmVzdWx0IiwiaW1hZ2UiLCJJbWFnZSIsImltZ1dpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsIndyaXRlIiwib3V0ZXJIVE1MIiwib25DaGFuZ2VDYXRlZ29yeSIsImNvbnNvbGUiLCJsb2ciLCJzZXRDYXRlZ29yeSIsIm9uRmluaXNoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvckVhY2giLCJjYXRlZ29yeSIsImxlbmd0aCIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJoZWlnaHQiLCJ3aWR0aCIsInJlcXVpcmVkIiwibWVzc2FnZSIsInBhdHRlcm4iLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJjb2xvciIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJwcm9kdWN0cyIsIm9yaWdpblByb2R1Y3RzIiwibmF2aVNpemUiLCJUYWJsZUlkIiwiaXNBZGRpbmdQcm9kdWN0IiwiaXNMb2FkaW5nQ2FydCIsIkxPQURfUFJPRFVDVFNfUkVRVUVTVCIsIkxPQURfUFJPRFVDVFNfU1VDQ0VTUyIsIkxPQURfUFJPRFVDVFNfRkFJTFVSRSIsIkFERF9RVUFOVElUWV9SRVFVRVNUIiwiQUREX1FVQU5USVRZX1NVQ0NFU1MiLCJBRERfUVVBTlRJVFlfRkFJTFVSRSIsIlNVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIiwiU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1MiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfRkFJTFVSRSIsIkFERF9QUk9EVUNUX1NVQ0NFU1MiLCJBRERfUFJPRFVDVF9GQUlMVVJFIiwiTE9BRF9DQVJUX1JFUVVFU1QiLCJMT0FEX0NBUlRfU1VDQ0VTUyIsIkxPQURfQ0FSVF9GQUlMVVJFIiwiSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVCIsIkdFVF9OQVZJQkFSX1NJWkUiLCJTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTIiwiU0VMRUNUX0NBVEVHT1JZX1NVQ0NFU1MiLCJmaW5kSW5kZXgiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJtZW51cyIsImNhcnQiLCJ2IiwiZmlsdGVyZWRQcm9kdWN0cyIsImZpbHRlciIsImluZGV4T2YiLCJ0ZXh0IiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCIsInIiLCJDYXRlZ29yeSIsImlzQWRkaW5nRmlsZXMiLCJpc0xvYWRpbmdQcm9kdWN0cyIsImlzU2VsZWN0aW5nUHJvZHVjdCIsInNlbGVjdGluZ1Byb2R1Y3RFcnJvciIsIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1MiLCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFIiwiU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCIsIlNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJFRElUX1BST0RVQ1RfU1VDQ0VTUyIsIkVESVRfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVCIsIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1MiLCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFIiwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QiLCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVCIsIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTIiwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfUkVRVUVTVCIsIkFERF9DQVRFR09SWV9TVUNDRVNTIiwiQUREX0NBVEVHT1JZX0ZBSUxVUkUiLCJFRElUX0NBVEVHT1JZX1JFUVVFU1QiLCJFRElUX0NBVEVHT1JZX1NVQ0NFU1MiLCJFRElUX0NBVEVHT1JZX0ZBSUxVUkUiLCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVCIsIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTIiwiREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUiLCJDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTIiwiY2hlY2tlZCIsImZpbHRlcmVkQ2F0ZWdvcmllcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLElBQWhCLEtBQXlCO0FBQy9DLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQkMsc0RBQVEsQ0FBQ0gsWUFBRCxDQUFqQzs7QUFDQSxRQUFNSSxNQUFNLEdBQUlDLENBQUQsSUFBT0gsT0FBTyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBVixDQUE3Qjs7QUFDQSxTQUFPLENBQUNBLEtBQUQsRUFB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S3ZJLEtBREw7QUFHRDtBQXZOSDtBQXlORCxDQTFORDs7QUE0TmVvRyxzRUFBZixFOzs7Ozs7Ozs7OztBQ3RSQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zaG9wL2FkbWluL3Byb2R1Y3QvYWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaG9wL2FkbWluL3Byb2R1Y3QvYWRkLmpzXCIpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIGhhbmRsZXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc2V0dGVyID0gKGUpID0+IGhhbmRsZXIoZS50YXJnZXQudmFsdWUpO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUNoZWNrZWQgPSAoaW5pdGlhbFN0YXRlID0gbnVsbCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIGhhbmRsZXJdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3Qgc2V0dGVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZXIoKHByZXYpID0+IHtcbiAgICAgIHJldHVybiAhcHJldjtcbiAgICB9KTtcbiAgfSwgW3ZhbHVlXSk7XG4gIHJldHVybiBbdmFsdWUsIHNldHRlciwgaGFuZGxlcl07XG59O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBGb3JtLFxuICBJbnB1dCxcbiAgQnV0dG9uLFxuICBVcGxvYWQsXG4gIFBhZ2VIZWFkZXIsXG4gIFNwYWNlLFxuICBDYXJkLFxuICBTZWxlY3QsXG59IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0dlbmVyYWx1aS9DdXN0b21Ib29rcyc7XG5pbXBvcnQgSW1nQ3JvcCBmcm9tICdhbnRkLWltZy1jcm9wJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFERF9QUk9EVUNUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1Y2Vycy9tZW51JztcbmltcG9ydCB7IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QgfSBmcm9tICcuLi8uLi8uLi8uLi9yZWR1Y2Vycy9zaG9wJztcbmltcG9ydCB7XG4gIEdpZnRPdXRsaW5lZCxcbiAgRG9sbGFyT3V0bGluZWQsXG4gIFByb2ZpbGVPdXRsaW5lZCxcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHVjZXJzL2FkbWluJztcblxuY29uc3QgUmVnaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHNlc3Npb24sIGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6ICdhZG1pbicgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXNlc3Npb24gfHwgaXNMb2dnZWRJbiA9PT0gZmFsc2UgfHwgc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UpXG4gICAgcm91dGVyLnB1c2goJy8nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgU2hvcElkOiBzZXNzaW9uLlNob3BzWzBdLmlkIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3RpdGxlLCBvbkNoYW5nZVRpdGxlXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtwcmljZSwgb25DaGFuZ2VQcmljZV0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIG9uQ2hhbmdlRGVjcmlwdGlvbl0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbZmlsZUxpc3QsIHNldEZpbGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZpbGVFcnJvciwgc2V0RmlsZUVycm9yXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb25JbWFnZXNDaGFuZ2UgPSAoeyBmaWxlTGlzdDogbmV3RmlsZUxpc3QgfSkgPT4ge1xuICAgIHNldEZpbGVMaXN0KG5ld0ZpbGVMaXN0KTtcbiAgICBzZXRGaWxlRXJyb3IoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJldmlldyA9IGFzeW5jIChmaWxlKSA9PiB7XG4gICAgbGV0IHNyYyA9IGZpbGUudXJsO1xuICAgIGlmICghc3JjKSB7XG4gICAgICBzcmMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICBjb25zdCBpbWdXaW5kb3cgPSB3aW5kb3cub3BlbihzcmMpO1xuICAgIGltZ1dpbmRvdy5kb2N1bWVudC53cml0ZShpbWFnZS5vdXRlckhUTUwpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldENhdGVnb3J5KGUpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCd0aXRsZScsIHRpdGxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3ByaWNlJywgcHJpY2UpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbik7XG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoeyBvcmlnaW5GaWxlT2JqIH0pID0+IHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXMnLCBvcmlnaW5GaWxlT2JqKTtcbiAgICB9KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ1VzZXJJZCcsIHNlc3Npb24uaWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCgnQ2F0ZWdvcnlJZCcsIGNhdGVnb3J5KTtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG4gICAgaWYgKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQUREX1BST0RVQ1RfUkVRVUVTVCxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCgnL3Nob3AvYWRtaW4vcHJvZHVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2V0RmlsZUVycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yaWVzWzBdLmlkKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBlbmNUeXBlPXsnbXVsdGlwYXJ0L2Zvcm0tZGF0YSd9XG4gICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6ICcxMDB2aCcgfX1cbiAgICAgIGxheW91dD17J3ZlcnRpY2FsJ31cbiAgICA+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17PFBhZ2VIZWFkZXIgY2xhc3NOYW1lPXsnc2l0ZS1wYWdlLWhlYWRlcid9IHRpdGxlPVwi7IOB7ZKI65Ox66GdXCIgLz59XG4gICAgICA+XG4gICAgICAgIDxTcGFjZSBkaXJlY3Rpb249eyd2ZXJ0aWNhbCd9IHNpemU9eydtaWRkbGUnfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9eyd0aXRsZSd9XG4gICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfsg4HtkojrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqUJyB9XX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT17J3RpdGxlJ31cbiAgICAgICAgICAgICAgcHJlZml4PXs8R2lmdE91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICfqsIDqsqnsnYQg7J6F66Cl7ZW07KO87IS47JqUJyB9LFxuICAgICAgICAgICAgICB7IHBhdHRlcm46IC9eWzAtOV0vZywgbWVzc2FnZTogJ+yIq+yekOulvCDsnoXroKXtlbTso7zshLjsmpQnIH0sXG4gICAgICAgICAgICBdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICBwcmVmaXg9ezxEb2xsYXJPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT17J2xhcmdlJ31cbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQcmljZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGxhYmVsPVwi7ISk66qFXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+yDgeyEuOuCtOyXreydhCDsnoXroKXtlbTso7zshLjsmpQnIH1dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwcmVmaXg9ezxQcm9maWxlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9eydsYXJnZSd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsn7IOB7IS47IKs7ZWt7J2EIOyeheugpe2VtOyjvOyEuOyalCd9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17MjAwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VEZWNyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjYXRlZ29yeVwiIGxhYmVsPVwi7Lm07YWM6rOg66asXCI+XG4gICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUNhdGVnb3J5fSBkZWZhdWx0VmFsdWU9e2NhdGVnb3JpZXNbMF0uaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPENhcmQgdGl0bGU9e2BpbWFnZWB9PlxuICAgICAgICAgICAgPEltZ0Nyb3Agcm90YXRlIGFzcGVjdD17NCAvIDN9IG5hbWU9eydpbWFnZSd9PlxuICAgICAgICAgICAgICA8VXBsb2FkXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2XCJcbiAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkltYWdlc0NoYW5nZX1cbiAgICAgICAgICAgICAgICBvblByZXZpZXc9e29uUHJldmlld31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtmaWxlTGlzdC5sZW5ndGggPCA1ICYmICcrIFVwbG9hZCd9XG4gICAgICAgICAgICAgIDwvVXBsb2FkPlxuICAgICAgICAgICAgPC9JbWdDcm9wPlxuICAgICAgICAgICAge2ZpbGVFcnJvciAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pu2MjOydvOydhCDsl4XroZzrk5wg7ZW07KO87IS47JqUPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyB3aWR0aDogYDEwMCVgIH19PlxuICAgICAgICAgICAg7KCc7LacXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvU3BhY2U+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0O1xuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIHNob3BMaXN0OiBbXSxcbiAgb3JpZ2luYWxTaG9wTGlzdDogW10sXG4gIGlzTG9hZGluZ1VzZXJMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1VzZXJMaXN0RXJyb3I6IG51bGwsXG4gIHVzZXJMaXN0OiBbXSxcbiAgb3JpZ2luYWxVc2VyTGlzdDogW10sXG4gIGV2ZW50czogW10sXG4gIGxvYWRFdmVudHNFcnJvcjogbnVsbCxcbiAgaXNMb2FkaW5nRXZlbnRzOiBmYWxzZSxcbiAgcGFnZUluZm86IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9SRVFVRVNUID0gJ0xPQURfVVNFUkxJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9TVUNDRVNTID0gJ0xPQURfVVNFUkxJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSTElTVF9GQUlMVVJFID0gJ0xPQURfVVNFUkxJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSAnTE9BRF9TSE9QTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSAnTE9BRF9TSE9QTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX0ZBSUxVUkUgPSAnTE9BRF9TSE9QTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1JFUVVFU1QgPSAnREVMRVRFX1VTRVJfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfU1VDQ0VTUyA9ICdERUxFVEVfVVNFUl9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9GQUlMVVJFID0gJ0RFTEVURV9VU0VSX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfUkVRVUVTVCA9ICdMT0FEX0VWRU5UU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19TVUNDRVNTID0gJ0xPQURfRVZFTlRTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX0ZBSUxVUkUgPSAnTE9BRF9FVkVOVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfUkVRVUVTVCA9ICdBRERfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1NVQ0NFU1MgPSAnQUREX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9GQUlMVVJFID0gJ0FERF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfUkVRVUVTVCA9ICdFRElUX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfU1VDQ0VTUyA9ICdFRElUX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfRVZFTlRfRkFJTFVSRSA9ICdFRElUX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1JFUVVFU1QgPSAnREVMRVRFX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9TVUNDRVNTID0gJ0RFTEVURV9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfRkFJTFVSRSA9ICdERUxFVEVfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBQQUdFX0NIQU5HRV9TVUNDRVNTID0gJ1BBR0VfQ0hBTkdFX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsVXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1VzZXJMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxTaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nU2hvcExpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBBR0VfQ0hBTkdFX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnBhZ2VJbmZvID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBwcm9kdWN0czogW10sXG4gIG9yaWdpblByb2R1Y3RzOiBbXSxcbiAgbmF2aVNpemU6IG51bGwsXG4gIFRhYmxlSWQ6IG51bGwsXG4gIGlzQWRkaW5nUHJvZHVjdDogZmFsc2UsXG4gIGlzTG9hZGluZ0NhcnQ6IGZhbHNlLFxuICBjYXRlZ29yaWVzOiBbXSxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RTX1JFUVVFU1QgPSAnTE9BRF9QUk9EVUNUU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RTX1NVQ0NFU1MgPSAnTE9BRF9QUk9EVUNUU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1BST0RVQ1RTX0ZBSUxVUkUgPSAnTE9BRF9QUk9EVUNUU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9SRVFVRVNUID0gJ0FERF9RVUFOVElUWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfU1VDQ0VTUyA9ICdBRERfUVVBTlRJVFlfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX0ZBSUxVUkUgPSAnQUREX1FVQU5USVRZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QgPSAnU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTID0gJ1NVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfUVVBTlRJVFlfRkFJTFVSRSA9ICdTVUJTVFJBQ1RfUVVBTlRJVFlfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9SRVFVRVNUID0gJ0FERF9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSAnQUREX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfRkFJTFVSRSA9ICdBRERfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9SRVFVRVNUID0gJ0xPQURfQ0FSVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfU1VDQ0VTUyA9ICdMT0FEX0NBUlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX0ZBSUxVUkUgPSAnTE9BRF9DQVJUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVCA9ICdJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUJztcblxuZXhwb3J0IGNvbnN0IEdFVF9OQVZJQkFSX1NJWkUgPSAnR0VUX05BVklCQVJfU0laRSc7XG5cbmV4cG9ydCBjb25zdCBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTID0gJ1NFQVJDSF9QUk9EVUNUX1NVQ0NFU1MnO1xuXG5leHBvcnQgY29uc3QgU0VMRUNUX0NBVEVHT1JZX1NVQ0NFU1MgPSAnU0VMRUNUX0NBVEVHT1JZX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgR0VUX05BVklCQVJfU0laRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG5hdmlTaXplOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfUVVBTlRJVFlfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPCAxMDAgPyAocXVhbnRpdHkgKz0gMSkgOiA5OTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNVQlNUUkFDVF9RVUFOVElUWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleChcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA+IDEgPyAocXVhbnRpdHkgLT0gMSkgOiAxO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUFJPRFVDVFNfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmRhdGFbMF0uVGFibGVJZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXS5tZW51cyxcbiAgICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0ubWVudXMsXG4gICAgICAgICAgVGFibGVJZDogYWN0aW9uLmRhdGFbMF0uVGFibGVJZCxcbiAgICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLmRhdGFbMV0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IFsuLi5zdGF0ZS5jYXJ0LCBhY3Rpb24uZGF0YV0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIElOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9kdWN0LnRpdGxlLmluZGV4T2YoYWN0aW9uLmRhdGEudGV4dCkgPiAtMTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogWy4uLnN0YXRlLm9yaWdpblByb2R1Y3RzXSB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24uaWQgPT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnRlZFByb2R1Y3QgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHYpID0+IHtcbiAgICAgICAgICByZXR1cm4gdi5EaXNjb3VudCAhPT0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZGlzY291bnRlZFByb2R1Y3QgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChyKSA9PiByLkNhdGVnb3J5LmlkID09IGFjdGlvbi5pZFxuICAgICAgKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3A6IG51bGwsXG4gIHByb2R1Y3RzOiBbXSxcbiAgb3JpZ2luUHJvZHVjdHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgcHJvZHVjdDogbnVsbCxcbiAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSAnQUREX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfU1VDQ0VTUyA9ICdBRERfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gJ0FERF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCA9ICdBRE1JTl9QUk9EVUNUU19SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19TVUNDRVNTID0gJ0FETUlOX1BST0RVQ1RTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUgPSAnQURNSU5fUFJPRFVDVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUID0gJ1NFTEVDVF9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MgPSAnU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSA9ICdTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9SRVFVRVNUID0gJ0VESVRfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfU1VDQ0VTUyA9ICdFRElUX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX0ZBSUxVUkUgPSAnRURJVF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfUkVRVUVTVCA9ICdERUxFVEVfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9TVUNDRVNTID0gJ0RFTEVURV9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUgPSAnREVMRVRFX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19QUk9EVUNUX1NVQ0NFU1MgPSAnQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTJztcblxuZXhwb3J0IGNvbnN0IENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTID0gJ0NIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTJztcblxuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCA9ICdESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyA9ICdESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSA9ICdESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QgPSAnREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9TVUNDRVNTID0gJ0RFTEVURV9ESVNDT1VOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfRkFJTFVSRSA9ICdERUxFVEVfRElTQ09VTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfUkVRVUVTVCA9ICdBRERfQ0FURUdPUllfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1NVQ0NFU1MgPSAnQUREX0NBVEVHT1JZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9GQUlMVVJFID0gJ0FERF9DQVRFR09SWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfUkVRVUVTVCA9ICdFRElUX0NBVEVHT1JZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfU1VDQ0VTUyA9ICdFRElUX0NBVEVHT1JZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfRkFJTFVSRSA9ICdFRElUX0NBVEVHT1JZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgPSAnREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9TVUNDRVNTID0gJ0RFTEVURV9DQVRFR09SWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfRkFJTFVSRSA9ICdERUxFVEVfQ0FURUdPUllfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTID0gJ0NBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MnO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFERF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IHRydWUsIC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSwgLi4uc3RhdGUsIHByb2R1Y3Q6IGFjdGlvbi5kYXRhIH07XG4gICAgfVxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlbGVjdGluZ1Byb2R1Y3RFcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cywgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT0gYWN0aW9uLmRhdGEpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElTQ09VTlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF1cbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uZGF0YVsxXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgY2hlY2tlZCA9IHByb2R1Y3QuY2hlY2tlZDtcbiAgICAgIGNoZWNrZWQgPSBjaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBjaGVja2VkIH07XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzO1xuICAgICAgcHJvZHVjdHMubWFwKCh2KSA9PiAodi5jaGVja2VkID0gYWN0aW9uLmNoZWNrZWQpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID1cbiAgICAgICAgYWN0aW9uLmRhdGFbMV0gIT09IDBcbiAgICAgICAgICA/IGFjdGlvbi5kYXRhWzBdLmZpbHRlcigodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YVsxXSlcbiAgICAgICAgICA6IGFjdGlvbi5kYXRhWzBdO1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGFbMF0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXM6IFsuLi5zdGF0ZS5jYXRlZ29yaWVzLCBhY3Rpb24uZGF0YV0gfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLmNhdGVnb3JpZXMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbLi4uc3RhdGUuY2F0ZWdvcmllc107XG4gICAgICBjYXRlZ29yaWVzW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3JpZXMgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IHN0YXRlLmNhdGVnb3JpZXMuZmlsdGVyKFxuICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgKHYpID0+IHYuQ2F0ZWdvcnkuaWQgIT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2F0ZWdvcmllczogZmlsdGVyZWRDYXRlZ29yaWVzLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIENBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uaWQgPT0gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IHN0YXRlLm9yaWdpblByb2R1Y3RzIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgICAodikgPT4gdi5EaXNjb3VudCAhPT0gbnVsbFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGRpc2NvdW50ZWRQcm9kdWN0IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5pZFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkLWltZy1jcm9wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=