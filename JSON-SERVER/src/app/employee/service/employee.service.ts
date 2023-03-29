import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "http://localhost:3000/employee"
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }

  getEmployee(id: any) {
    let url = `${this.url}/${id}`;
    return this.http.get(url);
  }

  addEmployee(item: any) {
    return this.http.post(this.url, item);
  }

  deleteEmployee(id: any) {
    let url = `${this.url}/${id}`;
    return this.http.delete(url);
  }

  updateEmployee(id: any, item: any) {
    let url = `${this.url}/${id}`;
    return this.http.put(url, item);
  }
}
