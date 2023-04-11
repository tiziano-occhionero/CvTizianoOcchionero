import { Component } from '@angular/core';

@Component({
  selector: 'app-studi',
  templateUrl: './studi.component.html',
  styleUrls: ['./studi.component.css']
})
export class StudiComponent {
  datiIst = [
    {
      title: "Academy front-end developer",
      dove: "BcSoft s.r.l.",
      tipo: "- (In aula virtuale",
      cosa: "L'obiettivo del corso è la creazione di programmatori specializzati nello sviluppo della parte front end di siti e applicazioni web. L'allievo acquisterà le competenze sui linguaggi come: HTML, CSS, Javascript, Node JS, Basi di SQL e approfondendo il framework Angular.",
      quando: "20/02/2023 - 28/03/2023 (218 ore)"
    },
    {
      title: "JAVASCRIPT (ES20), TYPESCRIPT (2.X E 3.X) E GIT",
      dove: "UDEMY / AUTODIDATTA",
      tipo: "- ROMA",
      cosa: "Argomenti: Studio introduttivo che ha posto le basi per passare a un framework come nodejs, Angular, Vue o React a seconda dell'esigenza. Gli argomenti trattati di Javascript sono stati quelli pre ES15 fino ad arrivare alla programmazione asincrona, per proseguire fino alla ES20. Typescript, tutti i concetti fondamentali delle versioni 2.X e 3.X. Ho imparato a versionare il software con Git con piattaforma GitHub. Come progetto finale ho realizzato una web app con js e totalmente responsive, nello specifico una ToDo App per mettere in pratica le nozioni appena acquisite.",
      quando: "05/2022 (200 ore)"
    },
    {
      title: "ATTESTATO DI PROGETTISTA WEB",      
      dove: "ISTITUTO CEFI",
      tipo: "(ENTE DI FORMAZIONE IN MATERIE INFORMATICHE) - ROMA",
      cosa: "Argomenti: Realizzazione di Sito Web; eCommerce e Booking in Wordpress; Come si realizza un Theme Child e a cosa serve; SEOZoom, GTmetrix, Google PageSpeed Insights e SeoTesterOnline; Ottimizzazione dei Siti Web, Tecnologie AMP, WebP; Sistemi di Pagamento PayPal e Stripe.",
      quando: "05/2021 (14 ore)"
    },
    {
      title: "CERTIFICATO DI WEB DESIGN",      
      dove: "UDEMY",
      tipo: "FORMAZIONE ONLINE)",
      cosa: "Specializzazione in Web Design Responsive Cross-platform col Framework Bootstrap; HTML5, CSS3 e SASS; Progettazione e sviluppo col CMS Wordpress, Plugin, Temi e eCommerce con WooCommerce; UX/UI e Wireframes con l’utilizzo degli applicativi come Miro e Adobe Xd; Conoscenza base di: Zeplin, Sketch, inVision, Figma e Marvel.",
      quando: "02/2020 - 06/2020 (360 ore"
    },
    {
      title: "CORSO FRONT-END",      
      dove: "NESEA SRL",
      tipo: "(INNOVATION CONSULTING) - ROMA",
      cosa: "Sviluppo front-end con particolare attenzione a, HTML5, CSS3, Typescript, Javascript e Angular. Training on the job di tre mesi affiancando i programmatori su vari progetti.",
      quando: "09/2019 - 12/2019"
    },
    {
      title: "CORSO IN WEB DESIGN & E-COMMERCE",      
      dove: "PC ACADEMY",
      tipo: "(ACCADEMIA DI INFORMATICA) - ROMA",
      cosa: "Argomenti: HTML5, CSS3, Layout responsive; CMS WordPress (widget, plugin e temi); SEO e Ecommerce con WooCommerce.",
      quando: "10/2015 - 12/2015 (76 ore)"
    },
    {
      title: "DIPLOMA DI MATURITÀ DI “TECNICO DELL'INDUSTRIA GRAFICA”",      
      dove: "ISTITUTO DI ISTRUZIONE SUPERIORE “CARLO URBANI” - ACILIA (ROMA)",
      tipo: "",
      cosa: "SPECIALIZZAZIONE IN PRESTAMPA - Voto 75/100",
      quando: "2008"
    },
    {
      title: "",      
      dove: "",
      tipo: "",
      cosa: "",
      quando: ""
    }
  ]  
}
