import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { CardCarsComponent } from './card-cars/card-cars.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, InfoComponent, CardPriceComponent, CardCarsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'BrusselsPermis';
}
