// En src/app/components/autores/autores.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Para enlazar a perfiles

@Component({
  selector: 'app-autores',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './autores.html',
  styleUrls: ['./autores.css']
})
export class AutoresComponent {
  // Puedes usar una ruta simple /autores/nombre-autor para ver sus artículos
  autores = [
    { nombre: 'Eduar Fabian', rol: 'Desarrollador y Analista', ruta: 'eduar-fabian', bio: 'Especialista en tendencias tecnológicas.' },
    { nombre: 'Max', rol: 'Desarrollador Full-Stack', ruta: 'max', bio: 'Experto en desarrollo web ágil.' },
    { nombre: 'Mauricio Yate', rol: 'Jefe de Contenido', ruta: 'mauricio-yate', bio: 'Redactor principal de política y economía.' },
  ];
}