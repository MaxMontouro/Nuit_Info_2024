import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world',
  standalone: false,

  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
})
export class WorldComponent {
  levels = [
    { id: 1, status: 'Débloqué' },
    { id: 2, status: 'Bloqué' },
    { id: 3, status: 'Bloqué' },
  ];

  constructor(private router: Router) {}

  onLevelCompleted(levelId: number) {
    const currentIndex = this.levels.findIndex((level) => level.id === levelId);

    if (currentIndex !== -1) {
      this.levels[currentIndex].status = 'Réussi';

      if (currentIndex + 1 < this.levels.length) {
        this.levels[currentIndex + 1].status = 'Débloqué';
      }

      // Force Angular à détecter les changements
      this.levels = [...this.levels];
    }
  }

  startQuiz(levelId: number) {
    this.router.navigate(['/quiz', levelId]);
  }
}
