/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 共享模块
 * @email:  
 * @Date: 2019-04-19 10:08:26
 * @LastEditTime: 2019-04-19 10:12:39
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import * as tslib_1 from "tslib";
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            RouterModule,
            ReactiveFormsModule,
            NgZorroAntdModule,
            HttpClientModule
        ],
        declarations: [
            ForbiddenValidatorDirective,
        ],
        exports: [
            CommonModule,
            FormsModule,
            RouterModule,
            ReactiveFormsModule,
            NgZorroAntdModule,
            HttpClientModule,
            ForbiddenValidatorDirective
        ],
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map