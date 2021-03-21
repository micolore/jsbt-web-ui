/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块
 * @email:  
 * @Date:  2021-03-21 16:02:48
 * @LastEditTime:  2021-03-21 09:29:28
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as tslib_1 from "tslib";
import { Routers } from './fcdemo.route';
let FcdemoModule = class FcdemoModule {
};
FcdemoModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(Routers),
        ],
        declarations: [],
        providers: []
    })
], FcdemoModule);
export { FcdemoModule };
//# sourceMappingURL=fcdemo.module.js.map