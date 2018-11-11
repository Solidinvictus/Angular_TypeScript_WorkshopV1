import { Component } from '@angular/core';
import { PersonaComponent } from './Persona/persona.component';
import { EmpleadoComponent } from './Empleado/empleado.component';
import { TecnicoComponent } from './Empleado/empleado.component';
import { GestorComponent } from './Empleado/empleado.component';
import { CirculoComponent } from './FigurasGeometricas/figuraGeometrica.component';
import { RectanguloComponent } from './FigurasGeometricas/figuraGeometrica.component';
import { CirculoImpComponent } from './FigurasGeometricas/figuraGeometrica.component';
import { RectanguloImpComponent } from './FigurasGeometricas/figuraGeometrica.component';
import { EsMayorDeEdadgforComponent } from './es-mayor-de-edadgfor/es-mayor-de-edadgfor.component';
// import { FormsModule } from '@angular/forms';





@Component({

selector: 'app-root',

templateUrl: './app.component.html',

styleUrls: ['./app.component.css']

})

export class AppComponent {

  // Creating Objects from empleado.component.ts:
emp: EmpleadoComponent = new EmpleadoComponent('Ali', 2000);

tec: TecnicoComponent = new TecnicoComponent('Paco', 1800, 'Informático');

gest: GestorComponent = new GestorComponent('Pablo', 2500, 20000);

 // Creating Objects from FigurasGeometricas.component.ts:
 rec: RectanguloComponent = new RectanguloComponent(3, 3);
 recInt: RectanguloImpComponent = new RectanguloImpComponent(3, 3);

 cir: CirculoComponent = new CirculoComponent(3);
 cirInt: CirculoImpComponent = new CirculoImpComponent(3);



nombre = 'Rodriguez Pablo';

edad = 40;

email = 'rpablo@gmail.com';

sueldos = [1700, 1600, 1900];

activo = true;


per = new PersonaComponent('Ali', 37);

misQueridosEmpleados: EsMayorDeEdadgforComponent = new EsMayorDeEdadgforComponent();





esActivo() {

if (this.activo) {
  return 'Trabajador Activo';
} else {
  return 'Trabajador Inactivo';
}
}

ultimos3Sueldos() {

let suma = 0;

for (let x = 0; x < this.sueldos.length; x++) {
suma += this.sueldos[x];

return suma;
}
}

fibonaci(num: number) {
  let a = 1, b = 0, temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;

}




}
