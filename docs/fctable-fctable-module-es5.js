(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fctable-fctable-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctable/fctable.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fctable/fctable.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: kubrick\r\n * @LastEditors: kubrick\r\n * @Description: 表格\r\n * @email:  \r\n * @Date:  2021-03-21 15:57:43\r\n * @LastEditTime: 2019-04-17 12:29:13\r\n -->\r\n表格\r\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fctable/fctable.component.ts":
/*!************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctable/fctable.component.ts ***!
  \************************************************************/
/*! exports provided: FctableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctableComponent", function() { return FctableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description:表格
 * @email:  
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:17
 */


var FctableComponent = /** @class */ (function () {
    function FctableComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    FctableComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FctableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fctable',
            template: __webpack_require__(/*! raw-loader!./fctable.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fctable/fctable.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FctableComponent);
    return FctableComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctable/fctable.module.ts":
/*!*********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctable/fctable.module.ts ***!
  \*********************************************************/
/*! exports provided: FctableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctableModule", function() { return FctableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fctable_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fctable.route */ "./src/feature/fc/fcdemo/fctable/fctable.route.ts");
/* harmony import */ var _fctable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fctable.component */ "./src/feature/fc/fcdemo/fctable/fctable.component.ts");

/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块
 * @email:  
 * @Date:  2021-03-21 16:02:48
 * @LastEditTime:  2021-03-21 09:29:28
 */






var FctableModule = /** @class */ (function () {
    function FctableModule() {
    }
    FctableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fctable_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
            ],
            declarations: [
                _fctable_component__WEBPACK_IMPORTED_MODULE_6__["FctableComponent"]
            ],
            providers: []
        })
    ], FctableModule);
    return FctableModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fctable/fctable.route.ts":
/*!********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fctable/fctable.route.ts ***!
  \********************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fctable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fctable.component */ "./src/feature/fc/fcdemo/fctable/fctable.component.ts");

var Routers = [
    {
        path: 'fctable',
        component: _fctable_component__WEBPACK_IMPORTED_MODULE_0__["FctableComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fctable-fctable-module-es5.js.map