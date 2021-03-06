/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 首页
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-10-14 14:21:48
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as tslib_1 from "tslib";
let HomeComponent = class HomeComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 首页卡片样式
        this.homeBodyStyle = {
            background: '#fff'
        };
        // 柱状图的数据
        this.chartBarData = [
            {
                year: '1 月',
                sales: 58
            },
            {
                year: '2 月',
                sales: 52
            },
            {
                year: '3 月',
                sales: 61
            },
            {
                year: '4 月',
                sales: 145
            },
            {
                year: '5 月',
                sales: 148
            },
            {
                year: '6 月',
                sales: 138
            },
            {
                year: '7 月',
                sales: 178
            },
            {
                year: '8 月',
                sales: 38
            },
            {
                year: '9 月',
                sales: 58
            },
            {
                year: '10 月',
                sales: 38
            },
            {
                year: '11 月',
                sales: 88
            },
            {
                year: '12 月',
                sales: 38
            }
        ];
        // 迷你柱状图1的数据
        this.miniBarData_1 = [
            {
                index: 0,
                value: 74
            },
            {
                index: 1,
                value: 60
            },
            {
                index: 2,
                value: 50
            },
            {
                index: 3,
                value: 10
            },
            {
                index: 4,
                value: 30
            },
            {
                index: 5,
                value: 50
            },
            {
                index: 6,
                value: 35
            },
            {
                index: 7,
                value: 60
            },
            {
                index: 8,
                value: 90
            },
            {
                index: 9,
                value: 100
            }
        ];
        // 折线图数据
        this.chartLineData = [
            {
                date: '2018/8/1',
                type: 'download',
                value: 4623
            },
            {
                date: '2018/8/1',
                type: 'register',
                value: 2208
            },
            {
                date: '2018/8/1',
                type: 'bill',
                value: 182
            },
            {
                date: '2018/8/2',
                type: 'download',
                value: 6145
            },
            {
                date: '2018/8/2',
                type: 'register',
                value: 2016
            },
            {
                date: '2018/8/2',
                type: 'bill',
                value: 257
            },
            {
                date: '2018/8/3',
                type: 'download',
                value: 508
            },
            {
                date: '2018/8/3',
                type: 'register',
                value: 2916
            },
            {
                date: '2018/8/3',
                type: 'bill',
                value: 289
            },
            {
                date: '2018/8/4',
                type: 'download',
                value: 6268
            },
            {
                date: '2018/8/4',
                type: 'register',
                value: 4512
            },
            {
                date: '2018/8/4',
                type: 'bill',
                value: 428
            },
            {
                date: '2018/8/5',
                type: 'download',
                value: 6411
            },
            {
                date: '2018/8/5',
                type: 'register',
                value: 8281
            },
            {
                date: '2018/8/5',
                type: 'bill',
                value: 619
            },
            {
                date: '2018/8/6',
                type: 'download',
                value: 1890
            },
            {
                date: '2018/8/6',
                type: 'register',
                value: 2008
            },
            {
                date: '2018/8/6',
                type: 'bill',
                value: 87
            },
            {
                date: '2018/8/7',
                type: 'download',
                value: 4251
            },
            {
                date: '2018/8/7',
                type: 'register',
                value: 1963
            },
            {
                date: '2018/8/7',
                type: 'bill',
                value: 706
            },
            {
                date: '2018/8/8',
                type: 'download',
                value: 2978
            },
            {
                date: '2018/8/8',
                type: 'register',
                value: 2367
            },
            {
                date: '2018/8/8',
                type: 'bill',
                value: 387
            },
            {
                date: '2018/8/9',
                type: 'download',
                value: 3880
            },
            {
                date: '2018/8/9',
                type: 'register',
                value: 2956
            },
            {
                date: '2018/8/9',
                type: 'bill',
                value: 488
            },
            {
                date: '2018/8/10',
                type: 'download',
                value: 3606
            },
            {
                date: '2018/8/10',
                type: 'register',
                value: 678
            },
            {
                date: '2018/8/10',
                type: 'bill',
                value: 507
            },
            {
                date: '2018/8/11',
                type: 'download',
                value: 4311
            },
            {
                date: '2018/8/11',
                type: 'register',
                value: 3188
            },
            {
                date: '2018/8/11',
                type: 'bill',
                value: 548
            },
            {
                date: '2018/8/12',
                type: 'download',
                value: 4116
            },
            {
                date: '2018/8/12',
                type: 'register',
                value: 3491
            },
            {
                date: '2018/8/12',
                type: 'bill',
                value: 456
            },
            {
                date: '2018/8/13',
                type: 'download',
                value: 6419
            },
            {
                date: '2018/8/13',
                type: 'register',
                value: 2852
            },
            {
                date: '2018/8/13',
                type: 'bill',
                value: 689
            },
            {
                date: '2018/8/14',
                type: 'download',
                value: 1643
            },
            {
                date: '2018/8/14',
                type: 'register',
                value: 4788
            },
            {
                date: '2018/8/14',
                type: 'bill',
                value: 280
            },
            {
                date: '2018/8/15',
                type: 'download',
                value: 445
            },
            {
                date: '2018/8/15',
                type: 'register',
                value: 4319
            },
            {
                date: '2018/8/15',
                type: 'bill',
                value: 176
            }
        ];
        // 待办任务
        this.toDoTaks = [
            {
                title: ' 报表任务 1'
            },
            {
                title: '报表任务 2'
            },
            {
                title: '报表任务 3'
            },
            {
                title: '报表任务 4'
            }
        ];
        // 日历数据
        this.listDataMap = {
            eight: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' }
            ],
            ten: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' }
            ],
            eleven: [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event........' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' }
            ]
        };
    }
    /**
     * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
     */
    ngOnInit() { }
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    ngAfterViewInit() {
    }
    /**
     * @description: 日历
     * @param {type}
     * @return:
     */
    getMonthData(date) {
        if (date.getMonth() === 8) {
            return 1394;
        }
        return null;
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.less']
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map