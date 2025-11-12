import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-cultura',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './cultura.html',
  styleUrls: ['./cultura.css']
})
export class CulturaComponent {
  constructor(private router: Router) {}

  noticia = {
    titulo: 'La riqueza cultural de Colombia: tradiciones que nos unen',
    subtitulo: 'Desde los carnavales hasta la música folclórica, la diversidad cultural del país brilla en cada región',
    autor: 'Redacción Cultura',
    fecha: new Date('2025-11-06'),
    imagenUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80', // 🏞️ Nueva imagen tipo paisaje
    pieFoto: 'Paisaje colombiano que refleja la conexión entre cultura, naturaleza y tradición.',
    contenido: `
Colombia es un país lleno de color, tradición y diversidad. Su cultura es el reflejo de una mezcla de raíces indígenas, africanas y europeas que se expresan en la música, la gastronomía, las festividades y el arte.

Entre las manifestaciones más emblemáticas se encuentran el Carnaval de Barranquilla, la Feria de las Flores en Medellín y el Festival Vallenato en Valledupar, eventos que atraen visitantes de todo el mundo.

La música y la danza son pilares fundamentales: el cumbia, el porro, el bambuco y el joropo representan la identidad de cada región del país. Asimismo, la artesanía, la literatura y la pintura continúan enriqueciendo el panorama cultural colombiano.

El Ministerio de Cultura ha impulsado programas para proteger las tradiciones ancestrales y promover la participación de las comunidades locales en proyectos artísticos y educativos.

La cultura colombiana no solo es un motivo de orgullo, sino también un puente que une a las generaciones en torno al respeto y la celebración de la diversidad.
`
  };

  volver() {
    this.router.navigate(['/noticias']);
  }
}
