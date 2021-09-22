import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';

const employeesModule = () => import('./employees/employees.module').then(x => x.EmployeesModule);
const accrualsModule = () => import('./accruals/accruals.module').then(x => x.AccrualsModule);
const requestsModule = () => import('./requests/requests.module').then(x => x.RequestsModule);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', loadChildren: employeesModule },
  { path: 'my-accruals', loadChildren: accrualsModule },
  { path: 'my-requests', loadChildren: requestsModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
