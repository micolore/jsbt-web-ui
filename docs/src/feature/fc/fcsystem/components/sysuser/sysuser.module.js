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
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import * as tslib_1 from "tslib";
import { SysuserBusiness } from '../../business/sysuser.business';
import { SysuserComponent } from './sysuser.component';
import { Routers } from './sysuser.route';
let SysuserModule = class SysuserModule {
};
SysuserModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule
        ],
        declarations: [
            SysuserComponent
        ],
        providers: [SysuserBusiness]
    })
], SysuserModule);
export { SysuserModule };
//# sourceMappingURL=sysuser.module.js.map