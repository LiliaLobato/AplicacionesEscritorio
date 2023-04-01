import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'tareas', component: TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
