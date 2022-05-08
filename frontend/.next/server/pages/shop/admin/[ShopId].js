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
    return shop.id == query.ShopId;
  });
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  if (!session || session.division === false) {
    return router.back();
  } else {
    console.log(query.ShopId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9zaG9wLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDYXRlZ29yeUZvcm0iLCJpdGVtIiwic2V0Q2F0ZWdvcnkiLCJTaG9wSWQiLCJzZXRJdGVtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm5hbWUiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJvbkNoYW5nZU5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkZpbmlzaCIsInR5cGUiLCJFRElUX0NBVEVHT1JZX1JFUVVFU1QiLCJkYXRhIiwiaWQiLCJBRERfQ0FURUdPUllfUkVRVUVTVCIsIkluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJzZXNzaW9uIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJTaG9wcyIsIlNob3BJbmZvIiwiZmlsdGVyIiwic2hvcCIsImRpdmlzaW9uIiwiYmFjayIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwicHJvZHVjdHMiLCJjYXRlZ29yaWVzIiwidW5kZWZpbmVkIiwiY2F0ZWdvcnkiLCJvblRvZ2dsZUNhdGVnb3J5IiwicHJldiIsIm9uQ2xpY2tEZWxldGUiLCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVCIsIlBBR0VfQ0hBTkdFX1NVQ0NFU1MiLCJ3aWR0aCIsImxlbmd0aCIsImkiLCJwdXNoIiwibWFwIiwicHJvZHVjdCIsInByb2Nlc3MiLCJJbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwiZXZlbnRzIiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19SRVFVRVNUIiwiTE9BRF9FVkVOVFNfU1VDQ0VTUyIsIkxPQURfRVZFTlRTX0ZBSUxVUkUiLCJBRERfRVZFTlRfUkVRVUVTVCIsIkFERF9FVkVOVF9TVUNDRVNTIiwiQUREX0VWRU5UX0ZBSUxVUkUiLCJFRElUX0VWRU5UX1JFUVVFU1QiLCJFRElUX0VWRU5UX1NVQ0NFU1MiLCJFRElUX0VWRU5UX0ZBSUxVUkUiLCJERUxFVEVfRVZFTlRfUkVRVUVTVCIsIkRFTEVURV9FVkVOVF9TVUNDRVNTIiwiREVMRVRFX0VWRU5UX0ZBSUxVUkUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJvcmlnaW5Qcm9kdWN0cyIsImlzQWRkaW5nRmlsZXMiLCJpc0xvYWRpbmdQcm9kdWN0cyIsImlzU2VsZWN0aW5nUHJvZHVjdCIsInNlbGVjdGluZ1Byb2R1Y3RFcnJvciIsImlzQWRkaW5nU2hvcCIsInVzZXJDb29yZGluYXRlcyIsInNob3BDb29yZGluYXRlcyIsInByb2R1Y3RzTmVhciIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJBRERfUFJPRFVDVF9TVUNDRVNTIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1MiLCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFIiwiU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCIsIlNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MiLCJTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJFRElUX1BST0RVQ1RfU1VDQ0VTUyIsIkVESVRfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVCIsIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1MiLCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFIiwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QiLCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUiLCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVCIsIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTIiwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9DQVRFR09SWV9GQUlMVVJFIiwiRURJVF9DQVRFR09SWV9TVUNDRVNTIiwiRURJVF9DQVRFR09SWV9GQUlMVVJFIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkNBVEVHT1JZX0ZJTFRFUkVEX1NVQ0NFU1MiLCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUyIsIlNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUyIsIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QiLCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhdGVnb3J5IiwiY2hlY2tlZCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsImRpc2NvdW50ZWRQcm9kdWN0IiwiRGlzY291bnQiLCJsb2RpbmdTaG9wTGlzdEVycm9yIiwibGlzdCIsIm5lYXIiLCJxdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7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QUFuQztBQUNBLGNBQU05QyxZQUFZLEdBQUcsQ0FBQyxHQUFHOUUsS0FBSyxDQUFDOEUsWUFBVixDQUFyQjtBQUNBQSxvQkFBWSxDQUFDa0MsS0FBRCxDQUFaLG1DQUEyQnRGLE9BQTNCO0FBQW9Da0c7QUFBcEM7QUFFQSwrQ0FDSzVILEtBREw7QUFFRThFO0FBRkY7QUFJRDs7QUFFRCxTQUFLaUMsK0JBQUw7QUFBc0M7QUFDcEMsY0FBTUMsS0FBSyxHQUFHaEgsS0FBSyxDQUFDOEUsWUFBTixDQUFtQm1DLFNBQW5CLENBQThCVSxJQUFELElBQVVBLElBQUksQ0FBQ25JLEVBQUwsS0FBWTBFLE1BQU0sQ0FBQzNFLElBQVAsQ0FBWUMsRUFBL0QsQ0FBZDtBQUNBLGNBQU1rQyxPQUFPLEdBQUcxQixLQUFLLENBQUM4RSxZQUFOLENBQW1Ca0MsS0FBbkIsQ0FBaEI7QUFDQSxZQUFJWSxRQUFRLEdBQUdsRyxPQUFPLENBQUNrRyxRQUF2QjtBQUNBQSxnQkFBUSxHQUFHLENBQVgsR0FBZ0JBLFFBQVEsSUFBSSxDQUE1QixHQUFpQyxDQUFqQztBQUNBLGNBQU05QyxZQUFZLEdBQUcsQ0FBQyxHQUFHOUUsS0FBSyxDQUFDOEUsWUFBVixDQUFyQjtBQUNBQSxvQkFBWSxDQUFDa0MsS0FBRCxDQUFaLG1DQUEyQnRGLE9BQTNCO0FBQW9Da0c7QUFBcEM7QUFDQSwrQ0FDSzVILEtBREw7QUFFRThFO0FBRkY7QUFJRDs7QUFFRDtBQUFTO0FBQ1AsaUNBQ0s5RSxLQURMO0FBR0Q7QUFuUUg7QUFxUUQsQ0F0UUQ7O0FBd1FlaUUsc0VBQWYsRTs7Ozs7Ozs7Ozs7QUNuVkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBRERfQ0FURUdPUllfUkVRVUVTVCwgRURJVF9DQVRFR09SWV9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvc2hvcCc7XG5cbmNvbnN0IENhdGVnb3J5Rm9ybSA9ICh7IGl0ZW0sIHNldENhdGVnb3J5LCBTaG9wSWQsIHNldEl0ZW0gfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKGl0ZW0gJiYgaXRlbS5uYW1lKTtcbiAgY29uc3Qgb25DaGFuZ2VOYW1lID0gKGUpID0+IHtcbiAgICByZXR1cm4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogRURJVF9DQVRFR09SWV9SRVFVRVNULCBkYXRhOiB7IGlkOiBpdGVtLmlkLCBuYW1lLCBTaG9wSWQgfSB9KTtcbiAgICAgIHNldENhdGVnb3J5KGZhbHNlKTtcbiAgICAgIHNldEl0ZW0obnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQUREX0NBVEVHT1JZX1JFUVVFU1QsIGRhdGE6IHsgbmFtZSwgU2hvcElkIH0gfSk7XG4gICAgICBzZXRDYXRlZ29yeShmYWxzZSk7XG4gICAgICBzZXRJdGVtKG51bGwpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvbkZpbmlzaD17b25GaW5pc2h9PlxuICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPXsn7Lm07YWM6rOg66as66qF7J2EIOyeheugpe2VtOyjvOyEuOyalCd9IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17b25DaGFuZ2VOYW1lfSAvPlxuICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICA8QnV0dG9uIGh0bWxUeXBlPXsnc3VibWl0J30+7KCc7LacPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlGb3JtO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge30gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRW1wdHksXHJcbiAgQ2FyZCxcclxuICBTcGFjZSxcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgTW9kYWwsXHJcbiAgUG9wY29uZmlybSxcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xyXG5cclxuaW1wb3J0IENhdGVnb3J5Rm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm1cIjtcclxuXHJcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBTaG9wcyB9ID0gc2Vzc2lvbjtcclxuICBjb25zdCBTaG9wSW5mbyA9IFNob3BzLmZpbHRlcigoc2hvcCkgPT4ge1xyXG4gICAgcmV0dXJuIHNob3AuaWQgPT0gcXVlcnkuU2hvcElkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24uZGl2aXNpb24gPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2cocXVlcnkuU2hvcElkKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgU2hvcElkOiBxdWVyeS5TaG9wSWQgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UgfHwgc2Vzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByb3V0ZXIuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDYXRlZ29yeSA9IChpdGVtKSA9PiB7XHJcbiAgICBzZXRJdGVtKGl0ZW0pO1xyXG4gICAgc2V0Q2F0ZWdvcnkoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrRGVsZXRlID0gKGl0ZW0pID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QsIGRhdGE6IHsgaWQ6IGl0ZW0uaWQgfSB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcImFkbWluXCIgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZCB0aXRsZT17PFR5cG9ncmFwaHkuVGl0bGU+PC9UeXBvZ3JhcGh5LlRpdGxlPn0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1sxMCwgMTBdfT5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17PFR5cG9ncmFwaHkuVGl0bGUgbGV2ZWw9ezN9PuyDge2SiOq0gOumrDwvVHlwb2dyYXBoeS5UaXRsZT59PlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLsubTthYzqs6DrpqxcIn1cclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIFNob3BJZD17cXVlcnkuU2hvcElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnk9e3NldENhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1widmVydGljYWxcIn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIuy5tO2FjOqzoOumrCDqtIDrpqxcIn1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubGVuZ3RoIDwgNSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUNhdGVnb3J5KCl9Puy5tO2FjOqzoOumrCDstpTqsIA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7Lm07YWM6rOg66as64qUIOy1nOuMgCA16rCc6rmM7KeAIOyEpOygle2VmOyLpCDsiJgg7J6I7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25Ub2dnbGVDYXRlZ29yeShpdGVtKX0+7IiY7KCVPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX3snYQg7KCV66eQ66GcIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsubTthYzqs6Drpqzsl5Ag7ZW064u57ZWY64qUIOuqqOuToCDsg4HtkojsnbQg7IKt7KCc65Cp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9DQVRFR09SWV9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IGl0ZW0uaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBjb25zb2xlLmxvZyhcImNhbmNlbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7IKt7KCcPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIGF2YXRhcj17PEF2YXRhcj57aSArIDF9PC9BdmF0YXI+fSB0aXRsZT17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wdHk+7Lm07YWM6rOg66as66W8IOy2lOqwgO2VtOyjvOyEuOyalC48L0VtcHR5PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLsg4HtkojsoJXrs7RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3RgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7IOB7ZKI6rSA66asXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIuR3JvdXAgbWF4Q291bnQ9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9L3VwbG9hZHMvJHtwcm9kdWN0LkltYWdlc1swXS51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2R1Y3RzWzBdLnRpdGxlfSDsmbggJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH3qsJzsnZgg7IOB7ZKI7J20IOyhtOyerO2VmOqzoCDsnojsirXri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9kdWN0c1swXS50aXRsZX0g7IOB7ZKI7J20IOyhtOyerO2VmOqzoCDsnojsirXri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCAmJiBwcm9kdWN0cy5sZW5ndGggPCAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17XCLsg4HtkojsoJXrs7RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wdHkgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zaG9wL2FkbWluLyR7cXVlcnkuU2hvcElkfS9wcm9kdWN0L2FkZGApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7IOB7ZKI7J2EIOy2lOqwgO2VtOyjvOyEuOyalFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9FbXB0eT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPXs8VHlwb2dyYXBoeS5UaXRsZSBsZXZlbD17M30+66ek7Lac6rSA66asPC9UeXBvZ3JhcGh5LlRpdGxlPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L2hpc3RvcnlgKX1cclxuICAgICAgICAgICAgPjwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpc0xvYWRpbmdTaG9wTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdTaG9wTGlzdEVycm9yOiBudWxsLFxuICBzaG9wTGlzdDogW10sXG4gIG9yaWdpbmFsU2hvcExpc3Q6IFtdLFxuICBpc0xvYWRpbmdVc2VyTGlzdDogZmFsc2UsXG4gIGxvYWRpbmdVc2VyTGlzdEVycm9yOiBudWxsLFxuICB1c2VyTGlzdDogW10sXG4gIG9yaWdpbmFsVXNlckxpc3Q6IFtdLFxuICBldmVudHM6IFtdLFxuICBsb2FkRXZlbnRzRXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ0V2ZW50czogZmFsc2UsXG4gIHBhZ2VJbmZvOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfUkVRVUVTVCA9ICdMT0FEX1VTRVJMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfU1VDQ0VTUyA9ICdMT0FEX1VTRVJMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUkxJU1RfRkFJTFVSRSA9ICdMT0FEX1VTRVJMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9SRVFVRVNUID0gJ0xPQURfU0hPUExJU1RfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9TVUNDRVNTID0gJ0xPQURfU0hPUExJU1RfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gJ0xPQURfU0hPUExJU1RfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9SRVFVRVNUID0gJ0RFTEVURV9VU0VSX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX1NVQ0NFU1MgPSAnREVMRVRFX1VTRVJfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfRkFJTFVSRSA9ICdERUxFVEVfVVNFUl9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1JFUVVFU1QgPSAnTE9BRF9FVkVOVFNfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfU1VDQ0VTUyA9ICdMT0FEX0VWRU5UU19TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19GQUlMVVJFID0gJ0xPQURfRVZFTlRTX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0VWRU5UX1JFUVVFU1QgPSAnQUREX0VWRU5UX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9TVUNDRVNTID0gJ0FERF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfRkFJTFVSRSA9ICdBRERfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1JFUVVFU1QgPSAnRURJVF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX1NVQ0NFU1MgPSAnRURJVF9FVkVOVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBFRElUX0VWRU5UX0ZBSUxVUkUgPSAnRURJVF9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9SRVFVRVNUID0gJ0RFTEVURV9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfU1VDQ0VTUyA9ICdERUxFVEVfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgUEFHRV9DSEFOR0VfU1VDQ0VTUyA9ICdQQUdFX0NIQU5HRV9TVUNDRVNTJztcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC51c2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFVzZXJMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdVc2VyTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGRyYWZ0Lm9yaWdpbmFsU2hvcExpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9hZGluZ1Nob3BMaXN0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQQUdFX0NIQU5HRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5wYWdlSW5mbyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN0YXRlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvcDogbnVsbCxcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwcm9kdWN0OiBudWxsLFxuICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIGlzQWRkaW5nU2hvcDogZmFsc2UsXG4gIHVzZXJDb29yZGluYXRlczogdW5kZWZpbmVkLFxuICBzaG9wQ29vcmRpbmF0ZXM6IHVuZGVmaW5lZCxcbiAgcHJvZHVjdHNOZWFyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9IFwiQUREX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkFERF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gXCJBRERfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19SRVFVRVNUID0gXCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUgPSBcIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QgPSBcIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTID0gXCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSA9IFwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkVESVRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkVESVRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkVESVRfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9SRVFVRVNUID0gXCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyA9IFwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BST0RVQ1RfU1VDQ0VTUyA9IFwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCA9IFwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTID0gXCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QgPSBcIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MgPSBcIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUgPSBcIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfUkVRVUVTVCA9IFwiQUREX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQUREX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfRkFJTFVSRSA9IFwiQUREX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfUkVRVUVTVCA9IFwiRURJVF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9TVUNDRVNTID0gXCJFRElUX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkVESVRfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkRFTEVURV9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTID0gXCJDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSBcIkxPQURfU0hPUExJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9IFwiTE9BRF9TSE9QTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gXCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9DT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QgPSBcIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gXCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogdHJ1ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLCAuLi5zdGF0ZSwgcHJvZHVjdDogYWN0aW9uLmRhdGEgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5pZCAhPSBhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSA9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5kYXRhWzFdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBjaGVja2VkID0gcHJvZHVjdC5jaGVja2VkO1xuICAgICAgY2hlY2tlZCA9IGNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIGNoZWNrZWQgfTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICBwcm9kdWN0cy5tYXAoKHYpID0+ICh2LmNoZWNrZWQgPSBhY3Rpb24uY2hlY2tlZCkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSAhPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhWzFdKVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF07XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogWy4uLnN0YXRlLmNhdGVnb3JpZXMsIGFjdGlvbi5kYXRhXSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsuLi5zdGF0ZS5jYXRlZ29yaWVzXTtcbiAgICAgIGNhdGVnb3JpZXNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllcyB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogc3RhdGUub3JpZ2luUHJvZHVjdHMgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkRpc2NvdW50ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLCBsb2RpbmdTaG9wTGlzdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9DT09SRElOQVRFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJDb29yZGluYXRlczogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuXG4gICAgY2FzZSBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wQ29vcmRpbmF0ZXM6IGFjdGlvbi5kYXRhLmxpc3QsIHByb2R1Y3RzTmVhcjogYWN0aW9uLmRhdGEucHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnByb2R1Y3RzTmVhcik7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzTmVhcltpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPCAxMDAgPyAocXVhbnRpdHkgKz0gMSkgOiA5OTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzTmVhciA9IFsuLi5zdGF0ZS5wcm9kdWN0c05lYXJdO1xuICAgICAgcHJvZHVjdHNOZWFyW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTmVhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c05lYXJbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0c05lYXIgPSBbLi4uc3RhdGUucHJvZHVjdHNOZWFyXTtcbiAgICAgIHByb2R1Y3RzTmVhcltpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNOZWFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9