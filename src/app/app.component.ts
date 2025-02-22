import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  publications: any[] = [];
  projects: any[] = [];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = [{ id: 1, name: 'Data Science Dashboard' }, { id: 2, name: 'Carpe Diem'}];
  }

  refreshProjects() {
    this.loadProjects();
  }
}

@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrl: 'button-overview-example.css',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonOverviewExample {}