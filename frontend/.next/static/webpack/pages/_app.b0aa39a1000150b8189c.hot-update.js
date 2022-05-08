webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/shop.js":
/*!***********************!*\
  !*** ./sagas/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return productsSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/shop */ "./reducers/shop.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addProduct),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddProduct),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadProducts),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadProducts),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteProduct),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteProduct),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(selectProduct),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSelectProduct),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editProduct),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchEditProduct),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(discountProduct),
    _marked12 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDiscountProduct),
    _marked13 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addCategory),
    _marked14 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddCategory),
    _marked15 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editCategory),
    _marked16 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchEditCategory),
    _marked17 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteCategory),
    _marked18 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteCategory),
    _marked19 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deleteDiscount),
    _marked20 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchDeleteDiscount),
    _marked21 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadShopList),
    _marked22 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadShopList),
    _marked23 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(productsSaga);





function addProductApi(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/add", data);
}

function addProduct(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addProduct$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addProductApi, action.formData);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_PRODUCT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          _context.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_PRODUCT_FAILURE"],
            error: _context.t0
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function watchAddProduct() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddProduct$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_PRODUCT_REQUEST"], addProduct);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function loadProductsApi(ShopId) {
  console.log({
    ShopId: ShopId
  });
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/load", {
    ShopId: ShopId
  });
}

function loadProducts(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadProducts$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(loadProductsApi, action.ShopId);

        case 3:
          result = _context3.sent;
          console.log(result.data);
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADMIN_PRODUCTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADMIN_PRODUCTS_FAILURE"],
            error: _context3.t0
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function watchLoadProducts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadProducts$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADMIN_PRODUCTS_REQUEST"], loadProducts);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function deleteProductAPI(id) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/delete", {
    id: id
  });
}

function deleteProduct(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteProduct$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(deleteProductAPI, action.id);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_PRODUCT_SUCCESS"],
            data: action.id
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_PRODUCT_FAILURE"],
            error: _context5.t0
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function watchDeleteProduct() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteProduct$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_PRODUCT_REQUEST"], deleteProduct);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function selectProductAPI(ProductId) {
  console.log({
    ProductId: ProductId
  });
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/select", {
    ProductId: ProductId
  });
}

function selectProduct(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function selectProduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(selectProductAPI, action.ProductId);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["SELECT_PRODUCT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.log(_context7.t0);
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["SELECT_PRODUCT_FAILURE"],
            error: _context7.t0
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function watchSelectProduct() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSelectProduct$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["SELECT_PRODUCT_REQUEST"], selectProduct);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function editProdudctAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/edit", data);
}

function editProduct(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editProduct$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          console.log("result");
          _context9.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(editProdudctAPI, action.formData);

        case 4:
          result = _context9.sent;
          console.log(result);
          _context9.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_PRODUCT_SUCCESS"],
            data: result.data
          });

        case 8:
          _context9.next = 15;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          _context9.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_PRODUCT_FAILURE"],
            error: _context9.t0
          });

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 10]]);
}

function watchEditProduct() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchEditProduct$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_PRODUCT_REQUEST"], editProduct);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function discountProductAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/discount", data);
}

function discountProduct(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function discountProduct$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(discountProductAPI, action.data);

        case 3:
          result = _context11.sent;
          _context11.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DISCOUNT_PRODUCT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context11.next = 13;
          break;

        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
          _context11.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DISCOUNT_PRODUCT_FAILURE"],
            error: _context11.t0
          });

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11, null, [[0, 8]]);
}

function watchDiscountProduct() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDiscountProduct$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DISCOUNT_PRODUCT_REQUEST"], discountProduct);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function addCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/category/add", data);
}

function addCategory(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addCategory$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(addCategoryAPI, action.data);

        case 3:
          result = _context13.sent;
          _context13.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_CATEGORY_SUCCESS"],
            data: result.data
          });

        case 6:
          _context13.next = 13;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          console.log(_context13.t0);
          _context13.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_CATEGORY_FAILURE"],
            error: _context13.t0
          });

        case 13:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13, null, [[0, 8]]);
}

function watchAddCategory() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddCategory$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["ADD_CATEGORY_REQUEST"], addCategory);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function editCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/category/update", data);
}

function editCategory(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editCategory$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(editCategoryAPI, action.data);

        case 3:
          result = _context15.sent;
          _context15.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_CATEGORY_SUCCESS"],
            data: result.data
          });

        case 6:
          _context15.next = 13;
          break;

        case 8:
          _context15.prev = 8;
          _context15.t0 = _context15["catch"](0);
          console.log(_context15.t0);
          _context15.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_CATEGORY_FAILURE"],
            error: _context15.t0
          });

        case 13:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15, null, [[0, 8]]);
}

function watchEditCategory() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchEditCategory$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["EDIT_CATEGORY_REQUEST"], editCategory);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function deleteCategoryAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/category/delete", data);
}

function deleteCategory(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteCategory$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(deleteCategoryAPI, action.data);

        case 3:
          result = _context17.sent;
          _context17.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_CATEGORY_SUCCESS"],
            data: result.data
          });

        case 6:
          _context17.next = 13;
          break;

        case 8:
          _context17.prev = 8;
          _context17.t0 = _context17["catch"](0);
          console.log(_context17.t0);
          _context17.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_CATEGORY_FAILURE"],
            error: _context17.t0
          });

        case 13:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17, null, [[0, 8]]);
}

function watchDeleteCategory() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteCategory$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_CATEGORY_REQUEST"], deleteCategory);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function deleteDiscountAPI(_ref) {
  var ProductIds = _ref.ProductIds,
      ShopId = _ref.ShopId,
      CategoryId = _ref.CategoryId;
  console.log(ProductIds, ShopId, CategoryId);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/products/discount/delete", {
    ProductIds: ProductIds,
    ShopId: ShopId,
    CategoryId: CategoryId
  });
}

function deleteDiscount(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deleteDiscount$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(deleteDiscountAPI, action.data);

        case 3:
          result = _context19.sent;
          _context19.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_DISCOUNT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context19.next = 13;
          break;

        case 8:
          _context19.prev = 8;
          _context19.t0 = _context19["catch"](0);
          console.log(_context19.t0);
          _context19.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_DISCOUNT_FAILURE"],
            error: _context19.t0
          });

        case 13:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19, null, [[0, 8]]);
}

function watchDeleteDiscount() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchDeleteDiscount$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["DELETE_DISCOUNT_REQUEST"], deleteDiscount);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function loadShopListAPI(_ref2) {
  var ShopId = _ref2.ShopId;
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/shop/list", {
    ShopId: ShopId
  });
}

function loadShopList(action) {
  var result;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadShopList$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])({
            loadShopListAPI: loadShopListAPI,
            ShopId: action.ShopId
          });

        case 3:
          result = _context21.sent;
          _context21.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["LOAD_SHOPLIST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context21.next = 13;
          break;

        case 8:
          _context21.prev = 8;
          _context21.t0 = _context21["catch"](0);
          console.error(_context21.t0);
          _context21.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: _reducers_shop__WEBPACK_IMPORTED_MODULE_3__["LOAD_SHOPLIST_FAILURE"]
          });

        case 13:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21, null, [[0, 8]]);
}

function watchLoadShopList() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadShopList$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"])(_reducers_shop__WEBPACK_IMPORTED_MODULE_3__["LOAD_SHOPLIST_REQUEST"], loadShopList);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function productsSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function productsSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadProducts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDeleteProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchSelectProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchEditProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDiscountProduct), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchEditCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDeleteCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchAddCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchDeleteDiscount), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(watchLoadShopList) // fork(watchAddShop),
          ]);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJhZGRQcm9kdWN0Iiwid2F0Y2hBZGRQcm9kdWN0IiwibG9hZFByb2R1Y3RzIiwid2F0Y2hMb2FkUHJvZHVjdHMiLCJkZWxldGVQcm9kdWN0Iiwid2F0Y2hEZWxldGVQcm9kdWN0Iiwic2VsZWN0UHJvZHVjdCIsIndhdGNoU2VsZWN0UHJvZHVjdCIsImVkaXRQcm9kdWN0Iiwid2F0Y2hFZGl0UHJvZHVjdCIsImRpc2NvdW50UHJvZHVjdCIsIndhdGNoRGlzY291bnRQcm9kdWN0IiwiYWRkQ2F0ZWdvcnkiLCJ3YXRjaEFkZENhdGVnb3J5IiwiZWRpdENhdGVnb3J5Iiwid2F0Y2hFZGl0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsIndhdGNoRGVsZXRlQ2F0ZWdvcnkiLCJkZWxldGVEaXNjb3VudCIsIndhdGNoRGVsZXRlRGlzY291bnQiLCJsb2FkU2hvcExpc3QiLCJ3YXRjaExvYWRTaG9wTGlzdCIsInByb2R1Y3RzU2FnYSIsImFkZFByb2R1Y3RBcGkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY2FsbCIsImZvcm1EYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkFERF9QUk9EVUNUX1NVQ0NFU1MiLCJjb25zb2xlIiwibG9nIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsImVycm9yIiwidGFrZUxhdGVzdCIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJsb2FkUHJvZHVjdHNBcGkiLCJTaG9wSWQiLCJBRE1JTl9QUk9EVUNUU19TVUNDRVNTIiwiQURNSU5fUFJPRFVDVFNfRkFJTFVSRSIsIkFETUlOX1BST0RVQ1RTX1JFUVVFU1QiLCJkZWxldGVQcm9kdWN0QVBJIiwiaWQiLCJERUxFVEVfUFJPRFVDVF9TVUNDRVNTIiwiREVMRVRFX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9QUk9EVUNUX1JFUVVFU1QiLCJzZWxlY3RQcm9kdWN0QVBJIiwiUHJvZHVjdElkIiwiU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyIsIlNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUiLCJTRUxFQ1RfUFJPRFVDVF9SRVFVRVNUIiwiZWRpdFByb2R1ZGN0QVBJIiwiRURJVF9QUk9EVUNUX1NVQ0NFU1MiLCJFRElUX1BST0RVQ1RfRkFJTFVSRSIsIkVESVRfUFJPRFVDVF9SRVFVRVNUIiwiZGlzY291bnRQcm9kdWN0QVBJIiwiRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTIiwiRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFIiwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUIiwiYWRkQ2F0ZWdvcnlBUEkiLCJBRERfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9DQVRFR09SWV9GQUlMVVJFIiwiQUREX0NBVEVHT1JZX1JFUVVFU1QiLCJlZGl0Q2F0ZWdvcnlBUEkiLCJFRElUX0NBVEVHT1JZX1NVQ0NFU1MiLCJFRElUX0NBVEVHT1JZX0ZBSUxVUkUiLCJFRElUX0NBVEVHT1JZX1JFUVVFU1QiLCJkZWxldGVDYXRlZ29yeUFQSSIsIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTIiwiREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUiLCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVCIsImRlbGV0ZURpc2NvdW50QVBJIiwiUHJvZHVjdElkcyIsIkNhdGVnb3J5SWQiLCJERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyIsIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFIiwiREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QiLCJsb2FkU2hvcExpc3RBUEkiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0E0Q1VBLFU7bUdBU0FDLGU7bUdBUUFDLFk7bUdBVUFDLGlCO21HQU9BQyxhO21HQVNBQyxrQjttR0FRQUMsYTttR0FhQUMsa0I7bUdBUUFDLFc7b0dBWUFDLGdCO29HQVFBQyxl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QUFJLENBQUN2RSxpQkFBRCxDQVBJLEVBUVJ1RSwrREFBSSxDQUFDckUsbUJBQUQsQ0FSSSxFQVNScUUsK0RBQUksQ0FBQ3pFLGdCQUFELENBVEksRUFVUnlFLCtEQUFJLENBQUNuRSxtQkFBRCxDQVZJLEVBV1JtRSwrREFBSSxDQUFDakUsaUJBQUQsQ0FYSSxDQVlSO0FBWlEsV0FBRCxDQUFUOztBQURhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjBhYTM5YTEwMDAxNTBiODE4OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGFsbCwgcHV0LCBmb3JrLCBjYWxsLCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IHtcbiAgQUREX1BST0RVQ1RfUkVRVUVTVCxcbiAgQUREX1BST0RVQ1RfU1VDQ0VTUyxcbiAgQUREX1BST0RVQ1RfRkFJTFVSRSxcbiAgQURNSU5fUFJPRFVDVFNfUkVRVUVTVCxcbiAgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyxcbiAgQURNSU5fUFJPRFVDVFNfRkFJTFVSRSxcbiAgREVMRVRFX1BST0RVQ1RfRkFJTFVSRSxcbiAgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyxcbiAgREVMRVRFX1BST0RVQ1RfUkVRVUVTVCxcbiAgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSxcbiAgU0VMRUNUX1BST0RVQ1RfU1VDQ0VTUyxcbiAgU0VMRUNUX1BST0RVQ1RfUkVRVUVTVCxcbiAgRURJVF9QUk9EVUNUX1JFUVVFU1QsXG4gIEVESVRfUFJPRFVDVF9TVUNDRVNTLFxuICBFRElUX1BST0RVQ1RfRkFJTFVSRSxcbiAgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFLFxuICBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MsXG4gIERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCxcbiAgQUREX0NBVEVHT1JZX0ZBSUxVUkUsXG4gIEFERF9DQVRFR09SWV9TVUNDRVNTLFxuICBBRERfQ0FURUdPUllfUkVRVUVTVCxcbiAgRURJVF9DQVRFR09SWV9SRVFVRVNULFxuICBFRElUX0NBVEVHT1JZX1NVQ0NFU1MsXG4gIEVESVRfQ0FURUdPUllfRkFJTFVSRSxcbiAgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QsXG4gIERFTEVURV9DQVRFR09SWV9TVUNDRVNTLFxuICBERUxFVEVfQ0FURUdPUllfRkFJTFVSRSxcbiAgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QsXG4gIERFTEVURV9ESVNDT1VOVF9TVUNDRVNTLFxuICBERUxFVEVfRElTQ09VTlRfRkFJTFVSRSxcbiAgTE9BRF9TSE9QTElTVF9GQUlMVVJFLFxuICBMT0FEX1NIT1BMSVNUX1NVQ0NFU1MsXG4gIExPQURfU0hPUExJU1RfUkVRVUVTVCxcbiAgQUREX1NIT1BfU1VDQ0VTUyxcbiAgQUREX1NIT1BfRkFJTFVSRSxcbiAgQUREX1NIT1BfUkVRVUVTVCxcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Nob3BcIjtcblxuZnVuY3Rpb24gYWRkUHJvZHVjdEFwaShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2FkZFwiLCBkYXRhKTtcbn1cbmZ1bmN0aW9uKiBhZGRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUHJvZHVjdEFwaSwgYWN0aW9uLmZvcm1EYXRhKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFERF9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hBZGRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QUk9EVUNUX1JFUVVFU1QsIGFkZFByb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvZHVjdHNBcGkoU2hvcElkKSB7XG4gIGNvbnNvbGUubG9nKHsgU2hvcElkIH0pO1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9sb2FkXCIsIHsgU2hvcElkIH0pO1xufVxuZnVuY3Rpb24qIGxvYWRQcm9kdWN0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0c0FwaSwgYWN0aW9uLlNob3BJZCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQURNSU5fUFJPRFVDVFNfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0cygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBsb2FkUHJvZHVjdHMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0QVBJKGlkKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2RlbGV0ZVwiLCB7IGlkIH0pO1xufVxuZnVuY3Rpb24qIGRlbGV0ZVByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChkZWxldGVQcm9kdWN0QVBJLCBhY3Rpb24uaWQpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IGFjdGlvbi5pZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QUk9EVUNUX1JFUVVFU1QsIGRlbGV0ZVByb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9kdWN0QVBJKFByb2R1Y3RJZCkge1xuICBjb25zb2xlLmxvZyh7IFByb2R1Y3RJZCB9KTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvc2VsZWN0XCIsIHsgUHJvZHVjdElkIH0pO1xufVxuZnVuY3Rpb24qIHNlbGVjdFByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWxlY3RQcm9kdWN0QVBJLCBhY3Rpb24uUHJvZHVjdElkKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBwdXQoeyB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2VsZWN0UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULCBzZWxlY3RQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2R1ZGN0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvZWRpdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdFByb2R1ZGN0QVBJLCBhY3Rpb24uZm9ybURhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfUFJPRFVDVF9SRVFVRVNULCBlZGl0UHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2NvdW50UHJvZHVjdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGlzY291bnRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGlzY291bnRQcm9kdWN0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRGlzY291bnRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCwgZGlzY291bnRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9jYXRlZ29yeS9hZGRcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENhdGVnb3J5QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENhdGVnb3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DQVRFR09SWV9SRVFVRVNULCBhZGRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDYXRlZ29yeUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2NhdGVnb3J5L3VwZGF0ZVwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGVkaXRDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfQ0FURUdPUllfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX0NBVEVHT1JZX1JFUVVFU1QsIGVkaXRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvY2F0ZWdvcnkvZGVsZXRlXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGVsZXRlQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEaXNjb3VudEFQSSh7IFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCB9KSB7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50L2RlbGV0ZVwiLCB7XG4gICAgUHJvZHVjdElkcyxcbiAgICBTaG9wSWQsXG4gICAgQ2F0ZWdvcnlJZCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVEaXNjb3VudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZURpc2NvdW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZURpc2NvdW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9ESVNDT1VOVF9SRVFVRVNULCBkZWxldGVEaXNjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaG9wTGlzdEFQSSh7IFNob3BJZCB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Nob3AvbGlzdFwiLCB7IFNob3BJZCB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRTaG9wTGlzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHsgbG9hZFNob3BMaXN0QVBJLCBTaG9wSWQ6IGFjdGlvbi5TaG9wSWQgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BRF9TSE9QTElTVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfU0hPUExJU1RfRkFJTFVSRSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkU2hvcExpc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TSE9QTElTVF9SRVFVRVNULCBsb2FkU2hvcExpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdHNTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQcm9kdWN0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3RzKSxcbiAgICBmb3JrKHdhdGNoRGVsZXRlUHJvZHVjdCksXG4gICAgZm9yayh3YXRjaFNlbGVjdFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hFZGl0UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaERpc2NvdW50UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaEVkaXRDYXRlZ29yeSksXG4gICAgZm9yayh3YXRjaERlbGV0ZUNhdGVnb3J5KSxcbiAgICBmb3JrKHdhdGNoQWRkQ2F0ZWdvcnkpLFxuICAgIGZvcmsod2F0Y2hEZWxldGVEaXNjb3VudCksXG4gICAgZm9yayh3YXRjaExvYWRTaG9wTGlzdCksXG4gICAgLy8gZm9yayh3YXRjaEFkZFNob3ApLFxuICBdKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=