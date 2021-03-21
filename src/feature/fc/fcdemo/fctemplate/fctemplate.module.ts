import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FctemplatedetailComponent } from './fctempatedetail/fctemplatedetail.component';
import { Routers } from './fctemplate.route';
import { FctemplateformComponent } from './fctemplateform/fctemplateform.component';
import { FctemplatelistComponent } from './fctemplatelist/fctemplatelist.component';
import { FctemplatetreelistComponent } from './fctemplatetreelist/fctemplatetreelist.component';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FctemplatedetailComponent,
    FctemplateformComponent,
    FctemplatelistComponent,
    FctemplatetreelistComponent,
  ],
  providers: []
})
export class FctemplateModule { }
