import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';

const routes: Routes = [{
  path: "",
  redirectTo: 'employee-list',
  pathMatch: "full"
}, {
  path: 'employee-list',
  component: EmployeeListComponent
},
{
  path: 'employee-form/:id',
  component: EmployeeFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
