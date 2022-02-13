import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto:  string;
  ruta:   string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: []
})
export class SidemenuComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Home',
      ruta: './employee/home'
    },
    {
      texto: 'Agregar',
      ruta: './employee/add'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
