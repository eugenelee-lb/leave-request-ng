import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { EmployeeService } from '../_services';
import { Employee } from '../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    employees!: Employee[];

    constructor(private employeeService: EmployeeService) {}

    ngOnInit() {
        this.employeeService.getAll()
            .pipe(first())
            .subscribe(employees => this.employees = employees);
    }

    // deleteEmployee(id: string) {
    //     const employee = this.employees.find(x => x.id === id);
    //     if (!employee) return;
    //     employee.isDeleting = true;
    //     this.employeeService.delete(id)
    //         .pipe(first())
    //         .subscribe(() => this.employees = this.employees.filter(x => x.id !== id));
    // }
}