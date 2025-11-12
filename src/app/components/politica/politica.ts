import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-politica',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './politica.html',
  styleUrls: ['./politica.css']
})
export class PoliticaComponent {
  constructor(private router: Router) {}

  noticia = {
    titulo: 'Colombia impulsa reformas políticas para fortalecer la democracia',
    subtitulo: 'El Congreso aprueba medidas para garantizar mayor transparencia y participación ciudadana',
    autor: 'Redacción Política',
    fecha: new Date('2025-11-05'),

    // 🏛️ Imagen actualizada: políticos reunidos en mesa de trabajo
    imagenUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80',

    pieFoto: 'Reunión de líderes políticos durante la discusión de las nuevas reformas.',
    contenido: `
El gobierno colombiano ha anunciado una serie de reformas políticas que buscan fortalecer la democracia y promover una mayor participación ciudadana. 
Las nuevas medidas incluyen el impulso a los mecanismos de consulta popular, el aumento de la transparencia en la financiación de campañas y la modernización del sistema electoral.

La iniciativa fue aprobada por el Congreso tras un amplio debate que involucró a distintos sectores sociales y políticos. 
Según el ministro del Interior, las reformas “responden al compromiso del país con la rendición de cuentas y la participación ciudadana en los procesos de decisión pública”.

Además, se implementarán herramientas digitales que permitirán a los ciudadanos seguir en tiempo real los debates legislativos y consultar el avance de los proyectos de ley.
Estas acciones buscan acercar la política al ciudadano común y mejorar la confianza en las instituciones.

Con estas reformas, Colombia avanza hacia un modelo de gobierno más abierto, participativo y moderno.
`
  };

  volver() {
    this.router.navigate(['/noticias']);
  }
}
