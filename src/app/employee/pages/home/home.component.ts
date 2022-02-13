import { AfterViewInit, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../interface/employee.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  employees: Employee[] = [];

  constructor( private _empService: EmployeeService ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  ngAfterViewInit(): void {
      this.getEmployees();
  }

  getEmployees(): void{
    this._empService.getEmployees()
    .subscribe({
      next: ( resp ) => {
        console.log( resp );
        this.employees = resp;
      }
    }); 
  }

  reloadEmployees(){
    this.getEmployees();
  }

}
