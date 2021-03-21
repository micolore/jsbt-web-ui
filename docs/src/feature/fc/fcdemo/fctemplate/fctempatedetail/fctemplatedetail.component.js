/*
 * @Author: kubrick
 * @Date: 2019-10-16 15:46:03
 * @LastEditors: kubrick
 * @LastEditTime: 2019-10-16 16:03:09
 * @Description:
 * @email:  
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tslib_1 from "tslib";
let FctemplatedetailComponent = class FctemplatedetailComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
FctemplatedetailComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-templatedetail',
        templateUrl: './fctemplatedetail.component.html',
        styles: [
            `
     .fc-templatedetail {
         padding: 10px;
         width: 100%;
         height: 100%;
         overflow: auto;
     }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], FctemplatedetailComponent);
export { FctemplatedetailComponent };
//# sourceMappingURL=fctemplatedetail.component.js.map