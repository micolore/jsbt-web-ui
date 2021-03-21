/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块
 * @email:  
 * @Date:  2021-03-21 16:02:48
 * @LastEditTime:  2021-03-21 09:29:28
 */
import { NgModule } from '@angular/core';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import * as tslib_1 from "tslib";
import { ErrorComponent } from '../error/error.component';
import { LockscreenComponent } from '../lockscreen/lockscreen.component';
import { SyseditpasswordComponent } from './dialog/syseditpassword.dialog';
import { LayoutComponent } from './layout.component';
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib_1.__decorate([
    NgModule({
        entryComponents: [
            SyseditpasswordComponent
        ],
        imports: [
            SharedModule,
            FccomponentModule
        ],
        declarations: [
            LayoutComponent,
            SyseditpasswordComponent,
            ErrorComponent,
            LockscreenComponent,
        ],
        providers: []
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map