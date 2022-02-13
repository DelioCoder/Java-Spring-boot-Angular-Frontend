import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../interface/employee.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  employeeId: number | undefined;

  updated: boolean = false;

  miFormulario: FormGroup = this._fb.group({
    id: '',
    name: [ , Validators.required ],
    email: [ , [ Validators.required, Validators.email ] ],
    jobTitle: [ , Validators.required ],
    phone: [ , [ Validators.required, Validators.minLength(9) ] ],
    imageUrl: [ , Validators.required ],
    employeeCode: ''
  });

  constructor(
    private _fb: FormBuilder,
    private _es: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if ( !this._router.url.includes('update') ){
      return;
    }

    this._activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._es.getEmployeeById(id))
      )
      .subscribe( employee => {
        this.miFormulario.reset( employee );
        this._es.getEmployeeById(employee.id);
      });

  }

  save() {

    if( this.employeeId ) {
      this.updated = false;
      //actualizar
      console.log(this.miFormulario.value);
      this._es.updateEmployee( this.miFormulario.value )
        .subscribe({
          next: () => {
            this.updated = true;
          }
        });
        
    } else {
      this._es.addEmployee( this.miFormulario.value )
        .subscribe();
      this._router.navigate(['/home']);
    }
    
  }

}
