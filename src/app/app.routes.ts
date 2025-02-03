import { Routes } from '@angular/router';
import { ConnectionComponent } from './components/connection/connection.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ProcessComponent } from './components/process/process.component';

export const routes: Routes = [
        { path: 'connection', component: ConnectionComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent},
        { path: 'homePage', component: HomePageComponent},
        { path: 'projects', component: ProjectsComponent},
        { path: 'articles', component: ArticlesComponent },
        { path: 'process', component: ProcessComponent },
        { path: '', redirectTo: '/homePage', pathMatch: 'full' }
];
