import { Component } from '@angular/core';
import { Tarea } from './../../shared/interfaces/tarea';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tareas: Array<Tarea> = [];
  cadenaOnumero: Array<string|number>;
  cargando:boolean = false;

  constructor(){
    this.cargando = true;
    this.cadenaOnumero = [0, 'i'];
    setTimeout(()=>{ 
      this.tareas = [
        {titulo: 'Tarea 1', descripcion: 'Ejemplo de tarea', status: 'nueva'},
        {titulo: 'Tarea 2', descripcion: 'Esto es un ejemplo wuwuwuw', status: 'en progreso'}
      ]
      this.cargando = false;
    },3000)
  };

}
