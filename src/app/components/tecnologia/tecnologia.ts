import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tecnologia.html',
  styleUrls: ['./tecnologia.css']
})
export class TecnologiaComponent {
  constructor(private router: Router) {}

  noticiaDestacada = {
    titulo: 'Colombia destaca en la Cumbre Mundial de Innovación y Tecnología 2025',
    subtitulo: 'El país fue sede del evento tecnológico más importante de América Latina, atrayendo a más de 40 naciones.',
    autor: 'Redacción Tecnología',
    fecha: 'Octubre 2025',

    // 💡 Nueva imagen moderna de tecnología e innovación
    imagenUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',

    contenido: `
      Del 10 al 14 de octubre de 2025, Bogotá fue la sede de la Cumbre Mundial de Innovación y Tecnología,
      evento que reunió a más de 40 países y 300 empresas tecnológicas para discutir los avances en inteligencia artificial,
      robótica, sostenibilidad digital y conectividad 6G.

      Durante la cumbre, Colombia presentó su nuevo plan de desarrollo digital, que incluye la creación de centros de innovación
      en ciudades como Medellín, Cali y Barranquilla. Además, se firmaron acuerdos con empresas internacionales para fomentar
      la investigación en automatización e inteligencia artificial aplicada al sector público.

      Este evento marcó un antes y un después en el ecosistema tecnológico del país, posicionando a Colombia como un referente
      en transformación digital dentro de la región.
    `
  };

  volverInicio() {
    this.router.navigate(['/noticias']);
  }
}
