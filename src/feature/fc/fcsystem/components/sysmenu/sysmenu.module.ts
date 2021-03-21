import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { SysmenuComponent } from './sysmenu.component';
import { Routers } from './sysmenu.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    SysmenuComponent
  ],
  providers: []
})
export class SysmenuModule { }
