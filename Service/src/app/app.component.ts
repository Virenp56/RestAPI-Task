import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Service';
  id: any
  name: any
  email: any
  technology: any
  salary: any
  constructor() { }
  ngOnInit(): void {
  }
  getObj(data: any) {
    this.id = (data.id)
    this.name = (data.name);
    this.email = (data.email);
    this.technology = (data.technology);
    this.salary = (data.salary);

  }
}
