/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 平台核心模块
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-04-17 14:49:10
 */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as tslib_1 from "tslib";
import { CacheService } from './common/cache';
import { CommonService } from './common/common';
import { DaoService } from './service/dao.service';
import { LogService } from './service/log.service';
import { MessageService } from './service/message.service';
registerLocaleData(zh);
let FccoreModule = class FccoreModule {
};
FccoreModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule
        ],
        declarations: [],
        providers: [
            DaoService,
            LogService,
            CommonService,
            CacheService,
            MessageService
        ],
        bootstrap: []
    })
], FccoreModule);
export { FccoreModule };
//# sourceMappingURL=fccore.module.js.map