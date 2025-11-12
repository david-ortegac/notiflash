import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mundo',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './mundo.html',
  styleUrls: ['./mundo.css']
})
export class MundoComponent {

  constructor(private router: Router) {}

  regresar() {
    this.router.navigate(['/noticias']);
  }

  noticia = {
    imagenUrl: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200&q=80',
    titulo: 'Ciudades del mundo avanzan hacia la movilidad eléctrica',
    fecha: new Date('2025-09-21'),
    autor: 'Redacción Internacional',
    
    contenido: `
      En diferentes partes del mundo, las ciudades están adoptando la movilidad eléctrica
      como respuesta a la crisis climática. Desde Bogotá hasta Berlín, pasando por Tokio y Nueva York,
      se implementan programas de transporte público impulsados por energía limpia.

      Expertos aseguran que el futuro del transporte urbano dependerá de la infraestructura de carga rápida
      y del compromiso de los gobiernos en promover incentivos para los vehículos eléctricos.

      Esta transición global hacia la sostenibilidad representa un paso clave para reducir las emisiones de carbono
      y mejorar la calidad del aire en las principales urbes del planeta.
    `,
    
  };
}
