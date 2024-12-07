import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importation du module commun

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
    image1: string;
    name1: string;
    image2: string;
    name2: string;
    description: string;
  }> = [
    {
      image1: '../../assets/images/ane2.png',
      name1: 'BAGALCIAGUE Iban',
      image2: '../../assets/images/clown.jpg',
      name2: 'Poisson-Clown',
      description: 'Toujours prêt à faire rire, même dans les moments sérieux.',
    },
    {
      image1: '../../assets/images/bears2.JPEG',
      name1: 'CLEMENCEAU Edouard',
      image2: '../../assets/images/marteau.jpg',
      name2: 'Requin Marteau',
      description: 'Il frappe toujours avec précision (parfois un peu trop fort...).',
    },
    {
      image1: '../../assets/images/bears5.JPEG',
      name1: 'ETCHECOPAR Maxime',
      image2: '../../assets/images/globe.jpg',
      name2: 'Poisson-Globe',
      description: 'Se gonfle d\'importance quand il est stressé... mais reste attachant.',
    },
    {
      image1: '../../assets/images/ane1.png',
      name1: 'FROMEAUX Matheo',
      image2: '../../assets/images/espadon.jpg',
      name2: 'Espadon',
      description: 'Toujours sur le fil, il fonce tête baissée comme un champion.',
    },
    {
      image1: '../../assets/images/bears6.JPEG',
      name1: 'GENTIL Rémi',
      image2: '../../assets/images/ange.jpg',
      name2: 'Poisson-Ange',
      description: 'Un vrai gentil... jusqu\'à ce qu\'il soit en colère.',
    },
    {
      image1: '../../assets/images/bears4.JPEG',
      name1: 'GUIHENEUF Mattin',
      image2: '../../assets/images/sole.jpg',
      name2: 'Sole',
      description: 'Discret mais essentiel, il glisse dans la vie comme un vrai poisson plat.',
    },
    {
      image1: '../../assets/images/bears1.png',
      name1: 'LAGÜE Théo',
      image2: '../../assets/images/perroquet.jpg',
      name2: 'Poisson-Perroquet',
      description: 'Une vraie explosion de couleurs et de mots !',
    },
    {
      image1: '../../assets/images/bears10.JPEG',
      name1: 'MARROT Lucas',
      image2: '../../assets/images/lanterne.jpg',
      name2: 'Poisson-Lanterne',
      description: 'Éclaire le chemin... mais gare à ses pièges inattendus !',
    },
    {
      image1: '../../assets/images/bears9.JPEG',
      name1: 'MONTOURO Maxime',
      image2: '../../assets/images/merou.jpg',
      name2: 'Mérou',
      description: 'D\'apparence calme, mais il sait se faire respecter.',
    },
    {
      image1: '../../assets/images/bears8.JPEG',
      name1: 'MOURGUE Clément',
      image2: '../../assets/images/baracouda.jpg',
      name2: 'Barracuda',
      description: 'Rapide, précis et un peu intimidant parfois.',
    },
    {
      image1: '../../assets/images/bears7.JPEG',
      name1: 'PICOULET Alexandre',
      image2: '../../assets/images/chat.jpg',
      name2: 'Poisson-Chat',
      description: 'Toujours curieux, et un peu taquin sur les bords.',
    },
    {
      image1: '../../assets/images/ane3.png',
      name1: 'ROUMAT Marco',
      image2: '../../assets/images/rouge.jpg',
      name2: 'Thon Rouge',
      description: 'Un grand classique, mais toujours en mouvement !',
    },
    {
      image1: '../../assets/images/bears3.JPEG',
      name1: 'ROUYER Johan',
      image2: '../../assets/images/daufin.jpg',
      name2: 'Dauphin',
      description: 'Le plus sociable du groupe, mais avec une touche malicieuse.',
    },
    {
      image1: '../../assets/images/ane4.png',
      name1: 'SAINT CRICQ Leo',
      image2: '../../assets/images/lune.jpg',
      name2: 'Poisson-Lune',
      description: 'Un style unique et une aura mystérieuse !',
    }
  ];

  currentUser: {
    image1: string;
    name1: string;
    image2: string;
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
}