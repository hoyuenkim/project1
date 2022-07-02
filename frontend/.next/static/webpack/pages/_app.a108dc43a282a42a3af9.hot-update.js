webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Layout/NavibarLayout.js":
/*!********************************************!*\
  !*** ./components/Layout/NavibarLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _Forms_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Forms/Login */ "./components/Forms/Login.js");
/* harmony import */ var _Forms_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Forms/SearchBar */ "./components/Forms/SearchBar.js");
/* harmony import */ var _Forms_ChangePassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Forms/ChangePassword */ "./components/Forms/ChangePassword.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);


var _s = $RefreshSig$();


















var NavibarLayout = function NavibarLayout() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  axios__WEBPACK_IMPORTED_MODULE_11___default.a.defaults.baseURL = "".concat("https://127.0.0.1:3065");

  var _useInput = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_10__["useInput"])(),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      username = _useInput2[0],
      onChangeUsername = _useInput2[1],
      setUsername = _useInput2[2];

  var _useInput3 = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_10__["useInput"])(),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 3),
      password = _useInput4[0],
      onChangePassword = _useInput4[1],
      setPassword = _useInput4[2];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      toggleLogin = _useState[0],
      setToggleLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      toggleSearch = _useState2[0],
      setToggleSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      toggleChangePassword = _useState3[0],
      setToggleChangePassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      visible = _useState4[0],
      setVisible = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
      list = _useState5[0],
      setList = _useState5[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.admin;
  }),
      pageInfo = _useSelector.pageInfo;

  console.log(pageInfo);

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(false),
      show = _useState6[0],
      setShow = _useState6[1];

  var hideHandler = function hideHandler() {
    setShow(false);
  };

  var showHandler = function showHandler(show) {
    setShow(show);
  };

  var onToggleChangePassword = function onToggleChangePassword() {
    hideHandler();
    setToggleChangePassword(function (prev) {
      return !prev;
    });
  };

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var onClickLogout = function onClickLogout() {
    setPassword("");
    setUsername("");
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["LOG_OUT_SUCCESS"]
    });
  };

  var onToggleLogin = function onToggleLogin() {
    setPassword("");
    setUsername("");
    setToggleLogin(function (prev) {
      return !prev;
    });
  };

  var onToggleSearch = function onToggleSearch() {
    setToggleSearch(function (prev) {
      return !prev;
    });
  };

  var onVisible = function onVisible() {
    setVisible(function (prev) {
      return !prev;
    });
  };

  var onClickPayments = function onClickPayments() {
    router.push("/payments");
    hideHandler();
  };

  var onClickAdmin = function onClickAdmin() {
    router.push("/shop/admin");
    hideHandler();
  };

  var onClickShopList = function onClickShopList(coordinates) {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("/", {
      coordinates: {
        lat: Number(coordinates.x),
        lng: Number(coordinates.y)
      }
    }).then(function (result) {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_12__["SET_COORDINATES_SUCCESS"],
        data: [Number(coordinates.x), Number(coordinates.y)]
      }, []);
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_12__["SET_SHOPCOORDINATES_SUCCESS"],
        data: result.data
      }, []);
      setVisible(false);
    });
  };

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector2.isLoggedIn,
      session = _useSelector2.session;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Login",
      visible: toggleLogin,
      onCancel: onToggleLogin,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {
        setToggleLogin: setToggleLogin,
        username: username,
        onChangeUsername: onChangeUsername,
        password: password,
        onChangePassword: onChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Search",
      visible: toggleSearch,
      onCancel: onToggleSearch,
      setVisible: setVisible,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        type: pageInfo,
        setToggleSearch: setToggleSearch,
        setVisible: setVisible,
        setList: setList
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "검색결과",
      visible: visible,
      onCancel: onVisible,
      footer: null,
      children: list.length > 0 ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        dataSource: list,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
            onClick: function onClick() {
              return onClickShopList(item);
            },
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
              title: item.place_name,
              description: item.road_address_name
            })
          });
        }
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
        children: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      title: "Change Password",
      visible: toggleChangePassword,
      onCancel: onToggleChangePassword,
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_Forms_ChangePassword__WEBPACK_IMPORTED_MODULE_8__["default"], {
        setToggleChangePassword: setToggleChangePassword
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
      style: {
        marginTop: "10px",
        backGroundColor: "white"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
        mode: "horizontal",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowLeftOutlined"], {
            onClick: function onClick() {
              return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.back();
            }
          })
        }, "back"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          style: {
            "float": "right"
          },
          children: pageInfo && pageInfo == ("index" || false || false) ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
            enterButton: true,
            style: {
              verticalAlign: "middle"
            },
            onClick: onToggleSearch,
            readOnly: true
          }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Search, {
            enterButton: true,
            style: {
              verticalAlign: "middle"
            },
            disabled: true,
            onClick: onToggleSearch,
            readOnly: true
          })
        }, "search"), !isLoggedIn ? [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
            onClick: onToggleLogin,
            children: "\uB85C\uADF8\uC778"
          })
        }, "login")] : [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
            trigger: "click",
            placement: "bottom",
            title: session.name,
            visible: show,
            onVisibleChange: showHandler,
            content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
                direction: "vertical",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: onToggleChangePassword,
                  children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
                }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: onClickPayments,
                  children: "\uACB0\uC81C\uC774\uB825"
                }), session.division === true && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
                  style: {
                    cursor: "pointer"
                  },
                  onClick: onClickAdmin,
                  children: "\uB9E4\uC7A5\uAD00\uB9AC \uD398\uC774\uC9C0"
                })]
              })
            }),
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["UserOutlined"], {})
          })
        }, "profile"), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
          style: {
            "float": "right"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
            onClick: onClickLogout,
            children: "\uB85C\uADF8\uC544\uC6C3"
          })
        }, "logout")]]
      })
    })]
  });
};

_s(NavibarLayout, "2yDGflpUzJTlHZjI6gnhClh143I=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_10__["useInput"], _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_10__["useInput"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = NavibarLayout;
/* harmony default export */ __webpack_exports__["default"] = (NavibarLayout);

var _c;

$RefreshReg$(_c, "NavibarLayout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2aWJhckxheW91dC5qcyJdLCJuYW1lcyI6WyJOYXZpYmFyTGF5b3V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwcm9jZXNzIiwidXNlSW5wdXQiLCJ1c2VybmFtZSIsIm9uQ2hhbmdlVXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlU3RhdGUiLCJ0b2dnbGVMb2dpbiIsInNldFRvZ2dsZUxvZ2luIiwidG9nZ2xlU2VhcmNoIiwic2V0VG9nZ2xlU2VhcmNoIiwidG9nZ2xlQ2hhbmdlUGFzc3dvcmQiLCJzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwibGlzdCIsInNldExpc3QiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYWRtaW4iLCJwYWdlSW5mbyIsImNvbnNvbGUiLCJsb2ciLCJzaG93Iiwic2V0U2hvdyIsImhpZGVIYW5kbGVyIiwic2hvd0hhbmRsZXIiLCJvblRvZ2dsZUNoYW5nZVBhc3N3b3JkIiwicHJldiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNsaWNrTG9nb3V0IiwidHlwZSIsIkxPR19PVVRfU1VDQ0VTUyIsIm9uVG9nZ2xlTG9naW4iLCJvblRvZ2dsZVNlYXJjaCIsIm9uVmlzaWJsZSIsIm9uQ2xpY2tQYXltZW50cyIsInB1c2giLCJvbkNsaWNrQWRtaW4iLCJvbkNsaWNrU2hvcExpc3QiLCJjb29yZGluYXRlcyIsInBvc3QiLCJsYXQiLCJOdW1iZXIiLCJ4IiwibG5nIiwieSIsInRoZW4iLCJyZXN1bHQiLCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUyIsImRhdGEiLCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInNlc3Npb24iLCJsZW5ndGgiLCJpdGVtIiwicGxhY2VfbmFtZSIsInJvYWRfYWRkcmVzc19uYW1lIiwibWFyZ2luVG9wIiwiYmFja0dyb3VuZENvbG9yIiwiUm91dGVyIiwiYmFjayIsInZlcnRpY2FsQWxpZ24iLCJuYW1lIiwiY3Vyc29yIiwiZGl2aXNpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLCtDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixhQUE0QkMsd0JBQTVCOztBQUVBLGtCQUFrREMsd0VBQVEsRUFBMUQ7QUFBQTtBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsZ0JBQWpCO0FBQUEsTUFBbUNDLFdBQW5DOztBQUNBLG1CQUFrREgsd0VBQVEsRUFBMUQ7QUFBQTtBQUFBLE1BQU9JLFFBQVA7QUFBQSxNQUFpQkMsZ0JBQWpCO0FBQUEsTUFBbUNDLFdBQW5DOztBQUVBLGtCQUFzQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQUEsTUFBT0MsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFDQSxtQkFBd0NGLHNEQUFRLENBQUMsS0FBRCxDQUFoRDtBQUFBLE1BQU9HLFlBQVA7QUFBQSxNQUFxQkMsZUFBckI7O0FBQ0EsbUJBQXdESixzREFBUSxDQUFDLEtBQUQsQ0FBaEU7QUFBQSxNQUFPSyxvQkFBUDtBQUFBLE1BQTZCQyx1QkFBN0I7O0FBQ0EsbUJBQThCTixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPTyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUF3QlIsc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBRUEscUJBQXFC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NUM7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFERixjQVBKO0FBQUEsbUNBd0JFLCtEQUFDLDhEQUFEO0FBeEJGO0FBREYsV0FBZ0IsU0FBaEIsQ0FERixlQTZCRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxlQUFLLEVBQUU7QUFBRSxxQkFBTztBQUFULFdBQWxCO0FBQUEsaUNBQ0U7QUFBRyxtQkFBTyxFQUFFUixhQUFaO0FBQUE7QUFBQTtBQURGLFdBQTJDLFFBQTNDLENBN0JGLENBN0JOO0FBQUE7QUFERixNQWhERjtBQUFBLElBREY7QUFvSEQsQ0FyTUQ7O0dBQU12QyxhO1VBQ1dFLHFELEVBR21DSyxnRSxFQUNBQSxnRSxFQVE3QmtCLHVELEVBbUJKYSx1RCxFQStDZWIsdUQ7OztLQS9FNUJ6QixhO0FBdU1TQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmExMDhkYzQzYTI4MmE0MmEzYWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51LCBJbnB1dCwgTW9kYWwsIFBvcG92ZXIsIFNwYWNlLCBMaXN0LCBFbXB0eSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBcnJvd0xlZnRPdXRsaW5lZCwgVXNlck91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMT0dfT1VUX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvdXNlclwiO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSBcIi4uL0Zvcm1zL0xvZ2luXCI7XG5pbXBvcnQgU2VhcmNoQmFyTW9kYWwgZnJvbSBcIi4uL0Zvcm1zL1NlYXJjaEJhclwiO1xuaW1wb3J0IENoYW5nZVBhc3N3b3JkIGZyb20gXCIuLi9Gb3Jtcy9DaGFuZ2VQYXNzd29yZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tIFwiLi4vR2VuZXJhbHVpL0N1c3RvbUhvb2tzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUywgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Nob3BcIjtcblxuY29uc3QgTmF2aWJhckxheW91dCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfWA7XG5cbiAgY29uc3QgW3VzZXJuYW1lLCBvbkNoYW5nZVVzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZUlucHV0KCk7XG5cbiAgY29uc3QgW3RvZ2dsZUxvZ2luLCBzZXRUb2dnbGVMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2dnbGVTZWFyY2gsIHNldFRvZ2dsZVNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0b2dnbGVDaGFuZ2VQYXNzd29yZCwgc2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IHBhZ2VJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkbWluKTtcblxuICBjb25zb2xlLmxvZyhwYWdlSW5mbyk7XG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhpZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHNldFNob3coZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dIYW5kbGVyID0gKHNob3cpID0+IHtcbiAgICBzZXRTaG93KHNob3cpO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ2hhbmdlUGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgICBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZCgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGlja0xvZ291dCA9ICgpID0+IHtcbiAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICBzZXRVc2VybmFtZShcIlwiKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IExPR19PVVRfU1VDQ0VTUyB9KTtcbiAgfTtcblxuICBjb25zdCBvblRvZ2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIHNldFBhc3N3b3JkKFwiXCIpO1xuICAgIHNldFVzZXJuYW1lKFwiXCIpO1xuICAgIHNldFRvZ2dsZUxvZ2luKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVTZWFyY2ggPSAoKSA9PiB7XG4gICAgc2V0VG9nZ2xlU2VhcmNoKChwcmV2KSA9PiAhcHJldik7XG4gIH07XG5cbiAgY29uc3Qgb25WaXNpYmxlID0gKCkgPT4ge1xuICAgIHNldFZpc2libGUoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrUGF5bWVudHMgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvcGF5bWVudHNcIik7XG4gICAgaGlkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQWRtaW4gPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvc2hvcC9hZG1pblwiKTtcbiAgICBoaWRlSGFuZGxlcigpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tTaG9wTGlzdCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcIi9cIiwgeyBjb29yZGluYXRlczogeyBsYXQ6IE51bWJlcihjb29yZGluYXRlcy54KSwgbG5nOiBOdW1iZXIoY29vcmRpbmF0ZXMueSkgfSB9KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBTRVRfQ09PUkRJTkFURVNfU1VDQ0VTUyxcbiAgICAgICAgICAgIGRhdGE6IFtOdW1iZXIoY29vcmRpbmF0ZXMueCksIE51bWJlcihjb29yZGluYXRlcy55KV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXSxcbiAgICAgICAgKTtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0sIFtdKTtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB7IGlzTG9nZ2VkSW4sIHNlc3Npb24gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsIHRpdGxlPXtcIkxvZ2luXCJ9IHZpc2libGU9e3RvZ2dsZUxvZ2lufSBvbkNhbmNlbD17b25Ub2dnbGVMb2dpbn0gZm9vdGVyPXtudWxsfT5cbiAgICAgICAgPExvZ2luTW9kYWxcbiAgICAgICAgICBzZXRUb2dnbGVMb2dpbj17c2V0VG9nZ2xlTG9naW59XG4gICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlVXNlcm5hbWU9e29uQ2hhbmdlVXNlcm5hbWV9XG4gICAgICAgICAgcGFzc3dvcmQ9e3Bhc3N3b3JkfVxuICAgICAgICAgIG9uQ2hhbmdlUGFzc3dvcmQ9e29uQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsXG4gICAgICAgIHRpdGxlPXtcIlNlYXJjaFwifVxuICAgICAgICB2aXNpYmxlPXt0b2dnbGVTZWFyY2h9XG4gICAgICAgIG9uQ2FuY2VsPXtvblRvZ2dsZVNlYXJjaH1cbiAgICAgICAgc2V0VmlzaWJsZT17c2V0VmlzaWJsZX1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8U2VhcmNoQmFyTW9kYWxcbiAgICAgICAgICB0eXBlPXtwYWdlSW5mb31cbiAgICAgICAgICBzZXRUb2dnbGVTZWFyY2g9e3NldFRvZ2dsZVNlYXJjaH1cbiAgICAgICAgICBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfVxuICAgICAgICAgIHNldExpc3Q9e3NldExpc3R9XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPE1vZGFsIHRpdGxlPXtcIuqygOyDieqysOqzvFwifSB2aXNpYmxlPXt2aXNpYmxlfSBvbkNhbmNlbD17b25WaXNpYmxlfSBmb290ZXI9e251bGx9PlxuICAgICAgICB7bGlzdC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBkYXRhU291cmNlPXtsaXN0fVxuICAgICAgICAgICAgcmVuZGVySXRlbT17KGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tTaG9wTGlzdChpdGVtKX0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGEgdGl0bGU9e2l0ZW0ucGxhY2VfbmFtZX0gZGVzY3JpcHRpb249e2l0ZW0ucm9hZF9hZGRyZXNzX25hbWV9IC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEVtcHR5PuqygOyDiSDqsrDqs7zqsIAg7KG07J6s7ZWY7KeAIOyViuyKteuLiOuLpC48L0VtcHR5PlxuICAgICAgICApfVxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17XCJDaGFuZ2UgUGFzc3dvcmRcIn1cbiAgICAgICAgdmlzaWJsZT17dG9nZ2xlQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgIG9uQ2FuY2VsPXtvblRvZ2dsZUNoYW5nZVBhc3N3b3JkfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxDaGFuZ2VQYXNzd29yZCBzZXRUb2dnbGVDaGFuZ2VQYXNzd29yZD17c2V0VG9nZ2xlQ2hhbmdlUGFzc3dvcmR9IC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBiYWNrR3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgPE1lbnUgbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT17XCJiYWNrXCJ9PlxuICAgICAgICAgICAgPEFycm93TGVmdE91dGxpbmVkIG9uQ2xpY2s9eygpID0+IFJvdXRlci5iYWNrKCl9IC8+XG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e1wic2VhcmNoXCJ9IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XG4gICAgICAgICAgICB7cGFnZUluZm8gJiYgcGFnZUluZm8gPT0gKFwiaW5kZXhcIiB8fCBcIm1lbnVcIiB8fCBcInN0b2NrXCIpID8gKFxuICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVNlYXJjaH1cbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnUuSXRlbT5cblxuICAgICAgICAgIHshaXNMb2dnZWRJblxuICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9e1wibG9naW5cIn0+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvblRvZ2dsZUxvZ2lufT7roZzqt7jsnbg8L2E+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT17XCJwcm9maWxlXCJ9PlxuICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XCJjbGlja1wifVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9e1wiYm90dG9tXCJ9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtzZXNzaW9uLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3Nob3d9XG4gICAgICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17c2hvd0hhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcInZlcnRpY2FsXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17b25Ub2dnbGVDaGFuZ2VQYXNzd29yZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg67mE67CA67KI7Zi4IOuzgOqyvVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e29uQ2xpY2tQYXltZW50c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6rKw7KCc7J2066ClXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5kaXZpc2lvbiA9PT0gdHJ1ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19IG9uQ2xpY2s9e29uQ2xpY2tBZG1pbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrp6TsnqXqtIDrpqwg7Y6Y7J207KeAXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz5cbiAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT4sXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19IGtleT17XCJsb2dvdXRcIn0+XG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsaWNrTG9nb3V0fT7roZzqt7jslYTsm4M8L2E+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+LFxuICAgICAgICAgICAgICBdfVxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmliYXJMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9