import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CacheService } from '../common/cache';
import { DaoService } from './dao.service';
const isDev = !environment.production
@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private daoService: DaoService, private cacheService: CacheService) {

  }
  static debug(msg: any, describtion?: string): void {
    if (isDev) {
      console.log(msg, describtion)
    }
  }
  info(msg: any): void {
    if (isDev) {
      console.log(msg)
    }
  }
  error(msg: any): void {
    throw new Error(msg)
  }
}
