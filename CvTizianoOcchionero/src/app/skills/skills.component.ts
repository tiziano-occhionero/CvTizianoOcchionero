import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

/*
export class SkillsComponent {
  ambito = [
    { title: "SVILLUPPO WEB (JUNIOR)",
      img: "https://img.icons8.com/ios-filled/55/6c757d/javascript.png",
      img: "https://img.icons8.com/material-rounded/62/6c757d/typescript.png",
      img: "https://img.icons8.com/ios-filled/50/6c757d/git.png"          
    }
      
    
  ]
}
*/

export class SkillsComponent {
  ambito = [
    { title: "SVILLUPPO WEB (JUNIOR)",
      loghi: [
        { img: "https://img.icons8.com/ios-filled/55/6c757d/javascript.png",
          title: "javascript"
        },
        { img: "https://img.icons8.com/material-rounded/62/6c757d/typescript.png",
          title: "typescript"
        },
        { img: "https://img.icons8.com/ios-filled/50/6c757d/git.png",
          title: "git"
        }
      ]
    },
    { title: "Web Design",
      loghi: [
        { img: "https://img.icons8.com/windows/64/6c757d/bootstrap.png",
          title: "Bootstrap"
        },
        { img: "https://img.icons8.com/ios-filled/50/6c757d/html-5.png",
          title: "HTML5"
        },
        { img: "https://img.icons8.com/ios-glyphs/60/6c757d/css3.png",
          title: "CSS3"
        },
        { img: "https://img.icons8.com/ios-filled/50/6c757d/sass.png",
          title: "Sass"
        },
        { img: "https://img.icons8.com/metro/52/6c757d/wordpress.png",
          title: "WordPress"
        },
        { img: "https://img.icons8.com/material/52/6c757d/woocommerce.png",
          title: "WooCommerce"
        }
      ]
    },
    { title: "UX / UI",
      loghi: [
        { img: "https://img.icons8.com/material/64/6c757d/adobe-xd.png",
          title: "Adobe Xd"
        },
        { img: "https://img.icons8.com/windows/64/6c757d/figma.png",
          title: "Figma"
        }
      ]
    },
    { title: "Strumenti Web e Grafica",
      loghi: [
        { img: "https://img.icons8.com/ios-glyphs/60/6c757d/visual-studio.png",
          title: "Visual Studio Code"
        },
        { img: "https://img.icons8.com/metro/52/6c757d/adobe-photoshop.png",
          title: "Adobe Photoshop"
        },
        { img: "https://img.icons8.com/ios-filled/50/6c757d/git.png",
          title: "git"
        },
        { img: "https://img.icons8.com/metro/52/6c757d/adobe-illustrator.png",
          title: "Adobe Illustrator"
        },
        { img: "https://img.icons8.com/metro/52/6c757d/adobe-indesign.png",
          title: "Adobe Indesign"
        }
      ]
    }
    
  ]
}