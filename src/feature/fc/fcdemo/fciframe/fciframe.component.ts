import { Component } from '@angular/core'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'fciframe',
  templateUrl: './fciframe.component.html',
  styles: [``]
})
export class FciframeComponent {
  // iframe地址
  iframeUrl: SafeResourceUrl
  constructor(public router: Router,
    public activedRoute: ActivatedRoute,
    public sanitizer: DomSanitizer) {
    // iframe页里的内容并不属于节点的信息,所以路由复用会重新渲染iframe的内容
    let url: string = 'https://ng.ant.design/components/form/zh'
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
