import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deportes.html',
  styleUrls: ['./deportes.css']
})
export class DeportesComponent {

  constructor(private router: Router) {}

  noticiaDestacada = {
    titulo: 'Colombia en el Campeonato Mundial de Ciclismo de Ruta 2025 (Kigali, Ruanda)',
    subtitulo: 'Delegación colombiana de 14 ciclistas compitió entre el 21 y el 28 de septiembre de 2025.',
    autor: 'Redacción Deportes',
    fecha: '21 - 28 de septiembre de 2025',
    imagenUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80',
    contenido: `
      Del 21 al 28 de septiembre de 2025 se celebró en Kigali (Ruanda) el Campeonato Mundial de Ciclismo de Ruta 2025.
      Colombia acudió con una nómina de 14 corredores, entre los cuales figuraron nombres como Egan Bernal, Harold Tejada,
      Brandon Rivera y Walter Vargas, convocados por la Federación Colombiana de Ciclismo.

      La prueba élite masculina (ruta) se disputó el 28 de septiembre sobre un circuito exigente de varias vueltas, con
      importante desnivel y tramos técnicos que marcaron la carrera. El esloveno Tadej Pogačar se coronó campeón; por
      parte de los colombianos, Harold Tejada fue el mejor ubicado al finalizar 14.º en la prueba élite, mientras que
      otros integrantes del equipo (Egan Bernal, Brandon Rivera y Walter Vargas) no pudieron completar la carrera (DNF).

      La participación colombiana en Kigali 2025 dejó varias lecturas positivas: la experiencia obtenida por las nuevas
      promesas en circuitos internacionales, la proyección de talento joven y la confirmación de que Colombia sigue siendo
      una nación referente en ciclismo de ruta. La Federación ya anunció planes de seguimiento y apoyo para la formación
      de nuevos corredores con miras a las próximas competencias continentales y mundiales.
    `
  };

  // 🔙 Función para volver a la página principal
  volverANoticias() {
    this.router.navigate(['/noticias']);
  }
}
