(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcsystem-fcsystem-module"],{

/***/ "./src/feature/fc/fcsystem/fcsystem.module.ts":
/*!****************************************************!*\
  !*** ./src/feature/fc/fcsystem/fcsystem.module.ts ***!
  \****************************************************/
/*! exports provided: FcsystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcsystemModule", function() { return FcsystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fcsystem_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcsystem.route */ "./src/feature/fc/fcsystem/fcsystem.route.ts");

/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 系统模块
 * @email:  
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:36:54
 */



let FcsystemModule = class FcsystemModule {
};
FcsystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcsystem_route__WEBPACK_IMPORTED_MODULE_3__["Routers"])
        ],
        declarations: [],
        providers: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // 自定义组件
    })
], FcsystemModule);



/***/ }),

/***/ "./src/feature/fc/fcsystem/fcsystem.route.ts":
/*!***************************************************!*\
  !*** ./src/feature/fc/fcsystem/fcsystem.route.ts ***!
  \***************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
const Routers = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | components-sysmessage-sysmessage-module */ "components-sysmessage-sysmessage-module").then(__webpack_require__.bind(null, /*! ./components/sysmessage/sysmessage.module */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessage.module.ts")).then(res => res.SysmessageModule)
    },
    {
        path: 'sysuserList',
        loadChildren: () => __webpack_require__.e(/*! import() | components-sysuser-sysuser-module */ "components-sysuser-sysuser-module").then(__webpack_require__.bind(null, /*! ./components/sysuser/sysuser.module */ "./src/feature/fc/fcsystem/components/sysuser/sysuser.module.ts")).then(res => res.SysuserModule)
    },
    {
        path: 'sysmenuList',
        loadChildren: () => __webpack_require__.e(/*! import() | components-sysmenu-sysmenu-module */ "components-sysmenu-sysmenu-module").then(__webpack_require__.bind(null, /*! ./components/sysmenu/sysmenu.module */ "./src/feature/fc/fcsystem/components/sysmenu/sysmenu.module.ts")).then(res => res.SysmenuModule)
    },
    {
        path: 'sysroleList',
        loadChildren: () => __webpack_require__.e(/*! import() | components-sysrole-sysrole-module */ "components-sysrole-sysrole-module").then(__webpack_require__.bind(null, /*! ./components/sysrole/sysrole.module */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.module.ts")).then(res => res.SysroleModule)
    },
    {
        path: 'syslogList',
        loadChildren: () => __webpack_require__.e(/*! import() | components-syslog-syslog-module */ "components-syslog-syslog-module").then(__webpack_require__.bind(null, /*! ./components/syslog/syslog.module */ "./src/feature/fc/fcsystem/components/syslog/syslog.module.ts")).then(res => res.SyslogModule)
    }
];


/***/ })

}]);
//# sourceMappingURL=fcsystem-fcsystem-module-es2015.js.map