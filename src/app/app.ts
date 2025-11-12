import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true, // <-- ¡CLAVE para el Standalone Bootstrapping!
  // Importa el RouterOutlet y el Navbar para que funcionen las rutas y la navegación
  imports: [RouterOutlet, NavbarComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Aquí puedes añadir lógica si es necesaria
}