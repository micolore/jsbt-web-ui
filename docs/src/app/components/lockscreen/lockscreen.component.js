/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 锁屏
 * @email:  
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 10:10:10
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
let LockscreenComponent = class LockscreenComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
LockscreenComponent = tslib_1.__decorate([
    Component({
        selector: 'lockscreen',
        templateUrl: './lockscreen.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], LockscreenComponent);
export { LockscreenComponent };
//# sourceMappingURL=lockscreen.component.js.map