/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 根模块
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-10-15 10:45:27
 */
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents';
import { FccoreModule } from 'src/fccore/fccore.module';
import { UserService } from 'src/fccore/service/user.service';
import { SysforgotComponent } from 'src/feature/fc/fcsystem/components/syspassword/sysforgot/sysforgot.component';
import { SyssigninComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignin/syssignin.component';
import { SyssignupComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignup/syssignup.component';
import { SharedModule } from 'src/shared/shared.module';
import * as tslib_1 from "tslib";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { LayoutModule } from './components/layout/layout.module';
import { LayoutService } from './service/layout.service';
import { FcRouteReuseStrategy } from './service/routereusestrategy.service';
import { ShareService } from './share.service';
registerLocaleData(zh);
let AppModule = class AppModule {
    constructor() { }
};
AppModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            RouterModule.forRoot(AppRoutes),
            FccoreModule,
            FccomponentModule,
            SharedModule,
            LayoutModule
        ],
        declarations: [
            AppComponent,
            SyssigninComponent,
            SysforgotComponent,
            SyssignupComponent,
        ],
        providers: [
            UserService,
            ShareService,
            LayoutService,
            { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy },
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            }
        ],
        bootstrap: [AppComponent]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map