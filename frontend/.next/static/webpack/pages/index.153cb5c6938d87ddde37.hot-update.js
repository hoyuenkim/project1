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
              description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
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
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
                  direction: "horizental",
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
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_2__["Typography"].Text, {
                  children: ["\uCD1D\uC561:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    value: product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity,
                    displayType: "text",
                    thousandSeparator: true
                  }), "\uC6D0"]
                })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsInByZXYiLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwib25DaGFuZ2VUb2dnbGVNb2RhbCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaG9wIiwic2hvcENvb3JkaW5hdGVzIiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZGF0YSIsImFkbWluIiwiZXZlbnRzIiwidXNlciIsImlzTG9nZ2VkSW4iLCJzZXNzaW9uIiwicHJvZHVjdHNOZWFyIiwidW5kZWZpbmVkIiwicG9zdCIsImlkIiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJlcnIiLCJlcnJvciIsInBheW1lbnRTdGFydCIsInByb2R1Y3QiLCJDTEVBUl9DQVJUX1JFUVVFU1QiLCJvbkNsaWNrUGF5bWVudCIsIkltYWdlcyIsInVybCIsIlNob3AiLCJuYW1lIiwidGl0bGUiLCJEaXNjb3VudCIsInJhdGUiLCJjdXJzb3IiLCJxdWFudGl0eSIsInByaWNlIiwiZm9udFNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcCIsImV2ZW50IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFS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R0FLSVgsT0FBTyxDQUFDWSxLQUFSLEdBQWdCWixPQUFPLENBQUNXLFFBUGhDO0FBU0UsK0JBQVcsRUFBRSxNQVRmO0FBVUUscUNBQWlCLEVBQUU7QUFWckIsb0JBRkY7QUFBQSxrQkEzQkY7QUFBQTtBQVZKO0FBREYsWUFEVTtBQUFBO0FBRmQ7QUFQSixNQURELGdCQTBFQywrREFBQyx5Q0FBRDtBQUFBLDZCQUNFLCtEQUFDLHlDQUFELENBQU0sSUFBTjtBQUNFLG1CQUFXLGVBQ1Q7QUFBSyxlQUFLLEVBQUU7QUFBRUcsa0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxpQkFBSyxFQUFFO0FBQTFCLFdBQVo7QUFBQSxpQ0FDRSwrREFBQyw2Q0FBRDtBQUFVLG9CQUFRLE1BQWxCO0FBQW1CLGdCQUFJLEVBQUUsS0FBekI7QUFBQSxzQkFDRy9CLE1BQU0sQ0FBQ2dDLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsa0NBQ1YsK0RBQUMsMENBQUQ7QUFDRSx1QkFBTyxFQUFFckQsTUFBTSxDQUFDc0QsSUFBUCxrQkFBc0JELEtBQUssQ0FBQzFCLEVBQTVCLEVBRFg7QUFFRSxxQkFBSyxFQUFFO0FBQUV1Qix3QkFBTSxFQUFFLE9BQVY7QUFBbUJDLHVCQUFLLEVBQUU7QUFBMUIsaUJBRlQ7QUFHRSxtQkFBRyxZQUFLdEQsd0JBQUwsc0JBQXVDd0QsS0FBSyxDQUFDZCxNQUFOLENBQWEsQ0FBYixFQUFnQkMsR0FBdkQ7QUFITCxnQkFEVTtBQUFBLGFBQVg7QUFESDtBQURGO0FBRko7QUFERixNQWpGSjtBQUFBLElBREY7QUFzR0QsQ0FwSkQ7O0dBQU0vQyxLO1VBR2FNLHVELEVBQ0ZFLHFELEVBV2FTLHVELEVBVVRBLHVELEVBQ2FBLHVELEVBQ1BBLHVEOzs7S0EzQnJCakIsSztBQXNKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTUzY2I1YzY5MzhkODdkZGRlMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhcmQsXG4gIENhcm91c2VsLFxuICBJbWFnZSxcbiAgVGFnLFxuICBMaXN0LFxuICBTd2l0Y2gsXG4gIEF2YXRhcixcbiAgUm93LFxuICBDb2wsXG4gIERpdmlkZXIsXG4gIFNwYWNlLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOdW1iZXJPdXRsaW5lZCwgRG9sbGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBPbmVTaWduYWwgZnJvbSBcInJlYWN0LW9uZXNpZ25hbFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMT0FEX0VWRU5UU19SRVFVRVNULCBQQUdFX0NIQU5HRV9TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2FkbWluXCI7XG5pbXBvcnQgeyBDTEVBUl9DQVJUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvY2FydFwiO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvTWFwQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MgfSBmcm9tIFwiLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xuaW1wb3J0IHsgb25DbGlja1BheW1lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvUGF5bWVudFwiO1xuaW1wb3J0IE1vZGFsSW50ZXJmYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9Nb2RhbFwiO1xuaW1wb3J0IE5lYXJBbW91bnRUb2dnbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL05lYXJBbW91bnRUb2dnbGVcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfWA7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG9uQ2hhbmdlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IFt0b2dnbGVNb2RhbCwgc2V0VG9nZ2xlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRUb2dnbGVNb2RhbCgocHJldikgPT4gIXByZXYpO1xuXG4gIGNvbnN0IHsgc2hvcENvb3JkaW5hdGVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0FEX0VWRU5UU19SRVFVRVNUIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiaW5kZXhcIiB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkbWluKTtcbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IHByb2R1Y3RzTmVhciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uICYmIHNob3BDb29yZGluYXRlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL1wiLCB7IGlkOiBzZXNzaW9uLmlkIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuICB9LCBbc2Vzc2lvbiwgc2hvcENvb3JkaW5hdGVzXSk7XG5cbiAgY29uc3QgcGF5bWVudFN0YXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NBUlRfUkVRVUVTVCB9KTtcbiAgICByZXR1cm4gb25DbGlja1BheW1lbnQoXCJzaW5nbGVcIiwgcHJvZHVjdCwgaXNMb2dnZWRJbiwgc2Vzc2lvbiwgb25DaGFuZ2VUb2dnbGVNb2RhbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsSW50ZXJmYWNlXG4gICAgICAgIGNvbnRlbnQ9e1wi66Gc6re47J247J2EIO2VmOyFlOyVvCDtlanri4jri6QuXCJ9XG4gICAgICAgIHRvZ2dsZU1vZGFsPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgb25DaGFuZ2VUb2dnbGVNb2RhbD17b25DaGFuZ2VUb2dnbGVNb2RhbH1cbiAgICAgICAgdGl0bGU9e1wi6rK96rOgXCJ9XG4gICAgICAvPlxuICAgICAge2lzTG9nZ2VkSW4gJiYgc2Vzc2lvbiA/IChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICB0aXRsZT17dG9nZ2xlID8gXCLso7zrs4Ag6rCA6rKMXCIgOiBcIuy2lOyynCDrqZTribRcIn1cbiAgICAgICAgICBleHRyYT17PFN3aXRjaCBvbkNsaWNrPXtvbkNoYW5nZVRvZ2dsZX0gLz59XG4gICAgICAgID5cbiAgICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgICAgPE1hcENvbXBvbmVudCBzZXNzaW9uPXtzZXNzaW9ufSBzaG9wQ29vcmRpbmF0ZXM9e3Nob3BDb29yZGluYXRlc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cHJvZHVjdHNOZWFyfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LkltYWdlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7cHJvZHVjdC5JbWFnZXNbMF0udXJsfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcImhvcml6ZW50YWxcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YFske3Byb2R1Y3QuU2hvcC5uYW1lfV0gJHtwcm9kdWN0LnRpdGxlfWB9PC9UeXBvZ3JhcGh5LlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LkRpc2NvdW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e1wibWFnZW50YVwifT4tIHtwcm9kdWN0LkRpc2NvdW50LnJhdGV9JTwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBwYXltZW50U3RhcnQocHJvZHVjdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOymieyLnOq1rOunpFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT7snqXrsJTqtazri4g8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1wiaG9yaXplbnRhbFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE5lYXJBbW91bnRUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eT17cHJvZHVjdC5xdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD17cHJvZHVjdC5EaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj17XCJsZWZ0XCJ9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjVweFwiIH19PjwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOy0neyVoTp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LkRpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJvZHVjdC5wcmljZSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwMCAtIHByb2R1Y3QuRGlzY291bnQucmF0ZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMDEgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NhcmQ+XG4gICAgICApIDogKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgZG90cz17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JvdXRlci5wdXNoKGAvZXZlbnQvJHtldmVudC5pZH1gKX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7ZXZlbnQuSW1hZ2VzWzBdLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==