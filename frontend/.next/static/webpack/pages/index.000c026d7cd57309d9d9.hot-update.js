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
        children: ["\uB2E8\uAC00:", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTmVhckFtb3VudFRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJOZWFyQW1vdW50VG9nZ2xlIiwiaWQiLCJxdWFudGl0eSIsInByaWNlIiwiZGlzY291bnQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2xpY2tBZGQiLCJ0eXBlIiwiTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCIsImRhdGEiLCJlIiwib25DbGlja1N1YnN0cmFjdCIsIk5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QiLCJkaXNwbGF5IiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwiY29sb3IiLCJyYXRlIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxFQUFvQyxRQUFwQ0EsRUFBb0M7QUFBQSxNQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM5REMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxNQUFNSyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSTtBQUNGRixjQUFRLENBQUM7QUFBRUcsWUFBSSxFQUFFQyx3RUFBUjtBQUFtQ0MsWUFBSSxFQUFFO0FBQUVYLFlBQUUsRUFBRkE7QUFBRjtBQUF6QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBT1ksQ0FBUCxFQUFVO0FBQ1ZSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTyxDQUFaO0FBQ0Q7QUFDRixHQU5EOztBQU9BLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QlAsWUFBUSxDQUFDO0FBQUVHLFVBQUksRUFBRUssOEVBQVI7QUFBeUNILFVBQUksRUFBRTtBQUFFWCxVQUFFLEVBQUZBO0FBQUY7QUFBL0MsS0FBRCxDQUFSO0FBQ0QsR0FGRDs7QUFHQUksU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQSxzQkFDRSwrREFBQyx3Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFFLEVBQVg7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFWSxpQkFBTyxFQUFFO0FBQVgsU0FBWjtBQUFBLGlEQUVFLDhEQUFDLDJEQUFEO0FBQ0UsZUFBSyxFQUFFO0FBQUVDLDBCQUFjLEVBQUU7QUFBbEIsV0FEVDtBQUVFLDJCQUFpQixFQUFFLElBRnJCO0FBR0UsZUFBSyxFQUFFZCxLQUhUO0FBSUUscUJBQVcsRUFBRTtBQUpmLFVBRkYsRUFPSyxHQVBMLGVBUUUsOERBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUU7QUFBRWUsc0JBQVUsRUFBRSxNQUFkO0FBQXNCQyxpQkFBSyxFQUFFO0FBQTdCLFdBRFQ7QUFFRSwyQkFBaUIsRUFBRSxJQUZyQjtBQUdFLGVBQUssRUFBRWhCLEtBQUssSUFBSSxDQUFDLE1BQU1DLFFBQVEsQ0FBQ2dCLElBQWhCLElBQXdCLElBQTVCLENBSGQ7QUFJRSxxQkFBVyxFQUFFO0FBSmYsVUFSRjtBQUFBO0FBREYsTUFERixlQW1CRSw4REFBQyx3Q0FBRDtBQUFLLFVBQUksRUFBRSxDQUFYO0FBQWMsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUU7QUFBYixPQUFyQjtBQUFBLDZCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQ0xBLG1CQUFTLEVBQUUsUUFETjtBQUVMQyx1QkFBYSxFQUFFO0FBRlYsU0FEVDtBQUtFLGFBQUssRUFBRXBCLFFBTFQ7QUFNRSxZQUFJLEVBQUUsT0FOUjtBQU9FLGdCQUFRLE1BUFY7QUFRRSxpQkFBUyxFQUFFLENBUmI7QUFTRSxtQkFBVyxlQUFFLDhEQUFDLDhEQUFEO0FBQWMsaUJBQU8sRUFBRU87QUFBdkIsVUFUZjtBQVVFLGtCQUFVLGVBQUUsOERBQUMsK0RBQUQ7QUFBZSxpQkFBTyxFQUFFSztBQUF4QjtBQVZkO0FBREYsTUFuQkY7QUFBQSxJQURGO0FBb0NELENBbEREOztHQUFNZCxnQjtVQUVhUSx1RDs7O0tBRmJSLGdCO0FBb0RTQSwrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMDBjMDI2ZDdjZDU3MzA5ZDlkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUGx1c0NpcmNsZU91dGxpbmVkLFxuICBNaW51c0NpcmNsZU91dGxpbmVkLFxuICBNaW51c091dGxpbmVkLFxuICBQbHVzT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QsIE5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IHsgQ29sLCBSb3csIFR5cG9ncmFwaHksIElucHV0LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgTnVtYmVyRm9ybWF0IGZyb20gXCJyZWFjdC1udW1iZXItZm9ybWF0XCI7XG5cbmNvbnN0IE5lYXJBbW91bnRUb2dnbGUgPSAoeyBpZCwgcXVhbnRpdHksIHByaWNlLCBkaXNjb3VudCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHF1YW50aXR5KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBvbkNsaWNrQWRkID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QsIGRhdGE6IHsgaWQgfSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uQ2xpY2tTdWJzdHJhY3QgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNULCBkYXRhOiB7IGlkIH0gfSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKGRpc2NvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXsxNn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fT5cbiAgICAgICAgICDri6jqsIA6XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibGluZS10aHJvdWdoXCIgfX1cbiAgICAgICAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0cnVlfVxuICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDxOdW1iZXJGb3JtYXRcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiYm9sZFwiLCBjb2xvcjogXCJyZWRcIiB9fVxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17cHJpY2UgKiAoKDEwMCAtIGRpc2NvdW50LnJhdGUpICogMC4wMSl9XG4gICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICDsm5BcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgIHNpemU9e1wic21hbGxcIn1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICBhZGRvbkJlZm9yZT17PFBsdXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrQWRkfSAvPn1cbiAgICAgICAgICBhZGRvbkFmdGVyPXs8TWludXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrU3Vic3RyYWN0fSAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmVhckFtb3VudFRvZ2dsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=