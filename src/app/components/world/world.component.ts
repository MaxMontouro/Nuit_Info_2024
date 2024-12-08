import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level, LevelStatus } from '../../models/level.model';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  standalone: false
})
export class WorldComponent implements OnInit {
  levels: Level[] = [];
  visibleLevels: Level[] = [];
  currentLevel: Level | undefined;

  constructor(private levelService: LevelService, private router: Router) {}

  ngOnInit(): void {
    this.levels = this.levelService.getLevels();
    this.currentLevel = this.levelService.getCurrentLevel();
    this.updateVisibleLevels();
  }

  // Méthode appelée lorsque la fenêtre est redimensionnée
  updateVisibleLevels(): void {
    const isMobile = window.innerWidth < 768;
    this.visibleLevels = isMobile ? [this.levels[0]] : this.levels.slice(0, 3);
  }

  // Navigue vers la page de quiz
  startQuiz(levelId: number): void {
    this.router.navigate(['/quiz', levelId]);
  }

  // Marque un niveau comme terminé et débloque le suivant
  onLevelCompleted(levelId: number): void {
    const currentIndex = this.levels.findIndex((level) => level.num === levelId);

    if (currentIndex !== -1) {
      // Marquer le niveau actuel comme validé
      this.levels[currentIndex].status = LevelStatus.Validated;

      // Débloquer le niveau suivant, si disponible
      if (currentIndex + 1 < this.levels.length) {
        const nextLevel = this.levels[currentIndex + 1];
        if (nextLevel.status === LevelStatus.Locked) {
          nextLevel.status = LevelStatus.Unlocked;
        }
      }

      // Mettre à jour les niveaux pour forcer Angular à détecter les changements
      this.levels = [...this.levels];
    }
  }
}