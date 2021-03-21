/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 消息详情
 * @email:  
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:14
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tslib_1 from "tslib";
let SysmessagedetailComponent = class SysmessagedetailComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SysmessagedetailComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-messagedetail',
        templateUrl: './sysmessagedetail.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], SysmessagedetailComponent);
export { SysmessagedetailComponent };
//# sourceMappingURL=sysmessagedetail.component.js.map