import { Component } from '@angular/core';
import { Experience } from 'src/app/shared/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: Array<Experience> = [
    {
      title: 'Application Developer Intern',
      company: 'Intel Corporation',
      period: 'Oct 2022 - Current',
      description: 'Development and validation of internal tools.',
      details: [
        'Implementation of new functionalities for internal validation tools.',
        'Creation and migration of automated tests using Cypress.', 
        'Continuos bug report and weekly regressions.',
        'Execution of tests, manual and automated.',
        'Skills acquired: TypeScript, Python, DevOps and JavaScript'
      ],
      image: '/assets/img/cover.jpg'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Microsoft',
      period: 'Jun 2022 - Aug 2022',
      description: 'Full stack development project for OOBE.',
      details: [
        'Implementation of new functionalities, including adding visual element and backend communication with internal APIs through several layers of authentication and security',
        'Creation of unit test using chutzpah.', 
        'Continuos communication with multiple teams located around the world.',
        'Execution of tests, manual and automated.',
        'Skills acquired: .NET framework, C#, TypeScript and JavaScript'
      ],
      image: '/assets/img/cover.jpg'
    },
    {
      title: 'Functional Validation Engineer',
      company: 'Intel Corporation',
      period: 'Jul 2021 - Jun 2022',
      description: 'Post-silicon validation, test plan creation & active debug.',
      details: [
        'Post silicon validation',
        'Debug of failures through different domains: Applications (i.e. concurrency stress frameworks), Operating Systems (Linux, drivers) and BIOS.',
        'Python/Bash programming for building test variants, focus tests and concurrency stress tests.',
        'Management of automated testing infrastructure (execution strategy and triage of failures).',
        'Skills acquired: Python and Linux'
      ],
      image: '/assets/img/cover.jpg'
    },
    {
      title: 'Engineering Intern, Pre-Silicon Validation Intern',
      company: 'FirstPass, acquired by Synopsys, Inc.',
      period: 'Aug 2019 - Jul 2021',
      description: 'Physical Design flow & Pre-silicon Validation.',
      details: [
        'Development of RTL IP',
        'Debugging on Waveforms and Test benches with UVM',
        'Worked on Physical Design flow (including PnR) for 3rd party IP',
        'Heavily involved on RTL debugging on RTL level and Netlist level',
        'Handle the development and examination of engineering plans and documents, as well as performing various tests.',
        'Cooperate effectively with senior personnel to provide support and assistance in the completion of various operations.',
        'Involved on the Internship Program as a Mentor with 4 younger interns on my charge.'
      ],
      image: '/assets/img/cover.jpg'
    }
  ];
}
