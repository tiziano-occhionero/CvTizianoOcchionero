import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  home: boolean = false;
  portfolioweb: boolean = false;
  portfolioeditoriale: boolean = false;
  esperienze: boolean = false;
  studi: boolean = false;
  skills: boolean = false;
  interessi: boolean = false;
  riconoscimenti: boolean = false;
  form: boolean = false
}

  