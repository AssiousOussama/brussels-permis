import { Component } from '@angular/core';
import { SHARED_IMPORTS_BASE } from '../shared-imports';
@Component({
  selector: 'app-header',
  imports: SHARED_IMPORTS_BASE,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
  public choseElements: any = [
    {
      name: 'Maison',
      picture: 'assets/imgs/home.png',
    },
    {
      name: 'Informations',
      picture: 'assets/imgs/info.png',
    },
    {
      name: 'Tarifs',
      picture: 'assets/imgs/money.png',
    },
    {
      name: 'Voitures',
      picture: 'assets/imgs/volant.png',
    },
  ];
  public closeMenu: boolean = true;
  public menuPic: string = 'assets/imgs/menu.png';

  public clickMenu() {
    alert("dsdsqds")
    if (this.closeMenu) {
      this.menuPic = 'assets/imgs/croix.png';
    } else {
      this.menuPic = 'assets/imgs/menu.png';
    }
    this.closeMenu = !this.closeMenu;
  }

  scrollToComponent(componentIndex: number) {
    const element = document.getElementById(
      'sec-' + this.choseElements[componentIndex].name
    );
    if (element) {
      const offset = 100; // Adjust this value as needed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

 
  
}
