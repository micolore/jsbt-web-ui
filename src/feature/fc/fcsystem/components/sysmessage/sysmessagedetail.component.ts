import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sys-messagedetail',
  templateUrl: './sysmessagedetail.component.html',
  styles: [``]
})
export class SysmessagedetailComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
