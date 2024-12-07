import { Component } from '@angular/core';

@Component({
  selector: 'app-tc',
  standalone: false,

  templateUrl: './tc.component.html',
  styleUrl: './tc.component.scss',
})
export class TCComponent {
  ngAfterViewInit() {
    const cards = document.querySelectorAll('.card');
    let flippedCards: HTMLElement[] = [];
    let matchedPairs = 0;

    // Mélanger les cartes avant de les afficher
    function shuffleCards() {
      const cardValues = ['🐟', '🐠', '🦀', '🐟', '🐠', '🦀', '🐬', '🐬'];
      for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
      }
      cards.forEach((card, index) => {
        card.setAttribute('data-card', cardValues[index]);
      });
    }

    // Retourner la carte
    function flipCard(this: HTMLElement) {
      if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
          checkMatch();
        }
      }
    }

    // Vérifier si les cartes correspondent
    function checkMatch() {
      const [firstCard, secondCard] = flippedCards;

      // Utiliser `dataset['card']` pour accéder aux attributs `data-card`
      if (firstCard.dataset['card'] === secondCard.dataset['card']) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === 4) {
          setTimeout(() => {
            document.getElementById('bob-sponge')!.style.display = 'block';
          }, 500);
        }
      } else {
        setTimeout(() => {
          firstCard.classList.remove('flipped');
          secondCard.classList.remove('flipped');
          flippedCards = [];
        }, 1000);
      }
    }

    // Ajouter les événements aux cartes
    cards.forEach((card) => {
      card.addEventListener('click', flipCard);
    });

    // Mélanger les cartes lors du chargement
    shuffleCards();
  }
}
