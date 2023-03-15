import { Component } from '@angular/core';

interface Banner {
  titulo: string;
  descripcion: string;
  url?: string; //propiedad opcional
}

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent {
  banner:Banner = {
    titulo: 'Hola desde la clase HomeBannerComponent',
    descripcion: 'Este es un objeto',
    url: '#',
  }
}
