import { Component } from '@angular/core';

@Component({
  selector: 'app-esperienze',
  templateUrl: './esperienze.component.html',
  styleUrls: ['./esperienze.component.css']
})
export class EsperienzeComponent {
  datiEsp = [
    {
      title: "ADDETTO ALLA STAMPA E ASSISTENZA XEROX",      
      dove: "ORRICK HERRINGTON & SUTCLIFFE LLP",
      tipo: "(STUDIO LEGALE) - ROMA",
      cosa: "Mansioni: Stampa di documenti e assistenza alle macchine da stampa Xerox di tutto lo stabile.",
      quando: "05/2022 - 12/2022"
    },
    {
      title: "EXECUTIVE WEB DESIGNER",      
      dove: "SYNERGIA S.R.L. PER WHITEHALL REPLY S.R.L.",
      tipo: "(SERVIZI IT E CONSULENZA IT) - ROMA",
      cosa: "Mansioni: Da wireframe statico in Figma mi sono occupato di renderlo navigabile per poi progettare la struttura HTML5/SCSS basato su Bootstrap.",
      quando: "03/2022 - 04/2022"
    },
    {
      title: "UI/UX DESIGNER JUNIOR",      
      dove: "MLP STUDIO SRLS",
      tipo: "(WEB AGENCY) - ROMA",
      cosa: "Mansioni: progettazione e realizzazione di wireframe grafici tra cui il cloud/dashboard aziendale. Manutenzione di siti vetrina, ecommerce e data entry di nuovi prodotti.",
      quando: "06/2021 - 09/2021"
    },
    {
      title: "FRILANCE - GRAFICO EDITORIALE MULTIMEDIALE",      
      dove: "CSM",
      tipo: "(CONSIGLIO SUPERIORE DELLA MAGISTRATURA) - ROMA",
      cosa: "Mansioni: Ideazione della grafica e impaginazione di un PDF Interattivo di una circolare fruibile dai componenti del CSM presenti a un meeting su argomenti interni.",
      quando: "09/2020 - 10/2020"
    },
    {
      title: "SVILUPPATORE WEB JUNIOR",      
      dove: "NESEA SRL",
      tipo: "(INNOVATION CONSULTING) - ROMA",
      cosa: "Training on the job (post corso Front End). Prima esperienza in ambito web in un ambiente da ufficio, qui mi sono occupato di realizzare pagine web con le tecnologie HTML5, CSS3, SASS basate sul framework Bootstrap da linee guida fornite tramite mockup.",
      quando: "04/2019 - 07/2019"
    },
    {
      title: "GRAFICO EDITORIALE E PUBBLICITARIO",      
      dove: "EUROGRAPH",
      tipo: "(TIPOGRAFIA) - ROMA",
      cosa: "Mansioni: progettazione e realizzazione di grafiche, branding e stampa digitale e plotter. Realizzazione di grafica per taglio al plotter con relativa vetrofanie.",
      quando: "09/2011 - 11/2015 & 12/2017 - 07/2019"
    },
    {
      title: "GRAFICO EDITORIALE E PUBBLICITARIO",      
      dove: "RAIA SRL",
      tipo: "(TIPOGRAFIA) - GUIDONIA (RM)",
      cosa: "Mansioni: impaginazione di riviste, creazione grafiche e stampa su tessuti; branding, carte intestate, vetrofanie.",
      quando: "01/2016 – 10/2017"
    },
    {
      title: "PRODUCT DESIGNER",      
      dove: "FREELANCER",
      tipo: " - ROMA",
      cosa: "Progettazione, realizzazione e vendita al dettaglio di Skin Wrap (adesivi protettivi in pvc) per Smartphone tramite utilizzo del Plotter da taglio.",
      quando: "10/2013 – 04/2018"
    }
  ]
}
