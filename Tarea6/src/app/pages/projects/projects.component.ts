import { Component } from '@angular/core';
import { Project, Type } from 'src/app/shared/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectsSoftware: Array<Project> = [ 
    {
    projectName: '"Real-time data animation"',
    techinicalName: 'Biomechanical Data Acquisition',
    projectType: Type.Software,
    image: '/assets/img/projects/biomechanicalData.jpg',
    },
    {
    projectName: '"Training tracker mobile app"',
    techinicalName: 'Swimming biomechanics',
    projectType: Type.Software,
    image: '/assets/img/projects/swimmingBiomechanics.jpg',
    },
  ]

  projectsHardware: Array<Project> = [ 
    {
    projectName: '"Sabby Tracker"',
    techinicalName: 'SIDS monitoring system',
    projectType: Type.Hardware,
    image: '/assets/img/projects/sids.jpg',
    },
    {
    projectName: '“MECA Spider”',
    techinicalName: 'Robotic Hexapod',
    projectType: Type.Hardware,
    image: '/assets/img/projects/roboticHexapod.jpg',
    },
  ]

  
  projectsMixed: Array<Project> = [ 
    {
    projectName: '"Mars Mission Rover"',
    techinicalName: 'Electronics Team Leader, colaborating with the Software and Mechanical team',
    projectType: Type.Mixed,
    image: '/assets/img/projects/marsRover.jpg',
    },
    {
    projectName: '"Lunar Mission Rover"',
    techinicalName: 'Lunar soil analysis to generate a map of the distribution of volaties',
    projectType: Type.Mixed,
    image: '/assets/img/projects/lunarRover.jpg',
    },
  ]
   
}
