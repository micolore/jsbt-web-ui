import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fc-antd',
  templateUrl: './fcantd.component.html',
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
      .carousel-wrap {
        width: 100%;
        height: 300px;
      }
      [nz-carousel-content]{
        height:300px;
        text-align: center;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }
      .carsousel-box {
        width: 100%;
        height:300px;
      }
      [nz-carousel-content] img {
        object-fit: cover;
      }
      .ant-tag {
        margin-bottom: 8px;
      }
      nz-alert {
        margin-bottom: 16px;
      }
    `
  ]
})
export class FcantdComponent {
  carsousels = [
    {
      id: 1,
      src: 'assets/image/1.jpeg'
    },
    {
      id: 2,
      src: 'assets/image/2.jpg'
    },
    {
      id: 3,
      src: 'assets/image/3.jpg'
    },
    {
      id: 4,
      src: 'assets/image/4.jpg'
    },
    {
      id: 5,
      src: 'assets/image/5.jpg'
    }
  ]
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
