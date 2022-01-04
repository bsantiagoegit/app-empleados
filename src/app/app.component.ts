import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados: Empleado[] = [
    new Empleado('Santiago', 'Espinosa', 'Presidente', 7500),
    new Empleado('Patricio', 'Romero', 'Director', 5500),
    new Empleado('Norman', 'Guarnizo', 'Jefe Sección', 3500),
    new Empleado('Jeannina', 'Solano', 'Administrativo', 2500),
  ];
}
