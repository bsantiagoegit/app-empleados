import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de empleados';

  empleados: Empleado [] = [
    new Empleado("Santiago", "Espinosa", "Gerente",3500),
    new Empleado("Ana", "Martin", "Directora",2500),
    new Empleado("Maria", "Fernandez", "Jefa Sección",1500),
    new Empleado("Laura", "Lopez", "Administrativo",750),
  ];

  cuadroNombre  : string = "";
  cuadroApellido: string = "";
  cuadroCargo   : string = "";
  cuadroSalario : number = 0;

  agregarEmpleado () {
    let miEmpleado = new Empleado(  this.cuadroNombre,
                                    this.cuadroApellido,
                                    this.cuadroCargo,
                                    this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
