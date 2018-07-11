global.webpackJsonp([5],{

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(198);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f8ac6ca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(202);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(199)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f8ac6ca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3f8ac6ca_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/order/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f8ac6ca", Component.options)
  } else {
    hotAPI.reload("data-v-3f8ac6ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 199:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_util__ = __webpack_require__(201);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      orderList: [],
      isShow: true
    };
  },
  onShow: function onShow() {

    try {
      var value = wx.getStorageSync('selectFoods');
      if (value) {
        this.isShow = false;
        this.orderList = value;
      }
    } catch (e) {
      console.log(e);
    };
  },

  methods: {
    toIndex: function toIndex() {
      wx.switchTab({
        url: '/pages/home/main'
      });
    }
  }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatTime = function formatTime(date) {

  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  return [month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
};

var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

/* unused harmony default export */ var _unused_webpack_default_export = (formatTime);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "order"
  }, [(_vm.isShow) ? _c('div', {
    staticClass: "empty"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "order",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.toIndex
    }
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("立即下单")])])]) : _vm._e(), _vm._v(" "), _c('scroll-view', {
    staticClass: "container",
    attrs: {
      "scroll-y": true
    }
  }, _vm._l((_vm.orderList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "orderList"
    }, [_c('div', {
      staticClass: "order-title"
    }, [_c('div', {
      staticClass: "order-title-restaurantName"
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('span', {
      staticClass: "iconfont icon-icon icon"
    })]), _vm._v(" "), _c('div', {
      staticClass: "order-title-state"
    }, [_vm._v("商家已接单")])]), _vm._v(" "), _c('div', {
      staticClass: "order-content"
    }, [_c('image', {
      staticClass: "order-content-restaurantImg",
      attrs: {
        "src": item.icon
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "order-content-info"
    }, [_c('div', {
      staticClass: "order-content-info-price"
    }, [_vm._v("￥ " + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "order-content-info-howToDistribute"
    }, [_vm._v("美团小助手提供服务")])])]), _vm._v(" "), _c('div', {
      staticClass: "order-desc"
    }, [_vm._v("共" + _vm._s(item.count) + "件商品，实付"), _c('span', {
      staticStyle: {
        "font-weight": "700"
      }
    }, [_vm._v("￥ " + _vm._s(item.count * item.price))])]), _vm._v(" "), _c('div', {
      staticClass: "order-footer"
    }, [_c('div', {
      staticClass: "order-footer-orderAgain"
    }, [_vm._v("再来一单")]), _vm._v(" "), _c('div', {
      staticClass: "order-footer-goToComment"
    }, [_vm._v("去评论")])])])
  }))], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "image"
  }, [_c('image', {
    attrs: {
      "src": "/static/images/orderImg.png"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f8ac6ca", esExports)
  }
}

/***/ })

},[197]);
//# sourceMappingURL=main.js.map