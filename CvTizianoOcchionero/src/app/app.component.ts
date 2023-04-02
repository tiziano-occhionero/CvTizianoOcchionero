import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CvTizianoOcchionero';
  home: boolean = false;
  portfolioweb: boolean = false;
  portfolioeditoriale: boolean = false;
  esperienze: boolean = false;
  studi: boolean = false;
  skills: boolean = false;
  interessi: boolean = false;  
  riconoscimenti: boolean = false;
}
