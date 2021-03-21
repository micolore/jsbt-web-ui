/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 示例模块
 * @email:  
 * @Date:  2021-03-21 16:02:48
 * @LastEditTime:  2021-03-21 09:29:28
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routers } from './fcdemo.route';
@NgModule({
  imports: [
    RouterModule.forChild(Routers),
  ],
  declarations: [

  ],
  providers: []
})
export class FcdemoModule { }
