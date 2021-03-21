import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FcantdComponent } from './fcantd.component';
import { Routers } from './fcantd.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FcantdComponent
  ],
  providers: []
})
export class FcantdModule { }
