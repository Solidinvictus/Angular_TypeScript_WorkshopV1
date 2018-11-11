import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-aleatorios',
  templateUrl: './dados-aleatorios.component.html',
  styleUrls: ['./dados-aleatorios.component.css']
})
export class DadosAleatoriosComponent implements OnInit {

  aleatorio_dado1 : number;
  aleatorio_dado2 : number;
  aleatorio_dado3 : number;
  resultado : string;
  constructor() { 
    this.aleatorio_dado1 = numeroAleatorio(1 , 10);
    this.aleatorio_dado2 = numeroAleatorio(1 , 10);
    this.aleatorio_dado3 = numeroAleatorio(1 , 10);
    this.resultado = "";

  }

  ngOnInit() {
  }

   generarDados(){
    this.aleatorio_dado1 = numeroAleatorio(1 , 10);
    this.aleatorio_dado2 = numeroAleatorio(1 , 10);
    this.aleatorio_dado3 = numeroAleatorio(1 , 10);
    this.resultado = comprobarResultado( this.aleatorio_dado1,  this.aleatorio_dado2,  this.aleatorio_dado3);
  }

}

function numeroAleatorio(min : number, max : number) {
  return Math.round(Math.random() * (max - min) + min);
}



function comprobarResultado(num1:number, num2:number, num3:number){
  if(num1 == num2 && num1 == num3 && num2 == num3){
    return 'Coinciden!! Has ganado!'
  }else{ 
    return 'No coiciden...intentalo de nuevo'
  }
}

