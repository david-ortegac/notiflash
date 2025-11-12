import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-economia',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './economia.html',
  styleUrls: ['./economia.css']
})
export class EconomiaComponent {
  constructor(private router: Router) {}

  noticia = {
    titulo: 'El crecimiento económico de Colombia impulsa nuevas oportunidades',
    subtitulo: 'El país fortalece su competitividad a nivel regional con inversión extranjera y desarrollo sostenible',
    autor: 'Redacción Economía',
    fecha: new Date('2025-11-09'),

    // ✅ Nueva imagen funcional sobre economía y dinero
    imagenUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=80',

    pieFoto: 'Monedas apiladas frente a gráficos financieros, símbolo del crecimiento económico.',
    contenido: `
Colombia ha mostrado un crecimiento sostenido en los últimos años, impulsado por sectores como la tecnología, la energía y la agricultura sostenible. 
Las políticas de inversión extranjera directa han fortalecido la estabilidad macroeconómica del país y generado nuevos empleos.

El Banco de la República proyecta un crecimiento del PIB del 4,2% para el año 2025, acompañado de una inflación controlada. 
El comercio exterior también ha aumentado gracias a los acuerdos con mercados emergentes en Asia y América Latina.

El gobierno, en conjunto con el sector privado, trabaja en estrategias para reducir la informalidad laboral, mejorar la productividad y promover la economía verde.

Estas medidas consolidan a Colombia como una de las economías más dinámicas de América Latina y un destino atractivo para la inversión extranjera.
`
  };

  volver() {
    this.router.navigate(['/noticias']);
  }
}
