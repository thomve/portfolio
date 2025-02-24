import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';


export const routes: Routes = [
    { path: 'projects', component: ProjectsComponent },
    { path: 'publications', component: PublicationsComponent },
];
