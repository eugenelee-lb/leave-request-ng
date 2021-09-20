import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Employee } from '../_models';

import { EmployeeService, AlertService, LocalStorageService } from '../_services';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees!: Employee[];

  form!: FormGroup;
  loading = false;
  submitted = false;
  loginUser!: Employee;
  loginUserId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private alertService: AlertService,
    private localStorageService: LocalStorageService
    ) { }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.loginUserId = this.localStorageService.getItem("userId");
    this.form = this.formBuilder.group({
      loginUser: ['', Validators.required],
    });

    this.employeeService.getAll()
      .pipe(first())
      .subscribe(
        employees => 
        {
          this.employees = employees;
          if (employees.length > 0 && this.loginUserId == null) {
            this.localStorageService.setItem("userId", employees[0].employeeId);
            this.loginUserId = employees[0].employeeId;
            this.alertService.success('Login user is set: ' + employees[0].employeeId, { keepAfterRouteChange: true });
          }
        }
      );
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    //this.loading = true;
    this.updateLoginUser();
  }

  private updateLoginUser() {
    //emp: Employee;
    // this.employeeService.getById(this.f.loginUser.value)
    //     .pipe(first())
    //     .subscribe(x => this.loginUser = x);
    this.localStorageService.setItem("userId", this.f.loginUser.value);
    this.alertService.success('Login user selected: ' + this.f.loginUser.value, { keepAfterRouteChange: true });
  }
}
