import { Component } from '@angular/core';
import { Education, Colors } from 'src/app/shared/interfaces/education';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educacion: Array<Education> = [
    {
      degree: 'BSc. in Computer Systems Engineering',
      school: 'ITESO',
      period: ' (2021/ May 2023)',
      image: '/assets/img/education/IS.jpg',
      color: Colors.Blue,
      description: ['Awarded “Certificate of International & Intercultural Competencies”']
    },
    {
      degree: 'BSc. in Electronic Engineering',
      school: 'ITESO',
      period: ' (2016/ 2021)',
      image: '/assets/img/education/IE.jpg',
      description: [
        'Ex-Career President & Ex-Varsity Team Member',
        'AJIEMS & Andy Grove Scholarship Winner'
      ]
    },
    {
      degree: 'Entrepreneurship Diploma course',
      image: '/assets/img/education/DC.jpg',
      color: Colors.LightGreen,
      description: [
        '"Yo Emprendo 2017", Tecnológico de Monterrey',
        '"TrepCamp 2019", Berkeley University'
      ]
    }
  ];

}
