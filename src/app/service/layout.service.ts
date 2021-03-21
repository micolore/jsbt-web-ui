import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment.dev';
import { LogService } from 'src/fccore/service/log.service';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // 项目名称
  pid = environment.pid.toLocaleLowerCase()
  constructor(
    private messageService: NzMessageService
  ) {
  }
  /**
   * @description: 获取菜单信息
   * @param {type} []
   * @return:  []
   */
  getMenus() {
    return menus
  }
  /**
   * 跳转路由
   * @param menu
   */
  navMenu(router: Router, menu: any, refresh?: string) {
    if (refresh === undefined) {
      refresh = 'Y'
    }
    if (menu.MENUTYPE === 'APP') {
      // 开启加载条
      // let loadId = this.messageService.loading('loading...').messageId;
      let params = {
        queryParams: {
          refresh: refresh,
          ID: menu.ID,
          MENUID: menu.MENUID,
          MENUNAME: menu.MENUNAME,
          MENUICON: menu.MENUICON,
          MENUTYPE: menu.MENUTYPE,
          ROUTER: menu.ROUTER,
          PID: menu.PID,
          APPID: menu.APPID,
          PARAM: menu.param
        }
      }
      LogService.debug(params);
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
        .then(() => {
          // this.providers.msgService.endAntLoading();
        })
        .catch(error => {
          console.log(error)
          // this.messageService.remove(loadId);
          router.navigate(['/error'])
        })
    } else if (menu.MENUTYPE === 'OUTURL') {
      window.open(menu.ROUTER, '_blank')
    } else if (menu.MENUTYPE === 'INURL') {
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], {
          queryParams: {
            refresh: refresh,
            ID: menu.ID,
            MENUID: menu.MENUID,
            MENUNAME: menu.MENUNAME,
            MENUICON: menu.MENUICON,
            MENUTYPE: menu.MENUTYPE,
            ROUTER: menu.ROUTER,
            PID: menu.PID,
            APPID: menu.APPID,
            PARAM: menu.param
          }
        })
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], {
          queryParams: {
            refresh: refresh,
            ID: menu.ID,
            MENUID: menu.MENUID,
            MENUNAME: menu.MENUNAME,
            MENUTYPE: menu.MENUTYPE,
            ROUTER: menu.ROUTER,
            PID: menu.PID,
            APPID: menu.APPID,
            PARAM: menu.param,
            MENUURL: menu.MENUURL
          }
        })
        .then(() => {
        })
        .catch(error => {
          console.log(error)
          router.navigate(['/error'])
        })
    }
  }
}

 const menus = {
  P_MENUS: [
    {
      ID: '10',
      PID: 'FC',
      MENUID: 'FC',
      MENUNAME: 'jsbt开发平台',
      ENABLE: 'Y',
      WXMENU: 'N',
      MENUTYPE: 'MENU',
      HASCHILD: 'Y',
      MENUICON: 'icon iconfont icon-ppbs',
      SORT: 1000,
      ROUTER: '/fc',
      P_CHILDMENUS: [
        {
          ID: '200',
          PID: 'FC',
          MENUID: 'FCCHART',
          MENUNAME: '图表',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-tubiao',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fcchart',
          P_CHILDMENUS: [
            {
              ID: '210',
              PID: 'FC',
              MENUID: 'FCG2',
              MENUNAME: 'g2',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FC',
              MENUICON: '',
              SORT: 1152,
              ROUTER: '/fcg2'
            }
          ]
        },
        {
          ID: '300',
          PID: 'FC',
          MENUID: 'FCTHREEJS',
          MENUNAME: 'threejs',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-threejs',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fcthreejs',
          P_CHILDMENUS: [
            {
              ID: '310',
              PID: 'FC',
              MENUID: 'FCBOXGEOMETRY',
              MENUNAME: '立方体',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FC',
              MENUICON: '',
              SORT: 1152,
              ROUTER: '/fcboxgeometry'
            }
          ]
        },
        {
          ID: '1600',
          PID: 'FC',
          MENUID: 'OTHER',
          MENUNAME: '其他',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'APP',
          APPID: 'SYSMENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'SYSTEM',
          SORT: 1152,
          ROUTER: '',
          P_CHILDMENUS: [
            {
              ID: '1600',
              PID: 'FC',
              MENUID: 'FCPRINT',
              MENUNAME: '打印',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              MENUICON: 'fc-icon-print',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fcprint'
            },
            {
              ID: '1700',
              PID: 'FC',
              MENUID: 'FCCOVERUP',
              MENUNAME: '套打',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              MENUICON: 'fc-icon-print',
              PARENT: 'SYSTEM',
              SORT: 1152,
              ROUTER: '/fccoverup'
            }
          ]
        },
        {
          ID: '800',
          PID: 'FC',
          MENUID: 'FCTEMPLATE',
          MENUNAME: '模板页面',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/fctemplate',
          P_CHILDMENUS: [
            {
              ID: '810',
              PID: 'FC',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatelist'
            },
            {
              ID: '820',
              PID: 'FC',
              MENUID: 'FCTEMPLATEFORM',
              MENUNAME: '表单',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplateform'
            },
            {
              ID: '830',
              PID: 'FC',
              MENUID: 'FCTEMPLATEDETAIL',
              MENUNAME: '详情',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatedetail'
            },
            {
              ID: '840',
              PID: 'FC',
              MENUID: 'FCTEMPLATETREELIST',
              MENUNAME: '树列表',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'N',
              PARENT: 'FCTEMPLATE',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/fctemplatetreelist'
            }
          ]
        },
        {
          ID: '900',
          PID: 'FC',
          MENUID: 'SYSTEM',
          MENUNAME: '系统管理',
          ENABLE: 'Y',
          WXMENU: 'N',
          MENUTYPE: 'MENU',
          HASCHILD: 'Y',
          MENUICON: 'fc-icon-peizhi',
          PARENT: 'FC',
          SORT: 1150,
          ROUTER: '/system',
          P_CHILDMENUS: [
            {
              ID: '910',
              PID: 'FC',
              MENUID: 'SYSTEMBASIC',
              MENUNAME: '基础设置',
              ENABLE: 'Y',
              WXMENU: 'N',
              MENUTYPE: 'APP',
              APPID: 'SYSMENU',
              HASCHILD: 'Y',
              PARENT: 'SYSTEM',
              MENUICON: 'fc-icon-jichushezhi',
              SORT: 1152,
              ROUTER: '/sysbasic',
              P_CHILDMENUS: [
                {
                  ID: '911',
                  PID: 'FC',
                  MENUID: 'SYSROLE',
                  MENUNAME: '权限管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  MENUICON: 'fc-icon-peizhi',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEMBASIC',
                  SORT: 1152,
                  ROUTER: '/sysroleList'
                },
                {
                  ID: '912',
                  PID: 'FC',
                  MENUID: 'SYSUSER',
                  MENUNAME: '用户管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  MENUICON: 'fc-icon-peizhi',
                  PARENT: 'SYSTEMBASIC',
                  SORT: 1152,
                  ROUTER: '/sysuserList'
                },
                {
                  ID: '913',
                  PID: 'FC',
                  MENUID: 'SYSMENU',
                  MENUNAME: '菜单管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEMBASIC',
                  SORT: 1152,
                  ROUTER: '/sysmenuList'
                },
                {
                  ID: '914',
                  PID: 'FC',
                  MENUID: 'SYSLOG',
                  MENUNAME: '日志管理',
                  ENABLE: 'Y',
                  WXMENU: 'N',
                  MENUTYPE: 'APP',
                  APPID: 'SYSMENU',
                  HASCHILD: 'N',
                  PARENT: 'SYSTEMBASIC',
                  SORT: 1152,
                  ROUTER: '/syslogList'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
