import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public clickWhat(){
    const phoneNumber = '+32465640683';
    const message = 'Bonjour';
    const formattedPhoneNumber = phoneNumber.replace(/[.\s]/g, '');
    const urlWhatsApp = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(urlWhatsApp, '_blank');
  }

  clickInstagrame(){
    window.open("https://www.instagram.com/brussels.permis/", '_blank');
    
  }
}
