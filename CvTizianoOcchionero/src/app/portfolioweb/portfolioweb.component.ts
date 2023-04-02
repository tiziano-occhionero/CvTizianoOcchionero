import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolioweb',
  templateUrl: './portfolioweb.component.html',
  styleUrls: ['./portfolioweb.component.css']
})
export class PortfoliowebComponent {
  datiPW = [
    {
      title: "todo easy",
      url: "http://todoeasy.altervista.org/",
      p: "Esercizio didattipo post corso Javascript su Udemy e Autodidatta. Come progetto finale ho realizzato una web app con js e totalmente responsive, nello specifico una ToDo App per mettere in pratica le nozioni appena acquisite."
    },
    {
      title: "CLAA SRL",
      url: "https://www.claasrl.com/",
      p: "Società che si occupa della lavorazione di alluminio e acciaio con macchinari di alta tecnologia. Ho collaborato occupandomi in parte della grafica, foto e data entry dei prodotti."
    },
    {
      title: "MINERVA SANDALI",
      url: "https://www.minervasandali.it/",
      p: "Sandali fatti a mano di alta fattura. Anche per questo sito ho collaborato occupandomi in parte della grafica, foto e data entry dei prodotti."
    },
    {
      title: "TOP ECOMMERCE",
      url: "https://topecommerce.altervista.org/wp1/",
      p: "eCommerce fittizio realizzato con Wordpress e WooCommerce."
    },
    {
      title: "NICOLA OCCHIONERO QUADRI & MUSICA",
      url: "http://nicolaocchionero.altervista.org/index.html",
      p: "Esposizione virtuale di Quadri e Musica riprodotti da mio padre, realizzato in Html puro"
    },
    {
      title: "MY50TOPCAR",
      url: "http://my50topcar.altervista.org/index.html",
      p: "Esposizione virtuale delle mie 100 automobili preferite. Mio primo lavoro in assoluto dove ho imparato e sfruttato Bootstrap in più con l'ausilio di SCSS"
    },
    {
      title: "Cv Online vecchia versione",
      url: "http://http://cvtizianoocchionero.altervista.org/",
      p: "Precedente cv online, praticamente identico a questo con la differenza che quello attuale è fatto in angular, senza bootstrap. Quello precedente è scritto completamente in ogni parte del sito, questo tramite gli *ngFor"
    }
  ]
}
