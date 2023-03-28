import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) { }


  getData() {
    return this.http.get(this.apiURL);
  }

  // getEmployee(id: any) {
  //   let url = `${this.apiURL}/${id}`;
  //   return this.http.get(url);
  // }

  addEmployee(item: any) {
    return this.http.post(this.apiURL, item);
  }

  deleteEmployee(id: any) {
    let url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }

  updateEmployee(id: any, item: any) {
    let url = `${this.apiURL}/${id}`;
    return this.http.put(url, item);
  }
}
