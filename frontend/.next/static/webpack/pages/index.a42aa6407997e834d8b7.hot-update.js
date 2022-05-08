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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwicmF0ZSIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsRUFBb0MsUUFBcENBLEVBQW9DO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDOURDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0EsTUFBTUssUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUk7QUFDRkYsY0FBUSxDQUFDO0FBQUVHLFlBQUksRUFBRUMsd0VBQVI7QUFBbUNDLFlBQUksRUFBRTtBQUFFWCxZQUFFLEVBQUZBO0FBQUY7QUFBekMsT0FBRCxDQUFSO0FBQ0QsS0FGRCxDQUVFLE9BQU9ZLENBQVAsRUFBVTtBQUNWUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sQ0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0JQLFlBQVEsQ0FBQztBQUFFRyxVQUFJLEVBQUVLLDhFQUFSO0FBQXlDSCxVQUFJLEVBQUU7QUFBRVgsVUFBRSxFQUFGQTtBQUFGO0FBQS9DLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0FJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0Esc0JBQ0UsK0RBQUMsd0NBQUQ7QUFBQSw0QkFDRSw4REFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxFQUFYO0FBQUEsNkJBQ0U7QUFBSyxhQUFLLEVBQUU7QUFBRVksaUJBQU8sRUFBRTtBQUFYLFNBQVo7QUFBQSwwQ0FDTyxHQURQLGVBRUUsOERBQUMsMkRBQUQ7QUFDRSwyQkFBaUIsRUFBRSxJQURyQjtBQUVFLGVBQUssRUFBRWIsS0FBSyxJQUFJLENBQUMsTUFBTUMsUUFBUSxDQUFDYSxJQUFoQixJQUF3QixJQUE1QixDQUZkO0FBR0UscUJBQVcsRUFBRTtBQUhmLFVBRkY7QUFBQTtBQURGLE1BREYsZUFZRSw4REFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxDQUFYO0FBQWMsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFyQjtBQUFBLDZCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQ0xBLG1CQUFTLEVBQUUsUUFETjtBQUVMQyx1QkFBYSxFQUFFO0FBRlYsU0FEVDtBQUtFLGFBQUssRUFBRWpCLFFBTFQ7QUFNRSxZQUFJLEVBQUUsT0FOUjtBQU9FLGdCQUFRLE1BUFY7QUFRRSxpQkFBUyxFQUFFLENBUmI7QUFTRSxtQkFBVyxlQUFFLDhEQUFDLDhEQUFEO0FBQWMsaUJBQU8sRUFBRU87QUFBdkIsVUFUZjtBQVVFLGtCQUFVLGVBQUUsOERBQUMsK0RBQUQ7QUFBZSxpQkFBTyxFQUFFSztBQUF4QjtBQVZkO0FBREYsTUFaRjtBQUFBLElBREY7QUE2QkQsQ0EzQ0Q7O0dBQU1kLGdCO1VBRWFRLHVEOzs7S0FGYlIsZ0I7QUE2Q1NBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0MmFhNjQwNzk5N2U4MzRkOGI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBQbHVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzT3V0bGluZWQsXG4gIFBsdXNPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgeyBDb2wsIFJvdywgVHlwb2dyYXBoeSwgSW5wdXQsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcblxuY29uc3QgTmVhckFtb3VudFRvZ2dsZSA9ICh7IGlkLCBxdWFudGl0eSwgcHJpY2UsIGRpc2NvdW50IH0pID0+IHtcbiAgY29uc29sZS5sb2cocXVhbnRpdHkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2tBZGQgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgZGF0YTogeyBpZCB9IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DbGlja1N1YnN0cmFjdCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QsIGRhdGE6IHsgaWQgfSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coZGlzY291bnQpO1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgIO2VoOyduOqwgDp7XCIgXCJ9XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17cHJpY2UgKiAoKDEwMCAtIGRpc2NvdW50LnJhdGUpICogMC4wMSl9XG4gICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICDsm5BcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgIHNpemU9e1wic21hbGxcIn1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICBhZGRvbkJlZm9yZT17PFBsdXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrQWRkfSAvPn1cbiAgICAgICAgICBhZGRvbkFmdGVyPXs8TWludXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrU3Vic3RyYWN0fSAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmVhckFtb3VudFRvZ2dsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=