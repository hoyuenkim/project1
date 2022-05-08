module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/admin/[ShopId]/product/add.js");
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

/***/ "./pages/shop/admin/[ShopId]/product/add.js":
/*!**************************************************!*\
  !*** ./pages/shop/admin/[ShopId]/product/add.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd-img-crop */ "antd-img-crop");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_img_crop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../reducers/menu */ "./reducers/menu.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













const Regist = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
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
      data: "admin"
    });
  }, []);
  if (!session || isLoggedIn === false || session.division === false) router.push("/");
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
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    fileList.forEach(({
      originFileObj
    }) => {
      formData.append("files", originFileObj);
    });
    formData.append("ShopId", query.ShopId);
    formData.append("UserId", session.id);
    formData.append("CategoryId", category);

    if (fileList.length > 0) {
      dispatch({
        type: _reducers_menu__WEBPACK_IMPORTED_MODULE_5__["ADD_PRODUCT_REQUEST"],
        formData
      });
      return router.push(`/shop/admin/${query.ShopId}/product`);
    } else {
      return setFileError(true);
    }
  };

  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(categories[0].id);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    encType: "multipart/form-data",
    onFinish: onFinish,
    style: {
      height: "100vh"
    },
    layout: "vertical",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
        className: "site-page-header",
        title: "\uC0C1\uD488\uB4F1\uB85D"
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
        direction: "vertical",
        size: "middle",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "title",
          rules: [{
            required: true,
            message: "상품명을 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            name: "title",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["GiftOutlined"], {}),
            size: "large",
            onChange: onChangeTitle
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "price",
          rules: [{
            required: true,
            message: "가격을 입력해주세요"
          }, {
            pattern: /^[0-9]/g,
            message: "숫자를 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
            name: "price",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["DollarOutlined"], {}),
            size: "large",
            value: price,
            onChange: onChangePrice
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
          name: "description",
          label: "\uC124\uBA85",
          rules: [{
            required: true,
            message: "상세내역을 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea, {
            name: "description",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["ProfileOutlined"], {}),
            size: "large",
            placeholder: "상세사항을 입력해주세요",
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
            name: "image",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
              action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
              listType: "picture-card",
              fileList: fileList,
              onChange: onImagesChange,
              onPreview: onPreview,
              children: fileList.length < 5 && "+ Upload"
            })
          }), fileError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
            style: {
              color: "red"
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
          shopCoordinates: action.data.list,
          productsNear: action.data.products
        });
      }

    case NEAR_ADD_QUANTITY_REQUEST:
      {
        console.log(state.productsNear);
        const index = state.productsNear.findIndex(near => near.id == action.data.id);
        console.log(index);
        const product = state.productsNear[index];
        let quantity = product.quantity;
        quantity < 100 ? quantity += 1 : 99;
        const productsNear = [...state.productsNear];
        productsNear[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          productsNear
        });
      }

    case NEAR_SUBSTRACT_QUANTITY_REQUEST:
      {
        const index = state.productsNear.findIndex(near => near.id === action.data.id);
        const product = state.productsNear[index];
        let quantity = product.quantity;
        quantity > 1 ? quantity -= 1 : 1;
        const productsNear = [...state.productsNear];
        productsNear[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          productsNear
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC1pbWctY3JvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiaGFuZGxlciIsInVzZVN0YXRlIiwic2V0dGVyIiwiZSIsInRhcmdldCIsInVzZUNoZWNrZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJSZWdpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzZXNzaW9uIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY2F0ZWdvcmllcyIsInNob3AiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJkaXZpc2lvbiIsInB1c2giLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiU2hvcElkIiwiU2hvcHMiLCJpZCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInByaWNlIiwib25DaGFuZ2VQcmljZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2VEZWNyaXB0aW9uIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsImZpbGVFcnJvciIsInNldEZpbGVFcnJvciIsIm9uSW1hZ2VzQ2hhbmdlIiwibmV3RmlsZUxpc3QiLCJvblByZXZpZXciLCJmaWxlIiwic3JjIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9yaWdpbkZpbGVPYmoiLCJvbmxvYWQiLCJyZXN1bHQiLCJpbWFnZSIsIkltYWdlIiwiaW1nV2luZG93Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50Iiwid3JpdGUiLCJvdXRlckhUTUwiLCJvbkNoYW5nZUNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInNldENhdGVnb3J5Iiwib25GaW5pc2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwibGVuZ3RoIiwiQUREX1BST0RVQ1RfUkVRVUVTVCIsImhlaWdodCIsIndpZHRoIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwicGF0dGVybiIsIm1hcCIsImluZGV4IiwibmFtZSIsImNvbG9yIiwiaXNMb2FkaW5nU2hvcExpc3QiLCJsb2FkaW5nU2hvcExpc3RFcnJvciIsInNob3BMaXN0Iiwib3JpZ2luYWxTaG9wTGlzdCIsImlzTG9hZGluZ1VzZXJMaXN0IiwibG9hZGluZ1VzZXJMaXN0RXJyb3IiLCJ1c2VyTGlzdCIsIm9yaWdpbmFsVXNlckxpc3QiLCJldmVudHMiLCJsb2FkRXZlbnRzRXJyb3IiLCJpc0xvYWRpbmdFdmVudHMiLCJwYWdlSW5mbyIsIkxPQURfVVNFUkxJU1RfUkVRVUVTVCIsIkxPQURfVVNFUkxJU1RfU1VDQ0VTUyIsIkxPQURfVVNFUkxJU1RfRkFJTFVSRSIsIkxPQURfU0hPUExJU1RfUkVRVUVTVCIsIkxPQURfU0hPUExJU1RfU1VDQ0VTUyIsIkxPQURfU0hPUExJU1RfRkFJTFVSRSIsIkRFTEVURV9VU0VSX1JFUVVFU1QiLCJERUxFVEVfVVNFUl9TVUNDRVNTIiwiREVMRVRFX1VTRVJfRkFJTFVSRSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJMT0FEX0VWRU5UU19TVUNDRVNTIiwiTE9BRF9FVkVOVFNfRkFJTFVSRSIsIkFERF9FVkVOVF9SRVFVRVNUIiwiQUREX0VWRU5UX1NVQ0NFU1MiLCJBRERfRVZFTlRfRkFJTFVSRSIsIkVESVRfRVZFTlRfUkVRVUVTVCIsIkVESVRfRVZFTlRfU1VDQ0VTUyIsIkVESVRfRVZFTlRfRkFJTFVSRSIsIkRFTEVURV9FVkVOVF9SRVFVRVNUIiwiREVMRVRFX0VWRU5UX1NVQ0NFU1MiLCJERUxFVEVfRVZFTlRfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInByb2R1Y3RzIiwib3JpZ2luUHJvZHVjdHMiLCJuYXZpU2l6ZSIsIlRhYmxlSWQiLCJpc0FkZGluZ1Byb2R1Y3QiLCJpc0xvYWRpbmdDYXJ0IiwiTE9BRF9QUk9EVUNUU19SRVFVRVNUIiwiTE9BRF9QUk9EVUNUU19TVUNDRVNTIiwiTE9BRF9QUk9EVUNUU19GQUlMVVJFIiwiQUREX1FVQU5USVRZX1JFUVVFU1QiLCJBRERfUVVBTlRJVFlfU1VDQ0VTUyIsIkFERF9RVUFOVElUWV9GQUlMVVJFIiwiU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyIsIlNVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFIiwiQUREX1BST0RVQ1RfU1VDQ0VTUyIsIkFERF9QUk9EVUNUX0ZBSUxVUkUiLCJMT0FEX0NBUlRfUkVRVUVTVCIsIkxPQURfQ0FSVF9TVUNDRVNTIiwiTE9BRF9DQVJUX0ZBSUxVUkUiLCJJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUIiwiR0VUX05BVklCQVJfU0laRSIsIlNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyIsImZpbmRJbmRleCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm1lbnVzIiwiY2FydCIsInYiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInRleHQiLCJkaXNjb3VudGVkUHJvZHVjdCIsIkRpc2NvdW50IiwiciIsIkNhdGVnb3J5IiwiaXNBZGRpbmdGaWxlcyIsImlzTG9hZGluZ1Byb2R1Y3RzIiwiaXNTZWxlY3RpbmdQcm9kdWN0Iiwic2VsZWN0aW5nUHJvZHVjdEVycm9yIiwiaXNBZGRpbmdTaG9wIiwidXNlckNvb3JkaW5hdGVzIiwidW5kZWZpbmVkIiwic2hvcENvb3JkaW5hdGVzIiwicHJvZHVjdHNOZWFyIiwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyIsIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJFRElUX1BST0RVQ1RfUkVRVUVTVCIsIkVESVRfUFJPRFVDVF9TVUNDRVNTIiwiRURJVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyIsIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkUiLCJDSEVDS19QUk9EVUNUX1NVQ0NFU1MiLCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCIsIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUIiwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MiLCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRSIsIkFERF9DQVRFR09SWV9SRVFVRVNUIiwiQUREX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUyIsIlNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUyIsIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QiLCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIiwiY2hlY2tlZCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsImxvZGluZ1Nob3BMaXN0RXJyb3IiLCJsaXN0IiwibmVhciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtB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RXVKO0FBRkY7QUFJRDs7QUFFRCxTQUFLaUMsK0JBQUw7QUFBc0M7QUFDcEMsY0FBTXhILEtBQUssR0FBR2hFLEtBQUssQ0FBQ3VKLFlBQU4sQ0FBbUJ0QixTQUFuQixDQUE4QjRELElBQUQsSUFBVUEsSUFBSSxDQUFDaEwsRUFBTCxLQUFZd0YsTUFBTSxDQUFDOUYsSUFBUCxDQUFZTSxFQUEvRCxDQUFkO0FBQ0EsY0FBTXFILE9BQU8sR0FBR2xJLEtBQUssQ0FBQ3VKLFlBQU4sQ0FBbUJ2RixLQUFuQixDQUFoQjtBQUNBLFlBQUltRSxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBdkI7QUFDQUEsZ0JBQVEsR0FBRyxDQUFYLEdBQWdCQSxRQUFRLElBQUksQ0FBNUIsR0FBaUMsQ0FBakM7QUFDQSxjQUFNb0IsWUFBWSxHQUFHLENBQUMsR0FBR3ZKLEtBQUssQ0FBQ3VKLFlBQVYsQ0FBckI7QUFDQUEsb0JBQVksQ0FBQ3ZGLEtBQUQsQ0FBWixtQ0FBMkJrRSxPQUEzQjtBQUFvQ0M7QUFBcEM7QUFDQSwrQ0FDS25JLEtBREw7QUFFRXVKO0FBRkY7QUFJRDs7QUFFRDtBQUFTO0FBQ1AsaUNBQ0t2SixLQURMO0FBR0Q7QUFuUUg7QUFxUUQsQ0F0UUQ7O0FBd1Flb0csc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuVkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2FkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2FkZC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHVzZUlucHV0ID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IChlKSA9PiBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDaGVja2VkID0gKGluaXRpYWxTdGF0ZSA9IG51bGwpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBoYW5kbGVyXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHNldHRlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBoYW5kbGVyKChwcmV2KSA9PiB7XG4gICAgICByZXR1cm4gIXByZXY7XG4gICAgfSk7XG4gIH0sIFt2YWx1ZV0pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXR0ZXIsIGhhbmRsZXJdO1xufTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBVcGxvYWQsIFBhZ2VIZWFkZXIsIFNwYWNlLCBDYXJkLCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3NcIjtcbmltcG9ydCBJbWdDcm9wIGZyb20gXCJhbnRkLWltZy1jcm9wXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFERF9QUk9EVUNUX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvbWVudVwiO1xuaW1wb3J0IHsgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgeyBHaWZ0T3V0bGluZWQsIERvbGxhck91dGxpbmVkLCBQcm9maWxlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1Y2Vycy9hZG1pblwiO1xuXG5jb25zdCBSZWdpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgc2Vzc2lvbiwgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHRV9DSEFOR0VfU1VDQ0VTUywgZGF0YTogXCJhZG1pblwiIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFzZXNzaW9uIHx8IGlzTG9nZ2VkSW4gPT09IGZhbHNlIHx8IHNlc3Npb24uZGl2aXNpb24gPT09IGZhbHNlKSByb3V0ZXIucHVzaChcIi9cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsIFNob3BJZDogc2Vzc2lvbi5TaG9wc1swXS5pZCB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcHJpY2UsIG9uQ2hhbmdlUHJpY2VdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBvbkNoYW5nZURlY3JpcHRpb25dID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmaWxlRXJyb3IsIHNldEZpbGVFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uSW1hZ2VzQ2hhbmdlID0gKHsgZmlsZUxpc3Q6IG5ld0ZpbGVMaXN0IH0pID0+IHtcbiAgICBzZXRGaWxlTGlzdChuZXdGaWxlTGlzdCk7XG4gICAgc2V0RmlsZUVycm9yKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblByZXZpZXcgPSBhc3luYyAoZmlsZSkgPT4ge1xuICAgIGxldCBzcmMgPSBmaWxlLnVybDtcbiAgICBpZiAoIXNyYykge1xuICAgICAgc3JjID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZS5vcmlnaW5GaWxlT2JqKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgY29uc3QgaW1nV2luZG93ID0gd2luZG93Lm9wZW4oc3JjKTtcbiAgICBpbWdXaW5kb3cuZG9jdW1lbnQud3JpdGUoaW1hZ2Uub3V0ZXJIVE1MKTtcbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZUNhdGVnb3J5ID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBzZXRDYXRlZ29yeShlKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcmljZVwiLCBwcmljZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24pO1xuICAgIGZpbGVMaXN0LmZvckVhY2goKHsgb3JpZ2luRmlsZU9iaiB9KSA9PiB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlc1wiLCBvcmlnaW5GaWxlT2JqKTtcbiAgICB9KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJTaG9wSWRcIiwgcXVlcnkuU2hvcElkKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJVc2VySWRcIiwgc2Vzc2lvbi5pZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiQ2F0ZWdvcnlJZFwiLCBjYXRlZ29yeSk7XG4gICAgaWYgKGZpbGVMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQUREX1BST0RVQ1RfUkVRVUVTVCxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3RgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNldEZpbGVFcnJvcih0cnVlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoY2F0ZWdvcmllc1swXS5pZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgZW5jVHlwZT17XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJ9XG4gICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fVxuICAgICAgbGF5b3V0PXtcInZlcnRpY2FsXCJ9XG4gICAgPlxuICAgICAgPENhcmQgdGl0bGU9ezxQYWdlSGVhZGVyIGNsYXNzTmFtZT17XCJzaXRlLXBhZ2UtaGVhZGVyXCJ9IHRpdGxlPVwi7IOB7ZKI65Ox66GdXCIgLz59PlxuICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcInZlcnRpY2FsXCJ9IHNpemU9e1wibWlkZGxlXCJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9e1widGl0bGVcIn0gcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuyDge2SiOuqheydhCDsnoXroKXtlbTso7zshLjsmpRcIiB9XX0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT17XCJ0aXRsZVwifVxuICAgICAgICAgICAgICBwcmVmaXg9ezxHaWZ0T3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICBydWxlcz17W1xuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIuqwgOqyqeydhCDsnoXroKXtlbTso7zshLjsmpRcIiB9LFxuICAgICAgICAgICAgICB7IHBhdHRlcm46IC9eWzAtOV0vZywgbWVzc2FnZTogXCLsiKvsnpDrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIgfSxcbiAgICAgICAgICAgIF19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgIHByZWZpeD17PERvbGxhck91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICBzaXplPXtcImxhcmdlXCJ9XG4gICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUHJpY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxGb3JtLkl0ZW1cbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBsYWJlbD1cIuyEpOuqhVwiXG4gICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7IOB7IS464K07Jet7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH1dfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwcmVmaXg9ezxQcm9maWxlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wi7IOB7IS47IKs7ZWt7J2EIOyeheugpe2VtOyjvOyEuOyalFwifVxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwMH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRGVjcmlwdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIuy5tO2FjOqzoOumrFwiPlxuICAgICAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17b25DaGFuZ2VDYXRlZ29yeX0gZGVmYXVsdFZhbHVlPXtjYXRlZ29yaWVzWzBdLmlkfT5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9TZWxlY3QuT3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgICAgIDxDYXJkIHRpdGxlPXtgaW1hZ2VgfT5cbiAgICAgICAgICAgIDxJbWdDcm9wIHJvdGF0ZSBhc3BlY3Q9ezQgLyAzfSBuYW1lPXtcImltYWdlXCJ9PlxuICAgICAgICAgICAgICA8VXBsb2FkXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2XCJcbiAgICAgICAgICAgICAgICBsaXN0VHlwZT1cInBpY3R1cmUtY2FyZFwiXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkltYWdlc0NoYW5nZX1cbiAgICAgICAgICAgICAgICBvblByZXZpZXc9e29uUHJldmlld31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtmaWxlTGlzdC5sZW5ndGggPCA1ICYmIFwiKyBVcGxvYWRcIn1cbiAgICAgICAgICAgICAgPC9VcGxvYWQ+XG4gICAgICAgICAgICA8L0ltZ0Nyb3A+XG4gICAgICAgICAgICB7ZmlsZUVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+7YyM7J287J2EIOyXheuhnOuTnCDtlbTso7zshLjsmpQ8L2Rpdj59XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIHN0eWxlPXt7IHdpZHRoOiBgMTAwJWAgfX0+XG4gICAgICAgICAgICDsoJzstpxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TcGFjZT5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3Q7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLFxuICBsb2FkaW5nU2hvcExpc3RFcnJvcjogbnVsbCxcbiAgc2hvcExpc3Q6IFtdLFxuICBvcmlnaW5hbFNob3BMaXN0OiBbXSxcbiAgaXNMb2FkaW5nVXNlckxpc3Q6IGZhbHNlLFxuICBsb2FkaW5nVXNlckxpc3RFcnJvcjogbnVsbCxcbiAgdXNlckxpc3Q6IFtdLFxuICBvcmlnaW5hbFVzZXJMaXN0OiBbXSxcbiAgZXZlbnRzOiBbXSxcbiAgbG9hZEV2ZW50c0Vycm9yOiBudWxsLFxuICBpc0xvYWRpbmdFdmVudHM6IGZhbHNlLFxuICBwYWdlSW5mbzogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1JFUVVFU1QgPSAnTE9BRF9VU0VSTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1NVQ0NFU1MgPSAnTE9BRF9VU0VSTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX0ZBSUxVUkUgPSAnTE9BRF9VU0VSTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfUkVRVUVTVCA9ICdMT0FEX1NIT1BMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9ICdMT0FEX1NIT1BMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9ICdMT0FEX1NIT1BMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUkVRVUVTVCA9ICdERUxFVEVfVVNFUl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0ZBSUxVUkUgPSAnREVMRVRFX1VTRVJfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19SRVFVRVNUID0gJ0xPQURfRVZFTlRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1NVQ0NFU1MgPSAnTE9BRF9FVkVOVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfRkFJTFVSRSA9ICdMT0FEX0VWRU5UU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9SRVFVRVNUID0gJ0FERF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfU1VDQ0VTUyA9ICdBRERfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX0ZBSUxVUkUgPSAnQUREX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9SRVFVRVNUID0gJ0VESVRfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9TVUNDRVNTID0gJ0VESVRfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9GQUlMVVJFID0gJ0VESVRfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfUkVRVUVTVCA9ICdERUxFVEVfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1NVQ0NFU1MgPSAnREVMRVRFX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9GQUlMVVJFID0gJ0RFTEVURV9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgPSAnUEFHRV9DSEFOR0VfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxVc2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckxpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTaG9wTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucGFnZUluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByb2R1Y3RzOiBbXSxcbiAgb3JpZ2luUHJvZHVjdHM6IFtdLFxuICBuYXZpU2l6ZTogbnVsbCxcbiAgVGFibGVJZDogbnVsbCxcbiAgaXNBZGRpbmdQcm9kdWN0OiBmYWxzZSxcbiAgaXNMb2FkaW5nQ2FydDogZmFsc2UsXG4gIGNhdGVnb3JpZXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfUkVRVUVTVCA9ICdMT0FEX1BST0RVQ1RTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfU1VDQ0VTUyA9ICdMT0FEX1BST0RVQ1RTX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfUFJPRFVDVFNfRkFJTFVSRSA9ICdMT0FEX1BST0RVQ1RTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1JFUVVFU1QgPSAnQUREX1FVQU5USVRZX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9TVUNDRVNTID0gJ0FERF9RVUFOVElUWV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfRkFJTFVSRSA9ICdBRERfUVVBTlRJVFlfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCA9ICdTVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1MgPSAnU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFID0gJ1NVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSAnQUREX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfU1VDQ0VTUyA9ICdBRERfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gJ0FERF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1JFUVVFU1QgPSAnTE9BRF9DQVJUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9TVUNDRVNTID0gJ0xPQURfQ0FSVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfRkFJTFVSRSA9ICdMT0FEX0NBUlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUID0gJ0lOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1QnO1xuXG5leHBvcnQgY29uc3QgR0VUX05BVklCQVJfU0laRSA9ICdHRVRfTkFWSUJBUl9TSVpFJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MgPSAnU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyA9ICdTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBHRVRfTkFWSUJBUl9TSVpFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbmF2aVNpemU6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9RVUFOVElUWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleChcbiAgICAgICAgKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5kYXRhLmlkXG4gICAgICApO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBxdWFudGl0eSA9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICBxdWFudGl0eSA8IDEwMCA/IChxdWFudGl0eSArPSAxKSA6IDk5O1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eSB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU1VCU1RSQUNUX1FVQU5USVRZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9QUk9EVUNUU19SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uZGF0YVswXS5UYWJsZUlkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLm1lbnVzLFxuICAgICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXS5tZW51cyxcbiAgICAgICAgICBUYWJsZUlkOiBhY3Rpb24uZGF0YVswXS5UYWJsZUlkLFxuICAgICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YVsxXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIGFjdGlvbi5kYXRhXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVDoge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBbLi4uc3RhdGUucHJvZHVjdHNdO1xuICAgICAgcHJvZHVjdHNbaW5kZXhdID0geyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFQVJDSF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QudGl0bGUuaW5kZXhPZihhY3Rpb24uZGF0YS50ZXh0KSA+IC0xO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmlkID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBbLi4uc3RhdGUub3JpZ2luUHJvZHVjdHNdIH07XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbi5pZCA9PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNjb3VudGVkUHJvZHVjdCA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4ge1xuICAgICAgICAgIHJldHVybiB2LkRpc2NvdW50ICE9PSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfVxuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcihcbiAgICAgICAgKHIpID0+IHIuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmlkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvcDogbnVsbCxcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwcm9kdWN0OiBudWxsLFxuICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIGlzQWRkaW5nU2hvcDogZmFsc2UsXG4gIHVzZXJDb29yZGluYXRlczogdW5kZWZpbmVkLFxuICBzaG9wQ29vcmRpbmF0ZXM6IHVuZGVmaW5lZCxcbiAgcHJvZHVjdHNOZWFyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9IFwiQUREX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkFERF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gXCJBRERfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19SRVFVRVNUID0gXCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUgPSBcIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QgPSBcIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTID0gXCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSA9IFwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkVESVRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkVESVRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkVESVRfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9SRVFVRVNUID0gXCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyA9IFwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BST0RVQ1RfU1VDQ0VTUyA9IFwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCA9IFwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTID0gXCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QgPSBcIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MgPSBcIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUgPSBcIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfUkVRVUVTVCA9IFwiQUREX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQUREX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfRkFJTFVSRSA9IFwiQUREX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfUkVRVUVTVCA9IFwiRURJVF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9TVUNDRVNTID0gXCJFRElUX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkVESVRfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkRFTEVURV9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTID0gXCJDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSBcIkxPQURfU0hPUExJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9IFwiTE9BRF9TSE9QTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gXCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9DT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QgPSBcIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gXCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogdHJ1ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLCAuLi5zdGF0ZSwgcHJvZHVjdDogYWN0aW9uLmRhdGEgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5pZCAhPSBhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSA9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5kYXRhWzFdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBjaGVja2VkID0gcHJvZHVjdC5jaGVja2VkO1xuICAgICAgY2hlY2tlZCA9IGNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIGNoZWNrZWQgfTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICBwcm9kdWN0cy5tYXAoKHYpID0+ICh2LmNoZWNrZWQgPSBhY3Rpb24uY2hlY2tlZCkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSAhPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhWzFdKVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF07XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogWy4uLnN0YXRlLmNhdGVnb3JpZXMsIGFjdGlvbi5kYXRhXSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsuLi5zdGF0ZS5jYXRlZ29yaWVzXTtcbiAgICAgIGNhdGVnb3JpZXNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllcyB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogc3RhdGUub3JpZ2luUHJvZHVjdHMgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkRpc2NvdW50ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLCBsb2RpbmdTaG9wTGlzdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9DT09SRElOQVRFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJDb29yZGluYXRlczogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuXG4gICAgY2FzZSBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wQ29vcmRpbmF0ZXM6IGFjdGlvbi5kYXRhLmxpc3QsIHByb2R1Y3RzTmVhcjogYWN0aW9uLmRhdGEucHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnByb2R1Y3RzTmVhcik7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzTmVhcltpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPCAxMDAgPyAocXVhbnRpdHkgKz0gMSkgOiA5OTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzTmVhciA9IFsuLi5zdGF0ZS5wcm9kdWN0c05lYXJdO1xuICAgICAgcHJvZHVjdHNOZWFyW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTmVhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c05lYXJbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0c05lYXIgPSBbLi4uc3RhdGUucHJvZHVjdHNOZWFyXTtcbiAgICAgIHByb2R1Y3RzTmVhcltpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNOZWFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkLWltZy1jcm9wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=