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
        ShopId: ShopId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJTaG9wSWQiLCJkaXZpc2lvbiIsImJhY2siLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwibWVzc2FnZSIsImNvbmZpZyIsInRvcCIsInVzZVN0YXRlIiwiZWRpdCIsInNldEVkaXQiLCJkaXNjb3VudCIsInNldERpc2NvdW50IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5Iiwib25Ub2dnbGVFZGl0IiwiaXRlbSIsInByZXYiLCJvbkNsaWNrQ2hlY2tCb3giLCJpZCIsIkNIRUNLX1BST0RVQ1RfU1VDQ0VTUyIsIm9uQ2xpY2tDaGVja0FsbEJveHMiLCJlIiwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1MiLCJjaGVja2VkIiwidGFyZ2V0Iiwib25Ub2dnbGVEaXNjb3VudCIsInByb2R1Y3RzIiwiZmlsdGVyIiwibGVuZ3RoIiwiZXJyb3IiLCJvblRvZ2dsZU9uZURpc2NvdW50Iiwic2hvcCIsImNhdGVnb3JpZXMiLCJvcmlnaW5Qcm9kdWN0cyIsIndpZHRoIiwidGl0bGUiLCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUIiwiY29uc29sZSIsImxvZyIsIkltYWdlcyIsInByb2Nlc3MiLCJ1cmwiLCJEaXNjb3VudCIsInByaWNlIiwicmF0ZSIsImRlc2NyaXB0aW9uIiwicHJvdG9UeXBlIiwicHJvZHVjdExpc3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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LEVBQUVDLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFosQ0FBcEI7QUFJZWxFLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvYWRtaW4vW1Nob3BJZF0vcHJvZHVjdC4wNGM1Mjk2ZWJhNDlhODgzOTg2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTGlzdCxcbiAgQnV0dG9uLFxuICBTcGFjZSxcbiAgTW9kYWwsXG4gIEF2YXRhcixcbiAgQ2FyZCxcbiAgRW1wdHksXG4gIENoZWNrYm94LFxuICBQb3Bjb25maXJtLFxuICBBZmZpeCxcbiAgbWVzc2FnZSxcbiAgVGFnLFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsXG4gIENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTLFxuICBDSEVDS19QUk9EVUNUX1NVQ0NFU1MsXG4gIERFTEVURV9QUk9EVUNUX1JFUVVFU1QsXG59IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCBFZGl0UHJvZHVjdCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9FZGl0UHJvZHVjdFwiO1xuaW1wb3J0IERpc2NvdW50Rm9ybSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Gb3Jtcy9EaXNjb3VudEZvcm1cIjtcbmltcG9ydCBNZW51TmF2aWJhckxheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTWVudU5hdmliYXJMYXlvdXQgXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5pbXBvcnQgeyBQQUdFX0NIQU5HRV9TVUNDRVNTIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL2FkbWluXCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgQ29uc29sZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiYWRtaW5cIiB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFNob3BJZCA9IHF1ZXJ5LlNob3BJZDtcblxuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi5kaXZpc2lvbiA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gcm91dGVyLmJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQgfSk7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgbWVzc2FnZS5jb25maWcoeyB0b3A6IDEwMCB9KTtcblxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uVG9nZ2xlRWRpdCA9IChpdGVtKSA9PiB7XG4gICAgc2V0UHJvZHVjdChpdGVtKTtcbiAgICBzZXRFZGl0KChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0NoZWNrQm94ID0gKHsgaWQgfSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTLCBpZCB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ2hlY2tBbGxCb3hzID0gKGUpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTLCBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlRGlzY291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tlZCA9IHByb2R1Y3RzLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5jaGVja2VkID09IHRydWUpO1xuICAgIGlmIChjaGVja2VkLmxlbmd0aCA9PSAwKSB7XG4gICAgICBtZXNzYWdlLmVycm9yKFwi7ZWc6rCA7KeAIOygnO2SiOydtOudvOuPhCDshKDtg53tlbTso7zshLjsmpRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldERpc2NvdW50KChwcmV2KSA9PiAhcHJldik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlT25lRGlzY291bnQgPSAoaXRlbSkgPT4ge1xuICAgIHNldFByb2R1Y3QoaXRlbSk7XG4gICAgc2V0RGlzY291bnQoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCB7IHByb2R1Y3RzLCBjYXRlZ29yaWVzLCBvcmlnaW5Qcm9kdWN0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QWZmaXg+XG4gICAgICAgIDxNZW51TmF2aWJhckxheW91dFxuICAgICAgICAgIHR5cGU9e1wiYWRtaW5cIn1cbiAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAgIHNldENhdGVnb3J5PXtzZXRDYXRlZ29yeX1cbiAgICAgICAgICBTaG9wSWQ9e1Nob3BJZH1cbiAgICAgICAgICBwcm9kdWN0cz17cHJvZHVjdHN9XG4gICAgICAgICAgb3JpZ2luUHJvZHVjdHM9e29yaWdpblByb2R1Y3RzfVxuICAgICAgICAvPlxuICAgICAgPC9BZmZpeD5cbiAgICAgIDxDYXJkXG4gICAgICAgIHRpdGxlPXtcbiAgICAgICAgICA8U3BhY2U+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvYWRtaW4vJHtxdWVyeS5TaG9wSWR9L3Byb2R1Y3QvYWRkYH0+XG4gICAgICAgICAgICAgIDxCdXR0b24+7IOB7ZKI7LaU6rCAPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17b25Ub2dnbGVEaXNjb3VudH0+XG4gICAgICAgICAgICAgIOyEoO2Dne2VoOyduFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgfVxuICAgICAgICBleHRyYT17PENoZWNrYm94IG9uQ2hhbmdlPXtvbkNsaWNrQ2hlY2tBbGxCb3hzfT7soITssrTshKDtg508L0NoZWNrYm94Pn1cbiAgICAgID5cbiAgICAgICAge2Rpc2NvdW50ICYmIChcbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRpdGxlPXtcIuyEuOydvFwifVxuICAgICAgICAgICAgdmlzaWJsZT17ZGlzY291bnR9XG4gICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXREaXNjb3VudChmYWxzZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEaXNjb3VudEZvcm1cbiAgICAgICAgICAgICAgcHJvZHVjdHM9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgICBwcm9kdWN0PXtwcm9kdWN0fVxuICAgICAgICAgICAgICBzZXRQcm9kdWN0PXtzZXRQcm9kdWN0fVxuICAgICAgICAgICAgICBzZXREaXNjb3VudD17c2V0RGlzY291bnR9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgU2hvcElkPXtTaG9wSWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICl9XG4gICAgICAgIHtlZGl0ICYmIChcbiAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHRpdGxlPXtcIuyImOygle2VmOq4sFwifVxuICAgICAgICAgICAgdmlzaWJsZT17ZWRpdH1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldEVkaXQoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRQcm9kdWN0KG51bGwpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RWRpdFByb2R1Y3RcbiAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cbiAgICAgICAgICAgICAgc2V0RWRpdD17c2V0RWRpdH1cbiAgICAgICAgICAgICAgc2V0UHJvZHVjdD17c2V0UHJvZHVjdH1cbiAgICAgICAgICAgICAgY2F0ZWdvcmllcz17Y2F0ZWdvcmllc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKX1cbiAgICAgICAge3Byb2R1Y3RzID8gKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBpdGVtTGF5b3V0PXtcImhvcml6b250YWxcIn1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Byb2R1Y3RzfVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gb25Ub2dnbGVPbmVEaXNjb3VudChpdGVtKX0+7ZWg7J24PC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUVkaXQoaXRlbSl9PuyImOyglTwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3Bjb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgJHtpdGVtLnRpdGxlfeydhCDsoJXrp5DroZwg7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBERUxFVEVfUFJPRFVDVF9SRVFVRVNULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gY29uc29sZS5sb2coXCJjYW5jZWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9rVGV4dD1cIlllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbFRleHQ9XCJOb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+7IKt7KCcPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvcGNvbmZpcm0+LFxuICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmE9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e2l0ZW0uY2hlY2tlZH0gb25DbGljaz17KCkgPT4gb25DbGlja0NoZWNrQm94KGl0ZW0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLkltYWdlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke2l0ZW0uSW1hZ2VzWzBdLnVybH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPXtcInNxdWFyZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXRlbS5EaXNjb3VudCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9IGFsaWduPXtcInN0YXJ0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWc+6rCA6rKpPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3Jpem9udGFsXCJ9IGFsaWduPXtcInN0YXJ0XCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e1wibWFnZW50YVwifT4te2l0ZW0uRGlzY291bnQucmF0ZX0lPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0ucHJpY2UgKiAoMTAwIC0gaXRlbS5EaXNjb3VudC5yYXRlKSAqIDAuMDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnPuyDgeyEuDwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEVtcHR5IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Db25zb2xlLnByb3RvVHlwZSA9IHtcbiAgcHJvZHVjdExpc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNvbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9