/*import { Component } from '@angular/core';
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


import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Level } from '../../models/level.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  standalone: false
})
export class WorldComponent implements OnInit {
  levels: Level[] = [];
  currentLevel: Level | undefined;

  constructor(private levelService: LevelService, private router: Router) {}

  ngOnInit(): void {
    this.levels = this.levelService.getLevels();
    this.currentLevel = this.levelService.getCurrentLevel();
  }

  toggleLock(levelId: number): void {
    this.levelService.toggleLockLevel(levelId);
    this.levels = this.levelService.getLevels();
  }

  moveToNextLevel(): void {
    const success = this.levelService.moveToNextLevel();
    if (success) {
      this.currentLevel = this.levelService.getCurrentLevel();
    } else {
      alert('Impossible de passer au niveau suivant. Il est bloqué.');
    }
  }

  startQuiz(levelId: number) {
    this.router.navigate(['/quiz', levelId]);
  }

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
  
}

*/

import { Component, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Level } from '../../models/level.model';
import { LevelStatus } from '../../models/level.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  standalone: false
})
export class WorldComponent implements OnInit {
  levels: Level[] = [];
  currentLevel: Level | undefined;

  LevelStatus = LevelStatus;

  constructor(private levelService: LevelService, private router: Router) {}

  ngOnInit(): void {
    this.levels = this.levelService.getLevels();
    this.currentLevel = this.levelService.getCurrentLevel();
  }

  toggleLock(levelId: number): void {
    this.levelService.toggleLockLevel(levelId);
    this.levels = this.levelService.getLevels();
  }

  moveToNextLevel(): void {
    const success = this.levelService.moveToNextLevel();
    if (success) {
      this.currentLevel = this.levelService.getCurrentLevel();
    } else {
      alert('Impossible de passer au niveau suivant. Il est bloqué.');
    }
  }

  startQuiz(levelId: number): void {
    this.router.navigate(['/quiz', levelId]);
  }

  onLevelCompleted(levelId: number): void {
    const currentIndex = this.levels.findIndex((level) => level.id === levelId);

    if (currentIndex !== -1) {
      // Marquer le niveau actuel comme "Validé"
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

  getLevelClass(level: Level): string {
    switch (level.status) {
      case LevelStatus.Locked:
        return 'locked';
      case LevelStatus.Unlocked:
        return 'unlocked';
      case LevelStatus.Validated:
        return 'validated';
      default:
        return '';
    }
  }

  validateLevel(levelId: number): void {
    this.levelService.validateLevel(levelId);
    this.levels = this.levelService.getLevels();
  }
  
}

