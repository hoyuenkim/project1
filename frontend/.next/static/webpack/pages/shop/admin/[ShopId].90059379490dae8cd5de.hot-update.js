webpackHotUpdate_N_E("pages/shop/admin/[ShopId]",{

/***/ "./pages/shop/admin/[ShopId]/index.js":
/*!********************************************!*\
  !*** ./pages/shop/admin/[ShopId]/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _components_Forms_CategoryForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Forms/CategoryForm */ "./components/Forms/CategoryForm.js");
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _s = $RefreshSig$();













var Index = function Index() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var query = router.query;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      session = _useSelector.session;

  var Shops = session.Shops;
  var ShopInfo = Shops.filter(function (shop) {
    return shop.id == query.ShopId;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  if (!session || session.division === false) {
    return router.back();
  } else {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["ADMIN_PRODUCTS_REQUEST"],
        ShopId: query.ShopId
      });
    }, []);
  }

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.shop;
  }),
      products = _useSelector2.products,
      categories = _useSelector2.categories;

  if (session.division === false || session === undefined) {
    router.back();
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      category = _useState[0],
      setCategory = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      item = _useState2[0],
      setItem = _useState2[1];

  var onToggleCategory = function onToggleCategory(item) {
    setItem(item);
    setCategory(function (prev) {
      return !prev;
    });
  };

  var onClickDelete = function onClickDelete(item) {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["DELETE_CATEGORY_REQUEST"],
      data: {
        id: item.id
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
                onCancel: function onCancel() {
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
                    onClick: function onClick() {
                      return onToggleCategory();
                    },
                    children: "\uCE74\uD14C\uACE0\uB9AC \uCD94\uAC00"
                  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                    children: "\uCE74\uD14C\uACE0\uB9AC\uB294 \uCD5C\uB300 5\uAC1C\uAE4C\uC9C0 \uC124\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                  }),
                  children: categories.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
                    dataSource: categories,
                    renderItem: function renderItem(item, i) {
                      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
                          actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
                            onClick: function onClick() {
                              return onToggleCategory(item);
                            },
                            children: "\uC218\uC815"
                          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Popconfirm"], {
                            title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
                              children: [item.name, "\uC744 \uC815\uB9D0\uB85C \uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", {}), "\uCE74\uD14C\uACE0\uB9AC\uC5D0 \uD574\uB2F9\uD558\uB294 \uBAA8\uB4E0 \uC0C1\uD488\uC774 \uC0AD\uC81C\uB429\uB2C8\uB2E4."]
                            }),
                            onConfirm: function onConfirm() {
                              return dispatch({
                                type: _reducers_shop__WEBPACK_IMPORTED_MODULE_5__["DELETE_CATEGORY_REQUEST"],
                                data: {
                                  id: item.id
                                }
                              });
                            },
                            onCancel: function onCancel() {
                              return console.log("cancel");
                            },
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
                      });
                    }
                  }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Empty"], {
                    children: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uCD94\uAC00\uD574\uC8FC\uC138\uC694."
                  })
                }), products.length > 0 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                  title: "상품정보",
                  extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                    onClick: function onClick() {
                      return router.push("/shop/admin/".concat(query.ShopId, "/product"));
                    },
                    children: "\uC0C1\uD488\uAD00\uB9AC"
                  }),
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
                    title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"].Group, {
                      maxCount: 10,
                      children: products.map(function (product, i) {
                        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
                          src: "".concat("https://127.0.0.1:3065", "/uploads/").concat(product.Images[0].url)
                        }, i);
                      })
                    }),
                    description: products.length > 1 ? "".concat(products[0].title, " \uC678 ").concat(products.length - 1, "\uAC1C\uC758 \uC0C1\uD488\uC774 \uC874\uC7AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.") : "".concat(products[0].title, " \uC0C1\uD488\uC774 \uC874\uC7AC\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.")
                  })
                }), categories.length > 0 && products.length < 1 && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
                  title: "상품정보",
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Empty"], {
                    onClick: function onClick() {
                      return router.push("/shop/admin/".concat(query.ShopId, "/product/add"));
                    },
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
            onClick: function onClick() {
              return router.push("/shop/admin/".concat(query.ShopId, "/history"));
            }
          })
        })]
      })
    })
  });
};

_s(Index, "67yNpkIw+eCRDlHdrb6ZA11N0A8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZXNzaW9uIiwiU2hvcHMiLCJTaG9wSW5mbyIsImZpbHRlciIsInNob3AiLCJpZCIsIlNob3BJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJkaXZpc2lvbiIsImJhY2siLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiQURNSU5fUFJPRFVDVFNfUkVRVUVTVCIsInByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsInVuZGVmaW5lZCIsInVzZVN0YXRlIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIml0ZW0iLCJzZXRJdGVtIiwib25Ub2dnbGVDYXRlZ29yeSIsInByZXYiLCJvbkNsaWNrRGVsZXRlIiwiREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QiLCJkYXRhIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsIndpZHRoIiwibGVuZ3RoIiwiaSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIm1hcCIsInByb2R1Y3QiLCJwcm9jZXNzIiwiSW1hZ2VzIiwidXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFFQTtBQUVBOzs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQVFDLEtBQVIsR0FBa0JGLE1BQWxCLENBQVFFLEtBQVI7O0FBQ0EscUJBQW9CQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUFBLE1BQVFDLE9BQVIsZ0JBQVFBLE9BQVI7O0FBQ0Es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QUFDZSxNQUFULEdBQWtCLENBRnhCLG9HQUlPZixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVkwQixLQUpuQjtBQVpKO0FBUkYsa0JBcERKLEVBaUZHekIsVUFBVSxDQUFDYyxNQUFYLEdBQW9CLENBQXBCLElBQXlCZixRQUFRLENBQUNlLE1BQVQsR0FBa0IsQ0FBM0MsaUJBQ0MsOERBQUMseUNBQUQ7QUFBTSx1QkFBSyxFQUFFLE1BQWI7QUFBQSx5Q0FDRSw4REFBQywwQ0FBRDtBQUFPLDJCQUFPLEVBQUU7QUFBQSw2QkFBTW5DLE1BQU0sQ0FBQ3dDLElBQVAsdUJBQTJCdEMsS0FBSyxDQUFDVSxNQUFqQyxrQkFBTjtBQUFBLHFCQUFoQjtBQUFBO0FBQUE7QUFERixrQkFsRko7QUFBQSxnQkFsQkY7QUFBQTtBQURGO0FBREYsVUFERixlQWlIRSw4REFBQyx3Q0FBRDtBQUFLLGNBQUksRUFBRSxFQUFYO0FBQUEsaUNBQ0UsOERBQUMseUNBQUQ7QUFDRSxpQkFBSyxlQUFFLDhEQUFDLCtDQUFELENBQVksS0FBWjtBQUFrQixtQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQSxjQURUO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNWixNQUFNLENBQUN3QyxJQUFQLHVCQUEyQnRDLEtBQUssQ0FBQ1UsTUFBakMsY0FBTjtBQUFBO0FBRlg7QUFERixVQWpIRjtBQUFBO0FBREY7QUFERixJQURGO0FBOEhELENBcktEOztHQUFNYixLO1VBQ1dFLHFELEVBRUtFLHVELEVBS0hXLHVELEVBVWdCWCx1RDs7O0tBbEI3QkosSztBQXVLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS45MDA1OTM3OTQ5MGRhZThjZDVkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge30gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRW1wdHksXHJcbiAgQ2FyZCxcclxuICBTcGFjZSxcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgTW9kYWwsXHJcbiAgUG9wY29uZmlybSxcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xyXG5cclxuaW1wb3J0IENhdGVnb3J5Rm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm1cIjtcclxuXHJcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBTaG9wcyB9ID0gc2Vzc2lvbjtcclxuICBjb25zdCBTaG9wSW5mbyA9IFNob3BzLmZpbHRlcigoc2hvcCkgPT4ge1xyXG4gICAgcmV0dXJuIHNob3AuaWQgPT0gcXVlcnkuU2hvcElkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24uZGl2aXNpb24gPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQ6IHF1ZXJ5LlNob3BJZCB9KTtcclxuICAgIH0sIFtdKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgcHJvZHVjdHMsIGNhdGVnb3JpZXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcCk7XHJcblxyXG4gIGlmIChzZXNzaW9uLmRpdmlzaW9uID09PSBmYWxzZSB8fCBzZXNzaW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXRlbSwgc2V0SXRlbV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNhdGVnb3J5ID0gKGl0ZW0pID0+IHtcclxuICAgIHNldEl0ZW0oaXRlbSk7XHJcbiAgICBzZXRDYXRlZ29yeSgocHJldikgPT4gIXByZXYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoaXRlbSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGF0YTogeyBpZDogaXRlbS5pZCB9IH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiYWRtaW5cIiB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDYXJkIHRpdGxlPXs8VHlwb2dyYXBoeS5UaXRsZT48L1R5cG9ncmFwaHkuVGl0bGU+fT5cclxuICAgICAgICA8Um93IGd1dHRlcj17WzEwLCAxMF19PlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPXs8VHlwb2dyYXBoeS5UaXRsZSBsZXZlbD17M30+7IOB7ZKI6rSA66asPC9UeXBvZ3JhcGh5LlRpdGxlPn0+XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIuy5tO2FjOqzoOumrFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgU2hvcElkPXtxdWVyeS5TaG9wSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRDYXRlZ29yeT17c2V0Q2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJ2ZXJ0aWNhbFwifSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wi7Lm07YWM6rOg66asIOq0gOumrFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgJiYgY2F0ZWdvcmllcy5sZW5ndGggPCA1ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlQ2F0ZWdvcnkoKX0+7Lm07YWM6rOg66asIOy2lOqwgDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7subTthYzqs6DrpqzripQg7LWc64yAIDXqsJzquYzsp4Ag7ISk7KCV7ZWY7IukIOyImCDsnojsirXri4jri6QuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUNhdGVnb3J5KGl0ZW0pfT7siJjsoJU8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfeydhCDsoJXrp5DroZwg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOy5tO2FjOqzoOumrOyXkCDtlbTri7ntlZjripQg66qo65OgIOyDge2SiOydtCDsgq3soJzrkKnri4jri6QuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpZDogaXRlbS5pZCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IGNvbnNvbGUubG9nKFwiY2FuY2VsXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7sgq3soJw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGEgYXZhdGFyPXs8QXZhdGFyPntpICsgMX08L0F2YXRhcj59IHRpdGxlPXtpdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxFbXB0eT7subTthYzqs6Drpqzrpbwg7LaU6rCA7ZW07KO87IS47JqULjwvRW1wdHk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIuyDge2SiOygleuztFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbi8ke3F1ZXJ5LlNob3BJZH0vcHJvZHVjdGApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDsg4HtkojqtIDrpqxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhci5Hcm91cCBtYXhDb3VudD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke3Byb2R1Y3QuSW1hZ2VzWzBdLnVybH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXIuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCA+IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7cHJvZHVjdHNbMF0udGl0bGV9IOyZuCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfeqwnOydmCDsg4HtkojsnbQg7KG07J6s7ZWY6rOgIOyeiOyKteuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3Byb2R1Y3RzWzBdLnRpdGxlfSDsg4HtkojsnbQg7KG07J6s7ZWY6rOgIOyeiOyKteuLiOuLpC5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5sZW5ndGggPiAwICYmIHByb2R1Y3RzLmxlbmd0aCA8IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtcIuyDge2SiOygleuztFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxFbXB0eSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3QvYWRkYCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDsg4HtkojsnYQg7LaU6rCA7ZW07KO87IS47JqUXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0VtcHR5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9ezxUeXBvZ3JhcGh5LlRpdGxlIGxldmVsPXszfT7rp6TstpzqtIDrpqw8L1R5cG9ncmFwaHkuVGl0bGU+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbi8ke3F1ZXJ5LlNob3BJZH0vaGlzdG9yeWApfVxyXG4gICAgICAgICAgICA+PC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==