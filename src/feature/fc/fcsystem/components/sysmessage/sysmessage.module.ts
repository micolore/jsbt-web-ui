import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Routers } from './sysmessage.route';
import { SysmessagedetailComponent } from './sysmessagedetail.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    SysmessagedetailComponent
  ],
  providers: []
})
export class SysmessageModule { }
