import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents';
import { SharedModule } from 'src/shared';
import { FcspreadComponent } from './fcspread.component';
import { Routers } from './fcspread.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule,
    SpreadSheetsModule,
  ],
  declarations: [
    FcspreadComponent
  ],
  providers: []
})
export class FcspreadModule { }
