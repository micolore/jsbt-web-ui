/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 用户服务、路由守卫
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
// @Injectable() 装饰器会接受该服务的元数据对象
let UserService = class UserService {
    constructor(router) {
        this.router = router;
    }
    /**
     *
     * @param route
     * @param state
     */
    canActivate(route, state) {
        return true;
    }
    /**
     * @description 系统登录
     * @param userId 用户编码
     * @param password 用户密码
     */
    login(userId, password) {
        return;
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map