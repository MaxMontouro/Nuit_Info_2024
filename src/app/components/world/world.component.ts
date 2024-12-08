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
  isAllLevelsCompleted: boolean = false; // Nouvelle variable pour vérifier si tous les niveaux sont complétés

  constructor(private levelService: LevelService, private router: Router) {}

  ngOnInit(): void {
    this.levels = this.levelService.getLevels();
    this.currentLevel = this.levelService.getCurrentLevel();
    this.updateVisibleLevels();
    this.checkIfAllLevelsCompleted(); // Vérifier si tous les niveaux sont terminés au démarrage
  }

  // Méthode appelée lorsque la fenêtre est redimensionnée
  updateVisibleLevels(): void {
    const isMobile = window.innerWidth < 768;
    this.visibleLevels = isMobile ? [this.levels[0]] : this.levels.slice(0, 3);
  }

  // Vérifie si tous les niveaux sont terminés
  checkIfAllLevelsCompleted(): void {
    this.isAllLevelsCompleted = this.levels.every(level => level.status === LevelStatus.Validated);
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

      // Vérifier si tous les niveaux sont terminés
      this.checkIfAllLevelsCompleted();
    }
  }

  // Méthode pour rediriger vers la page suivante lorsque tous les niveaux sont terminés
  navigateToFinalLevel(): void {
    this.router.navigate(['/fin']); // Remplacez par la route appropriée
  }
}