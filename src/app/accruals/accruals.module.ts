import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccrualsRoutingModule } from './accruals-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccrualsRoutingModule
  ]
})
export class AccrualsModule { }
