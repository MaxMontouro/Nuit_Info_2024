import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin',
  templateUrl: './fin.component.html',
  styleUrls: ['./fin.component.scss'],
  standalone: false,
})
export class FinComponent {
  // Liste des dialogues avec personnages
  dialoguesFin = [
    {
      character: 'blue',
      text: 'Bon, Sandikyleau, j’ai réussi à ramener tout ce que tu m’as demandé. C’était pas facile…',
    },
    {
      character: 'red',
      text: 'Wow, BAB ! Tu as vraiment trouvé tout ça ?! Je suis impressionnée !',
    },
    {
      character: 'blue',
      text: 'Tu parles ! Entre les poulpes qui m’ont fait des câlins et les poissons qui m’ont appelé « docteur », c’était toute une aventure.',
    },
    {
      character: 'red',
      text: 'Haha ! Tu es vraiment un héros, BAB. Maintenant, je vais pouvoir assembler tout ça et voir si mon expérience fonctionne…',
    },
    {
      character: 'blue',
      text: 'Je suis content de t’avoir aidée, Sandikyleau, mais… je veux pas finir comme un cerveau flottant dans un bocal, hein !',
    },
    {
      character: 'red',
      text: 'T’inquiète pas, BAB. Tout va bien se passer. Et si ça marche, je t’offrirai une pizza avec des algues !',
    },
    {
      character: 'blue',
      text: 'Des algues ? C’est pas un peu trop scientifique pour moi ça ? Bon, OK, j’accepte. Mais pas de crustacés dessus, je suis allergique.',
    },
    {
      character: 'red',
      text: 'Haha, c’est noté. Tu sais, grâce à toi, je vais vraiment pouvoir recréer un humain. Enfin, une version océanique !',
    },
    {
      character: 'blue',
      text: 'Un humain océanique, hein ?! C’est peut-être le début de l’aventure… ou de l’Armageddon sous-marin !',
    },
    {
      character: 'red',
      text: 'Peu importe ce que ça devient, tu as contribué à quelque chose d’important, BAB. Merci beaucoup.',
    },
    {
      character: 'blue',
      text: 'Tout le plaisir était pour moi… Maintenant, je vais m’allonger un peu, ma tête tourne avec tout ce que j’ai dû nager.',
    },
    {
      character: 'red',
      text: 'Haha, prends une pause. Et, encore une fois, merci ! Tu es le meilleur partenaire d’expérience que j’aie jamais eu.',
    },
    {
      character: 'blue',
      text: 'Ah, Sandikyleau, on se refait une aventure bientôt ? Peut-être pas une autre quête pour des organes, hein ?!',
    },
    {
      character: 'red',
      text: 'On verra… mais t’es prêt pour la prochaine mission ? Peut-être plus… végétale cette fois !',
    },
    {
      character: 'blue',
      text: 'Des légumes sous-marins ? Je vais déjà récupérer de mes émotions, d’accord ?! Mais je suis toujours partant pour une nouvelle aventure !',
    },
  ];

  // Index actuel du dialogue
  currentIndex: number = 0;

  constructor(private router: Router) {}

  // Fonction pour avancer dans les dialogues
  nextDialogue() {
    if (this.currentIndex < this.dialoguesFin.length - 1) {
      this.currentIndex++;
    } else {
      // Si on est au dernier dialogue, redirige vers "world"
      this.router.navigate(['tc']);
    }
  }

  // Fonction pour obtenir les informations du dialogue actuel
  get currentDialogue() {
    return this.dialoguesFin[this.currentIndex];
  }

  // Détermine si le personnage actuel est bleu ou rouge
  isBlueCharacter(): boolean {
    return this.currentDialogue.character === 'blue';
  }
}
