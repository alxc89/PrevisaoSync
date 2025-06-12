import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';
import { FavoritesPage } from './pages/favorites/favorites.page';
import { DetailsPage } from './pages/details/details.page';

export const routes: Routes = [
    {
        path: 'login', component: LoginPage
    },
    {
        path: '', component: HomePage
    },
    {
        path: 'home', component: HomePage
    },
    {
        path: 'favorites', component: FavoritesPage
    },
    {
        path: 'details', component: DetailsPage
    }
];