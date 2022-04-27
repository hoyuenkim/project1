module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/admin/[ShopId]/index.js");
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

/***/ "./pages/shop/admin/[ShopId]/index.js":
/*!********************************************!*\
  !*** ./pages/shop/admin/[ShopId]/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _components_Forms_CategoryForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Forms/CategoryForm */ "./components/Forms/CategoryForm.js");
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const Index = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    query
  } = router;
  const {
    session
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    Shops
  } = session;
  const ShopInfo = Shops.filter(shop => {
    console.log(shop.id == query.ShopId);
    return shop.id == query.ShopId;
  });
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  if (!session || session.division === false) {
    return router.back();
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["ADMIN_PRODUCTS_REQUEST"],
        ShopId: query.ShopId
      });
    }, []);
  }

  const {
    products,
    categories
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shop);

  if (session.division === false || session === undefined) {
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
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["DELETE_CATEGORY_REQUEST"],
      data: {
        id: item.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_7__["PAGE_CHANGE_SUCCESS"],
      data: "admin"
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title, {}),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        gutter: [10, 10],
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          span: 24,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title, {
              level: 3,
              children: "\uC0C1\uD488\uAD00\uB9AC"
            }),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
              children: [category && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
                title: "카테고리",
                visible: category,
                onCancel: () => {
                  setCategory(false);
                },
                footer: null,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Forms_CategoryForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: item,
                  ShopId: query.ShopId,
                  setCategory: setCategory,
                  setItem: setItem
                })
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
                direction: "vertical",
                style: {
                  width: "100%"
                },
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                  title: "카테고리 관리",
                  extra: categories && categories.length < 5 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    onClick: () => onToggleCategory(),
                    children: "\uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00"
                  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    children: "\uCE74\uD14C\uACE0\uB9AC\uB294 \uCD5C\uB300 5\uAC1C\uAE4C\uC9C0 \uC124\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                  }),
                  children: categories.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
                    dataSource: categories,
                    renderItem: (item, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                        actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                          onClick: () => onToggleCategory(item),
                          children: "\uC218\uC815"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popconfirm"], {
                          title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                            children: [item.name, "\uC744 \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uD574\uB2F9\uD558\uB294 \uBAA8\uB4E0 \uC0C1\uD488\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4."]
                          }),
                          onConfirm: () => dispatch({
                            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["DELETE_CATEGORY_REQUEST"],
                            data: {
                              id: item.id
                            }
                          }),
                          onCancel: () => console.log("cancel"),
                          okText: "Yes",
                          cancelText: "No",
                          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                            children: "\uC0AD\uC81C"
                          })
                        })],
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item.Meta, {
                          avatar: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                            children: i + 1
                          }),
                          title: item.name
                        })
                      }, i)
                    })
                  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Empty"], {
                    children: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694."
                  })
                }), products.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                  title: "상품정보",
                  extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    onClick: () => router.push(`/shop/admin/${query.ShopId}/product`),
                    children: "\uC0C1\uD488\uAD00\uB9AC"
                  }),
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
                    title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"].Group, {
                      maxCount: 10,
                      children: products.map((product, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                        src: `${"https://127.0.0.1:3065"}/uploads/${product.Images[0].url}`
                      }, i))
                    }),
                    description: products.length > 1 ? `${products[0].title} 외 ${products.length - 1}개의 상품이 존재하고 있습니다.` : `${products[0].title} 상품이 존재하고 있습니다.`
                  })
                }), categories.length > 0 && products.length < 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                  title: "상품정보",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Empty"], {
                    onClick: () => router.push(`/shop/admin/${query.ShopId}/product/add`),
                    children: "\uC0C1\uD488\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694"
                  })
                })]
              })]
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          span: 24,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Typography"].Title, {
              level: 3,
              children: "\uB9E4\uCD9C\uAD00\uB9AC"
            }),
            onClick: () => router.push(`/shop/admin/${query.ShopId}/history`)
          })
        })]
      })
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaG9wLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXRlZ29yeUZvcm0iLCJpdGVtIiwic2V0Q2F0ZWdvcnkiLCJTaG9wSWQiLCJzZXRJdGVtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJvbkNoYW5nZU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkZpbmlzaCIsInR5cGUiLCJFRElUX0NBVEVHT1JZX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJBRERfQ0FURUdPUllfUkVRVUVTVCIsIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzZXNzaW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJTaG9wcyIsIlNob3BJbmZvIiwiZmlsdGVyIiwic2hvcCIsImNvbnNvbGUiLCJsb2ciLCJkaXZpc2lvbiIsImJhY2siLCJ1c2VFZmZlY3QiLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwicHJvZHVjdHMiLCJjYXRlZ29yaWVzIiwidW5kZWZpbmVkIiwiY2F0ZWdvcnkiLCJvblRvZ2dsZUNhdGVnb3J5IiwicHJldiIsIm9uQ2xpY2tEZWxldGUiLCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVCIsIlBBR0VfQ0hBTkdFX1NVQ0NFU1MiLCJ3aWR0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwibWFwIiwicHJvZHVjdCIsInByb2Nlc3MiLCJJbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJvcmlnaW5Qcm9kdWN0cyIsImlzQWRkaW5nRmlsZXMiLCJpc0xvYWRpbmdQcm9kdWN0cyIsImlzU2VsZWN0aW5nUHJvZHVjdCIsInNlbGVjdGluZ1Byb2R1Y3RFcnJvciIsImlzQWRkaW5nU2hvcCIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJBRERfUFJPRFVDVF9TVUNDRVNTIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1MiLCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFIiwiU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCIsIlNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJFRElUX1BST0RVQ1RfU1VDQ0VTUyIsIkVESVRfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVCIsIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1MiLCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFIiwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QiLCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVCIsIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTIiwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9DQVRFR09SWV9GQUlMVVJFIiwiRURJVF9DQVRFR09SWV9TVUNDRVNTIiwiRURJVF9DQVRFR09SWV9GQUlMVVJFIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJpbmRleCIsImZpbmRJbmRleCIsInYiLCJmaWx0ZXJlZFByb2R1Y3RzIiwiQ2F0ZWdvcnkiLCJjaGVja2VkIiwiZmlsdGVyZWRDYXRlZ29yaWVzIiwiZGlzY291bnRlZFByb2R1Y3QiLCJEaXNjb3VudCIsImxvZGluZ1Nob3BMaXN0RXJyb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUMsYUFBUjtBQUFxQkMsUUFBckI7QUFBNkJDO0FBQTdCLENBQUQsS0FBNEM7QUFDL0QsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQ1Is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QSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zaG9wL2FkbWluL1tTaG9wSWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zaG9wL2FkbWluL1tTaG9wSWRdL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFERF9DQVRFR09SWV9SRVFVRVNULCBFRElUX0NBVEVHT1JZX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9zaG9wJztcblxuY29uc3QgQ2F0ZWdvcnlGb3JtID0gKHsgaXRlbSwgc2V0Q2F0ZWdvcnksIFNob3BJZCwgc2V0SXRlbSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoaXRlbSAmJiBpdGVtLm5hbWUpO1xuICBjb25zdCBvbkNoYW5nZU5hbWUgPSAoZSkgPT4ge1xuICAgIHJldHVybiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBFRElUX0NBVEVHT1JZX1JFUVVFU1QsIGRhdGE6IHsgaWQ6IGl0ZW0uaWQsIG5hbWUsIFNob3BJZCB9IH0pO1xuICAgICAgc2V0Q2F0ZWdvcnkoZmFsc2UpO1xuICAgICAgc2V0SXRlbShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRERfQ0FURUdPUllfUkVRVUVTVCwgZGF0YTogeyBuYW1lLCBTaG9wSWQgfSB9KTtcbiAgICAgIHNldENhdGVnb3J5KGZhbHNlKTtcbiAgICAgIHNldEl0ZW0obnVsbCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uRmluaXNoPXtvbkZpbmlzaH0+XG4gICAgICA8Rm9ybS5JdGVtPlxuICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9eyfsubTthYzqs6DrpqzrqoXsnYQg7J6F66Cl7ZW07KO87IS47JqUJ30gdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtvbkNoYW5nZU5hbWV9IC8+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxCdXR0b24gaHRtbFR5cGU9eydzdWJtaXQnfT7soJzstpw8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeUZvcm07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7fSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBFbXB0eSxcclxuICBDYXJkLFxyXG4gIFNwYWNlLFxyXG4gIExpc3QsXHJcbiAgQnV0dG9uLFxyXG4gIEF2YXRhcixcclxuICBNb2RhbCxcclxuICBQb3Bjb25maXJtLFxyXG4gIENvbCxcclxuICBSb3csXHJcbiAgVHlwb2dyYXBoeSxcclxufSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XHJcblxyXG5pbXBvcnQgQ2F0ZWdvcnlGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0Zvcm1zL0NhdGVnb3J5Rm9ybVwiO1xyXG5cclxuaW1wb3J0IHsgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1Y2Vycy9hZG1pblwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcm91dGVyO1xyXG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IFNob3BzIH0gPSBzZXNzaW9uO1xyXG4gIGNvbnN0IFNob3BJbmZvID0gU2hvcHMuZmlsdGVyKChzaG9wKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzaG9wLmlkID09IHF1ZXJ5LlNob3BJZCk7XHJcbiAgICByZXR1cm4gc2hvcC5pZCA9PSBxdWVyeS5TaG9wSWQ7XHJcbiAgfSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UpIHtcclxuICAgIHJldHVybiByb3V0ZXIuYmFjaygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsIFNob3BJZDogcXVlcnkuU2hvcElkIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyBwcm9kdWN0cywgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcclxuXHJcbiAgaWYgKHNlc3Npb24uZGl2aXNpb24gPT09IGZhbHNlIHx8IHNlc3Npb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcm91dGVyLmJhY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ2F0ZWdvcnkgPSAoaXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbShpdGVtKTtcclxuICAgIHNldENhdGVnb3J5KChwcmV2KSA9PiAhcHJldik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChpdGVtKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9SRVFVRVNULCBkYXRhOiB7IGlkOiBpdGVtLmlkIH0gfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHRV9DSEFOR0VfU1VDQ0VTUywgZGF0YTogXCJhZG1pblwiIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENhcmQgdGl0bGU9ezxUeXBvZ3JhcGh5LlRpdGxlPjwvVHlwb2dyYXBoeS5UaXRsZT59PlxyXG4gICAgICAgIDxSb3cgZ3V0dGVyPXtbMTAsIDEwXX0+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPENhcmQgdGl0bGU9ezxUeXBvZ3JhcGh5LlRpdGxlIGxldmVsPXszfT7sg4HtkojqtIDrpqw8L1R5cG9ncmFwaHkuVGl0bGU+fT5cclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3J5ICYmIChcclxuICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wi7Lm07YWM6rOg66asXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICBTaG9wSWQ9e3F1ZXJ5LlNob3BJZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldENhdGVnb3J5PXtzZXRDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcInZlcnRpY2FsXCJ9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLsubTthYzqs6Drpqwg6rSA66asXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aCA8IDUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25Ub2dnbGVDYXRlZ29yeSgpfT7subTthYzqs6Drpqwg7LaU6rCAPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Puy5tO2FjOqzoOumrOuKlCDstZzrjIAgNeqwnOq5jOyngCDshKTsoJXtlZjsi6Qg7IiYIOyeiOyKteuLiOuLpC48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17Y2F0ZWdvcmllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlQ2F0ZWdvcnkoaXRlbSl9PuyImOyglTwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wY29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV97J2EIOygleunkOuhnCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Lm07YWM6rOg66as7JeQIO2VtOuLue2VmOuKlCDrqqjrk6Ag7IOB7ZKI7J20IOyCreygnOuQqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGlkOiBpdGVtLmlkIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gY29uc29sZS5sb2coXCJjYW5jZWxcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva1RleHQ9XCJZZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuyCreygnDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YSBhdmF0YXI9ezxBdmF0YXI+e2kgKyAxfTwvQXZhdGFyPn0gdGl0bGU9e2l0ZW0ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVtcHR5Puy5tO2FjOqzoOumrOulvCDstpTqsIDtlbTso7zshLjsmpQuPC9FbXB0eT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wi7IOB7ZKI7KCV67O0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zaG9wL2FkbWluLyR7cXVlcnkuU2hvcElkfS9wcm9kdWN0YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOyDge2SiOq0gOumrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyLkdyb3VwIG1heENvdW50PXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7cHJvZHVjdC5JbWFnZXNbMF0udXJsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0F2YXRhci5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm9kdWN0c1swXS50aXRsZX0g7Jm4ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB96rCc7J2YIOyDge2SiOydtCDsobTsnqztlZjqs6Ag7J6I7Iq164uI64ukLmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7cHJvZHVjdHNbMF0udGl0bGV9IOyDge2SiOydtCDsobTsnqztlZjqs6Ag7J6I7Iq164uI64ukLmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgJiYgcHJvZHVjdHMubGVuZ3RoIDwgMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e1wi7IOB7ZKI7KCV67O0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEVtcHR5IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbi8ke3F1ZXJ5LlNob3BJZH0vcHJvZHVjdC9hZGRgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOyDge2SiOydhCDstpTqsIDtlbTso7zshLjsmpRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvRW1wdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8Q29sIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICB0aXRsZT17PFR5cG9ncmFwaHkuVGl0bGUgbGV2ZWw9ezN9PuunpOy2nOq0gOumrDwvVHlwb2dyYXBoeS5UaXRsZT59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zaG9wL2FkbWluLyR7cXVlcnkuU2hvcElkfS9oaXN0b3J5YCl9XHJcbiAgICAgICAgICAgID48L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLFxuICBsb2FkaW5nU2hvcExpc3RFcnJvcjogbnVsbCxcbiAgc2hvcExpc3Q6IFtdLFxuICBvcmlnaW5hbFNob3BMaXN0OiBbXSxcbiAgaXNMb2FkaW5nVXNlckxpc3Q6IGZhbHNlLFxuICBsb2FkaW5nVXNlckxpc3RFcnJvcjogbnVsbCxcbiAgdXNlckxpc3Q6IFtdLFxuICBvcmlnaW5hbFVzZXJMaXN0OiBbXSxcbiAgZXZlbnRzOiBbXSxcbiAgbG9hZEV2ZW50c0Vycm9yOiBudWxsLFxuICBpc0xvYWRpbmdFdmVudHM6IGZhbHNlLFxuICBwYWdlSW5mbzogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1JFUVVFU1QgPSAnTE9BRF9VU0VSTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1NVQ0NFU1MgPSAnTE9BRF9VU0VSTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX0ZBSUxVUkUgPSAnTE9BRF9VU0VSTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfUkVRVUVTVCA9ICdMT0FEX1NIT1BMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9ICdMT0FEX1NIT1BMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9ICdMT0FEX1NIT1BMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUkVRVUVTVCA9ICdERUxFVEVfVVNFUl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0ZBSUxVUkUgPSAnREVMRVRFX1VTRVJfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19SRVFVRVNUID0gJ0xPQURfRVZFTlRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1NVQ0NFU1MgPSAnTE9BRF9FVkVOVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfRkFJTFVSRSA9ICdMT0FEX0VWRU5UU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9SRVFVRVNUID0gJ0FERF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfU1VDQ0VTUyA9ICdBRERfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX0ZBSUxVUkUgPSAnQUREX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9SRVFVRVNUID0gJ0VESVRfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9TVUNDRVNTID0gJ0VESVRfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9GQUlMVVJFID0gJ0VESVRfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfUkVRVUVTVCA9ICdERUxFVEVfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1NVQ0NFU1MgPSAnREVMRVRFX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9GQUlMVVJFID0gJ0RFTEVURV9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgPSAnUEFHRV9DSEFOR0VfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxVc2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckxpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTaG9wTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucGFnZUluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3A6IG51bGwsXG4gIHByb2R1Y3RzOiBbXSxcbiAgb3JpZ2luUHJvZHVjdHM6IFtdLFxuICBjYXRlZ29yaWVzOiBbXSxcbiAgcHJvZHVjdDogbnVsbCxcbiAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgaXNTZWxlY3RpbmdQcm9kdWN0OiBmYWxzZSxcbiAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBudWxsLFxuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIHNob3BMaXN0OiBbXSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIGlzQWRkaW5nU2hvcDogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9IFwiQUREX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkFERF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gXCJBRERfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19SRVFVRVNUID0gXCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUgPSBcIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QgPSBcIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTID0gXCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSA9IFwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkVESVRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkVESVRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkVESVRfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9SRVFVRVNUID0gXCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyA9IFwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BST0RVQ1RfU1VDQ0VTUyA9IFwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCA9IFwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTID0gXCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QgPSBcIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MgPSBcIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUgPSBcIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfUkVRVUVTVCA9IFwiQUREX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQUREX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfRkFJTFVSRSA9IFwiQUREX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfUkVRVUVTVCA9IFwiRURJVF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9TVUNDRVNTID0gXCJFRElUX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkVESVRfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkRFTEVURV9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTID0gXCJDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSBcIkxPQURfU0hPUExJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9IFwiTE9BRF9TSE9QTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gXCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkVcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRERfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogW2FjdGlvbi5kYXRhLCAuLi5zdGF0ZS5wcm9kdWN0c10sXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRERfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgICAgY2F0ZWdvcmllczogYWN0aW9uLmRhdGFbMV0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogZmFsc2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgaXNTZWxlY3RpbmdQcm9kdWN0OiB0cnVlLCAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsIC4uLnN0YXRlLCBwcm9kdWN0OiBhY3Rpb24uZGF0YSB9O1xuICAgIH1cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzU2VsZWN0aW5nUHJvZHVjdDogZmFsc2UsXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IGFjdGlvbi5kYXRhO1xuXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cbiAgICBjYXNlIEVESVRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9IGFjdGlvbi5kYXRhKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cywgb3JpZ2luUHJvZHVjdHM6IHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9XG4gICAgICAgIGFjdGlvbi5kYXRhWzFdID09IDBcbiAgICAgICAgICA/IGFjdGlvbi5kYXRhWzBdXG4gICAgICAgICAgOiBhY3Rpb24uZGF0YVswXS5maWx0ZXIoKHYpID0+IHYuQ2F0ZWdvcnkuaWQgPT0gYWN0aW9uLmRhdGFbMV0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBmaWx0ZXJlZFByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIENIRUNLX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5wcm9kdWN0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHNbaW5kZXhdO1xuICAgICAgbGV0IGNoZWNrZWQgPSBwcm9kdWN0LmNoZWNrZWQ7XG4gICAgICBjaGVja2VkID0gY2hlY2tlZCA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLnN0YXRlLnByb2R1Y3RzXTtcbiAgICAgIHByb2R1Y3RzW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgY2hlY2tlZCB9O1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5wcm9kdWN0cztcbiAgICAgIHByb2R1Y3RzLm1hcCgodikgPT4gKHYuY2hlY2tlZCA9IGFjdGlvbi5jaGVja2VkKSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9XG4gICAgICAgIGFjdGlvbi5kYXRhWzFdICE9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXS5maWx0ZXIoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGFbMV0pXG4gICAgICAgICAgOiBhY3Rpb24uZGF0YVswXTtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhWzBdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWVzOiBbLi4uc3RhdGUuY2F0ZWdvcmllcywgYWN0aW9uLmRhdGFdIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEVESVRfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5jYXRlZ29yaWVzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gWy4uLnN0YXRlLmNhdGVnb3JpZXNdO1xuICAgICAgY2F0ZWdvcmllc1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yaWVzIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBzdGF0ZS5jYXRlZ29yaWVzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdHMgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuQ2F0ZWdvcnkuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhdGVnb3JpZXM6IGZpbHRlcmVkQ2F0ZWdvcmllcyxcbiAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTOiB7XG4gICAgICBpZiAoYWN0aW9uLmlkID09IDApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBzdGF0ZS5vcmlnaW5Qcm9kdWN0cyB9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24uaWQgPT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGlzY291bnRlZFByb2R1Y3QgPSBzdGF0ZS5vcmlnaW5Qcm9kdWN0cy5maWx0ZXIoKHYpID0+IHYuRGlzY291bnQgIT09IG51bGwpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGRpc2NvdW50ZWRQcm9kdWN0IH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5pZCk7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nU2hvcExpc3Q6IHRydWUgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNob3BMaXN0OiBhY3Rpb24uZGF0YSwgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsIGxvZGluZ1Nob3BMaXN0RXJyb3I6IGFjdGlvbi5lcnJvciB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=