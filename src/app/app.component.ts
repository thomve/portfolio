import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portfolio-app';
}

  // ngOnInit() {
  //   this.loadProjects();
  // }

  // loadProjects() {
  //   this.projects = [{ id: 1, name: 'Data Science Dashboard' }, { id: 2, name: 'Carpe Diem' }];
  // }

  // refreshProjects() {
  //   this.loadProjects();
  // }
