import { Routes } from '@angular/router';
import { NotFoundPage } from './_pages/not-found/not-found.page';
import { HomePage } from './_pages/home/home.page';
import { PartPage } from './_pages/part/part.page';
import { ChronoItemComponent } from './features/chrono/chrono-item/chrono-item.component';

export const routes: Routes = [
    {
        path: 'home',
        pathMatch: 'full',
        component: HomePage
    },
    {
        path: 'part',
        pathMatch: 'full',
        component: PartPage
    },
    {
        path: 'chronoCOmponent',
        component: ChronoItemComponent,
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
