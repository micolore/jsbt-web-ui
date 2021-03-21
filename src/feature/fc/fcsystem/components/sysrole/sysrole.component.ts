import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'sys-role',
  templateUrl: './sysrole.component.html',
  styles: [``]
})
export class SysroleComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
