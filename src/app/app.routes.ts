import { Routes } from '@angular/router';// Asegúrate que el path es correcto
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NosotrosComponent } from './components/nosotros/nosotros';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:"register",
        component: RegisterComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    }
    // ... otras rutas si tienes
];