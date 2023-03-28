import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormComponent } from './component/form/form.component';
import { ListComponent } from './component/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class EmployeeModule { }
