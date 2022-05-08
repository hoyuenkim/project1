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
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
          children: ["\uB2E8\uAC00:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {
              color: "read"
            },
            thousandSeparator: true,
            value: price,
            displayType: "text"
          }), " "]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
            style: {
              bold: true,
              color: "red"
            },
            thousandSeparator: true,
            value: price * ((100 - discount.rate) * 0.01),
            displayType: "text"
          })
        })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwiY29sb3IiLCJib2xkIiwicmF0ZSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsRUFBb0MsUUFBcENBLEVBQW9DO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0EsTUFBTUssUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUk7QUFDRkYsY0FBUSxDQUFDO0FBQUVHLFlBQUksRUFBRUMsd0VBQVI7QUFBbUNDLFlBQUksRUFBRTtBQUFFWCxZQUFFLEVBQUZBO0FBQUY7QUFBekMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU9ZLENBQVAsRUFBVTtBQUNWUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sQ0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JQLFlBQVEsQ0FBQztBQUFFRyxVQUFJLEVBQUVLLDhFQUFSO0FBQXlDSCxVQUFJLEVBQUU7QUFBRVgsVUFBRSxFQUFGQTtBQUFGO0FBQS9DLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0Esc0JBQ0UsK0RBQUMsd0NBQUQ7QUFBQSw0QkFDRSw4REFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxFQUFYO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRVksaUJBQU8sRUFBRTtBQUFYLFNBQVo7QUFBQSxnQ0FDRTtBQUFBLG1EQUVFLDhEQUFDLDJEQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFO0FBQVQsYUFEVDtBQUVFLDZCQUFpQixFQUFFLElBRnJCO0FBR0UsaUJBQUssRUFBRWQsS0FIVDtBQUlFLHVCQUFXLEVBQUU7QUFKZixZQUZGLEVBT0ssR0FQTDtBQUFBLFVBREYsZUFVRTtBQUFBLGlDQUNFLDhEQUFDLDJEQUFEO0FBQ0UsaUJBQUssRUFBRTtBQUFFZSxrQkFBSSxFQUFFLElBQVI7QUFBY0QsbUJBQUssRUFBRTtBQUFyQixhQURUO0FBRUUsNkJBQWlCLEVBQUUsSUFGckI7QUFHRSxpQkFBSyxFQUFFZCxLQUFLLElBQUksQ0FBQyxNQUFNQyxRQUFRLENBQUNlLElBQWhCLElBQXdCLElBQTVCLENBSGQ7QUFJRSx1QkFBVyxFQUFFO0FBSmY7QUFERixVQVZGO0FBQUE7QUFERixNQURGLGVBc0JFLDhEQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFFLENBQVg7QUFBYyxXQUFLLEVBQUU7QUFBRUMsaUJBQVMsRUFBRTtBQUFiLE9BQXJCO0FBQUEsNkJBQ0UsOERBQUMsMENBQUQ7QUFDRSxhQUFLLEVBQUU7QUFDTEEsbUJBQVMsRUFBRSxRQUROO0FBRUxDLHVCQUFhLEVBQUU7QUFGVixTQURUO0FBS0UsYUFBSyxFQUFFbkIsUUFMVDtBQU1FLFlBQUksRUFBRSxPQU5SO0FBT0UsZ0JBQVEsTUFQVjtBQVFFLGlCQUFTLEVBQUUsQ0FSYjtBQVNFLG1CQUFXLGVBQUUsOERBQUMsOERBQUQ7QUFBYyxpQkFBTyxFQUFFTztBQUF2QixVQVRmO0FBVUUsa0JBQVUsZUFBRSw4REFBQywrREFBRDtBQUFlLGlCQUFPLEVBQUVLO0FBQXhCO0FBVmQ7QUFERixNQXRCRjtBQUFBLElBREY7QUF1Q0QsQ0FyREQ7O0dBQU1kLGdCO1VBRWFRLHVEOzs7S0FGYlIsZ0I7QUF1RFNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgwNDdkZGMxMGI2OTI0YjE4MWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQbHVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzT3V0bGluZWQsXG4gIFBsdXNPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgeyBDb2wsIFJvdywgVHlwb2dyYXBoeSwgSW5wdXQsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcblxuY29uc3QgTmVhckFtb3VudFRvZ2dsZSA9ICh7IGlkLCBxdWFudGl0eSwgcHJpY2UsIGRpc2NvdW50IH0pID0+IHtcbiAgY29uc29sZS5sb2cocXVhbnRpdHkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2tBZGQgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgZGF0YTogeyBpZCB9IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DbGlja1N1YnN0cmFjdCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QsIGRhdGE6IHsgaWQgfSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coZGlzY291bnQpO1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICDri6jqsIA6XG4gICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcInJlYWRcIiB9fVxuICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgICBzdHlsZT17eyBib2xkOiB0cnVlLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlICogKCgxMDAgLSBkaXNjb3VudC5yYXRlKSAqIDAuMDEpfVxuICAgICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgc2l6ZT17XCJzbWFsbFwifVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgIGFkZG9uQmVmb3JlPXs8UGx1c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tBZGR9IC8+fVxuICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxNaW51c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tTdWJzdHJhY3R9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZWFyQW1vdW50VG9nZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==