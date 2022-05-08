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
    console.log(query.ShopId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJzZXNzaW9uIiwiU2hvcHMiLCJTaG9wSW5mbyIsImZpbHRlciIsInNob3AiLCJpZCIsIlNob3BJZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJkaXZpc2lvbiIsImJhY2siLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidHlwZSIsIkFETUlOX1BST0RVQ1RTX1JFUVVFU1QiLCJwcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJ1bmRlZmluZWQiLCJ1c2VTdGF0ZSIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJpdGVtIiwic2V0SXRlbSIsIm9uVG9nZ2xlQ2F0ZWdvcnkiLCJwcmV2Iiwib25DbGlja0RlbGV0ZSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiZGF0YSIsIlBBR0VfQ0hBTkdFX1NVQ0NFU1MiLCJ3aWR0aCIsImxlbmd0aCIsImkiLCJuYW1lIiwicHVzaCIsIm1hcCIsInByb2R1Y3QiLCJwcm9jZXNzIiwiSW1hZ2VzIiwidXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYUE7QUFFQTtBQUVBOzs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQVFDLEtBQVIsR0FBa0JGLE1BQWxCLENBQVFFLEtBQVI7O0FBQ0EscUJBQW9CQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUFBLE1BQVFDLE9BQVIsZ0JBQVFBLE9BQVI7O0FBQ0EsTUFBUUMsS0FBUixHQUFrQkQsT0FBbEIsQ0FBUUMsS0FBUjtBQUNBLE1BQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RDLFdBQU9BLElBQUksQ0FBQ0MsRUFBTCxJQUFXVCxLQUFLLENBQUNVLE1BQXhCO0FBQ0QsR0FGZ0IsQ0FBakI7QUFHQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLE1BQUksQ0FBQ1IsT0FBRCxJQUFZQSxPQUFPLENBQUNTLFFBQVIsS0FBcUIsS0FBckMsRUFBNEM7QUFDMUMsV0FBT2YsTUFBTSxDQUFDZ0IsSUFBUCxFQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBSyxDQUFDVSxNQUFsQjtBQUNBTywyREFBUyxDQUFDLFlBQU07QUFDZE4sY0FBUSxDQUFDO0FBQUVPLFlBQUksRUFBRUMscUVBQVI7QUFBZ0NULGNBQU0sRUFBRVYsS0FBSyxDQUFDVTtBQUE5QyxPQUFELENBQVI7QUFDRCxLQUZRLEVBRU4sRUFGTSxDQUFUO0FBR0Q7O0FBRUQsc0JBQWlDVCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNNLElBQWpCO0FBQUEsR0FBRCxDQUE1QztBQUFBLE1BQVFZLFFBQVIsaUJBQVFBLFFBQVI7QUFBQSxNQUFrQkMsVUFBbEIsaUJBQWtCQSxVQUFsQjs7QUFFQSxNQUFJakIsT0FBTyxDQUFDUyxRQUFSLEtBQXFCLEtBQXJCLElBQThCVCxPQUFPLEtBQUtrQixTQUE5QyxFQUF5RDtBQUN2RHhCLFVBQU0sQ0FBQ2dCLElBQVA7QUFDRDs7QUFFRCxrQkFBZ0NTLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQXdCRixzREFBUSxFQUFoQztBQUFBLE1BQU9HLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsSUFBRCxFQUFVO0FBQ2pDQyxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBRCxlQUFXLENBQUMsVUFBQ0ksSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWDtBQUNELEdBSEQ7O0FBS0EsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDSixJQUFELEVBQVU7QUFDOUJmLFlBQVEsQ0FBQztBQUFFTyxVQUFJLEVBQUVhLHNFQUFSO0FBQWlDQyxVQUFJLEVBQUU7QUFBRXZCLFVBQUUsRUFBRWlCLElBQUksQ0FBQ2pCO0FBQVg7QUFBdkMsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2ROLFlBQVEsQ0FBQztBQUFFTyxVQUFJLEVBQUVlLG1FQUFSO0FBQTZCRCxVQUFJLEVBQUU7QUFBbkMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMseUNBQUQ7QUFBTSxXQUFLLGVBQUUsOERBQUMsK0NBQUQsQ0FBWSxLQUFaLEtBQWI7QUFBQSw2QkFDRSwrREFBQyx3Q0FBRDtBQUFLLGNBQU0sRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWI7QUFBQSxnQ0FDRSw4REFBQyx3Q0FBRDtBQUFLLGNBQUksRUFBRSxFQUFYO0FBQUEsaUNBQ0UsOERBQUMseUNBQUQ7QUFBTSxpQkFBSyxlQUFFLDhEQUFDLCtDQUFELENBQVksS0FBWjtBQUFrQixtQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQSxjQUFiO0FBQUEsbUNBQ0U7QUFBQSx5QkFDR1IsUUFBUSxpQkFDUCw4REFBQywwQ0FBRDtBQUNFLHFCQUFLLEVBQUUsTUFEVDtBQUVFLHVCQUFPLEVBQUVBLFFBRlg7QUFHRSx3QkFBUSxFQUFFLG9CQUFNO0FBQ2RDLDZCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsaUJBTEg7QUFNRSxzQkFBTSxFQUFFLElBTlY7QUFBQSx1Q0FRRSw4REFBQyxzRUFBRDtBQUNFLHNCQUFJLEVBQUVDLElBRFI7QUFFRSx3QkFBTSxFQUFFMUIsS0FBSyxDQUFDVSxNQUZoQjtBQUdFLDZCQUFXLEVBQUVlLFdBSGY7QUFJRSx5QkFBTyxFQUFFRTtBQUpYO0FBUkYsZ0JBRkosZUFrQkUsK0RBQUMsMENBQUQ7QUFBTyx5QkFBUyxFQUFFLFVBQWxCO0FBQThCLHFCQUFLLEVBQUU7QUFBRU8sdUJBQUssRUFBRTtBQUFULGlCQUFyQztBQUFBLHdDQUNFLDhEQUFDLHlDQUFEO0FBQ0UsdUJBQUssRUFBRSxTQURUO0FBRUUsdUJBQUssRUFDSGIsVUFBVSxJQUFJQSxVQUFVLENBQUNjLE1BQVgsR0FBb0IsQ0FBbEMsZ0JBQ0UsOERBQUMsMkNBQUQ7QUFBUSwyQkFBTyxFQUFFO0FBQUEsNkJBQU1QLGdCQUFnQixFQUF0QjtBQUFBLHFCQUFqQjtBQUFBO0FBQUEsb0JBREYsZ0JBR0U7QUFBQTtBQUFBLG9CQU5OO0FBQUEsNEJBVUdQLFVBQVUsQ0FBQ2MsTUFBWCxHQUFvQixDQUFwQixnQkFDQyw4REFBQyx5Q0FBRDtBQUNFLDhCQUFVLEVBQUVkLFVBRGQ7QUFFRSw4QkFBVSxFQUFFLG9CQUFDSyxJQUFELEVBQU9VLENBQVA7QUFBQSwwQ0FDVjtBQUFBLCtDQUNFLDhEQUFDLHlDQUFELENBQU0sSUFBTjtBQUVFLGlDQUFPLEVBQUUsY0FDUDtBQUFLLG1DQUFPLEVBQUU7QUFBQSxxQ0FBTVIsZ0JBQWdCLENBQUNGLElBQUQsQ0FBdEI7QUFBQSw2QkFBZDtBQUFBO0FBQUEsNEJBRE8sZUFFUCw4REFBQywrQ0FBRDtBQUNFLGlDQUFLLGVBQ0g7QUFBQSx5Q0FDR0EsSUFBSSxDQUFDVyxJQURSLDhGQUVFLHVFQUZGO0FBQUEsOEJBRko7QUFRRSxxQ0FBUyxFQUFFO0FBQUEscUNBQ1QxQixRQUFRLENBQUM7QUFDUE8sb0NBQUksRUFBRWEsc0VBREM7QUFFUEMsb0NBQUksRUFBRTtBQUFFdkIsb0NBQUUsRUFBRWlCLElBQUksQ0FBQ2pCO0FBQVg7QUFGQywrQkFBRCxDQURDO0FBQUEsNkJBUmI7QUFjRSxvQ0FBUSxFQUFFO0FBQUEscUNBQU1NLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosQ0FBTjtBQUFBLDZCQWRaO0FBZUUsa0NBQU0sRUFBQyxLQWZUO0FBZ0JFLHNDQUFVLEVBQUMsSUFoQmI7QUFBQSxtREFrQkU7QUFBQTtBQUFBO0FBbEJGLDRCQUZPLENBRlg7QUFBQSxpREEwQkUsOERBQUMseUNBQUQsQ0FBTSxJQUFOLENBQVcsSUFBWDtBQUFnQixrQ0FBTSxlQUFFLDhEQUFDLDJDQUFEO0FBQUEsd0NBQVNvQixDQUFDLEdBQUc7QUFBYiw4QkFBeEI7QUFBa0QsaUNBQUssRUFBRVYsSUFBSSxDQUFDVztBQUE5RDtBQTFCRiwyQkFDT0QsQ0FEUDtBQURGLHdCQURVO0FBQUE7QUFGZCxvQkFERCxnQkFxQ0MsOERBQUMsMENBQUQ7QUFBQTtBQUFBO0FBL0NKLGtCQURGLEVBbURHaEIsUUFBUSxDQUFDZSxNQUFULEdBQWtCLENBQWxCLGlCQUNDLDhEQUFDLHlDQUFEO0FBQ0UsdUJBQUssRUFBRSxNQURUO0FBRUUsdUJBQUssZUFDSCw4REFBQywyQ0FBRDtBQUFRLDJCQUFPLEVBQUU7QUFBQSw2QkFBTXJDLE1BQU0sQ0FBQ3dDLElBQVAsdUJBQTJCdEMsS0FBSyxDQUFDVSxNQUFqQyxjQUFOO0FBQUEscUJBQWpCO0FBQUE7QUFBQSxvQkFISjtBQUFBLHlDQVFFLDhEQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLHlCQUFLLGVBQ0gsOERBQUMsMkNBQUQsQ0FBUSxLQUFSO0FBQWMsOEJBQVEsRUFBRSxFQUF4QjtBQUFBLGdDQUNHVSxRQUFRLENBQUNtQixHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVSixDQUFWO0FBQUEsNENBQ1osOERBQUMsMkNBQUQ7QUFFRSw2QkFBRyxZQUFLSyx3QkFBTCxzQkFBdUNELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLENBQWYsRUFBa0JDLEdBQXpEO0FBRkwsMkJBQ09QLENBRFAsQ0FEWTtBQUFBLHVCQUFiO0FBREgsc0JBRko7QUFXRSwrQkFBVyxFQUNUaEIsUUFBUSxDQUFDZSxNQUFULEdBQWtCLENBQWxCLGFBQ09mLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWXdCLEtBRG5CLHFCQUVNeEIsUUFBUSxDQUFDZSxNQUFULEdBQWtCLENBRnhCLG9HQUlPZixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVl3QixLQUpuQjtBQVpKO0FBUkYsa0JBcERKLEVBaUZHdkIsVUFBVSxDQUFDYyxNQUFYLEdBQW9CLENBQXBCLElBQXlCZixRQUFRLENBQUNlLE1BQVQsR0FBa0IsQ0FBM0MsaUJBQ0MsOERBQUMseUNBQUQ7QUFBTSx1QkFBSyxFQUFFLE1BQWI7QUFBQSx5Q0FDRSw4REFBQywwQ0FBRDtBQUFPLDJCQUFPLEVBQUU7QUFBQSw2QkFBTXJDLE1BQU0sQ0FBQ3dDLElBQVAsdUJBQTJCdEMsS0FBSyxDQUFDVSxNQUFqQyxrQkFBTjtBQUFBLHFCQUFoQjtBQUFBO0FBQUE7QUFERixrQkFsRko7QUFBQSxnQkFsQkY7QUFBQTtBQURGO0FBREYsVUFERixlQWlIRSw4REFBQyx3Q0FBRDtBQUFLLGNBQUksRUFBRSxFQUFYO0FBQUEsaUNBQ0UsOERBQUMseUNBQUQ7QUFDRSxpQkFBSyxlQUFFLDhEQUFDLCtDQUFELENBQVksS0FBWjtBQUFrQixtQkFBSyxFQUFFLENBQXpCO0FBQUE7QUFBQSxjQURUO0FBRUUsbUJBQU8sRUFBRTtBQUFBLHFCQUFNWixNQUFNLENBQUN3QyxJQUFQLHVCQUEyQnRDLEtBQUssQ0FBQ1UsTUFBakMsY0FBTjtBQUFBO0FBRlg7QUFERixVQWpIRjtBQUFBO0FBREY7QUFERixJQURGO0FBOEhELENBdEtEOztHQUFNYixLO1VBQ1dFLHFELEVBRUtFLHVELEVBS0hXLHVELEVBV2dCWCx1RDs7O0tBbkI3QkosSztBQXdLU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS44NzA1NmFhZDEzMTZkMGM3ZWQ0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge30gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRW1wdHksXHJcbiAgQ2FyZCxcclxuICBTcGFjZSxcclxuICBMaXN0LFxyXG4gIEJ1dHRvbixcclxuICBBdmF0YXIsXHJcbiAgTW9kYWwsXHJcbiAgUG9wY29uZmlybSxcclxuICBDb2wsXHJcbiAgUm93LFxyXG4gIFR5cG9ncmFwaHksXHJcbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xyXG5cclxuaW1wb3J0IENhdGVnb3J5Rm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9DYXRlZ29yeUZvcm1cIjtcclxuXHJcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlcjtcclxuICBjb25zdCB7IHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBTaG9wcyB9ID0gc2Vzc2lvbjtcclxuICBjb25zdCBTaG9wSW5mbyA9IFNob3BzLmZpbHRlcigoc2hvcCkgPT4ge1xyXG4gICAgcmV0dXJuIHNob3AuaWQgPT0gcXVlcnkuU2hvcElkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8IHNlc3Npb24uZGl2aXNpb24gPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2cocXVlcnkuU2hvcElkKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQURNSU5fUFJPRFVDVFNfUkVRVUVTVCwgU2hvcElkOiBxdWVyeS5TaG9wSWQgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHByb2R1Y3RzLCBjYXRlZ29yaWVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xyXG5cclxuICBpZiAoc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UgfHwgc2Vzc2lvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByb3V0ZXIuYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDYXRlZ29yeSA9IChpdGVtKSA9PiB7XHJcbiAgICBzZXRJdGVtKGl0ZW0pO1xyXG4gICAgc2V0Q2F0ZWdvcnkoKHByZXYpID0+ICFwcmV2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrRGVsZXRlID0gKGl0ZW0pID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QsIGRhdGE6IHsgaWQ6IGl0ZW0uaWQgfSB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcImFkbWluXCIgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2FyZCB0aXRsZT17PFR5cG9ncmFwaHkuVGl0bGU+PC9UeXBvZ3JhcGh5LlRpdGxlPn0+XHJcbiAgICAgICAgPFJvdyBndXR0ZXI9e1sxMCwgMTBdfT5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT17PFR5cG9ncmFwaHkuVGl0bGUgbGV2ZWw9ezN9PuyDge2SiOq0gOumrDwvVHlwb2dyYXBoeS5UaXRsZT59PlxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLsubTthYzqs6DrpqxcIn1cclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIFNob3BJZD17cXVlcnkuU2hvcElkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnk9e3NldENhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1widmVydGljYWxcIn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIuy5tO2FjOqzoOumrCDqtIDrpqxcIn1cclxuICAgICAgICAgICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubGVuZ3RoIDwgNSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUNhdGVnb3J5KCl9Puy5tO2FjOqzoOumrCDstpTqsIA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7Lm07YWM6rOg66as64qUIOy1nOuMgCA16rCc6rmM7KeAIOyEpOygle2VmOyLpCDsiJgg7J6I7Iq164uI64ukLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25Ub2dnbGVDYXRlZ29yeShpdGVtKX0+7IiY7KCVPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX3snYQg7KCV66eQ66GcIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsubTthYzqs6Drpqzsl5Ag7ZW064u57ZWY64qUIOuqqOuToCDsg4HtkojsnbQg7IKt7KCc65Cp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9DQVRFR09SWV9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaWQ6IGl0ZW0uaWQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBjb25zb2xlLmxvZyhcImNhbmNlbFwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0PVwiTm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7IKt7KCcPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3Bjb25maXJtPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhIGF2YXRhcj17PEF2YXRhcj57aSArIDF9PC9BdmF0YXI+fSB0aXRsZT17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wdHk+7Lm07YWM6rOg66as66W8IOy2lOqwgO2VtOyjvOyEuOyalC48L0VtcHR5PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCLsg4HtkojsoJXrs7RcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3RgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg7IOB7ZKI6rSA66asXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIuR3JvdXAgbWF4Q291bnQ9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9L3VwbG9hZHMvJHtwcm9kdWN0LkltYWdlc1swXS51cmx9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2R1Y3RzWzBdLnRpdGxlfSDsmbggJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH3qsJzsnZgg7IOB7ZKI7J20IOyhtOyerO2VmOqzoCDsnojsirXri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9kdWN0c1swXS50aXRsZX0g7IOB7ZKI7J20IOyhtOyerO2VmOqzoCDsnojsirXri4jri6QuYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubGVuZ3RoID4gMCAmJiBwcm9kdWN0cy5sZW5ndGggPCAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17XCLsg4HtkojsoJXrs7RcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RW1wdHkgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9zaG9wL2FkbWluLyR7cXVlcnkuU2hvcElkfS9wcm9kdWN0L2FkZGApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg7IOB7ZKI7J2EIOy2lOqwgO2VtOyjvOyEuOyalFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9FbXB0eT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgc3Bhbj17MjR9PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPXs8VHlwb2dyYXBoeS5UaXRsZSBsZXZlbD17M30+66ek7Lac6rSA66asPC9UeXBvZ3JhcGh5LlRpdGxlPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L2hpc3RvcnlgKX1cclxuICAgICAgICAgICAgPjwvQ2FyZD5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=