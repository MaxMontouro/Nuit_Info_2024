import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from '../../models/level.model';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-world',
  standalone: false,

  templateUrl: './world.component.html',
  styleUrl: './world.component.scss',
})
export class WorldComponent {
  levels: Level[] = [];

  constructor(private levelService: LevelService, private router: Router) {
    this.levels = this.levelService.getLevels();
  }

  onLevelCompleted(levelId: number) {
    const level = this.levelService.getLevelById(levelId);
    if (level) {
      level.background = 'green'; // Marquer comme "Réussi"
      this.levelService.updateLevel(level);

      const nextLevel = this.levelService.getLevelById(levelId + 1);
      if (nextLevel) {
        nextLevel.background = 'blue'; // Débloquer le niveau suivant
        this.levelService.updateLevel(nextLevel);
      }

      // Mise à jour locale
      this.levels = this.levelService.getLevels();
    }
  }

  startQuiz(levelId: number) {
    this.router.navigate(['/quiz', levelId]);
  }
}
