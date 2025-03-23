import { Component } from '@angular/core';
import { SHARED_IMPORTS_BASE } from '../shared-imports';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: SHARED_IMPORTS_BASE,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
  connect() {
    const phoneNumber = '+32465640683';
    const message = 'Bonjour';
    const formattedPhoneNumber = phoneNumber.replace(/[.\s]/g, '');
    const urlWhatsApp = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(urlWhatsApp, '_blank');
  }

  ngAfterViewInit() {
    const button = document.getElementById('testButton');
    button?.addEventListener('click', () => {
      alert('Button clicked');
    });
  }
}
