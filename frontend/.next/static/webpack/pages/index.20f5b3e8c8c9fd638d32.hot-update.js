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
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
                  direction: "horizental",
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(_components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    style: {
                      width: "40%"
                    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsInByZXYiLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwib25DaGFuZ2VUb2dnbGVNb2RhbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wIiwic2hvcENvb3JkaW5hdGVzIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsImFkbWluIiwiZXZlbnRzIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzZXNzaW9uIiwicHJvZHVjdHNOZWFyIiwidW5kZWZpbmVkIiwicG9zdCIsImlkIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJlcnIiLCJlcnJvciIsInBheW1lbnRTdGFydCIsInByb2R1Y3QiLCJDTEVBUl9DQVJUX1JFUVVFU1QiLCJvbkNsaWNrUGF5bWVudCIsIkltYWdlcyIsInVybCIsIlNob3AiLCJuYW1lIiwidGl0bGUiLCJEaXNjb3VudCIsInJhdGUiLCJjdXJzb3IiLCJ3aWR0aCIsInF1YW50aXR5IiwicHJpY2UiLCJmb250U2l6ZSIsImhlaWdodCIsIm1hcCIsImV2ZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEJDLDhDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixhQUE0QkMsd0JBQTVCO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsa0JBQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFBQSxNQUFPQyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0JELGFBQVMsQ0FBQyxVQUFDRSxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxtQkFBc0NKLHNEQUFRLENBQUMsS0FBRCxDQUE5QztBQUFBLE1BQU9LLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQjtBQUFBLFdBQU1ELGNBQWMsQ0FBQyxVQUFDRixJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFwQjtBQUFBLEdBQTVCOztBQUVBLHFCQUE0QkksK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBdkM7QUFBQSxNQUFRQyxlQUFSLGdCQUFRQSxlQUFSOztBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZGhCLFlBQVEsQ0FBQztBQUFFaUIsVUFBSSxFQUFFQyxtRUFBbUJBO0FBQTNCLEtBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2RoQixZQUFRLENBQUM7QUFBRWlCLFVBQUksRUFBRUUsbUVBQVI7QUFBNkJDLFVBQUksRUFBRTtBQUFuQyxLQUFELENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLHNCQUFtQlIsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDUSxLQUFqQjtBQUFBLEdBQUQsQ0FBOUI7QUFBQSxNQUFRQyxNQUFSLGlCQUFRQSxNQUFSOztBQUNBLHNCQUFnQ1YsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDVSxJQUFqQjtBQUFBLEdBQUQsQ0FBM0M7QUFBQSxNQUFRQyxVQUFSLGlCQUFRQSxVQUFSO0FBQUEsTUFBb0JDLE9BQXBCLGlCQUFvQkEsT0FBcEI7O0FBQ0Esc0JBQXlCYiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUFwQztBQUFBLE1BQVFZLFlBQVIsaUJBQVFBLFlBQVI7O0FBRUFWLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlTLE9BQU8sSUFBSVYsZUFBZSxJQUFJWSxTQUFsQyxFQUE2QztBQUMzQy9CLGtEQUFLLENBQ0ZnQyxJQURILENBQ1EsR0FEUixFQUNhO0FBQUVDLFVBQUUsRUFBRUosT0FBTyxDQUFDSTtBQUFkLE9BRGIsRUFFR0MsSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQS9CLGdCQUFRLENBQUM7QUFBRWlCLGNBQUksRUFBRWlCLDJFQUFSO0FBQXFDZCxjQUFJLEVBQUVXLE1BQU0sQ0FBQ1g7QUFBbEQsU0FBRCxDQUFSO0FBQ0QsT0FMSCxXQU1TLFVBQUNlLEdBQUQ7QUFBQSxlQUFTSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0QsR0FBZCxDQUFUO0FBQUEsT0FOVDtBQU9EO0FBQ0YsR0FWUSxFQVVOLENBQUNWLE9BQUQsRUFBVVYsZUFBVixDQVZNLENBQVQ7O0FBWUEsTUFBTXNCLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0MsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CdEMsc0JBQVEsQ0FBQztBQUFFaUIsb0JBQUksRUFBRXNCLGtFQUFrQkE7QUFBMUIsZUFBRCxDQUFSO0FBRG1CLCtDQUVaQyxxRkFBYyxDQUFDLFFBQUQsRUFBV0YsT0FBWCxFQUFvQmQsVUFBcEIsRUFBZ0NDLE9BQWhDLEVBQXlDZCxtQkFBekMsQ0FGRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaMEIsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFLQSxzQkFDRTtBQUFBLDRCQUNFLCtEQUFDLG9FQUFEO0FBQ0UsYUFBTyxFQUFFLGVBRFg7QUFFRSxpQkFBVyxFQUFFNUIsV0FGZjtBQUdFLHlCQUFtQixFQUFFRSxtQkFIdkI7QUFJRSxXQUFLLEVBQUU7QUFKVCxNQURGLEVBT0dhLFVBQVUsSUFBSUMsT0FBZCxnQkFDQywrREFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRXBCLE1BQU0sR0FBRyxPQUFILEdBQWEsT0FENUI7QUFFRSxXQUFLLGVBQUUsK0RBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVFO0FBQWpCLFFBRlQ7QUFBQSxnQkFJR0YsTUFBTSxnQkFDTCwrREFBQywyRUFBRDtBQUFjLGVBQU8sRUFBRW9CLE9BQXZCO0FBQWdDLHVCQUFlLEVBQUVWO0FBQWpELFFBREssZ0JBR0wsK0RBQUMseUNBQUQ7QUFDRSxrQkFBVSxFQUFFVyxZQURkO0FBRUUsa0JBQVUsRUFBRSxvQkFBQ1ksT0FBRDtBQUFBLDhCQUNWLCtEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLG1DQUNFLCtEQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDRSxvQkFBTSxlQUNKLCtEQUFDLDJDQUFEO0FBQ0UsbUJBQUcsRUFDREEsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixlQUNHMUMsd0JBREgsc0JBQ3FDdUMsT0FBTyxDQUFDRyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FEdkQ7QUFGSixnQkFGSjtBQVNFLHlCQUFXLGVBQ1QsK0RBQUMseUNBQUQ7QUFDRSxxQkFBSyxlQUNILGdFQUFDLDBDQUFEO0FBQU8sMkJBQVMsRUFBRSxZQUFsQjtBQUFBLDBDQUNFLCtEQUFDLCtDQUFELENBQVksS0FBWjtBQUNFLHlCQUFLLEVBQUUsQ0FEVDtBQUFBLHlDQUVNSixPQUFPLENBQUNLLElBQVIsQ0FBYUMsSUFGbkIsZUFFNEJOLE9BQU8sQ0FBQ08sS0FGcEM7QUFBQSxvQkFERixFQUlHUCxPQUFPLENBQUNRLFFBQVIsaUJBQ0MsZ0VBQUMsd0NBQUQ7QUFBSyx5QkFBSyxFQUFFLFNBQVo7QUFBQSxxQ0FBMEJSLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQkMsSUFBM0M7QUFBQSxvQkFMSjtBQUFBLGtCQUZKO0FBV0UsdUJBQU8sRUFBRSxjQUNQO0FBQUssdUJBQUssRUFBRTtBQUFFQywwQkFBTSxFQUFFO0FBQVYsbUJBQVo7QUFBbUMseUJBQU8sRUFBRTtBQUFBLDJCQUFNWCxZQUFZLENBQUNDLE9BQUQsQ0FBbEI7QUFBQSxtQkFBNUM7QUFBQTtBQUFBLGtCQURPLGVBSVA7QUFBSyx1QkFBSyxFQUFFO0FBQUVVLDBCQUFNLEVBQUU7QUFBVixtQkFBWjtBQUFBO0FBQUEsa0JBSk8sQ0FYWDtBQUFBLHVDQWtCRSxnRUFBQywwQ0FBRDtBQUFPLDJCQUFTLEVBQUUsWUFBbEI7QUFBQSwwQ0FDRSwrREFBQywrRUFBRDtBQUNFLHlCQUFLLEVBQUU7QUFBRUMsMkJBQUssRUFBRTtBQUFULHFCQURUO0FBRUUsc0JBQUUsRUFBRVgsT0FBTyxDQUFDVCxFQUZkO0FBR0UsNEJBQVEsRUFBRVMsT0FBTyxDQUFDWSxRQUhwQjtBQUlFLHlCQUFLLEVBQUVaLE9BQU8sQ0FBQ2EsS0FKakI7QUFLRSw0QkFBUSxFQUFFYixPQUFPLENBQUNRO0FBTHBCLG9CQURGLGVBUUUsK0RBQUMsNENBQUQ7QUFBUywrQkFBVyxFQUFFLE1BQXRCO0FBQThCLHlCQUFLLEVBQUU7QUFBRU0sOEJBQVEsRUFBRTtBQUFaO0FBQXJDLG9CQVJGLGVBU0UsZ0VBQUMsK0NBQUQsQ0FBWSxJQUFaO0FBQUEsZ0RBQ00sR0FETixlQUVFLCtEQUFDLDREQUFEO0FBQ0UsMkJBQUssRUFDSGQsT0FBTyxDQUFDUSxRQUFSLEdBQ0lSLE9BQU8sQ0FBQ2EsS0FBUixJQUNDLE1BQU1iLE9BQU8sQ0FBQ1EsUUFBUixDQUFpQkMsSUFEeEIsSUFFQSxJQUZBLEdBR0FULE9BQU8sQ0FBQ1ksUUFKWixHQUtJWixPQUFPLENBQUNhLEtBQVIsR0FBZ0JiLE9BQU8sQ0FBQ1ksUUFQaEM7QUFTRSxpQ0FBVyxFQUFFLE1BVGY7QUFVRSx1Q0FBaUIsRUFBRTtBQVZyQixzQkFGRjtBQUFBLG9CQVRGO0FBQUE7QUFsQkY7QUFWSjtBQURGLFlBRFU7QUFBQTtBQUZkO0FBUEosTUFERCxnQkEyRUMsK0RBQUMseUNBQUQ7QUFBQSw2QkFDRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxtQkFBVyxlQUNUO0FBQUssZUFBSyxFQUFFO0FBQUVHLGtCQUFNLEVBQUUsT0FBVjtBQUFtQkosaUJBQUssRUFBRTtBQUExQixXQUFaO0FBQUEsaUNBQ0UsK0RBQUMsNkNBQUQ7QUFBVSxvQkFBUSxNQUFsQjtBQUFtQixnQkFBSSxFQUFFLEtBQXpCO0FBQUEsc0JBQ0czQixNQUFNLENBQUNnQyxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLGtDQUNWLCtEQUFDLDBDQUFEO0FBQ0UsdUJBQU8sRUFBRXJELE1BQU0sQ0FBQ3NELElBQVAsa0JBQXNCRCxLQUFLLENBQUMxQixFQUE1QixFQURYO0FBRUUscUJBQUssRUFBRTtBQUFFd0Isd0JBQU0sRUFBRSxPQUFWO0FBQW1CSix1QkFBSyxFQUFFO0FBQTFCLGlCQUZUO0FBR0UsbUJBQUcsWUFBS2xELHdCQUFMLHNCQUF1Q3dELEtBQUssQ0FBQ2QsTUFBTixDQUFhLENBQWIsRUFBZ0JDLEdBQXZEO0FBSEwsZ0JBRFU7QUFBQSxhQUFYO0FBREg7QUFERjtBQUZKO0FBREYsTUFsRko7QUFBQSxJQURGO0FBdUdELENBckpEOztHQUFNL0MsSztVQUdhTSx1RCxFQUNGRSxxRCxFQVdhUyx1RCxFQVVUQSx1RCxFQUNhQSx1RCxFQUNQQSx1RDs7O0tBM0JyQmpCLEs7QUF1SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwZjViM2U4YzhjOWZkNjM4ZDMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYXJkLFxuICBDYXJvdXNlbCxcbiAgSW1hZ2UsXG4gIFRhZyxcbiAgTGlzdCxcbiAgU3dpdGNoLFxuICBBdmF0YXIsXG4gIFJvdyxcbiAgQ29sLFxuICBEaXZpZGVyLFxuICBTcGFjZSxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTnVtYmVyT3V0bGluZWQsIERvbGxhck91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgT25lU2lnbmFsIGZyb20gXCJyZWFjdC1vbmVzaWduYWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTE9BRF9FVkVOVFNfUkVRVUVTVCwgUEFHRV9DSEFOR0VfU1VDQ0VTUyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9hZG1pblwiO1xuaW1wb3J0IHsgQ0xFQVJfQ0FSVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2NhcnRcIjtcbmltcG9ydCBNYXBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL01hcENvbXBvbmVudFwiO1xuaW1wb3J0IHsgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Nob3BcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcbmltcG9ydCB7IG9uQ2xpY2tQYXltZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL1BheW1lbnRcIjtcbmltcG9ydCBNb2RhbEludGVyZmFjZSBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvTW9kYWxcIjtcbmltcG9ydCBOZWFyQW1vdW50VG9nZ2xlIGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9OZWFyQW1vdW50VG9nZ2xlXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH1gO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBvbkNoYW5nZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRUb2dnbGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNoYW5nZVRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0VG9nZ2xlTW9kYWwoKHByZXYpID0+ICFwcmV2KTtcblxuICBjb25zdCB7IHNob3BDb29yZGluYXRlcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogTE9BRF9FVkVOVFNfUkVRVUVTVCB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBQQUdFX0NIQU5HRV9TVUNDRVNTLCBkYXRhOiBcImluZGV4XCIgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IGV2ZW50cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hZG1pbik7XG4gIGNvbnN0IHsgaXNMb2dnZWRJbiwgc2Vzc2lvbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgeyBwcm9kdWN0c05lYXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vzc2lvbiAmJiBzaG9wQ29vcmRpbmF0ZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9cIiwgeyBpZDogc2Vzc2lvbi5pZCB9KVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFNFVF9TSE9QQ09PUkRJTkFURVNfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cbiAgfSwgW3Nlc3Npb24sIHNob3BDb29yZGluYXRlc10pO1xuXG4gIGNvbnN0IHBheW1lbnRTdGFydCA9IGFzeW5jIChwcm9kdWN0KSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBDTEVBUl9DQVJUX1JFUVVFU1QgfSk7XG4gICAgcmV0dXJuIG9uQ2xpY2tQYXltZW50KFwic2luZ2xlXCIsIHByb2R1Y3QsIGlzTG9nZ2VkSW4sIHNlc3Npb24sIG9uQ2hhbmdlVG9nZ2xlTW9kYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbEludGVyZmFjZVxuICAgICAgICBjb250ZW50PXtcIuuhnOq3uOyduOydhCDtlZjshZTslbwg7ZWp64uI64ukLlwifVxuICAgICAgICB0b2dnbGVNb2RhbD17dG9nZ2xlTW9kYWx9XG4gICAgICAgIG9uQ2hhbmdlVG9nZ2xlTW9kYWw9e29uQ2hhbmdlVG9nZ2xlTW9kYWx9XG4gICAgICAgIHRpdGxlPXtcIuqyveqzoFwifVxuICAgICAgLz5cbiAgICAgIHtpc0xvZ2dlZEluICYmIHNlc3Npb24gPyAoXG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9e3RvZ2dsZSA/IFwi7KO867OAIOqwgOqyjFwiIDogXCLstpTsspwg66mU64m0XCJ9XG4gICAgICAgICAgZXh0cmE9ezxTd2l0Y2ggb25DbGljaz17b25DaGFuZ2VUb2dnbGV9IC8+fVxuICAgICAgICA+XG4gICAgICAgICAge3RvZ2dsZSA/IChcbiAgICAgICAgICAgIDxNYXBDb21wb25lbnQgc2Vzc2lvbj17c2Vzc2lvbn0gc2hvcENvb3JkaW5hdGVzPXtzaG9wQ29vcmRpbmF0ZXN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Byb2R1Y3RzTmVhcn1cbiAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5JbWFnZXNbMF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke3Byb2R1Y3QuSW1hZ2VzWzBdLnVybH1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlIGRpcmVjdGlvbj17XCJob3JpemVudGFsXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbD17NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e2BbJHtwcm9kdWN0LlNob3AubmFtZX1dICR7cHJvZHVjdC50aXRsZX1gfTwvVHlwb2dyYXBoeS5UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5EaXNjb3VudCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnIGNvbG9yPXtcIm1hZ2VudGFcIn0+LSB7cHJvZHVjdC5EaXNjb3VudC5yYXRlfSU8L1RhZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17KCkgPT4gcGF5bWVudFN0YXJ0KHByb2R1Y3QpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsponsi5zqtazrp6RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+7J6l67CU6rWs64uIPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcImhvcml6ZW50YWxcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOZWFyQW1vdW50VG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD17cHJvZHVjdC5EaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249e1wibGVmdFwifSBzdHlsZT17eyBmb250U2l6ZTogXCI1cHhcIiB9fT48L0RpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7LSd7JWhOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuRGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QucHJpY2UgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwMCAtIHByb2R1Y3QuRGlzY291bnQucmF0ZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wMSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm5BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKSA6IChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmQuTWV0YVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5IGRvdHM9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyb3V0ZXIucHVzaChgL2V2ZW50LyR7ZXZlbnQuaWR9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vdXBsb2Fkcy8ke2V2ZW50LkltYWdlc1swXS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=