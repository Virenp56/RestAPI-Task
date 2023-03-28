import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: any
  // myObj!: any

  @Output() newItemEvent = new EventEmitter();
  constructor(private empService: EmployeeService) {
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.empService.getData().subscribe((res) =>
      this.data = res)
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe((res) =>
      console.log("deleted")
    )
    this.loadData()
  }


}

