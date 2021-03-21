/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 用户管理
 * @email:  
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:29:36
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SysuserBusiness } from '../../business/sysuser.business';
@Component({
  selector: 'sys-user',
  templateUrl: './sysuser.component.html',
  styles: [``]
})
export class SysuserComponent implements OnInit {

  constructor(public router: Router, public activedRoute: ActivatedRoute,
    private sysuserBusiness: SysuserBusiness) { }
  ngOnInit(): void {

  }
}
