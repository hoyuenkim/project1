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
          ShopId: session.Shops[0].id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJTaG9wSWQiLCJkaXZpc2lvbiIsImJhY2siLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwibWVzc2FnZSIsImNvbmZpZyIsInRvcCIsInVzZVN0YXRlIiwiZWRpdCIsInNldEVkaXQiLCJkaXNjb3VudCIsInNldERpc2NvdW50IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5Iiwib25Ub2dnbGVFZGl0IiwiaXRlbSIsInByZXYiLCJvbkNsaWNrQ2hlY2tCb3giLCJpZCIsIkNIRUNLX1BST0RVQ1RfU1VDQ0VTUyIsIm9uQ2xpY2tDaGVja0FsbEJveHMiLCJlIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJjaGVja2VkIiwidGFyZ2V0Iiwib25Ub2dnbGVEaXNjb3VudCIsInByb2R1Y3RzIiwiZmlsdGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJvblRvZ2dsZU9uZURpc2NvdW50Iiwic2hvcCIsImNhdGVnb3JpZXMiLCJvcmlnaW5Qcm9kdWN0cyIsIlNob3BzIiwid2lkdGgiLCJ0aXRsZSIsIkRFTEVURV9QUk9EVUNUX1JFUVVFU1QiLCJjb25zb2xlIiwibG9nIiwiSW1hZ2VzIiwicHJvY2VzcyIsInVybCIsIkRpc2NvdW50IiwicHJpY2UiLCJyYXRlIiwiZGVzY3JpcHRpb24iLCJwcm90b1R5cGUiLCJwcm9kdWN0TGlzdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUNHQSxxRCxFQUNFRSx1RCxFQWlENkJBLHVEOzs7S0FyRDdDTixPO0FBaU5OQSxPQUFPLENBQUMrRCxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFosQ0FBcEI7QUFJZW5FLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvYWRtaW4vW1Nob3BJZF0vcHJvZHVjdC40ZTRjNTA2ZDFkNzAyOGNmZjlkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTGlzdCxcbiAgQnV0dG9uLFxuICBTcGFjZSxcbiAgTW9kYWwsXG4gIEF2YXRhcixcbiAgQ2FyZCxcbiAgRW1wdHksXG4gIENoZWNrYm94LFxuICBQb3Bjb25maXJtLFxuICBBZmZpeCxcbiAgbWVzc2FnZSxcbiAgVGFnLFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsXG4gIENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTLFxuICBDSEVDS19QUk9EVUNUX1NVQ0NFU1MsXG4gIERFTEVURV9QUk9EVUNUX1JFUVVFU1QsXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCBFZGl0UHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9FZGl0UHJvZHVjdFwiO1xuaW1wb3J0IERpc2NvdW50Rm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9EaXNjb3VudEZvcm1cIjtcbmltcG9ydCBNZW51TmF2aWJhckxheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTWVudU5hdmliYXJMYXlvdXQgXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5pbXBvcnQgeyBQQUdFX0NIQU5HRV9TVUNDRVNTIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL2FkbWluXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ29uc29sZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiYWRtaW5cIiB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFNob3BJZCA9IHF1ZXJ5LlNob3BJZDtcblxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQgfSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgbWVzc2FnZS5jb25maWcoeyB0b3A6IDEwMCB9KTtcblxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uVG9nZ2xlRWRpdCA9IChpdGVtKSA9PiB7XG4gICAgc2V0UHJvZHVjdChpdGVtKTtcbiAgICBzZXRFZGl0KChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0NoZWNrQm94ID0gKHsgaWQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTLCBpZCB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ2hlY2tBbGxCb3hzID0gKGUpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTLCBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlRGlzY291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZCA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jaGVja2VkID09IHRydWUpO1xuICAgIGlmIChjaGVja2VkLmxlbmd0aCA9PSAwKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKFwi7ZWc6rCA7KeAIOygnO2SiOydtOudvOuPhCDshKDtg53tlbTso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc2NvdW50KChwcmV2KSA9PiAhcHJldik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlT25lRGlzY291bnQgPSAoaXRlbSkgPT4ge1xuICAgIHNldFByb2R1Y3QoaXRlbSk7XG4gICAgc2V0RGlzY291bnQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCB7IHByb2R1Y3RzLCBjYXRlZ29yaWVzLCBvcmlnaW5Qcm9kdWN0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWZmaXg+XG4gICAgICAgIDxNZW51TmF2aWJhckxheW91dFxuICAgICAgICAgIHR5cGU9e1wiYWRtaW5cIn1cbiAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgIHNldENhdGVnb3J5PXtzZXRDYXRlZ29yeX1cbiAgICAgICAgICBTaG9wSWQ9e3Nlc3Npb24uU2hvcHNbMF0uaWR9XG4gICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgIG9yaWdpblByb2R1Y3RzPXtvcmlnaW5Qcm9kdWN0c31cbiAgICAgICAgLz5cbiAgICAgIDwvQWZmaXg+XG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17XG4gICAgICAgICAgPFNwYWNlPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wL2FkbWluLyR7cXVlcnkuU2hvcElkfS9wcm9kdWN0L2FkZGB9PlxuICAgICAgICAgICAgICA8QnV0dG9uPuyDge2SiOy2lOqwgDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uVG9nZ2xlRGlzY291bnR9PlxuICAgICAgICAgICAgICDshKDtg53tlaDsnbhcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIH1cbiAgICAgICAgZXh0cmE9ezxDaGVja2JveCBvbkNoYW5nZT17b25DbGlja0NoZWNrQWxsQm94c30+7KCE7LK07ISg7YOdPC9DaGVja2JveD59XG4gICAgICA+XG4gICAgICAgIHtkaXNjb3VudCAmJiAoXG4gICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICB0aXRsZT17XCLshLjsnbxcIn1cbiAgICAgICAgICAgIHZpc2libGU9e2Rpc2NvdW50fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0RGlzY291bnQoZmFsc2UpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RGlzY291bnRGb3JtXG4gICAgICAgICAgICAgIHByb2R1Y3RzPXtwcm9kdWN0c31cbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgc2V0UHJvZHVjdD17c2V0UHJvZHVjdH1cbiAgICAgICAgICAgICAgc2V0RGlzY291bnQ9e3NldERpc2NvdW50fVxuICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgIFNob3BJZD17c2Vzc2lvbi5TaG9wc1swXS5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKX1cbiAgICAgICAge2VkaXQgJiYgKFxuICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgdGl0bGU9e1wi7IiY7KCV7ZWY6riwXCJ9XG4gICAgICAgICAgICB2aXNpYmxlPXtlZGl0fVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0RWRpdChmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFByb2R1Y3QobnVsbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFZGl0UHJvZHVjdFxuICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICBzZXRFZGl0PXtzZXRFZGl0fVxuICAgICAgICAgICAgICBzZXRQcm9kdWN0PXtzZXRQcm9kdWN0fVxuICAgICAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApfVxuICAgICAgICB7cHJvZHVjdHMgPyAoXG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9e1wiaG9yaXpvbnRhbFwifVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cHJvZHVjdHN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZU9uZURpc2NvdW50KGl0ZW0pfT7tlaDsnbg8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlRWRpdChpdGVtKX0+7IiY7KCVPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcGNvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake2l0ZW0udGl0bGV97J2EIOygleunkOuhnCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IERFTEVURV9QUk9EVUNUX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBjb25zb2xlLmxvZyhcImNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2tUZXh0PVwiWWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsVGV4dD1cIk5vXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7sgq3soJw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wY29uZmlybT4sXG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICBleHRyYT17XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17aXRlbS5jaGVja2VkfSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrQ2hlY2tCb3goaXRlbSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uSW1hZ2VzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7aXRlbS5JbWFnZXNbMF0udXJsfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9e1wic3F1YXJlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLkRpc2NvdW50ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcImhvcml6b250YWxcIn0gYWxpZ249e1wic3RhcnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZz7qsIDqsqk8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7JuQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcImhvcml6b250YWxcIn0gYWxpZ249e1wic3RhcnRcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17XCJtYWdlbnRhXCJ9Pi17aXRlbS5EaXNjb3VudC5yYXRlfSU8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5wcmljZSAqICgxMDAgLSBpdGVtLkRpc2NvdW50LnJhdGUpICogMC4wMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7JuQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWc+7IOB7IS4PC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RW1wdHkgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkNvbnNvbGUucHJvdG9UeXBlID0ge1xuICBwcm9kdWN0TGlzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc29sZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=