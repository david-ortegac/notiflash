// En src/app/components/navbar/navbar.ts

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- ¡CAMBIO CLAVE 1!

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  imports: [RouterLink] // <--- ¡CAMBIO CLAVE 2!
})
export class NavbarComponent {}
