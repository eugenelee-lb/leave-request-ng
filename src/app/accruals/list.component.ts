import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccrualService, LocalStorageService } from '../_services';
import { Accrual } from '../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  accruals!: Accrual[];
  userId: string = "";

  constructor(
    private accrualService: AccrualService,
    private localStorageService: LocalStorageService
    ) {}

  ngOnInit(): void {
    //this.userId = this.localStorageService.getItem("userId")?this.localStorageService.getItem("userId"):"";
    this.accrualService.getByEmpId(this.localStorageService.getItem("userId")!)
      .pipe(first())
      .subscribe(accruals => this.accruals = accruals);
  }

}
