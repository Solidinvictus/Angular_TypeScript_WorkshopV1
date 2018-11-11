import { Component } from '@angular/core';

@Component({

// tslint:disable-next-line:component-selector
selector: 'persona',

templateUrl: '../app.component.html',

styleUrls: ['../app.component.css']

})

export class PersonaComponent {

nombre: string;
edad: number;

constructor(nombre: string, edad: number) {
this.nombre = nombre;
this.edad = edad;

}

imprimirDatos(): void {
  console.log('Nombre: ${this.nombre} y edad:${this.edad}');
}

}

/*let per: PersonaComponent;
per = new PersonaComponent('Ali', 37);
per.imprimirDatos();*/




