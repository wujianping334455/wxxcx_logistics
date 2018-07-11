global.webpackJsonp([7],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(193);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc7140f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cc7140f4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_cc7140f4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/my/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc7140f4", Component.options)
  } else {
    hotAPI.reload("data-v-cc7140f4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "userImg"
  }, [_c('open-data', {
    staticClass: "thumb",
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "userName"
  }, [_c('open-data', {
    staticClass: "nackname",
    attrs: {
      "lang": "zh_CN",
      "type": "userNickName",
      "mpcomid": '1'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "coupon"
  }, [_c('image', {
    staticStyle: {
      "width": "30rpx",
      "height": "30rpx"
    },
    attrs: {
      "src": "/static/images/hongbao.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("美团红包")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-icon icon"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "address"
  }, [_c('image', {
    staticStyle: {
      "width": "30rpx",
      "height": "30rpx"
    },
    attrs: {
      "src": "/static/images/address.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v(" 我的收货地址")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-icon icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tel"
  }, [_c('image', {
    staticStyle: {
      "width": "30rpx",
      "height": "30rpx"
    },
    attrs: {
      "src": "/static/images/liping.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("邀请有礼")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-icon icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tel"
  }, [_c('image', {
    staticStyle: {
      "width": "30rpx",
      "height": "30rpx"
    },
    attrs: {
      "src": "/static/images/tel.png"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("客服电话  101-097-77")]), _vm._v(" "), _c('i', {
    staticClass: "iconfont icon-icon icon"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "signOut"
  }, [_vm._v("退出账号")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-cc7140f4", esExports)
  }
}

/***/ })

},[192]);
//# sourceMappingURL=main.js.map