/*
import { Injectable } from '@angular/core';
import { Level } from '../models/level.model';
import { LevelStatus } from '../models/level.model';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private levels: Level[] = [
    { id: 1, name: 'Niveau 1', status: LevelStatus.Unlocked},
    { id: 2, name: 'Niveau 2', status: LevelStatus.Unlocked},
    { id: 3, name: 'Niveau 3', status: LevelStatus.Unlocked},
  ];

  private currentLevelId: number = 1; // Niveau actuel du joueur

  getLevels(): Level[] {
    return this.levels;
  }

  getCurrentLevel(): Level | undefined {
    return this.levels.find((level) => level.id === this.currentLevelId);
  }

  validateLevel(levelId: number): void {
    const level = this.levels.find((l) => l.id === levelId);
    if (level) {
      level.validated = true;
    }
  }

  moveToNextLevel(): boolean {
    const currentLevelIndex = this.levels.findIndex(
      (l) => l.id === this.currentLevelId
    );
    const nextLevel = this.levels[currentLevelIndex + 1];
    if (nextLevel && !nextLevel.locked) {
      this.currentLevelId = nextLevel.id;
      return true;
    }
    return false;
  }

  toggleLockLevel(levelId: number): void {
    const level = this.levels.find((l) => l.id === levelId);
    if (level) {
      level.locked = !level.locked;
    }
  }

  canAccessLevel(levelId: number): boolean {
    const level = this.levels.find((l) => l.id === levelId);
    if (!level) return false;
    return !level.locked && level.validated;
  }
}
*/

import { Injectable } from '@angular/core';
import { Level } from '../models/level.model';
import { LevelStatus } from '../models/level.model';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private levels: Level[] = [
    { id: 1, name: 'Niveau 1', status: LevelStatus.Unlocked },
    { id: 2, name: 'Niveau 2', status: LevelStatus.Locked },
    { id: 3, name: 'Niveau 3', status: LevelStatus.Locked },
  ];

  private currentLevelId: number = 1; // Niveau actuel du joueur

  // Récupère tous les niveaux
  getLevels(): Level[] {
    return this.levels;
  }

  // Récupère le niveau actuel
  getCurrentLevel(): Level | undefined {
    return this.levels.find((level) => level.id === this.currentLevelId);
  }

  // Valide un niveau
  validateLevel(levelId: number): void {
    const level = this.levels.find((l) => l.id === levelId);
    if (level && level.status === LevelStatus.Unlocked) {
      level.status = LevelStatus.Validated;
      this.unlockNextLevel(levelId);
    }
  }

  // Passe au niveau suivant
  moveToNextLevel(): boolean {
    const currentLevelIndex = this.levels.findIndex(
      (l) => l.id === this.currentLevelId
    );
    const nextLevel = this.levels[currentLevelIndex + 1];
    if (nextLevel && nextLevel.status === LevelStatus.Unlocked) {
      this.currentLevelId = nextLevel.id;
      return true;
    }
    return false;
  }

  // Bascule l'état d'un niveau entre "bloqué" et "débloqué"
  toggleLockLevel(levelId: number): void {
    const level = this.levels.find((l) => l.id === levelId);
    if (level) {
      level.status =
        level.status === LevelStatus.Locked
          ? LevelStatus.Unlocked
          : LevelStatus.Locked;
    }
  }

  // Vérifie si un niveau est accessible
  canAccessLevel(levelId: number): boolean {
    const level = this.levels.find((l) => l.id === levelId);
    if (!level) return false;
    return level.status === LevelStatus.Unlocked || level.status === LevelStatus.Validated;
  }

  // Débloque le niveau suivant après validation du niveau actuel
  private unlockNextLevel(currentLevelId: number): void {
    const nextLevel = this.levels.find((l) => l.id === currentLevelId + 1);
    if (nextLevel && nextLevel.status === LevelStatus.Locked) {
      nextLevel.status = LevelStatus.Unlocked;
    }
  }
}







