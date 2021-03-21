import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fc-templatedetail',
    templateUrl: './fctemplatedetail.component.html',
    styles: [
        `
     .fc-templatedetail {
         padding: 10px;
         width: 100%;
         height: 100%;
         overflow: auto;
     }
    `
    ]
})
export class FctemplatedetailComponent {
    constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
