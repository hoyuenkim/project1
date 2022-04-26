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

/***/ "./components/Forms/CategoryForm.js":
/*!******************************************!*\
  !*** ./components/Forms/CategoryForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CategoryForm = ({
  item,
  setCategory,
  ShopId,
  setItem
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(item && item.name);

  const onChangeName = e => {
    return setName(e.target.value);
  };

  const onFinish = () => {
    if (item) {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_CATEGORY_REQUEST"],
        data: {
          id: item.id,
          name,
          ShopId
        }
      });
      setCategory(false);
      setItem(null);
    } else {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_CATEGORY_REQUEST"],
        data: {
          name,
          ShopId
        }
      });
      setCategory(false);
      setItem(null);
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onFinish: onFinish,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Form"].Item, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        placeholder: '카테고리명을 입력해주세요',
        value: name,
        onChange: onChangeName
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      htmlType: 'submit',
      children: "\uC81C\uCD9C"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryForm);

/***/ }),

/***/ "./pages/shop/admin/index.js":
/*!***********************************!*\
  !*** ./pages/shop/admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _components_Forms_CategoryForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Forms/CategoryForm */ "./components/Forms/CategoryForm.js");
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const Index = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    session,
    division
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.user);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (!session || session.division === false) {
    return router.back();
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["ADMIN_PRODUCTS_REQUEST"],
        ShopId: session.Shops[0].id
      });
    }, []);
  }

  const {
    products,
    categories
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shop);

  if (division === false || session === undefined) {
    router.back();
  }

  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: item,
    1: setItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const onToggleCategory = item => {
    setItem(item);
    setCategory(prev => !prev);
  };

  const onClickDelete = item => {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["DELETE_CATEGORY_REQUEST"],
      data: {
        id: item.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_6__["PAGE_CHANGE_SUCCESS"],
      data: 'admin'
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [category && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
      title: '카테고리',
      visible: category,
      onCancel: () => {
        setCategory(false);
      },
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_Forms_CategoryForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        item: item,
        ShopId: session.Shops[0].id,
        setCategory: setCategory,
        setItem: setItem
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
      direction: 'vertical',
      style: {
        width: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        title: '카테고리 관리',
        extra: categories && categories.length < 5 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: () => onToggleCategory(),
          children: "\uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00"
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
          children: "\uCE74\uD14C\uACE0\uB9AC\uB294 \uCD5C\uB300 5\uAC1C\uAE4C\uC9C0 \uC124\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        }),
        children: categories.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
          dataSource: categories,
          renderItem: (item, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
              actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
                onClick: () => onToggleCategory(item),
                children: "\uC218\uC815"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Popconfirm"], {
                title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                  children: [item.name, "\uC744 \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("br", {}), "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uD574\uB2F9\uD558\uB294 \uBAA8\uB4E0 \uC0C1\uD488\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4."]
                }),
                onConfirm: () => dispatch({
                  type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["DELETE_CATEGORY_REQUEST"],
                  data: {
                    id: item.id
                  }
                }),
                onCancel: () => console.log('cancel'),
                okText: "Yes",
                cancelText: "No",
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
                  children: "\uC0AD\uC81C"
                })
              })],
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
                avatar: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
                  children: i + 1
                }),
                title: item.name
              })
            }, i)
          })
        }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
          children: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694."
        })
      }), products.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        title: '상품정보',
        extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          onClick: () => router.push('/shop/admin/product'),
          children: "\uC0C1\uD488\uAD00\uB9AC"
        }),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"].Group, {
            maxCount: 10,
            children: products.map((product, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
              src: `${"https://127.0.0.1:3065"}/uploads/${product.Images[0].url}`
            }, i))
          }),
          description: products.length > 1 ? `${products[0].title} 외 ${products.length - 1}개의 상품이 존재하고 있습니다.` : `${products[0].title} 상품이 존재하고 있습니다.`
        })
      }), categories.length > 0 && products.length < 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        title: '상품정보',
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Empty"], {
          onClick: () => router.push('/shop/admin/product/add'),
          children: "\uC0C1\uD488\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694"
        })
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaG9wLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ2F0ZWdvcnlGb3JtIiwiaXRlbSIsInNldENhdGVnb3J5IiwiU2hvcElkIiwic2V0SXRlbSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwib25DaGFuZ2VOYW1lIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25GaW5pc2giLCJ0eXBlIiwiRURJVF9DQVRFR09SWV9SRVFVRVNUIiwiZGF0YSIsImlkIiwiQUREX0NBVEVHT1JZX1JFUVVFU1QiLCJJbmRleCIsInNlc3Npb24iLCJkaXZpc2lvbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwiYmFjayIsInVzZUVmZmVjdCIsIkFETUlOX1BST0RVQ1RTX1JFUVVFU1QiLCJTaG9wcyIsInByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsInNob3AiLCJ1bmRlZmluZWQiLCJjYXRlZ29yeSIsIm9uVG9nZ2xlQ2F0ZWdvcnkiLCJwcmV2Iiwib25DbGlja0RlbGV0ZSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsIndpZHRoIiwibGVuZ3RoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwibWFwIiwicHJvZHVjdCIsInByb2Nlc3MiLCJJbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJvcmlnaW5Qcm9kdWN0cyIsImlzQWRkaW5nRmlsZXMiLCJpc0xvYWRpbmdQcm9kdWN0cyIsImlzU2VsZWN0aW5nUHJvZHVjdCIsInNlbGVjdGluZ1Byb2R1Y3RFcnJvciIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJBRERfUFJPRFVDVF9TVUNDRVNTIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1MiLCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFIiwiU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCIsIlNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJFRElUX1BST0RVQ1RfU1VDQ0VTUyIsIkVESVRfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVCIsIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1MiLCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFIiwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QiLCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVCIsIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTIiwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9DQVRFR09SWV9GQUlMVVJFIiwiRURJVF9DQVRFR09SWV9TVUNDRVNTIiwiRURJVF9DQVRFR09SWV9GQUlMVVJFIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJpbmRleCIsImZpbmRJbmRleCIsInYiLCJmaWx0ZXIiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2F0ZWdvcnkiLCJjaGVja2VkIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCJdLCJt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QUFFdUc7QUFBN0I7QUFDRCxTQUxNLE1BS0E7QUFDTCxnQkFBTUosZ0JBQWdCLEdBQUczRyxLQUFLLENBQUNxRSxjQUFOLENBQXFCcUMsTUFBckIsQ0FDdEJELENBQUQsSUFBT0EsQ0FBQyxDQUFDRyxRQUFGLENBQVdsSCxFQUFYLElBQWlCdUUsTUFBTSxDQUFDdkUsRUFEUixDQUF6QjtBQUdBLGlEQUFZTSxLQUFaO0FBQW1CUSxvQkFBUSxFQUFFbUc7QUFBN0I7QUFDRDtBQUNGOztBQUVEO0FBQVM7QUFDUCxpQ0FDSzNHLEtBREw7QUFHRDtBQXZOSDtBQXlORCxDQTFORDs7QUE0TmVnRSxzRUFBZixFOzs7Ozs7Ozs7OztBQ3RSQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zaG9wL2FkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaG9wL2FkbWluL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFERF9DQVRFR09SWV9SRVFVRVNULCBFRElUX0NBVEVHT1JZX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zaG9wJztcblxuY29uc3QgQ2F0ZWdvcnlGb3JtID0gKHsgaXRlbSwgc2V0Q2F0ZWdvcnksIFNob3BJZCwgc2V0SXRlbSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoaXRlbSAmJiBpdGVtLm5hbWUpO1xuICBjb25zdCBvbkNoYW5nZU5hbWUgPSAoZSkgPT4ge1xuICAgIHJldHVybiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NBVEVHT1JZX1JFUVVFU1QsIGRhdGE6IHsgaWQ6IGl0ZW0uaWQsIG5hbWUsIFNob3BJZCB9IH0pO1xuICAgICAgc2V0Q2F0ZWdvcnkoZmFsc2UpO1xuICAgICAgc2V0SXRlbShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ0FURUdPUllfUkVRVUVTVCwgZGF0YTogeyBuYW1lLCBTaG9wSWQgfSB9KTtcbiAgICAgIHNldENhdGVnb3J5KGZhbHNlKTtcbiAgICAgIHNldEl0ZW0obnVsbCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uRmluaXNoPXtvbkZpbmlzaH0+XG4gICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9eyfsubTthYzqs6DrpqzrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqUJ30gdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5hbWV9IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxCdXR0b24gaHRtbFR5cGU9eydzdWJtaXQnfT7soJzstpw8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUZvcm07XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQge1xuICBFbXB0eSxcbiAgQ2FyZCxcbiAgU3BhY2UsXG4gIExpc3QsXG4gIEJ1dHRvbixcbiAgQXZhdGFyLFxuICBNb2RhbCxcbiAgUG9wY29uZmlybSxcbn0gZnJvbSAnYW50ZCc7XG5pbXBvcnQge1xuICBBRE1JTl9QUk9EVUNUU19SRVFVRVNULFxuICBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCxcbn0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvc2hvcCc7XG5cbmltcG9ydCBDYXRlZ29yeUZvcm0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm0nO1xuXG5pbXBvcnQgeyBQQUdFX0NIQU5HRV9TVUNDRVNTIH0gZnJvbSAnLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW4nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IHNlc3Npb24sIGRpdmlzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQ6IHNlc3Npb24uU2hvcHNbMF0uaWQgfSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgY29uc3QgeyBwcm9kdWN0cywgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICBpZiAoZGl2aXNpb24gPT09IGZhbHNlIHx8IHNlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgIHJvdXRlci5iYWNrKCk7XG4gIH1cblxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvblRvZ2dsZUNhdGVnb3J5ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRJdGVtKGl0ZW0pO1xuICAgIHNldENhdGVnb3J5KChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGF0YTogeyBpZDogaXRlbS5pZCB9IH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiAnYWRtaW4nIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NhdGVnb3J5ICYmIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdGl0bGU9eyfsubTthYzqs6DrpqwnfVxuICAgICAgICAgIHZpc2libGU9e2NhdGVnb3J5fVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRDYXRlZ29yeShmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgID5cbiAgICAgICAgICA8Q2F0ZWdvcnlGb3JtXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgU2hvcElkPXtzZXNzaW9uLlNob3BzWzBdLmlkfVxuICAgICAgICAgICAgc2V0Q2F0ZWdvcnk9e3NldENhdGVnb3J5fVxuICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgKX1cbiAgICAgIDxTcGFjZSBkaXJlY3Rpb249eyd2ZXJ0aWNhbCd9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9eyfsubTthYzqs6Drpqwg6rSA66asJ31cbiAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICBjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubGVuZ3RoIDwgNSA/IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUNhdGVnb3J5KCl9Puy5tO2FjOqzoOumrCDstpTqsIA8L0J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxkaXY+7Lm07YWM6rOg66as64qUIOy1nOuMgCA16rCc6rmM7KeAIOyEpOygle2VmOyLpCDsiJgg7J6I7Iq164uI64ukLjwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25Ub2dnbGVDYXRlZ29yeShpdGVtKX0+7IiY7KCVPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX3snYQg7KCV66eQ66GcIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsubTthYzqs6Drpqzsl5Ag7ZW064u57ZWY64qUIOuqqOuToCDsg4HtkojsnbQg7IKt7KCc65Cp64uI64ukLlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9DQVRFR09SWV9SRVFVRVNULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IGl0ZW0uaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBjb25zb2xlLmxvZygnY2FuY2VsJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuyCreygnDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT4sXG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aSArIDF9PC9BdmF0YXI+fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFbXB0eT7subTthYzqs6Drpqzrpbwg7LaU6rCA7ZW07KO87IS47JqULjwvRW1wdHk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPENhcmRcbiAgICAgICAgICAgIHRpdGxlPXsn7IOB7ZKI7KCV67O0J31cbiAgICAgICAgICAgIGV4dHJhPXtcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Nob3AvYWRtaW4vcHJvZHVjdCcpfT5cbiAgICAgICAgICAgICAgICDsg4HtkojqtIDrpqxcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgPEF2YXRhci5Hcm91cCBtYXhDb3VudD17MTB9PlxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke3Byb2R1Y3QuSW1hZ2VzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9BdmF0YXIuR3JvdXA+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgICAgID8gYCR7cHJvZHVjdHNbMF0udGl0bGV9IOyZuCAke1xuICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgfeqwnOydmCDsg4HtkojsnbQg7KG07J6s7ZWY6rOgIOyeiOyKteuLiOuLpC5gXG4gICAgICAgICAgICAgICAgICA6IGAke3Byb2R1Y3RzWzBdLnRpdGxlfSDsg4HtkojsnbQg7KG07J6s7ZWY6rOgIOyeiOyKteuLiOuLpC5gXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICApfVxuICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIHByb2R1Y3RzLmxlbmd0aCA8IDEgJiYgKFxuICAgICAgICAgIDxDYXJkIHRpdGxlPXsn7IOB7ZKI7KCV67O0J30+XG4gICAgICAgICAgICA8RW1wdHkgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9zaG9wL2FkbWluL3Byb2R1Y3QvYWRkJyl9PlxuICAgICAgICAgICAgICDsg4HtkojsnYQg7LaU6rCA7ZW07KO87IS47JqUXG4gICAgICAgICAgICA8L0VtcHR5PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKX1cbiAgICAgIDwvU3BhY2U+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBzaG9wTGlzdDogW10sXG4gIG9yaWdpbmFsU2hvcExpc3Q6IFtdLFxuICBpc0xvYWRpbmdVc2VyTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdVc2VyTGlzdEVycm9yOiBudWxsLFxuICB1c2VyTGlzdDogW10sXG4gIG9yaWdpbmFsVXNlckxpc3Q6IFtdLFxuICBldmVudHM6IFtdLFxuICBsb2FkRXZlbnRzRXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ0V2ZW50czogZmFsc2UsXG4gIHBhZ2VJbmZvOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfUkVRVUVTVCA9ICdMT0FEX1VTRVJMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfU1VDQ0VTUyA9ICdMT0FEX1VTRVJMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfRkFJTFVSRSA9ICdMT0FEX1VTRVJMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gJ0xPQURfU0hPUExJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gJ0xPQURfU0hPUExJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gJ0xPQURfU0hPUExJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1NVQ0NFU1MgPSAnREVMRVRFX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1JFUVVFU1QgPSAnTE9BRF9FVkVOVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfU1VDQ0VTUyA9ICdMT0FEX0VWRU5UU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19GQUlMVVJFID0gJ0xPQURfRVZFTlRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1JFUVVFU1QgPSAnQUREX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9TVUNDRVNTID0gJ0FERF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfRkFJTFVSRSA9ICdBRERfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1JFUVVFU1QgPSAnRURJVF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1NVQ0NFU1MgPSAnRURJVF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX0ZBSUxVUkUgPSAnRURJVF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9SRVFVRVNUID0gJ0RFTEVURV9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfU1VDQ0VTUyA9ICdERUxFVEVfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFHRV9DSEFOR0VfU1VDQ0VTUyA9ICdQQUdFX0NIQU5HRV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1Nob3BMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5wYWdlSW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvcDogbnVsbCxcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwcm9kdWN0OiBudWxsLFxuICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9ICdBRERfUFJPRFVDVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9TVUNDRVNTID0gJ0FERF9QUk9EVUNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX0ZBSUxVUkUgPSAnQUREX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19SRVFVRVNUID0gJ0FETUlOX1BST0RVQ1RTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MgPSAnQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfRkFJTFVSRSA9ICdBRE1JTl9QUk9EVUNUU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QgPSAnU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyA9ICdTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFID0gJ1NFTEVDVF9QUk9EVUNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1JFUVVFU1QgPSAnRURJVF9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEVESVRfUFJPRFVDVF9TVUNDRVNTID0gJ0VESVRfUFJPRFVDVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX1BST0RVQ1RfRkFJTFVSRSA9ICdFRElUX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9SRVFVRVNUID0gJ0RFTEVURV9QUk9EVUNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MgPSAnREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfRkFJTFVSRSA9ICdERUxFVEVfUFJPRFVDVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BST0RVQ1RfU1VDQ0VTUyA9ICdDSEVDS19QUk9EVUNUX1NVQ0NFU1MnO1xuXG5leHBvcnQgY29uc3QgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MgPSAnQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MnO1xuXG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUID0gJ0RJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTID0gJ0RJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFID0gJ0RJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRElTQ09VTlRfUkVRVUVTVCA9ICdERUxFVEVfRElTQ09VTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MgPSAnREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ESVNDT1VOVF9GQUlMVVJFID0gJ0RFTEVURV9ESVNDT1VOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9DQVRFR09SWV9SRVFVRVNUID0gJ0FERF9DQVRFR09SWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfU1VDQ0VTUyA9ICdBRERfQ0FURUdPUllfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX0NBVEVHT1JZX0ZBSUxVUkUgPSAnQUREX0NBVEVHT1JZX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9SRVFVRVNUID0gJ0VESVRfQ0FURUdPUllfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9TVUNDRVNTID0gJ0VESVRfQ0FURUdPUllfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9GQUlMVVJFID0gJ0VESVRfQ0FURUdPUllfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCA9ICdERUxFVEVfQ0FURUdPUllfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MgPSAnREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9DQVRFR09SWV9GQUlMVVJFID0gJ0RFTEVURV9DQVRFR09SWV9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IENBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MgPSAnQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogdHJ1ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLCAuLi5zdGF0ZSwgcHJvZHVjdDogYWN0aW9uLmRhdGEgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5pZCAhPSBhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSA9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5kYXRhWzFdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBjaGVja2VkID0gcHJvZHVjdC5jaGVja2VkO1xuICAgICAgY2hlY2tlZCA9IGNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIGNoZWNrZWQgfTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICBwcm9kdWN0cy5tYXAoKHYpID0+ICh2LmNoZWNrZWQgPSBhY3Rpb24uY2hlY2tlZCkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSAhPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhWzFdKVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF07XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogWy4uLnN0YXRlLmNhdGVnb3JpZXMsIGFjdGlvbi5kYXRhXSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsuLi5zdGF0ZS5jYXRlZ29yaWVzXTtcbiAgICAgIGNhdGVnb3JpZXNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllcyB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoXG4gICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5pZFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAodikgPT4gdi5DYXRlZ29yeS5pZCAhPT0gYWN0aW9uLmRhdGEuaWRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogc3RhdGUub3JpZ2luUHJvZHVjdHMgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKFxuICAgICAgICAgICh2KSA9PiB2LkRpc2NvdW50ICE9PSBudWxsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZGlzY291bnRlZFByb2R1Y3QgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgICAgKHYpID0+IHYuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmlkXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=