/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: fccomponent平台组件模块
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-10-17 09:58:37
 */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared';
import * as tslib_1 from "tslib";
import { Fcg2barComponent } from './fcg2bar/fcg2bar.component';
import { Fcg2linerComponent } from './fcg2line/fcg2line.component';
import { Fcg2minibarComponent } from './fcg2minibar/fcg2minibar.component';
import { Fcg2pieComponent } from './fcg2pie/fcg2pie.component';
import { Fcg2radarComponent } from './fcg2radar/fcg2radar.component';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';
import { Fcverifycode } from './fcverifycode/fcverifycode.component';
let FccomponentModule = class FccomponentModule {
};
FccomponentModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            FormsModule,
            ReactiveFormsModule,
        ],
        declarations: [
            FcimgviewComponent,
            Fcg2radarComponent,
            Fcg2barComponent,
            Fcg2linerComponent,
            Fcg2minibarComponent,
            Fcg2pieComponent,
            Fcverifycode // 验证码
        ],
        exports: [
            FcimgviewComponent,
            Fcg2radarComponent,
            Fcg2barComponent,
            Fcg2linerComponent,
            Fcg2minibarComponent,
            Fcg2pieComponent,
            Fcverifycode
        ]
    })
], FccomponentModule);
export { FccomponentModule };
//# sourceMappingURL=fccomponent.module.js.map