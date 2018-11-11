import { Component, OnInit } from '@angular/core';
import { isPromiseAlike } from 'q';

@Component({
  selector: 'app-es-mayor-de-edadgfor',
  templateUrl: './es-mayor-de-edadgfor.component.html',
  styleUrls: ['./es-mayor-de-edadgfor.component.css']
})
export class EsMayorDeEdadgforComponent implements OnInit {

  public empleados: Empleado[];
  public emp1: Empleado;
  public emp2: Empleado;
  public emp3: Empleado;
  public emp4: Empleado;
  public emp5: Empleado;

  constructor() {
    // this.empleados = new Array(5);
    this.emp1 = new Empleado('Ali', 2500, 37);
    this.emp2 = new Empleado('Pedro', 5500, 18);
    this.emp3 = new Empleado('Sergio', 3500, 45);
    this.emp4 = new Empleado('Pablo', 1500, 25);
    this.emp5 = new Empleado('Olga', 1400, 26);
    this.empleados = [this.emp1, this.emp2, this.emp3, this.emp4, this.emp5];

      /*this.empleados = [
      {nombre: 'Ali', sueldo: 2500, edad: 37},
      {nombre: 'Pedro', sueldo: 5500, edad: 18},
      {nombre: 'Sergio', sueldo: 3500, edad: 45},
      {nombre: 'Pablo', sueldo: 1500, edad: 25}
  ];*/
  }

  ngOnInit() {
  }

}


export class Empleado implements  OnInit {

  public nombre: string;
  public sueldo: number;
  public edad: number;

  constructor(nombre: string, sueldo: number, edad: number) {
    this.nombre = nombre;
    this.sueldo = sueldo;
    this.edad = edad;
  }

  ngOnInit() {
  }

}

export interface Employee {
  nombre: string;
  sueldo: number;
  edad: number;

}

