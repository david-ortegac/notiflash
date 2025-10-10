import { Routes } from '@angular/router';
import { Pepito } from './components/pepito/pepito';
import { Index } from './components/index';

export const routes: Routes = [
    {
        path: '',
        component: Index
    },
    {
        path: 'pepito',
        component: Pepito
    }
];
