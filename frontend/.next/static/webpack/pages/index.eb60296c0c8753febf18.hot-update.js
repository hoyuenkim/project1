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
          display: "inline-block",
          fontWeight: "bold",
          color: "red"
        },
        children: ["\uD560\uC778\uAC00:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsImNvbG9yIiwicmF0ZSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsRUFBb0MsUUFBcENBLEVBQW9DO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0EsTUFBTUssUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUk7QUFDRkYsY0FBUSxDQUFDO0FBQUVHLFlBQUksRUFBRUMsd0VBQVI7QUFBbUNDLFlBQUksRUFBRTtBQUFFWCxZQUFFLEVBQUZBO0FBQUY7QUFBekMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU9ZLENBQVAsRUFBVTtBQUNWUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sQ0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JQLFlBQVEsQ0FBQztBQUFFRyxVQUFJLEVBQUVLLDhFQUFSO0FBQXlDSCxVQUFJLEVBQUU7QUFBRVgsVUFBRSxFQUFGQTtBQUFGO0FBQS9DLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0Esc0JBQ0UsK0RBQUMsd0NBQUQ7QUFBQSw0QkFDRSw4REFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxFQUFYO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRVksaUJBQU8sRUFBRSxjQUFYO0FBQTJCQyxvQkFBVSxFQUFFLE1BQXZDO0FBQStDQyxlQUFLLEVBQUU7QUFBdEQsU0FBWjtBQUFBLDBDQUNPLEdBRFAsZUFFRSw4REFBQywyREFBRDtBQUNFLDJCQUFpQixFQUFFLElBRHJCO0FBRUUsZUFBSyxFQUFFZixLQUFLLElBQUksQ0FBQyxNQUFNQyxRQUFRLENBQUNlLElBQWhCLElBQXdCLElBQTVCLENBRmQ7QUFHRSxxQkFBVyxFQUFFO0FBSGYsVUFGRjtBQUFBO0FBREYsTUFERixlQVlFLDhEQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFFLENBQVg7QUFBYyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQXJCO0FBQUEsNkJBQ0UsOERBQUMsMENBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEEsbUJBQVMsRUFBRSxRQUROO0FBRUxDLHVCQUFhLEVBQUU7QUFGVixTQURUO0FBS0UsYUFBSyxFQUFFbkIsUUFMVDtBQU1FLFlBQUksRUFBRSxPQU5SO0FBT0UsZ0JBQVEsTUFQVjtBQVFFLGlCQUFTLEVBQUUsQ0FSYjtBQVNFLG1CQUFXLGVBQUUsOERBQUMsOERBQUQ7QUFBYyxpQkFBTyxFQUFFTztBQUF2QixVQVRmO0FBVUUsa0JBQVUsZUFBRSw4REFBQywrREFBRDtBQUFlLGlCQUFPLEVBQUVLO0FBQXhCO0FBVmQ7QUFERixNQVpGO0FBQUEsSUFERjtBQTZCRCxDQTNDRDs7R0FBTWQsZ0I7VUFFYVEsdUQ7OztLQUZiUixnQjtBQTZDU0EsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI2MDI5NmMwYzg3NTNmZWJmMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBsdXNDaXJjbGVPdXRsaW5lZCxcbiAgTWludXNDaXJjbGVPdXRsaW5lZCxcbiAgTWludXNPdXRsaW5lZCxcbiAgUGx1c091dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBORUFSX0FERF9RVUFOVElUWV9SRVFVRVNULCBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3Nob3BcIjtcbmltcG9ydCB7IENvbCwgUm93LCBUeXBvZ3JhcGh5LCBJbnB1dCwgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xuXG5jb25zdCBOZWFyQW1vdW50VG9nZ2xlID0gKHsgaWQsIHF1YW50aXR5LCBwcmljZSwgZGlzY291bnQgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhxdWFudGl0eSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgb25DbGlja0FkZCA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBORUFSX0FERF9RVUFOVElUWV9SRVFVRVNULCBkYXRhOiB7IGlkIH0gfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkNsaWNrU3Vic3RyYWN0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCwgZGF0YTogeyBpZCB9IH0pO1xuICB9O1xuICBjb25zb2xlLmxvZyhkaXNjb3VudCk7XG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17MTZ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCJyZWRcIiB9fT5cbiAgICAgICAgICDtlaDsnbjqsIA6e1wiIFwifVxuICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlICogKCgxMDAgLSBkaXNjb3VudC5yYXRlKSAqIDAuMDEpfVxuICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAg7JuQXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezh9IHN0eWxlPXt7IHRleHRBbGlnbjogXCJyaWdodFwiIH19PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXtxdWFudGl0eX1cbiAgICAgICAgICBzaXplPXtcInNtYWxsXCJ9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBtYXhMZW5ndGg9ezF9XG4gICAgICAgICAgYWRkb25CZWZvcmU9ezxQbHVzT3V0bGluZWQgb25DbGljaz17b25DbGlja0FkZH0gLz59XG4gICAgICAgICAgYWRkb25BZnRlcj17PE1pbnVzT3V0bGluZWQgb25DbGljaz17b25DbGlja1N1YnN0cmFjdH0gLz59XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5lYXJBbW91bnRUb2dnbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9