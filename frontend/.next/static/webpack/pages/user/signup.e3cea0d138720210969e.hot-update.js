webpackHotUpdate_N_E("pages/user/signup",{

/***/ "./components/Forms/EmailForm.js":
/*!***************************************!*\
  !*** ./components/Forms/EmailForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






var EmailForm = function EmailForm(_ref) {
  var onChangeEmail = _ref.onChangeEmail;
  axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "https://127.0.0.1:3065";
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    name: "email",
    validateTrigger: "onBlur",
    rules: [{
      required: true,
      message: "이메일를 입력해 주세요!"
    }, function () {
      return {
        validator: function validator(rule, value) {
          return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
            var regex, result;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    regex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);

                    if (!(value && value.match(regex))) {
                      _context.next = 12;
                      break;
                    }

                    _context.next = 4;
                    return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/user/confirm/email", {
                      email: value
                    });

                  case 4:
                    result = _context.sent;

                    if (!result.data) {
                      _context.next = 9;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject("이미 존재하는 이메일입니다"));

                  case 9:
                    return _context.abrupt("return", Promise.resolve());

                  case 10:
                    _context.next = 13;
                    break;

                  case 12:
                    return _context.abrupt("return", Promise.reject("형식에 맞지 않는 이메일입니다"));

                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      };
    }],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      size: "large",
      prefix: "* Email",
      onChange: onChangeEmail,
      placeholder: "Email\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
    })
  });
};

_c = EmailForm;
/* harmony default export */ __webpack_exports__["default"] = (EmailForm);

var _c;

$RefreshReg$(_c, "EmailForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9FbWFpbEZvcm0uanMiXSwibmFtZXMiOlsiRW1haWxGb3JtIiwib25DaGFuZ2VFbWFpbCIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsInZhbGlkYXRvciIsInJ1bGUiLCJ2YWx1ZSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJwb3N0IiwiZW1haWwiLCJyZXN1bHQiLCJkYXRhIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVCO0FBQUEsTUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtBQUN2Q0MsOENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCQyx3QkFBekI7QUFDQSxzQkFDRSw4REFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLG1CQUFlLEVBQUMsUUFGbEI7QUFHRSxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxjQUFRLEVBQUUsSUFEWjtBQUVFQyxhQUFPLEVBQUU7QUFGWCxLQURLLEVBS0w7QUFBQSxhQUFPO0FBQ0NDLGlCQURELHFCQUNXQyxJQURYLEVBQ2lCQyxLQURqQixFQUN3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQkMseUJBRHFCLEdBQ2IsSUFBSUMsTUFBSixDQUNaLGtGQURZLENBRGE7O0FBQUEsMEJBSXZCRixLQUFLLElBQUlBLEtBQUssQ0FBQ0csS0FBTixDQUFZRixLQUFaLENBSmM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyQkFLSlQsNENBQUssQ0FBQ1ksSUFBTixDQUFXLHFCQUFYLEVBQWtDO0FBQ3JEQywyQkFBSyxFQUFFTDtBQUQ4QyxxQkFBbEMsQ0FMSTs7QUFBQTtBQUtuQk0sMEJBTG1COztBQUFBLHlCQVFyQkEsTUFBTSxDQUFDQyxJQVJjO0FBQUE7QUFBQTtBQUFBOztBQUFBLHFEQVNoQkMsT0FBTyxDQUFDQyxNQUFSLENBQWUsZ0JBQWYsQ0FUZ0I7O0FBQUE7QUFBQSxxREFXaEJELE9BQU8sQ0FBQ0UsT0FBUixFQVhnQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxREFjbEJGLE9BQU8sQ0FBQ0MsTUFBUixDQUFlLGtCQUFmLENBZGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0I1QjtBQWpCSSxPQUFQO0FBQUEsS0FMSyxDQUhUO0FBQUEsMkJBNkJFLDhEQUFDLDBDQUFEO0FBQ0UsVUFBSSxTQUROO0FBRUUsWUFBTSxXQUZSO0FBR0UsY0FBUSxFQUFFbEIsYUFIWjtBQUlFLGlCQUFXLEVBQUM7QUFKZDtBQTdCRixJQURGO0FBc0NELENBeENEOztLQUFNRCxTO0FBMENTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL3NpZ251cC5lM2NlYTBkMTM4NzIwMjEwOTY5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBFbWFpbEZvcm0gPSAoeyBvbkNoYW5nZUVtYWlsIH0pID0+IHtcclxuICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuQkFDS0VORF9JUDtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICB2YWxpZGF0ZVRyaWdnZXI9XCJvbkJsdXJcIlxyXG4gICAgICBydWxlcz17W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbWVzc2FnZTogXCLsnbTrqZTsnbzrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalCFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+ICh7XHJcbiAgICAgICAgICBhc3luYyB2YWxpZGF0b3IocnVsZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFxyXG4gICAgICAgICAgICAgIC9eWzAtOWEtekEtWl0oWy1fLl0/WzAtOWEtekEtWl0pKkBbMC05YS16QS1aXShbLV8uXT9bMC05YS16QS1aXSkqLlthLXpBLVpdezIsM30kL2ksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5tYXRjaChyZWdleCkpIHtcclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFwiL3VzZXIvY29uZmlybS9lbWFpbFwiLCB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLsnbTrr7gg7KG07J6s7ZWY64qUIOydtOuplOydvOyeheuLiOuLpFwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCLtmJXsi53sl5Ag66ee7KeAIOyViuuKlCDsnbTrqZTsnbzsnoXri4jri6RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF19XHJcbiAgICA+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHNpemU9e2BsYXJnZWB9XHJcbiAgICAgICAgcHJlZml4PXtgKiBFbWFpbGB9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9Gb3JtLkl0ZW0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtYWlsRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==