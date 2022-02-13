import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Employee } from '../interface/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: String = 'http://localhost:8080';

  constructor( private _http: HttpClient ) { }

  public getEmployees(): Observable<Employee[]> {
    return this._http.get<Employee[]>(`${ this.url }/employee/all`);
  }

  public getEmployeeById( id: number ) :Observable<Employee> {
    return this._http.get<Employee>(`${ this.url }/employee/find/${ id }`);
  }

  public addEmployee(employee: Employee) {
    return this._http.post<Employee>(`${ this.url }/employee/add`, employee);
  }

  public updateEmployee(employee: Employee) {
    return this._http.put<Employee>(`${ this.url }/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this._http.delete<void>(`${ this.url }/employee/delete/${ employeeId }`);
  }

}
