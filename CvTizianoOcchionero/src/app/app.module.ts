import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './bootsNavbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StudiComponent } from './studi/studi.component';
import { InteressiComponent } from './interessi/interessi.component';
import { PortfoliowebComponent } from './portfolioweb/portfolioweb.component';
import { PortfolioeditorialeComponent } from './portfolioeditoriale/portfolioeditoriale.component';
import { EsperienzeComponent } from './esperienze/esperienze.component';
import { SkillsComponent } from './skills/skills.component';
import { RiconoscimentiComponent } from './riconoscimenti/riconoscimenti.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    StudiComponent,
    InteressiComponent,
    PortfoliowebComponent,
    PortfolioeditorialeComponent,
    EsperienzeComponent,
    SkillsComponent,
    RiconoscimentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
