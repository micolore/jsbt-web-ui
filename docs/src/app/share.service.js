/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 单例服务，参考网址: https://angular.cn/guide/singleton-services
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-05-07 18:12:10
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as tslib_1 from "tslib";
let ShareService = class ShareService {
    constructor() {
        // 切换项目名称
        this.switchProjectSubject = new Subject();
    }
};
ShareService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ShareService);
export { ShareService };
//# sourceMappingURL=share.service.js.map