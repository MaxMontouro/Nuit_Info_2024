import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: false,
})
export class IntroComponent {
  // Liste des dialogues avec personnages
  dialogues = [
    {
      character: 'blue',
      text: 'Ohé, Sandikyleau ! Ça fait un bail ! Qu’est-ce que tu fais avec tout cet équipement bizarre ?',
    },
    {
      character: 'red',
      text: 'Salut BAB ! Je travaille sur une expérience révolutionnaire... Je veux recréer un humain !',
    },
    {
      character: 'blue',
      text: 'Un humain ? Mais… pourquoi ? On n’est pas assez intéressants pour toi ici ?',
    },
    {
      character: 'red',
      text: 'Mais si, BAB ! C’est juste que je veux voir si c’est possible. Pour ça, j’ai besoin d’organes humains.',
    },
    {
      character: 'blue',
      text: 'Des organes humains ? Dans l’océan ? T’es sûre que t’as pas trop sniffé tes noix de pécan, Sandikyleau ?',
    },
    {
      character: 'red',
      text: 'Très drôle. Écoute, dans l’océan, il y a plein de créatures qui ressemblent à des organes humains. Je veux que tu m’aides à les trouver !',
    },
    {
      character: 'blue',
      text: 'Hmm… Ça a l’air un peu louche, mais OK. Comment je saurai qui est quoi ?',
    },
    {
      character: 'red',
      text: 'Je te guiderai ! Par exemple, le poulpe peut représenter un cerveau. Cherche des indices en parlant aux créatures !',
    },
    {
      character: 'blue',
      text: 'D’accord, Sandikyleau. Mais si je finis avec une méduse collée au visage, tu m’expliqueras tout à Patrick !',
    },
    {
      character: 'red',
      text: 'Marché conclu ! Bon courage, BAB ! N’oublie pas de poser des questions aux habitants de l’océan.',
    },
    {
      character: 'blue',
      text: 'C’est parti ! Un cerveau-poulpe, un cœur-poisson… Qu’est-ce que tu me fais faire, Sandikyleau ?',
    },
  ];

  // Index actuel du dialogue
  currentIndex: number = 0;

  constructor(private router: Router) {}

  // Fonction pour avancer dans les dialogues
  nextDialogue() {
    if (this.currentIndex < this.dialogues.length - 1) {
      this.currentIndex++;
    } else {
      // Si on est au dernier dialogue, redirige vers "world"
      this.router.navigate(['world']);
    }
  }

  // Fonction pour obtenir les informations du dialogue actuel
  get currentDialogue() {
    return this.dialogues[this.currentIndex];
  }

  // Détermine si le personnage actuel est bleu ou rouge
  isBlueCharacter(): boolean {
    return this.currentDialogue.character === 'blue';
  }
}
