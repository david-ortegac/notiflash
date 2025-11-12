import { Routes } from '@angular/router';

// ===============================
// 🔹 Importación de componentes
// ===============================
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NoticiasComponent } from './components/noticias/noticias';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia';
import { CategoriaComponent } from './components/categorias/categorias'; // ✅ CORREGIDO
import { NosotrosComponent } from './components/nosotros/nosotros';
import { DeportesComponent } from './components/deportes/deportes';
import { TecnologiaComponent } from './components/tecnologia/tecnologia';
import { PoliticaComponent } from './components/politica/politica';
import { CulturaComponent } from './components/cultura/cultura';
import { EconomiaComponent } from './components/economia/economia';
import { MundoComponent } from './components/mundo/mundo';

// ======================================
// 🧭 Definición de rutas principales del app
// ======================================
export const routes: Routes = [

  // 🔸 Redirección inicial
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🔐 Autenticación
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // 📰 Noticias y detalle
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'noticias/:categoria',
    component: NoticiasComponent
  },
  {
    path: 'noticia/:id',
    component: DetalleNoticiaComponent
  },

  // 🧭 Vista creativa de Categoría (Blog tipo NotiFlash)
  {
    path: 'categorias',
    component: CategoriaComponent // ✅ Nueva vista agregada
  },

  // 📘 Información institucional
  {
    path: 'nosotros',
    component: NosotrosComponent
  },

  // 🏆 Categorías individuales
  {
    path: 'deportes',
    component: DeportesComponent
  },
  {
    path: 'tecnologia',
    component: TecnologiaComponent
  },
  {
    path: 'politica',
    component: PoliticaComponent
  },
  {
    path: 'cultura',
    component: CulturaComponent
  },
  {
    path: 'economia',
    component: EconomiaComponent
  },
  {
    path: 'mundo',
    component: MundoComponent
  },

  // ⚠️ Página por defecto (error 404)
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
