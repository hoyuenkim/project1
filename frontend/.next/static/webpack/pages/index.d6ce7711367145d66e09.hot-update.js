webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Generalui/NearAmountToggle.js":
/*!**************************************************!*\
  !*** ./components/Generalui/NearAmountToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _s = $RefreshSig$();









var NearAmountToggle = function NearAmountToggle(_ref) {
  _s();

  var id = _ref.id,
      quantity = _ref.quantity,
      price = _ref.price,
      discount = _ref.discount;
  console.log(quantity);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var onClickAdd = function onClickAdd() {
    try {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["NEAR_ADD_QUANTITY_REQUEST"],
        data: {
          id: id
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  var onClickSubstract = function onClickSubstract() {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["NEAR_SUBSTRACT_QUANTITY_REQUEST"],
      data: {
        id: id
      }
    });
  };

  console.log(discount);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      span: 16,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
        style: {
          display: "inline-block"
        },
        children: ["\uB2E8\uAC00:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
          style: {
            textDecoration: "line-through"
          },
          thousandSeparator: true,
          value: price,
          displayType: "text"
        }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
          style: {
            fontWeight: "bold",
            color: "red"
          },
          thousandSeparator: true,
          value: price * ((100 - discount.rate) * 0.01),
          displayType: "text"
        }), "\uC6D0"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      span: 8,
      style: {
        textAlign: "right"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        style: {
          textAlign: "center",
          verticalAlign: "middle"
        },
        value: quantity,
        size: "small",
        readOnly: true,
        maxLength: 1,
        addonBefore: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {
          onClick: onClickAdd
        }),
        addonAfter: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MinusOutlined"], {
          onClick: onClickSubstract
        })
      })
    })]
  });
};

_s(NearAmountToggle, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c = NearAmountToggle;
/* harmony default export */ __webpack_exports__["default"] = (NearAmountToggle);

var _c;

$RefreshReg$(_c, "NearAmountToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwiY29sb3IiLCJyYXRlIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxFQUFvQyxRQUFwQ0EsRUFBb0M7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM5REMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxNQUFNSyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSTtBQUNGRixjQUFRLENBQUM7QUFBRUcsWUFBSSxFQUFFQyx3RUFBUjtBQUFtQ0MsWUFBSSxFQUFFO0FBQUVYLFlBQUUsRUFBRkE7QUFBRjtBQUF6QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT1ksQ0FBUCxFQUFVO0FBQ1ZSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxDQUFaO0FBQ0Q7QUFDRixHQU5EOztBQU9BLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QlAsWUFBUSxDQUFDO0FBQUVHLFVBQUksRUFBRUssOEVBQVI7QUFBeUNILFVBQUksRUFBRTtBQUFFWCxVQUFFLEVBQUZBO0FBQUY7QUFBL0MsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQUksU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxzQkFDRSwrREFBQyx3Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFFLEVBQVg7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFWSxpQkFBTyxFQUFFO0FBQVgsU0FBWjtBQUFBLG9DQUNNLEdBRE4sZUFFRSw4REFBQywyREFBRDtBQUNFLGVBQUssRUFBRTtBQUFFQywwQkFBYyxFQUFFO0FBQWxCLFdBRFQ7QUFFRSwyQkFBaUIsRUFBRSxJQUZyQjtBQUdFLGVBQUssRUFBRWQsS0FIVDtBQUlFLHFCQUFXLEVBQUU7QUFKZixVQUZGLEVBT0ssR0FQTCxlQVFFLDhEQUFDLDJEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUVlLHNCQUFVLEVBQUUsTUFBZDtBQUFzQkMsaUJBQUssRUFBRTtBQUE3QixXQURUO0FBRUUsMkJBQWlCLEVBQUUsSUFGckI7QUFHRSxlQUFLLEVBQUVoQixLQUFLLElBQUksQ0FBQyxNQUFNQyxRQUFRLENBQUNnQixJQUFoQixJQUF3QixJQUE1QixDQUhkO0FBSUUscUJBQVcsRUFBRTtBQUpmLFVBUkY7QUFBQTtBQURGLE1BREYsZUFtQkUsOERBQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFjLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBckI7QUFBQSw2QkFDRSw4REFBQywwQ0FBRDtBQUNFLGFBQUssRUFBRTtBQUNMQSxtQkFBUyxFQUFFLFFBRE47QUFFTEMsdUJBQWEsRUFBRTtBQUZWLFNBRFQ7QUFLRSxhQUFLLEVBQUVwQixRQUxUO0FBTUUsWUFBSSxFQUFFLE9BTlI7QUFPRSxnQkFBUSxNQVBWO0FBUUUsaUJBQVMsRUFBRSxDQVJiO0FBU0UsbUJBQVcsZUFBRSw4REFBQyw4REFBRDtBQUFjLGlCQUFPLEVBQUVPO0FBQXZCLFVBVGY7QUFVRSxrQkFBVSxlQUFFLDhEQUFDLCtEQUFEO0FBQWUsaUJBQU8sRUFBRUs7QUFBeEI7QUFWZDtBQURGLE1BbkJGO0FBQUEsSUFERjtBQW9DRCxDQWxERDs7R0FBTWQsZ0I7VUFFYVEsdUQ7OztLQUZiUixnQjtBQW9EU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZjZTc3MTEzNjcxNDVkNjZlMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBsdXNDaXJjbGVPdXRsaW5lZCxcbiAgTWludXNDaXJjbGVPdXRsaW5lZCxcbiAgTWludXNPdXRsaW5lZCxcbiAgUGx1c091dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBORUFSX0FERF9RVUFOVElUWV9SRVFVRVNULCBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Nob3BcIjtcbmltcG9ydCB7IENvbCwgUm93LCBUeXBvZ3JhcGh5LCBJbnB1dCwgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xuXG5jb25zdCBOZWFyQW1vdW50VG9nZ2xlID0gKHsgaWQsIHF1YW50aXR5LCBwcmljZSwgZGlzY291bnQgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWFudGl0eSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGlja0FkZCA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBORUFSX0FERF9RVUFOVElUWV9SRVFVRVNULCBkYXRhOiB7IGlkIH0gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkNsaWNrU3Vic3RyYWN0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCwgZGF0YTogeyBpZCB9IH0pO1xuICB9O1xuICBjb25zb2xlLmxvZyhkaXNjb3VudCk7XG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17MTZ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIgfX0+XG4gICAgICAgICAg64uo6rCAOntcIiBcIn1cbiAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJsaW5lLXRocm91Z2hcIiB9fVxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkXCIsIGNvbG9yOiBcInJlZFwiIH19XG4gICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtwcmljZSAqICgoMTAwIC0gZGlzY291bnQucmF0ZSkgKiAwLjAxKX1cbiAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIOybkFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgc2l6ZT17XCJzbWFsbFwifVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgIGFkZG9uQmVmb3JlPXs8UGx1c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tBZGR9IC8+fVxuICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxNaW51c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tTdWJzdHJhY3R9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZWFyQW1vdW50VG9nZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==