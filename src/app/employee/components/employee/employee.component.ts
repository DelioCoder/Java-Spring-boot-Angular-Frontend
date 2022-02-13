import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../interface/employee.interface';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent implements OnInit {

  @Input('employees') employee!: Employee;

  @Output() onDeleteEmpoyee: EventEmitter<void> = new EventEmitter();

  constructor(
    private _es: EmployeeService,
  ) { }

  ngOnInit(): void { }

  onDelete( id: number ) {
    this._es.deleteEmployee( id ).subscribe({
      next: () => {
        this.onDeleteEmpoyee.emit();
      }
    });
  }

}
