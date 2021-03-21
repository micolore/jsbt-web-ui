/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 权限管理
 * @email:  
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:47
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tslib_1 from "tslib";
let SysroleComponent = class SysroleComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SysroleComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-role',
        templateUrl: './sysrole.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], SysroleComponent);
export { SysroleComponent };
//# sourceMappingURL=sysrole.component.js.map