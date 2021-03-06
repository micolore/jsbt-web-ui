import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// 加载系统内部相关模块
import { FccomponentModule } from 'src/fccomponents';
import { FccoreModule } from 'src/fccore/fccore.module';
import { UserService } from 'src/fccore/service/user.service';
import { SysforgotComponent } from 'src/feature/fc/fcsystem/components/syspassword/sysforgot/sysforgot.component';
import { SyssigninComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignin/syssignin.component';
import { SyssignupComponent } from 'src/feature/fc/fcsystem/components/syspassword/syssignup/syssignup.component';
import { SharedModule } from 'src/shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.route';
import { LayoutModule } from './components/layout/layout.module';
import { LayoutService } from './service/layout.service';
import { FcRouteReuseStrategy } from './service/routereusestrategy.service';
import { ShareService } from './share.service';

registerLocaleData(zh)

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FccoreModule,
    FccomponentModule,
    SharedModule,
    LayoutModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,       // app入口
    SyssigninComponent, // 组件-登录
    SysforgotComponent, // 组件-忘记密码
    SyssignupComponent // 组件-注册
  ],
  providers: [
    UserService, // 服务-用户
    ShareService,
    LayoutService, // 服务-layout
    { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy }, // 路由复用策略
    { provide: LocationStrategy,   useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  //构造函数
  constructor() { }
}
