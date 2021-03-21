import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CacheService } from './common/cache';
import { CommonService } from './common/common';
import { DaoService } from './service/dao.service';
import { LogService } from './service/log.service';
import { MessageService } from './service/message.service';

registerLocaleData(zh)
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
  ],
  providers: [
    DaoService,
    LogService,
    CommonService,
    CacheService,
    MessageService
  ],
  bootstrap: []
})
export class FccoreModule {
}
