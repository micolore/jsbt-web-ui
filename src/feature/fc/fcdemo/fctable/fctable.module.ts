import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FctableComponent } from './fctable.component';
import { Routers } from './fctable.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FctableComponent
  ],
  providers: []
})
export class FctableModule { }
