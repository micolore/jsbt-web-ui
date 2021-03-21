import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routers } from './fcsystem.route';

@NgModule({
  imports: [
    RouterModule.forChild(Routers)
  ],
  declarations: [

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule { }
