import { Routes } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
        { path: 'connection', component: ConnectionComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent},
        { path: 'homePage', component: HomePageComponent},
        { path: '', redirectTo: '/homePage', pathMatch: 'full' }
];
