/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块
 * @email:  
 * @Date:  2021-03-21 16:02:48
 * @LastEditTime: 2019-10-16 15:53:24
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import * as tslib_1 from "tslib";
import { FctemplatedetailComponent } from './fctempatedetail/fctemplatedetail.component';
import { Routers } from './fctemplate.route';
import { FctemplateformComponent } from './fctemplateform/fctemplateform.component';
import { FctemplatelistComponent } from './fctemplatelist/fctemplatelist.component';
import { FctemplatetreelistComponent } from './fctemplatetreelist/fctemplatetreelist.component';
let FctemplateModule = class FctemplateModule {
};
FctemplateModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule
        ],
        declarations: [
            FctemplatedetailComponent,
            FctemplateformComponent,
            FctemplatelistComponent,
            FctemplatetreelistComponent,
        ],
        providers: []
    })
], FctemplateModule);
export { FctemplateModule };
//# sourceMappingURL=fctemplate.module.js.map