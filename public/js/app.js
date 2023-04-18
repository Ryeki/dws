(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lightgallery_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lightgallery/vue */ "./node_modules/lightgallery/vue/LightGalleryVue.common.js");
/* harmony import */ var lightgallery_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lightgallery_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery/plugins/thumbnail */ "./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js");
/* harmony import */ var lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lightgallery/plugins/zoom */ "./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false,
      plugins: [lightgallery_plugins_thumbnail__WEBPACK_IMPORTED_MODULE_1__["default"], lightgallery_plugins_zoom__WEBPACK_IMPORTED_MODULE_2__["default"]]
    };
  },
  components: {
    Lightgallery: (lightgallery_vue__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    onInit: function onInit() {
      console.log('lightGallery has been initialized');
    },
    onBeforeSlide: function onBeforeSlide() {
      console.log('calling before slide');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
var __default__ = {
  data: function data() {
    return {
      isOpen: false
    };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  name: 'Contact',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var form = (0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      name: null,
      email: null,
      message: null
    });
    function submit() {
      form.post('/contact', {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return form.reset();
        }
      });
    }
    var __returned__ = {
      form: form,
      submit: submit,
      useForm: _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isOpen: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    isOpen: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-169e1534"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  }, null, -1 /* HOISTED */);
});
var _hoisted_2 = {
  "class": "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_3 = {
  "class": "min-h-screen bg-slate-50"
};
var _hoisted_4 = {
  "class": "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"my-8 text-gray-800\" data-v-169e1534><div class=\"py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-10\" data-v-169e1534><div class=\"block rounded-lg shadow-lg bg-white\" data-v-169e1534><div class=\"flex flex-wrap items-center\" data-v-169e1534><div class=\"hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12\" data-v-169e1534><img src=\"/images/dani-office.jpg\" class=\"w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg\" data-v-169e1534></div><div class=\"grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12\" data-v-169e1534><div class=\"px-6 py-12 md:px-12 text-gray-800\" data-v-169e1534><div class=\"md:flex lg:hidden mb-6\" data-v-169e1534><img src=\"/images/dani-office.jpg\" class=\"w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg\" data-v-169e1534></div><h2 class=\"text-2xl font-bold mb-4\" data-v-169e1534>Technologies I use</h2><div class=\"grid grid-cols-4 gap-6\" data-v-169e1534><div class=\"mb-4\" data-v-169e1534><p class=\"font-bold mb-1\" data-v-169e1534>Laravel</p><p class=\"text-gray-500 text-6xl\" data-v-169e1534><i class=\"devicon-laravel-plain-wordmark colored\" data-v-169e1534></i></p></div><div class=\"mb-4\" data-v-169e1534><p class=\"font-bold mb-1\" data-v-169e1534>PHP</p><p class=\"text-gray-500 text-6xl\" data-v-169e1534><i class=\"devicon-php-plain colored\" data-v-169e1534></i></p></div><div class=\"mb-4\" data-v-169e1534><p class=\"font-bold mb-1\" data-v-169e1534>MySQL</p><p class=\"text-gray-500 text-6xl\" data-v-169e1534><i class=\"devicon-mysql-plain-wordmark colored\" data-v-169e1534></i></p></div><div class=\"mb-4\" data-v-169e1534><p class=\"font-bold mb-1\" data-v-169e1534>jQuery</p><p class=\"text-gray-500 text-6xl\" data-v-169e1534><i class=\"devicon-jquery-plain-wordmark colored\" data-v-169e1534></i></p></div><div class=\"mb-4\" data-v-169e1534><p class=\"font-bold mb-1\" data-v-169e1534>Vue.js</p><p class=\"text-gray-500 text-6xl\" data-v-169e1534><i class=\"devicon-vuejs-plain-wordmark colored\" data-v-169e1534></i></p></div></div></div></div></div></div></div></section>", 1);
var _hoisted_6 = {
  "class": "dark:bg-gray-900"
};
var _hoisted_7 = {
  "class": "px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-10"
};
var _hoisted_8 = {
  "class": "flex flex-wrap items-center text-center"
};
var _hoisted_9 = {
  "class": "text-gray-800 text-3xl font-bold mb-1"
};
var _hoisted_10 = ["href"];
var _hoisted_11 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_navbardws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbardws");
  var _component_lightgallery = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("lightgallery");
  var _component_footerdws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footerdws");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.title) + " - DWS", 1 /* TEXT */), _hoisted_1];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbardws, {
    isOpen: $data.isOpen
  }, null, 8 /* PROPS */, ["isOpen"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block "), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_ctx.$page.props.galleries, function (gallery) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: gallery.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(gallery.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_lightgallery, {
      settings: {
        speed: 500,
        plugins: $data.plugins
      },
      onInit: $options.onInit,
      onBeforeSlide: $options.onBeforeSlide,
      "class": "mb-4"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(gallery.images, function (img) {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
            href: img.thumb,
            "class": "gallery-item"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
            "class": "shadow-lg rounded-lg",
            src: img.original
          }, null, 8 /* PROPS */, _hoisted_11)], 8 /* PROPS */, _hoisted_10);
        }), 256 /* UNKEYED_FRAGMENT */))];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["settings", "onInit", "onBeforeSlide"])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footerdws)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_2 = {
  "class": "min-h-screen bg-slate-50"
};
var _hoisted_3 = {
  "class": "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
};
var _hoisted_4 = {
  "class": "dark:bg-gray-900"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative overflow-hidden bg-no-repeat bg-cover",
  style: {
    "background-position": "50%",
    "background-image": "url('/images/contact-page.jpg')",
    "height": "400px"
  }
}, null, -1 /* HOISTED */);
var _hoisted_6 = {
  "class": "container text-gray-800 px-4 md:px-12"
};
var _hoisted_7 = {
  "class": "block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6",
  style: {
    "margin-top": "-100px",
    "background": "hsla(0, 0%, 100%, 0.8)",
    "backdrop-filter": "blur(30px)"
  }
};
var _hoisted_8 = {
  "class": "flex flex-wrap"
};
var _hoisted_9 = {
  "class": "grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0"
};
var _hoisted_10 = {
  "class": "text-3xl font-bold mt-0 mb-4"
};
var _hoisted_11 = ["onSubmit"];
var _hoisted_12 = {
  "class": "form-group mb-6"
};
var _hoisted_13 = {
  "class": "form-group mb-6"
};
var _hoisted_14 = {
  "class": "form-group mb-6"
};
var _hoisted_15 = {
  key: 0,
  "class": "alert"
};
var _hoisted_16 = {
  key: 1,
  "class": "success"
};
var _hoisted_17 = ["disabled"];
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow-0 shrink-0 basis-auto w-full xl:w-7/12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "headset",
  "class": "w-5 text-blue-600",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow ml-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-bold"
}, "Technical support"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "support@example.com"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "+1 234-567-89")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex items-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-4rounded-md shadow-md w-14 h-14 flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-5 text-blue-600",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow ml-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-bold"
}, "Sales questions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "sales@example.com"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "+1 234-567-89")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex align-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "shrink-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-5 text-blue-600",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "grow ml-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-bold"
}, "Press"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "press@example.com"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-gray-500"
}, "+1 234-567-89")])])])])], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_navbardws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbardws");
  var _component_footerdws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footerdws");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.title) + " - DWS", 1 /* TEXT */)];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbardws, {
    isOpen: $data.isOpen
  }, null, 8 /* PROPS */, ["isOpen"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    id: "name",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.name = $event;
    }),
    placeholder: "Name"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    id: "email",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.email = $event;
    }),
    placeholder: "Email address"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    id: "message",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.message = $event;
    }),
    rows: "3",
    placeholder: "Message"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.message]])]), _ctx.$page.props.flash.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.error), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.$page.props.flash.success ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.success), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "submit",
    "class": "w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
    disabled: $setup.form.processing
  }, "Send", 8 /* PROPS */, _hoisted_17)], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_11)]), _hoisted_18])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Section: Design Block ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footerdws)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"
};
var _hoisted_2 = {
  "class": "min-h-screen bg-slate-50"
};
var _hoisted_3 = {
  "class": "mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"
};
var _hoisted_4 = {
  "class": "dark:bg-gray-900"
};
var _hoisted_5 = {
  "class": "py-8 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-10"
};
var _hoisted_6 = {
  "class": "flex justify-center text-center"
};
var _hoisted_7 = {
  "class": "max-w-[800px]"
};
var _hoisted_8 = {
  "class": "text-gray-800 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6"
};
var _hoisted_9 = {
  "class": "text-gray-500 text-lg mb-6"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div id=\"carouselExampleIndicators\" class=\"carousel slide relative\" data-bs-ride=\"carousel\"><div class=\"carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4\"><button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button><button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button><button type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button></div><div class=\"carousel-inner relative w-full overflow-hidden\"><div class=\"carousel-item active float-left w-full\"><img src=\"https://mdbcdn.b-cdn.net/img/new/slides/041.webp\" class=\"block w-full shadow-lg rounded-lg\" alt=\"Wild Landscape\"></div><div class=\"carousel-item float-left w-full\"><img src=\"https://mdbcdn.b-cdn.net/img/new/slides/042.webp\" class=\"block w-full shadow-lg rounded-lg\" alt=\"Camera\"></div><div class=\"carousel-item float-left w-full\"><img src=\"https://mdbcdn.b-cdn.net/img/new/slides/043.webp\" class=\"block w-full shadow-lg rounded-lg\" alt=\"Exotic Fruits\"></div></div><button class=\"carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"prev\"><span class=\"carousel-control-prev-icon inline-block bg-no-repeat\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span></button><button class=\"carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0\" type=\"button\" data-bs-target=\"#carouselExampleIndicators\" data-bs-slide=\"next\"><span class=\"carousel-control-next-icon inline-block bg-no-repeat\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span></button></div>", 1);
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_navbardws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbardws");
  var _component_footerdws = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footerdws");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.title) + " - DWS", 1 /* TEXT */)];
    }),

    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbardws, {
    isOpen: $data.isOpen
  }, null, 8 /* PROPS */, ["isOpen"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.page.excerpt), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <h1 class=\"text-3xl font-bold mt-0 mb-4\">{{ $page.props.title }}</h1>\r\n                    <h3 class=\"text-1xl text-gray-500 mb-8\">{{ $page.props.page.excerpt }}</h3> "), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "mt-6 text-gray-500",
    innerHTML: _ctx.$page.props.page.body
  }, null, 8 /* PROPS */, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.$page.props.page.image,
    "class": "max-w-full h-auto my-6 shadow-lg rounded-lg"
  }, null, 8 /* PROPS */, _hoisted_12)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footerdws)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<span class=\"text-sm text-gray-500 sm:text-center dark:text-gray-400\">© 2023 <a href=\"#\" class=\"hover:underline\">Dima Web Solutions</a>. All Rights Reserved. </span><ul class=\"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0\"><li><a href=\"#\" class=\"mr-4 hover:underline md:mr-6\">About</a></li><li><a href=\"#\" class=\"mr-4 hover:underline md:mr-6\">Privacy Policy</a></li><li><a href=\"#\" class=\"mr-4 hover:underline md:mr-6\">Licensing</a></li><li><a href=\"route(&#39;contact&#39;)\" class=\"hover:underline\">Contact</a></li></ul>", 2);
var _hoisted_4 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-slate-50 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-8"
};
var _hoisted_2 = {
  "class": "container flex flex-wrap items-center justify-between mx-auto"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/dws-logo.png",
  "class": "h-12 sm:h-12",
  alt: "Dima Web Solutions Logo"
}, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "sm:hidden"
};
var _hoisted_5 = {
  "class": "h-6 w-6 fill-current",
  viewBox: "0 0 24 24"
};
var _hoisted_6 = {
  key: 0,
  "fill-rule": "evenodd",
  d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
};
var _hoisted_7 = {
  key: 1,
  "fill-rule": "evenodd",
  d: "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
};
var _hoisted_8 = {
  "class": "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Homepage ");
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About Us ");
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact ");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "navbar-brand",
    href: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $props.isOpen = !$props.isOpen;
    }),
    type: "button",
    "class": "block text-gray-700 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_5, [$props.isOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.isOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("path", _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.isOpen ? 'block' : 'hidden', "items-center justify-between w-full md:flex md:w-auto md:order-1"]),
    id: "navbar-sticky"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('homepage'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white': _ctx.$page.props.slug == 'home',
      'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent': _ctx.$page.props.slug != 'home'
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('about'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white': _ctx.$page.props.slug == 'about',
      'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent': _ctx.$page.props.slug != 'about'
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('contact'),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'font-semibold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white': _ctx.$page.props.slug == 'contact',
      'font-semibold block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent': _ctx.$page.props.slug != 'contact'
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["href", "class"])])], 2 /* CLASS */)])]);
}

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/vue3 */ "./node_modules/@inertiajs/vue3/dist/index.esm.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ziggy */ "./vendor/tightenco/ziggy/dist/vue.js");
/* harmony import */ var ziggy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ziggy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ziggy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ziggy */ "./resources/js/ziggy.js");
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tw-elements */ "./node_modules/tw-elements/dist/js/index.min.js");
/* harmony import */ var tw_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tw_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pages_Navigation_Navbardws_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pages/Navigation/Navbardws.vue */ "./resources/js/Pages/Navigation/Navbardws.vue");
/* harmony import */ var _Pages_Navigation_Footerdws_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/Navigation/Footerdws.vue */ "./resources/js/Pages/Navigation/Footerdws.vue");






//own templates


(0,_inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.createInertiaApp)({
  resolve: function resolve(name) {
    return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
  },
  setup: function setup(_ref) {
    var el = _ref.el,
      App = _ref.App,
      props = _ref.props,
      plugin = _ref.plugin;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
      render: function render() {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(App, props);
      }
    }).use(plugin).use(ziggy__WEBPACK_IMPORTED_MODULE_2__.ZiggyVue, _ziggy__WEBPACK_IMPORTED_MODULE_3__.Ziggy).component("Link", _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.Link).component("Head", _inertiajs_vue3__WEBPACK_IMPORTED_MODULE_1__.Head).component('navbardws', _Pages_Navigation_Navbardws_vue__WEBPACK_IMPORTED_MODULE_5__["default"]).component('footerdws', _Pages_Navigation_Footerdws_vue__WEBPACK_IMPORTED_MODULE_6__["default"]).mixin({
      methods: {
        route: route
      }
    }).mount(el);
  }
});

/***/ }),

/***/ "./resources/js/ziggy.js":
/*!*******************************!*\
  !*** ./resources/js/ziggy.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ziggy": () => (/* binding */ Ziggy)
/* harmony export */ });
var Ziggy = {
  "url": "http:\/\/localhost",
  "port": null,
  "defaults": {},
  "routes": []
};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}


/***/ }),

/***/ "./vendor/tightenco/ziggy/dist/vue.js":
/*!********************************************!*\
  !*** ./vendor/tightenco/ziggy/dist/vue.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (t, r) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? r(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  function r(t, r) {
    for (var n = 0; n < r.length; n++) {
      var e = r[n];
      e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e);
    }
  }
  function n(t, n, e) {
    return n && r(t.prototype, n), e && r(t, e), Object.defineProperty(t, "prototype", {
      writable: !1
    }), t;
  }
  function e() {
    return e = Object.assign ? Object.assign.bind() : function (t) {
      for (var r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        for (var e in n) {
          Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
        }
      }
      return t;
    }, e.apply(this, arguments);
  }
  function o(t) {
    return o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, o(t);
  }
  function i(t, r) {
    return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, r) {
      return t.__proto__ = r, t;
    }, i(t, r);
  }
  function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }
  function f(t, r, n) {
    return f = u() ? Reflect.construct.bind() : function (t, r, n) {
      var e = [null];
      e.push.apply(e, r);
      var o = new (Function.bind.apply(t, e))();
      return n && i(o, n.prototype), o;
    }, f.apply(null, arguments);
  }
  function a(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return a = function a(t) {
      if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
      if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== r) {
        if (r.has(t)) return r.get(t);
        r.set(t, n);
      }
      function n() {
        return f(t, arguments, o(this).constructor);
      }
      return n.prototype = Object.create(t.prototype, {
        constructor: {
          value: n,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), i(n, t);
    }, a(t);
  }
  var c = String.prototype.replace,
    l = /%20/g,
    s = "RFC3986",
    p = {
      "default": s,
      formatters: {
        RFC1738: function RFC1738(t) {
          return c.call(t, l, "+");
        },
        RFC3986: function RFC3986(t) {
          return String(t);
        }
      },
      RFC1738: "RFC1738",
      RFC3986: s
    },
    v = Object.prototype.hasOwnProperty,
    y = Array.isArray,
    d = function () {
      for (var t = [], r = 0; r < 256; ++r) {
        t.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
      }
      return t;
    }(),
    b = function b(t, r) {
      for (var n = r && r.plainObjects ? Object.create(null) : {}, e = 0; e < t.length; ++e) {
        void 0 !== t[e] && (n[e] = t[e]);
      }
      return n;
    },
    h = {
      arrayToObject: b,
      assign: function assign(t, r) {
        return Object.keys(r).reduce(function (t, n) {
          return t[n] = r[n], t;
        }, t);
      },
      combine: function combine(t, r) {
        return [].concat(t, r);
      },
      compact: function compact(t) {
        for (var r = [{
            obj: {
              o: t
            },
            prop: "o"
          }], n = [], e = 0; e < r.length; ++e) {
          for (var o = r[e], i = o.obj[o.prop], u = Object.keys(i), f = 0; f < u.length; ++f) {
            var a = u[f],
              c = i[a];
            "object" == _typeof(c) && null !== c && -1 === n.indexOf(c) && (r.push({
              obj: i,
              prop: a
            }), n.push(c));
          }
        }
        return function (t) {
          for (; t.length > 1;) {
            var r = t.pop(),
              n = r.obj[r.prop];
            if (y(n)) {
              for (var e = [], o = 0; o < n.length; ++o) {
                void 0 !== n[o] && e.push(n[o]);
              }
              r.obj[r.prop] = e;
            }
          }
        }(r), t;
      },
      decode: function decode(t, r, n) {
        var e = t.replace(/\+/g, " ");
        if ("iso-8859-1" === n) return e.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      },
      encode: function encode(t, r, n, e, o) {
        if (0 === t.length) return t;
        var i = t;
        if ("symbol" == _typeof(t) ? i = Symbol.prototype.toString.call(t) : "string" != typeof t && (i = String(t)), "iso-8859-1" === n) return escape(i).replace(/%u[0-9a-f]{4}/gi, function (t) {
          return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
        });
        for (var u = "", f = 0; f < i.length; ++f) {
          var a = i.charCodeAt(f);
          45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || o === p.RFC1738 && (40 === a || 41 === a) ? u += i.charAt(f) : a < 128 ? u += d[a] : a < 2048 ? u += d[192 | a >> 6] + d[128 | 63 & a] : a < 55296 || a >= 57344 ? u += d[224 | a >> 12] + d[128 | a >> 6 & 63] + d[128 | 63 & a] : (a = 65536 + ((1023 & a) << 10 | 1023 & i.charCodeAt(f += 1)), u += d[240 | a >> 18] + d[128 | a >> 12 & 63] + d[128 | a >> 6 & 63] + d[128 | 63 & a]);
        }
        return u;
      },
      isBuffer: function isBuffer(t) {
        return !(!t || "object" != _typeof(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)));
      },
      isRegExp: function isRegExp(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      },
      maybeMap: function maybeMap(t, r) {
        if (y(t)) {
          for (var n = [], e = 0; e < t.length; e += 1) {
            n.push(r(t[e]));
          }
          return n;
        }
        return r(t);
      },
      merge: function t(r, n, e) {
        if (!n) return r;
        if ("object" != _typeof(n)) {
          if (y(r)) r.push(n);else {
            if (!r || "object" != _typeof(r)) return [r, n];
            (e && (e.plainObjects || e.allowPrototypes) || !v.call(Object.prototype, n)) && (r[n] = !0);
          }
          return r;
        }
        if (!r || "object" != _typeof(r)) return [r].concat(n);
        var o = r;
        return y(r) && !y(n) && (o = b(r, e)), y(r) && y(n) ? (n.forEach(function (n, o) {
          if (v.call(r, o)) {
            var i = r[o];
            i && "object" == _typeof(i) && n && "object" == _typeof(n) ? r[o] = t(i, n, e) : r.push(n);
          } else r[o] = n;
        }), r) : Object.keys(n).reduce(function (r, o) {
          var i = n[o];
          return r[o] = v.call(r, o) ? t(r[o], i, e) : i, r;
        }, o);
      }
    },
    m = Object.prototype.hasOwnProperty,
    g = {
      brackets: function brackets(t) {
        return t + "[]";
      },
      comma: "comma",
      indices: function indices(t, r) {
        return t + "[" + r + "]";
      },
      repeat: function repeat(t) {
        return t;
      }
    },
    j = Array.isArray,
    w = String.prototype.split,
    O = Array.prototype.push,
    E = function E(t, r) {
      O.apply(t, j(r) ? r : [r]);
    },
    R = Date.prototype.toISOString,
    S = p["default"],
    x = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: h.encode,
      encodeValuesOnly: !1,
      format: S,
      formatter: p.formatters[S],
      indices: !1,
      serializeDate: function serializeDate(t) {
        return R.call(t);
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
    T = function t(r, n, e, o, i, u, f, a, c, l, s, p, v, y) {
      var d,
        b = r;
      if ("function" == typeof f ? b = f(n, b) : b instanceof Date ? b = l(b) : "comma" === e && j(b) && (b = h.maybeMap(b, function (t) {
        return t instanceof Date ? l(t) : t;
      })), null === b) {
        if (o) return u && !v ? u(n, x.encoder, y, "key", s) : n;
        b = "";
      }
      if ("string" == typeof (d = b) || "number" == typeof d || "boolean" == typeof d || "symbol" == _typeof(d) || "bigint" == typeof d || h.isBuffer(b)) {
        if (u) {
          var m = v ? n : u(n, x.encoder, y, "key", s);
          if ("comma" === e && v) {
            for (var g = w.call(String(b), ","), O = "", R = 0; R < g.length; ++R) {
              O += (0 === R ? "" : ",") + p(u(g[R], x.encoder, y, "value", s));
            }
            return [p(m) + "=" + O];
          }
          return [p(m) + "=" + p(u(b, x.encoder, y, "value", s))];
        }
        return [p(n) + "=" + p(String(b))];
      }
      var S,
        T = [];
      if (void 0 === b) return T;
      if ("comma" === e && j(b)) S = [{
        value: b.length > 0 ? b.join(",") || null : void 0
      }];else if (j(f)) S = f;else {
        var k = Object.keys(b);
        S = a ? k.sort(a) : k;
      }
      for (var N = 0; N < S.length; ++N) {
        var C = S[N],
          D = "object" == _typeof(C) && void 0 !== C.value ? C.value : b[C];
        if (!i || null !== D) {
          var F = j(b) ? "function" == typeof e ? e(n, C) : n : n + (c ? "." + C : "[" + C + "]");
          E(T, t(D, F, e, o, i, u, f, a, c, l, s, p, v, y));
        }
      }
      return T;
    },
    k = Object.prototype.hasOwnProperty,
    N = Array.isArray,
    C = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: h.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
    },
    D = function D(t) {
      return t.replace(/&#(\d+);/g, function (t, r) {
        return String.fromCharCode(parseInt(r, 10));
      });
    },
    F = function F(t, r) {
      return t && "string" == typeof t && r.comma && t.indexOf(",") > -1 ? t.split(",") : t;
    },
    $ = function $(t, r, n, e) {
      if (t) {
        var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
          i = /(\[[^[\]]*])/g,
          u = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
          f = u ? o.slice(0, u.index) : o,
          a = [];
        if (f) {
          if (!n.plainObjects && k.call(Object.prototype, f) && !n.allowPrototypes) return;
          a.push(f);
        }
        for (var c = 0; n.depth > 0 && null !== (u = i.exec(o)) && c < n.depth;) {
          if (c += 1, !n.plainObjects && k.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes) return;
          a.push(u[1]);
        }
        return u && a.push("[" + o.slice(u.index) + "]"), function (t, r, n, e) {
          for (var o = e ? r : F(r, n), i = t.length - 1; i >= 0; --i) {
            var u,
              f = t[i];
            if ("[]" === f && n.parseArrays) u = [].concat(o);else {
              u = n.plainObjects ? Object.create(null) : {};
              var a = "[" === f.charAt(0) && "]" === f.charAt(f.length - 1) ? f.slice(1, -1) : f,
                c = parseInt(a, 10);
              n.parseArrays || "" !== a ? !isNaN(c) && f !== a && String(c) === a && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (u = [])[c] = o : "__proto__" !== a && (u[a] = o) : u = {
                0: o
              };
            }
            o = u;
          }
          return o;
        }(a, r, n, e);
      }
    },
    A = function A(t, r) {
      var n = function (t) {
        if (!t) return C;
        if (null != t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
        if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        return {
          allowDots: void 0 === t.allowDots ? C.allowDots : !!t.allowDots,
          allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : C.allowPrototypes,
          arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : C.arrayLimit,
          charset: void 0 === t.charset ? C.charset : t.charset,
          charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : C.charsetSentinel,
          comma: "boolean" == typeof t.comma ? t.comma : C.comma,
          decoder: "function" == typeof t.decoder ? t.decoder : C.decoder,
          delimiter: "string" == typeof t.delimiter || h.isRegExp(t.delimiter) ? t.delimiter : C.delimiter,
          depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : C.depth,
          ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
          interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : C.interpretNumericEntities,
          parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : C.parameterLimit,
          parseArrays: !1 !== t.parseArrays,
          plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : C.plainObjects,
          strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : C.strictNullHandling
        };
      }(r);
      if ("" === t || null == t) return n.plainObjects ? Object.create(null) : {};
      for (var e = "string" == typeof t ? function (t, r) {
          var n,
            e = {},
            o = (r.ignoreQueryPrefix ? t.replace(/^\?/, "") : t).split(r.delimiter, Infinity === r.parameterLimit ? void 0 : r.parameterLimit),
            i = -1,
            u = r.charset;
          if (r.charsetSentinel) for (n = 0; n < o.length; ++n) {
            0 === o[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === o[n] ? u = "utf-8" : "utf8=%26%2310003%3B" === o[n] && (u = "iso-8859-1"), i = n, n = o.length);
          }
          for (n = 0; n < o.length; ++n) {
            if (n !== i) {
              var f,
                a,
                c = o[n],
                l = c.indexOf("]="),
                s = -1 === l ? c.indexOf("=") : l + 1;
              -1 === s ? (f = r.decoder(c, C.decoder, u, "key"), a = r.strictNullHandling ? null : "") : (f = r.decoder(c.slice(0, s), C.decoder, u, "key"), a = h.maybeMap(F(c.slice(s + 1), r), function (t) {
                return r.decoder(t, C.decoder, u, "value");
              })), a && r.interpretNumericEntities && "iso-8859-1" === u && (a = D(a)), c.indexOf("[]=") > -1 && (a = N(a) ? [a] : a), e[f] = k.call(e, f) ? h.combine(e[f], a) : a;
            }
          }
          return e;
        }(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(e), u = 0; u < i.length; ++u) {
        var f = i[u],
          a = $(f, e[f], n, "string" == typeof t);
        o = h.merge(o, a, n);
      }
      return h.compact(o);
    },
    I = /*#__PURE__*/function () {
      function t(t, r, n) {
        var e, o;
        this.name = t, this.definition = r, this.bindings = null != (e = r.bindings) ? e : {}, this.wheres = null != (o = r.wheres) ? o : {}, this.config = n;
      }
      var r = t.prototype;
      return r.matchesUrl = function (t) {
        var r = this;
        if (!this.definition.methods.includes("GET")) return !1;
        var n = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function (t, n, e, o) {
            var i,
              u = "(?<" + e + ">" + ((null == (i = r.wheres[e]) ? void 0 : i.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
            return o ? "(" + n + u + ")?" : "" + n + u;
          }).replace(/^\w+:\/\//, ""),
          e = t.replace(/^\w+:\/\//, "").split("?"),
          o = e[0],
          i = e[1],
          u = new RegExp("^" + n + "/?$").exec(o);
        return !!u && {
          params: u.groups,
          query: A(i)
        };
      }, r.compile = function (t) {
        var r = this,
          n = this.parameterSegments;
        return n.length ? this.template.replace(/{([^}?]+)(\??)}/g, function (e, o, i) {
          var u, f, a;
          if (!i && [null, void 0].includes(t[o])) throw new Error("Ziggy error: '" + o + "' parameter is required for route '" + r.name + "'.");
          if (n[n.length - 1].name === o && ".*" === r.wheres[o]) return encodeURIComponent(null != (a = t[o]) ? a : "").replace(/%2F/g, "/");
          if (r.wheres[o] && !new RegExp("^" + (i ? "(" + r.wheres[o] + ")?" : r.wheres[o]) + "$").test(null != (u = t[o]) ? u : "")) throw new Error("Ziggy error: '" + o + "' parameter does not match required format '" + r.wheres[o] + "' for route '" + r.name + "'.");
          return encodeURIComponent(null != (f = t[o]) ? f : "");
        }).replace(/\/+$/, "") : this.template;
      }, n(t, [{
        key: "template",
        get: function get() {
          return ((this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "") + "/" + this.definition.uri).replace(/\/+$/, "");
        }
      }, {
        key: "parameterSegments",
        get: function get() {
          var t, r;
          return null != (t = null == (r = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r.map(function (t) {
            return {
              name: t.replace(/{|\??}/g, ""),
              required: !/\?}$/.test(t)
            };
          })) ? t : [];
        }
      }]), t;
    }(),
    P = /*#__PURE__*/function (t) {
      var r, o;
      function u(r, n, o, i) {
        var u;
        if (void 0 === o && (o = !0), (u = t.call(this) || this).t = null != i ? i : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u.t = e({}, u.t, {
          absolute: o
        }), r) {
          if (!u.t.routes[r]) throw new Error("Ziggy error: route '" + r + "' is not in the route list.");
          u.i = new I(r, u.t.routes[r], u.t), u.u = u.l(n);
        }
        return u;
      }
      o = t, (r = u).prototype = Object.create(o.prototype), r.prototype.constructor = r, i(r, o);
      var f = u.prototype;
      return f.toString = function () {
        var t = this,
          r = Object.keys(this.u).filter(function (r) {
            return !t.i.parameterSegments.some(function (t) {
              return t.name === r;
            });
          }).filter(function (t) {
            return "_query" !== t;
          }).reduce(function (r, n) {
            var o;
            return e({}, r, ((o = {})[n] = t.u[n], o));
          }, {});
        return this.i.compile(this.u) + function (t, r) {
          var n,
            e = t,
            o = function (t) {
              if (!t) return x;
              if (null != t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
              var r = t.charset || x.charset;
              if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
              var n = p["default"];
              if (void 0 !== t.format) {
                if (!m.call(p.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                n = t.format;
              }
              var e = p.formatters[n],
                o = x.filter;
              return ("function" == typeof t.filter || j(t.filter)) && (o = t.filter), {
                addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : x.addQueryPrefix,
                allowDots: void 0 === t.allowDots ? x.allowDots : !!t.allowDots,
                charset: r,
                charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : x.charsetSentinel,
                delimiter: void 0 === t.delimiter ? x.delimiter : t.delimiter,
                encode: "boolean" == typeof t.encode ? t.encode : x.encode,
                encoder: "function" == typeof t.encoder ? t.encoder : x.encoder,
                encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : x.encodeValuesOnly,
                filter: o,
                format: n,
                formatter: e,
                serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : x.serializeDate,
                skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : x.skipNulls,
                sort: "function" == typeof t.sort ? t.sort : null,
                strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : x.strictNullHandling
              };
            }(r);
          "function" == typeof o.filter ? e = (0, o.filter)("", e) : j(o.filter) && (n = o.filter);
          var i = [];
          if ("object" != _typeof(e) || null === e) return "";
          var u = g[r && r.arrayFormat in g ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices"];
          n || (n = Object.keys(e)), o.sort && n.sort(o.sort);
          for (var f = 0; f < n.length; ++f) {
            var a = n[f];
            o.skipNulls && null === e[a] || E(i, T(e[a], a, u, o.strictNullHandling, o.skipNulls, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset));
          }
          var c = i.join(o.delimiter),
            l = !0 === o.addQueryPrefix ? "?" : "";
          return o.charsetSentinel && (l += "iso-8859-1" === o.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c.length > 0 ? l + c : "";
        }(e({}, r, this.u._query), {
          addQueryPrefix: !0,
          arrayFormat: "indices",
          encodeValuesOnly: !0,
          skipNulls: !0,
          encoder: function encoder(t, r) {
            return "boolean" == typeof t ? Number(t) : r(t);
          }
        });
      }, f.p = function (t) {
        var r = this;
        t ? this.t.absolute && t.startsWith("/") && (t = this.v().host + t) : t = this.h();
        var n = {},
          o = Object.entries(this.t.routes).find(function (e) {
            return n = new I(e[0], e[1], r.t).matchesUrl(t);
          }) || [void 0, void 0];
        return e({
          name: o[0]
        }, n, {
          route: o[1]
        });
      }, f.h = function () {
        var t = this.v(),
          r = t.pathname,
          n = t.search;
        return (this.t.absolute ? t.host + r : r.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n;
      }, f.current = function (t, r) {
        var n = this.p(),
          o = n.name,
          i = n.params,
          u = n.query,
          f = n.route;
        if (!t) return o;
        var a = new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o);
        if ([null, void 0].includes(r) || !a) return a;
        var c = new I(o, f, this.t);
        r = this.l(r, c);
        var l = e({}, i, u);
        return !(!Object.values(r).every(function (t) {
          return !t;
        }) || Object.values(l).some(function (t) {
          return void 0 !== t;
        })) || Object.entries(r).every(function (t) {
          return l[t[0]] == t[1];
        });
      }, f.v = function () {
        var t,
          r,
          n,
          e,
          o,
          i,
          u = "undefined" != typeof window ? window.location : {},
          f = u.host,
          a = u.pathname,
          c = u.search;
        return {
          host: null != (t = null == (r = this.t.location) ? void 0 : r.host) ? t : void 0 === f ? "" : f,
          pathname: null != (n = null == (e = this.t.location) ? void 0 : e.pathname) ? n : void 0 === a ? "" : a,
          search: null != (o = null == (i = this.t.location) ? void 0 : i.search) ? o : void 0 === c ? "" : c
        };
      }, f.has = function (t) {
        return Object.keys(this.t.routes).includes(t);
      }, f.l = function (t, r) {
        var n = this;
        void 0 === t && (t = {}), void 0 === r && (r = this.i), null != t || (t = {}), t = ["string", "number"].includes(_typeof(t)) ? [t] : t;
        var o = r.parameterSegments.filter(function (t) {
          return !n.t.defaults[t.name];
        });
        if (Array.isArray(t)) t = t.reduce(function (t, r, n) {
          var i, u;
          return e({}, t, o[n] ? ((i = {})[o[n].name] = r, i) : "object" == _typeof(r) ? r : ((u = {})[r] = "", u));
        }, {});else if (1 === o.length && !t[o[0].name] && (t.hasOwnProperty(Object.values(r.bindings)[0]) || t.hasOwnProperty("id"))) {
          var i;
          (i = {})[o[0].name] = t, t = i;
        }
        return e({}, this.m(r), this.g(t, r));
      }, f.m = function (t) {
        var r = this;
        return t.parameterSegments.filter(function (t) {
          return r.t.defaults[t.name];
        }).reduce(function (t, n, o) {
          var i,
            u = n.name;
          return e({}, t, ((i = {})[u] = r.t.defaults[u], i));
        }, {});
      }, f.g = function (t, r) {
        var n = r.bindings,
          o = r.parameterSegments;
        return Object.entries(t).reduce(function (t, r) {
          var i,
            u,
            f = r[0],
            a = r[1];
          if (!a || "object" != _typeof(a) || Array.isArray(a) || !o.some(function (t) {
            return t.name === f;
          })) return e({}, t, ((u = {})[f] = a, u));
          if (!a.hasOwnProperty(n[f])) {
            if (!a.hasOwnProperty("id")) throw new Error("Ziggy error: object passed as '" + f + "' parameter is missing route model binding key '" + n[f] + "'.");
            n[f] = "id";
          }
          return e({}, t, ((i = {})[f] = a[n[f]], i));
        }, {});
      }, f.valueOf = function () {
        return this.toString();
      }, f.check = function (t) {
        return this.has(t);
      }, n(u, [{
        key: "params",
        get: function get() {
          var t = this.p();
          return e({}, t.params, t.query);
        }
      }]), u;
    }( /*#__PURE__*/a(String));
  t.ZiggyVue = {
    install: function install(t, r) {
      var n = function n(t, _n, e, o) {
        return void 0 === o && (o = r), function (t, r, n, e) {
          var o = new P(t, r, n, e);
          return t ? o.toString() : o;
        }(t, _n, e, o);
      };
      t.mixin({
        methods: {
          route: n
        }
      }), parseInt(t.version) > 2 && t.provide("route", n);
    }
  };
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/lightgallery/css/lightgallery.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/lightgallery/css/lightgallery.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/lightgallery/css/lg-thumbnail.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/lightgallery/css/lg-thumbnail.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/lightgallery/css/lg-zoom.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/lightgallery/css/lg-zoom.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lightgallery_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lg_thumbnail_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_lightgallery_css_lg_zoom_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.gallery-item[data-v-169e1534] {\r\n        width: 200px;\r\n        display: inline-flex;\r\n        margin: 5px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_style_index_0_id_169e1534_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_style_index_0_id_169e1534_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_style_index_0_id_169e1534_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=169e1534&scoped=true */ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true");
/* harmony import */ var _About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js */ "./resources/js/Pages/About.vue?vue&type=script&lang=js");
/* harmony import */ var _About_vue_vue_type_style_index_0_id_169e1534_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true */ "./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true");
/* harmony import */ var C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-169e1534"],['__file',"resources/js/Pages/About.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Contact.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Contact.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_2c2b26f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=2c2b26f2 */ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2");
/* harmony import */ var _Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Contact_vue_vue_type_template_id_2c2b26f2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Contact.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488 */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Navigation/Footerdws.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Navigation/Footerdws.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footerdws_vue_vue_type_template_id_4e237c93__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footerdws.vue?vue&type=template&id=4e237c93 */ "./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93");
/* harmony import */ var _Footerdws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footerdws.vue?vue&type=script&lang=js */ "./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footerdws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footerdws_vue_vue_type_template_id_4e237c93__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Navigation/Footerdws.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Navigation/Navbardws.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Navigation/Navbardws.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbardws_vue_vue_type_template_id_2aec4f04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbardws.vue?vue&type=template&id=2aec4f04 */ "./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04");
/* harmony import */ var _Navbardws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbardws.vue?vue&type=script&lang=js */ "./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js");
/* harmony import */ var C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_dws_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Navbardws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Navbardws_vue_vue_type_template_id_2aec4f04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Navigation/Navbardws.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contact.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footerdws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footerdws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footerdws.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbardws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbardws_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbardws.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_template_id_169e1534_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=template&id=169e1534&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=template&id=169e1534&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_template_id_2c2b26f2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Contact_vue_vue_type_template_id_2c2b26f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Contact.vue?vue&type=template&id=2c2b26f2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Contact.vue?vue&type=template&id=2c2b26f2");


/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=6a63e488 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");


/***/ }),

/***/ "./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footerdws_vue_vue_type_template_id_4e237c93__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footerdws_vue_vue_type_template_id_4e237c93__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footerdws.vue?vue&type=template&id=4e237c93 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Footerdws.vue?vue&type=template&id=4e237c93");


/***/ }),

/***/ "./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04 ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbardws_vue_vue_type_template_id_2aec4f04__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Navbardws_vue_vue_type_template_id_2aec4f04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Navbardws.vue?vue&type=template&id=2aec4f04 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Navigation/Navbardws.vue?vue&type=template&id=2aec4f04");


/***/ }),

/***/ "./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_About_vue_vue_type_style_index_0_id_169e1534_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/About.vue?vue&type=style&index=0&id=169e1534&lang=css&scoped=true");


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": "./resources/js/Pages/About.vue",
	"./About.vue": "./resources/js/Pages/About.vue",
	"./Contact": "./resources/js/Pages/Contact.vue",
	"./Contact.vue": "./resources/js/Pages/Contact.vue",
	"./Home": "./resources/js/Pages/Home.vue",
	"./Home.vue": "./resources/js/Pages/Home.vue",
	"./Navigation/Footerdws": "./resources/js/Pages/Navigation/Footerdws.vue",
	"./Navigation/Footerdws.vue": "./resources/js/Pages/Navigation/Footerdws.vue",
	"./Navigation/Navbardws": "./resources/js/Pages/Navigation/Navbardws.vue",
	"./Navigation/Navbardws.vue": "./resources/js/Pages/Navigation/Navbardws.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);