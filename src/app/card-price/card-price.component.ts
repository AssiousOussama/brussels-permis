import { Component } from '@angular/core';
import { SHARED_IMPORTS_BASE } from '../shared-imports';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: SHARED_IMPORTS_BASE,
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss',
})
export class CardPriceComponent {
  public CARTES: any[] = [
    {
      id: 1,
      titre: 'Cours',
      duree: '20 Heures',
      prix: 1350,
      idealPour: [
        'Apprendre toutes les bases nécessaires au domaine choisi.',
        'Renforcer ses connaissances grâce à une approche globale.',
      ],
    },
    {
      id: 2,
      titre: 'Cours',
      duree: '6 Heures',
      prix: 420,
      idealPour: [
        'Approfondir un point spécifique pour se perfectionner.',
        'Préparer efficacement un examen ou une étape clé.',
      ],
    },
    {
      id: 3,
      titre: 'Cours + Examen',
      duree: "6 Heures + 1 Session d'Examen",
      prix: 550,
      idealPour: [
        'Valider ses compétences en peu de temps efficacement.',
        'Passer une évaluation après une préparation intensive.',
      ],
    },
    {
      id: 4,
      titre: 'Cours & Examen inclus',
      duree: '30 Heures',
      prix: 2150,
      idealPour: [
        'Devenir expert grâce à une formation approfondie.',
        'Obtenir une certification avec un cursus complet.',
      ],
    },
    {
      id: 6,
      titre: 'Pratique',
      duree: '2 Heures',
      prix: 140,
      idealPour: [
        'Se former rapidement malgré un emploi du temps chargé.',
        'Réviser les notions clés avant un examen important.',
      ],
    },
    {
      id: 5,
      titre: 'Théorie',
      duree: '12 Heures',
      prix: 100,
      idealPour: [
        'Commencer par des bases solides pour mieux progresser.',
        'Consolider ses connaissances avant de passer à la pratique.',
      ],
    },
    {
      id: 7,
      titre: 'Examen voie Publique',
      duree: "Une session d'examen pratique",
      prix: 140,
      idealPour: [
        'Obtenir une certification officielle dans un cadre réel.',
        'Évaluer ses compétences dans des conditions pratiques.',
      ],
    },
  ];

  redirectToWhatsApp(message: string) {
    const phoneNumber = '+32465640683';
    const formattedPhoneNumber = phoneNumber.replace(/[.\s]/g, '');
    const urlWhatsApp = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
      "Bonjour, je suis intéressé par le " + message
    )}`;

    window.open(urlWhatsApp, '_blank');
  }

  redirectToMail(title: string, time: string) {
    const url = `mailto:${'brussels.permis@gmail.com'}?subject=${encodeURIComponent(
      'Information sur le ' + title
    )}&body=${encodeURIComponent(
      'Bonjour, je suis intéressé par le ' + title + ' de ' + time
    )}`;
    window.location.href = url;
  }
}
