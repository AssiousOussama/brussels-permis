import { Component } from '@angular/core';
import { SHARED_IMPORTS_BASE } from '../shared-imports';

@Component({
  standalone: true,
  selector: 'app-info',
  imports: SHARED_IMPORTS_BASE,
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  public infoElements: any = [
    'BrusselsPermis',
    'Avenue houba de strooper, 71020 Bruxelles',
    '+32465640683',
    'brussels.permis@gmail.com',
    'brussels.permis',
  ];
  public showToast: boolean = false;
  copyText(index: number) {
    const text = this.infoElements[index];
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.showNotification('Text copied to clipboard');
        })
        .catch((err) => {
          this.showNotification('Could not copy text');
        });
    } else {
      this.fallbackCopyTextToClipboard(text);
    }
  }
  fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful
        ? 'Text copied to clipboard'
        : 'Could not copy text';
      this.showNotification(msg);
    } catch (err) {
      this.showNotification('Could not copy text');
    }
    document.body.removeChild(textArea);
  }

  showNotification(message: string) {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}
