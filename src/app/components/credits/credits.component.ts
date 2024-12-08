import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
  standalone: true,
  imports: [
    CommonModule, // Nécessaire pour les directives comme *ngIf, *ngFor, ngStyle
  ],
})
export class CreditsComponent implements OnInit {
  currentIndex: number = 0;

  users: Array<{
    className: string; // Nom de la classe pour appliquer le style
    name1: string;
    name2: string;
    description: string;
  }> = [
    {
      className: 'user-1',
      name1: 'BAGALCIAGUE Iban',
      name2: 'Poisson-Clown',
      description: 'Toujours prêt à faire rire, même dans les moments sérieux.',
    },
    {
      className: 'user-2',
      name1: 'CLEMENCEAU Edouard',
      name2: 'Requin Marteau',
      description: 'Il frappe toujours avec précision (parfois un peu trop fort...).',
    },
    {
      className: 'user-3',
      name1: 'ETCHECOPAR Maxime',
      name2: 'Poisson-Globe',
      description: 'Se gonfle d\'importance quand il est stressé... mais reste attachant.',
    },
    {
      className: 'user-4',
      name1: 'FROMEAUX Matheo',
      name2: 'Espadon',
      description: 'Toujours sur le fil, il fonce tête baissée comme un champion.',
    },
    {
      className: 'user-5',
      name1: 'GENTIL Rémi',
      name2: 'Poisson-Ange',
      description: 'Un vrai gentil... jusqu\'à ce qu\'il soit en colère.',
    },
    {
      className: 'user-6',
      name1: 'GUIHENEUF Mattin',
      name2: 'Sole',
      description: 'Discret mais essentiel, il glisse dans la vie comme un vrai poisson plat.',
    },
    {
      className: 'user-7',
      name1: 'LAGÜE Théo',
      name2: 'Poisson-Perroquet',
      description: 'Une vraie explosion de couleurs et de mots !',
    },
    {
      className: 'user-8',
      name1: 'MARROT Lucas',
      name2: 'Poisson-Lanterne',
      description: 'Éclaire le chemin... mais gare à ses pièges inattendus !',
    },
    {
      className: 'user-9',
      name1: 'MONTOURO Maxime',
      name2: 'Mérou',
      description: 'D\'apparence calme, mais il sait se faire respecter.',
    },
    {
      className: 'user-10',
      name1: 'MOURGUE Clément',
      name2: 'Barracuda',
      description: 'Rapide, précis et un peu intimidant parfois.',
    },
    {
      className: 'user-11',
      name1: 'PICOULET Alexandre',
      name2: 'Poisson-Chat',
      description: 'Toujours curieux, et un peu taquin sur les bords.',
    },
    {
      className: 'user-12',
      name1: 'ROUMAT Marco',
      name2: 'Thon Rouge',
      description: 'Un grand classique, mais toujours en mouvement !',
    },
    {
      className: 'user-13',
      name1: 'ROUYER Johan',
      name2: 'Dauphin',
      description: 'Le plus sociable du groupe, mais avec une touche malicieuse.',
    },
    {
      className: 'user-14',
      name1: 'SAINT CRICQ Leo',
      name2: 'Poisson-Lune',
      description: 'Un style unique et une aura mystérieuse !',
    },
  ];

  currentUser: {
    className: string;
    name1: string;
    name2: string;
    description: string;
  } | undefined;

  constructor() {}

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser(): void {
    this.currentUser = this.users[this.currentIndex];
  }

  nextUser(): void {
    this.currentIndex = (this.currentIndex + 1) % this.users.length;
    this.setCurrentUser();
  }

  previousUser(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.users.length) % this.users.length;
    this.setCurrentUser();
  }

  /**
   * Retourne la classe CSS de l'utilisateur actuel.
   */
  getUserClass(): string {
    return this.currentUser ? this.currentUser.className : '';
  }
}