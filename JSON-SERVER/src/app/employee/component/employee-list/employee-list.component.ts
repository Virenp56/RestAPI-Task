import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  data: any

  constructor(private empService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.empService.getData().subscribe((res) =>
      this.data = res)
    history.pushState(null, '');
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe((res) =>
      console.log("deleted")
    )
    this.empService.getData().subscribe((res) =>
      this.data = res)
  }

  editEmployee(item: any) {
    this.route.navigate(['employee-form', item.id]);
  }

  openForm() {
    this.route.navigate(["employee-form", ""])
  }
}
