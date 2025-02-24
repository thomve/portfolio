import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterOutlet, RouterLinkActive]
})
export class AppComponent {
  title = 'portfolio-website';
  publications: any[] = [];
  projects: any[] = [];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [{ id: 1, name: 'Data Science Dashboard' }, { id: 2, name: 'Carpe Diem' }];
  }

  refreshProjects() {
    this.loadProjects();
  }
}
