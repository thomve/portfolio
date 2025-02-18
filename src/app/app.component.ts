import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {MaterialModule} from './material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
  publications: any[] = [];
  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get('/projects').subscribe(data => {
      this.projects = data as any[];
    });
  }

  refreshProjects() {
    this.loadProjects();
  }
}
