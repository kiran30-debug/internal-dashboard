import { Routes } from '@angular/router';
import { Edit } from './edit/edit';
import { Home } from './home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'edit', component: Edit},
];
