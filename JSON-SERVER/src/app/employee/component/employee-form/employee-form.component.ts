import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  reactiveForm!: FormGroup;
  id: any;
  employeeData!: any;
  toggle: boolean = true
  @ViewChild('submitButton') button!: ElementRef<HTMLButtonElement>;
  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) {
    this.reactiveForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z]+$/)]),
        email: new FormControl(null, Validators.required),
        technology: new FormControl(null, Validators.required),
        salary: new FormControl(null, Validators.required),
      });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(this.id)
      .subscribe((data) => {
        if (this.id != "") {
          this.employeeData = data;
          this.reactiveForm.setValue({
            name: (this.employeeData.name),
            email: (this.employeeData.email),
            technology: (this.employeeData.technology),
            salary: (this.employeeData.salary)
          })


          this.button.nativeElement.innerHTML = "Update";
          this.toggle = false
        }
      });
  }
  onSubmit() {
    this.empService.addEmployee(this.reactiveForm.value).subscribe((res) => console.log('Data post'));
    this.router.navigate(["employee-list"])
  }

  onEdit() {

    this.empService.updateEmployee(this.id, this.reactiveForm.value).subscribe((res) => console.log('Data Edited'));
    this.router.navigate(["employee-list"])
  }
}
