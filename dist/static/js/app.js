global.webpackJsonp([8],{

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(39);




__webpack_require__(76);

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]));
app.$mount();

__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.getList = function () {
  wx.showLoading({
    title: '加载中'
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/home/main', 'pages/order/main', 'pages/my/main', 'pages/index/main', 'pages/pay/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '主页',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#272636",
      selectedColor: "#FFD161",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [{
        pagePath: "pages/home/main",
        iconPath: "static/images/home.png",
        selectedIconPath: "static/images/home-selected.png",
        color: "white",
        text: "首页"
      }, {
        pagePath: "pages/order/main",
        iconPath: "static/images/order.png",
        selectedIconPath: "static/images/order-selected.png",
        text: "订单"
      }, {
        pagePath: "pages/my/main",
        iconPath: "static/images/my.png",
        selectedIconPath: "static/images/my-selected.png",
        text: "我的"
      }]
    }
  }
});

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(68);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5700c745", Component.options)
  } else {
    hotAPI.reload("data-v-5700c745", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log(logs);
  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);


wx.$token = "Bearer eyJhbGciOiJIUzI1NiIsImNhbGciOiJHWklQIn0.H4sIAAAAAAAAAFXMQQqDMBBG4bvMOgOOmUjiFTxFMvkL6aJII7VFvLvtstvHxzuo9U4z3feNO56vZiBHLW80SxCJkw7RO8J7_QX1Osrgg6NHuf2LvLYFn-9JUs0RvrKhBFbFxNnSyBWarEQrFULnBWPus9N4AAAA.ziRA3yyD0E-IKlv7Ry-UN685J7s3RIDAZqZlnm-AczQ";
var defaultParam = {
    method: 'GET',
    header: { "Authorization": wx.$token }
};
wx.$ajax = function (opts) {
    return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        opts.success = function (res) {
            resolve(res);
        };
        opts.fail = function (err) {
            reject(err);
        };
        // 合并参数对象
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(defaultParam, opts);
        // 发起request请求
        wx.request(defaultParam);
    });
};

/***/ })

},[49]);
//# sourceMappingURL=app.js.map