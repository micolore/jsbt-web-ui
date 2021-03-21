/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块的路由
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-10-16 15:58:10
 */
import { Routes } from '@angular/router';
import { SysuserComponent } from './sysuser.component';


export const Routers: Routes = [
  {
    path: 'sysuserList',
    component: SysuserComponent
  }
];
