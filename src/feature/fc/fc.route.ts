import { Routes } from '@angular/router';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { HomeComponent } from './fcsystem/components/home/home.component';
export const Routers: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'building', // 正在开发中
    component: BuildingComponent
  },
  {
    path: '', // demo组件
    loadChildren: () => import('./fcdemo/fcdemo.module').then(res => res.FcdemoModule)
  },
  {
    path: '', // system
    loadChildren: () => import('./fcsystem/fcsystem.module').then(res => res.FcsystemModule)
  }
]
