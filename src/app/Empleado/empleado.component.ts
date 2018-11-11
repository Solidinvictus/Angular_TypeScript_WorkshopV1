import { Component, OnInit } from '@angular/core';

@Component({

// tslint:disable-next-line:component-selector
selector: 'app-empleado',

templateUrl: '../app.component.html',

styleUrls: ['../app.component.css']

})

// Super Class
export class EmpleadoComponent implements OnInit {

public static  numEmpleados = 0;
protected nombre: string;
protected sueldo: number;
protected diasVacaciones: number;


constructor(nombre: string, sueldo: number) {
this.nombre = nombre;
this.sueldo = sueldo;
this.diasVacaciones = 30;
// EmpleadoComponent.numEmpleados = EmpleadoComponent.numEmpleados + 1;
EmpleadoComponent.numEmpleados++;

}

ngOnInit() {}

// Getters and setters
getNombre(): string {
    return this.nombre;
}

setNombre(nombre: string) {
    this.nombre = nombre;
}

getSueldo(): number {
    return this.sueldo;
}

setSueldo(sueldo: number) {
    this.sueldo = sueldo;
}

getDiasVacaciones(): number {
    return this.diasVacaciones;
}

setDiasVacaciones(diasVacaciones: string) {
    this.diasVacaciones = this.diasVacaciones;
}

// Return static member
getNumEmpleados(): number {

    return EmpleadoComponent.numEmpleados;
}

}

// Tecnico Class
export class TecnicoComponent extends EmpleadoComponent {
    private especialidad: string;

    constructor(nombre: string, sueldo: number, especialidad: string) {
        super(nombre, sueldo);
        this.especialidad = especialidad;
}

// Getters and setters
getEspecialidad(): string {
    return this.especialidad;
}

setEspecialidad(especialidad: string) {
    this.especialidad = especialidad;
}

printInfo(): void {
    console.log(`${typeof this}`);

}

}

// Gestor Class
export class GestorComponent extends EmpleadoComponent {
    private presupuesto: number;

    constructor(nombre: string, sueldo: number, presupuesto: number) {
        super(nombre, sueldo);
        this.presupuesto = presupuesto;
}

// Getters and setters
getPresupuesto(): number {
    return this.presupuesto;
}

setPresupuesto(presupuesto: number) {
    this.presupuesto = presupuesto;
}

printInfo(): void {
    console.log(`${typeof this}`);
}

calcularBonus(extra: number, tiempo: number) {
    return (extra * tiempo / 100);
    }

}

// Creating Objects:
/*const emp = new EmpleadoComponent('Ali', 2000);

const tec = new TecnicoComponent('Paco', 1800, 'Informático');

const gest = new GestorComponent('Pablo', 2500, 20000);

// let nom = emp.getNombre();*/


