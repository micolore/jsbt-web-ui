import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Routers } from './fcchart.route';
import { Fcg2Component } from './fcg2/fcg2.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    Fcg2Component
  ],
  providers: []
})
export class FcchartModule { }
