import { Routes } from '@angular/router';
import { ResumeComponent } from '../components/pages/resume/resume.component';
import { ProjectsComponent } from '../components/pages/projects/projects.component';
import { ContactComponent } from '../components/pages/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // 👈 your personal home screen
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // fallback
];
