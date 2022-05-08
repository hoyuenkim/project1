webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-onesignal */ "./node_modules/react-onesignal/dist/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
/* harmony import */ var _components_Generalui_MapComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Generalui/MapComponent */ "./components/Generalui/MapComponent.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var _components_Generalui_Payment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Generalui/Payment */ "./components/Generalui/Payment.js");
/* harmony import */ var _components_Generalui_Modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Generalui/Modal */ "./components/Generalui/Modal.js");
/* harmony import */ var _components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Generalui/NearAmountToggle */ "./components/Generalui/NearAmountToggle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);



var _s = $RefreshSig$();




















var Index = function Index() {
  _s();

  axios__WEBPACK_IMPORTED_MODULE_7___default.a.defaults.baseURL = "".concat("https://127.0.0.1:3065");
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      toggle = _useState[0],
      setToggle = _useState[1];

  var onChangeToggle = function onChangeToggle() {
    setToggle(function (prev) {
      return !prev;
    });
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      toggleModal = _useState2[0],
      setToggleModal = _useState2[1];

  var onChangeToggleModal = function onChangeToggleModal() {
    return setToggleModal(function (prev) {
      return !prev;
    });
  };

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.shop;
  }),
      shopCoordinates = _useSelector.shopCoordinates;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_9__["LOAD_EVENTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_9__["PAGE_CHANGE_SUCCESS"],
      data: "index"
    });
  }, []);

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.admin;
  }),
      events = _useSelector2.events;

  var _useSelector3 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector3.isLoggedIn,
      session = _useSelector3.session;

  var _useSelector4 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.shop;
  }),
      productsNear = _useSelector4.productsNear;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (session && shopCoordinates == undefined) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/", {
        id: session.id
      }).then(function (result) {
        console.log(result);
        dispatch({
          type: _reducers_shop__WEBPACK_IMPORTED_MODULE_12__["SET_SHOPCOORDINATES_SUCCESS"],
          data: result.data
        });
      })["catch"](function (err) {
        return console.error(err);
      });
    }
  }, [session, shopCoordinates]);

  var paymentStart = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(product) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: _reducers_cart__WEBPACK_IMPORTED_MODULE_10__["CLEAR_CART_REQUEST"]
              });
              return _context.abrupt("return", Object(_components_Generalui_Payment__WEBPACK_IMPORTED_MODULE_14__["onClickPayment"])("single", product, isLoggedIn, session, onChangeToggleModal));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function paymentStart(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Generalui_Modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
      content: "로그인을 하셔야 합니다.",
      toggleModal: toggleModal,
      onChangeToggleModal: onChangeToggleModal,
      title: "경고"
    }), isLoggedIn && session ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      title: toggle ? "주변 가게" : "추천 메뉴",
      extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        onClick: onChangeToggle
      }),
      children: toggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Generalui_MapComponent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        session: session,
        shopCoordinates: shopCoordinates
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        dataSource: productsNear,
        renderItem: function renderItem(product) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item.Meta, {
              avatar: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
                src: product.Images[0] && "".concat("https://127.0.0.1:3065", "/uploads/").concat(product.Images[0].url)
              }),
              description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
                title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
                  direction: "horizental",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Title, {
                    level: 5,
                    children: "[".concat(product.Shop.name, "] ").concat(product.title)
                  }), product.Discount && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
                    color: "magenta",
                    children: ["- ", product.Discount.rate, "%"]
                  })]
                }),
                actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("div", {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: function onClick() {
                    return paymentStart(product);
                  },
                  children: "\uC989\uC2DC\uAD6C\uB9E4"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("div", {
                  style: {
                    cursor: "pointer"
                  },
                  children: "\uC7A5\uBC14\uAD6C\uB2C8"
                })],
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
                  description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
                    gutter: [10, 10],
                    styl: {
                      verticalAlign: "middle"
                    },
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      span: 16,
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_16__["default"], {
                        id: product.id,
                        quantity: product.quantity,
                        price: product.price,
                        discount: product.Discount
                      })
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                      orientation: "left",
                      style: {
                        fontSize: "5px"
                      }
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
                      span: 24,
                      style: {
                        textAlign: "right"
                      },
                      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
                        children: ["\uCD1D\uC561:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], {
                          value: product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity,
                          displayType: "text",
                          thousandSeparator: true
                        }), "\uC6D0"]
                      })
                    })]
                  })
                })
              })
            })
          });
        }
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])("div", {
          style: {
            height: "100vh",
            width: "100%"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
            autoplay: true,
            dots: false,
            children: events.map(function (event) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                onClick: router.push("/event/".concat(event.id)),
                style: {
                  height: "100vh",
                  width: "100%"
                },
                src: "".concat("https://127.0.0.1:3065", "/uploads/").concat(event.Images[0].url)
              });
            })
          })
        })
      })
    })]
  });
};

_s(Index, "AJNNKeHennfiZ49dBlRZTf5vX74=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsInByZXYiLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwib25DaGFuZ2VUb2dnbGVNb2RhbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wIiwic2hvcENvb3JkaW5hdGVzIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsImFkbWluIiwiZXZlbnRzIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzZXNzaW9uIiwicHJvZHVjdHNOZWFyIiwidW5kZWZpbmVkIiwicG9zdCIsImlkIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJlcnIiLCJlcnJvciIsInBheW1lbnRTdGFydCIsInByb2R1Y3QiLCJDTEVBUl9DQVJUX1JFUVVFU1QiLCJvbkNsaWNrUGF5bWVudCIsIkltYWdlcyIsInVybCIsIlNob3AiLCJuYW1lIiwidGl0bGUiLCJEaXNjb3VudCIsInJhdGUiLCJjdXJzb3IiLCJ2ZXJ0aWNhbEFsaWduIiwicXVhbnRpdHkiLCJwcmljZSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXAiLCJldmVudCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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SEwsZ0JBRFU7QUFBQSxhQUFYO0FBREg7QUFERjtBQUZKO0FBREYsTUF6Rko7QUFBQSxJQURGO0FBOEdELENBNUpEOztHQUFNL0MsSztVQUdhTSx1RCxFQUNGRSxxRCxFQVdhUyx1RCxFQVVUQSx1RCxFQUNhQSx1RCxFQUNQQSx1RDs7O0tBM0JyQmpCLEs7QUE4SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA4M2RlZWFlZGRlYmZhYzAwNmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYXJkLFxuICBDYXJvdXNlbCxcbiAgSW1hZ2UsXG4gIFRhZyxcbiAgTGlzdCxcbiAgU3dpdGNoLFxuICBBdmF0YXIsXG4gIFJvdyxcbiAgQ29sLFxuICBEaXZpZGVyLFxuICBTcGFjZSxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTnVtYmVyT3V0bGluZWQsIERvbGxhck91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgT25lU2lnbmFsIGZyb20gXCJyZWFjdC1vbmVzaWduYWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTE9BRF9FVkVOVFNfUkVRVUVTVCwgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9hZG1pblwiO1xuaW1wb3J0IHsgQ0xFQVJfQ0FSVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2NhcnRcIjtcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL01hcENvbXBvbmVudFwiO1xuaW1wb3J0IHsgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Nob3BcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcbmltcG9ydCB7IG9uQ2xpY2tQYXltZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL1BheW1lbnRcIjtcbmltcG9ydCBNb2RhbEludGVyZmFjZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvTW9kYWxcIjtcbmltcG9ydCBOZWFyQW1vdW50VG9nZ2xlIGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9OZWFyQW1vdW50VG9nZ2xlXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH1gO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBvbkNoYW5nZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNoYW5nZVRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0VG9nZ2xlTW9kYWwoKHByZXYpID0+ICFwcmV2KTtcblxuICBjb25zdCB7IHNob3BDb29yZGluYXRlcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9BRF9FVkVOVFNfUkVRVUVTVCB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcImluZGV4XCIgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IGV2ZW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hZG1pbik7XG4gIGNvbnN0IHsgaXNMb2dnZWRJbiwgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBwcm9kdWN0c05lYXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vzc2lvbiAmJiBzaG9wQ29vcmRpbmF0ZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9cIiwgeyBpZDogc2Vzc2lvbi5pZCB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cbiAgfSwgW3Nlc3Npb24sIHNob3BDb29yZGluYXRlc10pO1xuXG4gIGNvbnN0IHBheW1lbnRTdGFydCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DQVJUX1JFUVVFU1QgfSk7XG4gICAgcmV0dXJuIG9uQ2xpY2tQYXltZW50KFwic2luZ2xlXCIsIHByb2R1Y3QsIGlzTG9nZ2VkSW4sIHNlc3Npb24sIG9uQ2hhbmdlVG9nZ2xlTW9kYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbEludGVyZmFjZVxuICAgICAgICBjb250ZW50PXtcIuuhnOq3uOyduOydhCDtlZjshZTslbwg7ZWp64uI64ukLlwifVxuICAgICAgICB0b2dnbGVNb2RhbD17dG9nZ2xlTW9kYWx9XG4gICAgICAgIG9uQ2hhbmdlVG9nZ2xlTW9kYWw9e29uQ2hhbmdlVG9nZ2xlTW9kYWx9XG4gICAgICAgIHRpdGxlPXtcIuqyveqzoFwifVxuICAgICAgLz5cbiAgICAgIHtpc0xvZ2dlZEluICYmIHNlc3Npb24gPyAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9e3RvZ2dsZSA/IFwi7KO867OAIOqwgOqyjFwiIDogXCLstpTsspwg66mU64m0XCJ9XG4gICAgICAgICAgZXh0cmE9ezxTd2l0Y2ggb25DbGljaz17b25DaGFuZ2VUb2dnbGV9IC8+fVxuICAgICAgICA+XG4gICAgICAgICAge3RvZ2dsZSA/IChcbiAgICAgICAgICAgIDxNYXBDb21wb25lbnQgc2Vzc2lvbj17c2Vzc2lvbn0gc2hvcENvb3JkaW5hdGVzPXtzaG9wQ29vcmRpbmF0ZXN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Byb2R1Y3RzTmVhcn1cbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5JbWFnZXNbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke3Byb2R1Y3QuSW1hZ2VzWzBdLnVybH1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3JpemVudGFsXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2BbJHtwcm9kdWN0LlNob3AubmFtZX1dICR7cHJvZHVjdC50aXRsZX1gfTwvVHlwb2dyYXBoeS5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5EaXNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPXtcIm1hZ2VudGFcIn0+LSB7cHJvZHVjdC5EaXNjb3VudC5yYXRlfSU8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17KCkgPT4gcGF5bWVudFN0YXJ0KHByb2R1Y3QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsponsi5zqtazrp6RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+7J6l67CU6rWs64uIPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzEwLCAxMF19IHN0eWw9e3sgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhckFtb3VudFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5PXtwcm9kdWN0LnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50PXtwcm9kdWN0LkRpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj17XCJsZWZ0XCJ9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjVweFwiIH19PjwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17MjR9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOy0neyVoTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LkRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9kdWN0LnByaWNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgxMDAgLSBwcm9kdWN0LkRpc2NvdW50LnJhdGUpICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDEgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5wcmljZSAqIHByb2R1Y3QucXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7JuQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeS5UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICApIDogKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgZG90cz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JvdXRlci5wdXNoKGAvZXZlbnQvJHtldmVudC5pZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7ZXZlbnQuSW1hZ2VzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==