import { Component, OnInit } from '@angular/core';

@Component({

// tslint:disable-next-line:component-selector
selector: 'app-figura',

templateUrl: '../app.component.html',

styleUrls: ['../app.component.css']

})

// Abstract Class
export abstract class FiguraGeometricaComponent {

    public static  PI = 3.1413;
    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;

}

// Interface
export interface FiguraGeometricaIntComponent {

    calcularArea(): number;
    calcularPerimetro(): number;
}

// Child Classes
export  class RectanguloComponent extends FiguraGeometricaComponent {

    private altura: number;
    private base: number;

    constructor(altura: number, base: number) {
        super();
    this.altura = altura;
    this.base = base;
}

    calcularArea(): number {
        return this.altura * this.base;
    }

    calcularPerimetro(): number {
        return 2 * (this.altura + this.base);
    }

}

export  class CirculoComponent extends FiguraGeometricaComponent {

    private radio: number;

    constructor(radio: number) {
        super();
    this.radio = radio;

}

    calcularArea(): number {
        return this.radio * (FiguraGeometricaComponent.PI * FiguraGeometricaComponent.PI);
    }

    calcularPerimetro(): number {
        return 2 * FiguraGeometricaComponent.PI * this.radio;
    }

}

// Implemented Classes from Interface
export  class RectanguloImpComponent implements FiguraGeometricaIntComponent {

    private altura: number;
    private base: number;

    constructor(altura: number, base: number) {
    this.altura = altura;
    this.base = base;
}

    calcularArea(): number {
        return this.altura * this.base;

    }

    calcularPerimetro(): number {
        return 2 * (this.altura + this.base);
    }

}

export  class CirculoImpComponent implements FiguraGeometricaIntComponent {

    static PI = 3.1413;
    private radio: number;

    constructor(radio: number) {
    this.radio = radio;
    }

    calcularArea(): number {
        return this.radio * (CirculoImpComponent.PI * CirculoImpComponent.PI);
    }

    calcularPerimetro(): number {
        return 2 * CirculoImpComponent.PI * this.radio;
    }

}


