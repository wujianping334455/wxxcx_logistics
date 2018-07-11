global.webpackJsonp([4],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(39);





var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */]));
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    navigationBarTitleText: '注册'
  }
});

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_231c0925_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(181);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-231c0925"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_231c0925_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-231c0925", Component.options)
  } else {
    hotAPI.reload("data-v-231c0925", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_dialog__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
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
            phoneNum: "13534164079",
            isAgree: false
        };
    },
    onLoad: function onLoad() {
        //this.getList();
    },
    created: function created() {},
    mounted: function mounted() {
        console.log('\u767B\u5F55\u754C\u9762\u5DF2\u6302\u8F7D...');
    },

    computed: {
        agreeSrc: function agreeSrc(vueObj) {
            return vueObj.isAgree ? "/static/images/login/register_pre.png" : "/static/images/login/register_nor.png";
        }
    },
    components: {
        'login-dialog': __WEBPACK_IMPORTED_MODULE_0__components_login_dialog__["a" /* default */]
    },
    methods: {
        formSubmit: function formSubmit() {
            wx.switchTab({
                url: '/pages/home/main',
                success: function success(res) {
                    console.log("go to home!");
                }
            });
        },
        changeDialog: function changeDialog() {
            if (this.isAgree) {
                this.isAgree = false;
            } else {
                this.isAgree = true;
                this.$store.commit('login/LOGIN_DIALOG');
            }
        }
    },
    onReachBottom: function onReachBottom() {},
    onPullDownRefreash: function onPullDownRefreash() {}
});

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_dialog_vue__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f9edd4b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_dialog_vue__ = __webpack_require__(180);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(178)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f9edd4b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_dialog_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6f9edd4b_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_dialog_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/login/dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] dialog.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f9edd4b", Component.options)
  } else {
    hotAPI.reload("data-v-6f9edd4b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);

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
            detailShow: true
        };
    },

    computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapState */])('login', {
        loginDialog: function loginDialog(state) {
            return state.loginDialog;
        }
    })),
    methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        confirmPop: function confirmPop() {
            this.loginDialog();
        }
    }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])('login', ['changeDialog'])),
    created: function created() {},
    mounted: function mounted() {}
});

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loginDialog),
      expression: "loginDialog"
    }],
    staticClass: "pop-view"
  }, [_c('div', {
    staticClass: "pop-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "pop-box"
  }, [_c('div', {
    staticClass: "pop-tile"
  }, [_vm._v("服务协议")]), _vm._v(" "), _c('scroll-view', {
    staticClass: "pop-content",
    attrs: {
      "scroll-y": "true"
    }
  }, [_vm._v("\n            1、特别声明：您寄递的快件，单票托寄物价值不应超过2万元。如托寄物价值超过2万元，您应拆分至单票价值2万元以下分别寄递。因托寄物性质无法拆分的，请您自行携带或采取其他运输方式以保障快件安全。丰巢及快递公司无审核托寄物价值的能力和义务。\n            "), _c('div', {
    staticClass: "pop-top"
  }, [_vm._v("2、为保证托寄物安全送达，您寄件时应履行以下义务： ")]), _vm._v(" "), _c('div', {
    staticClass: "pop-top"
  }, [_vm._v("（1）如实申报托寄物内容和价值，并准确、清楚地填写您、收件人的名称、地址、联系电话等资料。")]), _vm._v(" "), _c('div', {
    staticClass: "pop-top"
  }, [_vm._v("（2）根据托寄物的性质（尤其是易碎品），提供充分的防破损措施，保障托寄物安全派送。")])]), _vm._v(" "), _c('button', {
    staticClass: "pop-confirm",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.changeDialog
    }
  }, [_vm._v("我知道了")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f9edd4b", esExports)
  }
}

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('form', [_c('div', {
    staticClass: "user"
  }, [_c('div', {
    staticClass: "item border-top"
  }, [_c('div', {
    staticClass: "name-label"
  }, [_vm._v(" 手机号码：")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phoneNum),
      expression: "phoneNum"
    }],
    staticClass: "name-input",
    attrs: {
      "type": "text",
      "placeholder": "请输入本人手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.phoneNum)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phoneNum = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "name-label"
  }, [_vm._v(" 验证码：")]), _vm._v(" "), _c('input', {
    staticClass: "code-input",
    attrs: {
      "name": "code",
      "maxlength": "4",
      "placeholder": "请输入验证码"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "code-btn",
    attrs: {
      "bindtap": "sendCode"
    }
  }, [_vm._v("获取验证码")])]), _vm._v(" "), _c('div', {
    staticClass: "xieyi",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.changeDialog
    }
  }, [_c('image', {
    staticClass: "img",
    attrs: {
      "src": _vm.agreeSrc
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("我同意《坎德拉用户协议》")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.formSubmit
    }
  }, [_vm._v("注册")])], 1), _vm._v(" "), _c('login-dialog', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-231c0925", esExports)
  }
}

/***/ })

},[173]);
//# sourceMappingURL=main.js.map