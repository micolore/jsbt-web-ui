
/*
 * @Author: kubrick
 * @LastEditors: kubrick
 * @Description: 父级基类
 * @email:  
 * @Date:  2021-03-21 15:57:43
 * @LastEditTime: 2019-04-17 16:41:47
 */
export abstract class ParentComponent {
    // 主表对象
    mainObj: any;
    // 查询对象
    searchObj: any;
    // 列表数据
    pageList: any[]=[];
    constructor() {
    }
    abstract event(eventName: string, context?: any): void;
}
