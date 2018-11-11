import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejtwo-way-binding',
  templateUrl: './ejtwo-way-binding.component.html',
  styleUrls: ['./ejtwo-way-binding.component.css']
})
export class EjtwoWayBindingComponent implements OnInit {

  capital: string;
  // pntuacion: number;

  constructor() { }

  setResultado() {

    return this.capital === 'Madrid';

  }

  /*setColor() {
    return this.pntuacion >= 5 ? 'green' : 'red';
  }*/

  ngOnInit() {
  }

}
