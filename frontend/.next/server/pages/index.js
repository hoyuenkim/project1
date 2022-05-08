module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Generalui/MapComponent.js":
/*!**********************************************!*\
  !*** ./components/Generalui/MapComponent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-kakao-maps-sdk */ "./node_modules/react-kakao-maps-sdk/lib/index.cjs");
/* harmony import */ var react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const MapComponent = ({
  session
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    userCoordinates,
    shopCoordinates
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.shop);
  const {
    0: centerCoordinates,
    1: setCenterCoordinates
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    lat: session.lat,
    lng: session.lng
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (userCoordinates) {
      return setCenterCoordinates({
        lat: userCoordinates[1],
        lng: userCoordinates[0]
      });
    }
  }, [userCoordinates]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0__["Map"], {
    center: centerCoordinates,
    style: {
      width: "100%",
      height: "360px"
    },
    level: 5,
    children: [session && session.division === false && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0__["CustomOverlayMap"], {
      position: {
        lat: session.lat,
        lng: session.lng
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        children: session && session.name
      }, session.id)
    }, session.id), shopCoordinates && shopCoordinates.length > 0 && shopCoordinates.map((result, index) => {
      const ids = session.Shops.filter(v => v.id == result.ShopId);
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_kakao_maps_sdk__WEBPACK_IMPORTED_MODULE_0__["CustomOverlayMap"], {
        position: {
          lat: result.location.coordinates[1],
          lng: result.location.coordinates[0]
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
          style: {
            cursor: "pointer"
          },
          color: ids.length === 0 ? null : "magenta",
          onClick: () => {
            if (ids.length == 0) {
              return router.push(`/menu/${result.ShopId}`);
            } else {
              return router.push(`/shop/admin`);
            }
          },
          children: result.name
        }, index)
      }, result.id);
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MapComponent);

/***/ }),

/***/ "./components/Generalui/Modal.js":
/*!***************************************!*\
  !*** ./components/Generalui/Modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ModalInterface = ({
  content,
  toggleModal,
  onChangeToggleModal,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
    title: title ? title : null,
    visible: toggleModal,
    onCancel: onChangeToggleModal,
    footer: null,
    children: content
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ModalInterface);

/***/ }),

/***/ "./components/Generalui/NearAmountToggle.js":
/*!**************************************************!*\
  !*** ./components/Generalui/NearAmountToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const NearAmountToggle = ({
  id,
  quantity,
  price,
  discount
}) => {
  console.log(quantity);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const onClickAdd = () => {
    try {
      dispatch({
        type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["NEAR_ADD_QUANTITY_REQUEST"],
        data: {
          id
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onClickSubstract = () => {
    dispatch({
      type: _reducers_shop__WEBPACK_IMPORTED_MODULE_2__["NEAR_SUBSTRACT_QUANTITY_REQUEST"],
      data: {
        id
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
        children: ["\uD560\uC778\uAC00:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_4___default.a, {
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

/* harmony default export */ __webpack_exports__["default"] = (NearAmountToggle);

/***/ }),

/***/ "./components/Generalui/Payment.js":
/*!*****************************************!*\
  !*** ./components/Generalui/Payment.js ***!
  \*****************************************/
/*! exports provided: onClickPayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClickPayment", function() { return onClickPayment; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducers/cart */ "./reducers/cart.js");


const onClickPayment = (type, product, isLoggedIn, session, onChangeToggleModal, dispatch, cart, router, ShopId, TableId) => {
  const onWindowScroll = () => {
    window.scrollTo({
      top: 0
    });
  };

  let originData;
  let amount = 0;
  let name;

  if (isLoggedIn) {
    if (type == 'single') {
      originData = {
        UserId: session.id,
        UserName: session.name,
        ProductId: product.id,
        ShopId: product.Shop.id,
        price: product.discount ? product.price * (100 - product.discount) * 0.01 * product.quantity : product.price * product.quantity,
        quantity: product.quantity,
        ShopName: product.Shop.name,
        ProductTitle: product.title
      };
    } else {
      cart.map(product => amount += product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity);
      name = cart.length > 1 ? `${product.title} 외 ${cart.length - 1} 건` : product.title;
      originData = cart.map(product => {
        return {
          ProductId: product.id,
          ShopId: product.Shop.id,
          UserId: session.id,
          UserName: session.name,
          price: product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 : product.price,
          quantity: product.quantity,
          ShopName: product.Shop.name,
          ProductTitle: product.title
        };
      });
    }

    const custom_data = JSON.stringify(type == 'single' ? [originData] : originData);

    if (IMP !== null) {
      onWindowScroll();
      IMP.init("imp37098043");
      const today = Date.now();
      IMP.request_pay({
        pay_method: 'card',
        name: type !== 'cart' ? product.title : name,
        Merchant_uid: 'uid' + today,
        amount: type !== 'cart' ? product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity : amount,
        custom_data
      }, response => {
        const {
          success,
          merchant_uid,
          error_msg
        } = response;

        if (success) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${"https://127.0.0.1:3065"}/payments/complete`, {
            data: response
          }).then(res => {
            console.log(`type: ${type}, ShopId: ${ShopId}, TableId: ${TableId}`);
            dispatch({
              type: _reducers_cart__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CART_REQUEST"]
            });

            if (type == 'cart') {
              router.push(TableId === undefined ? `/menu/${ShopId}` : `/menu/${ShopId}/${TableId}`);
            }
          }).catch(err => {
            return console.error(err);
          });
        } else {
          alert(`결제 실패: ${error_msg}`);
        }
      });
    }
  } else {
    onChangeToggleModal();
  }
};

/***/ }),

/***/ "./node_modules/react-kakao-maps-sdk/lib/index.cjs":
/*!*********************************************************!*\
  !*** ./node_modules/react-kakao-maps-sdk/lib/index.cjs ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! react */ "react"),t=__webpack_require__(/*! react-dom */ "react-dom");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=/*#__PURE__*/n(e),a=/*#__PURE__*/n(t),i=function(t,n,o){e.useEffect(function(){if(t&&o){var e=function(){var e=[].slice.call(arguments);return void 0===e?o(t):o.apply(void 0,[t].concat(e))};return kakao.maps.event.addListener(t,n,e),function(){kakao.maps.event.removeListener(t,n,e)}}},[t,n,o])},r=o.default.createContext(void 0),s=function(t){var n=e.useContext(r);if(!n)throw new Error((t?t+" Component":"useMap")+" must exist inside Map Component!");return n},u=function(t){var n=t.id,o=t.className,i=t.style,r=t.map,s=t.position,u=t.marker,l=t.children,c=t.altitude,f=t.disableAutoPan,d=t.range,p=t.removable,k=t.zIndex,m=t.onCreate,v=e.useRef(document.createElement("div")),g=e.useMemo(function(){var e=new kakao.maps.InfoWindow({altitude:c,disableAutoPan:f,range:d,removable:p,zIndex:k,content:v.current,position:s});return v.current.style.whiteSpace="nowrap",e},[f,p]);return e.useEffect(function(){return g.open(r,u),function(){g.close()}},[r,u]),e.useEffect(function(){m&&m(g)},[g,m]),e.useEffect(function(){g&&g.setPosition(s)},[g,s]),e.useEffect(function(){g&&c&&g.setAltitude(c)},[g,c]),e.useEffect(function(){g&&d&&g.setRange(d)},[g,d]),e.useEffect(function(){g&&k&&g.setZIndex(k)},[g,k]),e.useEffect(function(){n&&(v.current.id=n)},[n]),e.useEffect(function(){o&&(v.current.className=o)},[o]),e.useEffect(function(){if(i)for(var e=0,t=Object.entries(i);e<t.length;e++){var n=t[e];v.current.style[n[0]]=n[1]}},[i]),a.default.createPortal(l,v.current)},l=o.default.createContext(void 0),c=function(t){var n=t.map,a=t.position,r=t.children,s=t.altitude,c=t.clickable,f=t.draggable,d=t.image,p=t.infoWindowOptions,k=t.onCreate,m=t.onClick,v=t.onDragEnd,g=t.onDragStart,C=t.onMouseOut,w=t.onMouseOver,y=t.opacity,E=t.range,M=t.title,h=t.zIndex,x=e.useContext(l),b=e.useMemo(function(){return new kakao.maps.Marker({altitude:s,clickable:c,draggable:f,image:d,opacity:y,range:E,title:M,zIndex:h,position:a})},[]);return e.useEffect(function(){return x?x.addMarker(b):b.setMap(n),function(){x?x.removeMarker(b):b.setMap(null)}},[n,x,b]),e.useEffect(function(){k&&k(b)},[b,k]),i(b,"click",m),i(b,"dragstart",g),i(b,"dragend",v),i(b,"mouseout",C),i(b,"mouseover",w),e.useEffect(function(){n&&b&&a&&b.setPosition(a)},[n,b,a]),e.useEffect(function(){n&&b&&d&&b.setImage(d)},[n,b,d]),e.useEffect(function(){n&&b&&s&&b.setAltitude(s)},[n,b,s]),e.useEffect(function(){n&&b&&void 0!==c&&b.setClickable(c)},[n,b,c]),e.useEffect(function(){n&&b&&void 0!==f&&b.setDraggable(f)},[n,b,f]),e.useEffect(function(){n&&b&&y&&b.setOpacity(y)},[n,b,y]),e.useEffect(function(){n&&b&&E&&b.setRange(E)},[n,b,E]),e.useEffect(function(){n&&b&&M&&b.setTitle(M)},[n,b,M]),e.useEffect(function(){n&&b&&h&&b.setZIndex(h)},[n,b,h]),r?o.default.createElement(u,{position:a,map:n,marker:b,id:null==p?void 0:p.id,className:null==p?void 0:p.className,style:null==p?void 0:p.style,altitude:null==p?void 0:p.altitude,disableAutoPan:null==p?void 0:p.disableAutoPan,range:null==p?void 0:p.range,removable:null==p?void 0:p.removable,zIndex:null==p?void 0:p.zIndex},r):null};function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=o.default.createContext(void 0),p=function(t){var n=e.useContext(d);if(!n)throw new Error((t?t+" Component":"useRoadview")+" must exist inside Roadview Component!");return n};exports.AbstractOverlay=function(t){var n=t.draw,o=t.onAdd,a=t.onRemove,i=t.onCreate,r=s(),u=e.useMemo(function(){return new(/*#__PURE__*/function(e){var t,n;function o(t,n,o){var a;return(a=e.call(this)||this).draw=t,a.onAdd=n,a.onRemove=o,a}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,f(t,n),o}(kakao.maps.AbstractOverlay))(n,o,a)},[n,o,a]);return e.useEffect(function(){return u.setMap(r),function(){u.setMap(null)}},[r,u]),e.useEffect(function(){i&&i(u)},[u,i]),null},exports.Circle=function(t){var n=t.center,o=t.radius,a=t.fillColor,r=t.fillOpacity,u=t.strokeColor,l=t.strokeOpacity,c=t.strokeStyle,f=t.strokeWeight,d=t.zIndex,p=t.onMouseover,k=t.onMouseout,m=t.onMousemove,v=t.onMousedown,g=t.onClick,C=t.onCreate,w=s("Circle"),y=e.useMemo(function(){return new kakao.maps.LatLng(n.lat,n.lng)},[n.lat,n.lng]),E=e.useMemo(function(){return new kakao.maps.Circle({center:y,radius:o,fillColor:a,fillOpacity:r,strokeColor:u,strokeOpacity:l,strokeStyle:c,strokeWeight:f,zIndex:d})},[]);return e.useEffect(function(){return E.setMap(w),function(){E.setMap(null)}},[w,E]),e.useEffect(function(){C&&C(E)},[E,C]),e.useEffect(function(){E&&E.setPosition(y)},[E,y]),e.useEffect(function(){E.setRadius(o)},[E,o]),e.useEffect(function(){d&&E.setZIndex(d)},[E,d]),e.useEffect(function(){E.setOptions({fillColor:a,fillOpacity:r,strokeColor:u,strokeOpacity:l,strokeStyle:c,strokeWeight:f})},[E,a,r,u,l,c,f]),i(E,"mouseover",p),i(E,"mouseout",k),i(E,"mousemove",m),i(E,"mousedown",v),i(E,"click",g),null},exports.CustomOverlayMap=function(t){var n=t.id,o=t.className,i=t.style,r=t.position,u=t.children,c=t.clickable,f=t.xAnchor,d=t.yAnchor,p=t.zIndex,k=t.onCreate,m=e.useContext(l),v=s("CustomOverlayMap"),g=e.useRef(document.createElement("div")),C=e.useMemo(function(){return new kakao.maps.LatLng(r.lat,r.lng)},[r.lat,r.lng]),w=e.useMemo(function(){return new kakao.maps.CustomOverlay({clickable:c,xAnchor:f,yAnchor:d,zIndex:p,position:C,content:g.current})},[c,f,d]);return e.useEffect(function(){if(v)return m?m.addMarker(w):w.setMap(v),function(){m?m.removeMarker(w):w.setMap(null)}},[v,m,w]),e.useEffect(function(){k&&k(w)},[w,k]),e.useEffect(function(){w.setPosition(C)},[w,C]),e.useEffect(function(){p&&w.setZIndex(p)},[w,p]),e.useEffect(function(){n&&(g.current.id=n)},[n]),e.useEffect(function(){o&&(g.current.className=o)},[o]),e.useEffect(function(){if(i)for(var e=0,t=Object.entries(i);e<t.length;e++){var n=t[e];g.current.style[n[0]]=n[1]}},[i]),a.default.createPortal(u,g.current)},exports.CustomOverlayRoadview=function(t){var n=t.id,o=t.className,i=t.style,r=t.position,s=t.children,u=t.clickable,l=t.xAnchor,c=t.yAnchor,f=t.zIndex,d=t.altitude,k=t.range,m=t.isFocus,v=t.onCreate,g=p("CustomOverlayRoadview"),C=e.useRef(document.createElement("div")),w=e.useMemo(function(){return"lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Viewpoint(r.pan,r.tilt,r.zoom,r.panoId)},[r.lat,r.lng,r.pan,r.tilt,r.zoom,r.panoId]),y=e.useMemo(function(){return new kakao.maps.CustomOverlay({clickable:u,xAnchor:l,yAnchor:c,zIndex:f,position:w,content:C.current})},[u,l,c]);return e.useEffect(function(){if(g){if(y.setMap(g),m){var e=g.getProjection().viewpointFromCoords(y.getPosition(),y.getAltitude());g.setViewpoint(e)}return function(){y.setMap(null)}}},[y,g]),e.useEffect(function(){v&&v(y)},[y,v]),e.useEffect(function(){y.setPosition(w)},[y,w]),e.useEffect(function(){f&&y.setZIndex(f)},[y,f]),e.useEffect(function(){d&&y.setAltitude(d)},[y,d]),e.useEffect(function(){k&&y.setRange(k)},[y,k]),e.useEffect(function(){n&&(C.current.id=n)},[n]),e.useEffect(function(){o&&(C.current.className=o)},[o]),e.useEffect(function(){if(i)for(var e=0,t=Object.entries(i);e<t.length;e++){var n=t[e];C.current.style[n[0]]=n[1]}},[i]),a.default.createPortal(s,C.current)},exports.Ellipse=function(t){var n=t.center,o=t.rx,a=t.ry,r=t.fillColor,u=t.fillOpacity,l=t.strokeColor,c=t.strokeOpacity,f=t.strokeStyle,d=t.strokeWeight,p=t.zIndex,k=t.onMouseover,m=t.onMouseout,v=t.onMousemove,g=t.onMousedown,C=t.onClick,w=t.onCreate,y=s("Ellipse"),E=e.useMemo(function(){return new kakao.maps.LatLng(n.lat,n.lng)},[n.lat,n.lng]),M=e.useMemo(function(){return new kakao.maps.Ellipse({center:E,rx:o,ry:a,fillColor:r,fillOpacity:u,strokeColor:l,strokeOpacity:c,strokeStyle:f,strokeWeight:d,zIndex:p})},[]);return e.useEffect(function(){return M.setMap(y),function(){M.setMap(null)}},[y,M]),e.useEffect(function(){w&&w(M)},[M,w]),e.useEffect(function(){M&&M.setPosition(E)},[M,E]),e.useEffect(function(){M.setRadius(o,a)},[M,o,a]),e.useEffect(function(){p&&M.setZIndex(p)},[M,p]),e.useEffect(function(){M.setOptions({fillColor:r,fillOpacity:u,strokeColor:l,strokeOpacity:c,strokeStyle:f,strokeWeight:d})},[M,r,u,l,c,f,d]),i(M,"mouseover",k),i(M,"mouseout",m),i(M,"mousemove",v),i(M,"mousedown",g),i(M,"click",C),null},exports.Map=function(t){var n=t.id,a=void 0===n?"kakao-map-container":n,s=t.style,u=t.children,l=t.center,c=t.isPanto,f=void 0!==c&&c,d=t.padding,p=void 0===d?32:d,k=t.className,m=t.disableDoubleClick,v=t.disableDoubleClickZoom,g=t.draggable,C=t.zoomable,w=t.keyboardShortcuts,y=t.level,E=t.maxLevel,M=t.minLevel,h=t.mapTypeId,x=t.projectionId,b=t.scrollwheel,O=t.tileAnimation,I=t.onCreate,L=t.onBoundsChanged,z=t.onCenterChanged,P=t.onClick,S=t.onDoubleClick,A=t.onDrag,R=t.onDragEnd,W=t.onDragStart,D=t.onIdle,Z=t.onMaptypeidChanged,N=t.onMouseMove,T=t.onRightClick,j=t.onTileLoaded,_=t.onZoomChanged,V=t.onZoomStart,q=e.useState(),F=q[0],G=q[1],B=e.useRef(null);return e.useEffect(function(){window.kakao?B.current&&kakao.maps.load(function(){var e="lat"in l?new kakao.maps.LatLng(l.lat,l.lng):new kakao.maps.Coords(l.x,l.y),t=new kakao.maps.Map(B.current,{center:e,disableDoubleClick:m,disableDoubleClickZoom:v,draggable:g,keyboardShortcuts:w,level:y,mapTypeId:h,projectionId:x,scrollwheel:b,tileAnimation:O});G(t)}):console.warn("kakao map javascript api를 먼저 불러와야 합니다. `https://apis.map.kakao.com/web/guide`")},[m,v,h,O]),e.useEffect(function(){F&&I&&I(F)},[F,I]),e.useEffect(function(){if(F){var e=F.getCenter();e instanceof kakao.maps.Coords&&(e=e.toLatLng());var t="lat"in l?new kakao.maps.LatLng(l.lat,l.lng):new kakao.maps.Coords(l.x,l.y);t instanceof kakao.maps.LatLng&&t.equals(e)||t instanceof kakao.maps.Coords&&t.toLatLng().equals(e)||(f?F.panTo(t,p):F.setCenter(t))}},[F,l.lat,l.lng,l.x,l.y]),e.useEffect(function(){F&&void 0!==g&&F.setDraggable(g)},[F,g]),e.useEffect(function(){F&&void 0!==C&&F.setZoomable(C)},[F,C]),e.useEffect(function(){F&&w&&"boolean"==typeof w&&F.setKeyboardShortcuts(w)},[F,w]),e.useEffect(function(){F&&y&&F.setLevel(y)},[F,y]),e.useEffect(function(){F&&h&&F.setMapTypeId(h)},[F,h]),e.useEffect(function(){F&&x&&F.setProjectionId(x)},[F,x]),e.useEffect(function(){F&&E&&F.setMaxLevel(E)},[F,E]),e.useEffect(function(){F&&M&&F.setMinLevel(M)},[F,M]),i(F,"bounds_changed",L),i(F,"center_changed",z),i(F,"click",P),i(F,"dblclick",S),i(F,"drag",A),i(F,"dragstart",W),i(F,"dragend",R),i(F,"idle",D),i(F,"maptypeid_changed",Z),i(F,"mousemove",N),i(F,"rightclick",T),i(F,"tilesloaded",j),i(F,"zoom_changed",_),i(F,"zoom_start",V),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:a,style:s,className:k,ref:B}),F&&o.default.createElement(r.Provider,{value:F},u))},exports.MapInfoWindow=function(t){var n=t.id,a=t.className,i=t.style,r=t.position,l=t.children,c=t.disableAutoPan,f=t.removable,d=t.zIndex,p=t.onCreate,k=s("MapInfoWindow"),m=e.useMemo(function(){return new kakao.maps.LatLng(r.lat,r.lng)},[r.lat,r.lng]);return o.default.createElement(u,{id:n,className:a,style:i,disableAutoPan:c,removable:f,zIndex:d,map:k,position:m,onCreate:p},l)},exports.MapMarker=function(t){var n=t.image,a=t.position,i=t.children,r=t.clickable,u=t.draggable,l=t.infoWindowOptions,f=t.onClick,d=t.onDragEnd,p=t.onDragStart,k=t.onMouseOut,m=t.onMouseOver,v=t.onCreate,g=t.opacity,C=t.title,w=t.zIndex,y=s("MapMarker"),E=e.useMemo(function(){var e,t,o,a,i,r,s,u,l,c,f,d;return n&&new kakao.maps.MarkerImage(n.src,new kakao.maps.Size(n.size.width,n.size.height),{alt:null==(e=n.options)?void 0:e.alt,coords:null==(t=n.options)?void 0:t.coords,offset:(null==(o=n.options)?void 0:o.offset)&&new kakao.maps.Point(null==(a=n.options)?void 0:a.offset.x,null==(i=n.options)?void 0:i.offset.y),shape:null==(r=n.options)?void 0:r.shape,spriteOrigin:(null==(s=n.options)?void 0:s.spriteOrigin)&&new kakao.maps.Point(null==(u=n.options)?void 0:u.spriteOrigin.x,null==(l=n.options)?void 0:l.spriteOrigin.y),spriteSize:(null==(c=n.options)?void 0:c.spriteSize)&&new kakao.maps.Size(null==(f=n.options)?void 0:f.spriteSize.width,null==(d=n.options)?void 0:d.spriteSize.height)})},[n]),M=e.useMemo(function(){return"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):new kakao.maps.Coords(a.x,a.y).toLatLng()},[a.lat,a.lng,a.x,a.y]);return o.default.createElement(c,{map:y,position:M,image:E,clickable:r,draggable:u,infoWindowOptions:l,onClick:f,onDragEnd:d,onDragStart:p,onMouseOut:k,onMouseOver:m,onCreate:v,opacity:g,title:C,zIndex:w},i)},exports.MapTypeControl=function(t){var n=t.position,o=void 0===n?kakao.maps.ControlPosition.TOPRIGHT:n,a=s("MapTypeControl"),i=e.useMemo(function(){return new kakao.maps.MapTypeControl},[]);return e.useEffect(function(){return a.addControl(i,o),function(){a.removeControl(i)}},[a,o]),null},exports.MapTypeId=function(t){var n=t.type,o=s("MapTypeId");return e.useEffect(function(){return o.addOverlayMapTypeId(n),function(){o.removeOverlayMapTypeId(n)}},[o,n]),null},exports.MarkerClusterer=function(t){var n=t.children,a=t.averageCenter,r=t.calculator,u=t.clickable,c=t.disableClickZoom,f=t.gridSize,d=t.hoverable,p=t.minClusterSize,k=t.minLevel,m=t.styles,v=t.texts,g=t.onClusterclick,C=t.onClusterdblclick,w=t.onClustered,y=t.onClusterout,E=t.onClusterover,M=t.onClusterrightclick,h=t.onCreate,x=s("MarkerClusterer"),b=e.useState(),O=b[0],I=b[1];return e.useEffect(function(){if(window.kakao.maps.MarkerClusterer){var e=new kakao.maps.MarkerClusterer({averageCenter:a,calculator:r,clickable:u,disableClickZoom:c,gridSize:f,hoverable:d,minClusterSize:p,minLevel:k,styles:m,texts:v});I(e)}else console.warn("clusterer 라이브러리를 별도 로드 해야 사용 가능합니다. `https://apis.map.kakao.com/web/guide/#loadlibrary`")},[]),e.useEffect(function(){null==O||O.setMap(x)},[x,O]),e.useEffect(function(){O&&h&&h(O)},[O,h]),e.useEffect(function(){O&&f&&(O.setGridSize(f),O.redraw())},[O,f]),e.useEffect(function(){O&&p&&(O.setMinClusterSize(p),O.redraw())},[O,p]),e.useEffect(function(){O&&void 0!==a&&(O.setAverageCenter(a),O.redraw())},[O,a]),e.useEffect(function(){O&&k&&(O.setMinLevel(k),O.redraw())},[O,k]),e.useEffect(function(){O&&v&&(O.setTexts(v),O.redraw())},[O,v]),e.useEffect(function(){O&&r&&(O.setCalculator(r),O.redraw())},[O,r]),e.useEffect(function(){O&&m&&(O.setStyles(m),O.redraw())},[O,m]),i(O,"clusterclick",g),i(O,"clusterover",E),i(O,"clusterout",y),i(O,"clusterdblclick",C),i(O,"clusterrightclick",M),i(O,"clustered",w),O?o.default.createElement(l.Provider,{value:O},n):null},exports.Polygon=function(t){var n=t.path,o=t.onClick,a=t.onMousedown,r=t.onMousemove,u=t.onMouseout,l=t.onMouseover,c=t.onCreate,f=t.strokeColor,d=t.strokeOpacity,p=t.strokeStyle,k=t.strokeWeight,m=t.fillColor,v=t.fillOpacity,g=t.zIndex,C=s("Polygon"),w=e.useMemo(function(){return n.every(function(e){return e instanceof Array})?n.map(function(e){return e.map(function(e){return new kakao.maps.LatLng(e.lat,e.lng)})}):n.map(function(e){return new kakao.maps.LatLng(e.lat,e.lng)})},[n]),y=e.useMemo(function(){return new kakao.maps.Polygon({path:w,fillColor:m,fillOpacity:v,strokeColor:f,strokeOpacity:d,strokeStyle:p,strokeWeight:k,zIndex:g})},[]);return e.useEffect(function(){return y.setMap(C),function(){return y.setMap(null)}},[C,y]),e.useEffect(function(){c&&c(y)},[y,c]),e.useEffect(function(){y.setOptions({fillColor:m,fillOpacity:v,strokeColor:f,strokeOpacity:d,strokeStyle:p,strokeWeight:k})},[y,m,v,f,d,p,k]),e.useEffect(function(){y.setPath(w)},[y,w]),e.useEffect(function(){g&&y.setZIndex(g)},[y,g]),i(y,"mouseover",l),i(y,"mouseout",u),i(y,"mousemove",r),i(y,"mousedown",a),i(y,"click",o),null},exports.Polyline=function(t){var n=t.path,o=t.endArrow,a=t.onClick,r=t.onMousedown,u=t.onMousemove,l=t.onMouseout,c=t.onMouseover,f=t.onCreate,d=t.strokeColor,p=t.strokeOpacity,k=t.strokeStyle,m=t.strokeWeight,v=t.zIndex,g=s("Polyline"),C=e.useMemo(function(){return n.every(function(e){return e instanceof Array})?n.map(function(e){return e.map(function(e){return new kakao.maps.LatLng(e.lat,e.lng)})}):n.map(function(e){return new kakao.maps.LatLng(e.lat,e.lng)})},[n]),w=e.useMemo(function(){return new kakao.maps.Polyline({path:C,endArrow:o,strokeColor:d,strokeOpacity:p,strokeStyle:k,strokeWeight:m,zIndex:v})},[]);return e.useEffect(function(){return w.setMap(g),function(){return w.setMap(null)}},[g,w]),e.useEffect(function(){f&&f(w)},[w,f]),e.useEffect(function(){w.setOptions({endArrow:o,strokeColor:d,strokeOpacity:p,strokeStyle:k,strokeWeight:m})},[w,o,d,p,k,m]),e.useEffect(function(){w.setPath(C)},[w,C]),e.useEffect(function(){v&&w.setZIndex(v)},[w,v]),i(w,"mouseover",c),i(w,"mouseout",l),i(w,"mousemove",u),i(w,"mousedown",r),i(w,"click",a),null},exports.Rectangle=function(t){var n=t.bounds,o=t.onClick,a=t.onMousedown,r=t.onMousemove,u=t.onMouseout,l=t.onMouseover,c=t.onCreate,f=t.strokeColor,d=t.strokeOpacity,p=t.strokeStyle,k=t.strokeWeight,m=t.fillColor,v=t.fillOpacity,g=t.zIndex,C=s("Rectangle"),w=e.useMemo(function(){return new kakao.maps.LatLngBounds(new kakao.maps.LatLng(n.sw.lat,n.sw.lng),new kakao.maps.LatLng(n.ne.lat,n.ne.lng))},[n]),y=e.useMemo(function(){return new kakao.maps.Rectangle({bounds:w,fillColor:m,fillOpacity:v,strokeColor:f,strokeOpacity:d,strokeStyle:p,strokeWeight:k,zIndex:g})},[]);return e.useEffect(function(){return y.setMap(C),function(){return y.setMap(null)}},[C,y]),e.useEffect(function(){c&&c(y)},[y,c]),e.useEffect(function(){y.setOptions({fillColor:m,fillOpacity:v,strokeColor:f,strokeOpacity:d,strokeStyle:p,strokeWeight:k})},[y,m,v,f,d,p,k]),e.useEffect(function(){y.setBounds(w)},[y,w]),e.useEffect(function(){g&&y.setZIndex(g)},[y,g]),i(y,"mouseover",l),i(y,"mouseout",u),i(y,"mousemove",r),i(y,"mousedown",a),i(y,"click",o),null},exports.Roadview=function(t){var n=t.id,a=void 0===n?"kakao-roadview-container":n,r=t.style,s=t.children,u=t.position,l=t.className,c=t.pan,f=t.panoId,p=t.panoX,k=t.panoY,m=t.tilt,v=t.zoom,g=t.onCreate,C=t.onInit,w=t.onPanoidChange,y=t.onPositionChanged,E=t.onViewpointChange,M=t.onErrorGetNearestPanoId,h=e.useState(!0),x=h[0],b=h[1],O=e.useState(),I=O[0],L=O[1],z=e.useRef(null);return e.useEffect(function(){if(window.kakao){if(z.current){var e=new kakao.maps.Roadview(z.current,{pan:c,panoId:f,panoX:p,panoY:k,tilt:m,zoom:v});L(e)}}else console.warn("kakao map javascript api를 먼저 불러와야 합니다. `https://apis.map.kakao.com/web/guide`")},[p,k,v]),e.useEffect(function(){I&&g&&g(I)},[I,g]),e.useEffect(function(){if(I&&!f&&(I.getPosition().getLat()!==u.lat||I.getPosition().getLng()!==u.lng)){var e=new kakao.maps.LatLng(u.lat,u.lng);(new kakao.maps.RoadviewClient).getNearestPanoId(e,u.radius,function(t){null===t&&M?M(I):I.setPanoId(t,e)})}},[I,f,u.lat,u.lng,u.radius,M]),e.useEffect(function(){if(I&&f&&f!==I.getPanoId()&&(I.getPosition().getLat()!==u.lat||I.getPosition().getLng()!==u.lng)){var e=new kakao.maps.LatLng(u.lat,u.lng);I.setPanoId(f,e)}},[I,f,u.lat,u.lng]),e.useEffect(function(){if(I){var e=I.getViewpoint();e.pan===c&&e.tilt===m||(c&&(e.pan=c),m&&(e.tilt=m),I.setViewpoint(e))}},[I,c,m]),i(I,"init",function(e){b(!1),C&&C(e)}),i(I,"panoid_changed",w),i(I,"viewpoint_changed",E),i(I,"position_changed",y),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:a,className:l,style:r,ref:z}),I&&!x&&o.default.createElement(d.Provider,{value:I},s))},exports.RoadviewInfoWindow=function(t){var n=t.id,a=t.className,i=t.style,r=t.position,s=t.children,l=t.altitude,c=t.disableAutoPan,f=t.range,d=t.removable,k=t.zIndex,m=t.onCreate,v=p("RoadviewInfoWindow"),g=e.useMemo(function(){return"lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Viewpoint(r.pan,r.tilt,r.zoom,r.panoId)},[r.lat,r.lng,r.pan,r.tilt,r.zoom,r.panoId]);return o.default.createElement(u,{id:n,className:a,style:i,altitude:l,disableAutoPan:c,range:f,removable:d,zIndex:k,map:v,position:g,onCreate:m},s)},exports.RoadviewMarker=function(t){var n=t.image,a=t.position,i=t.children,r=t.altitude,s=t.clickable,u=t.infoWindowOptions,l=t.onClick,f=t.onDragEnd,d=t.onDragStart,k=t.onMouseOut,m=t.onMouseOver,v=t.onCreate,g=t.opacity,C=t.range,w=t.title,y=t.zIndex,E=p("RoadviewMarker"),M=e.useMemo(function(){var e,t,o,a,i,r,s,u,l,c,f,d;return n&&new kakao.maps.MarkerImage(n.src,new kakao.maps.Size(n.size.width,n.size.height),{alt:null==(e=n.options)?void 0:e.alt,coords:null==(t=n.options)?void 0:t.coords,offset:(null==(o=n.options)?void 0:o.offset)&&new kakao.maps.Point(null==(a=n.options)?void 0:a.offset.x,null==(i=n.options)?void 0:i.offset.y),shape:null==(r=n.options)?void 0:r.shape,spriteOrigin:(null==(s=n.options)?void 0:s.spriteOrigin)&&new kakao.maps.Point(null==(u=n.options)?void 0:u.spriteOrigin.x,null==(l=n.options)?void 0:l.spriteOrigin.y),spriteSize:(null==(c=n.options)?void 0:c.spriteSize)&&new kakao.maps.Size(null==(f=n.options)?void 0:f.spriteSize.width,null==(d=n.options)?void 0:d.spriteSize.height)})},[n]),h=e.useMemo(function(){return"lat"in a?new kakao.maps.LatLng(a.lat,a.lng):"x"in a?new kakao.maps.Coords(a.x,a.y).toLatLng():new kakao.maps.Viewpoint(a.pan,a.tilt,a.zoom,a.panoId)},[a.lat,a.lng,a.x,a.y,a.pan,a.tilt,a.zoom,null==a?void 0:a.panoId]);return o.default.createElement(c,{map:E,position:h,image:M,altitude:r,clickable:s,infoWindowOptions:u,onClick:l,onDragEnd:f,onDragStart:d,onMouseOut:k,onMouseOver:m,onCreate:v,opacity:g,range:C,title:w,zIndex:y},i)},exports.ZoomControl=function(t){var n=t.position,o=void 0===n?kakao.maps.ControlPosition.RIGHT:n,a=s("ZoomControl"),i=e.useMemo(function(){return new kakao.maps.ZoomControl},[]);return e.useEffect(function(){return a.addControl(i,o),function(){a.removeControl(i)}},[a,o]),null},exports.useMap=s,exports.useRoadview=p;
//# sourceMappingURL=index.cjs.map


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-onesignal */ "react-onesignal");
/* harmony import */ var react_onesignal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_onesignal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_admin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/admin */ "./reducers/admin.js");
/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/cart */ "./reducers/cart.js");
/* harmony import */ var _components_Generalui_MapComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Generalui/MapComponent */ "./components/Generalui/MapComponent.js");
/* harmony import */ var _reducers_shop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/shop */ "./reducers/shop.js");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-number-format */ "react-number-format");
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_number_format__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Generalui_Payment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Generalui/Payment */ "./components/Generalui/Payment.js");
/* harmony import */ var _components_Generalui_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Generalui/Modal */ "./components/Generalui/Modal.js");
/* harmony import */ var _components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Generalui/NearAmountToggle */ "./components/Generalui/NearAmountToggle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);



















const Index = () => {
  axios__WEBPACK_IMPORTED_MODULE_5___default.a.defaults.baseURL = `${"https://127.0.0.1:3065"}`;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    0: toggle,
    1: setToggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  const onChangeToggle = () => {
    setToggle(prev => !prev);
  };

  const {
    0: toggleModal,
    1: setToggleModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeToggleModal = () => setToggleModal(prev => !prev);

  const {
    shopCoordinates
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shop);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_7__["LOAD_EVENTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: _reducers_admin__WEBPACK_IMPORTED_MODULE_7__["PAGE_CHANGE_SUCCESS"],
      data: "index"
    });
  }, []);
  const {
    events
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.admin);
  const {
    isLoggedIn,
    session
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    productsNear
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shop);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (session && shopCoordinates == undefined) {
      axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/", {
        id: session.id
      }).then(result => {
        console.log(result);
        dispatch({
          type: _reducers_shop__WEBPACK_IMPORTED_MODULE_10__["SET_SHOPCOORDINATES_SUCCESS"],
          data: result.data
        });
      }).catch(err => console.error(err));
    }
  }, [session, shopCoordinates]);

  const paymentStart = async product => {
    dispatch({
      type: _reducers_cart__WEBPACK_IMPORTED_MODULE_8__["CLEAR_CART_REQUEST"]
    });
    return Object(_components_Generalui_Payment__WEBPACK_IMPORTED_MODULE_12__["onClickPayment"])("single", product, isLoggedIn, session, onChangeToggleModal);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_Generalui_Modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      content: "로그인을 하셔야 합니다.",
      toggleModal: toggleModal,
      onChangeToggleModal: onChangeToggleModal,
      title: "경고"
    }), isLoggedIn && session ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      title: toggle ? "주변 가게" : "추천 메뉴",
      extra: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
        onClick: onChangeToggle
      }),
      children: toggle ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_Generalui_MapComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        session: session,
        shopCoordinates: shopCoordinates
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"], {
        dataSource: productsNear,
        renderItem: product => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item, {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["List"].Item.Meta, {
            avatar: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"], {
              src: product.Images[0] && `${"https://127.0.0.1:3065"}/uploads/${product.Images[0].url}`
            }),
            description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
              title: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Space"], {
                direction: "horizental",
                children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Typography"].Title, {
                  level: 5,
                  children: `[${product.Shop.name}] ${product.title}`
                }), product.Discount && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Tag"], {
                  color: "magenta",
                  children: ["- ", product.Discount.rate, "%"]
                })]
              }),
              actions: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
                style: {
                  cursor: "pointer"
                },
                onClick: () => paymentStart(product),
                children: "\uC989\uC2DC\uAD6C\uB9E4"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
                style: {
                  cursor: "pointer"
                },
                children: "\uC7A5\uBC14\uAD6C\uB2C8"
              })],
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
                description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_Generalui_NearAmountToggle__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    id: product.id,
                    quantity: product.quantity,
                    price: product.price,
                    discount: product.Discount
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Divider"], {
                    orientation: "left",
                    style: {
                      fontSize: "5px"
                    }
                  }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
                    style: {
                      textAlign: "right"
                    },
                    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_0__["Typography"].Text, {
                      children: ["\uCD1D\uC561:", " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(react_number_format__WEBPACK_IMPORTED_MODULE_11___default.a, {
                        value: product.Discount ? product.price * (100 - product.Discount.rate) * 0.01 * product.quantity : product.price * product.quantity,
                        displayType: "text",
                        thousandSeparator: true
                      }), "\uC6D0"]
                    })
                  })]
                })
              })
            })
          })
        })
      })
    }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Card"].Meta, {
        description: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])("div", {
          style: {
            height: "100vh",
            width: "100%"
          },
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Carousel"], {
            autoplay: true,
            dots: false,
            children: events.map(event => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_0__["Image"], {
              onClick: router.push(`/event/${event.id}`),
              style: {
                height: "100vh",
                width: "100%"
              },
              src: `${"https://127.0.0.1:3065"}/uploads/${event.Images[0].url}`
            }))
          })
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./reducers/admin.js":
/*!***************************!*\
  !*** ./reducers/admin.js ***!
  \***************************/
/*! exports provided: LOAD_USERLIST_REQUEST, LOAD_USERLIST_SUCCESS, LOAD_USERLIST_FAILURE, LOAD_SHOPLIST_REQUEST, LOAD_SHOPLIST_SUCCESS, LOAD_SHOPLIST_FAILURE, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, LOAD_EVENTS_REQUEST, LOAD_EVENTS_SUCCESS, LOAD_EVENTS_FAILURE, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_EVENT_FAILURE, EDIT_EVENT_REQUEST, EDIT_EVENT_SUCCESS, EDIT_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_EVENT_FAILURE, PAGE_CHANGE_SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_REQUEST", function() { return LOAD_USERLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_SUCCESS", function() { return LOAD_USERLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERLIST_FAILURE", function() { return LOAD_USERLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_REQUEST", function() { return LOAD_SHOPLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_SUCCESS", function() { return LOAD_SHOPLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_FAILURE", function() { return LOAD_SHOPLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_REQUEST", function() { return DELETE_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_SUCCESS", function() { return DELETE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_USER_FAILURE", function() { return DELETE_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_REQUEST", function() { return LOAD_EVENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_SUCCESS", function() { return LOAD_EVENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_EVENTS_FAILURE", function() { return LOAD_EVENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_REQUEST", function() { return ADD_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_SUCCESS", function() { return ADD_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_FAILURE", function() { return ADD_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_REQUEST", function() { return EDIT_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_SUCCESS", function() { return EDIT_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_EVENT_FAILURE", function() { return EDIT_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_REQUEST", function() { return DELETE_EVENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_SUCCESS", function() { return DELETE_EVENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_EVENT_FAILURE", function() { return DELETE_EVENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_CHANGE_SUCCESS", function() { return PAGE_CHANGE_SUCCESS; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isLoadingShopList: false,
  loadingShopListError: null,
  shopList: [],
  originalShopList: [],
  isLoadingUserList: false,
  loadingUserListError: null,
  userList: [],
  originalUserList: [],
  events: [],
  loadEventsError: null,
  isLoadingEvents: false,
  pageInfo: null
};
const LOAD_USERLIST_REQUEST = 'LOAD_USERLIST_REQUEST';
const LOAD_USERLIST_SUCCESS = 'LOAD_USERLIST_SUCCESS';
const LOAD_USERLIST_FAILURE = 'LOAD_USERLIST_FAILURE';
const LOAD_SHOPLIST_REQUEST = 'LOAD_SHOPLIST_REQUEST';
const LOAD_SHOPLIST_SUCCESS = 'LOAD_SHOPLIST_SUCCESS';
const LOAD_SHOPLIST_FAILURE = 'LOAD_SHOPLIST_FAILURE';
const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST';
const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE';
const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST';
const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS';
const ADD_EVENT_FAILURE = 'ADD_EVENT_FAILURE';
const EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST';
const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS';
const EDIT_EVENT_FAILURE = 'EDIT_EVENT_FAILURE';
const DELETE_EVENT_REQUEST = 'DELETE_EVENT_REQUEST';
const DELETE_EVENT_SUCCESS = 'DELETE_EVENT_SUCCESS';
const DELETE_EVENT_FAILURE = 'DELETE_EVENT_FAILURE';
const PAGE_CHANGE_SUCCESS = 'PAGE_CHANGE_SUCCESS';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_SHOPLIST_REQUEST:
        draft.isLoadingUserList = true;
        break;

      case LOAD_SHOPLIST_SUCCESS:
        draft.isLoadingUserList = false;
        draft.userList = action.data;
        draft.originalUserList = action.data;
        break;

      case LOAD_SHOPLIST_FAILURE:
        draft.isLoadingUserList = false;
        draft.loadingUserListError = action.error;
        break;

      case LOAD_SHOPLIST_REQUEST:
        draft.isLoadingShopList = true;
        break;

      case LOAD_SHOPLIST_SUCCESS:
        draft.isLoadingShopList = false;
        draft.shopList = action.data;
        draft.originalShopList = action.data;
        break;

      case LOAD_SHOPLIST_FAILURE:
        draft.isLoadingShopList = false;
        draft.loadingShopListError = action.error;
        break;

      case PAGE_CHANGE_SUCCESS:
        draft.pageInfo = action.data;
        break;

      default:
        state;
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/cart.js":
/*!**************************!*\
  !*** ./reducers/cart.js ***!
  \**************************/
/*! exports provided: LOAD_CART_REQUEST, LOAD_CART_SUCCESS, LOAD_CART_FAILURE, REMOVE_ITEM_REQUEST, REMOVE_ITEM_SUCCESS, REMOVE_ITEM_FAILURE, ADD_ITEM_QUANTITY_REQUEST, SUBSTRACT_ITEM_QUANTITY_REQUEST, ADD_CART_ITEM_REQUEST, REMOVE_CART_ITEM_REQUEST, CLEAR_CART_REQUEST, GET_SHOP_TABLE_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_REQUEST", function() { return LOAD_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_SUCCESS", function() { return LOAD_CART_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART_FAILURE", function() { return LOAD_CART_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_REQUEST", function() { return REMOVE_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_SUCCESS", function() { return REMOVE_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FAILURE", function() { return REMOVE_ITEM_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ITEM_QUANTITY_REQUEST", function() { return ADD_ITEM_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBSTRACT_ITEM_QUANTITY_REQUEST", function() { return SUBSTRACT_ITEM_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CART_ITEM_REQUEST", function() { return ADD_CART_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CART_ITEM_REQUEST", function() { return REMOVE_CART_ITEM_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART_REQUEST", function() { return CLEAR_CART_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SHOP_TABLE_ID", function() { return GET_SHOP_TABLE_ID; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  cart: [],
  isLoadingCart: false,
  isRemoveingCart: false,
  ShopId: undefined,
  TableId: undefined
};
const LOAD_CART_REQUEST = 'LOAD_CART_REQUEST';
const LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS';
const LOAD_CART_FAILURE = 'LOAD_CART_FAILURE';
const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';
const ADD_ITEM_QUANTITY_REQUEST = 'ADD_ITEM_QUANTITY_REQUEST';
const SUBSTRACT_ITEM_QUANTITY_REQUEST = 'SUBSTRACT_ITEM_QUANTITY_REQUEST';
const ADD_CART_ITEM_REQUEST = 'ADD_CART_ITEM_REQUEST';
const REMOVE_CART_ITEM_REQUEST = 'REMOVE_CART_ITEM_REQUEST';
const CLEAR_CART_REQUEST = 'CLEAR_CART_REQUEST';
const GET_SHOP_TABLE_ID = 'GET_SHOP_TABLE_ID';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case LOAD_CART_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, action.data]
        });
      }

    case LOAD_CART_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case REMOVE_ITEM_REQUEST:
      {
        const items = state.cart.filter(item => item.id !== action.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...items]
        });
      }

    case ADD_CART_ITEM_REQUEST:
      {
        const newProduct = action.product;
        const productIndex = state.cart.findIndex(v => v.id === newProduct.id);

        if (productIndex !== -1) {
          const formerProduct = state.cart[productIndex];

          const finalProduct = _objectSpread(_objectSpread({}, formerProduct), {}, {
            quantity: formerProduct.quantity + newProduct.quantity
          });

          const cartList = [...state.cart.filter(v => v.id !== newProduct.id), finalProduct];
          return _objectSpread(_objectSpread({}, state), {}, {
            cart: cartList
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          cart: [...state.cart, newProduct]
        });
      }

    case ADD_ITEM_QUANTITY_REQUEST:
      {
        const index = state.cart.findIndex(cart => cart.id == action.data.id);
        const product = state.cart[index];
        let quantity = product.quantity;
        quantity < 100 ? quantity += 1 : 99;
        const cart = [...state.cart];
        cart[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          cart
        });
      }

    case SUBSTRACT_ITEM_QUANTITY_REQUEST:
      {
        const index = state.cart.findIndex(cart => cart.id === action.data.id);
        const product = state.cart[index];
        let quantity = product.quantity;
        quantity > 1 ? quantity -= 1 : 1;
        const cart = [...state.cart];
        cart[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          cart
        });
      }

    case CLEAR_CART_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: []
        });
      }

    case GET_SHOP_TABLE_ID:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          ShopId: action.data.ShopId,
          TableId: action.data.TableId
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
});

/***/ }),

/***/ "./reducers/shop.js":
/*!**************************!*\
  !*** ./reducers/shop.js ***!
  \**************************/
/*! exports provided: ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, ADMIN_PRODUCTS_REQUEST, ADMIN_PRODUCTS_SUCCESS, ADMIN_PRODUCTS_FAILURE, SELECT_PRODUCT_REQUEST, SELECT_PRODUCT_SUCCESS, SELECT_PRODUCT_FAILURE, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CHECK_PRODUCT_SUCCESS, CHECK_ALL_PRODUCTS_SUCCESS, DISCOUNT_PRODUCT_REQUEST, DISCOUNT_PRODUCT_SUCCESS, DISCOUNT_PRODUCT_FAILURE, DELETE_DISCOUNT_REQUEST, DELETE_DISCOUNT_SUCCESS, DELETE_DISCOUNT_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, EDIT_CATEGORY_REQUEST, EDIT_CATEGORY_SUCCESS, EDIT_CATEGORY_FAILURE, DELETE_CATEGORY_REQUEST, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, CATEGORY_FILTERED_SUCCESS, LOAD_SHOPLIST_REQUEST, LOAD_SHOPLIST_SUCCESS, LOAD_SHOPLIST_FAILURE, SET_COORDINATES_SUCCESS, SET_SHOPCOORDINATES_SUCCESS, NEAR_ADD_QUANTITY_REQUEST, NEAR_SUBSTRACT_QUANTITY_REQUEST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_REQUEST", function() { return ADD_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_SUCCESS", function() { return ADD_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_FAILURE", function() { return ADD_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_REQUEST", function() { return ADMIN_PRODUCTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_SUCCESS", function() { return ADMIN_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PRODUCTS_FAILURE", function() { return ADMIN_PRODUCTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_REQUEST", function() { return SELECT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_SUCCESS", function() { return SELECT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PRODUCT_FAILURE", function() { return SELECT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_REQUEST", function() { return EDIT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_SUCCESS", function() { return EDIT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_PRODUCT_FAILURE", function() { return EDIT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_REQUEST", function() { return DELETE_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_SUCCESS", function() { return DELETE_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_PRODUCT_FAILURE", function() { return DELETE_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_PRODUCT_SUCCESS", function() { return CHECK_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECK_ALL_PRODUCTS_SUCCESS", function() { return CHECK_ALL_PRODUCTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_REQUEST", function() { return DISCOUNT_PRODUCT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_SUCCESS", function() { return DISCOUNT_PRODUCT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCOUNT_PRODUCT_FAILURE", function() { return DISCOUNT_PRODUCT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_REQUEST", function() { return DELETE_DISCOUNT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_SUCCESS", function() { return DELETE_DISCOUNT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_DISCOUNT_FAILURE", function() { return DELETE_DISCOUNT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_REQUEST", function() { return ADD_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_SUCCESS", function() { return ADD_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CATEGORY_FAILURE", function() { return ADD_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_REQUEST", function() { return EDIT_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_SUCCESS", function() { return EDIT_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_CATEGORY_FAILURE", function() { return EDIT_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_REQUEST", function() { return DELETE_CATEGORY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_SUCCESS", function() { return DELETE_CATEGORY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CATEGORY_FAILURE", function() { return DELETE_CATEGORY_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_FILTERED_SUCCESS", function() { return CATEGORY_FILTERED_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_REQUEST", function() { return LOAD_SHOPLIST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_SUCCESS", function() { return LOAD_SHOPLIST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SHOPLIST_FAILURE", function() { return LOAD_SHOPLIST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COORDINATES_SUCCESS", function() { return SET_COORDINATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SHOPCOORDINATES_SUCCESS", function() { return SET_SHOPCOORDINATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEAR_ADD_QUANTITY_REQUEST", function() { return NEAR_ADD_QUANTITY_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEAR_SUBSTRACT_QUANTITY_REQUEST", function() { return NEAR_SUBSTRACT_QUANTITY_REQUEST; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  shop: null,
  products: [],
  originProducts: [],
  categories: [],
  product: null,
  isAddingFiles: false,
  isLoadingProducts: false,
  isSelectingProduct: false,
  selectingProductError: null,
  isLoadingShopList: false,
  loadingShopListError: null,
  isAddingShop: false,
  userCoordinates: undefined,
  shopCoordinates: undefined,
  productsNear: undefined
};
const ADD_PRODUCT_REQUEST = "ADD_PRODUCT_REQUEST";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";
const ADMIN_PRODUCTS_REQUEST = "ADMIN_PRODUCTS_REQUEST";
const ADMIN_PRODUCTS_SUCCESS = "ADMIN_PRODUCTS_SUCCESS";
const ADMIN_PRODUCTS_FAILURE = "ADMIN_PRODUCTS_FAILURE";
const SELECT_PRODUCT_REQUEST = "SELECT_PRODUCT_REQUEST";
const SELECT_PRODUCT_SUCCESS = "SELECT_PRODUCT_SUCCESS";
const SELECT_PRODUCT_FAILURE = "SELECT_PRODUCT_FAILURE";
const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
const EDIT_PRODUCT_FAILURE = "EDIT_PRODUCT_FAILURE";
const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";
const CHECK_PRODUCT_SUCCESS = "CHECK_PRODUCT_SUCCESS";
const CHECK_ALL_PRODUCTS_SUCCESS = "CHECK_ALL_PRODUCTS_SUCCESS";
const DISCOUNT_PRODUCT_REQUEST = "DISCOUNT_PRODUCT_REQUEST";
const DISCOUNT_PRODUCT_SUCCESS = "DISCOUNT_PRODUCT_SUCCESS";
const DISCOUNT_PRODUCT_FAILURE = "DISCOUNT_PRODUCT_FAILURE";
const DELETE_DISCOUNT_REQUEST = "DELETE_DISCOUNT_REQUEST";
const DELETE_DISCOUNT_SUCCESS = "DELETE_DISCOUNT_SUCCESS";
const DELETE_DISCOUNT_FAILURE = "DELETE_DISCOUNT_FAILURE";
const ADD_CATEGORY_REQUEST = "ADD_CATEGORY_REQUEST";
const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
const ADD_CATEGORY_FAILURE = "ADD_CATEGORY_FAILURE";
const EDIT_CATEGORY_REQUEST = "EDIT_CATEGORY_REQUEST";
const EDIT_CATEGORY_SUCCESS = "EDIT_CATEGORY_SUCCESS";
const EDIT_CATEGORY_FAILURE = "EDIT_CATEGORY_FAILURE";
const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";
const CATEGORY_FILTERED_SUCCESS = "CATEGORY_FILTERED_SUCCESS";
const LOAD_SHOPLIST_REQUEST = "LOAD_SHOPLIST_REQUEST";
const LOAD_SHOPLIST_SUCCESS = "LOAD_SHOPLIST_SUCCESS";
const LOAD_SHOPLIST_FAILURE = "LOAD_SHOPLIST_FAILURE";
const SET_COORDINATES_SUCCESS = "SET_COORDINATES_SUCCESS";
const SET_SHOPCOORDINATES_SUCCESS = "SET_SHOPCOORDINATES_SUCCESS";
const NEAR_ADD_QUANTITY_REQUEST = "NEAR_ADD_QUANTITY_REQUEST";
const NEAR_SUBSTRACT_QUANTITY_REQUEST = "NEAR_SUBSTRACT_QUANTITY_REQUEST";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingFiles: true
        });
      }

    case ADD_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          products: [action.data, ...state.products],
          originProducts: [action.data, ...state.products],
          isAddingFiles: false
        });
      }

    case ADD_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAddingFiles: false
        });
      }

    case ADMIN_PRODUCTS_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: true
        });
      }

    case ADMIN_PRODUCTS_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: false,
          products: action.data[0],
          originProducts: action.data[0],
          categories: action.data[1]
        });
      }

    case ADMIN_PRODUCTS_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingProducts: false
        });
      }

    case SELECT_PRODUCT_REQUEST:
      {
        return _objectSpread({
          isSelectingProduct: true
        }, state);
      }

    case SELECT_PRODUCT_SUCCESS:
      {
        return _objectSpread(_objectSpread({
          isSelectingProduct: false
        }, state), {}, {
          product: action.data
        });
      }

    case SELECT_PRODUCT_FAILURE:
      {
        return _objectSpread(_objectSpread({
          isSelectingProduct: false
        }, state), {}, {
          selectingProductError: action.error
        });
      }

    case EDIT_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case EDIT_PRODUCT_SUCCESS:
      {
        console.log(action.data);
        const index = state.products.findIndex(v => v.id === action.data.id);
        const products = [...state.products];
        products[index] = action.data;
        return _objectSpread(_objectSpread({}, state), {}, {
          products,
          originProducts: products
        });
      }

    case EDIT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_PRODUCT_SUCCESS:
      {
        const products = state.products.filter(v => v.id != action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          products,
          originProducts: products
        });
      }

    case DELETE_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_DISCOUNT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_DISCOUNT_SUCCESS:
      {
        console.log(action.data);
        const filteredProducts = action.data[1] == 0 ? action.data[0] : action.data[0].filter(v => v.Category.id == action.data[1]);
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts,
          originProducts: action.data[0]
        });
      }

    case DELETE_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case CHECK_PRODUCT_SUCCESS:
      {
        const index = state.products.findIndex(v => v.id === action.id);
        const product = state.products[index];
        let checked = product.checked;
        checked = checked ? false : true;
        const products = [...state.products];
        products[index] = _objectSpread(_objectSpread({}, product), {}, {
          checked
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case CHECK_ALL_PRODUCTS_SUCCESS:
      {
        const products = state.products;
        products.map(v => v.checked = action.checked);
        return _objectSpread(_objectSpread({}, state), {}, {
          products
        });
      }

    case DISCOUNT_PRODUCT_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DISCOUNT_PRODUCT_SUCCESS:
      {
        const filteredProducts = action.data[1] !== 0 ? action.data[0].filter(v => v.id == action.data[1]) : action.data[0];
        console.log(action.data[0]);
        return _objectSpread(_objectSpread({}, state), {}, {
          products: filteredProducts,
          originProducts: action.data[0]
        });
      }

    case DISCOUNT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case ADD_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case ADD_CATEGORY_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          categories: [...state.categories, action.data]
        });
      }

    case ADD_CATEGORY_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case EDIT_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case EDIT_CATEGORY_SUCCESS:
      {
        const index = state.categories.findIndex(v => v.id == action.data.id);
        const categories = [...state.categories];
        categories[index] = action.data;
        return _objectSpread(_objectSpread({}, state), {}, {
          categories
        });
      }

    case EDIT_CATEGORY_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case DELETE_CATEGORY_REQUEST:
      {
        return _objectSpread({}, state);
      }

    case DELETE_CATEGORY_SUCCESS:
      {
        const filteredCategories = state.categories.filter(v => v.id !== action.data.id);
        const products = state.originProducts.filter(v => v.Category.id !== action.data.id);
        return _objectSpread(_objectSpread({}, state), {}, {
          categories: filteredCategories,
          products,
          originProducts: products
        });
      }

    case DISCOUNT_PRODUCT_FAILURE:
      {
        return _objectSpread({}, state);
      }

    case CATEGORY_FILTERED_SUCCESS:
      {
        if (action.id == 0) {
          return _objectSpread(_objectSpread({}, state), {}, {
            products: state.originProducts
          });
        } else if (action.id == -1) {
          const discountedProduct = state.originProducts.filter(v => v.Discount !== null);
          return _objectSpread(_objectSpread({}, state), {}, {
            products: discountedProduct
          });
        } else {
          const filteredProducts = state.originProducts.filter(v => v.Category.id == action.id);
          return _objectSpread(_objectSpread({}, state), {}, {
            products: filteredProducts
          });
        }
      }

    case LOAD_SHOPLIST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingShopList: true
        });
      }

    case LOAD_SHOPLIST_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          shopList: action.data,
          isLoadingShopList: false
        });
      }

    case LOAD_SHOPLIST_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoadingShopList: false,
          lodingShopListError: action.error
        });
      }

    case SET_COORDINATES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        userCoordinates: action.data
      });

    case SET_SHOPCOORDINATES_SUCCESS:
      {
        console.log(action.data);
        return _objectSpread(_objectSpread({}, state), {}, {
          shopCoordinates: action.data.list,
          productsNear: action.data.products
        });
      }

    case NEAR_ADD_QUANTITY_REQUEST:
      {
        console.log(state.productsNear);
        const index = state.productsNear.findIndex(near => near.id == action.data.id);
        console.log(index);
        const product = state.productsNear[index];
        let quantity = product.quantity;
        quantity < 100 ? quantity += 1 : 99;
        const productsNear = [...state.productsNear];
        productsNear[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          productsNear
        });
      }

    case NEAR_SUBSTRACT_QUANTITY_REQUEST:
      {
        const index = state.productsNear.findIndex(near => near.id === action.data.id);
        const product = state.productsNear[index];
        let quantity = product.quantity;
        quantity > 1 ? quantity -= 1 : 1;
        const productsNear = [...state.productsNear];
        productsNear[index] = _objectSpread(_objectSpread({}, product), {}, {
          quantity
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          productsNear
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-number-format":
/*!**************************************!*\
  !*** external "react-number-format" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),

/***/ "react-onesignal":
/*!**********************************!*\
  !*** external "react-onesignal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-onesignal");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvTWFwQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL01vZGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2VuZXJhbHVpL05lYXJBbW91bnRUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZW5lcmFsdWkvUGF5bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qta2FrYW8tbWFwcy1zZGsvbGliL2luZGV4LmNqcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9hZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1udW1iZXItZm9ybWF0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb25lc2lnbmFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIl0sIm5hbWVzIjpbIk1hcENvbXBvbmVudCIsInNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VyQ29vcmRpbmF0ZXMiLCJzaG9wQ29vcmRpbmF0ZXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcCIsImNlbnRlckNvb3JkaW5hdGVzIiwic2V0Q2VudGVyQ29vcmRpbmF0ZXMiLCJ1c2VTdGF0ZSIsImxhdCIsImxuZyIsInVzZUVmZmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2aXNpb24iLCJuYW1lIiwiaWQiLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHQiLCJpbmRleCIsImlkcyIsIlNob3BzIiwiZmlsdGVyIiwidiIsIlNob3BJZCIsImxvY2F0aW9uIiwiY29vcmRpbmF0ZXMiLCJjdXJzb3IiLCJwdXNoIiwiTW9kYWxJbnRlcmZhY2UiLCJjb250ZW50IiwidG9nZ2xlTW9kYWwiLCJvbkNoYW5nZVRvZ2dsZU1vZGFsIiwidGl0bGUiLCJOZWFyQW1vdW50VG9nZ2xlIiwicXVhbnRpdHkiLCJwcmljZSIsImRpc2NvdW50IiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvbkNsaWNrQWRkIiwidHlwZSIsIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QiLCJkYXRhIiwiZSIsIm9uQ2xpY2tTdWJzdHJhY3QiLCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUIiwiZGlzcGxheSIsInJhdGUiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwib25DbGlja1BheW1lbnQiLCJwcm9kdWN0IiwiaXNMb2dnZWRJbiIsImNhcnQiLCJUYWJsZUlkIiwib25XaW5kb3dTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsIm9yaWdpbkRhdGEiLCJhbW91bnQiLCJVc2VySWQiLCJVc2VyTmFtZSIsIlByb2R1Y3RJZCIsIlNob3AiLCJTaG9wTmFtZSIsIlByb2R1Y3RUaXRsZSIsIkRpc2NvdW50IiwiY3VzdG9tX2RhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiSU1QIiwiaW5pdCIsInByb2Nlc3MiLCJ0b2RheSIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0X3BheSIsInBheV9tZXRob2QiLCJNZXJjaGFudF91aWQiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJtZXJjaGFudF91aWQiLCJlcnJvcl9tc2ciLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiQ0xFQVJfQ0FSVF9SRVFVRVNUIiwidW5kZWZpbmVkIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImFsZXJ0IiwiSW5kZXgiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJvbkNoYW5nZVRvZ2dsZSIsInByZXYiLCJzZXRUb2dnbGVNb2RhbCIsIkxPQURfRVZFTlRTX1JFUVVFU1QiLCJQQUdFX0NIQU5HRV9TVUNDRVNTIiwiZXZlbnRzIiwiYWRtaW4iLCJ1c2VyIiwicHJvZHVjdHNOZWFyIiwiU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTIiwicGF5bWVudFN0YXJ0IiwiSW1hZ2VzIiwidXJsIiwiZm9udFNpemUiLCJldmVudCIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZ1Nob3BMaXN0IiwibG9hZGluZ1Nob3BMaXN0RXJyb3IiLCJzaG9wTGlzdCIsIm9yaWdpbmFsU2hvcExpc3QiLCJpc0xvYWRpbmdVc2VyTGlzdCIsImxvYWRpbmdVc2VyTGlzdEVycm9yIiwidXNlckxpc3QiLCJvcmlnaW5hbFVzZXJMaXN0IiwibG9hZEV2ZW50c0Vycm9yIiwiaXNMb2FkaW5nRXZlbnRzIiwicGFnZUluZm8iLCJMT0FEX1VTRVJMSVNUX1JFUVVFU1QiLCJMT0FEX1VTRVJMSVNUX1NVQ0NFU1MiLCJMT0FEX1VTRVJMSVNUX0ZBSUxVUkUiLCJMT0FEX1NIT1BMSVNUX1JFUVVFU1QiLCJMT0FEX1NIT1BMSVNUX1NVQ0NFU1MiLCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkUiLCJERUxFVEVfVVNFUl9SRVFVRVNUIiwiREVMRVRFX1VTRVJfU1VDQ0VTUyIsIkRFTEVURV9VU0VSX0ZBSUxVUkUiLCJMT0FEX0VWRU5UU19TVUNDRVNTIiwiTE9BRF9FVkVOVFNfRkFJTFVSRSIsIkFERF9FVkVOVF9SRVFVRVNUIiwiQUREX0VWRU5UX1NVQ0NFU1MiLCJBRERfRVZFTlRfRkFJTFVSRSIsIkVESVRfRVZFTlRfUkVRVUVTVCIsIkVESVRfRVZFTlRfU1VDQ0VTUyIsIkVESVRfRVZFTlRfRkFJTFVSRSIsIkRFTEVURV9FVkVOVF9SRVFVRVNUIiwiREVMRVRFX0VWRU5UX1NVQ0NFU1MiLCJERUxFVEVfRVZFTlRfRkFJTFVSRSIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJpc0xvYWRpbmdDYXJ0IiwiaXNSZW1vdmVpbmdDYXJ0IiwiTE9BRF9DQVJUX1JFUVVFU1QiLCJMT0FEX0NBUlRfU1VDQ0VTUyIsIkxPQURfQ0FSVF9GQUlMVVJFIiwiUkVNT1ZFX0lURU1fUkVRVUVTVCIsIlJFTU9WRV9JVEVNX1NVQ0NFU1MiLCJSRU1PVkVfSVRFTV9GQUlMVVJFIiwiQUREX0lURU1fUVVBTlRJVFlfUkVRVUVTVCIsIlNVQlNUUkFDVF9JVEVNX1FVQU5USVRZX1JFUVVFU1QiLCJBRERfQ0FSVF9JVEVNX1JFUVVFU1QiLCJSRU1PVkVfQ0FSVF9JVEVNX1JFUVVFU1QiLCJHRVRfU0hPUF9UQUJMRV9JRCIsIml0ZW1zIiwiaXRlbSIsIm5ld1Byb2R1Y3QiLCJwcm9kdWN0SW5kZXgiLCJmaW5kSW5kZXgiLCJmb3JtZXJQcm9kdWN0IiwiZmluYWxQcm9kdWN0IiwiY2FydExpc3QiLCJwcm9kdWN0cyIsIm9yaWdpblByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsImlzQWRkaW5nRmlsZXMiLCJpc0xvYWRpbmdQcm9kdWN0cyIsImlzU2VsZWN0aW5nUHJvZHVjdCIsInNlbGVjdGluZ1Byb2R1Y3RFcnJvciIsImlzQWRkaW5nU2hvcCIsIkFERF9QUk9EVUNUX1JFUVVFU1QiLCJBRERfUFJPRFVDVF9TVUNDRVNTIiwiQUREX1BST0RVQ1RfRkFJTFVSRSIsIkFETUlOX1BST0RVQ1RTX1JFUVVFU1QiLCJBRE1JTl9QUk9EVUNUU19TVUNDRVNTIiwiQURNSU5fUFJPRFVDVFNfRkFJTFVSRSIsIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1QiLCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTIiwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSIsIkVESVRfUFJPRFVDVF9SRVFVRVNUIiwiRURJVF9QUk9EVUNUX1NVQ0NFU1MiLCJFRElUX1BST0RVQ1RfRkFJTFVSRSIsIkRFTEVURV9QUk9EVUNUX1JFUVVFU1QiLCJERUxFVEVfUFJPRFVDVF9TVUNDRVNTIiwiREVMRVRFX1BST0RVQ1RfRkFJTFVSRSIsIkNIRUNLX1BST0RVQ1RfU1VDQ0VTUyIsIkNIRUNLX0FMTF9QUk9EVUNUU19TVUNDRVNTIiwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUIiwiRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTIiwiRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFIiwiREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QiLCJERUxFVEVfRElTQ09VTlRfU1VDQ0VTUyIsIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFIiwiQUREX0NBVEVHT1JZX1JFUVVFU1QiLCJBRERfQ0FURUdPUllfU1VDQ0VTUyIsIkFERF9DQVRFR09SWV9GQUlMVVJFIiwiRURJVF9DQVRFR09SWV9SRVFVRVNUIiwiRURJVF9DQVRFR09SWV9TVUNDRVNTIiwiRURJVF9DQVRFR09SWV9GQUlMVVJFIiwiREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QiLCJERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyIsIkRFTEVURV9DQVRFR09SWV9GQUlMVVJFIiwiQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUyIsIlNFVF9DT09SRElOQVRFU19TVUNDRVNTIiwiZmlsdGVyZWRQcm9kdWN0cyIsIkNhdGVnb3J5IiwiY2hlY2tlZCIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsImRpc2NvdW50ZWRQcm9kdWN0IiwibG9kaW5nU2hvcExpc3RFcnJvciIsImxpc3QiLCJuZWFyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQjtBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxtQkFBRjtBQUFtQkM7QUFBbkIsTUFBdUNDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxJQUFsQixDQUF4RDtBQUVBLFFBQU07QUFBQSxPQUFDQyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q0Msc0RBQVEsQ0FBQztBQUN6REMsT0FBRyxFQUFFWCxPQUFPLENBQUNXLEdBRDRDO0FBRXpEQyxPQUFHLEVBQUVaLE9BQU8sQ0FBQ1k7QUFGNEMsR0FBRCxDQUExRDtBQUtBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJVixlQUFKLEVBQXFCO0FBQ25CLGFBQU9NLG9CQUFvQixDQUFDO0FBQUVFLFdBQUcsRUFBRVIsZUFBZSxDQUFDLENBQUQsQ0FBdEI7QUFBMkJTLFdBQUcsRUFBRVQsZUFBZSxDQUFDLENBQUQ7QUFBL0MsT0FBRCxDQUEzQjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLGVBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UsK0RBQUMsd0RBQUQ7QUFBSyxVQUFNLEVBQUVLLGlCQUFiO0FBQWdDLFNBQUssRUFBRTtBQUFFTSxXQUFLLEVBQUUsTUFBVDtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQXZDO0FBQTJFLFNBQUssRUFBRSxDQUFsRjtBQUFBLGVBQ0dmLE9BQU8sSUFBSUEsT0FBTyxDQUFDZ0IsUUFBUixLQUFxQixLQUFoQyxpQkFDQyw4REFBQyxxRUFBRDtBQUFtQyxjQUFRLEVBQUU7QUFBRUwsV0FBRyxFQUFFWCxPQUFPLENBQUNXLEdBQWY7QUFBb0JDLFdBQUcsRUFBRVosT0FBTyxDQUFDWTtBQUFqQyxPQUE3QztBQUFBLDZCQUNFLDhEQUFDLHdDQUFEO0FBQUEsa0JBQXVCWixPQUFPLElBQUlBLE9BQU8sQ0FBQ2lCO0FBQTFDLFNBQVVqQixPQUFPLENBQUNrQixFQUFsQjtBQURGLE9BQXVCbEIsT0FBTyxDQUFDa0IsRUFBL0IsQ0FGSixFQU1HZCxlQUFlLElBQ2RBLGVBQWUsQ0FBQ2UsTUFBaEIsR0FBeUIsQ0FEMUIsSUFFQ2YsZUFBZSxDQUFDZ0IsR0FBaEIsQ0FBb0IsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEtBQW1CO0FBQ3JDLFlBQU1DLEdBQUcsR0FBR3ZCLE9BQU8sQ0FBQ3dCLEtBQVIsQ0FBY0MsTUFBZCxDQUFzQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNSLEVBQUYsSUFBUUcsTUFBTSxDQUFDTSxNQUEzQyxDQUFaO0FBQ0EsMEJBQ0UsOERBQUMscUVBQUQ7QUFDRSxnQkFBUSxFQUFFO0FBQ1JoQixhQUFHLEVBQUVVLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQkMsV0FBaEIsQ0FBNEIsQ0FBNUIsQ0FERztBQUVSakIsYUFBRyxFQUFFUyxNQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLFdBQWhCLENBQTRCLENBQTVCO0FBRkcsU0FEWjtBQUFBLCtCQU9FLDhEQUFDLHdDQUFEO0FBRUUsZUFBSyxFQUFFO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUZUO0FBR0UsZUFBSyxFQUFFUCxHQUFHLENBQUNKLE1BQUosS0FBZSxDQUFmLEdBQW1CLElBQW5CLEdBQTBCLFNBSG5DO0FBSUUsaUJBQU8sRUFBRSxNQUFNO0FBQ2IsZ0JBQUlJLEdBQUcsQ0FBQ0osTUFBSixJQUFjLENBQWxCLEVBQXFCO0FBQ25CLHFCQUFPbEIsTUFBTSxDQUFDOEIsSUFBUCxDQUFhLFNBQVFWLE1BQU0sQ0FBQ00sTUFBTyxFQUFuQyxDQUFQO0FBQ0QsYUFGRCxNQUVPO0FBQ0wscUJBQU8xQixNQUFNLENBQUM4QixJQUFQLENBQWEsYUFBYixDQUFQO0FBQ0Q7QUFDRixXQVZIO0FBQUEsb0JBWUdWLE1BQU0sQ0FBQ0o7QUFaVixXQUNPSyxLQURQO0FBUEYsU0FLT0QsTUFBTSxDQUFDSCxFQUxkLENBREY7QUF3QkQsS0ExQkQsQ0FSSjtBQUFBLElBREY7QUFzQ0QsQ0FyREQ7O0FBdURlbkIsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBRUEsTUFBTWlDLGNBQWMsR0FBRyxDQUFDO0FBQ3RCQyxTQURzQjtBQUV0QkMsYUFGc0I7QUFHdEJDLHFCQUhzQjtBQUl0QkM7QUFKc0IsQ0FBRCxLQUtqQjtBQUNKLHNCQUNFLDhEQUFDLDBDQUFEO0FBQ0UsU0FBSyxFQUFFQSxLQUFLLEdBQUdBLEtBQUgsR0FBVyxJQUR6QjtBQUVFLFdBQU8sRUFBRUYsV0FGWDtBQUdFLFlBQVEsRUFBRUMsbUJBSFo7QUFJRSxVQUFNLEVBQUUsSUFKVjtBQUFBLGNBTUdGO0FBTkgsSUFERjtBQVVELENBaEJEOztBQWtCZUQsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUVuQixJQUFGO0FBQU1vQixVQUFOO0FBQWdCQyxPQUFoQjtBQUF1QkM7QUFBdkIsQ0FBRCxLQUF1QztBQUM5REMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQSxRQUFNSyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQUk7QUFDRkYsY0FBUSxDQUFDO0FBQUVHLFlBQUksRUFBRUMsd0VBQVI7QUFBbUNDLFlBQUksRUFBRTtBQUFFOUI7QUFBRjtBQUF6QyxPQUFELENBQVI7QUFDRCxLQUZELENBRUUsT0FBTytCLENBQVAsRUFBVTtBQUNWUixhQUFPLENBQUNDLEdBQVIsQ0FBWU8sQ0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFPQSxRQUFNQyxnQkFBZ0IsR0FBRyxNQUFNO0FBQzdCUCxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFSyw4RUFBUjtBQUF5Q0gsVUFBSSxFQUFFO0FBQUU5QjtBQUFGO0FBQS9DLEtBQUQsQ0FBUjtBQUNELEdBRkQ7O0FBR0F1QixTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLHNCQUNFLCtEQUFDLHdDQUFEO0FBQUEsNEJBQ0UsOERBQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsRUFBWDtBQUFBLDZCQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVZLGlCQUFPLEVBQUU7QUFBWCxTQUFaO0FBQUEsMENBQ08sR0FEUCxlQUVFLDhEQUFDLDBEQUFEO0FBQ0UsMkJBQWlCLEVBQUUsSUFEckI7QUFFRSxlQUFLLEVBQUViLEtBQUssSUFBSSxDQUFDLE1BQU1DLFFBQVEsQ0FBQ2EsSUFBaEIsSUFBd0IsSUFBNUIsQ0FGZDtBQUdFLHFCQUFXLEVBQUU7QUFIZixVQUZGO0FBQUE7QUFERixNQURGLGVBWUUsOERBQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFjLFdBQUssRUFBRTtBQUFFQyxpQkFBUyxFQUFFO0FBQWIsT0FBckI7QUFBQSw2QkFDRSw4REFBQywwQ0FBRDtBQUNFLGFBQUssRUFBRTtBQUNMQSxtQkFBUyxFQUFFLFFBRE47QUFFTEMsdUJBQWEsRUFBRTtBQUZWLFNBRFQ7QUFLRSxhQUFLLEVBQUVqQixRQUxUO0FBTUUsWUFBSSxFQUFFLE9BTlI7QUFPRSxnQkFBUSxNQVBWO0FBUUUsaUJBQVMsRUFBRSxDQVJiO0FBU0UsbUJBQVcsZUFBRSw4REFBQyw4REFBRDtBQUFjLGlCQUFPLEVBQUVPO0FBQXZCLFVBVGY7QUFVRSxrQkFBVSxlQUFFLDhEQUFDLCtEQUFEO0FBQWUsaUJBQU8sRUFBRUs7QUFBeEI7QUFWZDtBQURGLE1BWkY7QUFBQSxJQURGO0FBNkJELENBM0NEOztBQTZDZWIsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTW1CLGNBQWMsR0FBRyxDQUM1QlYsSUFENEIsRUFFNUJXLE9BRjRCLEVBRzVCQyxVQUg0QixFQUk1QjFELE9BSjRCLEVBSzVCbUMsbUJBTDRCLEVBTTVCUSxRQU40QixFQU81QmdCLElBUDRCLEVBUTVCMUQsTUFSNEIsRUFTNUIwQixNQVQ0QixFQVU1QmlDLE9BVjRCLEtBV3pCO0FBQ0gsUUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0JDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQjtBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFoQjtBQUNELEdBRkQ7O0FBSUEsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSWpELElBQUo7O0FBQ0EsTUFBSXlDLFVBQUosRUFBZ0I7QUFDZCxRQUFJWixJQUFJLElBQUksUUFBWixFQUFzQjtBQUNwQm1CLGdCQUFVLEdBQUc7QUFDWEUsY0FBTSxFQUFFbkUsT0FBTyxDQUFDa0IsRUFETDtBQUVYa0QsZ0JBQVEsRUFBRXBFLE9BQU8sQ0FBQ2lCLElBRlA7QUFHWG9ELGlCQUFTLEVBQUVaLE9BQU8sQ0FBQ3ZDLEVBSFI7QUFJWFMsY0FBTSxFQUFFOEIsT0FBTyxDQUFDYSxJQUFSLENBQWFwRCxFQUpWO0FBS1hxQixhQUFLLEVBQUVrQixPQUFPLENBQUNqQixRQUFSLEdBQ0hpQixPQUFPLENBQUNsQixLQUFSLElBQWlCLE1BQU1rQixPQUFPLENBQUNqQixRQUEvQixJQUEyQyxJQUEzQyxHQUFrRGlCLE9BQU8sQ0FBQ25CLFFBRHZELEdBRUhtQixPQUFPLENBQUNsQixLQUFSLEdBQWdCa0IsT0FBTyxDQUFDbkIsUUFQakI7QUFRWEEsZ0JBQVEsRUFBRW1CLE9BQU8sQ0FBQ25CLFFBUlA7QUFTWGlDLGdCQUFRLEVBQUVkLE9BQU8sQ0FBQ2EsSUFBUixDQUFhckQsSUFUWjtBQVVYdUQsb0JBQVksRUFBRWYsT0FBTyxDQUFDckI7QUFWWCxPQUFiO0FBWUQsS0FiRCxNQWFPO0FBQ0x1QixVQUFJLENBQUN2QyxHQUFMLENBQ0dxQyxPQUFELElBQ0dTLE1BQU0sSUFBSVQsT0FBTyxDQUFDZ0IsUUFBUixHQUNQaEIsT0FBTyxDQUFDbEIsS0FBUixJQUNDLE1BQU1rQixPQUFPLENBQUNnQixRQUFSLENBQWlCcEIsSUFEeEIsSUFFQSxJQUZBLEdBR0FJLE9BQU8sQ0FBQ25CLFFBSkQsR0FLUG1CLE9BQU8sQ0FBQ2xCLEtBQVIsR0FBZ0JrQixPQUFPLENBQUNuQixRQVBoQztBQVNBckIsVUFBSSxHQUNGMEMsSUFBSSxDQUFDeEMsTUFBTCxHQUFjLENBQWQsR0FDSyxHQUFFc0MsT0FBTyxDQUFDckIsS0FBTSxNQUFLdUIsSUFBSSxDQUFDeEMsTUFBTCxHQUFjLENBQUUsSUFEMUMsR0FFSXNDLE9BQU8sQ0FBQ3JCLEtBSGQ7QUFJQTZCLGdCQUFVLEdBQUdOLElBQUksQ0FBQ3ZDLEdBQUwsQ0FBVXFDLE9BQUQsSUFBYTtBQUNqQyxlQUFPO0FBQ0xZLG1CQUFTLEVBQUVaLE9BQU8sQ0FBQ3ZDLEVBRGQ7QUFFTFMsZ0JBQU0sRUFBRThCLE9BQU8sQ0FBQ2EsSUFBUixDQUFhcEQsRUFGaEI7QUFHTGlELGdCQUFNLEVBQUVuRSxPQUFPLENBQUNrQixFQUhYO0FBSUxrRCxrQkFBUSxFQUFFcEUsT0FBTyxDQUFDaUIsSUFKYjtBQUtMc0IsZUFBSyxFQUFFa0IsT0FBTyxDQUFDZ0IsUUFBUixHQUNIaEIsT0FBTyxDQUFDbEIsS0FBUixJQUFpQixNQUFNa0IsT0FBTyxDQUFDZ0IsUUFBUixDQUFpQnBCLElBQXhDLElBQWdELElBRDdDLEdBRUhJLE9BQU8sQ0FBQ2xCLEtBUFA7QUFRTEQsa0JBQVEsRUFBRW1CLE9BQU8sQ0FBQ25CLFFBUmI7QUFTTGlDLGtCQUFRLEVBQUVkLE9BQU8sQ0FBQ2EsSUFBUixDQUFhckQsSUFUbEI7QUFVTHVELHNCQUFZLEVBQUVmLE9BQU8sQ0FBQ3JCO0FBVmpCLFNBQVA7QUFZRCxPQWJZLENBQWI7QUFjRDs7QUFFRCxVQUFNc0MsV0FBVyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FDbEI5QixJQUFJLElBQUksUUFBUixHQUFtQixDQUFDbUIsVUFBRCxDQUFuQixHQUFrQ0EsVUFEaEIsQ0FBcEI7O0FBSUEsUUFBSVksR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJoQixvQkFBYztBQUNkZ0IsU0FBRyxDQUFDQyxJQUFKLENBQVNDLGFBQVQ7QUFDQSxZQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFkO0FBQ0FMLFNBQUcsQ0FBQ00sV0FBSixDQUNFO0FBQ0VDLGtCQUFVLEVBQUUsTUFEZDtBQUVFbkUsWUFBSSxFQUFFNkIsSUFBSSxLQUFLLE1BQVQsR0FBa0JXLE9BQU8sQ0FBQ3JCLEtBQTFCLEdBQWtDbkIsSUFGMUM7QUFHRW9FLG9CQUFZLEVBQUUsUUFBUUwsS0FIeEI7QUFJRWQsY0FBTSxFQUNKcEIsSUFBSSxLQUFLLE1BQVQsR0FDSVcsT0FBTyxDQUFDZ0IsUUFBUixHQUNFaEIsT0FBTyxDQUFDbEIsS0FBUixJQUNDLE1BQU1rQixPQUFPLENBQUNnQixRQUFSLENBQWlCcEIsSUFEeEIsSUFFQSxJQUZBLEdBR0FJLE9BQU8sQ0FBQ25CLFFBSlYsR0FLRW1CLE9BQU8sQ0FBQ2xCLEtBQVIsR0FBZ0JrQixPQUFPLENBQUNuQixRQU45QixHQU9JNEIsTUFaUjtBQWFFUTtBQWJGLE9BREYsRUFnQkdZLFFBQUQsSUFBYztBQUNaLGNBQU07QUFBRUMsaUJBQUY7QUFBV0Msc0JBQVg7QUFBeUJDO0FBQXpCLFlBQXVDSCxRQUE3Qzs7QUFDQSxZQUFJQyxPQUFKLEVBQWE7QUFDWEcsc0RBQUssQ0FDRkMsSUFESCxDQUNTLEdBQUVaLHdCQUF1QixvQkFEbEMsRUFDdUQ7QUFDbkQvQixnQkFBSSxFQUFFc0M7QUFENkMsV0FEdkQsRUFJR00sSUFKSCxDQUlTQyxHQUFELElBQVM7QUFDYnBELG1CQUFPLENBQUNDLEdBQVIsQ0FDRyxTQUFRSSxJQUFLLGFBQVluQixNQUFPLGNBQWFpQyxPQUFRLEVBRHhEO0FBR0FqQixvQkFBUSxDQUFDO0FBQUVHLGtCQUFJLEVBQUVnRCxpRUFBa0JBO0FBQTFCLGFBQUQsQ0FBUjs7QUFDQSxnQkFBSWhELElBQUksSUFBSSxNQUFaLEVBQW9CO0FBQ2xCN0Msb0JBQU0sQ0FBQzhCLElBQVAsQ0FDRTZCLE9BQU8sS0FBS21DLFNBQVosR0FDSyxTQUFRcEUsTUFBTyxFQURwQixHQUVLLFNBQVFBLE1BQU8sSUFBR2lDLE9BQVEsRUFIakM7QUFLRDtBQUNGLFdBaEJILEVBaUJHb0MsS0FqQkgsQ0FpQlVDLEdBQUQsSUFBUztBQUNkLG1CQUFPeEQsT0FBTyxDQUFDeUQsS0FBUixDQUFjRCxHQUFkLENBQVA7QUFDRCxXQW5CSDtBQW9CRCxTQXJCRCxNQXFCTztBQUNMRSxlQUFLLENBQUUsVUFBU1YsU0FBVSxFQUFyQixDQUFMO0FBQ0Q7QUFDRixPQTFDSDtBQTRDRDtBQUNGLEdBakdELE1BaUdPO0FBQ0x0RCx1QkFBbUI7QUFDcEI7QUFDRixDQXZITSxDOzs7Ozs7Ozs7OztBQ0hQLE1BQU0sbUJBQU8sQ0FBQyxvQkFBTyxJQUFJLG1CQUFPLENBQUMsNEJBQVcsRUFBRSxjQUFjLCtDQUErQyxXQUFXLDhEQUE4RCx1QkFBdUIsU0FBUyxpQkFBaUIsK0JBQStCLHNEQUFzRCxzREFBc0QseUNBQXlDLFVBQVUsaURBQWlELHNCQUFzQix1RkFBdUYsU0FBUyxlQUFlLGlPQUFpTyxpQ0FBaUMsc0ZBQXNGLEVBQUUsNkNBQTZDLFFBQVEsOEJBQThCLDhCQUE4QixXQUFXLCtCQUErQixRQUFRLCtCQUErQixvQkFBb0IsK0JBQStCLHVCQUF1QiwrQkFBK0Isb0JBQW9CLCtCQUErQixxQkFBcUIsK0JBQStCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLDZCQUE2QixxQ0FBcUMsV0FBVyxLQUFLLFdBQVcsNEJBQTRCLDBDQUEwQyxpREFBaUQseVJBQXlSLDhCQUE4Qix5RkFBeUYsRUFBRSxLQUFLLDhCQUE4QiwrQ0FBK0Msb0NBQW9DLGlDQUFpQyxRQUFRLHVIQUF1SCwwQkFBMEIsaUNBQWlDLHVCQUF1QixpQ0FBaUMsMEJBQTBCLGlDQUFpQyxvQ0FBb0MsaUNBQWlDLG9DQUFvQyxpQ0FBaUMseUJBQXlCLGlDQUFpQyx1QkFBdUIsaUNBQWlDLHVCQUF1QixpQ0FBaUMsd0JBQXdCLHVDQUF1QyxzU0FBc1MsVUFBVSxnQkFBZ0IsOENBQThDLHVCQUF1QixPQUFPLG9EQUFvRCxzQkFBc0IsaUdBQWlHLFVBQVUsb0NBQW9DLDhFQUE4RSxvQ0FBb0MsUUFBUSxrQkFBa0IsTUFBTSw2REFBNkQseUZBQXlGLHFDQUFxQyxVQUFVLDhCQUE4Qiw4QkFBOEIsZ0JBQWdCLCtCQUErQixRQUFRLGFBQWEsNEJBQTRCLG1RQUFtUSwwQ0FBMEMsdUNBQXVDLDhCQUE4QixnSEFBZ0gsRUFBRSxLQUFLLDhCQUE4Qiw4QkFBOEIsZ0JBQWdCLCtCQUErQixRQUFRLCtCQUErQixvQkFBb0IsK0JBQStCLGVBQWUsK0JBQStCLGtCQUFrQiwrQkFBK0IsY0FBYyxxRkFBcUYsRUFBRSxpSEFBaUgsc0NBQXNDLHNPQUFzTywwQ0FBMEMsdUNBQXVDLHFDQUFxQyxzRUFBc0UsRUFBRSxVQUFVLDhCQUE4QixvREFBb0Qsb0NBQW9DLGlDQUFpQyxRQUFRLCtCQUErQixpQkFBaUIsK0JBQStCLGtCQUFrQiwrQkFBK0Isb0JBQW9CLDZCQUE2QiwyQkFBMkIsNkJBQTZCLHFDQUFxQyxXQUFXLEtBQUssV0FBVyw0QkFBNEIsMENBQTBDLDJDQUEyQyw0UEFBNFAsMEdBQTBHLG9FQUFvRSxxQ0FBcUMsc0VBQXNFLEVBQUUsVUFBVSw4QkFBOEIsTUFBTSxrQkFBa0IsNkVBQTZFLGtCQUFrQixrQkFBa0IsaUJBQWlCLCtCQUErQixRQUFRLCtCQUErQixpQkFBaUIsK0JBQStCLGtCQUFrQiwrQkFBK0Isb0JBQW9CLCtCQUErQixpQkFBaUIsK0JBQStCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLDZCQUE2QixxQ0FBcUMsV0FBVyxLQUFLLFdBQVcsNEJBQTRCLDBDQUEwQyw2QkFBNkIsdVFBQXVRLDBDQUEwQyx1Q0FBdUMsK0JBQStCLGlIQUFpSCxFQUFFLEtBQUssOEJBQThCLDhCQUE4QixnQkFBZ0IsK0JBQStCLFFBQVEsK0JBQStCLG9CQUFvQiwrQkFBK0IsaUJBQWlCLGlDQUFpQyxrQkFBa0IsK0JBQStCLGNBQWMscUZBQXFGLEVBQUUsaUhBQWlILHlCQUF5Qixrb0JBQWtvQiw4QkFBOEIsbURBQW1ELGtIQUFrSCx3SkFBd0osRUFBRSxLQUFLLGdHQUFnRyxtQ0FBbUMsV0FBVywrQkFBK0IsTUFBTSxvQkFBb0IsaURBQWlELGtGQUFrRixzSUFBc0ksaURBQWlELGlDQUFpQywrQkFBK0IsZ0NBQWdDLCtCQUErQixxREFBcUQsK0JBQStCLG9CQUFvQiwrQkFBK0Isd0JBQXdCLCtCQUErQiwyQkFBMkIsK0JBQStCLHVCQUF1QiwrQkFBK0IsdUJBQXVCLHlXQUF5VywrQkFBK0IseUNBQXlDLFFBQVEsS0FBSyxtQ0FBbUMsa0tBQWtLLDBDQUEwQyxnQkFBZ0Isa0NBQWtDLDJGQUEyRixJQUFJLCtCQUErQix5UEFBeVAsNEJBQTRCLDRGQUE0Rix5bEJBQXlsQixFQUFFLDZCQUE2Qiw2RkFBNkYsd0JBQXdCLGtDQUFrQywwS0FBMEssSUFBSSxvQ0FBb0MsaUhBQWlILHFDQUFxQyxLQUFLLDhCQUE4QixvQ0FBb0Msb0JBQW9CLGFBQWEsK0JBQStCLDhCQUE4Qiw4QkFBOEIsMkNBQTJDLDZCQUE2QixhQUFhLHFDQUFxQywwVkFBMFYsOEJBQThCLHNDQUFzQyxzQ0FBc0MsZ0lBQWdJLEVBQUUsS0FBSyw2R0FBNkcsNEJBQTRCLHFCQUFxQiwrQkFBK0IsV0FBVywrQkFBK0Isb0NBQW9DLCtCQUErQiwwQ0FBMEMsK0JBQStCLGtEQUFrRCwrQkFBK0Isb0NBQW9DLCtCQUErQixpQ0FBaUMsK0JBQStCLHNDQUFzQywrQkFBK0Isa0NBQWtDLG9MQUFvTCxRQUFRLFNBQVMsNkJBQTZCLHVQQUF1UCwyQkFBMkIsMEJBQTBCLG9CQUFvQix5QkFBeUIsMENBQTBDLEVBQUUsb0JBQW9CLDBDQUEwQyxFQUFFLDZCQUE2QiwrQkFBK0IscUdBQXFHLEVBQUUsS0FBSyw4QkFBOEIsOEJBQThCLHVCQUF1QiwrQkFBK0IsUUFBUSwrQkFBK0IsY0FBYyxxRkFBcUYsRUFBRSx5Q0FBeUMsYUFBYSwrQkFBK0Isa0JBQWtCLHVHQUF1Ryw4QkFBOEIsdU9BQXVPLDJCQUEyQiwwQkFBMEIsb0JBQW9CLHlCQUF5QiwwQ0FBMEMsRUFBRSxvQkFBb0IsMENBQTBDLEVBQUUsNkJBQTZCLGdDQUFnQyxzRkFBc0YsRUFBRSxLQUFLLDhCQUE4Qiw4QkFBOEIsdUJBQXVCLCtCQUErQixRQUFRLCtCQUErQixjQUFjLHNFQUFzRSxFQUFFLHVDQUF1QyxhQUFhLCtCQUErQixrQkFBa0IsdUdBQXVHLCtCQUErQiwyUEFBMlAsc0hBQXNILDZCQUE2QixpQ0FBaUMsdUdBQXVHLEVBQUUsS0FBSyw4QkFBOEIsOEJBQThCLHVCQUF1QiwrQkFBK0IsUUFBUSwrQkFBK0IsY0FBYyxxRkFBcUYsRUFBRSx5Q0FBeUMsZUFBZSwrQkFBK0Isa0JBQWtCLHVHQUF1Ryw4QkFBOEIsZ1dBQWdXLDhCQUE4QixpQkFBaUIsY0FBYyx5Q0FBeUMsNkNBQTZDLEVBQUUsTUFBTSxtR0FBbUcsaUNBQWlDLFdBQVcsK0JBQStCLGdGQUFnRix5Q0FBeUMsd0VBQXdFLGtDQUFrQyxHQUFHLHNEQUFzRCxrR0FBa0cseUNBQXlDLGtCQUFrQiwyQ0FBMkMsTUFBTSx1QkFBdUIsdUVBQXVFLGlDQUFpQyxjQUFjLDhKQUE4SiwrQkFBK0IsNkNBQTZDLFFBQVEsS0FBSyx3Q0FBd0MsOExBQThMLDBHQUEwRyw2Q0FBNkMsa0NBQWtDLDhHQUE4RyxJQUFJLG9DQUFvQyx1UUFBdVEsNEJBQTRCLDRGQUE0Rix5bEJBQXlsQixFQUFFLDZCQUE2Qiw0SkFBNEosb0VBQW9FLGtDQUFrQyxpTEFBaUwsSUFBSSxpQ0FBaUMsMkdBQTJHLGtDQUFrQyxLQUFLLDhCQUE4QixvQ0FBb0Msb0JBQW9CLGFBQWE7QUFDMWdxQjs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUEsTUFBTWlFLEtBQUssR0FBRyxNQUFNO0FBQ2xCViw4Q0FBSyxDQUFDVyxRQUFOLENBQWVDLE9BQWYsR0FBMEIsR0FBRXZCLHdCQUF1QixFQUFuRDtBQUVBLFFBQU1wQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTTNDLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUEsT0FBQ3FHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCOUYsc0RBQVEsQ0FBQyxJQUFELENBQXBDOztBQUNBLFFBQU0rRixjQUFjLEdBQUcsTUFBTTtBQUMzQkQsYUFBUyxDQUFFRSxJQUFELElBQVUsQ0FBQ0EsSUFBWixDQUFUO0FBQ0QsR0FGRDs7QUFJQSxRQUFNO0FBQUEsT0FBQ3hFLFdBQUQ7QUFBQSxPQUFjeUU7QUFBZCxNQUFnQ2pHLHNEQUFRLENBQUMsS0FBRCxDQUE5Qzs7QUFFQSxRQUFNeUIsbUJBQW1CLEdBQUcsTUFBTXdFLGNBQWMsQ0FBRUQsSUFBRCxJQUFVLENBQUNBLElBQVosQ0FBaEQ7O0FBRUEsUUFBTTtBQUFFdEc7QUFBRixNQUFzQkMsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQWxCLENBQXZDO0FBRUFNLHlEQUFTLENBQUMsTUFBTTtBQUNkOEIsWUFBUSxDQUFDO0FBQUVHLFVBQUksRUFBRThELG1FQUFtQkE7QUFBM0IsS0FBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBL0YseURBQVMsQ0FBQyxNQUFNO0FBQ2Q4QixZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFK0QsbUVBQVI7QUFBNkI3RCxVQUFJLEVBQUU7QUFBbkMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLFFBQU07QUFBRThEO0FBQUYsTUFBYXpHLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDeUcsS0FBbEIsQ0FBOUI7QUFDQSxRQUFNO0FBQUVyRCxjQUFGO0FBQWMxRDtBQUFkLE1BQTBCSywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQzBHLElBQWxCLENBQTNDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQW1CNUcsK0RBQVcsQ0FBRUMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLElBQWxCLENBQXBDO0FBRUFNLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUliLE9BQU8sSUFBSUksZUFBZSxJQUFJMkYsU0FBbEMsRUFBNkM7QUFDM0NMLGtEQUFLLENBQ0ZDLElBREgsQ0FDUSxHQURSLEVBQ2E7QUFBRXpFLFVBQUUsRUFBRWxCLE9BQU8sQ0FBQ2tCO0FBQWQsT0FEYixFQUVHMEUsSUFGSCxDQUVTdkUsTUFBRCxJQUFZO0FBQ2hCb0IsZUFBTyxDQUFDQyxHQUFSLENBQVlyQixNQUFaO0FBQ0FzQixnQkFBUSxDQUFDO0FBQUVHLGNBQUksRUFBRW9FLDJFQUFSO0FBQXFDbEUsY0FBSSxFQUFFM0IsTUFBTSxDQUFDMkI7QUFBbEQsU0FBRCxDQUFSO0FBQ0QsT0FMSCxFQU1HZ0QsS0FOSCxDQU1VQyxHQUFELElBQVN4RCxPQUFPLENBQUN5RCxLQUFSLENBQWNELEdBQWQsQ0FObEI7QUFPRDtBQUNGLEdBVlEsRUFVTixDQUFDakcsT0FBRCxFQUFVSSxlQUFWLENBVk0sQ0FBVDs7QUFZQSxRQUFNK0csWUFBWSxHQUFHLE1BQU8xRCxPQUFQLElBQW1CO0FBQ3RDZCxZQUFRLENBQUM7QUFBRUcsVUFBSSxFQUFFZ0QsaUVBQWtCQTtBQUExQixLQUFELENBQVI7QUFDQSxXQUFPdEMscUZBQWMsQ0FBQyxRQUFELEVBQVdDLE9BQVgsRUFBb0JDLFVBQXBCLEVBQWdDMUQsT0FBaEMsRUFBeUNtQyxtQkFBekMsQ0FBckI7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0UsK0RBQUMsb0VBQUQ7QUFDRSxhQUFPLEVBQUUsZUFEWDtBQUVFLGlCQUFXLEVBQUVELFdBRmY7QUFHRSx5QkFBbUIsRUFBRUMsbUJBSHZCO0FBSUUsV0FBSyxFQUFFO0FBSlQsTUFERixFQU9HdUIsVUFBVSxJQUFJMUQsT0FBZCxnQkFDQywrREFBQyx5Q0FBRDtBQUNFLFdBQUssRUFBRXVHLE1BQU0sR0FBRyxPQUFILEdBQWEsT0FENUI7QUFFRSxXQUFLLGVBQUUsK0RBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVFO0FBQWpCLFFBRlQ7QUFBQSxnQkFJR0YsTUFBTSxnQkFDTCwrREFBQywwRUFBRDtBQUFjLGVBQU8sRUFBRXZHLE9BQXZCO0FBQWdDLHVCQUFlLEVBQUVJO0FBQWpELFFBREssZ0JBR0wsK0RBQUMseUNBQUQ7QUFDRSxrQkFBVSxFQUFFNkcsWUFEZDtBQUVFLGtCQUFVLEVBQUd4RCxPQUFELGlCQUNWLCtEQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLGlDQUNFLCtEQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDRSxrQkFBTSxlQUNKLCtEQUFDLDJDQUFEO0FBQ0UsaUJBQUcsRUFDREEsT0FBTyxDQUFDMkQsTUFBUixDQUFlLENBQWYsS0FDQyxHQUFFckMsd0JBQXVCLFlBQVd0QixPQUFPLENBQUMyRCxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FBSTtBQUgvRCxjQUZKO0FBU0UsdUJBQVcsZUFDVCwrREFBQyx5Q0FBRDtBQUNFLG1CQUFLLGVBQ0gsZ0VBQUMsMENBQUQ7QUFBTyx5QkFBUyxFQUFFLFlBQWxCO0FBQUEsd0NBQ0UsK0RBQUMsK0NBQUQsQ0FBWSxLQUFaO0FBQ0UsdUJBQUssRUFBRSxDQURUO0FBQUEsNEJBRUcsSUFBRzVELE9BQU8sQ0FBQ2EsSUFBUixDQUFhckQsSUFBSyxLQUFJd0MsT0FBTyxDQUFDckIsS0FBTTtBQUYxQyxrQkFERixFQUlHcUIsT0FBTyxDQUFDZ0IsUUFBUixpQkFDQyxnRUFBQyx3Q0FBRDtBQUFLLHVCQUFLLEVBQUUsU0FBWjtBQUFBLG1DQUEwQmhCLE9BQU8sQ0FBQ2dCLFFBQVIsQ0FBaUJwQixJQUEzQztBQUFBLGtCQUxKO0FBQUEsZ0JBRko7QUFXRSxxQkFBTyxFQUFFLGNBQ1A7QUFBSyxxQkFBSyxFQUFFO0FBQUV2Qix3QkFBTSxFQUFFO0FBQVYsaUJBQVo7QUFBbUMsdUJBQU8sRUFBRSxNQUFNcUYsWUFBWSxDQUFDMUQsT0FBRCxDQUE5RDtBQUFBO0FBQUEsZ0JBRE8sZUFJUDtBQUFLLHFCQUFLLEVBQUU7QUFBRTNCLHdCQUFNLEVBQUU7QUFBVixpQkFBWjtBQUFBO0FBQUEsZ0JBSk8sQ0FYWDtBQUFBLHFDQWtCRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSwyQkFBVyxlQUNUO0FBQUEsMENBQ0UsK0RBQUMsK0VBQUQ7QUFDRSxzQkFBRSxFQUFFMkIsT0FBTyxDQUFDdkMsRUFEZDtBQUVFLDRCQUFRLEVBQUV1QyxPQUFPLENBQUNuQixRQUZwQjtBQUdFLHlCQUFLLEVBQUVtQixPQUFPLENBQUNsQixLQUhqQjtBQUlFLDRCQUFRLEVBQUVrQixPQUFPLENBQUNnQjtBQUpwQixvQkFERixlQU9FLCtEQUFDLDRDQUFEO0FBQVMsK0JBQVcsRUFBRSxNQUF0QjtBQUE4Qix5QkFBSyxFQUFFO0FBQUU2Qyw4QkFBUSxFQUFFO0FBQVo7QUFBckMsb0JBUEYsZUFRRTtBQUFLLHlCQUFLLEVBQUU7QUFBRWhFLCtCQUFTLEVBQUU7QUFBYixxQkFBWjtBQUFBLDJDQUNFLGdFQUFDLCtDQUFELENBQVksSUFBWjtBQUFBLGtEQUNNLEdBRE4sZUFFRSwrREFBQywyREFBRDtBQUNFLDZCQUFLLEVBQ0hHLE9BQU8sQ0FBQ2dCLFFBQVIsR0FDSWhCLE9BQU8sQ0FBQ2xCLEtBQVIsSUFDQyxNQUFNa0IsT0FBTyxDQUFDZ0IsUUFBUixDQUFpQnBCLElBRHhCLElBRUEsSUFGQSxHQUdBSSxPQUFPLENBQUNuQixRQUpaLEdBS0ltQixPQUFPLENBQUNsQixLQUFSLEdBQWdCa0IsT0FBTyxDQUFDbkIsUUFQaEM7QUFTRSxtQ0FBVyxFQUFFLE1BVGY7QUFVRSx5Q0FBaUIsRUFBRTtBQVZyQix3QkFGRjtBQUFBO0FBREYsb0JBUkY7QUFBQTtBQUZKO0FBbEJGO0FBVko7QUFERjtBQUhKO0FBUEosTUFERCxnQkFnRkMsK0RBQUMseUNBQUQ7QUFBQSw2QkFDRSwrREFBQyx5Q0FBRCxDQUFNLElBQU47QUFDRSxtQkFBVyxlQUNUO0FBQUssZUFBSyxFQUFFO0FBQUV2QixrQkFBTSxFQUFFLE9BQVY7QUFBbUJELGlCQUFLLEVBQUU7QUFBMUIsV0FBWjtBQUFBLGlDQUNFLCtEQUFDLDZDQUFEO0FBQVUsb0JBQVEsTUFBbEI7QUFBbUIsZ0JBQUksRUFBRSxLQUF6QjtBQUFBLHNCQUNHZ0csTUFBTSxDQUFDMUYsR0FBUCxDQUFZbUcsS0FBRCxpQkFDViwrREFBQywwQ0FBRDtBQUNFLHFCQUFPLEVBQUV0SCxNQUFNLENBQUM4QixJQUFQLENBQWEsVUFBU3dGLEtBQUssQ0FBQ3JHLEVBQUcsRUFBL0IsQ0FEWDtBQUVFLG1CQUFLLEVBQUU7QUFBRUgsc0JBQU0sRUFBRSxPQUFWO0FBQW1CRCxxQkFBSyxFQUFFO0FBQTFCLGVBRlQ7QUFHRSxpQkFBRyxFQUFHLEdBQUVpRSx3QkFBdUIsWUFBV3dDLEtBQUssQ0FBQ0gsTUFBTixDQUFhLENBQWIsRUFBZ0JDLEdBQUk7QUFIaEUsY0FERDtBQURIO0FBREY7QUFGSjtBQURGLE1BdkZKO0FBQUEsSUFERjtBQTRHRCxDQTFKRDs7QUE0SmVqQixvRUFBZixFOzs7Ozs7Ozs7Ozs7QUN6TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1vQixZQUFZLEdBQUc7QUFDbkJDLG1CQUFpQixFQUFFLEtBREE7QUFFbkJDLHNCQUFvQixFQUFFLElBRkg7QUFHbkJDLFVBQVEsRUFBRSxFQUhTO0FBSW5CQyxrQkFBZ0IsRUFBRSxFQUpDO0FBS25CQyxtQkFBaUIsRUFBRSxLQUxBO0FBTW5CQyxzQkFBb0IsRUFBRSxJQU5IO0FBT25CQyxVQUFRLEVBQUUsRUFQUztBQVFuQkMsa0JBQWdCLEVBQUUsRUFSQztBQVNuQmxCLFFBQU0sRUFBRSxFQVRXO0FBVW5CbUIsaUJBQWUsRUFBRSxJQVZFO0FBV25CQyxpQkFBZSxFQUFFLEtBWEU7QUFZbkJDLFVBQVEsRUFBRTtBQVpTLENBQXJCO0FBZU8sTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTWhDLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1pQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNMUMsbUJBQW1CLEdBQUcscUJBQTVCOztBQUVQLE1BQU0yQyxPQUFPLEdBQUcsQ0FBQ2xKLEtBQUssR0FBR2tILFlBQVQsRUFBdUJpQyxNQUF2QixLQUFrQztBQUNoRCxTQUFPQyw0Q0FBTyxDQUFDcEosS0FBRCxFQUFTcUosS0FBRCxJQUFXO0FBQy9CLFlBQVFGLE1BQU0sQ0FBQzNHLElBQWY7QUFDRSxXQUFLeUYscUJBQUw7QUFDRW9CLGFBQUssQ0FBQzlCLGlCQUFOLEdBQTBCLElBQTFCO0FBQ0E7O0FBQ0YsV0FBS1cscUJBQUw7QUFDRW1CLGFBQUssQ0FBQzlCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E4QixhQUFLLENBQUM1QixRQUFOLEdBQWlCMEIsTUFBTSxDQUFDekcsSUFBeEI7QUFDQTJHLGFBQUssQ0FBQzNCLGdCQUFOLEdBQXlCeUIsTUFBTSxDQUFDekcsSUFBaEM7QUFDQTs7QUFDRixXQUFLeUYscUJBQUw7QUFDRWtCLGFBQUssQ0FBQzlCLGlCQUFOLEdBQTBCLEtBQTFCO0FBQ0E4QixhQUFLLENBQUM3QixvQkFBTixHQUE2QjJCLE1BQU0sQ0FBQ3ZELEtBQXBDO0FBQ0E7O0FBQ0YsV0FBS3FDLHFCQUFMO0FBQ0VvQixhQUFLLENBQUNsQyxpQkFBTixHQUEwQixJQUExQjtBQUNBOztBQUNGLFdBQUtlLHFCQUFMO0FBQ0VtQixhQUFLLENBQUNsQyxpQkFBTixHQUEwQixLQUExQjtBQUNBa0MsYUFBSyxDQUFDaEMsUUFBTixHQUFpQjhCLE1BQU0sQ0FBQ3pHLElBQXhCO0FBQ0EyRyxhQUFLLENBQUMvQixnQkFBTixHQUF5QjZCLE1BQU0sQ0FBQ3pHLElBQWhDO0FBQ0E7O0FBQ0YsV0FBS3lGLHFCQUFMO0FBQ0VrQixhQUFLLENBQUNsQyxpQkFBTixHQUEwQixLQUExQjtBQUNBa0MsYUFBSyxDQUFDakMsb0JBQU4sR0FBNkIrQixNQUFNLENBQUN2RCxLQUFwQztBQUNBOztBQUNGLFdBQUtXLG1CQUFMO0FBQ0U4QyxhQUFLLENBQUN4QixRQUFOLEdBQWlCc0IsTUFBTSxDQUFDekcsSUFBeEI7QUFDQTs7QUFDRjtBQUNFMUMsYUFBSztBQUNMO0FBOUJKO0FBZ0NELEdBakNhLENBQWQ7QUFrQ0QsQ0FuQ0Q7O0FBcUNla0osc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQSxNQUFNaEMsWUFBWSxHQUFHO0FBQ25CN0QsTUFBSSxFQUFFLEVBRGE7QUFFbkJpRyxlQUFhLEVBQUUsS0FGSTtBQUduQkMsaUJBQWUsRUFBRSxLQUhFO0FBSW5CbEksUUFBTSxFQUFFb0UsU0FKVztBQUtuQm5DLFNBQU8sRUFBRW1DO0FBTFUsQ0FBckI7QUFRTyxNQUFNK0QsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRUEsTUFBTUMseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUMsK0JBQStCLEdBQUcsaUNBQXhDO0FBRUEsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUcsMEJBQWpDO0FBRUEsTUFBTXpFLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU0wRSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFUSxnRUFBQ2xLLEtBQUssR0FBR2tILFlBQVQsRUFBdUJpQyxNQUF2QixLQUFrQztBQUMvQyxVQUFRQSxNQUFNLENBQUMzRyxJQUFmO0FBQ0UsU0FBS2dILGlCQUFMO0FBQXdCO0FBQ3RCLGlDQUNLeEosS0FETDtBQUdEOztBQUVELFNBQUt5SixpQkFBTDtBQUF3QjtBQUN0QiwrQ0FDS3pKLEtBREw7QUFFRXFELGNBQUksRUFBRSxDQUFDLEdBQUdyRCxLQUFLLENBQUNxRCxJQUFWLEVBQWdCOEYsTUFBTSxDQUFDekcsSUFBdkI7QUFGUjtBQUlEOztBQUVELFNBQUtnSCxpQkFBTDtBQUF3QjtBQUN0QixpQ0FDSzFKLEtBREw7QUFHRDs7QUFFRCxTQUFLMkosbUJBQUw7QUFBMEI7QUFDeEIsY0FBTVEsS0FBSyxHQUFHbkssS0FBSyxDQUFDcUQsSUFBTixDQUFXbEMsTUFBWCxDQUFtQmlKLElBQUQsSUFBVUEsSUFBSSxDQUFDeEosRUFBTCxLQUFZdUksTUFBTSxDQUFDdkksRUFBL0MsQ0FBZDtBQUNBLCtDQUNLWixLQURMO0FBRUVxRCxjQUFJLEVBQUUsQ0FBQyxHQUFHOEcsS0FBSjtBQUZSO0FBSUQ7O0FBRUQsU0FBS0gscUJBQUw7QUFBNEI7QUFDMUIsY0FBTUssVUFBVSxHQUFHbEIsTUFBTSxDQUFDaEcsT0FBMUI7QUFDQSxjQUFNbUgsWUFBWSxHQUFHdEssS0FBSyxDQUFDcUQsSUFBTixDQUFXa0gsU0FBWCxDQUFzQm5KLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLEtBQVN5SixVQUFVLENBQUN6SixFQUFoRCxDQUFyQjs7QUFDQSxZQUFJMEosWUFBWSxLQUFLLENBQUMsQ0FBdEIsRUFBeUI7QUFDdkIsZ0JBQU1FLGFBQWEsR0FBR3hLLEtBQUssQ0FBQ3FELElBQU4sQ0FBV2lILFlBQVgsQ0FBdEI7O0FBQ0EsZ0JBQU1HLFlBQVksbUNBQ2JELGFBRGE7QUFFaEJ4SSxvQkFBUSxFQUFFd0ksYUFBYSxDQUFDeEksUUFBZCxHQUF5QnFJLFVBQVUsQ0FBQ3JJO0FBRjlCLFlBQWxCOztBQUlBLGdCQUFNMEksUUFBUSxHQUFHLENBQUMsR0FBRzFLLEtBQUssQ0FBQ3FELElBQU4sQ0FBV2xDLE1BQVgsQ0FBbUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLEtBQVN5SixVQUFVLENBQUN6SixFQUE3QyxDQUFKLEVBQXNENkosWUFBdEQsQ0FBakI7QUFFQSxpREFDS3pLLEtBREw7QUFFRXFELGdCQUFJLEVBQUVxSDtBQUZSO0FBSUQ7O0FBQ0QsK0NBQ0sxSyxLQURMO0FBRUVxRCxjQUFJLEVBQUUsQ0FBQyxHQUFHckQsS0FBSyxDQUFDcUQsSUFBVixFQUFnQmdILFVBQWhCO0FBRlI7QUFJRDs7QUFFRCxTQUFLUCx5QkFBTDtBQUFnQztBQUM5QixjQUFNOUksS0FBSyxHQUFHaEIsS0FBSyxDQUFDcUQsSUFBTixDQUFXa0gsU0FBWCxDQUFzQmxILElBQUQsSUFBVUEsSUFBSSxDQUFDekMsRUFBTCxJQUFXdUksTUFBTSxDQUFDekcsSUFBUCxDQUFZOUIsRUFBdEQsQ0FBZDtBQUNBLGNBQU11QyxPQUFPLEdBQUduRCxLQUFLLENBQUNxRCxJQUFOLENBQVdyQyxLQUFYLENBQWhCO0FBQ0EsWUFBSWdCLFFBQVEsR0FBR21CLE9BQU8sQ0FBQ25CLFFBQXZCO0FBQ0FBLGdCQUFRLEdBQUcsR0FBWCxHQUFrQkEsUUFBUSxJQUFJLENBQTlCLEdBQW1DLEVBQW5DO0FBQ0EsY0FBTXFCLElBQUksR0FBRyxDQUFDLEdBQUdyRCxLQUFLLENBQUNxRCxJQUFWLENBQWI7QUFDQUEsWUFBSSxDQUFDckMsS0FBRCxDQUFKLG1DQUFtQm1DLE9BQW5CO0FBQTRCbkI7QUFBNUI7QUFFQSwrQ0FDS2hDLEtBREw7QUFFRXFEO0FBRkY7QUFJRDs7QUFFRCxTQUFLMEcsK0JBQUw7QUFBc0M7QUFDcEMsY0FBTS9JLEtBQUssR0FBR2hCLEtBQUssQ0FBQ3FELElBQU4sQ0FBV2tILFNBQVgsQ0FBc0JsSCxJQUFELElBQVVBLElBQUksQ0FBQ3pDLEVBQUwsS0FBWXVJLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWTlCLEVBQXZELENBQWQ7QUFDQSxjQUFNdUMsT0FBTyxHQUFHbkQsS0FBSyxDQUFDcUQsSUFBTixDQUFXckMsS0FBWCxDQUFoQjtBQUNBLFlBQUlnQixRQUFRLEdBQUdtQixPQUFPLENBQUNuQixRQUF2QjtBQUNBQSxnQkFBUSxHQUFHLENBQVgsR0FBZ0JBLFFBQVEsSUFBSSxDQUE1QixHQUFpQyxDQUFqQztBQUNBLGNBQU1xQixJQUFJLEdBQUcsQ0FBQyxHQUFHckQsS0FBSyxDQUFDcUQsSUFBVixDQUFiO0FBQ0FBLFlBQUksQ0FBQ3JDLEtBQUQsQ0FBSixtQ0FBbUJtQyxPQUFuQjtBQUE0Qm5CO0FBQTVCO0FBQ0EsK0NBQ0toQyxLQURMO0FBRUVxRDtBQUZGO0FBSUQ7O0FBRUQsU0FBS21DLGtCQUFMO0FBQXlCO0FBQ3ZCLCtDQUNLeEYsS0FETDtBQUVFcUQsY0FBSSxFQUFFO0FBRlI7QUFJRDs7QUFFRCxTQUFLNkcsaUJBQUw7QUFBd0I7QUFDdEIsK0NBQ0tsSyxLQURMO0FBRUVxQixnQkFBTSxFQUFFOEgsTUFBTSxDQUFDekcsSUFBUCxDQUFZckIsTUFGdEI7QUFHRWlDLGlCQUFPLEVBQUU2RixNQUFNLENBQUN6RyxJQUFQLENBQVlZO0FBSHZCO0FBS0Q7O0FBRUQ7QUFBUztBQUNQLGlDQUFZdEQsS0FBWjtBQUNEO0FBOUZIO0FBZ0dELENBakdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLE1BQU1rSCxZQUFZLEdBQUc7QUFDbkJqSCxNQUFJLEVBQUUsSUFEYTtBQUVuQjBLLFVBQVEsRUFBRSxFQUZTO0FBR25CQyxnQkFBYyxFQUFFLEVBSEc7QUFJbkJDLFlBQVUsRUFBRSxFQUpPO0FBS25CMUgsU0FBTyxFQUFFLElBTFU7QUFNbkIySCxlQUFhLEVBQUUsS0FOSTtBQU9uQkMsbUJBQWlCLEVBQUUsS0FQQTtBQVFuQkMsb0JBQWtCLEVBQUUsS0FSRDtBQVNuQkMsdUJBQXFCLEVBQUUsSUFUSjtBQVVuQjlELG1CQUFpQixFQUFFLEtBVkE7QUFXbkJDLHNCQUFvQixFQUFFLElBWEg7QUFZbkI4RCxjQUFZLEVBQUUsS0FaSztBQWFuQnJMLGlCQUFlLEVBQUU0RixTQWJFO0FBY25CM0YsaUJBQWUsRUFBRTJGLFNBZEU7QUFlbkJrQixjQUFZLEVBQUVsQjtBQWZLLENBQXJCO0FBa0JPLE1BQU0wRixtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0I7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQywwQkFBMEIsR0FBRyw0QkFBbkM7QUFFQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRywwQkFBakM7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFFQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxNQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFFQSxNQUFNQyx5QkFBeUIsR0FBRywyQkFBbEM7QUFFQSxNQUFNbEYscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsdUJBQTlCO0FBRUEsTUFBTWlGLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU14RywyQkFBMkIsR0FBRyw2QkFBcEM7QUFFQSxNQUFNbkUseUJBQXlCLEdBQUcsMkJBQWxDO0FBQ0EsTUFBTUksK0JBQStCLEdBQUcsaUNBQXhDOztBQUVQLE1BQU1xRyxPQUFPLEdBQUcsQ0FBQ2xKLEtBQUssR0FBR2tILFlBQVQsRUFBdUJpQyxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUMzRyxJQUFmO0FBQ0UsU0FBSzJJLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLbkwsS0FETDtBQUVFOEssdUJBQWEsRUFBRTtBQUZqQjtBQUlEOztBQUNELFNBQUtNLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLcEwsS0FETDtBQUVFMkssa0JBQVEsRUFBRSxDQUFDeEIsTUFBTSxDQUFDekcsSUFBUixFQUFjLEdBQUcxQyxLQUFLLENBQUMySyxRQUF2QixDQUZaO0FBR0VDLHdCQUFjLEVBQUUsQ0FBQ3pCLE1BQU0sQ0FBQ3pHLElBQVIsRUFBYyxHQUFHMUMsS0FBSyxDQUFDMkssUUFBdkIsQ0FIbEI7QUFJRUcsdUJBQWEsRUFBRTtBQUpqQjtBQU1EOztBQUNELFNBQUtPLG1CQUFMO0FBQTBCO0FBQ3hCLCtDQUNLckwsS0FETDtBQUVFOEssdUJBQWEsRUFBRTtBQUZqQjtBQUlEOztBQUVELFNBQUtRLHNCQUFMO0FBQTZCO0FBQzNCLCtDQUNLdEwsS0FETDtBQUVFK0ssMkJBQWlCLEVBQUU7QUFGckI7QUFJRDs7QUFDRCxTQUFLUSxzQkFBTDtBQUE2QjtBQUMzQiwrQ0FDS3ZMLEtBREw7QUFFRStLLDJCQUFpQixFQUFFLEtBRnJCO0FBR0VKLGtCQUFRLEVBQUV4QixNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWixDQUhaO0FBSUVrSSx3QkFBYyxFQUFFekIsTUFBTSxDQUFDekcsSUFBUCxDQUFZLENBQVosQ0FKbEI7QUFLRW1JLG9CQUFVLEVBQUUxQixNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWjtBQUxkO0FBT0Q7O0FBQ0QsU0FBSzhJLHNCQUFMO0FBQTZCO0FBQzNCLCtDQUNLeEwsS0FETDtBQUVFK0ssMkJBQWlCLEVBQUU7QUFGckI7QUFJRDs7QUFFRCxTQUFLVSxzQkFBTDtBQUE2QjtBQUMzQjtBQUFTVCw0QkFBa0IsRUFBRTtBQUE3QixXQUFzQ2hMLEtBQXRDO0FBQ0Q7O0FBQ0QsU0FBSzBMLHNCQUFMO0FBQTZCO0FBQzNCO0FBQVNWLDRCQUFrQixFQUFFO0FBQTdCLFdBQXVDaEwsS0FBdkM7QUFBOENtRCxpQkFBTyxFQUFFZ0csTUFBTSxDQUFDekc7QUFBOUQ7QUFDRDs7QUFDRCxTQUFLaUosc0JBQUw7QUFBNkI7QUFDM0I7QUFDRVgsNEJBQWtCLEVBQUU7QUFEdEIsV0FFS2hMLEtBRkw7QUFHRWlMLCtCQUFxQixFQUFFOUIsTUFBTSxDQUFDdkQ7QUFIaEM7QUFLRDs7QUFFRCxTQUFLZ0csb0JBQUw7QUFBMkI7QUFDekIsaUNBQVk1TCxLQUFaO0FBQ0Q7O0FBQ0QsU0FBSzZMLG9CQUFMO0FBQTJCO0FBQ3pCMUosZUFBTyxDQUFDQyxHQUFSLENBQVkrRyxNQUFNLENBQUN6RyxJQUFuQjtBQUNBLGNBQU0xQixLQUFLLEdBQUdoQixLQUFLLENBQUMySyxRQUFOLENBQWVKLFNBQWYsQ0FBMEJuSixDQUFELElBQU9BLENBQUMsQ0FBQ1IsRUFBRixLQUFTdUksTUFBTSxDQUFDekcsSUFBUCxDQUFZOUIsRUFBckQsQ0FBZDtBQUNBLGNBQU0rSixRQUFRLEdBQUcsQ0FBQyxHQUFHM0ssS0FBSyxDQUFDMkssUUFBVixDQUFqQjtBQUNBQSxnQkFBUSxDQUFDM0osS0FBRCxDQUFSLEdBQWtCbUksTUFBTSxDQUFDekcsSUFBekI7QUFFQSwrQ0FBWTFDLEtBQVo7QUFBbUIySyxrQkFBbkI7QUFBNkJDLHdCQUFjLEVBQUVEO0FBQTdDO0FBQ0Q7O0FBQ0QsU0FBS21CLG9CQUFMO0FBQTJCO0FBQ3pCLGlDQUFZOUwsS0FBWjtBQUNEOztBQUVELFNBQUsrTCxzQkFBTDtBQUE2QjtBQUMzQixpQ0FBWS9MLEtBQVo7QUFDRDs7QUFFRCxTQUFLZ00sc0JBQUw7QUFBNkI7QUFDM0IsY0FBTXJCLFFBQVEsR0FBRzNLLEtBQUssQ0FBQzJLLFFBQU4sQ0FBZXhKLE1BQWYsQ0FBdUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLElBQVF1SSxNQUFNLENBQUN6RyxJQUE1QyxDQUFqQjtBQUNBLCtDQUFZMUMsS0FBWjtBQUFtQjJLLGtCQUFuQjtBQUE2QkMsd0JBQWMsRUFBRUQ7QUFBN0M7QUFDRDs7QUFFRCxTQUFLc0Isc0JBQUw7QUFBNkI7QUFDM0IsaUNBQVlqTSxLQUFaO0FBQ0Q7O0FBRUQsU0FBS3VNLHVCQUFMO0FBQThCO0FBQzVCLGlDQUFZdk0sS0FBWjtBQUNEOztBQUVELFNBQUt3TSx1QkFBTDtBQUE4QjtBQUM1QnJLLGVBQU8sQ0FBQ0MsR0FBUixDQUFZK0csTUFBTSxDQUFDekcsSUFBbkI7QUFDQSxjQUFNMkssZ0JBQWdCLEdBQ3BCbEUsTUFBTSxDQUFDekcsSUFBUCxDQUFZLENBQVosS0FBa0IsQ0FBbEIsR0FDSXlHLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWSxDQUFaLENBREosR0FFSXlHLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWSxDQUFaLEVBQWV2QixNQUFmLENBQXVCQyxDQUFELElBQU9BLENBQUMsQ0FBQ2tNLFFBQUYsQ0FBVzFNLEVBQVgsSUFBaUJ1SSxNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWixDQUE5QyxDQUhOO0FBSUEsK0NBQ0sxQyxLQURMO0FBRUUySyxrQkFBUSxFQUFFMEMsZ0JBRlo7QUFHRXpDLHdCQUFjLEVBQUV6QixNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWjtBQUhsQjtBQUtEOztBQUVELFNBQUt1SixzQkFBTDtBQUE2QjtBQUMzQixpQ0FBWWpNLEtBQVo7QUFDRDs7QUFFRCxTQUFLa00scUJBQUw7QUFBNEI7QUFDMUIsY0FBTWxMLEtBQUssR0FBR2hCLEtBQUssQ0FBQzJLLFFBQU4sQ0FBZUosU0FBZixDQUEwQm5KLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLEtBQVN1SSxNQUFNLENBQUN2SSxFQUFoRCxDQUFkO0FBQ0EsY0FBTXVDLE9BQU8sR0FBR25ELEtBQUssQ0FBQzJLLFFBQU4sQ0FBZTNKLEtBQWYsQ0FBaEI7QUFDQSxZQUFJdU0sT0FBTyxHQUFHcEssT0FBTyxDQUFDb0ssT0FBdEI7QUFDQUEsZUFBTyxHQUFHQSxPQUFPLEdBQUcsS0FBSCxHQUFXLElBQTVCO0FBQ0EsY0FBTTVDLFFBQVEsR0FBRyxDQUFDLEdBQUczSyxLQUFLLENBQUMySyxRQUFWLENBQWpCO0FBQ0FBLGdCQUFRLENBQUMzSixLQUFELENBQVIsbUNBQXVCbUMsT0FBdkI7QUFBZ0NvSztBQUFoQztBQUNBLCtDQUFZdk4sS0FBWjtBQUFtQjJLO0FBQW5CO0FBQ0Q7O0FBRUQsU0FBS3dCLDBCQUFMO0FBQWlDO0FBQy9CLGNBQU14QixRQUFRLEdBQUczSyxLQUFLLENBQUMySyxRQUF2QjtBQUNBQSxnQkFBUSxDQUFDN0osR0FBVCxDQUFjTSxDQUFELElBQVFBLENBQUMsQ0FBQ21NLE9BQUYsR0FBWXBFLE1BQU0sQ0FBQ29FLE9BQXhDO0FBQ0EsK0NBQVl2TixLQUFaO0FBQW1CMks7QUFBbkI7QUFDRDs7QUFFRCxTQUFLeUIsd0JBQUw7QUFBK0I7QUFDN0IsaUNBQVlwTSxLQUFaO0FBQ0Q7O0FBRUQsU0FBS3FNLHdCQUFMO0FBQStCO0FBQzdCLGNBQU1nQixnQkFBZ0IsR0FDcEJsRSxNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWixNQUFtQixDQUFuQixHQUNJeUcsTUFBTSxDQUFDekcsSUFBUCxDQUFZLENBQVosRUFBZXZCLE1BQWYsQ0FBdUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLElBQVF1SSxNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWixDQUFyQyxDQURKLEdBRUl5RyxNQUFNLENBQUN6RyxJQUFQLENBQVksQ0FBWixDQUhOO0FBSUFQLGVBQU8sQ0FBQ0MsR0FBUixDQUFZK0csTUFBTSxDQUFDekcsSUFBUCxDQUFZLENBQVosQ0FBWjtBQUNBLCtDQUNLMUMsS0FETDtBQUVFMkssa0JBQVEsRUFBRTBDLGdCQUZaO0FBR0V6Qyx3QkFBYyxFQUFFekIsTUFBTSxDQUFDekcsSUFBUCxDQUFZLENBQVo7QUFIbEI7QUFLRDs7QUFFRCxTQUFLNEosd0JBQUw7QUFBK0I7QUFDN0IsaUNBQVl0TSxLQUFaO0FBQ0Q7O0FBRUQsU0FBSzBNLG9CQUFMO0FBQTJCO0FBQ3pCLGlDQUFZMU0sS0FBWjtBQUNEOztBQUVELFNBQUsyTSxvQkFBTDtBQUEyQjtBQUN6QiwrQ0FBWTNNLEtBQVo7QUFBbUI2SyxvQkFBVSxFQUFFLENBQUMsR0FBRzdLLEtBQUssQ0FBQzZLLFVBQVYsRUFBc0IxQixNQUFNLENBQUN6RyxJQUE3QjtBQUEvQjtBQUNEOztBQUVELFNBQUtrSyxvQkFBTDtBQUEyQjtBQUN6QixpQ0FBWTVNLEtBQVo7QUFDRDs7QUFFRCxTQUFLNk0scUJBQUw7QUFBNEI7QUFDMUIsaUNBQVk3TSxLQUFaO0FBQ0Q7O0FBRUQsU0FBSzhNLHFCQUFMO0FBQTRCO0FBQzFCLGNBQU05TCxLQUFLLEdBQUdoQixLQUFLLENBQUM2SyxVQUFOLENBQWlCTixTQUFqQixDQUE0Qm5KLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLElBQVF1SSxNQUFNLENBQUN6RyxJQUFQLENBQVk5QixFQUF0RCxDQUFkO0FBQ0EsY0FBTWlLLFVBQVUsR0FBRyxDQUFDLEdBQUc3SyxLQUFLLENBQUM2SyxVQUFWLENBQW5CO0FBQ0FBLGtCQUFVLENBQUM3SixLQUFELENBQVYsR0FBb0JtSSxNQUFNLENBQUN6RyxJQUEzQjtBQUNBLCtDQUFZMUMsS0FBWjtBQUFtQjZLO0FBQW5CO0FBQ0Q7O0FBRUQsU0FBS2tDLHFCQUFMO0FBQTRCO0FBQzFCLGlDQUFZL00sS0FBWjtBQUNEOztBQUVELFNBQUtnTix1QkFBTDtBQUE4QjtBQUM1QixpQ0FBWWhOLEtBQVo7QUFDRDs7QUFFRCxTQUFLaU4sdUJBQUw7QUFBOEI7QUFDNUIsY0FBTU8sa0JBQWtCLEdBQUd4TixLQUFLLENBQUM2SyxVQUFOLENBQWlCMUosTUFBakIsQ0FBeUJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDUixFQUFGLEtBQVN1SSxNQUFNLENBQUN6RyxJQUFQLENBQVk5QixFQUFwRCxDQUEzQjtBQUNBLGNBQU0rSixRQUFRLEdBQUczSyxLQUFLLENBQUM0SyxjQUFOLENBQXFCekosTUFBckIsQ0FBNkJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDa00sUUFBRixDQUFXMU0sRUFBWCxLQUFrQnVJLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWTlCLEVBQWpFLENBQWpCO0FBRUEsK0NBQ0taLEtBREw7QUFFRTZLLG9CQUFVLEVBQUUyQyxrQkFGZDtBQUdFN0Msa0JBSEY7QUFJRUMsd0JBQWMsRUFBRUQ7QUFKbEI7QUFNRDs7QUFFRCxTQUFLMkIsd0JBQUw7QUFBK0I7QUFDN0IsaUNBQVl0TSxLQUFaO0FBQ0Q7O0FBRUQsU0FBS21OLHlCQUFMO0FBQWdDO0FBQzlCLFlBQUloRSxNQUFNLENBQUN2SSxFQUFQLElBQWEsQ0FBakIsRUFBb0I7QUFDbEIsaURBQVlaLEtBQVo7QUFBbUIySyxvQkFBUSxFQUFFM0ssS0FBSyxDQUFDNEs7QUFBbkM7QUFDRCxTQUZELE1BRU8sSUFBSXpCLE1BQU0sQ0FBQ3ZJLEVBQVAsSUFBYSxDQUFDLENBQWxCLEVBQXFCO0FBQzFCLGdCQUFNNk0saUJBQWlCLEdBQUd6TixLQUFLLENBQUM0SyxjQUFOLENBQXFCekosTUFBckIsQ0FBNkJDLENBQUQsSUFBT0EsQ0FBQyxDQUFDK0MsUUFBRixLQUFlLElBQWxELENBQTFCO0FBQ0EsaURBQVluRSxLQUFaO0FBQW1CMkssb0JBQVEsRUFBRThDO0FBQTdCO0FBQ0QsU0FITSxNQUdBO0FBQ0wsZ0JBQU1KLGdCQUFnQixHQUFHck4sS0FBSyxDQUFDNEssY0FBTixDQUFxQnpKLE1BQXJCLENBQTZCQyxDQUFELElBQU9BLENBQUMsQ0FBQ2tNLFFBQUYsQ0FBVzFNLEVBQVgsSUFBaUJ1SSxNQUFNLENBQUN2SSxFQUEzRCxDQUF6QjtBQUNBLGlEQUFZWixLQUFaO0FBQW1CMkssb0JBQVEsRUFBRTBDO0FBQTdCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFLcEYscUJBQUw7QUFBNEI7QUFDMUIsK0NBQVlqSSxLQUFaO0FBQW1CbUgsMkJBQWlCLEVBQUU7QUFBdEM7QUFDRDs7QUFFRCxTQUFLZSxxQkFBTDtBQUE0QjtBQUMxQiwrQ0FBWWxJLEtBQVo7QUFBbUJxSCxrQkFBUSxFQUFFOEIsTUFBTSxDQUFDekcsSUFBcEM7QUFBMEN5RSwyQkFBaUIsRUFBRTtBQUE3RDtBQUNEOztBQUVELFNBQUtnQixxQkFBTDtBQUE0QjtBQUMxQiwrQ0FBWW5JLEtBQVo7QUFBbUJtSCwyQkFBaUIsRUFBRSxLQUF0QztBQUE2Q3VHLDZCQUFtQixFQUFFdkUsTUFBTSxDQUFDdkQ7QUFBekU7QUFDRDs7QUFFRCxTQUFLd0gsdUJBQUw7QUFDRSw2Q0FDS3BOLEtBREw7QUFFRUgsdUJBQWUsRUFBRXNKLE1BQU0sQ0FBQ3pHO0FBRjFCOztBQUtGLFNBQUtrRSwyQkFBTDtBQUFrQztBQUNoQ3pFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZK0csTUFBTSxDQUFDekcsSUFBbkI7QUFDQSwrQ0FBWTFDLEtBQVo7QUFBbUJGLHlCQUFlLEVBQUVxSixNQUFNLENBQUN6RyxJQUFQLENBQVlpTCxJQUFoRDtBQUFzRGhILHNCQUFZLEVBQUV3QyxNQUFNLENBQUN6RyxJQUFQLENBQVlpSTtBQUFoRjtBQUNEOztBQUVELFNBQUtsSSx5QkFBTDtBQUFnQztBQUM5Qk4sZUFBTyxDQUFDQyxHQUFSLENBQVlwQyxLQUFLLENBQUMyRyxZQUFsQjtBQUNBLGNBQU0zRixLQUFLLEdBQUdoQixLQUFLLENBQUMyRyxZQUFOLENBQW1CNEQsU0FBbkIsQ0FBOEJxRCxJQUFELElBQVVBLElBQUksQ0FBQ2hOLEVBQUwsSUFBV3VJLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWTlCLEVBQTlELENBQWQ7QUFDQXVCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsS0FBWjtBQUNBLGNBQU1tQyxPQUFPLEdBQUduRCxLQUFLLENBQUMyRyxZQUFOLENBQW1CM0YsS0FBbkIsQ0FBaEI7QUFDQSxZQUFJZ0IsUUFBUSxHQUFHbUIsT0FBTyxDQUFDbkIsUUFBdkI7QUFDQUEsZ0JBQVEsR0FBRyxHQUFYLEdBQWtCQSxRQUFRLElBQUksQ0FBOUIsR0FBbUMsRUFBbkM7QUFDQSxjQUFNMkUsWUFBWSxHQUFHLENBQUMsR0FBRzNHLEtBQUssQ0FBQzJHLFlBQVYsQ0FBckI7QUFDQUEsb0JBQVksQ0FBQzNGLEtBQUQsQ0FBWixtQ0FBMkJtQyxPQUEzQjtBQUFvQ25CO0FBQXBDO0FBRUEsK0NBQ0toQyxLQURMO0FBRUUyRztBQUZGO0FBSUQ7O0FBRUQsU0FBSzlELCtCQUFMO0FBQXNDO0FBQ3BDLGNBQU03QixLQUFLLEdBQUdoQixLQUFLLENBQUMyRyxZQUFOLENBQW1CNEQsU0FBbkIsQ0FBOEJxRCxJQUFELElBQVVBLElBQUksQ0FBQ2hOLEVBQUwsS0FBWXVJLE1BQU0sQ0FBQ3pHLElBQVAsQ0FBWTlCLEVBQS9ELENBQWQ7QUFDQSxjQUFNdUMsT0FBTyxHQUFHbkQsS0FBSyxDQUFDMkcsWUFBTixDQUFtQjNGLEtBQW5CLENBQWhCO0FBQ0EsWUFBSWdCLFFBQVEsR0FBR21CLE9BQU8sQ0FBQ25CLFFBQXZCO0FBQ0FBLGdCQUFRLEdBQUcsQ0FBWCxHQUFnQkEsUUFBUSxJQUFJLENBQTVCLEdBQWlDLENBQWpDO0FBQ0EsY0FBTTJFLFlBQVksR0FBRyxDQUFDLEdBQUczRyxLQUFLLENBQUMyRyxZQUFWLENBQXJCO0FBQ0FBLG9CQUFZLENBQUMzRixLQUFELENBQVosbUNBQTJCbUMsT0FBM0I7QUFBb0NuQjtBQUFwQztBQUNBLCtDQUNLaEMsS0FETDtBQUVFMkc7QUFGRjtBQUlEOztBQUVEO0FBQVM7QUFDUCxpQ0FDSzNHLEtBREw7QUFHRDtBQW5RSDtBQXFRRCxDQXRRRDs7QUF3UWVrSixzRUFBZixFOzs7Ozs7Ozs7OztBQ25WQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBNYXAsIEN1c3RvbU92ZXJsYXlNYXAgfSBmcm9tIFwicmVhY3Qta2FrYW8tbWFwcy1zZGtcIjtcclxuaW1wb3J0IHsgQ2FyZCwgVGFnIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IE1hcENvbXBvbmVudCA9ICh7IHNlc3Npb24gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdXNlckNvb3JkaW5hdGVzLCBzaG9wQ29vcmRpbmF0ZXMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcCk7XHJcblxyXG4gIGNvbnN0IFtjZW50ZXJDb29yZGluYXRlcywgc2V0Q2VudGVyQ29vcmRpbmF0ZXNdID0gdXNlU3RhdGUoe1xyXG4gICAgbGF0OiBzZXNzaW9uLmxhdCxcclxuICAgIGxuZzogc2Vzc2lvbi5sbmcsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlckNvb3JkaW5hdGVzKSB7XHJcbiAgICAgIHJldHVybiBzZXRDZW50ZXJDb29yZGluYXRlcyh7IGxhdDogdXNlckNvb3JkaW5hdGVzWzFdLCBsbmc6IHVzZXJDb29yZGluYXRlc1swXSB9KTtcclxuICAgIH1cclxuICB9LCBbdXNlckNvb3JkaW5hdGVzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFwIGNlbnRlcj17Y2VudGVyQ29vcmRpbmF0ZXN9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjM2MHB4XCIgfX0gbGV2ZWw9ezV9PlxyXG4gICAgICB7c2Vzc2lvbiAmJiBzZXNzaW9uLmRpdmlzaW9uID09PSBmYWxzZSAmJiAoXHJcbiAgICAgICAgPEN1c3RvbU92ZXJsYXlNYXAga2V5PXtzZXNzaW9uLmlkfSBwb3NpdGlvbj17eyBsYXQ6IHNlc3Npb24ubGF0LCBsbmc6IHNlc3Npb24ubG5nIH19PlxyXG4gICAgICAgICAgPFRhZyBrZXk9e3Nlc3Npb24uaWR9PntzZXNzaW9uICYmIHNlc3Npb24ubmFtZX08L1RhZz5cclxuICAgICAgICA8L0N1c3RvbU92ZXJsYXlNYXA+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG9wQ29vcmRpbmF0ZXMgJiZcclxuICAgICAgICBzaG9wQ29vcmRpbmF0ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHNob3BDb29yZGluYXRlcy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlkcyA9IHNlc3Npb24uU2hvcHMuZmlsdGVyKCh2KSA9PiB2LmlkID09IHJlc3VsdC5TaG9wSWQpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEN1c3RvbU92ZXJsYXlNYXBcclxuICAgICAgICAgICAgICBwb3NpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgbGF0OiByZXN1bHQubG9jYXRpb24uY29vcmRpbmF0ZXNbMV0sXHJcbiAgICAgICAgICAgICAgICBsbmc6IHJlc3VsdC5sb2NhdGlvbi5jb29yZGluYXRlc1swXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGtleT17cmVzdWx0LmlkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRhZ1xyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtpZHMubGVuZ3RoID09PSAwID8gbnVsbCA6IFwibWFnZW50YVwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoaWRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvbWVudS8ke3Jlc3VsdC5TaG9wSWR9YCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKGAvc2hvcC9hZG1pbmApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHQubmFtZX1cclxuICAgICAgICAgICAgICA8L1RhZz5cclxuICAgICAgICAgICAgPC9DdXN0b21PdmVybGF5TWFwPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgIDwvTWFwPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb21wb25lbnQ7XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IE1vZGFsSW50ZXJmYWNlID0gKHtcbiAgY29udGVudCxcbiAgdG9nZ2xlTW9kYWwsXG4gIG9uQ2hhbmdlVG9nZ2xlTW9kYWwsXG4gIHRpdGxlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgdGl0bGU9e3RpdGxlID8gdGl0bGUgOiBudWxsfVxuICAgICAgdmlzaWJsZT17dG9nZ2xlTW9kYWx9XG4gICAgICBvbkNhbmNlbD17b25DaGFuZ2VUb2dnbGVNb2RhbH1cbiAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICA+XG4gICAgICB7Y29udGVudH1cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxJbnRlcmZhY2U7XG4iLCJpbXBvcnQge1xuICBQbHVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzQ2lyY2xlT3V0bGluZWQsXG4gIE1pbnVzT3V0bGluZWQsXG4gIFBsdXNPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgTkVBUl9TVUJTVFJBQ1RfUVVBTlRJVFlfUkVRVUVTVCB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy9zaG9wXCI7XG5pbXBvcnQgeyBDb2wsIFJvdywgVHlwb2dyYXBoeSwgSW5wdXQsIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBOdW1iZXJGb3JtYXQgZnJvbSBcInJlYWN0LW51bWJlci1mb3JtYXRcIjtcblxuY29uc3QgTmVhckFtb3VudFRvZ2dsZSA9ICh7IGlkLCBxdWFudGl0eSwgcHJpY2UsIGRpc2NvdW50IH0pID0+IHtcbiAgY29uc29sZS5sb2cocXVhbnRpdHkpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQ2xpY2tBZGQgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogTkVBUl9BRERfUVVBTlRJVFlfUkVRVUVTVCwgZGF0YTogeyBpZCB9IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25DbGlja1N1YnN0cmFjdCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IE5FQVJfU1VCU1RSQUNUX1FVQU5USVRZX1JFUVVFU1QsIGRhdGE6IHsgaWQgfSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coZGlzY291bnQpO1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezE2fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19PlxuICAgICAgICAgIO2VoOyduOqwgDp7XCIgXCJ9XG4gICAgICAgICAgPE51bWJlckZvcm1hdFxuICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICB2YWx1ZT17cHJpY2UgKiAoKDEwMCAtIGRpc2NvdW50LnJhdGUpICogMC4wMSl9XG4gICAgICAgICAgICBkaXNwbGF5VHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICDsm5BcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17OH0gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICAgIHNpemU9e1wic21hbGxcIn1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIG1heExlbmd0aD17MX1cbiAgICAgICAgICBhZGRvbkJlZm9yZT17PFBsdXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrQWRkfSAvPn1cbiAgICAgICAgICBhZGRvbkFmdGVyPXs8TWludXNPdXRsaW5lZCBvbkNsaWNrPXtvbkNsaWNrU3Vic3RyYWN0fSAvPn1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmVhckFtb3VudFRvZ2dsZTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDTEVBUl9DQVJUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9jYXJ0JztcblxuZXhwb3J0IGNvbnN0IG9uQ2xpY2tQYXltZW50ID0gKFxuICB0eXBlLFxuICBwcm9kdWN0LFxuICBpc0xvZ2dlZEluLFxuICBzZXNzaW9uLFxuICBvbkNoYW5nZVRvZ2dsZU1vZGFsLFxuICBkaXNwYXRjaCxcbiAgY2FydCxcbiAgcm91dGVyLFxuICBTaG9wSWQsXG4gIFRhYmxlSWRcbikgPT4ge1xuICBjb25zdCBvbldpbmRvd1Njcm9sbCA9ICgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAgfSk7XG4gIH07XG5cbiAgbGV0IG9yaWdpbkRhdGE7XG4gIGxldCBhbW91bnQgPSAwO1xuICBsZXQgbmFtZTtcbiAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICBpZiAodHlwZSA9PSAnc2luZ2xlJykge1xuICAgICAgb3JpZ2luRGF0YSA9IHtcbiAgICAgICAgVXNlcklkOiBzZXNzaW9uLmlkLFxuICAgICAgICBVc2VyTmFtZTogc2Vzc2lvbi5uYW1lLFxuICAgICAgICBQcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgIFNob3BJZDogcHJvZHVjdC5TaG9wLmlkLFxuICAgICAgICBwcmljZTogcHJvZHVjdC5kaXNjb3VudFxuICAgICAgICAgID8gcHJvZHVjdC5wcmljZSAqICgxMDAgLSBwcm9kdWN0LmRpc2NvdW50KSAqIDAuMDEgKiBwcm9kdWN0LnF1YW50aXR5XG4gICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSxcbiAgICAgICAgcXVhbnRpdHk6IHByb2R1Y3QucXVhbnRpdHksXG4gICAgICAgIFNob3BOYW1lOiBwcm9kdWN0LlNob3AubmFtZSxcbiAgICAgICAgUHJvZHVjdFRpdGxlOiBwcm9kdWN0LnRpdGxlLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FydC5tYXAoXG4gICAgICAgIChwcm9kdWN0KSA9PlxuICAgICAgICAgIChhbW91bnQgKz0gcHJvZHVjdC5EaXNjb3VudFxuICAgICAgICAgICAgPyBwcm9kdWN0LnByaWNlICpcbiAgICAgICAgICAgICAgKDEwMCAtIHByb2R1Y3QuRGlzY291bnQucmF0ZSkgKlxuICAgICAgICAgICAgICAwLjAxICpcbiAgICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eSlcbiAgICAgICk7XG4gICAgICBuYW1lID1cbiAgICAgICAgY2FydC5sZW5ndGggPiAxXG4gICAgICAgICAgPyBgJHtwcm9kdWN0LnRpdGxlfSDsmbggJHtjYXJ0Lmxlbmd0aCAtIDF9IOqxtGBcbiAgICAgICAgICA6IHByb2R1Y3QudGl0bGU7XG4gICAgICBvcmlnaW5EYXRhID0gY2FydC5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBQcm9kdWN0SWQ6IHByb2R1Y3QuaWQsXG4gICAgICAgICAgU2hvcElkOiBwcm9kdWN0LlNob3AuaWQsXG4gICAgICAgICAgVXNlcklkOiBzZXNzaW9uLmlkLFxuICAgICAgICAgIFVzZXJOYW1lOiBzZXNzaW9uLm5hbWUsXG4gICAgICAgICAgcHJpY2U6IHByb2R1Y3QuRGlzY291bnRcbiAgICAgICAgICAgID8gcHJvZHVjdC5wcmljZSAqICgxMDAgLSBwcm9kdWN0LkRpc2NvdW50LnJhdGUpICogMC4wMVxuICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlLFxuICAgICAgICAgIHF1YW50aXR5OiBwcm9kdWN0LnF1YW50aXR5LFxuICAgICAgICAgIFNob3BOYW1lOiBwcm9kdWN0LlNob3AubmFtZSxcbiAgICAgICAgICBQcm9kdWN0VGl0bGU6IHByb2R1Y3QudGl0bGUsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXN0b21fZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxuICAgICAgdHlwZSA9PSAnc2luZ2xlJyA/IFtvcmlnaW5EYXRhXSA6IG9yaWdpbkRhdGFcbiAgICApO1xuXG4gICAgaWYgKElNUCAhPT0gbnVsbCkge1xuICAgICAgb25XaW5kb3dTY3JvbGwoKTtcbiAgICAgIElNUC5pbml0KHByb2Nlc3MuZW52LklBTVBPUlRfS0VZKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gRGF0ZS5ub3coKTtcbiAgICAgIElNUC5yZXF1ZXN0X3BheShcbiAgICAgICAge1xuICAgICAgICAgIHBheV9tZXRob2Q6ICdjYXJkJyxcbiAgICAgICAgICBuYW1lOiB0eXBlICE9PSAnY2FydCcgPyBwcm9kdWN0LnRpdGxlIDogbmFtZSxcbiAgICAgICAgICBNZXJjaGFudF91aWQ6ICd1aWQnICsgdG9kYXksXG4gICAgICAgICAgYW1vdW50OlxuICAgICAgICAgICAgdHlwZSAhPT0gJ2NhcnQnXG4gICAgICAgICAgICAgID8gcHJvZHVjdC5EaXNjb3VudFxuICAgICAgICAgICAgICAgID8gcHJvZHVjdC5wcmljZSAqXG4gICAgICAgICAgICAgICAgICAoMTAwIC0gcHJvZHVjdC5EaXNjb3VudC5yYXRlKSAqXG4gICAgICAgICAgICAgICAgICAwLjAxICpcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHlcbiAgICAgICAgICAgICAgICA6IHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnF1YW50aXR5XG4gICAgICAgICAgICAgIDogYW1vdW50LFxuICAgICAgICAgIGN1c3RvbV9kYXRhLFxuICAgICAgICB9LFxuICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN1Y2Nlc3MsIG1lcmNoYW50X3VpZCwgZXJyb3JfbXNnIH0gPSByZXNwb25zZTtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgLnBvc3QoYCR7cHJvY2Vzcy5lbnYuQkFDS0VORF9JUH0vcGF5bWVudHMvY29tcGxldGVgLCB7XG4gICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgIGB0eXBlOiAke3R5cGV9LCBTaG9wSWQ6ICR7U2hvcElkfSwgVGFibGVJZDogJHtUYWJsZUlkfWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQ0xFQVJfQ0FSVF9SRVFVRVNUIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09ICdjYXJ0Jykge1xuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICAgIFRhYmxlSWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgID8gYC9tZW51LyR7U2hvcElkfWBcbiAgICAgICAgICAgICAgICAgICAgICA6IGAvbWVudS8ke1Nob3BJZH0vJHtUYWJsZUlkfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChg6rKw7KCcIOyLpO2MqDogJHtlcnJvcl9tc2d9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvbkNoYW5nZVRvZ2dsZU1vZGFsKCk7XG4gIH1cbn07XG4iLCJ2YXIgZT1yZXF1aXJlKFwicmVhY3RcIiksdD1yZXF1aXJlKFwicmVhY3QtZG9tXCIpO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZTp7ZGVmYXVsdDplfX12YXIgbz0vKiNfX1BVUkVfXyovbihlKSxhPS8qI19fUFVSRV9fKi9uKHQpLGk9ZnVuY3Rpb24odCxuLG8pe2UudXNlRWZmZWN0KGZ1bmN0aW9uKCl7aWYodCYmbyl7dmFyIGU9ZnVuY3Rpb24oKXt2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7cmV0dXJuIHZvaWQgMD09PWU/byh0KTpvLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KGUpKX07cmV0dXJuIGtha2FvLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodCxuLGUpLGZ1bmN0aW9uKCl7a2FrYW8ubWFwcy5ldmVudC5yZW1vdmVMaXN0ZW5lcih0LG4sZSl9fX0sW3QsbixvXSl9LHI9by5kZWZhdWx0LmNyZWF0ZUNvbnRleHQodm9pZCAwKSxzPWZ1bmN0aW9uKHQpe3ZhciBuPWUudXNlQ29udGV4dChyKTtpZighbil0aHJvdyBuZXcgRXJyb3IoKHQ/dCtcIiBDb21wb25lbnRcIjpcInVzZU1hcFwiKStcIiBtdXN0IGV4aXN0IGluc2lkZSBNYXAgQ29tcG9uZW50IVwiKTtyZXR1cm4gbn0sdT1mdW5jdGlvbih0KXt2YXIgbj10LmlkLG89dC5jbGFzc05hbWUsaT10LnN0eWxlLHI9dC5tYXAscz10LnBvc2l0aW9uLHU9dC5tYXJrZXIsbD10LmNoaWxkcmVuLGM9dC5hbHRpdHVkZSxmPXQuZGlzYWJsZUF1dG9QYW4sZD10LnJhbmdlLHA9dC5yZW1vdmFibGUsaz10LnpJbmRleCxtPXQub25DcmVhdGUsdj1lLnVzZVJlZihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPWUudXNlTWVtbyhmdW5jdGlvbigpe3ZhciBlPW5ldyBrYWthby5tYXBzLkluZm9XaW5kb3coe2FsdGl0dWRlOmMsZGlzYWJsZUF1dG9QYW46ZixyYW5nZTpkLHJlbW92YWJsZTpwLHpJbmRleDprLGNvbnRlbnQ6di5jdXJyZW50LHBvc2l0aW9uOnN9KTtyZXR1cm4gdi5jdXJyZW50LnN0eWxlLndoaXRlU3BhY2U9XCJub3dyYXBcIixlfSxbZixwXSk7cmV0dXJuIGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIGcub3BlbihyLHUpLGZ1bmN0aW9uKCl7Zy5jbG9zZSgpfX0sW3IsdV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7bSYmbShnKX0sW2csbV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZyYmZy5zZXRQb3NpdGlvbihzKX0sW2csc10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZyYmYyYmZy5zZXRBbHRpdHVkZShjKX0sW2csY10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZyYmZCYmZy5zZXRSYW5nZShkKX0sW2csZF0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZyYmayYmZy5zZXRaSW5kZXgoayl9LFtnLGtdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJih2LmN1cnJlbnQuaWQ9bil9LFtuXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtvJiYodi5jdXJyZW50LmNsYXNzTmFtZT1vKX0sW29dKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2lmKGkpZm9yKHZhciBlPTAsdD1PYmplY3QuZW50cmllcyhpKTtlPHQubGVuZ3RoO2UrKyl7dmFyIG49dFtlXTt2LmN1cnJlbnQuc3R5bGVbblswXV09blsxXX19LFtpXSksYS5kZWZhdWx0LmNyZWF0ZVBvcnRhbChsLHYuY3VycmVudCl9LGw9by5kZWZhdWx0LmNyZWF0ZUNvbnRleHQodm9pZCAwKSxjPWZ1bmN0aW9uKHQpe3ZhciBuPXQubWFwLGE9dC5wb3NpdGlvbixyPXQuY2hpbGRyZW4scz10LmFsdGl0dWRlLGM9dC5jbGlja2FibGUsZj10LmRyYWdnYWJsZSxkPXQuaW1hZ2UscD10LmluZm9XaW5kb3dPcHRpb25zLGs9dC5vbkNyZWF0ZSxtPXQub25DbGljayx2PXQub25EcmFnRW5kLGc9dC5vbkRyYWdTdGFydCxDPXQub25Nb3VzZU91dCx3PXQub25Nb3VzZU92ZXIseT10Lm9wYWNpdHksRT10LnJhbmdlLE09dC50aXRsZSxoPXQuekluZGV4LHg9ZS51c2VDb250ZXh0KGwpLGI9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBrYWthby5tYXBzLk1hcmtlcih7YWx0aXR1ZGU6cyxjbGlja2FibGU6YyxkcmFnZ2FibGU6ZixpbWFnZTpkLG9wYWNpdHk6eSxyYW5nZTpFLHRpdGxlOk0sekluZGV4OmgscG9zaXRpb246YX0pfSxbXSk7cmV0dXJuIGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIHg/eC5hZGRNYXJrZXIoYik6Yi5zZXRNYXAobiksZnVuY3Rpb24oKXt4P3gucmVtb3ZlTWFya2VyKGIpOmIuc2V0TWFwKG51bGwpfX0sW24seCxiXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtrJiZrKGIpfSxbYixrXSksaShiLFwiY2xpY2tcIixtKSxpKGIsXCJkcmFnc3RhcnRcIixnKSxpKGIsXCJkcmFnZW5kXCIsdiksaShiLFwibW91c2VvdXRcIixDKSxpKGIsXCJtb3VzZW92ZXJcIix3KSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJmImJmEmJmIuc2V0UG9zaXRpb24oYSl9LFtuLGIsYV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7biYmYiYmZCYmYi5zZXRJbWFnZShkKX0sW24sYixkXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtuJiZiJiZzJiZiLnNldEFsdGl0dWRlKHMpfSxbbixiLHNdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJmImJnZvaWQgMCE9PWMmJmIuc2V0Q2xpY2thYmxlKGMpfSxbbixiLGNdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJmImJnZvaWQgMCE9PWYmJmIuc2V0RHJhZ2dhYmxlKGYpfSxbbixiLGZdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJmImJnkmJmIuc2V0T3BhY2l0eSh5KX0sW24sYix5XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtuJiZiJiZFJiZiLnNldFJhbmdlKEUpfSxbbixiLEVdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJmImJk0mJmIuc2V0VGl0bGUoTSl9LFtuLGIsTV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7biYmYiYmaCYmYi5zZXRaSW5kZXgoaCl9LFtuLGIsaF0pLHI/by5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodSx7cG9zaXRpb246YSxtYXA6bixtYXJrZXI6YixpZDpudWxsPT1wP3ZvaWQgMDpwLmlkLGNsYXNzTmFtZTpudWxsPT1wP3ZvaWQgMDpwLmNsYXNzTmFtZSxzdHlsZTpudWxsPT1wP3ZvaWQgMDpwLnN0eWxlLGFsdGl0dWRlOm51bGw9PXA/dm9pZCAwOnAuYWx0aXR1ZGUsZGlzYWJsZUF1dG9QYW46bnVsbD09cD92b2lkIDA6cC5kaXNhYmxlQXV0b1BhbixyYW5nZTpudWxsPT1wP3ZvaWQgMDpwLnJhbmdlLHJlbW92YWJsZTpudWxsPT1wP3ZvaWQgMDpwLnJlbW92YWJsZSx6SW5kZXg6bnVsbD09cD92b2lkIDA6cC56SW5kZXh9LHIpOm51bGx9O2Z1bmN0aW9uIGYoZSx0KXtyZXR1cm4oZj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuX19wcm90b19fPXQsZX0pKGUsdCl9dmFyIGQ9by5kZWZhdWx0LmNyZWF0ZUNvbnRleHQodm9pZCAwKSxwPWZ1bmN0aW9uKHQpe3ZhciBuPWUudXNlQ29udGV4dChkKTtpZighbil0aHJvdyBuZXcgRXJyb3IoKHQ/dCtcIiBDb21wb25lbnRcIjpcInVzZVJvYWR2aWV3XCIpK1wiIG11c3QgZXhpc3QgaW5zaWRlIFJvYWR2aWV3IENvbXBvbmVudCFcIik7cmV0dXJuIG59O2V4cG9ydHMuQWJzdHJhY3RPdmVybGF5PWZ1bmN0aW9uKHQpe3ZhciBuPXQuZHJhdyxvPXQub25BZGQsYT10Lm9uUmVtb3ZlLGk9dC5vbkNyZWF0ZSxyPXMoKSx1PWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKGUpe3ZhciB0LG47ZnVuY3Rpb24gbyh0LG4sbyl7dmFyIGE7cmV0dXJuKGE9ZS5jYWxsKHRoaXMpfHx0aGlzKS5kcmF3PXQsYS5vbkFkZD1uLGEub25SZW1vdmU9byxhfXJldHVybiBuPWUsKHQ9bykucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsZih0LG4pLG99KGtha2FvLm1hcHMuQWJzdHJhY3RPdmVybGF5KSkobixvLGEpfSxbbixvLGFdKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gdS5zZXRNYXAociksZnVuY3Rpb24oKXt1LnNldE1hcChudWxsKX19LFtyLHVdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2kmJmkodSl9LFt1LGldKSxudWxsfSxleHBvcnRzLkNpcmNsZT1mdW5jdGlvbih0KXt2YXIgbj10LmNlbnRlcixvPXQucmFkaXVzLGE9dC5maWxsQ29sb3Iscj10LmZpbGxPcGFjaXR5LHU9dC5zdHJva2VDb2xvcixsPXQuc3Ryb2tlT3BhY2l0eSxjPXQuc3Ryb2tlU3R5bGUsZj10LnN0cm9rZVdlaWdodCxkPXQuekluZGV4LHA9dC5vbk1vdXNlb3ZlcixrPXQub25Nb3VzZW91dCxtPXQub25Nb3VzZW1vdmUsdj10Lm9uTW91c2Vkb3duLGc9dC5vbkNsaWNrLEM9dC5vbkNyZWF0ZSx3PXMoXCJDaXJjbGVcIikseT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTGF0TG5nKG4ubGF0LG4ubG5nKX0sW24ubGF0LG4ubG5nXSksRT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuQ2lyY2xlKHtjZW50ZXI6eSxyYWRpdXM6byxmaWxsQ29sb3I6YSxmaWxsT3BhY2l0eTpyLHN0cm9rZUNvbG9yOnUsc3Ryb2tlT3BhY2l0eTpsLHN0cm9rZVN0eWxlOmMsc3Ryb2tlV2VpZ2h0OmYsekluZGV4OmR9KX0sW10pO3JldHVybiBlLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiBFLnNldE1hcCh3KSxmdW5jdGlvbigpe0Uuc2V0TWFwKG51bGwpfX0sW3csRV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7QyYmQyhFKX0sW0UsQ10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RSYmRS5zZXRQb3NpdGlvbih5KX0sW0UseV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RS5zZXRSYWRpdXMobyl9LFtFLG9dKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2QmJkUuc2V0WkluZGV4KGQpfSxbRSxkXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtFLnNldE9wdGlvbnMoe2ZpbGxDb2xvcjphLGZpbGxPcGFjaXR5OnIsc3Ryb2tlQ29sb3I6dSxzdHJva2VPcGFjaXR5Omwsc3Ryb2tlU3R5bGU6YyxzdHJva2VXZWlnaHQ6Zn0pfSxbRSxhLHIsdSxsLGMsZl0pLGkoRSxcIm1vdXNlb3ZlclwiLHApLGkoRSxcIm1vdXNlb3V0XCIsayksaShFLFwibW91c2Vtb3ZlXCIsbSksaShFLFwibW91c2Vkb3duXCIsdiksaShFLFwiY2xpY2tcIixnKSxudWxsfSxleHBvcnRzLkN1c3RvbU92ZXJsYXlNYXA9ZnVuY3Rpb24odCl7dmFyIG49dC5pZCxvPXQuY2xhc3NOYW1lLGk9dC5zdHlsZSxyPXQucG9zaXRpb24sdT10LmNoaWxkcmVuLGM9dC5jbGlja2FibGUsZj10LnhBbmNob3IsZD10LnlBbmNob3IscD10LnpJbmRleCxrPXQub25DcmVhdGUsbT1lLnVzZUNvbnRleHQobCksdj1zKFwiQ3VzdG9tT3ZlcmxheU1hcFwiKSxnPWUudXNlUmVmKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLEM9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBrYWthby5tYXBzLkxhdExuZyhyLmxhdCxyLmxuZyl9LFtyLmxhdCxyLmxuZ10pLHc9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBrYWthby5tYXBzLkN1c3RvbU92ZXJsYXkoe2NsaWNrYWJsZTpjLHhBbmNob3I6Zix5QW5jaG9yOmQsekluZGV4OnAscG9zaXRpb246Qyxjb250ZW50OmcuY3VycmVudH0pfSxbYyxmLGRdKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtpZih2KXJldHVybiBtP20uYWRkTWFya2VyKHcpOncuc2V0TWFwKHYpLGZ1bmN0aW9uKCl7bT9tLnJlbW92ZU1hcmtlcih3KTp3LnNldE1hcChudWxsKX19LFt2LG0sd10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ayYmayh3KX0sW3csa10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7dy5zZXRQb3NpdGlvbihDKX0sW3csQ10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cCYmdy5zZXRaSW5kZXgocCl9LFt3LHBdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe24mJihnLmN1cnJlbnQuaWQ9bil9LFtuXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtvJiYoZy5jdXJyZW50LmNsYXNzTmFtZT1vKX0sW29dKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2lmKGkpZm9yKHZhciBlPTAsdD1PYmplY3QuZW50cmllcyhpKTtlPHQubGVuZ3RoO2UrKyl7dmFyIG49dFtlXTtnLmN1cnJlbnQuc3R5bGVbblswXV09blsxXX19LFtpXSksYS5kZWZhdWx0LmNyZWF0ZVBvcnRhbCh1LGcuY3VycmVudCl9LGV4cG9ydHMuQ3VzdG9tT3ZlcmxheVJvYWR2aWV3PWZ1bmN0aW9uKHQpe3ZhciBuPXQuaWQsbz10LmNsYXNzTmFtZSxpPXQuc3R5bGUscj10LnBvc2l0aW9uLHM9dC5jaGlsZHJlbix1PXQuY2xpY2thYmxlLGw9dC54QW5jaG9yLGM9dC55QW5jaG9yLGY9dC56SW5kZXgsZD10LmFsdGl0dWRlLGs9dC5yYW5nZSxtPXQuaXNGb2N1cyx2PXQub25DcmVhdGUsZz1wKFwiQ3VzdG9tT3ZlcmxheVJvYWR2aWV3XCIpLEM9ZS51c2VSZWYoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdz1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm5cImxhdFwiaW4gcj9uZXcga2FrYW8ubWFwcy5MYXRMbmcoci5sYXQsci5sbmcpOm5ldyBrYWthby5tYXBzLlZpZXdwb2ludChyLnBhbixyLnRpbHQsci56b29tLHIucGFub0lkKX0sW3IubGF0LHIubG5nLHIucGFuLHIudGlsdCxyLnpvb20sci5wYW5vSWRdKSx5PWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcga2FrYW8ubWFwcy5DdXN0b21PdmVybGF5KHtjbGlja2FibGU6dSx4QW5jaG9yOmwseUFuY2hvcjpjLHpJbmRleDpmLHBvc2l0aW9uOncsY29udGVudDpDLmN1cnJlbnR9KX0sW3UsbCxjXSk7cmV0dXJuIGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7aWYoZyl7aWYoeS5zZXRNYXAoZyksbSl7dmFyIGU9Zy5nZXRQcm9qZWN0aW9uKCkudmlld3BvaW50RnJvbUNvb3Jkcyh5LmdldFBvc2l0aW9uKCkseS5nZXRBbHRpdHVkZSgpKTtnLnNldFZpZXdwb2ludChlKX1yZXR1cm4gZnVuY3Rpb24oKXt5LnNldE1hcChudWxsKX19fSxbeSxnXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt2JiZ2KHkpfSxbeSx2XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt5LnNldFBvc2l0aW9uKHcpfSxbeSx3XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtmJiZ5LnNldFpJbmRleChmKX0sW3ksZl0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZCYmeS5zZXRBbHRpdHVkZShkKX0sW3ksZF0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ayYmeS5zZXRSYW5nZShrKX0sW3ksa10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7biYmKEMuY3VycmVudC5pZD1uKX0sW25dKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe28mJihDLmN1cnJlbnQuY2xhc3NOYW1lPW8pfSxbb10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7aWYoaSlmb3IodmFyIGU9MCx0PU9iamVjdC5lbnRyaWVzKGkpO2U8dC5sZW5ndGg7ZSsrKXt2YXIgbj10W2VdO0MuY3VycmVudC5zdHlsZVtuWzBdXT1uWzFdfX0sW2ldKSxhLmRlZmF1bHQuY3JlYXRlUG9ydGFsKHMsQy5jdXJyZW50KX0sZXhwb3J0cy5FbGxpcHNlPWZ1bmN0aW9uKHQpe3ZhciBuPXQuY2VudGVyLG89dC5yeCxhPXQucnkscj10LmZpbGxDb2xvcix1PXQuZmlsbE9wYWNpdHksbD10LnN0cm9rZUNvbG9yLGM9dC5zdHJva2VPcGFjaXR5LGY9dC5zdHJva2VTdHlsZSxkPXQuc3Ryb2tlV2VpZ2h0LHA9dC56SW5kZXgsaz10Lm9uTW91c2VvdmVyLG09dC5vbk1vdXNlb3V0LHY9dC5vbk1vdXNlbW92ZSxnPXQub25Nb3VzZWRvd24sQz10Lm9uQ2xpY2ssdz10Lm9uQ3JlYXRlLHk9cyhcIkVsbGlwc2VcIiksRT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTGF0TG5nKG4ubGF0LG4ubG5nKX0sW24ubGF0LG4ubG5nXSksTT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuRWxsaXBzZSh7Y2VudGVyOkUscng6byxyeTphLGZpbGxDb2xvcjpyLGZpbGxPcGFjaXR5OnUsc3Ryb2tlQ29sb3I6bCxzdHJva2VPcGFjaXR5OmMsc3Ryb2tlU3R5bGU6ZixzdHJva2VXZWlnaHQ6ZCx6SW5kZXg6cH0pfSxbXSk7cmV0dXJuIGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIE0uc2V0TWFwKHkpLGZ1bmN0aW9uKCl7TS5zZXRNYXAobnVsbCl9fSxbeSxNXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt3JiZ3KE0pfSxbTSx3XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtNJiZNLnNldFBvc2l0aW9uKEUpfSxbTSxFXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtNLnNldFJhZGl1cyhvLGEpfSxbTSxvLGFdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe3AmJk0uc2V0WkluZGV4KHApfSxbTSxwXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtNLnNldE9wdGlvbnMoe2ZpbGxDb2xvcjpyLGZpbGxPcGFjaXR5OnUsc3Ryb2tlQ29sb3I6bCxzdHJva2VPcGFjaXR5OmMsc3Ryb2tlU3R5bGU6ZixzdHJva2VXZWlnaHQ6ZH0pfSxbTSxyLHUsbCxjLGYsZF0pLGkoTSxcIm1vdXNlb3ZlclwiLGspLGkoTSxcIm1vdXNlb3V0XCIsbSksaShNLFwibW91c2Vtb3ZlXCIsdiksaShNLFwibW91c2Vkb3duXCIsZyksaShNLFwiY2xpY2tcIixDKSxudWxsfSxleHBvcnRzLk1hcD1mdW5jdGlvbih0KXt2YXIgbj10LmlkLGE9dm9pZCAwPT09bj9cImtha2FvLW1hcC1jb250YWluZXJcIjpuLHM9dC5zdHlsZSx1PXQuY2hpbGRyZW4sbD10LmNlbnRlcixjPXQuaXNQYW50byxmPXZvaWQgMCE9PWMmJmMsZD10LnBhZGRpbmcscD12b2lkIDA9PT1kPzMyOmQsaz10LmNsYXNzTmFtZSxtPXQuZGlzYWJsZURvdWJsZUNsaWNrLHY9dC5kaXNhYmxlRG91YmxlQ2xpY2tab29tLGc9dC5kcmFnZ2FibGUsQz10Lnpvb21hYmxlLHc9dC5rZXlib2FyZFNob3J0Y3V0cyx5PXQubGV2ZWwsRT10Lm1heExldmVsLE09dC5taW5MZXZlbCxoPXQubWFwVHlwZUlkLHg9dC5wcm9qZWN0aW9uSWQsYj10LnNjcm9sbHdoZWVsLE89dC50aWxlQW5pbWF0aW9uLEk9dC5vbkNyZWF0ZSxMPXQub25Cb3VuZHNDaGFuZ2VkLHo9dC5vbkNlbnRlckNoYW5nZWQsUD10Lm9uQ2xpY2ssUz10Lm9uRG91YmxlQ2xpY2ssQT10Lm9uRHJhZyxSPXQub25EcmFnRW5kLFc9dC5vbkRyYWdTdGFydCxEPXQub25JZGxlLFo9dC5vbk1hcHR5cGVpZENoYW5nZWQsTj10Lm9uTW91c2VNb3ZlLFQ9dC5vblJpZ2h0Q2xpY2ssaj10Lm9uVGlsZUxvYWRlZCxfPXQub25ab29tQ2hhbmdlZCxWPXQub25ab29tU3RhcnQscT1lLnVzZVN0YXRlKCksRj1xWzBdLEc9cVsxXSxCPWUudXNlUmVmKG51bGwpO3JldHVybiBlLnVzZUVmZmVjdChmdW5jdGlvbigpe3dpbmRvdy5rYWthbz9CLmN1cnJlbnQmJmtha2FvLm1hcHMubG9hZChmdW5jdGlvbigpe3ZhciBlPVwibGF0XCJpbiBsP25ldyBrYWthby5tYXBzLkxhdExuZyhsLmxhdCxsLmxuZyk6bmV3IGtha2FvLm1hcHMuQ29vcmRzKGwueCxsLnkpLHQ9bmV3IGtha2FvLm1hcHMuTWFwKEIuY3VycmVudCx7Y2VudGVyOmUsZGlzYWJsZURvdWJsZUNsaWNrOm0sZGlzYWJsZURvdWJsZUNsaWNrWm9vbTp2LGRyYWdnYWJsZTpnLGtleWJvYXJkU2hvcnRjdXRzOncsbGV2ZWw6eSxtYXBUeXBlSWQ6aCxwcm9qZWN0aW9uSWQ6eCxzY3JvbGx3aGVlbDpiLHRpbGVBbmltYXRpb246T30pO0codCl9KTpjb25zb2xlLndhcm4oXCJrYWthbyBtYXAgamF2YXNjcmlwdCBhcGnrpbwg66i87KCAIOu2iOufrOyZgOyVvCDtlanri4jri6QuIGBodHRwczovL2FwaXMubWFwLmtha2FvLmNvbS93ZWIvZ3VpZGVgXCIpfSxbbSx2LGgsT10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RiYmSSYmSShGKX0sW0YsSV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7aWYoRil7dmFyIGU9Ri5nZXRDZW50ZXIoKTtlIGluc3RhbmNlb2Yga2FrYW8ubWFwcy5Db29yZHMmJihlPWUudG9MYXRMbmcoKSk7dmFyIHQ9XCJsYXRcImluIGw/bmV3IGtha2FvLm1hcHMuTGF0TG5nKGwubGF0LGwubG5nKTpuZXcga2FrYW8ubWFwcy5Db29yZHMobC54LGwueSk7dCBpbnN0YW5jZW9mIGtha2FvLm1hcHMuTGF0TG5nJiZ0LmVxdWFscyhlKXx8dCBpbnN0YW5jZW9mIGtha2FvLm1hcHMuQ29vcmRzJiZ0LnRvTGF0TG5nKCkuZXF1YWxzKGUpfHwoZj9GLnBhblRvKHQscCk6Ri5zZXRDZW50ZXIodCkpfX0sW0YsbC5sYXQsbC5sbmcsbC54LGwueV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RiYmdm9pZCAwIT09ZyYmRi5zZXREcmFnZ2FibGUoZyl9LFtGLGddKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe0YmJnZvaWQgMCE9PUMmJkYuc2V0Wm9vbWFibGUoQyl9LFtGLENdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe0YmJncmJlwiYm9vbGVhblwiPT10eXBlb2YgdyYmRi5zZXRLZXlib2FyZFNob3J0Y3V0cyh3KX0sW0Ysd10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RiYmeSYmRi5zZXRMZXZlbCh5KX0sW0YseV0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7RiYmaCYmRi5zZXRNYXBUeXBlSWQoaCl9LFtGLGhdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe0YmJngmJkYuc2V0UHJvamVjdGlvbklkKHgpfSxbRix4XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtGJiZFJiZGLnNldE1heExldmVsKEUpfSxbRixFXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtGJiZNJiZGLnNldE1pbkxldmVsKE0pfSxbRixNXSksaShGLFwiYm91bmRzX2NoYW5nZWRcIixMKSxpKEYsXCJjZW50ZXJfY2hhbmdlZFwiLHopLGkoRixcImNsaWNrXCIsUCksaShGLFwiZGJsY2xpY2tcIixTKSxpKEYsXCJkcmFnXCIsQSksaShGLFwiZHJhZ3N0YXJ0XCIsVyksaShGLFwiZHJhZ2VuZFwiLFIpLGkoRixcImlkbGVcIixEKSxpKEYsXCJtYXB0eXBlaWRfY2hhbmdlZFwiLFopLGkoRixcIm1vdXNlbW92ZVwiLE4pLGkoRixcInJpZ2h0Y2xpY2tcIixUKSxpKEYsXCJ0aWxlc2xvYWRlZFwiLGopLGkoRixcInpvb21fY2hhbmdlZFwiLF8pLGkoRixcInpvb21fc3RhcnRcIixWKSxvLmRlZmF1bHQuY3JlYXRlRWxlbWVudChvLmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxvLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDphLHN0eWxlOnMsY2xhc3NOYW1lOmsscmVmOkJ9KSxGJiZvLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyLlByb3ZpZGVyLHt2YWx1ZTpGfSx1KSl9LGV4cG9ydHMuTWFwSW5mb1dpbmRvdz1mdW5jdGlvbih0KXt2YXIgbj10LmlkLGE9dC5jbGFzc05hbWUsaT10LnN0eWxlLHI9dC5wb3NpdGlvbixsPXQuY2hpbGRyZW4sYz10LmRpc2FibGVBdXRvUGFuLGY9dC5yZW1vdmFibGUsZD10LnpJbmRleCxwPXQub25DcmVhdGUsaz1zKFwiTWFwSW5mb1dpbmRvd1wiKSxtPWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoci5sYXQsci5sbmcpfSxbci5sYXQsci5sbmddKTtyZXR1cm4gby5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodSx7aWQ6bixjbGFzc05hbWU6YSxzdHlsZTppLGRpc2FibGVBdXRvUGFuOmMscmVtb3ZhYmxlOmYsekluZGV4OmQsbWFwOmsscG9zaXRpb246bSxvbkNyZWF0ZTpwfSxsKX0sZXhwb3J0cy5NYXBNYXJrZXI9ZnVuY3Rpb24odCl7dmFyIG49dC5pbWFnZSxhPXQucG9zaXRpb24saT10LmNoaWxkcmVuLHI9dC5jbGlja2FibGUsdT10LmRyYWdnYWJsZSxsPXQuaW5mb1dpbmRvd09wdGlvbnMsZj10Lm9uQ2xpY2ssZD10Lm9uRHJhZ0VuZCxwPXQub25EcmFnU3RhcnQsaz10Lm9uTW91c2VPdXQsbT10Lm9uTW91c2VPdmVyLHY9dC5vbkNyZWF0ZSxnPXQub3BhY2l0eSxDPXQudGl0bGUsdz10LnpJbmRleCx5PXMoXCJNYXBNYXJrZXJcIiksRT1lLnVzZU1lbW8oZnVuY3Rpb24oKXt2YXIgZSx0LG8sYSxpLHIscyx1LGwsYyxmLGQ7cmV0dXJuIG4mJm5ldyBrYWthby5tYXBzLk1hcmtlckltYWdlKG4uc3JjLG5ldyBrYWthby5tYXBzLlNpemUobi5zaXplLndpZHRoLG4uc2l6ZS5oZWlnaHQpLHthbHQ6bnVsbD09KGU9bi5vcHRpb25zKT92b2lkIDA6ZS5hbHQsY29vcmRzOm51bGw9PSh0PW4ub3B0aW9ucyk/dm9pZCAwOnQuY29vcmRzLG9mZnNldDoobnVsbD09KG89bi5vcHRpb25zKT92b2lkIDA6by5vZmZzZXQpJiZuZXcga2FrYW8ubWFwcy5Qb2ludChudWxsPT0oYT1uLm9wdGlvbnMpP3ZvaWQgMDphLm9mZnNldC54LG51bGw9PShpPW4ub3B0aW9ucyk/dm9pZCAwOmkub2Zmc2V0LnkpLHNoYXBlOm51bGw9PShyPW4ub3B0aW9ucyk/dm9pZCAwOnIuc2hhcGUsc3ByaXRlT3JpZ2luOihudWxsPT0ocz1uLm9wdGlvbnMpP3ZvaWQgMDpzLnNwcml0ZU9yaWdpbikmJm5ldyBrYWthby5tYXBzLlBvaW50KG51bGw9PSh1PW4ub3B0aW9ucyk/dm9pZCAwOnUuc3ByaXRlT3JpZ2luLngsbnVsbD09KGw9bi5vcHRpb25zKT92b2lkIDA6bC5zcHJpdGVPcmlnaW4ueSksc3ByaXRlU2l6ZToobnVsbD09KGM9bi5vcHRpb25zKT92b2lkIDA6Yy5zcHJpdGVTaXplKSYmbmV3IGtha2FvLm1hcHMuU2l6ZShudWxsPT0oZj1uLm9wdGlvbnMpP3ZvaWQgMDpmLnNwcml0ZVNpemUud2lkdGgsbnVsbD09KGQ9bi5vcHRpb25zKT92b2lkIDA6ZC5zcHJpdGVTaXplLmhlaWdodCl9KX0sW25dKSxNPWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVyblwibGF0XCJpbiBhP25ldyBrYWthby5tYXBzLkxhdExuZyhhLmxhdCxhLmxuZyk6bmV3IGtha2FvLm1hcHMuQ29vcmRzKGEueCxhLnkpLnRvTGF0TG5nKCl9LFthLmxhdCxhLmxuZyxhLngsYS55XSk7cmV0dXJuIG8uZGVmYXVsdC5jcmVhdGVFbGVtZW50KGMse21hcDp5LHBvc2l0aW9uOk0saW1hZ2U6RSxjbGlja2FibGU6cixkcmFnZ2FibGU6dSxpbmZvV2luZG93T3B0aW9uczpsLG9uQ2xpY2s6ZixvbkRyYWdFbmQ6ZCxvbkRyYWdTdGFydDpwLG9uTW91c2VPdXQ6ayxvbk1vdXNlT3ZlcjptLG9uQ3JlYXRlOnYsb3BhY2l0eTpnLHRpdGxlOkMsekluZGV4Ond9LGkpfSxleHBvcnRzLk1hcFR5cGVDb250cm9sPWZ1bmN0aW9uKHQpe3ZhciBuPXQucG9zaXRpb24sbz12b2lkIDA9PT1uP2tha2FvLm1hcHMuQ29udHJvbFBvc2l0aW9uLlRPUFJJR0hUOm4sYT1zKFwiTWFwVHlwZUNvbnRyb2xcIiksaT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTWFwVHlwZUNvbnRyb2x9LFtdKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gYS5hZGRDb250cm9sKGksbyksZnVuY3Rpb24oKXthLnJlbW92ZUNvbnRyb2woaSl9fSxbYSxvXSksbnVsbH0sZXhwb3J0cy5NYXBUeXBlSWQ9ZnVuY3Rpb24odCl7dmFyIG49dC50eXBlLG89cyhcIk1hcFR5cGVJZFwiKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4gby5hZGRPdmVybGF5TWFwVHlwZUlkKG4pLGZ1bmN0aW9uKCl7by5yZW1vdmVPdmVybGF5TWFwVHlwZUlkKG4pfX0sW28sbl0pLG51bGx9LGV4cG9ydHMuTWFya2VyQ2x1c3RlcmVyPWZ1bmN0aW9uKHQpe3ZhciBuPXQuY2hpbGRyZW4sYT10LmF2ZXJhZ2VDZW50ZXIscj10LmNhbGN1bGF0b3IsdT10LmNsaWNrYWJsZSxjPXQuZGlzYWJsZUNsaWNrWm9vbSxmPXQuZ3JpZFNpemUsZD10LmhvdmVyYWJsZSxwPXQubWluQ2x1c3RlclNpemUsaz10Lm1pbkxldmVsLG09dC5zdHlsZXMsdj10LnRleHRzLGc9dC5vbkNsdXN0ZXJjbGljayxDPXQub25DbHVzdGVyZGJsY2xpY2ssdz10Lm9uQ2x1c3RlcmVkLHk9dC5vbkNsdXN0ZXJvdXQsRT10Lm9uQ2x1c3Rlcm92ZXIsTT10Lm9uQ2x1c3RlcnJpZ2h0Y2xpY2ssaD10Lm9uQ3JlYXRlLHg9cyhcIk1hcmtlckNsdXN0ZXJlclwiKSxiPWUudXNlU3RhdGUoKSxPPWJbMF0sST1iWzFdO3JldHVybiBlLnVzZUVmZmVjdChmdW5jdGlvbigpe2lmKHdpbmRvdy5rYWthby5tYXBzLk1hcmtlckNsdXN0ZXJlcil7dmFyIGU9bmV3IGtha2FvLm1hcHMuTWFya2VyQ2x1c3RlcmVyKHthdmVyYWdlQ2VudGVyOmEsY2FsY3VsYXRvcjpyLGNsaWNrYWJsZTp1LGRpc2FibGVDbGlja1pvb206YyxncmlkU2l6ZTpmLGhvdmVyYWJsZTpkLG1pbkNsdXN0ZXJTaXplOnAsbWluTGV2ZWw6ayxzdHlsZXM6bSx0ZXh0czp2fSk7SShlKX1lbHNlIGNvbnNvbGUud2FybihcImNsdXN0ZXJlciDrnbzsnbTruIzrn6zrpqzrpbwg67OE64+EIOuhnOuTnCDtlbTslbwg7IKs7JqpIOqwgOuKpe2VqeuLiOuLpC4gYGh0dHBzOi8vYXBpcy5tYXAua2FrYW8uY29tL3dlYi9ndWlkZS8jbG9hZGxpYnJhcnlgXCIpfSxbXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtudWxsPT1PfHxPLnNldE1hcCh4KX0sW3gsT10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7TyYmaCYmaChPKX0sW08saF0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7TyYmZiYmKE8uc2V0R3JpZFNpemUoZiksTy5yZWRyYXcoKSl9LFtPLGZdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe08mJnAmJihPLnNldE1pbkNsdXN0ZXJTaXplKHApLE8ucmVkcmF3KCkpfSxbTyxwXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtPJiZ2b2lkIDAhPT1hJiYoTy5zZXRBdmVyYWdlQ2VudGVyKGEpLE8ucmVkcmF3KCkpfSxbTyxhXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtPJiZrJiYoTy5zZXRNaW5MZXZlbChrKSxPLnJlZHJhdygpKX0sW08sa10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7TyYmdiYmKE8uc2V0VGV4dHModiksTy5yZWRyYXcoKSl9LFtPLHZdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe08mJnImJihPLnNldENhbGN1bGF0b3IociksTy5yZWRyYXcoKSl9LFtPLHJdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe08mJm0mJihPLnNldFN0eWxlcyhtKSxPLnJlZHJhdygpKX0sW08sbV0pLGkoTyxcImNsdXN0ZXJjbGlja1wiLGcpLGkoTyxcImNsdXN0ZXJvdmVyXCIsRSksaShPLFwiY2x1c3Rlcm91dFwiLHkpLGkoTyxcImNsdXN0ZXJkYmxjbGlja1wiLEMpLGkoTyxcImNsdXN0ZXJyaWdodGNsaWNrXCIsTSksaShPLFwiY2x1c3RlcmVkXCIsdyksTz9vLmRlZmF1bHQuY3JlYXRlRWxlbWVudChsLlByb3ZpZGVyLHt2YWx1ZTpPfSxuKTpudWxsfSxleHBvcnRzLlBvbHlnb249ZnVuY3Rpb24odCl7dmFyIG49dC5wYXRoLG89dC5vbkNsaWNrLGE9dC5vbk1vdXNlZG93bixyPXQub25Nb3VzZW1vdmUsdT10Lm9uTW91c2VvdXQsbD10Lm9uTW91c2VvdmVyLGM9dC5vbkNyZWF0ZSxmPXQuc3Ryb2tlQ29sb3IsZD10LnN0cm9rZU9wYWNpdHkscD10LnN0cm9rZVN0eWxlLGs9dC5zdHJva2VXZWlnaHQsbT10LmZpbGxDb2xvcix2PXQuZmlsbE9wYWNpdHksZz10LnpJbmRleCxDPXMoXCJQb2x5Z29uXCIpLHc9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIG4uZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBBcnJheX0pP24ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTGF0TG5nKGUubGF0LGUubG5nKX0pfSk6bi5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBrYWthby5tYXBzLkxhdExuZyhlLmxhdCxlLmxuZyl9KX0sW25dKSx5PWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcga2FrYW8ubWFwcy5Qb2x5Z29uKHtwYXRoOncsZmlsbENvbG9yOm0sZmlsbE9wYWNpdHk6dixzdHJva2VDb2xvcjpmLHN0cm9rZU9wYWNpdHk6ZCxzdHJva2VTdHlsZTpwLHN0cm9rZVdlaWdodDprLHpJbmRleDpnfSl9LFtdKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtyZXR1cm4geS5zZXRNYXAoQyksZnVuY3Rpb24oKXtyZXR1cm4geS5zZXRNYXAobnVsbCl9fSxbQyx5XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtjJiZjKHkpfSxbeSxjXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt5LnNldE9wdGlvbnMoe2ZpbGxDb2xvcjptLGZpbGxPcGFjaXR5OnYsc3Ryb2tlQ29sb3I6ZixzdHJva2VPcGFjaXR5OmQsc3Ryb2tlU3R5bGU6cCxzdHJva2VXZWlnaHQ6a30pfSxbeSxtLHYsZixkLHAsa10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7eS5zZXRQYXRoKHcpfSxbeSx3XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtnJiZ5LnNldFpJbmRleChnKX0sW3ksZ10pLGkoeSxcIm1vdXNlb3ZlclwiLGwpLGkoeSxcIm1vdXNlb3V0XCIsdSksaSh5LFwibW91c2Vtb3ZlXCIsciksaSh5LFwibW91c2Vkb3duXCIsYSksaSh5LFwiY2xpY2tcIixvKSxudWxsfSxleHBvcnRzLlBvbHlsaW5lPWZ1bmN0aW9uKHQpe3ZhciBuPXQucGF0aCxvPXQuZW5kQXJyb3csYT10Lm9uQ2xpY2sscj10Lm9uTW91c2Vkb3duLHU9dC5vbk1vdXNlbW92ZSxsPXQub25Nb3VzZW91dCxjPXQub25Nb3VzZW92ZXIsZj10Lm9uQ3JlYXRlLGQ9dC5zdHJva2VDb2xvcixwPXQuc3Ryb2tlT3BhY2l0eSxrPXQuc3Ryb2tlU3R5bGUsbT10LnN0cm9rZVdlaWdodCx2PXQuekluZGV4LGc9cyhcIlBvbHlsaW5lXCIpLEM9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIG4uZXZlcnkoZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBBcnJheX0pP24ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTGF0TG5nKGUubGF0LGUubG5nKX0pfSk6bi5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBrYWthby5tYXBzLkxhdExuZyhlLmxhdCxlLmxuZyl9KX0sW25dKSx3PWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcga2FrYW8ubWFwcy5Qb2x5bGluZSh7cGF0aDpDLGVuZEFycm93Om8sc3Ryb2tlQ29sb3I6ZCxzdHJva2VPcGFjaXR5OnAsc3Ryb2tlU3R5bGU6ayxzdHJva2VXZWlnaHQ6bSx6SW5kZXg6dn0pfSxbXSk7cmV0dXJuIGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7cmV0dXJuIHcuc2V0TWFwKGcpLGZ1bmN0aW9uKCl7cmV0dXJuIHcuc2V0TWFwKG51bGwpfX0sW2csd10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZiYmZih3KX0sW3csZl0pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7dy5zZXRPcHRpb25zKHtlbmRBcnJvdzpvLHN0cm9rZUNvbG9yOmQsc3Ryb2tlT3BhY2l0eTpwLHN0cm9rZVN0eWxlOmssc3Ryb2tlV2VpZ2h0Om19KX0sW3csbyxkLHAsayxtXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt3LnNldFBhdGgoQyl9LFt3LENdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe3YmJncuc2V0WkluZGV4KHYpfSxbdyx2XSksaSh3LFwibW91c2VvdmVyXCIsYyksaSh3LFwibW91c2VvdXRcIixsKSxpKHcsXCJtb3VzZW1vdmVcIix1KSxpKHcsXCJtb3VzZWRvd25cIixyKSxpKHcsXCJjbGlja1wiLGEpLG51bGx9LGV4cG9ydHMuUmVjdGFuZ2xlPWZ1bmN0aW9uKHQpe3ZhciBuPXQuYm91bmRzLG89dC5vbkNsaWNrLGE9dC5vbk1vdXNlZG93bixyPXQub25Nb3VzZW1vdmUsdT10Lm9uTW91c2VvdXQsbD10Lm9uTW91c2VvdmVyLGM9dC5vbkNyZWF0ZSxmPXQuc3Ryb2tlQ29sb3IsZD10LnN0cm9rZU9wYWNpdHkscD10LnN0cm9rZVN0eWxlLGs9dC5zdHJva2VXZWlnaHQsbT10LmZpbGxDb2xvcix2PXQuZmlsbE9wYWNpdHksZz10LnpJbmRleCxDPXMoXCJSZWN0YW5nbGVcIiksdz1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuTGF0TG5nQm91bmRzKG5ldyBrYWthby5tYXBzLkxhdExuZyhuLnN3LmxhdCxuLnN3LmxuZyksbmV3IGtha2FvLm1hcHMuTGF0TG5nKG4ubmUubGF0LG4ubmUubG5nKSl9LFtuXSkseT1lLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGtha2FvLm1hcHMuUmVjdGFuZ2xlKHtib3VuZHM6dyxmaWxsQ29sb3I6bSxmaWxsT3BhY2l0eTp2LHN0cm9rZUNvbG9yOmYsc3Ryb2tlT3BhY2l0eTpkLHN0cm9rZVN0eWxlOnAsc3Ryb2tlV2VpZ2h0OmssekluZGV4Omd9KX0sW10pO3JldHVybiBlLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiB5LnNldE1hcChDKSxmdW5jdGlvbigpe3JldHVybiB5LnNldE1hcChudWxsKX19LFtDLHldKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2MmJmMoeSl9LFt5LGNdKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe3kuc2V0T3B0aW9ucyh7ZmlsbENvbG9yOm0sZmlsbE9wYWNpdHk6dixzdHJva2VDb2xvcjpmLHN0cm9rZU9wYWNpdHk6ZCxzdHJva2VTdHlsZTpwLHN0cm9rZVdlaWdodDprfSl9LFt5LG0sdixmLGQscCxrXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXt5LnNldEJvdW5kcyh3KX0sW3ksd10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7ZyYmeS5zZXRaSW5kZXgoZyl9LFt5LGddKSxpKHksXCJtb3VzZW92ZXJcIixsKSxpKHksXCJtb3VzZW91dFwiLHUpLGkoeSxcIm1vdXNlbW92ZVwiLHIpLGkoeSxcIm1vdXNlZG93blwiLGEpLGkoeSxcImNsaWNrXCIsbyksbnVsbH0sZXhwb3J0cy5Sb2Fkdmlldz1mdW5jdGlvbih0KXt2YXIgbj10LmlkLGE9dm9pZCAwPT09bj9cImtha2FvLXJvYWR2aWV3LWNvbnRhaW5lclwiOm4scj10LnN0eWxlLHM9dC5jaGlsZHJlbix1PXQucG9zaXRpb24sbD10LmNsYXNzTmFtZSxjPXQucGFuLGY9dC5wYW5vSWQscD10LnBhbm9YLGs9dC5wYW5vWSxtPXQudGlsdCx2PXQuem9vbSxnPXQub25DcmVhdGUsQz10Lm9uSW5pdCx3PXQub25QYW5vaWRDaGFuZ2UseT10Lm9uUG9zaXRpb25DaGFuZ2VkLEU9dC5vblZpZXdwb2ludENoYW5nZSxNPXQub25FcnJvckdldE5lYXJlc3RQYW5vSWQsaD1lLnVzZVN0YXRlKCEwKSx4PWhbMF0sYj1oWzFdLE89ZS51c2VTdGF0ZSgpLEk9T1swXSxMPU9bMV0sej1lLnVzZVJlZihudWxsKTtyZXR1cm4gZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtpZih3aW5kb3cua2FrYW8pe2lmKHouY3VycmVudCl7dmFyIGU9bmV3IGtha2FvLm1hcHMuUm9hZHZpZXcoei5jdXJyZW50LHtwYW46YyxwYW5vSWQ6ZixwYW5vWDpwLHBhbm9ZOmssdGlsdDptLHpvb206dn0pO0woZSl9fWVsc2UgY29uc29sZS53YXJuKFwia2FrYW8gbWFwIGphdmFzY3JpcHQgYXBp66W8IOuovOyggCDrtojrn6zsmYDslbwg7ZWp64uI64ukLiBgaHR0cHM6Ly9hcGlzLm1hcC5rYWthby5jb20vd2ViL2d1aWRlYFwiKX0sW3Asayx2XSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtJJiZnJiZnKEkpfSxbSSxnXSksZS51c2VFZmZlY3QoZnVuY3Rpb24oKXtpZihJJiYhZiYmKEkuZ2V0UG9zaXRpb24oKS5nZXRMYXQoKSE9PXUubGF0fHxJLmdldFBvc2l0aW9uKCkuZ2V0TG5nKCkhPT11LmxuZykpe3ZhciBlPW5ldyBrYWthby5tYXBzLkxhdExuZyh1LmxhdCx1LmxuZyk7KG5ldyBrYWthby5tYXBzLlJvYWR2aWV3Q2xpZW50KS5nZXROZWFyZXN0UGFub0lkKGUsdS5yYWRpdXMsZnVuY3Rpb24odCl7bnVsbD09PXQmJk0/TShJKTpJLnNldFBhbm9JZCh0LGUpfSl9fSxbSSxmLHUubGF0LHUubG5nLHUucmFkaXVzLE1dKSxlLnVzZUVmZmVjdChmdW5jdGlvbigpe2lmKEkmJmYmJmYhPT1JLmdldFBhbm9JZCgpJiYoSS5nZXRQb3NpdGlvbigpLmdldExhdCgpIT09dS5sYXR8fEkuZ2V0UG9zaXRpb24oKS5nZXRMbmcoKSE9PXUubG5nKSl7dmFyIGU9bmV3IGtha2FvLm1hcHMuTGF0TG5nKHUubGF0LHUubG5nKTtJLnNldFBhbm9JZChmLGUpfX0sW0ksZix1LmxhdCx1LmxuZ10pLGUudXNlRWZmZWN0KGZ1bmN0aW9uKCl7aWYoSSl7dmFyIGU9SS5nZXRWaWV3cG9pbnQoKTtlLnBhbj09PWMmJmUudGlsdD09PW18fChjJiYoZS5wYW49YyksbSYmKGUudGlsdD1tKSxJLnNldFZpZXdwb2ludChlKSl9fSxbSSxjLG1dKSxpKEksXCJpbml0XCIsZnVuY3Rpb24oZSl7YighMSksQyYmQyhlKX0pLGkoSSxcInBhbm9pZF9jaGFuZ2VkXCIsdyksaShJLFwidmlld3BvaW50X2NoYW5nZWRcIixFKSxpKEksXCJwb3NpdGlvbl9jaGFuZ2VkXCIseSksby5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoby5kZWZhdWx0LkZyYWdtZW50LG51bGwsby5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6YSxjbGFzc05hbWU6bCxzdHlsZTpyLHJlZjp6fSksSSYmIXgmJm8uZGVmYXVsdC5jcmVhdGVFbGVtZW50KGQuUHJvdmlkZXIse3ZhbHVlOkl9LHMpKX0sZXhwb3J0cy5Sb2Fkdmlld0luZm9XaW5kb3c9ZnVuY3Rpb24odCl7dmFyIG49dC5pZCxhPXQuY2xhc3NOYW1lLGk9dC5zdHlsZSxyPXQucG9zaXRpb24scz10LmNoaWxkcmVuLGw9dC5hbHRpdHVkZSxjPXQuZGlzYWJsZUF1dG9QYW4sZj10LnJhbmdlLGQ9dC5yZW1vdmFibGUsaz10LnpJbmRleCxtPXQub25DcmVhdGUsdj1wKFwiUm9hZHZpZXdJbmZvV2luZG93XCIpLGc9ZS51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuXCJsYXRcImluIHI/bmV3IGtha2FvLm1hcHMuTGF0TG5nKHIubGF0LHIubG5nKTpuZXcga2FrYW8ubWFwcy5WaWV3cG9pbnQoci5wYW4sci50aWx0LHIuem9vbSxyLnBhbm9JZCl9LFtyLmxhdCxyLmxuZyxyLnBhbixyLnRpbHQsci56b29tLHIucGFub0lkXSk7cmV0dXJuIG8uZGVmYXVsdC5jcmVhdGVFbGVtZW50KHUse2lkOm4sY2xhc3NOYW1lOmEsc3R5bGU6aSxhbHRpdHVkZTpsLGRpc2FibGVBdXRvUGFuOmMscmFuZ2U6ZixyZW1vdmFibGU6ZCx6SW5kZXg6ayxtYXA6dixwb3NpdGlvbjpnLG9uQ3JlYXRlOm19LHMpfSxleHBvcnRzLlJvYWR2aWV3TWFya2VyPWZ1bmN0aW9uKHQpe3ZhciBuPXQuaW1hZ2UsYT10LnBvc2l0aW9uLGk9dC5jaGlsZHJlbixyPXQuYWx0aXR1ZGUscz10LmNsaWNrYWJsZSx1PXQuaW5mb1dpbmRvd09wdGlvbnMsbD10Lm9uQ2xpY2ssZj10Lm9uRHJhZ0VuZCxkPXQub25EcmFnU3RhcnQsaz10Lm9uTW91c2VPdXQsbT10Lm9uTW91c2VPdmVyLHY9dC5vbkNyZWF0ZSxnPXQub3BhY2l0eSxDPXQucmFuZ2Usdz10LnRpdGxlLHk9dC56SW5kZXgsRT1wKFwiUm9hZHZpZXdNYXJrZXJcIiksTT1lLnVzZU1lbW8oZnVuY3Rpb24oKXt2YXIgZSx0LG8sYSxpLHIscyx1LGwsYyxmLGQ7cmV0dXJuIG4mJm5ldyBrYWthby5tYXBzLk1hcmtlckltYWdlKG4uc3JjLG5ldyBrYWthby5tYXBzLlNpemUobi5zaXplLndpZHRoLG4uc2l6ZS5oZWlnaHQpLHthbHQ6bnVsbD09KGU9bi5vcHRpb25zKT92b2lkIDA6ZS5hbHQsY29vcmRzOm51bGw9PSh0PW4ub3B0aW9ucyk/dm9pZCAwOnQuY29vcmRzLG9mZnNldDoobnVsbD09KG89bi5vcHRpb25zKT92b2lkIDA6by5vZmZzZXQpJiZuZXcga2FrYW8ubWFwcy5Qb2ludChudWxsPT0oYT1uLm9wdGlvbnMpP3ZvaWQgMDphLm9mZnNldC54LG51bGw9PShpPW4ub3B0aW9ucyk/dm9pZCAwOmkub2Zmc2V0LnkpLHNoYXBlOm51bGw9PShyPW4ub3B0aW9ucyk/dm9pZCAwOnIuc2hhcGUsc3ByaXRlT3JpZ2luOihudWxsPT0ocz1uLm9wdGlvbnMpP3ZvaWQgMDpzLnNwcml0ZU9yaWdpbikmJm5ldyBrYWthby5tYXBzLlBvaW50KG51bGw9PSh1PW4ub3B0aW9ucyk/dm9pZCAwOnUuc3ByaXRlT3JpZ2luLngsbnVsbD09KGw9bi5vcHRpb25zKT92b2lkIDA6bC5zcHJpdGVPcmlnaW4ueSksc3ByaXRlU2l6ZToobnVsbD09KGM9bi5vcHRpb25zKT92b2lkIDA6Yy5zcHJpdGVTaXplKSYmbmV3IGtha2FvLm1hcHMuU2l6ZShudWxsPT0oZj1uLm9wdGlvbnMpP3ZvaWQgMDpmLnNwcml0ZVNpemUud2lkdGgsbnVsbD09KGQ9bi5vcHRpb25zKT92b2lkIDA6ZC5zcHJpdGVTaXplLmhlaWdodCl9KX0sW25dKSxoPWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVyblwibGF0XCJpbiBhP25ldyBrYWthby5tYXBzLkxhdExuZyhhLmxhdCxhLmxuZyk6XCJ4XCJpbiBhP25ldyBrYWthby5tYXBzLkNvb3JkcyhhLngsYS55KS50b0xhdExuZygpOm5ldyBrYWthby5tYXBzLlZpZXdwb2ludChhLnBhbixhLnRpbHQsYS56b29tLGEucGFub0lkKX0sW2EubGF0LGEubG5nLGEueCxhLnksYS5wYW4sYS50aWx0LGEuem9vbSxudWxsPT1hP3ZvaWQgMDphLnBhbm9JZF0pO3JldHVybiBvLmRlZmF1bHQuY3JlYXRlRWxlbWVudChjLHttYXA6RSxwb3NpdGlvbjpoLGltYWdlOk0sYWx0aXR1ZGU6cixjbGlja2FibGU6cyxpbmZvV2luZG93T3B0aW9uczp1LG9uQ2xpY2s6bCxvbkRyYWdFbmQ6ZixvbkRyYWdTdGFydDpkLG9uTW91c2VPdXQ6ayxvbk1vdXNlT3ZlcjptLG9uQ3JlYXRlOnYsb3BhY2l0eTpnLHJhbmdlOkMsdGl0bGU6dyx6SW5kZXg6eX0saSl9LGV4cG9ydHMuWm9vbUNvbnRyb2w9ZnVuY3Rpb24odCl7dmFyIG49dC5wb3NpdGlvbixvPXZvaWQgMD09PW4/a2FrYW8ubWFwcy5Db250cm9sUG9zaXRpb24uUklHSFQ6bixhPXMoXCJab29tQ29udHJvbFwiKSxpPWUudXNlTWVtbyhmdW5jdGlvbigpe3JldHVybiBuZXcga2FrYW8ubWFwcy5ab29tQ29udHJvbH0sW10pO3JldHVybiBlLnVzZUVmZmVjdChmdW5jdGlvbigpe3JldHVybiBhLmFkZENvbnRyb2woaSxvKSxmdW5jdGlvbigpe2EucmVtb3ZlQ29udHJvbChpKX19LFthLG9dKSxudWxsfSxleHBvcnRzLnVzZU1hcD1zLGV4cG9ydHMudXNlUm9hZHZpZXc9cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmNqcy5tYXBcbiIsImltcG9ydCB7XG4gIENhcmQsXG4gIENhcm91c2VsLFxuICBJbWFnZSxcbiAgVGFnLFxuICBMaXN0LFxuICBTd2l0Y2gsXG4gIEF2YXRhcixcbiAgUm93LFxuICBDb2wsXG4gIERpdmlkZXIsXG4gIFNwYWNlLFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBOdW1iZXJPdXRsaW5lZCwgRG9sbGFyT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCBPbmVTaWduYWwgZnJvbSBcInJlYWN0LW9uZXNpZ25hbFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMT0FEX0VWRU5UU19SRVFVRVNULCBQQUdFX0NIQU5HRV9TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL2FkbWluXCI7XG5pbXBvcnQgeyBDTEVBUl9DQVJUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvY2FydFwiO1xuaW1wb3J0IE1hcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvTWFwQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1MgfSBmcm9tIFwiLi4vcmVkdWNlcnMvc2hvcFwiO1xuaW1wb3J0IE51bWJlckZvcm1hdCBmcm9tIFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiO1xuaW1wb3J0IHsgb25DbGlja1BheW1lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9HZW5lcmFsdWkvUGF5bWVudFwiO1xuaW1wb3J0IE1vZGFsSW50ZXJmYWNlIGZyb20gXCIuLi9jb21wb25lbnRzL0dlbmVyYWx1aS9Nb2RhbFwiO1xuaW1wb3J0IE5lYXJBbW91bnRUb2dnbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvR2VuZXJhbHVpL05lYXJBbW91bnRUb2dnbGVcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfWA7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG9uQ2hhbmdlVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZSgocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IFt0b2dnbGVNb2RhbCwgc2V0VG9nZ2xlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlVG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRUb2dnbGVNb2RhbCgocHJldikgPT4gIXByZXYpO1xuXG4gIGNvbnN0IHsgc2hvcENvb3JkaW5hdGVzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3ApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBMT0FEX0VWRU5UU19SRVFVRVNUIH0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFBBR0VfQ0hBTkdFX1NVQ0NFU1MsIGRhdGE6IFwiaW5kZXhcIiB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkbWluKTtcbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBzZXNzaW9uIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xuICBjb25zdCB7IHByb2R1Y3RzTmVhciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uICYmIHNob3BDb29yZGluYXRlcyA9PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL1wiLCB7IGlkOiBzZXNzaW9uLmlkIH0pXG4gICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxuICB9LCBbc2Vzc2lvbiwgc2hvcENvb3JkaW5hdGVzXSk7XG5cbiAgY29uc3QgcGF5bWVudFN0YXJ0ID0gYXN5bmMgKHByb2R1Y3QpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IENMRUFSX0NBUlRfUkVRVUVTVCB9KTtcbiAgICByZXR1cm4gb25DbGlja1BheW1lbnQoXCJzaW5nbGVcIiwgcHJvZHVjdCwgaXNMb2dnZWRJbiwgc2Vzc2lvbiwgb25DaGFuZ2VUb2dnbGVNb2RhbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZGFsSW50ZXJmYWNlXG4gICAgICAgIGNvbnRlbnQ9e1wi66Gc6re47J247J2EIO2VmOyFlOyVvCDtlanri4jri6QuXCJ9XG4gICAgICAgIHRvZ2dsZU1vZGFsPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgb25DaGFuZ2VUb2dnbGVNb2RhbD17b25DaGFuZ2VUb2dnbGVNb2RhbH1cbiAgICAgICAgdGl0bGU9e1wi6rK96rOgXCJ9XG4gICAgICAvPlxuICAgICAge2lzTG9nZ2VkSW4gJiYgc2Vzc2lvbiA/IChcbiAgICAgICAgPENhcmRcbiAgICAgICAgICB0aXRsZT17dG9nZ2xlID8gXCLso7zrs4Ag6rCA6rKMXCIgOiBcIuy2lOyynCDrqZTribRcIn1cbiAgICAgICAgICBleHRyYT17PFN3aXRjaCBvbkNsaWNrPXtvbkNoYW5nZVRvZ2dsZX0gLz59XG4gICAgICAgID5cbiAgICAgICAgICB7dG9nZ2xlID8gKFxuICAgICAgICAgICAgPE1hcENvbXBvbmVudCBzZXNzaW9uPXtzZXNzaW9ufSBzaG9wQ29vcmRpbmF0ZXM9e3Nob3BDb29yZGluYXRlc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cHJvZHVjdHNOZWFyfVxuICAgICAgICAgICAgICByZW5kZXJJdGVtPXsocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LkltYWdlc1swXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX0lQfS91cGxvYWRzLyR7cHJvZHVjdC5JbWFnZXNbMF0udXJsfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPXtcImhvcml6ZW50YWxcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkuVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsPXs1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57YFske3Byb2R1Y3QuU2hvcC5uYW1lfV0gJHtwcm9kdWN0LnRpdGxlfWB9PC9UeXBvZ3JhcGh5LlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LkRpc2NvdW50ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWcgY29sb3I9e1wibWFnZW50YVwifT4tIHtwcm9kdWN0LkRpc2NvdW50LnJhdGV9JTwvVGFnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBvbkNsaWNrPXsoKSA9PiBwYXltZW50U3RhcnQocHJvZHVjdCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOymieyLnOq1rOunpFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT7snqXrsJTqtazri4g8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmVhckFtb3VudFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk9e3Byb2R1Y3QucXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudD17cHJvZHVjdC5EaXNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj17XCJsZWZ0XCJ9IHN0eWxlPXt7IGZvbnRTaXplOiBcIjVweFwiIH19PjwvRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7LSd7JWhOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuRGlzY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByb2R1Y3QucHJpY2UgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDEwMCAtIHByb2R1Y3QuRGlzY291bnQucmF0ZSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMC4wMSAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcm9kdWN0LnByaWNlICogcHJvZHVjdC5xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU9e1widGV4dFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsm5BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5LlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDYXJkPlxuICAgICAgICAgIDxDYXJkLk1ldGFcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheSBkb3RzPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cm91dGVyLnB1c2goYC9ldmVudC8ke2V2ZW50LmlkfWApfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBQ0tFTkRfSVB9L3VwbG9hZHMvJHtldmVudC5JbWFnZXNbMF0udXJsfWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLFxuICBsb2FkaW5nU2hvcExpc3RFcnJvcjogbnVsbCxcbiAgc2hvcExpc3Q6IFtdLFxuICBvcmlnaW5hbFNob3BMaXN0OiBbXSxcbiAgaXNMb2FkaW5nVXNlckxpc3Q6IGZhbHNlLFxuICBsb2FkaW5nVXNlckxpc3RFcnJvcjogbnVsbCxcbiAgdXNlckxpc3Q6IFtdLFxuICBvcmlnaW5hbFVzZXJMaXN0OiBbXSxcbiAgZXZlbnRzOiBbXSxcbiAgbG9hZEV2ZW50c0Vycm9yOiBudWxsLFxuICBpc0xvYWRpbmdFdmVudHM6IGZhbHNlLFxuICBwYWdlSW5mbzogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1JFUVVFU1QgPSAnTE9BRF9VU0VSTElTVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX1NVQ0NFU1MgPSAnTE9BRF9VU0VSTElTVF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJMSVNUX0ZBSUxVUkUgPSAnTE9BRF9VU0VSTElTVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfUkVRVUVTVCA9ICdMT0FEX1NIT1BMSVNUX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9ICdMT0FEX1NIT1BMSVNUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfRkFJTFVSRSA9ICdMT0FEX1NIT1BMSVNUX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUkVRVUVTVCA9ICdERUxFVEVfVVNFUl9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9TVUNDRVNTID0gJ0RFTEVURV9VU0VSX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9VU0VSX0ZBSUxVUkUgPSAnREVMRVRFX1VTRVJfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0VWRU5UU19SRVFVRVNUID0gJ0xPQURfRVZFTlRTX1JFUVVFU1QnO1xuZXhwb3J0IGNvbnN0IExPQURfRVZFTlRTX1NVQ0NFU1MgPSAnTE9BRF9FVkVOVFNfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgTE9BRF9FVkVOVFNfRkFJTFVSRSA9ICdMT0FEX0VWRU5UU19GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IEFERF9FVkVOVF9SRVFVRVNUID0gJ0FERF9FVkVOVF9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBBRERfRVZFTlRfU1VDQ0VTUyA9ICdBRERfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgQUREX0VWRU5UX0ZBSUxVUkUgPSAnQUREX0VWRU5UX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9SRVFVRVNUID0gJ0VESVRfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9TVUNDRVNTID0gJ0VESVRfRVZFTlRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgRURJVF9FVkVOVF9GQUlMVVJFID0gJ0VESVRfRVZFTlRfRkFJTFVSRSc7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfRVZFTlRfUkVRVUVTVCA9ICdERUxFVEVfRVZFTlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0VWRU5UX1NVQ0NFU1MgPSAnREVMRVRFX0VWRU5UX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9FVkVOVF9GQUlMVVJFID0gJ0RFTEVURV9FVkVOVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFBBR0VfQ0hBTkdFX1NVQ0NFU1MgPSAnUEFHRV9DSEFOR0VfU1VDQ0VTUyc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1VzZXJMaXN0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nVXNlckxpc3QgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudXNlckxpc3QgPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgZHJhZnQub3JpZ2luYWxVc2VyTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdVc2VyTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkaW5nVXNlckxpc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuaXNMb2FkaW5nU2hvcExpc3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9TSE9QTElTVF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5pc0xvYWRpbmdTaG9wTGlzdCA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5zaG9wTGlzdCA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5vcmlnaW5hbFNob3BMaXN0ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX1NIT1BMSVNUX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmlzTG9hZGluZ1Nob3BMaXN0ID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LmxvYWRpbmdTaG9wTGlzdEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUEFHRV9DSEFOR0VfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucGFnZUluZm8gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGNhcnQ6IFtdLFxuICBpc0xvYWRpbmdDYXJ0OiBmYWxzZSxcbiAgaXNSZW1vdmVpbmdDYXJ0OiBmYWxzZSxcbiAgU2hvcElkOiB1bmRlZmluZWQsXG4gIFRhYmxlSWQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NBUlRfUkVRVUVTVCA9ICdMT0FEX0NBUlRfUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgTE9BRF9DQVJUX1NVQ0NFU1MgPSAnTE9BRF9DQVJUX1NVQ0NFU1MnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0FSVF9GQUlMVVJFID0gJ0xPQURfQ0FSVF9GQUlMVVJFJztcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX1JFUVVFU1QgPSAnUkVNT1ZFX0lURU1fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0lURU1fU1VDQ0VTUyA9ICdSRU1PVkVfSVRFTV9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBSRU1PVkVfSVRFTV9GQUlMVVJFID0gJ1JFTU9WRV9JVEVNX0ZBSUxVUkUnO1xuXG5leHBvcnQgY29uc3QgQUREX0lURU1fUVVBTlRJVFlfUkVRVUVTVCA9ICdBRERfSVRFTV9RVUFOVElUWV9SRVFVRVNUJztcbmV4cG9ydCBjb25zdCBTVUJTVFJBQ1RfSVRFTV9RVUFOVElUWV9SRVFVRVNUID0gJ1NVQlNUUkFDVF9JVEVNX1FVQU5USVRZX1JFUVVFU1QnO1xuXG5leHBvcnQgY29uc3QgQUREX0NBUlRfSVRFTV9SRVFVRVNUID0gJ0FERF9DQVJUX0lURU1fUkVRVUVTVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0NBUlRfSVRFTV9SRVFVRVNUID0gJ1JFTU9WRV9DQVJUX0lURU1fUkVRVUVTVCc7XG5cbmV4cG9ydCBjb25zdCBDTEVBUl9DQVJUX1JFUVVFU1QgPSAnQ0xFQVJfQ0FSVF9SRVFVRVNUJztcblxuZXhwb3J0IGNvbnN0IEdFVF9TSE9QX1RBQkxFX0lEID0gJ0dFVF9TSE9QX1RBQkxFX0lEJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9DQVJUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIExPQURfQ0FSVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogWy4uLnN0YXRlLmNhcnQsIGFjdGlvbi5kYXRhXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX0NBUlRfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUkVNT1ZFX0lURU1fUkVRVUVTVDoge1xuICAgICAgY29uc3QgaXRlbXMgPSBzdGF0ZS5jYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbLi4uaXRlbXNdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVJUX0lURU1fUkVRVUVTVDoge1xuICAgICAgY29uc3QgbmV3UHJvZHVjdCA9IGFjdGlvbi5wcm9kdWN0O1xuICAgICAgY29uc3QgcHJvZHVjdEluZGV4ID0gc3RhdGUuY2FydC5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IG5ld1Byb2R1Y3QuaWQpO1xuICAgICAgaWYgKHByb2R1Y3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY29uc3QgZm9ybWVyUHJvZHVjdCA9IHN0YXRlLmNhcnRbcHJvZHVjdEluZGV4XTtcbiAgICAgICAgY29uc3QgZmluYWxQcm9kdWN0ID0ge1xuICAgICAgICAgIC4uLmZvcm1lclByb2R1Y3QsXG4gICAgICAgICAgcXVhbnRpdHk6IGZvcm1lclByb2R1Y3QucXVhbnRpdHkgKyBuZXdQcm9kdWN0LnF1YW50aXR5LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjYXJ0TGlzdCA9IFsuLi5zdGF0ZS5jYXJ0LmZpbHRlcigodikgPT4gdi5pZCAhPT0gbmV3UHJvZHVjdC5pZCksIGZpbmFsUHJvZHVjdF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0OiBjYXJ0TGlzdCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbLi4uc3RhdGUuY2FydCwgbmV3UHJvZHVjdF0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0lURU1fUVVBTlRJVFlfUkVRVUVTVDoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5jYXJ0LmZpbmRJbmRleCgoY2FydCkgPT4gY2FydC5pZCA9PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUuY2FydFtpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPCAxMDAgPyAocXVhbnRpdHkgKz0gMSkgOiA5OTtcbiAgICAgIGNvbnN0IGNhcnQgPSBbLi4uc3RhdGUuY2FydF07XG4gICAgICBjYXJ0W2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU1VCU1RSQUNUX0lURU1fUVVBTlRJVFlfUkVRVUVTVDoge1xuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5jYXJ0LmZpbmRJbmRleCgoY2FydCkgPT4gY2FydC5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLmNhcnRbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBjYXJ0ID0gWy4uLnN0YXRlLmNhcnRdO1xuICAgICAgY2FydFtpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDTEVBUl9DQVJUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXJ0OiBbXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBHRVRfU0hPUF9UQUJMRV9JRDoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFNob3BJZDogYWN0aW9uLmRhdGEuU2hvcElkLFxuICAgICAgICBUYWJsZUlkOiBhY3Rpb24uZGF0YS5UYWJsZUlkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cbiAgfVxufTtcbiIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvcDogbnVsbCxcbiAgcHJvZHVjdHM6IFtdLFxuICBvcmlnaW5Qcm9kdWN0czogW10sXG4gIGNhdGVnb3JpZXM6IFtdLFxuICBwcm9kdWN0OiBudWxsLFxuICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICBzZWxlY3RpbmdQcm9kdWN0RXJyb3I6IG51bGwsXG4gIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSxcbiAgbG9hZGluZ1Nob3BMaXN0RXJyb3I6IG51bGwsXG4gIGlzQWRkaW5nU2hvcDogZmFsc2UsXG4gIHVzZXJDb29yZGluYXRlczogdW5kZWZpbmVkLFxuICBzaG9wQ29vcmRpbmF0ZXM6IHVuZGVmaW5lZCxcbiAgcHJvZHVjdHNOZWFyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgQUREX1BST0RVQ1RfUkVRVUVTVCA9IFwiQUREX1BST0RVQ1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IEFERF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkFERF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9GQUlMVVJFID0gXCJBRERfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRE1JTl9QUk9EVUNUU19SRVFVRVNUID0gXCJBRE1JTl9QUk9EVUNUU19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQURNSU5fUFJPRFVDVFNfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEFETUlOX1BST0RVQ1RTX0ZBSUxVUkUgPSBcIkFETUlOX1BST0RVQ1RTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9QUk9EVUNUX1JFUVVFU1QgPSBcIlNFTEVDVF9QUk9EVUNUX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTID0gXCJTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX1BST0RVQ1RfRkFJTFVSRSA9IFwiU0VMRUNUX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1JFUVVFU1QgPSBcIkVESVRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX1NVQ0NFU1MgPSBcIkVESVRfUFJPRFVDVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRURJVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkVESVRfUFJPRFVDVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBERUxFVEVfUFJPRFVDVF9SRVFVRVNUID0gXCJERUxFVEVfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BST0RVQ1RfU1VDQ0VTUyA9IFwiREVMRVRFX1BST0RVQ1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRFTEVURV9QUk9EVUNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIRUNLX1BST0RVQ1RfU1VDQ0VTUyA9IFwiQ0hFQ0tfUFJPRFVDVF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBDSEVDS19BTExfUFJPRFVDVFNfU1VDQ0VTUyA9IFwiQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IERJU0NPVU5UX1BST0RVQ1RfUkVRVUVTVCA9IFwiRElTQ09VTlRfUFJPRFVDVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRElTQ09VTlRfUFJPRFVDVF9TVUNDRVNTID0gXCJESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkUgPSBcIkRJU0NPVU5UX1BST0RVQ1RfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1JFUVVFU1QgPSBcIkRFTEVURV9ESVNDT1VOVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1MgPSBcIkRFTEVURV9ESVNDT1VOVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RJU0NPVU5UX0ZBSUxVUkUgPSBcIkRFTEVURV9ESVNDT1VOVF9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfUkVRVUVTVCA9IFwiQUREX0NBVEVHT1JZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfU1VDQ0VTUyA9IFwiQUREX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBBRERfQ0FURUdPUllfRkFJTFVSRSA9IFwiQUREX0NBVEVHT1JZX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IEVESVRfQ0FURUdPUllfUkVRVUVTVCA9IFwiRURJVF9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRURJVF9DQVRFR09SWV9TVUNDRVNTID0gXCJFRElUX0NBVEVHT1JZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBFRElUX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkVESVRfQ0FURUdPUllfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1QgPSBcIkRFTEVURV9DQVRFR09SWV9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX1NVQ0NFU1MgPSBcIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUgPSBcIkRFTEVURV9DQVRFR09SWV9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTID0gXCJDQVRFR09SWV9GSUxURVJFRF9TVUNDRVNTXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX1NIT1BMSVNUX1JFUVVFU1QgPSBcIkxPQURfU0hPUExJU1RfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IExPQURfU0hPUExJU1RfU1VDQ0VTUyA9IFwiTE9BRF9TSE9QTElTVF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9TSE9QTElTVF9GQUlMVVJFID0gXCJMT0FEX1NIT1BMSVNUX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFNFVF9DT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfQ09PUkRJTkFURVNfU1VDQ0VTU1wiO1xuXG5leHBvcnQgY29uc3QgU0VUX1NIT1BDT09SRElOQVRFU19TVUNDRVNTID0gXCJTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1NcIjtcblxuZXhwb3J0IGNvbnN0IE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1QgPSBcIk5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUID0gXCJORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBRERfUFJPRFVDVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNBZGRpbmdGaWxlczogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzOiBbYWN0aW9uLmRhdGEsIC4uLnN0YXRlLnByb2R1Y3RzXSxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IFthY3Rpb24uZGF0YSwgLi4uc3RhdGUucHJvZHVjdHNdLFxuICAgICAgICBpc0FkZGluZ0ZpbGVzOiBmYWxzZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQUREX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzQWRkaW5nRmlsZXM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFETUlOX1BST0RVQ1RTX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvYWRpbmdQcm9kdWN0czogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgQURNSU5fUFJPRFVDVFNfU1VDQ0VTUzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZ1Byb2R1Y3RzOiBmYWxzZSxcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogYWN0aW9uLmRhdGFbMF0sXG4gICAgICAgIGNhdGVnb3JpZXM6IGFjdGlvbi5kYXRhWzFdLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBBRE1JTl9QUk9EVUNUU19GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nUHJvZHVjdHM6IGZhbHNlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IGlzU2VsZWN0aW5nUHJvZHVjdDogdHJ1ZSwgLi4uc3RhdGUgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLCAuLi5zdGF0ZSwgcHJvZHVjdDogYWN0aW9uLmRhdGEgfTtcbiAgICB9XG4gICAgY2FzZSBTRUxFQ1RfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc1NlbGVjdGluZ1Byb2R1Y3Q6IGZhbHNlLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0aW5nUHJvZHVjdEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuICAgIGNhc2UgRURJVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5pZCk7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzLCBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMgfTtcbiAgICB9XG4gICAgY2FzZSBFRElUX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfUFJPRFVDVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IHN0YXRlLnByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5pZCAhPSBhY3Rpb24uZGF0YSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHMsIG9yaWdpblByb2R1Y3RzOiBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX1BST0RVQ1RfRkFJTFVSRToge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9ESVNDT1VOVF9SRVFVRVNUOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0RJU0NPVU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSA9PSAwXG4gICAgICAgICAgPyBhY3Rpb24uZGF0YVswXVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkID09IGFjdGlvbi5kYXRhWzFdKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwcm9kdWN0czogZmlsdGVyZWRQcm9kdWN0cyxcbiAgICAgICAgb3JpZ2luUHJvZHVjdHM6IGFjdGlvbi5kYXRhWzBdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIERFTEVURV9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBDSEVDS19QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUucHJvZHVjdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uaWQpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzW2luZGV4XTtcbiAgICAgIGxldCBjaGVja2VkID0gcHJvZHVjdC5jaGVja2VkO1xuICAgICAgY2hlY2tlZCA9IGNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5zdGF0ZS5wcm9kdWN0c107XG4gICAgICBwcm9kdWN0c1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIGNoZWNrZWQgfTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0hFQ0tfQUxMX1BST0RVQ1RTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHM7XG4gICAgICBwcm9kdWN0cy5tYXAoKHYpID0+ICh2LmNoZWNrZWQgPSBhY3Rpb24uY2hlY2tlZCkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkUHJvZHVjdHMgPVxuICAgICAgICBhY3Rpb24uZGF0YVsxXSAhPT0gMFxuICAgICAgICAgID8gYWN0aW9uLmRhdGFbMF0uZmlsdGVyKCh2KSA9PiB2LmlkID09IGFjdGlvbi5kYXRhWzFdKVxuICAgICAgICAgIDogYWN0aW9uLmRhdGFbMF07XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YVswXSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMsXG4gICAgICAgIG9yaWdpblByb2R1Y3RzOiBhY3Rpb24uZGF0YVswXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBESVNDT1VOVF9QUk9EVUNUX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBBRERfQ0FURUdPUllfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgICB9XG5cbiAgICBjYXNlIEFERF9DQVRFR09SWV9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllczogWy4uLnN0YXRlLmNhdGVnb3JpZXMsIGFjdGlvbi5kYXRhXSB9O1xuICAgIH1cblxuICAgIGNhc2UgQUREX0NBVEVHT1JZX0ZBSUxVUkU6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBFRElUX0NBVEVHT1JZX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuY2F0ZWdvcmllcy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsuLi5zdGF0ZS5jYXRlZ29yaWVzXTtcbiAgICAgIGNhdGVnb3JpZXNbaW5kZXhdID0gYWN0aW9uLmRhdGE7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2F0ZWdvcmllcyB9O1xuICAgIH1cblxuICAgIGNhc2UgRURJVF9DQVRFR09SWV9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgREVMRVRFX0NBVEVHT1JZX1JFUVVFU1Q6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XG4gICAgfVxuXG4gICAgY2FzZSBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gc3RhdGUuY2F0ZWdvcmllcy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkNhdGVnb3J5LmlkICE9PSBhY3Rpb24uZGF0YS5pZCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjYXRlZ29yaWVzOiBmaWx0ZXJlZENhdGVnb3JpZXMsXG4gICAgICAgIHByb2R1Y3RzLFxuICAgICAgICBvcmlnaW5Qcm9kdWN0czogcHJvZHVjdHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgRElTQ09VTlRfUFJPRFVDVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICAgIH1cblxuICAgIGNhc2UgQ0FURUdPUllfRklMVEVSRURfU1VDQ0VTUzoge1xuICAgICAgaWYgKGFjdGlvbi5pZCA9PSAwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0czogc3RhdGUub3JpZ2luUHJvZHVjdHMgfTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uLmlkID09IC0xKSB7XG4gICAgICAgIGNvbnN0IGRpc2NvdW50ZWRQcm9kdWN0ID0gc3RhdGUub3JpZ2luUHJvZHVjdHMuZmlsdGVyKCh2KSA9PiB2LkRpc2NvdW50ICE9PSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHByb2R1Y3RzOiBkaXNjb3VudGVkUHJvZHVjdCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQcm9kdWN0cyA9IHN0YXRlLm9yaWdpblByb2R1Y3RzLmZpbHRlcigodikgPT4gdi5DYXRlZ29yeS5pZCA9PSBhY3Rpb24uaWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvZHVjdHM6IGZpbHRlcmVkUHJvZHVjdHMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIExPQURfU0hPUExJU1RfUkVRVUVTVDoge1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzTG9hZGluZ1Nob3BMaXN0OiB0cnVlIH07XG4gICAgfVxuXG4gICAgY2FzZSBMT0FEX1NIT1BMSVNUX1NVQ0NFU1M6IHtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wTGlzdDogYWN0aW9uLmRhdGEsIGlzTG9hZGluZ1Nob3BMaXN0OiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGNhc2UgTE9BRF9TSE9QTElTVF9GQUlMVVJFOiB7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgaXNMb2FkaW5nU2hvcExpc3Q6IGZhbHNlLCBsb2RpbmdTaG9wTGlzdEVycm9yOiBhY3Rpb24uZXJyb3IgfTtcbiAgICB9XG5cbiAgICBjYXNlIFNFVF9DT09SRElOQVRFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXJDb29yZGluYXRlczogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuXG4gICAgY2FzZSBTRVRfU0hPUENPT1JESU5BVEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaG9wQ29vcmRpbmF0ZXM6IGFjdGlvbi5kYXRhLmxpc3QsIHByb2R1Y3RzTmVhcjogYWN0aW9uLmRhdGEucHJvZHVjdHMgfTtcbiAgICB9XG5cbiAgICBjYXNlIE5FQVJfQUREX1FVQU5USVRZX1JFUVVFU1Q6IHtcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnByb2R1Y3RzTmVhcik7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT0gYWN0aW9uLmRhdGEuaWQpO1xuICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzTmVhcltpbmRleF07XG4gICAgICBsZXQgcXVhbnRpdHkgPSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgcXVhbnRpdHkgPCAxMDAgPyAocXVhbnRpdHkgKz0gMSkgOiA5OTtcbiAgICAgIGNvbnN0IHByb2R1Y3RzTmVhciA9IFsuLi5zdGF0ZS5wcm9kdWN0c05lYXJdO1xuICAgICAgcHJvZHVjdHNOZWFyW2luZGV4XSA9IHsgLi4ucHJvZHVjdCwgcXVhbnRpdHkgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHByb2R1Y3RzTmVhcixcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBORUFSX1NVQlNUUkFDVF9RVUFOVElUWV9SRVFVRVNUOiB7XG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnByb2R1Y3RzTmVhci5maW5kSW5kZXgoKG5lYXIpID0+IG5lYXIuaWQgPT09IGFjdGlvbi5kYXRhLmlkKTtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBzdGF0ZS5wcm9kdWN0c05lYXJbaW5kZXhdO1xuICAgICAgbGV0IHF1YW50aXR5ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICAgIHF1YW50aXR5ID4gMSA/IChxdWFudGl0eSAtPSAxKSA6IDE7XG4gICAgICBjb25zdCBwcm9kdWN0c05lYXIgPSBbLi4uc3RhdGUucHJvZHVjdHNOZWFyXTtcbiAgICAgIHByb2R1Y3RzTmVhcltpbmRleF0gPSB7IC4uLnByb2R1Y3QsIHF1YW50aXR5IH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcHJvZHVjdHNOZWFyLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbnVtYmVyLWZvcm1hdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vbmVzaWduYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==