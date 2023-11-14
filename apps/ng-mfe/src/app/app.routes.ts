import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    { path: 'home', component: AppComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];