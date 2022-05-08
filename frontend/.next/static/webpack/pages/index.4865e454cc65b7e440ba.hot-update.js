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
          fontWeight: "bold"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwiZm9udFdlaWdodCIsInJhdGUiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLEVBQW9DLFFBQXBDQSxFQUFvQztBQUFBLE1BQWhDQyxRQUFnQyxRQUFoQ0EsUUFBZ0M7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzlEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosUUFBWjtBQUNBLE1BQU1LLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJO0FBQ0ZGLGNBQVEsQ0FBQztBQUFFRyxZQUFJLEVBQUVDLHdFQUFSO0FBQW1DQyxZQUFJLEVBQUU7QUFBRVgsWUFBRSxFQUFGQTtBQUFGO0FBQXpDLE9BQUQsQ0FBUjtBQUNELEtBRkQsQ0FFRSxPQUFPWSxDQUFQLEVBQVU7QUFDVlIsYUFBTyxDQUFDQyxHQUFSLENBQVlPLENBQVo7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCUCxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFSyw4RUFBUjtBQUF5Q0gsVUFBSSxFQUFFO0FBQUVYLFVBQUUsRUFBRkE7QUFBRjtBQUEvQyxLQUFELENBQVI7QUFDRCxHQUZEOztBQUdBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLHNCQUNFLCtEQUFDLHdDQUFEO0FBQUEsNEJBQ0UsOERBQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsRUFBWDtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVZLGlCQUFPLEVBQUUsY0FBWDtBQUEyQkMsb0JBQVUsRUFBRTtBQUF2QyxTQUFaO0FBQUEsMENBQ08sR0FEUCxlQUVFLDhEQUFDLDJEQUFEO0FBQ0UsMkJBQWlCLEVBQUUsSUFEckI7QUFFRSxlQUFLLEVBQUVkLEtBQUssSUFBSSxDQUFDLE1BQU1DLFFBQVEsQ0FBQ2MsSUFBaEIsSUFBd0IsSUFBNUIsQ0FGZDtBQUdFLHFCQUFXLEVBQUU7QUFIZixVQUZGO0FBQUE7QUFERixNQURGLGVBWUUsOERBQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFjLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBckI7QUFBQSw2QkFDRSw4REFBQywwQ0FBRDtBQUNFLGFBQUssRUFBRTtBQUNMQSxtQkFBUyxFQUFFLFFBRE47QUFFTEMsdUJBQWEsRUFBRTtBQUZWLFNBRFQ7QUFLRSxhQUFLLEVBQUVsQixRQUxUO0FBTUUsWUFBSSxFQUFFLE9BTlI7QUFPRSxnQkFBUSxNQVBWO0FBUUUsaUJBQVMsRUFBRSxDQVJiO0FBU0UsbUJBQVcsZUFBRSw4REFBQyw4REFBRDtBQUFjLGlCQUFPLEVBQUVPO0FBQXZCLFVBVGY7QUFVRSxrQkFBVSxlQUFFLDhEQUFDLCtEQUFEO0FBQWUsaUJBQU8sRUFBRUs7QUFBeEI7QUFWZDtBQURGLE1BWkY7QUFBQSxJQURGO0FBNkJELENBM0NEOztHQUFNZCxnQjtVQUVhUSx1RDs7O0tBRmJSLGdCO0FBNkNTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODY1ZTQ1NGNjNjViN2U0NDBiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGx1c0NpcmNsZU91dGxpbmVkLFxuICBNaW51c0NpcmNsZU91dGxpbmVkLFxuICBNaW51c091dGxpbmVkLFxuICBQbHVzT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QsIE5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IHsgQ29sLCBSb3csIFR5cG9ncmFwaHksIElucHV0LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5cbmNvbnN0IE5lYXJBbW91bnRUb2dnbGUgPSAoeyBpZCwgcXVhbnRpdHksIHByaWNlLCBkaXNjb3VudCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1YW50aXR5KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkNsaWNrQWRkID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QsIGRhdGE6IHsgaWQgfSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uQ2xpY2tTdWJzdHJhY3QgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNULCBkYXRhOiB7IGlkIH0gfSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKGRpc2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXsxNn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgZm9udFdlaWdodDogXCJib2xkXCIgfX0+XG4gICAgICAgICAg7ZWg7J246rCAOntcIiBcIn1cbiAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtwcmljZSAqICgoMTAwIC0gZGlzY291bnQucmF0ZSkgKiAwLjAxKX1cbiAgICAgICAgICAgIGRpc3BsYXlUeXBlPXtcInRleHRcIn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIOybkFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXs4fSBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17cXVhbnRpdHl9XG4gICAgICAgICAgc2l6ZT17XCJzbWFsbFwifVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgIGFkZG9uQmVmb3JlPXs8UGx1c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tBZGR9IC8+fVxuICAgICAgICAgIGFkZG9uQWZ0ZXI9ezxNaW51c091dGxpbmVkIG9uQ2xpY2s9e29uQ2xpY2tTdWJzdHJhY3R9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZWFyQW1vdW50VG9nZ2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==