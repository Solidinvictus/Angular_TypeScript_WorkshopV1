import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pila-generica',
  templateUrl: './pila-generica.component.html',
  styleUrls: ['./pila-generica.component.css']
})
export class PilaGenericaComponent<T> implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
