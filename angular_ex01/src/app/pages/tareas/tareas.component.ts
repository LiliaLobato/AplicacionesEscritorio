import { Component } from '@angular/core';

import { TareaService } from 'src/app/shared/services/tarea.service';
import { Tarea } from 'src/app/shared/interfaces/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {

  tareas: Array<Tarea> = [];
  tareasFiltradas: Array<Tarea> = [];
  buscar: string = "";

  constructor(private tareaService: TareaService){
    this.refrescar()
  }

  refrescar(){
    this.tareaService.getTareas().subscribe((response:any) => {
      this.tareas = response;
      this.tareasFiltradas = this.tareas;
    })
    console.log(this.tareaService.getTareas())
  }

  filtrar(){
    console.log("Click " + this.buscar)
    const buscar = this.buscar.toLowerCase()
    this.tareasFiltradas = this.tareas.filter( item => {
      return item.title?.toLowerCase().includes(this.buscar);
    })
  }


}
