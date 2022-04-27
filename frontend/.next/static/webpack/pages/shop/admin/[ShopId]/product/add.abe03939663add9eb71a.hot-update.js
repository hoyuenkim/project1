webpackHotUpdate_N_E("pages/shop/admin/[ShopId]/product/add",{

/***/ "./pages/shop/admin/[ShopId]/product/add.js":
/*!**************************************************!*\
  !*** ./pages/shop/admin/[ShopId]/product/add.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/Generalui/CustomHooks */ "./components/Generalui/CustomHooks.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd-img-crop */ "./node_modules/antd-img-crop/dist/antd-img-crop.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../reducers/menu */ "./reducers/menu.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);




var _s = $RefreshSig$();














var Regist = function Regist() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])(),
      query = _useRouter.query;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      session = _useSelector.session,
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.shop;
  }),
      categories = _useSelector2.categories;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_12__["PAGE_CHANGE_SUCCESS"],
      data: "admin"
    });
  }, []);
  if (!session || isLoggedIn === false || session.division === false) router.push("/");
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_9__["ADMIN_PRODUCTS_REQUEST"],
      ShopId: session.Shops[0].id
    });
  }, []);

  var _useInput = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"])(),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput, 2),
      title = _useInput2[0],
      onChangeTitle = _useInput2[1];

  var _useInput3 = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"])(),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput3, 2),
      price = _useInput4[0],
      onChangePrice = _useInput4[1];

  var _useInput5 = Object(_components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"])(),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useInput5, 2),
      description = _useInput6[0],
      onChangeDecription = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      fileList = _useState[0],
      setFileList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      fileError = _useState2[0],
      setFileError = _useState2[1];

  var onImagesChange = function onImagesChange(_ref) {
    var newFileList = _ref.fileList;
    setFileList(newFileList);
    setFileError(false);
  };

  var onPreview = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
      var src, image, imgWindow;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = file.url;

              if (src) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = function () {
                  return resolve(reader.result);
                };
              });

            case 4:
              src = _context.sent;

            case 5:
              image = new Image();
              image.src = src;
              imgWindow = window.open(src);
              imgWindow.document.write(image.outerHTML);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onPreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onChangeCategory = function onChangeCategory(e) {
    console.log(e);
    setCategory(e);
  };

  var onFinish = function onFinish() {
    var formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", description);
    fileList.forEach(function (_ref3) {
      var originFileObj = _ref3.originFileObj;
      formData.append("files", originFileObj);
    });
    formData.append("ShopId", query.ShopId);
    formData.append("UserId", session.id);
    formData.append("CategoryId", category);
    console.log(formData);

    if (fileList.length > 0) {
      dispatch({
        type: _reducers_menu__WEBPACK_IMPORTED_MODULE_8__["ADD_PRODUCT_REQUEST"],
        formData: formData
      });
      return router.push("/shop/admin/".concat(query.ShopId, "/product"));
    } else {
      return setFileError(true);
    }
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(categories[0].id),
      category = _useState3[0],
      setCategory = _useState3[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    encType: "multipart/form-data",
    onFinish: onFinish,
    style: {
      height: "100vh"
    },
    layout: "vertical",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["PageHeader"], {
        className: "site-page-header",
        title: "\uC0C1\uD488\uB4F1\uB85D"
      }),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_4__["Space"], {
        direction: "vertical",
        size: "middle",
        style: {
          width: "100%"
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          name: "title",
          rules: [{
            required: true,
            message: "상품명을 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "title",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["GiftOutlined"], {}),
            size: "large",
            onChange: onChangeTitle
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          name: "price",
          rules: [{
            required: true,
            message: "가격을 입력해주세요"
          }, {
            pattern: /^[0-9]/g,
            message: "숫자를 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
            name: "price",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["DollarOutlined"], {}),
            size: "large",
            value: price,
            onChange: onChangePrice
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          name: "description",
          label: "\uC124\uBA85",
          rules: [{
            required: true,
            message: "상세내역을 입력해주세요"
          }],
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
            name: "description",
            prefix: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["ProfileOutlined"], {}),
            size: "large",
            placeholder: "상세사항을 입력해주세요",
            maxLength: 200,
            onChange: onChangeDecription
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
          name: "category",
          label: "\uCE74\uD14C\uACE0\uB9AC",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
            onChange: onChangeCategory,
            defaultValue: categories[0].id,
            children: categories.map(function (category, index) {
              return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Select"].Option, {
                value: category.id,
                children: category.name
              }, index);
            })
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          title: "image",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd_img_crop__WEBPACK_IMPORTED_MODULE_6__["default"], {
            rotate: true,
            aspect: 4 / 3,
            name: "image",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Upload"], {
              action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
              listType: "picture-card",
              fileList: fileList,
              onChange: onImagesChange,
              onPreview: onPreview,
              children: fileList.length < 5 && "+ Upload"
            })
          }), fileError && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
            style: {
              color: "red"
            },
            children: "\uD30C\uC77C\uC744 \uC5C5\uB85C\uB4DC \uD574\uC8FC\uC138\uC694"
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          type: "primary",
          htmlType: "submit",
          style: {
            width: "100%"
          },
          children: "\uC81C\uCD9C"
        })]
      })
    })
  });
};

_s(Regist, "3U105HSvwt3ZAkTnwoTsM5gpUHc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"], _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"], _components_Generalui_CustomHooks__WEBPACK_IMPORTED_MODULE_5__["useInput"]];
});

_c = Regist;
/* harmony default export */ __webpack_exports__["default"] = (Regist);

var _c;

$RefreshReg$(_c, "Regist");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZG1pbi9bU2hvcElkXS9wcm9kdWN0L2FkZC5qcyJdLCJuYW1lcyI6WyJSZWdpc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNlc3Npb24iLCJpc0xvZ2dlZEluIiwic2hvcCIsImNhdGVnb3JpZXMiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiUEFHRV9DSEFOR0VfU1VDQ0VTUyIsImRhdGEiLCJkaXZpc2lvbiIsInB1c2giLCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUIiwiU2hvcElkIiwiU2hvcHMiLCJpZCIsInVzZUlucHV0IiwidGl0bGUiLCJvbkNoYW5nZVRpdGxlIiwicHJpY2UiLCJvbkNoYW5nZVByaWNlIiwiZGVzY3JpcHRpb24iLCJvbkNoYW5nZURlY3JpcHRpb24iLCJ1c2VTdGF0ZSIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJmaWxlRXJyb3IiLCJzZXRGaWxlRXJyb3IiLCJvbkltYWdlc0NoYW5nZSIsIm5ld0ZpbGVMaXN0Iiwib25QcmV2aWV3IiwiZmlsZSIsInNyYyIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvcmlnaW5GaWxlT2JqIiwib25sb2FkIiwicmVzdWx0IiwiaW1hZ2UiLCJJbWFnZSIsImltZ1dpbmRvdyIsIndpbmRvdyIsIm9wZW4iLCJkb2N1bWVudCIsIndyaXRlIiwib3V0ZXJIVE1MIiwib25DaGFuZ2VDYXRlZ29yeSIsImUiLCJjb25zb2xlIiwibG9nIiwic2V0Q2F0ZWdvcnkiLCJvbkZpbmlzaCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJsZW5ndGgiLCJBRERfUFJPRFVDVF9SRVFVRVNUIiwiaGVpZ2h0Iiwid2lkdGgiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJwYXR0ZXJuIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUNBLG1CQUFrQkEsOERBQVMsRUFBM0I7QUFBQSxNQUFRQyxLQUFSLGNBQVFBLEtBQVI7O0FBRUEscUJBQWdDQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUEzQztBQUFBLE1BQVFDLE9BQVIsZ0JBQVFBLE9BQVI7QUFBQSxNQUFpQkMsVUFBakIsZ0JBQWlCQSxVQUFqQjs7QUFDQSxzQkFBdUJKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksSUFBakI7QUFBQSxHQUFELENBQWxDO0FBQUEsTUFBUUMsVUFBUixpQkFBUUEsVUFBUjs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFlBQVEsQ0FBQztBQUFFYSxVQUFJLEVBQUVDLG9FQUFSO0FBQTZCQyxVQUFJLEVBQUU7QUFBbkMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQUksQ0FBQ1AsT0FBRCxJQUFZQyxVQUFVLEtBQUssS0FBM0IsSUFBb0NELE9BQU8sQ0FBQ1EsUUFBUixLQUFxQixLQUE3RCxFQUFvRWQsTUFBTSxDQUFDZSxJQUFQLENBQVksR0FBWjtBQUVwRUwseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLFlBQVEsQ0FBQztBQUFFYSxVQUFJLEVBQUVLLHFFQUFSO0FBQWdDQyxZQUFNLEVBQUVYLE9BQU8sQ0FBQ1ksS0FBUixDQUFjLENBQWQsRUFBaUJDO0FBQXpELEtBQUQsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsa0JBQStCQyxrRkFBUSxFQUF2QztBQUFBO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLGFBQWQ7O0FBQ0EsbUJBQStCRixrRkFBUSxFQUF2QztBQUFBO0FBQUEsTUFBT0csS0FBUDtBQUFBLE1BQWNDLGFBQWQ7O0FBQ0EsbUJBQTBDSixrRkFBUSxFQUFsRDtBQUFBO0FBQUEsTUFBT0ssV0FBUDtBQUFBLE1BQW9CQyxrQkFBcEI7O0FBQ0Esa0JBQWdDQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPQyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUFrQ0Ysc0RBQVEsRUFBMUM7QUFBQSxNQUFPRyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBK0I7QUFBQSxRQUFsQkMsV0FBa0IsUUFBNUJMLFFBQTRCO0FBQ3BEQyxlQUFXLENBQUNJLFdBQUQsQ0FBWDtBQUNBRixnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBS0EsTUFBTUcsU0FBUztBQUFBLGlNQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxpQkFEWSxHQUNORCxJQUFJLENBQUNFLEdBREM7O0FBQUEsa0JBRVhELEdBRlc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHRixJQUFJRSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ25DLG9CQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0FELHNCQUFNLENBQUNFLGFBQVAsQ0FBcUJQLElBQUksQ0FBQ1EsYUFBMUI7O0FBQ0FILHNCQUFNLENBQUNJLE1BQVAsR0FBZ0I7QUFBQSx5QkFBTUwsT0FBTyxDQUFDQyxNQUFNLENBQUNLLE1BQVIsQ0FBYjtBQUFBLGlCQUFoQjtBQUNELGVBSlcsQ0FIRTs7QUFBQTtBQUdkVCxpQkFIYzs7QUFBQTtBQVNWVSxtQkFUVSxHQVNGLElBQUlDLEtBQUosRUFURTtBQVVoQkQsbUJBQUssQ0FBQ1YsR0FBTixHQUFZQSxHQUFaO0FBQ01ZLHVCQVhVLEdBV0VDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZZCxHQUFaLENBWEY7QUFZaEJZLHVCQUFTLENBQUNHLFFBQVYsQ0FBbUJDLEtBQW5CLENBQXlCTixLQUFLLENBQUNPLFNBQS9COztBQVpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUbkIsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQWVBLE1BQU1vQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQUcsZUFBVyxDQUFDSCxDQUFELENBQVg7QUFDRCxHQUhEOztBQUtBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsWUFBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCekMsS0FBekI7QUFDQXVDLFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QnZDLEtBQXpCO0FBQ0FxQyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsYUFBaEIsRUFBK0JyQyxXQUEvQjtBQUNBRyxZQUFRLENBQUNtQyxPQUFULENBQWlCLGlCQUF1QjtBQUFBLFVBQXBCcEIsYUFBb0IsU0FBcEJBLGFBQW9CO0FBQ3RDaUIsY0FBUSxDQUFDRSxNQUFULENBQWdCLE9BQWhCLEVBQXlCbkIsYUFBekI7QUFDRCxLQUZEO0FBR0FpQixZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEI1RCxLQUFLLENBQUNlLE1BQWhDO0FBQ0EyQyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsUUFBaEIsRUFBMEJ4RCxPQUFPLENBQUNhLEVBQWxDO0FBQ0F5QyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEJFLFFBQTlCO0FBQ0FSLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRyxRQUFaOztBQUNBLFFBQUloQyxRQUFRLENBQUNxQyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCbkUsY0FBUSxDQUFDO0FBQ1BhLFlBQUksRUFBRXVELGtFQURDO0FBRVBOLGdCQUFRLEVBQVJBO0FBRk8sT0FBRCxDQUFSO0FBSUEsYUFBTzVELE1BQU0sQ0FBQ2UsSUFBUCx1QkFBMkJiLEtBQUssQ0FBQ2UsTUFBakMsY0FBUDtBQUNELEtBTkQsTUFNTztBQUNMLGFBQU9jLFlBQVksQ0FBQyxJQUFELENBQW5CO0FBQ0Q7QUFDRixHQXJCRDs7QUFzQkEsbUJBQWdDSixzREFBUSxDQUFDbEIsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVSxFQUFmLENBQXhDO0FBQUEsTUFBTzZDLFFBQVA7QUFBQSxNQUFpQk4sV0FBakI7O0FBRUEsc0JBQ0UsK0RBQUMseUNBQUQ7QUFDRSxXQUFPLEVBQUUscUJBRFg7QUFFRSxZQUFRLEVBQUVDLFFBRlo7QUFHRSxTQUFLLEVBQUU7QUFBRVEsWUFBTSxFQUFFO0FBQVYsS0FIVDtBQUlFLFVBQU0sRUFBRSxVQUpWO0FBQUEsMkJBTUUsK0RBQUMseUNBQUQ7QUFBTSxXQUFLLGVBQUUsK0RBQUMsK0NBQUQ7QUFBWSxpQkFBUyxFQUFFLGtCQUF2QjtBQUEyQyxhQUFLLEVBQUM7QUFBakQsUUFBYjtBQUFBLDZCQUNFLGdFQUFDLDBDQUFEO0FBQU8saUJBQVMsRUFBRSxVQUFsQjtBQUE4QixZQUFJLEVBQUUsUUFBcEM7QUFBOEMsYUFBSyxFQUFFO0FBQUVDLGVBQUssRUFBRTtBQUFULFNBQXJEO0FBQUEsZ0NBQ0UsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsY0FBSSxFQUFFLE9BQWpCO0FBQTBCLGVBQUssRUFBRSxDQUFDO0FBQUVDLG9CQUFRLEVBQUUsSUFBWjtBQUFrQkMsbUJBQU8sRUFBRTtBQUEzQixXQUFELENBQWpDO0FBQUEsaUNBQ0UsK0RBQUMsMENBQUQ7QUFDRSxnQkFBSSxFQUFFLE9BRFI7QUFFRSxrQkFBTSxlQUFFLCtEQUFDLCtEQUFELEtBRlY7QUFHRSxnQkFBSSxFQUFFLE9BSFI7QUFJRSxvQkFBUSxFQUFFaEQ7QUFKWjtBQURGLFVBREYsZUFTRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLGVBQUssRUFBRSxDQUNMO0FBQUUrQyxvQkFBUSxFQUFFLElBQVo7QUFBa0JDLG1CQUFPLEVBQUU7QUFBM0IsV0FESyxFQUVMO0FBQUVDLG1CQUFPLEVBQUUsU0FBWDtBQUFzQkQsbUJBQU8sRUFBRTtBQUEvQixXQUZLLENBRlQ7QUFBQSxpQ0FPRSwrREFBQywwQ0FBRDtBQUNFLGdCQUFJLEVBQUMsT0FEUDtBQUVFLGtCQUFNLGVBQUUsK0RBQUMsaUVBQUQsS0FGVjtBQUdFLGdCQUFJLEVBQUUsT0FIUjtBQUlFLGlCQUFLLEVBQUUvQyxLQUpUO0FBS0Usb0JBQVEsRUFBRUM7QUFMWjtBQVBGLFVBVEYsZUF3QkUsK0RBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxlQUFLLEVBQUMsY0FGUjtBQUdFLGVBQUssRUFBRSxDQUFDO0FBQUU2QyxvQkFBUSxFQUFFLElBQVo7QUFBa0JDLG1CQUFPLEVBQUU7QUFBM0IsV0FBRCxDQUhUO0FBQUEsaUNBS0UsK0RBQUMsMENBQUQsQ0FBTyxRQUFQO0FBQ0UsZ0JBQUksRUFBQyxhQURQO0FBRUUsa0JBQU0sZUFBRSwrREFBQyxrRUFBRCxLQUZWO0FBR0UsZ0JBQUksRUFBRSxPQUhSO0FBSUUsdUJBQVcsRUFBRSxjQUpmO0FBS0UscUJBQVMsRUFBRSxHQUxiO0FBTUUsb0JBQVEsRUFBRTVDO0FBTlo7QUFMRixVQXhCRixlQXNDRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxjQUFJLEVBQUMsVUFBaEI7QUFBMkIsZUFBSyxFQUFDLDBCQUFqQztBQUFBLGlDQUNFLCtEQUFDLDJDQUFEO0FBQVEsb0JBQVEsRUFBRTRCLGdCQUFsQjtBQUFvQyx3QkFBWSxFQUFFN0MsVUFBVSxDQUFDLENBQUQsQ0FBVixDQUFjVSxFQUFoRTtBQUFBLHNCQUNHVixVQUFVLENBQUMrRCxHQUFYLENBQWUsVUFBQ1IsUUFBRCxFQUFXUyxLQUFYO0FBQUEsa0NBQ2QsK0RBQUMsMkNBQUQsQ0FBUSxNQUFSO0FBQTJCLHFCQUFLLEVBQUVULFFBQVEsQ0FBQzdDLEVBQTNDO0FBQUEsMEJBQ0c2QyxRQUFRLENBQUNVO0FBRFosaUJBQW9CRCxLQUFwQixDQURjO0FBQUEsYUFBZjtBQURIO0FBREYsVUF0Q0YsZUErQ0UsZ0VBQUMseUNBQUQ7QUFBTSxlQUFLLFNBQVg7QUFBQSxrQ0FDRSwrREFBQyxxREFBRDtBQUFTLGtCQUFNLE1BQWY7QUFBZ0Isa0JBQU0sRUFBRSxJQUFJLENBQTVCO0FBQStCLGdCQUFJLEVBQUUsT0FBckM7QUFBQSxtQ0FDRSwrREFBQywyQ0FBRDtBQUNFLG9CQUFNLEVBQUMsa0RBRFQ7QUFFRSxzQkFBUSxFQUFDLGNBRlg7QUFHRSxzQkFBUSxFQUFFN0MsUUFIWjtBQUlFLHNCQUFRLEVBQUVJLGNBSlo7QUFLRSx1QkFBUyxFQUFFRSxTQUxiO0FBQUEsd0JBT0dOLFFBQVEsQ0FBQ3FDLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUI7QUFQMUI7QUFERixZQURGLEVBWUduQyxTQUFTLGlCQUFJO0FBQUssaUJBQUssRUFBRTtBQUFFNkMsbUJBQUssRUFBRTtBQUFULGFBQVo7QUFBQTtBQUFBLFlBWmhCO0FBQUEsVUEvQ0YsZUE2REUsK0RBQUMsMkNBQUQ7QUFBUSxjQUFJLEVBQUMsU0FBYjtBQUF1QixrQkFBUSxFQUFDLFFBQWhDO0FBQXlDLGVBQUssRUFBRTtBQUFFUCxpQkFBSztBQUFQLFdBQWhEO0FBQUE7QUFBQSxVQTdERjtBQUFBO0FBREY7QUFORixJQURGO0FBNEVELENBcEpEOztHQUFNdkUsTTtVQUNhRSx1RCxFQUNGRSxzRCxFQUNHQSxzRCxFQUVjRSx1RCxFQUNUQSx1RCxFQVdRaUIsMEUsRUFDQUEsMEUsRUFDV0EsMEU7OztLQW5CdEN2QixNO0FBc0pTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaG9wL2FkbWluL1tTaG9wSWRdL3Byb2R1Y3QvYWRkLmFiZTAzOTM5NjYzYWRkOWViNzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgVXBsb2FkLCBQYWdlSGVhZGVyLCBTcGFjZSwgQ2FyZCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL0N1c3RvbUhvb2tzXCI7XG5pbXBvcnQgSW1nQ3JvcCBmcm9tIFwiYW50ZC1pbWctY3JvcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBRERfUFJPRFVDVF9SRVFVRVNUIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3JlZHVjZXJzL21lbnVcIjtcbmltcG9ydCB7IEFETUlOX1BST0RVQ1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IHsgR2lmdE91dGxpbmVkLCBEb2xsYXJPdXRsaW5lZCwgUHJvZmlsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vcmVkdWNlcnMvYWRtaW5cIjtcblxuY29uc3QgUmVnaXN0ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IHNlc3Npb24sIGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiYWRtaW5cIiB9KTtcbiAgfSwgW10pO1xuXG4gIGlmICghc2Vzc2lvbiB8fCBpc0xvZ2dlZEluID09PSBmYWxzZSB8fCBzZXNzaW9uLmRpdmlzaW9uID09PSBmYWxzZSkgcm91dGVyLnB1c2goXCIvXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBTaG9wSWQ6IHNlc3Npb24uU2hvcHNbMF0uaWQgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbdGl0bGUsIG9uQ2hhbmdlVGl0bGVdID0gdXNlSW5wdXQoKTtcbiAgY29uc3QgW3ByaWNlLCBvbkNoYW5nZVByaWNlXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgb25DaGFuZ2VEZWNyaXB0aW9uXSA9IHVzZUlucHV0KCk7XG4gIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmlsZUVycm9yLCBzZXRGaWxlRXJyb3JdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbkltYWdlc0NoYW5nZSA9ICh7IGZpbGVMaXN0OiBuZXdGaWxlTGlzdCB9KSA9PiB7XG4gICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xuICAgIHNldEZpbGVFcnJvcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25QcmV2aWV3ID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgICBsZXQgc3JjID0gZmlsZS51cmw7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHNyYyA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUub3JpZ2luRmlsZU9iaik7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gc3JjO1xuICAgIGNvbnN0IGltZ1dpbmRvdyA9IHdpbmRvdy5vcGVuKHNyYyk7XG4gICAgaW1nV2luZG93LmRvY3VtZW50LndyaXRlKGltYWdlLm91dGVySFRNTCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VDYXRlZ29yeSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgc2V0Q2F0ZWdvcnkoZSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwicHJpY2VcIiwgcHJpY2UpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICBmaWxlTGlzdC5mb3JFYWNoKCh7IG9yaWdpbkZpbGVPYmogfSkgPT4ge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZXNcIiwgb3JpZ2luRmlsZU9iaik7XG4gICAgfSk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiU2hvcElkXCIsIHF1ZXJ5LlNob3BJZCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiVXNlcklkXCIsIHNlc3Npb24uaWQpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcIkNhdGVnb3J5SWRcIiwgY2F0ZWdvcnkpO1xuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbiAgICBpZiAoZmlsZUxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBRERfUFJPRFVDVF9SRVFVRVNULFxuICAgICAgICBmb3JtRGF0YSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbi8ke3F1ZXJ5LlNob3BJZH0vcHJvZHVjdGApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc2V0RmlsZUVycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShjYXRlZ29yaWVzWzBdLmlkKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtXG4gICAgICBlbmNUeXBlPXtcIm11bHRpcGFydC9mb3JtLWRhdGFcIn1cbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgICBsYXlvdXQ9e1widmVydGljYWxcIn1cbiAgICA+XG4gICAgICA8Q2FyZCB0aXRsZT17PFBhZ2VIZWFkZXIgY2xhc3NOYW1lPXtcInNpdGUtcGFnZS1oZWFkZXJcIn0gdGl0bGU9XCLsg4Htkojrk7HroZ1cIiAvPn0+XG4gICAgICAgIDxTcGFjZSBkaXJlY3Rpb249e1widmVydGljYWxcIn0gc2l6ZT17XCJtaWRkbGVcIn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT17XCJ0aXRsZVwifSBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi7IOB7ZKI66qF7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH1dfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBuYW1lPXtcInRpdGxlXCJ9XG4gICAgICAgICAgICAgIHByZWZpeD17PEdpZnRPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUaXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbXG4gICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwi6rCA6rKp7J2EIOyeheugpe2VtOyjvOyEuOyalFwiIH0sXG4gICAgICAgICAgICAgIHsgcGF0dGVybjogL15bMC05XS9nLCBtZXNzYWdlOiBcIuyIq+yekOulvCDsnoXroKXtlbTso7zshLjsmpRcIiB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgICAgcHJlZml4PXs8RG9sbGFyT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIHNpemU9e1wibGFyZ2VcIn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQcmljZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPEZvcm0uSXRlbVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGxhYmVsPVwi7ISk66qFXCJcbiAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCLsg4HshLjrgrTsl63snYQg7J6F66Cl7ZW07KO87IS47JqUXCIgfV19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIHByZWZpeD17PFByb2ZpbGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgc2l6ZT17XCJsYXJnZVwifVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCLsg4HshLjsgqztla3snYQg7J6F66Cl7ZW07KO87IS47JqUXCJ9XG4gICAgICAgICAgICAgIG1heExlbmd0aD17MjAwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VEZWNyaXB0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJjYXRlZ29yeVwiIGxhYmVsPVwi7Lm07YWM6rOg66asXCI+XG4gICAgICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZUNhdGVnb3J5fSBkZWZhdWx0VmFsdWU9e2NhdGVnb3JpZXNbMF0uaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3QuT3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdC5PcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgPENhcmQgdGl0bGU9e2BpbWFnZWB9PlxuICAgICAgICAgICAgPEltZ0Nyb3Agcm90YXRlIGFzcGVjdD17NCAvIDN9IG5hbWU9e1wiaW1hZ2VcIn0+XG4gICAgICAgICAgICAgIDxVcGxvYWRcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIlxuICAgICAgICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICAgICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW1hZ2VzQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uUHJldmlldz17b25QcmV2aWV3fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2ZpbGVMaXN0Lmxlbmd0aCA8IDUgJiYgXCIrIFVwbG9hZFwifVxuICAgICAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgICAgIDwvSW1nQ3JvcD5cbiAgICAgICAgICAgIHtmaWxlRXJyb3IgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT7tjIzsnbzsnYQg7JeF66Gc65OcIO2VtOyjvOyEuOyalDwvZGl2Pn1cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgc3R5bGU9e3sgd2lkdGg6IGAxMDAlYCB9fT5cbiAgICAgICAgICAgIOygnOy2nFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1NwYWNlPlxuICAgICAgPC9DYXJkPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=