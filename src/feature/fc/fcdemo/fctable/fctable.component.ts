import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'fctable',
  templateUrl: './fctable.component.html',
  styles: [``]
})
export class FctableComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
