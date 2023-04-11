import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  ambito = [
    { title: "SVILLUPPO WEB (JUNIOR)",
      loghi: [
        { img: "../assets/icons8-javascript-50.png",
          title: "javascript"
        },
        { img: "../assets/icons8-typescript-50.png",
          title: "typescript"
        },
        { img: "../assets/icons8-node-js-50.png",
          title: "node.js"
        },
        { img: "../assets/icons8-angularjs-50.png",
          title: "angular"
        },
        { img: "../assets/icons8-mysql-logo-50.png",
          title: "Sql"
        }
        
      ]
    },
    { title: "Web Design",
      loghi: [
        { img: "../assets/icons8-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-50.png",
          title: "HTML5"
        },
        { img: "../assets/icons8-css3-50.png",
          title: "CSS3"
        },
        { img: "../assets/icons8-bootstrap-50.png",
          title: "Bootstrap"
        },        
        { img: "../assets/icons8-sass-50.png",
          title: "Sass"
        },
        { img: "../assets/icons8-wordpress-50.png",
          title: "WordPress"
        },
        { img: "../assets/icons8-woocommerce-50.png",
          title: "WooCommerce"
        }
      ]
    },
    { title: "UX / UI",
      loghi: [
        { img: "../assets/icons8-adobe-xd-50.png",
          title: "Adobe Xd"
        },
        { img: "../assets/icons8-figma-50.png",
          title: "Figma"
        }
      ]
    },
    { title: "Strumenti Web e Grafica",
      loghi: [
        { img: "../assets/icons8-visual-studio-code-2019-50.png",
          title: "Visual Studio Code"
        },
        { img: "../assets/icons8-git-50.png",
          title: "git"
        },
        { img: "../assets/icons8-adobe-photoshop-50.png",
          title: "Adobe Photoshop"
        },        
        { img: "../assets/icons8-adobe-illustrator-50.png",
          title: "Adobe Illustrator"
        },
        { img: "../assets/icons8-adobe-indesign-50.png",
          title: "Adobe Indesign"
        }
      ]
    }
    
  ]
}