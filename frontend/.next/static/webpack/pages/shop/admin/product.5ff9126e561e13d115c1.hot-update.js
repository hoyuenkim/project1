webpackHotUpdate_N_E("pages/shop/admin/product",{

/***/ "./components/Forms/EditProduct.js":
/*!*****************************************!*\
  !*** ./components/Forms/EditProduct.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd-img-crop */ "./node_modules/antd-img-crop/dist/antd-img-crop.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);




var _s = $RefreshSig$();











var EditProduct = function EditProduct(_ref) {
  _s();

  var product = _ref.product,
      setEdit = _ref.setEdit,
      setProduct = _ref.setProduct,
      categories = _ref.categories;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var imageList = [];
  {
    product && product.Images.map( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(v, i) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", imageList.push({
                  uid: i,
                  name: v.url,
                  status: "done",
                  url: "".concat("https://127.0.0.1:3065", "/uploads/").concat(v.url),
                  ImageIds: v.id
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  var _useInput = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])(product && product.title),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])(product && product.price),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      price = _useInput4[0],
      onChangePrice = _useInput4[1];

  var _useInput5 = Object(_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"])(product && product.description),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      description = _useInput6[0],
      onChangeDecription = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(imageList),
      fileList = _useState[0],
      setFileList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      fileError = _useState2[0],
      setFileError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(product && product.Category.id),
      category = _useState3[0],
      setCategory = _useState3[1];

  var onImagesChange = function onImagesChange(_ref3) {
    var newFileList = _ref3.fileList;
    setFileList(newFileList);
    setFileError(false);
  };

  var onChangeCategory = function onChangeCategory(e) {
    setCategory(e);
  };

  var onPreview = /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(file) {
      var src, image, imgWindow;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              src = file.url;

              if (src) {
                _context2.next = 5;
                break;
              }

              _context2.next = 4;
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = function () {
                  return resolve(reader.result);
                };
              });

            case 4:
              src = _context2.sent;

            case 5:
              image = new Image();
              image.src = src;
              imgWindow = window.open(src);
              imgWindow.document.write(image.outerHTML);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onPreview(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var onFinish = function onFinish() {
    var formData = new FormData();
    formData.append("id", product.id);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("CategoryId", category);
    fileList.forEach(function (_ref5) {
      var originFileObj = _ref5.originFileObj,
          ImageIds = _ref5.ImageIds;
      if (ImageIds) formData.append("ImageIds", ImageIds);
      if (originFileObj) formData.append("files", originFileObj);
    });

    if (fileList.length > 0) {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_9__["EDIT_PRODUCT_REQUEST"],
        formData: formData
      });
      setEdit(false);
      setProduct(null);
    } else {
      return setFileError(true);
    }
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    encType: "multipart/form-data",
    onFinish: onFinish,
    layout: "vertical",
    initialValues: {
      title: product && product.title,
      price: product && product.price,
      description: product && product.description
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
      name: "title",
      rules: [{
        required: true,
        message: "상품명을 입력해주세요"
      }],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        name: "title",
        prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["GiftOutlined"], {}),
        size: "large",
        onChange: onChangeTitle
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
      name: "price",
      rules: [{
        required: true,
        message: "가격을 입력해주세요"
      }, {
        pattern: /^[0-9]/g,
        message: "숫자를 입력해주세요"
      }],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        name: "price",
        prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["DollarOutlined"], {}),
        size: "large",
        value: price,
        onChange: onChangePrice
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
      name: "description",
      label: "\uC124\uBA85",
      rules: [{
        required: true,
        message: "상세내역을 입력해주세요"
      }],
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"].TextArea, {
        name: "description",
        prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["ProfileOutlined"], {}),
        size: "large",
        placeholder: "상세사항을 입력해주세요",
        maxLength: 200,
        onChange: onChangeDecription
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"].Item, {
      name: "category",
      label: "\uCE74\uD14C\uACE0\uB9AC",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"], {
        onChange: onChangeCategory,
        defaultValue: product.Category.id,
        children: categories.map(function (category, index) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Select"].Option, {
            value: category.id,
            children: category.name
          }, index);
        })
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      title: "image",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd_img_crop__WEBPACK_IMPORTED_MODULE_6__["default"], {
        rotate: true,
        aspect: 4 / 3,
        name: "image",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Upload"], {
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          listType: "picture-card",
          fileList: fileList,
          onChange: onImagesChange,
          onPreview: onPreview,
          children: fileList.length < 5 && "+ Upload"
        })
      }), fileError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
        style: {
          color: "red"
        },
        children: "\uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC \uD574\uC8FC\uC138\uC694"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      type: "primary",
      htmlType: "submit",
      style: {
        width: "100%"
      },
      children: "\uC81C\uCD9C"
    })]
  });
};

_s(EditProduct, "ldz6a2bONJMe6O25IuEOhFkpLVU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"], _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"], _Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_3__["useInput"]];
});

_c = EditProduct;
/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

var _c;

$RefreshReg$(_c, "EditProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9FZGl0UHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJFZGl0UHJvZHVjdCIsInByb2R1Y3QiLCJzZXRFZGl0Iiwic2V0UHJvZHVjdCIsImNhdGVnb3JpZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW1hZ2VMaXN0IiwiSW1hZ2VzIiwibWFwIiwidiIsImkiLCJwdXNoIiwidWlkIiwibmFtZSIsInVybCIsInN0YXR1cyIsInByb2Nlc3MiLCJJbWFnZUlkcyIsImlkIiwidXNlSW5wdXQiLCJ0aXRsZSIsIm9uQ2hhbmdlVGl0bGUiLCJwcmljZSIsIm9uQ2hhbmdlUHJpY2UiLCJkZXNjcmlwdGlvbiIsIm9uQ2hhbmdlRGVjcmlwdGlvbiIsInVzZVN0YXRlIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsImZpbGVFcnJvciIsInNldEZpbGVFcnJvciIsIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIm9uSW1hZ2VzQ2hhbmdlIiwibmV3RmlsZUxpc3QiLCJvbkNoYW5nZUNhdGVnb3J5IiwiZSIsIm9uUHJldmlldyIsImZpbGUiLCJzcmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib3JpZ2luRmlsZU9iaiIsIm9ubG9hZCIsInJlc3VsdCIsImltYWdlIiwiSW1hZ2UiLCJpbWdXaW5kb3ciLCJ3aW5kb3ciLCJvcGVuIiwiZG9jdW1lbnQiLCJ3cml0ZSIsIm91dGVySFRNTCIsIm9uRmluaXNoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZvckVhY2giLCJsZW5ndGgiLCJ0eXBlIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJwYXR0ZXJuIiwiaW5kZXgiLCJjb2xvciIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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Y0FBTSxNQUFmO0FBQWdCLGNBQU0sRUFBRSxJQUFJLENBQTVCO0FBQStCLFlBQUksRUFBRSxPQUFyQztBQUFBLCtCQUNFLCtEQUFDLDJDQUFEO0FBQ0UsZ0JBQU0sRUFBQyxrREFEVDtBQUVFLGtCQUFRLEVBQUMsY0FGWDtBQUdFLGtCQUFRLEVBQUV6QyxRQUhaO0FBSUUsa0JBQVEsRUFBRU8sY0FKWjtBQUtFLG1CQUFTLEVBQUVJLFNBTGI7QUFBQSxvQkFPR1gsUUFBUSxDQUFDbUMsTUFBVCxHQUFrQixDQUFsQixJQUF1QjtBQVAxQjtBQURGLFFBREYsRUFZR2pDLFNBQVMsaUJBQUk7QUFBSyxhQUFLLEVBQUU7QUFBRXdDLGVBQUssRUFBRTtBQUFULFNBQVo7QUFBQTtBQUFBLFFBWmhCO0FBQUEsTUFuREYsZUFpRUUsK0RBQUMsMkNBQUQ7QUFBUSxVQUFJLEVBQUMsU0FBYjtBQUF1QixjQUFRLEVBQUMsUUFBaEM7QUFBeUMsV0FBSyxFQUFFO0FBQUVDLGFBQUs7QUFBUCxPQUFoRDtBQUFBO0FBQUEsTUFqRUY7QUFBQSxJQURGO0FBdUVELENBL0lEOztHQUFNdkUsVztVQUNhTSx1RCxFQWlCY2MsK0QsRUFDQUEsK0QsRUFDV0EsK0Q7OztLQXBCdENwQixXO0FBaUpTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL2FkbWluL3Byb2R1Y3QuNWZmOTEyNmU1NjFlMTNkMTE1YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSBcIi4uL0dlbmVyYWx1aS9DdXN0b21Ib29rc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIFVwbG9hZCwgU2VsZWN0LCBDYXJkIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBJbWdDcm9wIGZyb20gXCJhbnRkLWltZy1jcm9wXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgR2lmdE91dGxpbmVkLCBEb2xsYXJPdXRsaW5lZCwgUHJvZmlsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBFRElUX1BST0RVQ1RfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5cbmNvbnN0IEVkaXRQcm9kdWN0ID0gKHsgcHJvZHVjdCwgc2V0RWRpdCwgc2V0UHJvZHVjdCwgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBpbWFnZUxpc3QgPSBbXTtcblxuICB7XG4gICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5JbWFnZXMubWFwKGFzeW5jICh2LCBpKSA9PiB7XG4gICAgICAgIHJldHVybiBpbWFnZUxpc3QucHVzaCh7XG4gICAgICAgICAgdWlkOiBpLFxuICAgICAgICAgIG5hbWU6IHYudXJsLFxuICAgICAgICAgIHN0YXR1czogXCJkb25lXCIsXG4gICAgICAgICAgdXJsOiBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7di51cmx9YCxcbiAgICAgICAgICBJbWFnZUlkczogdi5pZCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFt0aXRsZSwgb25DaGFuZ2VUaXRsZV0gPSB1c2VJbnB1dChwcm9kdWN0ICYmIHByb2R1Y3QudGl0bGUpO1xuICBjb25zdCBbcHJpY2UsIG9uQ2hhbmdlUHJpY2VdID0gdXNlSW5wdXQocHJvZHVjdCAmJiBwcm9kdWN0LnByaWNlKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBvbkNoYW5nZURlY3JpcHRpb25dID0gdXNlSW5wdXQocHJvZHVjdCAmJiBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZShpbWFnZUxpc3QpO1xuICBjb25zdCBbZmlsZUVycm9yLCBzZXRGaWxlRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHByb2R1Y3QgJiYgcHJvZHVjdC5DYXRlZ29yeS5pZCk7XG5cbiAgY29uc3Qgb25JbWFnZXNDaGFuZ2UgPSAoeyBmaWxlTGlzdDogbmV3RmlsZUxpc3QgfSkgPT4ge1xuICAgIHNldEZpbGVMaXN0KG5ld0ZpbGVMaXN0KTtcbiAgICBzZXRGaWxlRXJyb3IoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2hhbmdlQ2F0ZWdvcnkgPSAoZSkgPT4ge1xuICAgIHNldENhdGVnb3J5KGUpO1xuICB9O1xuXG4gIGNvbnN0IG9uUHJldmlldyA9IGFzeW5jIChmaWxlKSA9PiB7XG4gICAgbGV0IHNyYyA9IGZpbGUudXJsO1xuICAgIGlmICghc3JjKSB7XG4gICAgICBzcmMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHNyYztcbiAgICBjb25zdCBpbWdXaW5kb3cgPSB3aW5kb3cub3BlbihzcmMpO1xuICAgIGltZ1dpbmRvdy5kb2N1bWVudC53cml0ZShpbWFnZS5vdXRlckhUTUwpO1xuICB9O1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiaWRcIiwgcHJvZHVjdC5pZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInByaWNlXCIsIHByaWNlKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiQ2F0ZWdvcnlJZFwiLCBjYXRlZ29yeSk7XG4gICAgZmlsZUxpc3QuZm9yRWFjaCgoeyBvcmlnaW5GaWxlT2JqLCBJbWFnZUlkcyB9KSA9PiB7XG4gICAgICBpZiAoSW1hZ2VJZHMpIGZvcm1EYXRhLmFwcGVuZChcIkltYWdlSWRzXCIsIEltYWdlSWRzKTtcbiAgICAgIGlmIChvcmlnaW5GaWxlT2JqKSBmb3JtRGF0YS5hcHBlbmQoXCJmaWxlc1wiLCBvcmlnaW5GaWxlT2JqKTtcbiAgICB9KTtcbiAgICBpZiAoZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBFRElUX1BST0RVQ1RfUkVRVUVTVCxcbiAgICAgICAgZm9ybURhdGEsXG4gICAgICB9KTtcbiAgICAgIHNldEVkaXQoZmFsc2UpO1xuICAgICAgc2V0UHJvZHVjdChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHNldEZpbGVFcnJvcih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgZW5jVHlwZT17XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJ9XG4gICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICBsYXlvdXQ9e1widmVydGljYWxcIn1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcbiAgICAgICAgdGl0bGU6IHByb2R1Y3QgJiYgcHJvZHVjdC50aXRsZSxcbiAgICAgICAgcHJpY2U6IHByb2R1Y3QgJiYgcHJvZHVjdC5wcmljZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHByb2R1Y3QgJiYgcHJvZHVjdC5kZXNjcmlwdGlvbixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwidGl0bGVcIiBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7IOB7ZKI66qF7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH1dfT5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0aXRsZVwiIHByZWZpeD17PEdpZnRPdXRsaW5lZCAvPn0gc2l6ZT17XCJsYXJnZVwifSBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX0gLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICBydWxlcz17W1xuICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi6rCA6rKp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH0sXG4gICAgICAgICAgeyBwYXR0ZXJuOiAvXlswLTldL2csIG1lc3NhZ2U6IFwi7Iir7J6Q66W8IOyeheugpe2VtOyjvOyEuOyalFwiIH0sXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgcHJlZml4PXs8RG9sbGFyT3V0bGluZWQgLz59XG4gICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQcmljZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBsYWJlbD1cIuyEpOuqhVwiXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLsg4HshLjrgrTsl63snYQg7J6F66Cl7ZW07KO87IS47JqUXCIgfV19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgcHJlZml4PXs8UHJvZmlsZU91dGxpbmVkIC8+fVxuICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17XCLsg4HshLjsgqztla3snYQg7J6F66Cl7ZW07KO87IS47JqUXCJ9XG4gICAgICAgICAgbWF4TGVuZ3RoPXsyMDB9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRGVjcmlwdGlvbn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5JdGVtPlxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiY2F0ZWdvcnlcIiBsYWJlbD1cIuy5tO2FjOqzoOumrFwiPlxuICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUNhdGVnb3J5fSBkZWZhdWx0VmFsdWU9e3Byb2R1Y3QuQ2F0ZWdvcnkuaWR9PlxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgIDwvU2VsZWN0Lk9wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgIDxDYXJkIHRpdGxlPXtgaW1hZ2VgfT5cbiAgICAgICAgPEltZ0Nyb3Agcm90YXRlIGFzcGVjdD17NCAvIDN9IG5hbWU9e1wiaW1hZ2VcIn0+XG4gICAgICAgICAgPFVwbG9hZFxuICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2XCJcbiAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICAgIGZpbGVMaXN0PXtmaWxlTGlzdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkltYWdlc0NoYW5nZX1cbiAgICAgICAgICAgIG9uUHJldmlldz17b25QcmV2aWV3fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtmaWxlTGlzdC5sZW5ndGggPCA1ICYmIFwiKyBVcGxvYWRcIn1cbiAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgPC9JbWdDcm9wPlxuICAgICAgICB7ZmlsZUVycm9yICYmIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+7YyM7J287J2EIOyXheuhnOuTnCDtlbTso7zshLjsmpQ8L2Rpdj59XG4gICAgICA8L0NhcmQ+XG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyB3aWR0aDogYDEwMCVgIH19PlxuICAgICAgICDsoJzstpxcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==