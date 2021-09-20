import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Accrual } from '../_models';

const baseUrl = `${environment.apiUrl}/EmployeeAccrual`;

@Injectable({
  providedIn: 'root'
})
export class AccrualService {
  constructor(private http: HttpClient) { }

  getByEmpId(empId: string) {
    return this.http.get<Accrual[]>(`${baseUrl}/${empId}`);
  }

  getByEmpIdAccrualType(empId: string, accrualType: string) {
    return this.http.get<Accrual>(`${baseUrl}/${empId}/${accrualType}`);
  }

}
