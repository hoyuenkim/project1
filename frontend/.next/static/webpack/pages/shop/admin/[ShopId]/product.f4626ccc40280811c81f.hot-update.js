webpackHotUpdate_N_E("pages/shop/admin/[ShopId]/product",{

/***/ "./pages/shop/admin/[ShopId]/product/index.js":
/*!****************************************************!*\
  !*** ./pages/shop/admin/[ShopId]/product/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Forms_EditProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/Forms/EditProduct */ "./components/Forms/EditProduct.js");
/* harmony import */ var _components_Forms_DiscountForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/Forms/DiscountForm */ "./components/Forms/DiscountForm.js");
/* harmony import */ var _components_Layout_MenuNavibarLayout___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/Layout/MenuNavibarLayout  */ "./components/Layout/MenuNavibarLayout .js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var _s = $RefreshSig$();

















var Console = function Console() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      query = _useRouter.query;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      session = _useSelector.session;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_10__["PAGE_CHANGE_SUCCESS"],
      data: "admin"
    });
  }, []);
  var ShopId = query.ShopId;

  if (!session || session.division === false) {
    return router.back();
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["ADMIN_PRODUCTS_REQUEST"],
        ShopId: ShopId
      });
    }, []);
  }

  antd__WEBPACK_IMPORTED_MODULE_0__["message"].config({
    top: 100
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      edit = _useState[0],
      setEdit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      discount = _useState2[0],
      setDiscount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      product = _useState3[0],
      setProduct = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      category = _useState4[0],
      setCategory = _useState4[1];

  var onToggleEdit = function onToggleEdit(item) {
    setProduct(item);
    setEdit(function (prev) {
      return !prev;
    });
  };

  var onClickCheckBox = function onClickCheckBox(_ref) {
    var id = _ref.id;
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["CHECK_PRODUCT_SUCCESS"],
      id: id
    });
  };

  var onClickCheckAllBoxs = function onClickCheckAllBoxs(e) {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["CHECK_ALL_PRODUCTS_SUCCESS"],
      checked: e.target.checked
    });
  };

  var onToggleDiscount = function onToggleDiscount() {
    var checked = products.filter(function (product) {
      return product.checked == true;
    });

    if (checked.length == 0) {
      antd__WEBPACK_IMPORTED_MODULE_0__["message"].error("한가지 제품이라도 선택해주세요");
    } else {
      setDiscount(function (prev) {
        return !prev;
      });
    }
  };

  var onToggleOneDiscount = function onToggleOneDiscount(item) {
    setProduct(item);
    setDiscount(function (prev) {
      return !prev;
    });
  };

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.shop;
  }),
      products = _useSelector2.products,
      categories = _useSelector2.categories,
      originProducts = _useSelector2.originProducts;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Affix"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_Layout_MenuNavibarLayout___WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: "admin",
        categories: categories,
        setCategory: setCategory,
        ShopId: session.Shops[0].id,
        products: products,
        originProducts: originProducts
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
          href: "/shop/admin/".concat(query.ShopId, "/product/add"),
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
            children: "\uC0C1\uD488\uCD94\uAC00"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
          type: "primary",
          onClick: onToggleDiscount,
          children: "\uC120\uD0DD\uD560\uC778"
        })]
      }),
      extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
        onChange: onClickCheckAllBoxs,
        children: "\uC804\uCCB4\uC120\uD0DD"
      }),
      children: [discount && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
        title: "세일",
        visible: discount,
        onCancel: function onCancel() {
          setDiscount(false);
        },
        footer: null,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_Forms_DiscountForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          products: products,
          product: product,
          setProduct: setProduct,
          setDiscount: setDiscount,
          category: category,
          ShopId: ShopId
        })
      }), edit && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
        title: "수정하기",
        visible: edit,
        onCancel: function onCancel() {
          setEdit(false);
          setProduct(null);
        },
        footer: null,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_Forms_EditProduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
          product: product,
          setEdit: setEdit,
          setProduct: setProduct,
          categories: categories
        })
      }), products ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        itemLayout: "horizontal",
        dataSource: products,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
                style: {
                  width: "100%"
                },
                actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
                  onClick: function onClick() {
                    return onToggleOneDiscount(item);
                  },
                  children: "\uD560\uC778"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
                  onClick: function onClick() {
                    return onToggleEdit(item);
                  },
                  children: "\uC218\uC815"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"], {
                  title: "".concat(item.title, "\uC744 \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"),
                  onConfirm: function onConfirm() {
                    return dispatch({
                      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_4__["DELETE_PRODUCT_REQUEST"],
                      id: item.id
                    });
                  },
                  onCancel: function onCancel() {
                    return console.log("cancel");
                  },
                  okText: "Yes",
                  cancelText: "No",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
                    children: "\uC0AD\uC81C"
                  })
                })],
                extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"], {
                  checked: item.checked,
                  onClick: function onClick() {
                    return onClickCheckBox(item);
                  }
                }),
                title: item.title,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item.Meta, {
                  avatar: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
                    src: item.Images[0] && "".concat("https://127.0.0.1:3065", "/uploads/").concat(item.Images[0].url),
                    shape: "square",
                    size: "large"
                  }),
                  description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])("p", {
                      children: !item.Discount ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
                        direction: "horizontal",
                        align: "start",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
                          children: "\uAC00\uACA9"
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          value: item.price,
                          displayType: "text",
                          thousandSeparator: true
                        }), "\uC6D0"]
                      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
                        direction: "horizontal",
                        align: "start",
                        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
                          color: "magenta",
                          children: ["-", item.Discount.rate, "%"]
                        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_9__["default"], {
                          value: item.price * (100 - item.Discount.rate) * 0.01,
                          displayType: "text",
                          thousandSeparator: true
                        }), "\uC6D0"]
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxs"])("p", {
                      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
                        children: "\uC0C1\uC138"
                      }), item.description]
                    })]
                  })
                })
              })
            }, item.id)
          });
        }
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Empty"], {})
      })]
    })]
  });
};

_s(Console, "4xlZW9pLWXqt4VFtejfR6ybLNVI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Console;
Console.protoType = {
  productList: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Console);

var _c;

$RefreshReg$(_c, "Console");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJTaG9wSWQiLCJkaXZpc2lvbiIsImJhY2siLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwibWVzc2FnZSIsImNvbmZpZyIsInRvcCIsInVzZVN0YXRlIiwiZWRpdCIsInNldEVkaXQiLCJkaXNjb3VudCIsInNldERpc2NvdW50IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5Iiwib25Ub2dnbGVFZGl0IiwiaXRlbSIsInByZXYiLCJvbkNsaWNrQ2hlY2tCb3giLCJpZCIsIkNIRUNLX1BST0RVQ1RfU1VDQ0VTUyIsIm9uQ2xpY2tDaGVja0FsbEJveHMiLCJlIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJjaGVja2VkIiwidGFyZ2V0Iiwib25Ub2dnbGVEaXNjb3VudCIsInByb2R1Y3RzIiwiZmlsdGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJvblRvZ2dsZU9uZURpc2NvdW50Iiwic2hvcCIsImNhdGVnb3JpZXMiLCJvcmlnaW5Qcm9kdWN0cyIsIlNob3BzIiwid2lkdGgiLCJ0aXRsZSIsIkRFTEVURV9QUk9EVUNUX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwiSW1hZ2VzIiwicHJvY2VzcyIsInVybCIsIkRpc2NvdW50IiwicHJpY2UiLCJyYXRlIiwiZGVzY3JpcHRpb24iLCJwcm90b1R5cGUiLCJwcm9kdWN0TGlzdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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LE87QUFpTk5BLE9BQU8sQ0FBQytELFNBQVIsR0FBb0I7QUFDbEJDLGFBQVcsRUFBRUMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEWixDQUFwQjtBQUllbkUsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0LmY0NjI2Y2NjNDAyODA4MTFjODFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMaXN0LFxuICBCdXR0b24sXG4gIFNwYWNlLFxuICBNb2RhbCxcbiAgQXZhdGFyLFxuICBDYXJkLFxuICBFbXB0eSxcbiAgQ2hlY2tib3gsXG4gIFBvcGNvbmZpcm0sXG4gIEFmZml4LFxuICBtZXNzYWdlLFxuICBUYWcsXG59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtcbiAgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCxcbiAgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIENIRUNLX1BST0RVQ1RfU1VDQ0VTUyxcbiAgREVMRVRFX1BST0RVQ1RfUkVRVUVTVCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL3Nob3BcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IEVkaXRQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0Zvcm1zL0VkaXRQcm9kdWN0XCI7XG5pbXBvcnQgRGlzY291bnRGb3JtIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0Zvcm1zL0Rpc2NvdW50Rm9ybVwiO1xuaW1wb3J0IE1lbnVOYXZpYmFyTGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9NZW51TmF2aWJhckxheW91dCBcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcblxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBDb25zb2xlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHRV9DSEFOR0VfU1VDQ0VTUywgZGF0YTogXCJhZG1pblwiIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgU2hvcElkID0gcXVlcnkuU2hvcElkO1xuXG4gIGlmICghc2Vzc2lvbiB8fCBzZXNzaW9uLmRpdmlzaW9uID09PSBmYWxzZSkge1xuICAgIHJldHVybiByb3V0ZXIuYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsIFNob3BJZCB9KTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBtZXNzYWdlLmNvbmZpZyh7IHRvcDogMTAwIH0pO1xuXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rpc2NvdW50LCBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3Qgb25Ub2dnbGVFZGl0ID0gKGl0ZW0pID0+IHtcbiAgICBzZXRQcm9kdWN0KGl0ZW0pO1xuICAgIHNldEVkaXQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ2hlY2tCb3ggPSAoeyBpZCB9KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDSEVDS19QUk9EVUNUX1NVQ0NFU1MsIGlkIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tDaGVja0FsbEJveHMgPSAoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MsIGNoZWNrZWQ6IGUudGFyZ2V0LmNoZWNrZWQgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVEaXNjb3VudCA9ICgpID0+IHtcbiAgICBjb25zdCBjaGVja2VkID0gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNoZWNrZWQgPT0gdHJ1ZSk7XG4gICAgaWYgKGNoZWNrZWQubGVuZ3RoID09IDApIHtcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCLtlZzqsIDsp4Ag7KCc7ZKI7J20652864+EIOyEoO2Dne2VtOyjvOyEuOyalFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlzY291bnQoKHByZXYpID0+ICFwcmV2KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVPbmVEaXNjb3VudCA9IChpdGVtKSA9PiB7XG4gICAgc2V0UHJvZHVjdChpdGVtKTtcbiAgICBzZXREaXNjb3VudCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IHsgcHJvZHVjdHMsIGNhdGVnb3JpZXMsIG9yaWdpblByb2R1Y3RzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBZmZpeD5cbiAgICAgICAgPE1lbnVOYXZpYmFyTGF5b3V0XG4gICAgICAgICAgdHlwZT17XCJhZG1pblwifVxuICAgICAgICAgIGNhdGVnb3JpZXM9e2NhdGVnb3JpZXN9XG4gICAgICAgICAgc2V0Q2F0ZWdvcnk9e3NldENhdGVnb3J5fVxuICAgICAgICAgIFNob3BJZD17c2Vzc2lvbi5TaG9wc1swXS5pZH1cbiAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgb3JpZ2luUHJvZHVjdHM9e29yaWdpblByb2R1Y3RzfVxuICAgICAgICAvPlxuICAgICAgPC9BZmZpeD5cbiAgICAgIDxDYXJkXG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8U3BhY2U+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3QvYWRkYH0+XG4gICAgICAgICAgICAgIDxCdXR0b24+7IOB7ZKI7LaU6rCAPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25Ub2dnbGVEaXNjb3VudH0+XG4gICAgICAgICAgICAgIOyEoO2Dne2VoOyduFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgfVxuICAgICAgICBleHRyYT17PENoZWNrYm94IG9uQ2hhbmdlPXtvbkNsaWNrQ2hlY2tBbGxCb3hzfT7soITssrTshKDtg508L0NoZWNrYm94Pn1cbiAgICAgID5cbiAgICAgICAge2Rpc2NvdW50ICYmIChcbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRpdGxlPXtcIuyEuOydvFwifVxuICAgICAgICAgICAgdmlzaWJsZT17ZGlzY291bnR9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXREaXNjb3VudChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEaXNjb3VudEZvcm1cbiAgICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICBzZXRQcm9kdWN0PXtzZXRQcm9kdWN0fVxuICAgICAgICAgICAgICBzZXREaXNjb3VudD17c2V0RGlzY291bnR9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgU2hvcElkPXtTaG9wSWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICl9XG4gICAgICAgIHtlZGl0ICYmIChcbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRpdGxlPXtcIuyImOygle2VmOq4sFwifVxuICAgICAgICAgICAgdmlzaWJsZT17ZWRpdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEVkaXQoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRQcm9kdWN0KG51bGwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RWRpdFByb2R1Y3RcbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgc2V0RWRpdD17c2V0RWRpdH1cbiAgICAgICAgICAgICAgc2V0UHJvZHVjdD17c2V0UHJvZHVjdH1cbiAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzID8gKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBpdGVtTGF5b3V0PXtcImhvcml6b250YWxcIn1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25Ub2dnbGVPbmVEaXNjb3VudChpdGVtKX0+7ZWg7J24PC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUVkaXQoaXRlbSl9PuyImOyglTwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtpdGVtLnRpdGxlfeydhCDsoJXrp5DroZwg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfUFJPRFVDVF9SRVFVRVNULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gY29uc29sZS5sb2coXCJjYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7IKt7KCcPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+LFxuICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH0gb25DbGljaz17KCkgPT4gb25DbGlja0NoZWNrQm94KGl0ZW0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLkltYWdlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke2l0ZW0uSW1hZ2VzWzBdLnVybH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPXtcInNxdWFyZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5EaXNjb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9IGFsaWduPXtcInN0YXJ0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWc+6rCA6rKpPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9IGFsaWduPXtcInN0YXJ0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e1wibWFnZW50YVwifT4te2l0ZW0uRGlzY291bnQucmF0ZX0lPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpY2UgKiAoMTAwIC0gaXRlbS5EaXNjb3VudC5yYXRlKSAqIDAuMDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnPuyDgeyEuDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEVtcHR5IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Db25zb2xlLnByb3RvVHlwZSA9IHtcbiAgcHJvZHVjdExpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9