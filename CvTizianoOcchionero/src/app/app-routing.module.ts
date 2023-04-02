import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InteressiComponent } from './interessi/interessi.component';
import { PortfoliowebComponent } from './portfolioweb/portfolioweb.component';
import { PortfolioeditorialeComponent } from './portfolioeditoriale/portfolioeditoriale.component';
import { StudiComponent } from './studi/studi.component'
import { EsperienzeComponent } from './esperienze/esperienze.component';
import { SkillsComponent } from './skills/skills.component';
import { RiconoscimentiComponent } from './riconoscimenti/riconoscimenti.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'portfolioweb',
    component: PortfoliowebComponent,
  },
  {
    path: 'portfolioeditoriale',
    component: PortfolioeditorialeComponent,
  },
  {
    path: 'esperienze',
    component: EsperienzeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'interessi',
    component: InteressiComponent,
  },
  {
    path: 'studi',
    component: StudiComponent,
  },
  {
    path: 'riconoscimenti',
    component: RiconoscimentiComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
