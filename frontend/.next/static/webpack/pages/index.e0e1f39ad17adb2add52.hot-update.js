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
                  description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["Fragment"], {
                    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      id: product.id,
                      quantity: product.quantity,
                      price: product.price,
                      discount: product.Discount
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
                      orientation: "left",
                      style: {
                        fontSize: "5px"
                      }
                    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
                      children: ["\uCD1D\uC561:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], {
                        value: product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity,
                        displayType: "text",
                        thousandSeparator: true
                      }), "\uC6D0"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsInByZXYiLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwib25DaGFuZ2VUb2dnbGVNb2RhbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wIiwic2hvcENvb3JkaW5hdGVzIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsImFkbWluIiwiZXZlbnRzIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzZXNzaW9uIiwicHJvZHVjdHNOZWFyIiwidW5kZWZpbmVkIiwicG9zdCIsImlkIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJlcnIiLCJlcnJvciIsInBheW1lbnRTdGFydCIsInByb2R1Y3QiLCJDTEVBUl9DQVJUX1JFUVVFU1QiLCJvbkNsaWNrUGF5bWVudCIsIkltYWdlcyIsInVybCIsIlNob3AiLCJuYW1lIiwidGl0bGUiLCJEaXNjb3VudCIsInJhdGUiLCJjdXJzb3IiLCJxdWFudGl0eSIsInByaWNlIiwiZm9udFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsImV2ZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFS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LE9BQU8sQ0FBQ1ksS0FBUixHQUFnQlosT0FBTyxDQUFDVyxRQVBoQztBQVNFLG1DQUFXLEVBQUUsTUFUZjtBQVVFLHlDQUFpQixFQUFFO0FBVnJCLHdCQUZGO0FBQUEsc0JBVkY7QUFBQTtBQUZKO0FBbEJGO0FBVko7QUFERixZQURVO0FBQUE7QUFGZDtBQVBKLE1BREQsZ0JBZ0ZDLCtEQUFDLHlDQUFEO0FBQUEsNkJBQ0UsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsbUJBQVcsZUFDVDtBQUFLLGVBQUssRUFBRTtBQUFFRyxrQkFBTSxFQUFFLE9BQVY7QUFBbUJDLGlCQUFLLEVBQUU7QUFBMUIsV0FBWjtBQUFBLGlDQUNFLCtEQUFDLDZDQUFEO0FBQVUsb0JBQVEsTUFBbEI7QUFBbUIsZ0JBQUksRUFBRSxLQUF6QjtBQUFBLHNCQUNHL0IsTUFBTSxDQUFDZ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSxrQ0FDViwrREFBQywwQ0FBRDtBQUNFLHVCQUFPLEVBQUVyRCxNQUFNLENBQUNzRCxJQUFQLGtCQUFzQkQsS0FBSyxDQUFDMUIsRUFBNUIsRUFEWDtBQUVFLHFCQUFLLEVBQUU7QUFBRXVCLHdCQUFNLEVBQUUsT0FBVjtBQUFtQkMsdUJBQUssRUFBRTtBQUExQixpQkFGVDtBQUdFLG1CQUFHLFlBQUt0RCx3QkFBTCxzQkFBdUN3RCxLQUFLLENBQUNkLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxHQUF2RDtBQUhMLGdCQURVO0FBQUEsYUFBWDtBQURIO0FBREY7QUFGSjtBQURGLE1BdkZKO0FBQUEsSUFERjtBQTRHRCxDQTFKRDs7R0FBTS9DLEs7VUFHYU0sdUQsRUFDRkUscUQsRUFXYVMsdUQsRUFVVEEsdUQsRUFDYUEsdUQsRUFDUEEsdUQ7OztLQTNCckJqQixLO0FBNEpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMGUxZjM5YWQxN2FkYjJhZGQ1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2Fyb3VzZWwsXG4gIEltYWdlLFxuICBUYWcsXG4gIExpc3QsXG4gIFN3aXRjaCxcbiAgQXZhdGFyLFxuICBSb3csXG4gIENvbCxcbiAgRGl2aWRlcixcbiAgU3BhY2UsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE51bWJlck91dGxpbmVkLCBEb2xsYXJPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IE9uZVNpZ25hbCBmcm9tIFwicmVhY3Qtb25lc2lnbmFsXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IExPQURfRVZFTlRTX1JFUVVFU1QsIFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vcmVkdWNlcnMvYWRtaW5cIjtcbmltcG9ydCB7IENMRUFSX0NBUlRfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9jYXJ0XCI7XG5pbXBvcnQgTWFwQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9NYXBDb21wb25lbnRcIjtcbmltcG9ydCB7IFNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5pbXBvcnQgeyBvbkNsaWNrUGF5bWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9QYXltZW50XCI7XG5pbXBvcnQgTW9kYWxJbnRlcmZhY2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL01vZGFsXCI7XG5pbXBvcnQgTmVhckFtb3VudFRvZ2dsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZVwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9YDtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgb25DaGFuZ2VUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3QgW3RvZ2dsZU1vZGFsLCBzZXRUb2dnbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VUb2dnbGVNb2RhbCA9ICgpID0+IHNldFRvZ2dsZU1vZGFsKChwcmV2KSA9PiAhcHJldik7XG5cbiAgY29uc3QgeyBzaG9wQ29vcmRpbmF0ZXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPQURfRVZFTlRTX1JFUVVFU1QgfSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogUEFHRV9DSEFOR0VfU1VDQ0VTUywgZGF0YTogXCJpbmRleFwiIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBldmVudHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWRtaW4pO1xuICBjb25zdCB7IGlzTG9nZ2VkSW4sIHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgcHJvZHVjdHNOZWFyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb24gJiYgc2hvcENvb3JkaW5hdGVzID09IHVuZGVmaW5lZCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvXCIsIHsgaWQ6IHNlc3Npb24uaWQgfSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uLCBzaG9wQ29vcmRpbmF0ZXNdKTtcblxuICBjb25zdCBwYXltZW50U3RhcnQgPSBhc3luYyAocHJvZHVjdCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ0FSVF9SRVFVRVNUIH0pO1xuICAgIHJldHVybiBvbkNsaWNrUGF5bWVudChcInNpbmdsZVwiLCBwcm9kdWN0LCBpc0xvZ2dlZEluLCBzZXNzaW9uLCBvbkNoYW5nZVRvZ2dsZU1vZGFsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWxJbnRlcmZhY2VcbiAgICAgICAgY29udGVudD17XCLroZzqt7jsnbjsnYQg7ZWY7IWU7JW8IO2VqeuLiOuLpC5cIn1cbiAgICAgICAgdG9nZ2xlTW9kYWw9e3RvZ2dsZU1vZGFsfVxuICAgICAgICBvbkNoYW5nZVRvZ2dsZU1vZGFsPXtvbkNoYW5nZVRvZ2dsZU1vZGFsfVxuICAgICAgICB0aXRsZT17XCLqsr3qs6BcIn1cbiAgICAgIC8+XG4gICAgICB7aXNMb2dnZWRJbiAmJiBzZXNzaW9uID8gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIHRpdGxlPXt0b2dnbGUgPyBcIuyjvOuzgCDqsIDqsoxcIiA6IFwi7LaU7LKcIOuplOuJtFwifVxuICAgICAgICAgIGV4dHJhPXs8U3dpdGNoIG9uQ2xpY2s9e29uQ2hhbmdlVG9nZ2xlfSAvPn1cbiAgICAgICAgPlxuICAgICAgICAgIHt0b2dnbGUgPyAoXG4gICAgICAgICAgICA8TWFwQ29tcG9uZW50IHNlc3Npb249e3Nlc3Npb259IHNob3BDb29yZGluYXRlcz17c2hvcENvb3JkaW5hdGVzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtwcm9kdWN0c05lYXJ9XG4gICAgICAgICAgICAgIHJlbmRlckl0ZW09eyhwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuSW1hZ2VzWzBdICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9L3VwbG9hZHMvJHtwcm9kdWN0LkltYWdlc1swXS51cmx9YFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1wiaG9yaXplbnRhbFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeS5UaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw9ezV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPntgWyR7cHJvZHVjdC5TaG9wLm5hbWV9XSAke3Byb2R1Y3QudGl0bGV9YH08L1R5cG9ncmFwaHkuVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuRGlzY291bnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZyBjb2xvcj17XCJtYWdlbnRhXCJ9Pi0ge3Byb2R1Y3QuRGlzY291bnQucmF0ZX0lPC9UYWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9eygpID0+IHBheW1lbnRTdGFydChwcm9kdWN0KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7KaJ7Iuc6rWs66ekXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PuyepeuwlOq1rOuLiDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZWFyQW1vdW50VG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50PXtwcm9kdWN0LkRpc2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249e1wibGVmdFwifSBzdHlsZT17eyBmb250U2l6ZTogXCI1cHhcIiB9fT48L0RpdmlkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOy0neyVoTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LkRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5wcmljZSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwMCAtIHByb2R1Y3QuRGlzY291bnQucmF0ZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDEgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICApIDogKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgZG90cz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JvdXRlci5wdXNoKGAvZXZlbnQvJHtldmVudC5pZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7ZXZlbnQuSW1hZ2VzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==