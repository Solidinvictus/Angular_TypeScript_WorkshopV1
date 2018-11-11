import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PilaGenericaComponent } from './pila-generica/pila-generica.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { EjtwoWayBindingComponent } from './ejtwo-way-binding/ejtwo-way-binding.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { EsMayorDeEdadgforComponent } from './es-mayor-de-edadgfor/es-mayor-de-edadgfor.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DadosComponent } from './dados/dados.component';
import { RedblackDirective } from './redblack.directive';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { DadosAleatoriosComponent } from './dados-aleatorios/dados-aleatorios.component';




@NgModule({
  declarations: [
    AppComponent,
    PilaGenericaComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    EjtwoWayBindingComponent,
    EjdirectivangforComponent,
    EsMayorDeEdadgforComponent,
    ArticulosComponent,
    DadosComponent,
    RedblackDirective,
    PadreComponent,
    HijoComponent,
    DadosAleatoriosComponent,




  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
