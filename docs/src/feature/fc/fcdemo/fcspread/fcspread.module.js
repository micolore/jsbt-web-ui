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
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents';
import { SharedModule } from 'src/shared';
import * as tslib_1 from "tslib";
import { FcspreadComponent } from './fcspread.component';
import { Routers } from './fcspread.route';
let FcspreadModule = class FcspreadModule {
};
FcspreadModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule,
            SpreadSheetsModule,
        ],
        declarations: [
            FcspreadComponent
        ],
        providers: []
    })
], FcspreadModule);
export { FcspreadModule };
//# sourceMappingURL=fcspread.module.js.map