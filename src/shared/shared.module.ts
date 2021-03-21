import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        HttpClientModule
    ],
    declarations: [
        ForbiddenValidatorDirective, // 模版驱动表单-自定义验证指令
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
export class SharedModule { }
