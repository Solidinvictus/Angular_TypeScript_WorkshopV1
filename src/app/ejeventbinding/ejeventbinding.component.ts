import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {

  texto = 'Hola Ali!!';
  constructor() { }

  modTexto(): string {
    return this.texto = 'Eres un capulin!!';

  }

  ngOnInit() {
  }

}
