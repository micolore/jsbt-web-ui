import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FciframeComponent } from './fciframe.component';
import { Routers } from './fciframe.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FciframeComponent
  ],
  providers: []
})
export class FciframeModule { }
