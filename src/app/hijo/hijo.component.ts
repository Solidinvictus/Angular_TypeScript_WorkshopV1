import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() aviso: string ;
  leido: boolean = false; 
  mensaje : string;
  @Output() mensajeMarcado = new EventEmitter(); 

  marcar(event) { //se ha usado para @Input
    this.leido = !this.leido; 
  }
  
  detectar(event) { 
    this.mensaje = this.aviso; 
    this.mensajeMarcado.emit(this.mensaje); 
} 
  constructor() {
    //this.aviso = 'Este texto proviene del componente hijo'; 
   }

  ngOnInit() {
  }

}
