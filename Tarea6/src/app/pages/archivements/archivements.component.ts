import { Component } from '@angular/core';
import { Archivement, Colors } from 'src/app/shared/interfaces/archivement';

@Component({
  selector: 'app-archivements',
  templateUrl: './archivements.component.html',
  styleUrls: ['./archivements.component.scss']
})
export class ArchivementsComponent {
  archivements: Array<Archivement> = [
    {
      award: 'Gold & Silver Award',
      year: '2022',
      color: Colors.Blue, 
      contest: 'FECIIT, Iteso',
      image:'/assets/img/cover.jpg'
    },
    {
      award: 'AWS award winner & 4th international place',
      year: '2021',
      color: Colors.LightBlue, 
      contest: 'Singapore Space Challenge',
      image:'/assets/img/cover.jpg'
    },
    {
      award: '2nd development stage pass',
      year: '2019',
      color: Colors.Green, 
      contest: 'Hacia una Base Lunar, Universidad Autónoma de Nuevo León',
      image:'/assets/img/cover.jpg'
    },
    {
      award: '2nd national place',
      year: '2017',
      color: Colors.LightGreen, 
      contest: 'robotics category “LARK SEEK”, Torneo Mexicano de Robótica',
      image:'/assets/img/cover.jpg'
    },
    {
      award: 'International member',
      year: '2016',
      color: Colors.Pink, 
      contest: 'Chevy HackLab, Iteso',
      image:'/assets/img/cover.jpg'
    },
    {
      award: '1st place',
      year: '2016',
      color: Colors.Blue, 
      contest: 'Reto Tecnológico con Impacto Social "Hello Social Word", Tecnológico de Monterrey',
      image:'/assets/img/cover.jpg'
    },
    {
      award: 'Premio Estatal de la Juventud',
      year: '2016',
      color: Colors.LightBlue, 
      contest: 'Category “Science & Technology, Jalisco',
      image:'/assets/img/cover.jpg'
    },
    {
      award: '1st International place on the category “High School”',
      year: '2016',
      color: Colors.Green, 
      contest: 'Technovation Challenge',
      image:'/assets/img/cover.jpg'
    },
    {
      award: '4th national place',
      year: '2015',
      color: Colors.LightGreen, 
      contest: 'Concurso Juvenil de Debate Político,  México',
      image:'/assets/img/cover.jpg'
    },
  ]

}
