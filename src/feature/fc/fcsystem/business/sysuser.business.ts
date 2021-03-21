import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SysuserBusiness {
  constructor(private http: HttpClient) {}
}
export interface LoginValidationRule {
  AttemptNumber: number | 0;
  Locked: boolean | false;
  LockedTime: string | '';
}
