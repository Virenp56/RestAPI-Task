import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  toggle = true
  reactiveForm!: FormGroup;
  @Input() id: any;
  @Input() myname: any;
  @Input() email: any;
  @Input() technology: any;
  @Input() salary: any;

  constructor(private empService: EmployeeService) {
    this.reactiveForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        technology: new FormControl(null, Validators.required),
        salary: new FormControl(null, Validators.required),
      });
  }

  ngOnInit(): void {

  }
  ngOnChanges() {
    // this.reactiveForm.setValue({
    //   name: this.myname,
    //   email: this.email,
    //   technology: this.technology,
    //   salary: this.technology,
    // });
    this.reactiveForm.get('name')?.setValue(this.myname)
    this.reactiveForm.get('email')?.setValue(this.email)
    this.reactiveForm.get('technology')?.setValue(this.technology)
    this.reactiveForm.get('salary')?.setValue(this.salary)
  }
  onSubmit() {
    this.empService.addEmployee(this.reactiveForm.value).subscribe((res) => console.log('Data post'));
  }
  editData() {
    this.empService.updateEmployee(this.id, this.reactiveForm.value).subscribe(res => res)
  }
}
