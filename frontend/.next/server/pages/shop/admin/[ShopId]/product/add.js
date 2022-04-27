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
    console.log(formData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvQ3VzdG9tSG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tZW51LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC1pbWctY3JvcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJ1c2VJbnB1dCIsImluaXRpYWxTdGF0ZSIsInZhbHVlIiwiaGFuZGxlciIsInVzZVN0YXRlIiwic2V0dGVyIiwiZSIsInRhcmdldCIsInVzZUNoZWNrZWQiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJSZWdpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzZXNzaW9uIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY2F0ZWdvcmllcyIsInNob3AiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJkaXZpc2lvbiIsInB1c2giLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiU2hvcElkIiwiU2hvcHMiLCJpZCIsInRpdGxlIiwib25DaGFuZ2VUaXRsZSIsInByaWNlIiwib25DaGFuZ2VQcmljZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2VEZWNyaXB0aW9uIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsImZpbGVFcnJvciIsInNldEZpbGVFcnJvciIsIm9uSW1hZ2VzQ2hhbmdlIiwibmV3RmlsZUxpc3QiLCJvblByZXZpZXciLCJmaWxlIiwic3JjIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9yaWdpbkZpbGVPYmoiLCJvbmxvYWQiLCJyZXN1bHQiLCJpbWFnZSIsIkltYWdlIiwiaW1nV2luZG93Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50Iiwid3JpdGUiLCJvdXRlckhUTUwiLCJvbkNoYW5nZUNhdGVnb3J5IiwiY29uc29sZSIsImxvZyIsInNldENhdGVnb3J5Iiwib25GaW5pc2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwibGVuZ3RoIiwiQUREX1BST0RVQ1RfUkVRVUVTVCIsImhlaWdodCIsIndpZHRoIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwicGF0dGVybiIsIm1hcCIsImluZGV4IiwibmFtZSIsImNvbG9yIiwiaXNMb2FkaW5nU2hvcExpc3QiLCJsb2FkaW5nU2hvcExpc3RFcnJvciIsInNob3BMaXN0Iiwib3JpZ2luYWxTaG9wTGlzdCIsImlzTG9hZGluZ1VzZXJMaXN0IiwibG9hZGluZ1VzZXJMaXN0RXJyb3IiLCJ1c2VyTGlzdCIsIm9yaWdpbmFsVXNlckxpc3QiLCJldmVudHMiLCJsb2FkRXZlbnRzRXJyb3IiLCJpc0xvYWRpbmdFdmVudHMiLCJwYWdlSW5mbyIsIkxPQURfVVNFUkxJU1RfUkVRVUVTVCIsIkxPQURfVVNFUkxJU1RfU1VDQ0VTUyIsIkxPQURfVVNFUkxJU1RfRkFJTFVSRSIsIkxPQURfU0hPUExJU1RfUkVRVUVTVCIsIkxPQURfU0hPUExJU1RfU1VDQ0VTUyIsIkxPQURfU0hPUExJU1RfRkFJTFVSRSIsIkRFTEVURV9VU0VSX1JFUVVFU1QiLCJERUxFVEVfVVNFUl9TVUNDRVNTIiwiREVMRVRFX1VTRVJfRkFJTFVSRSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJMT0FEX0VWRU5UU19TVUNDRVNTIiwiTE9BRF9FVkVOVFNfRkFJTFVSRSIsIkFERF9FVkVOVF9SRVFVRVNUIiwiQUREX0VWRU5UX1NVQ0NFU1MiLCJBRERfRVZFTlRfRkFJTFVSRSIsIkVESVRfRVZFTlRfUkVRVUVTVCIsIkVESVRfRVZFTlRfU1VDQ0VTUyIsIkVESVRfRVZFTlRfRkFJTFVSRSIsIkRFTEVURV9FVkVOVF9SRVFVRVNUIiwiREVMRVRFX0VWRU5UX1NVQ0NFU1MiLCJERUxFVEVfRVZFTlRfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJlcnJvciIsInByb2R1Y3RzIiwib3JpZ2luUHJvZHVjdHMiLCJuYXZpU2l6ZSIsIlRhYmxlSWQiLCJpc0FkZGluZ1Byb2R1Y3QiLCJpc0xvYWRpbmdDYXJ0IiwiTE9BRF9QUk9EVUNUU19SRVFVRVNUIiwiTE9BRF9QUk9EVUNUU19TVUNDRVNTIiwiTE9BRF9QUk9EVUNUU19GQUlMVVJFIiwiQUREX1FVQU5USVRZX1JFUVVFU1QiLCJBRERfUVVBTlRJVFlfU1VDQ0VTUyIsIkFERF9RVUFOVElUWV9GQUlMVVJFIiwiU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyIsIlNVQlNUUkFDVF9RVUFOVElUWV9GQUlMVVJFIiwiQUREX1BST0RVQ1RfU1VDQ0VTUyIsIkFERF9QUk9EVUNUX0ZBSUxVUkUiLCJMT0FEX0NBUlRfUkVRVUVTVCIsIkxPQURfQ0FSVF9TVUNDRVNTIiwiTE9BRF9DQVJUX0ZBSUxVUkUiLCJJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUIiwiR0VUX05BVklCQVJfU0laRSIsIlNFQVJDSF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfQ0FURUdPUllfU1VDQ0VTUyIsImZpbmRJbmRleCIsInByb2R1Y3QiLCJxdWFudGl0eSIsIm1lbnVzIiwiY2FydCIsInYiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiZmlsdGVyIiwiaW5kZXhPZiIsInRleHQiLCJkaXNjb3VudGVkUHJvZHVjdCIsIkRpc2NvdW50IiwiciIsIkNhdGVnb3J5IiwiaXNBZGRpbmdGaWxlcyIsImlzTG9hZGluZ1Byb2R1Y3RzIiwiaXNTZWxlY3RpbmdQcm9kdWN0Iiwic2VsZWN0aW5nUHJvZHVjdEVycm9yIiwiaXNBZGRpbmdTaG9wIiwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyIsIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJFRElUX1BST0RVQ1RfUkVRVUVTVCIsIkVESVRfUFJPRFVDVF9TVUNDRVNTIiwiRURJVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyIsIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkUiLCJDSEVDS19QUk9EVUNUX1NVQ0NFU1MiLCJDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCIsIkRJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyIsIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUIiwiREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MiLCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRSIsIkFERF9DQVRFR09SWV9SRVFVRVNUIiwiQUREX0NBVEVHT1JZX1NVQ0NFU1MiLCJBRERfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJjaGVja2VkIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwibG9kaW5nU2hvcExpc3RFcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLElBQWhCLEtBQXlCO0FBQy9DLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFtQkMsc0RBQVEsQ0FBQ0gsWUFBRCxDQUFqQzs7QUFDQSxRQUFNSSxNQUFNLEdBQUlDLENBQUQsSUFBT0gsT0FBTyxDQUFDRyxDQUFD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b3BJZF0vcHJvZHVjdC9hZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Nob3AvYWRtaW4vW1Nob3BJZF0vcHJvZHVjdC9hZGQuanNcIik7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSAoZSkgPT4gaGFuZGxlcihlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiBbdmFsdWUsIHNldHRlciwgaGFuZGxlcl07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlQ2hlY2tlZCA9IChpbml0aWFsU3RhdGUgPSBudWxsKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgaGFuZGxlcl0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBzZXR0ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFuZGxlcigocHJldikgPT4ge1xuICAgICAgcmV0dXJuICFwcmV2O1xuICAgIH0pO1xuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0dGVyLCBoYW5kbGVyXTtcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVXBsb2FkLCBQYWdlSGVhZGVyLCBTcGFjZSwgQ2FyZCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzXCI7XG5pbXBvcnQgSW1nQ3JvcCBmcm9tIFwiYW50ZC1pbWctY3JvcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBRERfUFJPRFVDVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL21lbnVcIjtcbmltcG9ydCB7IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IHsgR2lmdE91dGxpbmVkLCBEb2xsYXJPdXRsaW5lZCwgUHJvZmlsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcblxuY29uc3QgUmVnaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHNlc3Npb24sIGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiYWRtaW5cIiB9KTtcbiAgfSwgW10pO1xuXG4gIGlmICghc2Vzc2lvbiB8fCBpc0xvZ2dlZEluID09PSBmYWxzZSB8fCBzZXNzaW9uLmRpdmlzaW9uID09PSBmYWxzZSkgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQ6IHNlc3Npb24uU2hvcHNbMF0uaWQgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbdGl0bGUsIG9uQ2hhbmdlVGl0bGVdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3ByaWNlLCBvbkNoYW5nZVByaWNlXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgb25DaGFuZ2VEZWNyaXB0aW9uXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsZUVycm9yLCBzZXRGaWxlRXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbkltYWdlc0NoYW5nZSA9ICh7IGZpbGVMaXN0OiBuZXdGaWxlTGlzdCB9KSA9PiB7XG4gICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xuICAgIHNldEZpbGVFcnJvcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25QcmV2aWV3ID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgICBsZXQgc3JjID0gZmlsZS51cmw7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHNyYyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUub3JpZ2luRmlsZU9iaik7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGNvbnN0IGltZ1dpbmRvdyA9IHdpbmRvdy5vcGVuKHNyYyk7XG4gICAgaW1nV2luZG93LmRvY3VtZW50LndyaXRlKGltYWdlLm91dGVySFRNTCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0Q2F0ZWdvcnkoZSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwicHJpY2VcIiwgcHJpY2UpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICBmaWxlTGlzdC5mb3JFYWNoKCh7IG9yaWdpbkZpbGVPYmogfSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZXNcIiwgb3JpZ2luRmlsZU9iaik7XG4gICAgfSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiU2hvcElkXCIsIHF1ZXJ5LlNob3BJZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiVXNlcklkXCIsIHNlc3Npb24uaWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIkNhdGVnb3J5SWRcIiwgY2F0ZWdvcnkpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICBpZiAoZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVF9SRVFVRVNULFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbi8ke3F1ZXJ5LlNob3BJZH0vcHJvZHVjdGApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2V0RmlsZUVycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yaWVzWzBdLmlkKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBlbmNUeXBlPXtcIm11bHRpcGFydC9mb3JtLWRhdGFcIn1cbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgICBsYXlvdXQ9e1widmVydGljYWxcIn1cbiAgICA+XG4gICAgICA8Q2FyZCB0aXRsZT17PFBhZ2VIZWFkZXIgY2xhc3NOYW1lPXtcInNpdGUtcGFnZS1oZWFkZXJcIn0gdGl0bGU9XCLsg4Htkojrk7HroZ1cIiAvPn0+XG4gICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1widmVydGljYWxcIn0gc2l6ZT17XCJtaWRkbGVcIn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT17XCJ0aXRsZVwifSBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7IOB7ZKI66qF7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH1dfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPXtcInRpdGxlXCJ9XG4gICAgICAgICAgICAgIHByZWZpeD17PEdpZnRPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi6rCA6rKp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH0sXG4gICAgICAgICAgICAgIHsgcGF0dGVybjogL15bMC05XS9nLCBtZXNzYWdlOiBcIuyIq+yekOulvCDsnoXroKXtlbTso7zshLjsmpRcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgcHJlZml4PXs8RG9sbGFyT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQcmljZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGxhYmVsPVwi7ISk66qFXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLsg4HshLjrgrTsl63snYQg7J6F66Cl7ZW07KO87IS47JqUXCIgfV19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHByZWZpeD17PFByb2ZpbGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLsg4HshLjsgqztla3snYQg7J6F66Cl7ZW07KO87IS47JqUXCJ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17MjAwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VEZWNyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjYXRlZ29yeVwiIGxhYmVsPVwi7Lm07YWM6rOg66asXCI+XG4gICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUNhdGVnb3J5fSBkZWZhdWx0VmFsdWU9e2NhdGVnb3JpZXNbMF0uaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPENhcmQgdGl0bGU9e2BpbWFnZWB9PlxuICAgICAgICAgICAgPEltZ0Nyb3Agcm90YXRlIGFzcGVjdD17NCAvIDN9IG5hbWU9e1wiaW1hZ2VcIn0+XG4gICAgICAgICAgICAgIDxVcGxvYWRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIlxuICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW1hZ2VzQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUHJldmlldz17b25QcmV2aWV3fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2ZpbGVMaXN0Lmxlbmd0aCA8IDUgJiYgXCIrIFVwbG9hZFwifVxuICAgICAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgICAgIDwvSW1nQ3JvcD5cbiAgICAgICAgICAgIHtmaWxlRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7tjIzsnbzsnYQg7JeF66Gc65OcIO2VtOyjvOyEuOyalDwvZGl2Pn1cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgc3R5bGU9e3sgd2lkdGg6IGAxMDAlYCB9fT5cbiAgICAgICAgICAgIOygnOy2nFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1NwYWNlPlxuICAgICAgPC9DYXJkPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdDtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBzaG9wTGlzdDogW10sXG4gIG9yaWdpbmFsU2hvcExpc3Q6IFtdLFxuICBpc0xvYWRpbmdVc2VyTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdVc2VyTGlzdEVycm9yOiBudWxsLFxuICB1c2VyTGlzdDogW10sXG4gIG9yaWdpbmFsVXNlckxpc3Q6IFtdLFxuICBldmVudHM6IFtdLFxuICBsb2FkRXZlbnRzRXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ0V2ZW50czogZmFsc2UsXG4gIHBhZ2VJbmZvOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfUkVRVUVTVCA9ICdMT0FEX1VTRVJMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfU1VDQ0VTUyA9ICdMT0FEX1VTRVJMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfRkFJTFVSRSA9ICdMT0FEX1VTRVJMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gJ0xPQURfU0hPUExJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gJ0xPQURfU0hPUExJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gJ0xPQURfU0hPUExJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1NVQ0NFU1MgPSAnREVMRVRFX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1JFUVVFU1QgPSAnTE9BRF9FVkVOVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfU1VDQ0VTUyA9ICdMT0FEX0VWRU5UU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19GQUlMVVJFID0gJ0xPQURfRVZFTlRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1JFUVVFU1QgPSAnQUREX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9TVUNDRVNTID0gJ0FERF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfRkFJTFVSRSA9ICdBRERfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1JFUVVFU1QgPSAnRURJVF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1NVQ0NFU1MgPSAnRURJVF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX0ZBSUxVUkUgPSAnRURJVF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9SRVFVRVNUID0gJ0RFTEVURV9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfU1VDQ0VTUyA9ICdERUxFVEVfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFHRV9DSEFOR0VfU1VDQ0VTUyA9ICdQQUdFX0NIQU5HRV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1Nob3BMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5wYWdlSW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIG5hdmlTaXplOiBudWxsLFxuICBUYWJsZUlkOiBudWxsLFxuICBpc0FkZGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBpc0xvYWRpbmdDYXJ0OiBmYWxzZSxcbiAgY2F0ZWdvcmllczogW10sXG59O1xuXG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19SRVFVRVNUID0gJ0xPQURfUFJPRFVDVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19TVUNDRVNTID0gJ0xPQURfUFJPRFVDVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9QUk9EVUNUU19GQUlMVVJFID0gJ0xPQURfUFJPRFVDVFNfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfUkVRVUVTVCA9ICdBRERfUVVBTlRJVFlfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZX1NVQ0NFU1MgPSAnQUREX1FVQU5USVRZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9GQUlMVVJFID0gJ0FERF9RVUFOVElUWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFNVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gJ1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyA9ICdTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUgPSAnU1VCU1RSQUNUX1FVQU5USVRZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9ICdBRERfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gJ0FERF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0ZBSUxVUkUgPSAnQUREX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfUkVRVUVTVCA9ICdMT0FEX0NBUlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnTE9BRF9DQVJUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMVVJFID0gJ0xPQURfQ0FSVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IElOSVRJQVRFX1FVQU5USVRZX1JFUVVFU1QgPSAnSU5JVElBVEVfUVVBTlRJVFlfUkVRVUVTVCc7XG5cbmV4cG9ydCBjb25zdCBHRVRfTkFWSUJBUl9TSVpFID0gJ0dFVF9OQVZJQkFSX1NJWkUnO1xuXG5leHBvcnQgY29uc3QgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUyA9ICdTRUFSQ0hfUFJPRFVDVF9TVUNDRVNTJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9DQVRFR09SWV9TVUNDRVNTID0gJ1NFTEVDVF9DQVRFR09SWV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEdFVF9OQVZJQkFSX1NJWkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBuYXZpU2l6ZTogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1FVQU5USVRZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KFxuICAgICAgICAocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5IDwgMTAwID8gKHF1YW50aXR5ICs9IDEpIDogOTk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTVUJTVFJBQ1RfUVVBTlRJVFlfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoXG4gICAgICAgIChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkID09PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c1tpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPiAxID8gKHF1YW50aXR5IC09IDEpIDogMTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5kYXRhWzBdLlRhYmxlSWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0ubWVudXMsXG4gICAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLm1lbnVzLFxuICAgICAgICAgIFRhYmxlSWQ6IGFjdGlvbi5kYXRhWzBdLlRhYmxlSWQsXG4gICAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLmRhdGFbMV0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfUFJPRFVDVFNfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9DQVJUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgYWN0aW9uLmRhdGFdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBJTklUSUFURV9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VBUkNIX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC50aXRsZS5pbmRleE9mKGFjdGlvbi5kYXRhLnRleHQpID4gLTE7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGlmIChhY3Rpb24uaWQgPT0gMCkge1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IFsuLi5zdGF0ZS5vcmlnaW5Qcm9kdWN0c10gfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHYuRGlzY291bnQgIT09IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGRpc2NvdW50ZWRQcm9kdWN0IH07XG4gICAgICB9XG4gICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAocikgPT4gci5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWRcbiAgICAgICk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG9wOiBudWxsLFxuICBwcm9kdWN0czogW10sXG4gIG9yaWdpblByb2R1Y3RzOiBbXSxcbiAgY2F0ZWdvcmllczogW10sXG4gIHByb2R1Y3Q6IG51bGwsXG4gIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gIGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsXG4gIHNlbGVjdGluZ1Byb2R1Y3RFcnJvcjogbnVsbCxcbiAgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLFxuICBzaG9wTGlzdDogW10sXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBpc0FkZGluZ1Nob3A6IGZhbHNlLFxufTtcblxuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1JFUVVFU1QgPSBcIkFERF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gXCJBRERfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfRkFJTFVSRSA9IFwiQUREX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCA9IFwiQURNSU5fUFJPRFVDVFNfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19GQUlMVVJFID0gXCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUID0gXCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyA9IFwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9SRVFVRVNUID0gXCJFRElUX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9TVUNDRVNTID0gXCJFRElUX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9GQUlMVVJFID0gXCJFRElUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfUkVRVUVTVCA9IFwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MgPSBcIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9GQUlMVVJFID0gXCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19QUk9EVUNUX1NVQ0NFU1MgPSBcIkNIRUNLX1BST0RVQ1RfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkNIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkRJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyA9IFwiRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFID0gXCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9SRVFVRVNUID0gXCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9TVUNDRVNTID0gXCJERUxFVEVfRElTQ09VTlRfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9GQUlMVVJFID0gXCJERUxFVEVfRElTQ09VTlRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkFERF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkFERF9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkFERF9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkVESVRfQ0FURUdPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfU1VDQ0VTUyA9IFwiRURJVF9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9GQUlMVVJFID0gXCJFRElUX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9SRVFVRVNUID0gXCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9TVUNDRVNTID0gXCJERUxFVEVfQ0FURUdPUllfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9GQUlMVVJFID0gXCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUyA9IFwiQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gXCJMT0FEX1NIT1BMSVNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MgPSBcIkxPQURfU0hPUExJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9IFwiTE9BRF9TSE9QTElTVF9GQUlMVVJFXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogdHJ1ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLCAuLi5zdGF0ZSwgcHJvZHVjdDogYWN0aW9uLmRhdGEgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5pZCAhPSBhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSA9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5kYXRhWzFdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBjaGVja2VkID0gcHJvZHVjdC5jaGVja2VkO1xuICAgICAgY2hlY2tlZCA9IGNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIGNoZWNrZWQgfTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICBwcm9kdWN0cy5tYXAoKHYpID0+ICh2LmNoZWNrZWQgPSBhY3Rpb24uY2hlY2tlZCkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSAhPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhWzFdKVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF07XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogWy4uLnN0YXRlLmNhdGVnb3JpZXMsIGFjdGlvbi5kYXRhXSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsuLi5zdGF0ZS5jYXRlZ29yaWVzXTtcbiAgICAgIGNhdGVnb3JpZXNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllcyB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogc3RhdGUub3JpZ2luUHJvZHVjdHMgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkRpc2NvdW50ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLCBsb2RpbmdTaG9wTGlzdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkLWltZy1jcm9wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=