import { bootstrapApplication } from '@angular/platform-browser';

// 1. Importa la configuración de la aplicación
import { appConfig } from './app/app.config';

// 2. CORREGIDO: Importa la clase con el nombre correcto: 'AppComponent'
import { AppComponent } from './app/app'; 


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));