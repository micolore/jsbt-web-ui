import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'fc-g2',
  templateUrl: './fcg2.component.html',
  styles: [`
  .fc-chart-card {
    margin-bottom : 20px;
  }
  .fc-chart-box {
    width: 80%;
  }
  .g2-guide-html {
    width: 100px;
    height: 80px;
    vertical-align: middle;
    text-align: center;
    line-height: 0.2;
  }
  .g2-guide-html .title {
      font-size: 12px;
      color: #8c8c8c;
      font-weight: 300;
  }
  .g2-guide-html .value {
      font-size: 32px;
      color: #000;
      font-weight: bold;
  }
  `]
})
export class Fcg2Component {
  // 雷达图数据
  chartRadarData = [
    {
      item: 'Design',
      a: 70,
      b: 30
    }, {
      item: 'Development',
      a: 60,
      b: 70
    }, {
      item: 'Marketing',
      a: 50,
      b: 60
    }, {
      item: 'Users',
      a: 40,
      b: 50
    }, {
      item: 'Test',
      a: 60,
      b: 70
    }, {
      item: 'Language',
      a: 70,
      b: 50
    }, {
      item: 'Technology',
      a: 50,
      b: 40
    }, {
      item: 'Support',
      a: 30,
      b: 40
    }, {
      item: 'Sales',
      a: 60,
      b: 40
    }, {
      item: 'UX',
      a: 50,
      b: 60
    }];
  // 柱状图的数据
  chartBarData = [
    {
      year: '1 月',
      sales: 58
    },
    {
      year: '2 月',
      sales: 52
    },
    {
      year: '3 月',
      sales: 61
    },
    {
      year: '4 月',
      sales: 145
    },
    {
      year: '5 月',
      sales: 148
    },
    {
      year: '6 月',
      sales: 138
    },
    {
      year: '7 月',
      sales: 178
    },
    {
      year: '8 月',
      sales: 38
    },
    {
      year: '9 月',
      sales: 58
    },
    {
      year: '10 月',
      sales: 38
    },
    {
      year: '11 月',
      sales: 88
    },
    {
      year: '12 月',
      sales: 38
    }
  ]
  constructor(public router: Router, public activedRoute: ActivatedRoute) {

  }
}
