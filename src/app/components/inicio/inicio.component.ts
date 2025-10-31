import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas comunes (*ngIf, *ngFor)

@Component({
  selector: 'app-inicio',
  standalone: true, 
  imports: [CommonModule], // Agregamos CommonModule
  
  // ¡CORRECCIÓN! Usamos el nombre completo del archivo
  templateUrl: './inicio.component.html', 
  styleUrls: ['./inicio.component.css']  
})
export class InicioComponent {
  // Aquí va la lógica de tu componente
}