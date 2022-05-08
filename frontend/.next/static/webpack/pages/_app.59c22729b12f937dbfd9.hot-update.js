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
  console.lo({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvc2hvcC5qcyJdLCJuYW1lcyI6WyJhZGRQcm9kdWN0Iiwid2F0Y2hBZGRQcm9kdWN0IiwibG9hZFByb2R1Y3RzIiwid2F0Y2hMb2FkUHJvZHVjdHMiLCJkZWxldGVQcm9kdWN0Iiwid2F0Y2hEZWxldGVQcm9kdWN0Iiwic2VsZWN0UHJvZHVjdCIsIndhdGNoU2VsZWN0UHJvZHVjdCIsImVkaXRQcm9kdWN0Iiwid2F0Y2hFZGl0UHJvZHVjdCIsImRpc2NvdW50UHJvZHVjdCIsIndhdGNoRGlzY291bnRQcm9kdWN0IiwiYWRkQ2F0ZWdvcnkiLCJ3YXRjaEFkZENhdGVnb3J5IiwiZWRpdENhdGVnb3J5Iiwid2F0Y2hFZGl0Q2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsIndhdGNoRGVsZXRlQ2F0ZWdvcnkiLCJkZWxldGVEaXNjb3VudCIsIndhdGNoRGVsZXRlRGlzY291bnQiLCJsb2FkU2hvcExpc3QiLCJ3YXRjaExvYWRTaG9wTGlzdCIsInByb2R1Y3RzU2FnYSIsImFkZFByb2R1Y3RBcGkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY2FsbCIsImZvcm1EYXRhIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkFERF9QUk9EVUNUX1NVQ0NFU1MiLCJjb25zb2xlIiwibG9nIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsImVycm9yIiwidGFrZUxhdGVzdCIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJsb2FkUHJvZHVjdHNBcGkiLCJTaG9wSWQiLCJsbyIsIkFETUlOX1BST0RVQ1RTX1NVQ0NFU1MiLCJBRE1JTl9QUk9EVUNUU19GQUlMVVJFIiwiQURNSU5fUFJPRFVDVFNfUkVRVUVTVCIsImRlbGV0ZVByb2R1Y3RBUEkiLCJpZCIsIkRFTEVURV9QUk9EVUNUX1NVQ0NFU1MiLCJERUxFVEVfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX1BST0RVQ1RfUkVRVUVTVCIsInNlbGVjdFByb2R1Y3RBUEkiLCJQcm9kdWN0SWQiLCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTIiwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSIsIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1QiLCJlZGl0UHJvZHVkY3RBUEkiLCJFRElUX1BST0RVQ1RfU1VDQ0VTUyIsIkVESVRfUFJPRFVDVF9GQUlMVVJFIiwiRURJVF9QUk9EVUNUX1JFUVVFU1QiLCJkaXNjb3VudFByb2R1Y3RBUEkiLCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1MiLCJESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUiLCJESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QiLCJhZGRDYXRlZ29yeUFQSSIsIkFERF9DQVRFR09SWV9TVUNDRVNTIiwiQUREX0NBVEVHT1JZX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfUkVRVUVTVCIsImVkaXRDYXRlZ29yeUFQSSIsIkVESVRfQ0FURUdPUllfU1VDQ0VTUyIsIkVESVRfQ0FURUdPUllfRkFJTFVSRSIsIkVESVRfQ0FURUdPUllfUkVRVUVTVCIsImRlbGV0ZUNhdGVnb3J5QVBJIiwiREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MiLCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRSIsIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUIiwiZGVsZXRlRGlzY291bnRBUEkiLCJQcm9kdWN0SWRzIiwiQ2F0ZWdvcnlJZCIsIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTIiwiREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUiLCJERUxFVEVfRElTQ09VTlRfUkVRVUVTVCIsImxvYWRTaG9wTGlzdEFQSSIsIkxPQURfU0hPUExJU1RfU1VDQ0VTUyIsIkxPQURfU0hPUExJU1RfRkFJTFVSRSIsIkxPQURfU0hPUExJU1RfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQTRDVUEsVTttR0FTQUMsZTttR0FRQUMsWTttR0FVQUMsaUI7bUdBT0FDLGE7bUdBU0FDLGtCO21HQVFBQyxhO21HQWFBQyxrQjttR0FRQUMsVztvR0FZQUMsZ0I7b0dB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T1I0RSwrREFBSSxDQUFDeEUsaUJBQUQsQ0FQSSxFQVFSd0UsK0RBQUksQ0FBQ3RFLG1CQUFELENBUkksRUFTUnNFLCtEQUFJLENBQUMxRSxnQkFBRCxDQVRJLEVBVVIwRSwrREFBSSxDQUFDcEUsbUJBQUQsQ0FWSSxFQVdSb0UsK0RBQUksQ0FBQ2xFLGlCQUFELENBWEksQ0FZUjtBQVpRLFdBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU5YzIyNzI5YjEyZjkzN2RiZmQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBhbGwsIHB1dCwgZm9yaywgY2FsbCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7XG4gIEFERF9QUk9EVUNUX1JFUVVFU1QsXG4gIEFERF9QUk9EVUNUX1NVQ0NFU1MsXG4gIEFERF9QUk9EVUNUX0ZBSUxVUkUsXG4gIEFETUlOX1BST0RVQ1RTX1JFUVVFU1QsXG4gIEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MsXG4gIEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUsXG4gIERFTEVURV9QUk9EVUNUX0ZBSUxVUkUsXG4gIERFTEVURV9QUk9EVUNUX1NVQ0NFU1MsXG4gIERFTEVURV9QUk9EVUNUX1JFUVVFU1QsXG4gIFNFTEVDVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIFNFTEVDVF9QUk9EVUNUX1NVQ0NFU1MsXG4gIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QsXG4gIEVESVRfUFJPRFVDVF9SRVFVRVNULFxuICBFRElUX1BST0RVQ1RfU1VDQ0VTUyxcbiAgRURJVF9QUk9EVUNUX0ZBSUxVUkUsXG4gIERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSxcbiAgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLFxuICBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1QsXG4gIEFERF9DQVRFR09SWV9GQUlMVVJFLFxuICBBRERfQ0FURUdPUllfU1VDQ0VTUyxcbiAgQUREX0NBVEVHT1JZX1JFUVVFU1QsXG4gIEVESVRfQ0FURUdPUllfUkVRVUVTVCxcbiAgRURJVF9DQVRFR09SWV9TVUNDRVNTLFxuICBFRElUX0NBVEVHT1JZX0ZBSUxVUkUsXG4gIERFTEVURV9DQVRFR09SWV9SRVFVRVNULFxuICBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyxcbiAgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUsXG4gIERFTEVURV9ESVNDT1VOVF9SRVFVRVNULFxuICBERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyxcbiAgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUsXG4gIExPQURfU0hPUExJU1RfRkFJTFVSRSxcbiAgTE9BRF9TSE9QTElTVF9TVUNDRVNTLFxuICBMT0FEX1NIT1BMSVNUX1JFUVVFU1QsXG4gIEFERF9TSE9QX1NVQ0NFU1MsXG4gIEFERF9TSE9QX0ZBSUxVUkUsXG4gIEFERF9TSE9QX1JFUVVFU1QsXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9zaG9wXCI7XG5cbmZ1bmN0aW9uIGFkZFByb2R1Y3RBcGkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9hZGRcIiwgZGF0YSk7XG59XG5mdW5jdGlvbiogYWRkUHJvZHVjdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFByb2R1Y3RBcGksIGFjdGlvbi5mb3JtRGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX1BST0RVQ1RfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBBRERfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoQWRkUHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUFJPRFVDVF9SRVFVRVNULCBhZGRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2R1Y3RzQXBpKFNob3BJZCkge1xuICBjb25zb2xlLmxvKHsgU2hvcElkIH0pO1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9sb2FkXCIsIHsgU2hvcElkIH0pO1xufVxuZnVuY3Rpb24qIGxvYWRQcm9kdWN0cyhhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQcm9kdWN0c0FwaSwgYWN0aW9uLlNob3BJZCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEFETUlOX1BST0RVQ1RTX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQURNSU5fUFJPRFVDVFNfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cbmZ1bmN0aW9uKiB3YXRjaExvYWRQcm9kdWN0cygpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChBRE1JTl9QUk9EVUNUU19SRVFVRVNULCBsb2FkUHJvZHVjdHMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9kdWN0QVBJKGlkKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2RlbGV0ZVwiLCB7IGlkIH0pO1xufVxuZnVuY3Rpb24qIGRlbGV0ZVByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgeWllbGQgY2FsbChkZWxldGVQcm9kdWN0QVBJLCBhY3Rpb24uaWQpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IGFjdGlvbi5pZCB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5mdW5jdGlvbiogd2F0Y2hEZWxldGVQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9QUk9EVUNUX1JFUVVFU1QsIGRlbGV0ZVByb2R1Y3QpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RQcm9kdWN0QVBJKFByb2R1Y3RJZCkge1xuICBjb25zb2xlLmxvZyh7IFByb2R1Y3RJZCB9KTtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvc2VsZWN0XCIsIHsgUHJvZHVjdElkIH0pO1xufVxuZnVuY3Rpb24qIHNlbGVjdFByb2R1Y3QoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzZWxlY3RQcm9kdWN0QVBJLCBhY3Rpb24uUHJvZHVjdElkKTtcblxuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBwdXQoeyB0eXBlOiBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuZnVuY3Rpb24qIHdhdGNoU2VsZWN0UHJvZHVjdCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTRUxFQ1RfUFJPRFVDVF9SRVFVRVNULCBzZWxlY3RQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2R1ZGN0QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvZWRpdFwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZWRpdFByb2R1ZGN0QVBJLCBhY3Rpb24uZm9ybURhdGEpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRURJVF9QUk9EVUNUX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEVESVRfUFJPRFVDVF9SRVFVRVNULCBlZGl0UHJvZHVjdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2NvdW50UHJvZHVjdEFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50XCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGlzY291bnRQcm9kdWN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGlzY291bnRQcm9kdWN0QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRSwgZXJyb3I6IGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24qIHdhdGNoRGlzY291bnRQcm9kdWN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCwgZGlzY291bnRQcm9kdWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ2F0ZWdvcnlBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdChcIi9wcm9kdWN0cy9jYXRlZ29yeS9hZGRcIiwgZGF0YSk7XG59XG5cbmZ1bmN0aW9uKiBhZGRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENhdGVnb3J5QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogQUREX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZENhdGVnb3J5KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DQVRFR09SWV9SRVFVRVNULCBhZGRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRDYXRlZ29yeUFQSShkYXRhKSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2NhdGVnb3J5L3VwZGF0ZVwiLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGVkaXRDYXRlZ29yeShhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGVkaXRDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IEVESVRfQ0FURUdPUllfU1VDQ0VTUywgZGF0YTogcmVzdWx0LmRhdGEgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBFRElUX0NBVEVHT1JZX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEVkaXRDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChFRElUX0NBVEVHT1JZX1JFUVVFU1QsIGVkaXRDYXRlZ29yeSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUNhdGVnb3J5QVBJKGRhdGEpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvcHJvZHVjdHMvY2F0ZWdvcnkvZGVsZXRlXCIsIGRhdGEpO1xufVxuXG5mdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChkZWxldGVDYXRlZ29yeUFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IERFTEVURV9DQVRFR09SWV9GQUlMVVJFLCBlcnJvcjogZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDYXRlZ29yeSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZGVsZXRlQ2F0ZWdvcnkpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEaXNjb3VudEFQSSh7IFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCB9KSB7XG4gIGNvbnNvbGUubG9nKFByb2R1Y3RJZHMsIFNob3BJZCwgQ2F0ZWdvcnlJZCk7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Byb2R1Y3RzL2Rpc2NvdW50L2RlbGV0ZVwiLCB7XG4gICAgUHJvZHVjdElkcyxcbiAgICBTaG9wSWQsXG4gICAgQ2F0ZWdvcnlJZCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uKiBkZWxldGVEaXNjb3VudChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZURpc2NvdW50QVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUsIGVycm9yOiBlIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uKiB3YXRjaERlbGV0ZURpc2NvdW50KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KERFTEVURV9ESVNDT1VOVF9SRVFVRVNULCBkZWxldGVEaXNjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTaG9wTGlzdEFQSSh7IFNob3BJZCB9KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3Nob3AvbGlzdFwiLCB7IFNob3BJZCB9KTtcbn1cblxuZnVuY3Rpb24qIGxvYWRTaG9wTGlzdChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHsgbG9hZFNob3BMaXN0QVBJLCBTaG9wSWQ6IGFjdGlvbi5TaG9wSWQgfSk7XG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9BRF9TSE9QTElTVF9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPQURfU0hPUExJU1RfRkFJTFVSRSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiogd2F0Y2hMb2FkU2hvcExpc3QoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9TSE9QTElTVF9SRVFVRVNULCBsb2FkU2hvcExpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcHJvZHVjdHNTYWdhKCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsod2F0Y2hBZGRQcm9kdWN0KSxcbiAgICBmb3JrKHdhdGNoTG9hZFByb2R1Y3RzKSxcbiAgICBmb3JrKHdhdGNoRGVsZXRlUHJvZHVjdCksXG4gICAgZm9yayh3YXRjaFNlbGVjdFByb2R1Y3QpLFxuICAgIGZvcmsod2F0Y2hFZGl0UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaERpc2NvdW50UHJvZHVjdCksXG4gICAgZm9yayh3YXRjaEVkaXRDYXRlZ29yeSksXG4gICAgZm9yayh3YXRjaERlbGV0ZUNhdGVnb3J5KSxcbiAgICBmb3JrKHdhdGNoQWRkQ2F0ZWdvcnkpLFxuICAgIGZvcmsod2F0Y2hEZWxldGVEaXNjb3VudCksXG4gICAgZm9yayh3YXRjaExvYWRTaG9wTGlzdCksXG4gICAgLy8gZm9yayh3YXRjaEFkZFNob3ApLFxuICBdKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=