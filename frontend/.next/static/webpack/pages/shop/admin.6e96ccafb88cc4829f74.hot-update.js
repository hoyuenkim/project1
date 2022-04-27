webpackHotUpdate_N_E("pages/shop/admin",{

/***/ "./pages/shop/admin/index.js":
/*!***********************************!*\
  !*** ./pages/shop/admin/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var _components_Forms_ShopAddForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Forms/ShopAddForm */ "./components/Forms/ShopAddForm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _s = $RefreshSig$();












var Index = function Index() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      session = _useSelector.session,
      isLoggedIn = _useSelector.isLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      modal = _useState[0],
      setModal = _useState[1];

  var _useInput = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_6__["useInput"])(),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      shopName = _useInput2[0],
      onChangeShopName = _useInput2[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      address = _useState2[0],
      setAddress = _useState2[1];

  var _useInput3 = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_6__["useInput"])(),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      addressDetail = _useInput4[0],
      onChangeAddressDetail = _useInput4[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      coordinates = _useState3[0],
      setCoordinates = _useState3[1];

  if (!session || !isLoggedIn) {
    router.push("/");
  }

  var onClickAddShop = function onClickAddShop() {
    return setModal(function (prev) {
      return !prev;
    });
  };

  var onFinish = function onFinish() {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["ADD_SHOP_REQUEST"],
      data: {
        UserId: session.id,
        shopName: shopName,
        address: address,
        addressDetail: addressDetail,
        bizcode: session.Shops[0].bizcode,
        coordinates: coordinates
      }
    });
    return setModal(false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
      visible: modal,
      onCancel: onClickAddShop,
      title: "점포 추가",
      footer: null,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_components_Forms_ShopAddForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onFinish: onFinish,
        onChangeShopName: onChangeShopName,
        address: address,
        setAddress: setAddress,
        onChangeAddressDetail: onChangeAddressDetail,
        setCoordinates: setCoordinates
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      title: session ? "".concat(session.name, "\uB2D8\uC758 \uB9E4\uC7A5 \uB9AC\uC2A4\uD2B8") : "매장 리스트",
      extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: onClickAddShop,
        children: "\uB9E4\uC7A5\uCD94\uAC00"
      }),
      children: session.Shops.map(function (shop) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          title: shop.name,
          extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            children: "\uB9E4\uC7A5 \uC0AD\uC81C"
          }),
          actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
            onClick: function onClick() {
              return router.push("/shop/admin/".concat(shop.id));
            },
            children: "\uB9E4\uC7A5\uAD00\uB9AC"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
            children: "\uB9E4\uC7A5\uC0AD\uC81C"
          })],
          children: "\uC8FC\uC18C: ".concat(shop.address, " ").concat(shop.addressDetail && shop.addressDetail)
        });
      })
    })]
  });
};

_s(Index, "J5h0z4X7lNMkCVHry9H58v30dLA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_6__["useInput"], _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_6__["useInput"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlc3Npb24iLCJpc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJtb2RhbCIsInNldE1vZGFsIiwidXNlSW5wdXQiLCJzaG9wTmFtZSIsIm9uQ2hhbmdlU2hvcE5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImFkZHJlc3NEZXRhaWwiLCJvbkNoYW5nZUFkZHJlc3NEZXRhaWwiLCJjb29yZGluYXRlcyIsInNldENvb3JkaW5hdGVzIiwicHVzaCIsIm9uQ2xpY2tBZGRTaG9wIiwicHJldiIsIm9uRmluaXNoIiwidHlwZSIsIkFERF9TSE9QX1JFUVVFU1QiLCJkYXRhIiwiVXNlcklkIiwiaWQiLCJiaXpjb2RlIiwiU2hvcHMiLCJuYW1lIiwibWFwIiwic2hvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxxQkFBZ0NDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTNDO0FBQUEsTUFBUUMsT0FBUixnQkFBUUEsT0FBUjtBQUFBLE1BQWlCQyxVQUFqQixnQkFBaUJBLFVBQWpCOztBQUNBLGtCQUEwQkMsc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0Esa0JBQXFDQyxrRkFBUSxFQUE3QztBQUFBO0FBQUEsTUFBT0MsUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0EsbUJBQThCTCxzREFBUSxFQUF0QztBQUFBLE1BQU9NLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQStDSixrRkFBUSxFQUF2RDtBQUFBO0FBQUEsTUFBT0ssYUFBUDtBQUFBLE1BQXNCQyxxQkFBdEI7O0FBQ0EsbUJBQXNDVCxzREFBUSxFQUE5QztBQUFBLE1BQU9VLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBRUEsTUFBSSxDQUFDYixPQUFELElBQVksQ0FBQ0MsVUFBakIsRUFBNkI7QUFDM0JOLFVBQU0sQ0FBQ21CLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7O0FBRUQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLFdBQU9YLFFBQVEsQ0FBQyxVQUFDWSxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFmO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCeEIsWUFBUSxDQUFDO0FBQ1B5QixVQUFJLEVBQUVDLCtEQURDO0FBRVBDLFVBQUksRUFBRTtBQUNKQyxjQUFNLEVBQUVyQixPQUFPLENBQUNzQixFQURaO0FBRUpoQixnQkFBUSxFQUFSQSxRQUZJO0FBR0pFLGVBQU8sRUFBUEEsT0FISTtBQUlKRSxxQkFBYSxFQUFiQSxhQUpJO0FBS0phLGVBQU8sRUFBRXZCLE9BQU8sQ0FBQ3dCLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRCxPQUx0QjtBQU1KWCxtQkFBVyxFQUFYQTtBQU5JO0FBRkMsS0FBRCxDQUFSO0FBV0EsV0FBT1IsUUFBUSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBYkQ7O0FBZUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQywwQ0FBRDtBQUFPLGFBQU8sRUFBRUQsS0FBaEI7QUFBdUIsY0FBUSxFQUFFWSxjQUFqQztBQUFpRCxXQUFLLEVBQUUsT0FBeEQ7QUFBaUUsWUFBTSxFQUFFLElBQXpFO0FBQUEsNkJBQ0UsOERBQUMscUVBQUQ7QUFDRSxnQkFBUSxFQUFFRSxRQURaO0FBRUUsd0JBQWdCLEVBQUVWLGdCQUZwQjtBQUdFLGVBQU8sRUFBRUMsT0FIWDtBQUlFLGtCQUFVLEVBQUVDLFVBSmQ7QUFLRSw2QkFBcUIsRUFBRUUscUJBTHpCO0FBTUUsc0JBQWMsRUFBRUU7QUFObEI7QUFERixNQURGLGVBV0UsOERBQUMseUNBQUQ7QUFDRSxXQUFLLEVBQUViLE9BQU8sYUFBTUEsT0FBTyxDQUFDeUIsSUFBZCxvREFBZ0MsUUFEaEQ7QUFFRSxXQUFLLGVBQUUsOERBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVWLGNBQWpCO0FBQUE7QUFBQSxRQUZUO0FBQUEsZ0JBSUdmLE9BQU8sQ0FBQ3dCLEtBQVIsQ0FBY0UsR0FBZCxDQUFrQixVQUFDQyxJQUFEO0FBQUEsNEJBQ2pCLDhEQUFDLHlDQUFEO0FBQ0UsZUFBSyxFQUFFQSxJQUFJLENBQUNGLElBRGQ7QUFFRSxlQUFLLGVBQUUsOERBQUMsMkNBQUQ7QUFBQTtBQUFBLFlBRlQ7QUFHRSxpQkFBTyxFQUFFLGNBQ1A7QUFBSyxtQkFBTyxFQUFFO0FBQUEscUJBQU05QixNQUFNLENBQUNtQixJQUFQLHVCQUEyQmEsSUFBSSxDQUFDTCxFQUFoQyxFQUFOO0FBQUEsYUFBZDtBQUFBO0FBQUEsWUFETyxlQUVQO0FBQUE7QUFBQSxZQUZPLENBSFg7QUFBQSw0Q0FRVUssSUFBSSxDQUFDbkIsT0FSZixjQVEwQm1CLElBQUksQ0FBQ2pCLGFBQUwsSUFBc0JpQixJQUFJLENBQUNqQixhQVJyRDtBQUFBLFVBRGlCO0FBQUEsT0FBbEI7QUFKSCxNQVhGO0FBQUEsSUFERjtBQStCRCxDQWhFRDs7R0FBTWxCLEs7VUFDYUUsdUQsRUFDRkUscUQsRUFDaUJDLHVELEVBRUtRLDBFLEVBRVVBLDBFOzs7S0FQM0NiLEs7QUFrRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nob3AvYWRtaW4uNmU5NmNjYWZiODhjYzQ4MjlmNzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24sIE1vZGFsLCBMaXN0LCBDb21tZW50LCBGb3JtLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBBRERfU0hPUF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHVjZXJzL3VzZXJcIjtcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzXCI7XG5pbXBvcnQgU2hvcEFkZEZvcm0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvRm9ybXMvU2hvcEFkZEZvcm1cIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2Vzc2lvbiwgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcbiAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG9wTmFtZSwgb25DaGFuZ2VTaG9wTmFtZV0gPSB1c2VJbnB1dCgpO1xuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbYWRkcmVzc0RldGFpbCwgb25DaGFuZ2VBZGRyZXNzRGV0YWlsXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtjb29yZGluYXRlcywgc2V0Q29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoKTtcblxuICBpZiAoIXNlc3Npb24gfHwgIWlzTG9nZ2VkSW4pIHtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH1cblxuICBjb25zdCBvbkNsaWNrQWRkU2hvcCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2V0TW9kYWwoKHByZXYpID0+ICFwcmV2KTtcbiAgfTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBRERfU0hPUF9SRVFVRVNULFxuICAgICAgZGF0YToge1xuICAgICAgICBVc2VySWQ6IHNlc3Npb24uaWQsXG4gICAgICAgIHNob3BOYW1lLFxuICAgICAgICBhZGRyZXNzLFxuICAgICAgICBhZGRyZXNzRGV0YWlsLFxuICAgICAgICBiaXpjb2RlOiBzZXNzaW9uLlNob3BzWzBdLmJpemNvZGUsXG4gICAgICAgIGNvb3JkaW5hdGVzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gc2V0TW9kYWwoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbCB2aXNpYmxlPXttb2RhbH0gb25DYW5jZWw9e29uQ2xpY2tBZGRTaG9wfSB0aXRsZT17XCLsoJDtj6wg7LaU6rCAXCJ9IGZvb3Rlcj17bnVsbH0+XG4gICAgICAgIDxTaG9wQWRkRm9ybVxuICAgICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgICBvbkNoYW5nZVNob3BOYW1lPXtvbkNoYW5nZVNob3BOYW1lfVxuICAgICAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XG4gICAgICAgICAgc2V0QWRkcmVzcz17c2V0QWRkcmVzc31cbiAgICAgICAgICBvbkNoYW5nZUFkZHJlc3NEZXRhaWw9e29uQ2hhbmdlQWRkcmVzc0RldGFpbH1cbiAgICAgICAgICBzZXRDb29yZGluYXRlcz17c2V0Q29vcmRpbmF0ZXN9XG4gICAgICAgIC8+XG4gICAgICA8L01vZGFsPlxuICAgICAgPENhcmRcbiAgICAgICAgdGl0bGU9e3Nlc3Npb24gPyBgJHtzZXNzaW9uLm5hbWV964uY7J2YIOunpOyepSDrpqzsiqTtirhgIDogXCLrp6TsnqUg66as7Iqk7Yq4XCJ9XG4gICAgICAgIGV4dHJhPXs8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tBZGRTaG9wfT7rp6TsnqXstpTqsIA8L0J1dHRvbj59XG4gICAgICA+XG4gICAgICAgIHtzZXNzaW9uLlNob3BzLm1hcCgoc2hvcCkgPT4gKFxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICB0aXRsZT17c2hvcC5uYW1lfVxuICAgICAgICAgICAgZXh0cmE9ezxCdXR0b24+66ek7J6lIOyCreygnDwvQnV0dG9uPn1cbiAgICAgICAgICAgIGFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3Nob3AvYWRtaW4vJHtzaG9wLmlkfWApfT7rp6TsnqXqtIDrpqw8L2Rpdj4sXG4gICAgICAgICAgICAgIDxkaXY+66ek7J6l7IKt7KCcPC9kaXY+LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YOyjvOyGjDogJHtzaG9wLmFkZHJlc3N9ICR7c2hvcC5hZGRyZXNzRGV0YWlsICYmIHNob3AuYWRkcmVzc0RldGFpbH1gfVxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=