import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos: Array<Articulo>;
  public articulo : Articulo;
  public codigo : number;
  public descripcion : string;
  public precio : number;
  public selectedRow : Number;
  public setClickedRow : Function;

  constructor() {
    this.articulo = {codigo : this.codigo, descripcion : this.descripcion, precio : this.precio};

    this.articulos = [
      {codigo: 1, descripcion: 'Papas', precio: 1.55},
      {codigo: 2, descripcion: 'Manzanas', precio: 12.1 },
      {codigo: 3, descripcion: 'Melon', precio: 53.3},
      {codigo: 4, descripcion: 'Cebollas', precio: 17},
      {codigo: 5, descripcion: 'Calabaza', precio: 20},
  ];
  this.setClickedRow = function(index){
    this.selectedRow = index;
}

  }

  agregarArticulo() {
    this.articulos.push( {codigo: this.codigo, descripcion: this.descripcion, precio: this.precio } );

    //if you want to clear input
    this.codigo = null;
    this.descripcion = null;
    this.precio = null;
  }

  modificarArticulo(){
    this.articulos.forEach( (item, index) => {
      if (item.codigo === this.codigo) {
        // Quitamos el elemento antiguo
        this.articulos.splice(index, 1);
        // y ahora agregamos el elemento nuevo
        this.articulos.push( {codigo: this.codigo, descripcion: this.descripcion, precio: this.precio } );
      }
    });
  }

  borrarArticulo(indice){
        this.articulos.splice(indice, 1);
      
  }

  seleccionar(indice){

  }


  //estos siguientes metodos no me sirven aki
  public agregar(artic: Articulo) {
    if (artic != null) {
      this.articulos.push(artic);
    }
  }

  public modificar(artic: Articulo) {
    if (artic != null) {
      this.articulos.forEach( (item, index) => {
        if (item.codigo === artic.codigo) {
          // Quitamos el elemento antiguo
          this.articulos.splice(index, 1);
          // y ahora agregamos el elemento nuevo
          this.articulos.push(artic);
        }
      });

      }
      this.articulos.push(artic);
    }

    

  ngOnInit() {
  }

}

export class Articulo  {

  public codigo: number;
  public descripcion: string;
  public precio: number;

  constructor(codigo: number, descripcion: string, precio: number ) {

    this.codigo = codigo;
    this.descripcion = descripcion;
    this.precio = precio;
  }

  /*ngOnInit() {
  }*/


}

//NO SIRVE EN ESTA PRACTICA, PERO LA TENGO EN MODO DE RECURSO
export class ComponentX {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
}
