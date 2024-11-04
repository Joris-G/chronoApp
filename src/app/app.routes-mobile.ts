import { Routes } from '@angular/router';
import { NotFoundPage } from './_pages/not-found/not-found.page';
import { HomePage } from './_pages/home/home.page';
import { PartPage } from './_pages/part/part.page';
import { ChronoPage } from './_pages/chrono/chrono.page';

export const routes: Routes = [
    {
        path: 'piece',
        component: PartPage,
        // component: PartCreationComponent,
        // children: PartRoutes,
    },
    {
        path: 'chrono',
        component: ChronoPage,
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: HomePage,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
