import { Injectable } from '@angular/core';
import { Level, LevelStatus } from '../../models/level.model';

@Injectable({
  providedIn: 'root', // Service accessible partout dans l'application
})
export class LevelService {
  private currentLevelId: number = 1; // Niveau actuel du joueur
  private levels: Level[] = [
    new Level(1, 'What is 2 + 4?', ['2', '3', '4', '6'], 3, 'blue', 100, 100, LevelStatus.Unlocked),
    new Level(2, 'What is 5 - 3?', ['1', '2', '3', '4'], 1, 'gray', 200, 100, LevelStatus.Locked),
    new Level(3, 'What is 10 / 2?', ['2', '3', '5', '10'], 2, 'gray', 300, 100, LevelStatus.Locked),
  ];

  getLevels(): Level[] {
    return this.levels;
  }

  getLevelById(id: number): Level | undefined {
    return this.levels.find((level) => level.num === id);
  }

  updateLevel(level: Level): void {
    const index = this.levels.findIndex((l) => l.num === level.num);
    if (index !== -1) {
      this.levels[index] = level;
    }
  }

  // Récupère le niveau actuel
  getCurrentLevel(): Level | undefined {
    return this.levels.find((level) => level.num === this.currentLevelId);
  }

  // Valide un niveau
  validateLevel(levelId: number): void {
    const level = this.levels.find((l) => l.num === levelId);
    if (level && level.status === LevelStatus.Unlocked) {
      level.status = LevelStatus.Validated;
      this.unlockNextLevel(levelId);
      level.background = 'green';
    }
  }

  // Passe au niveau suivant
  moveToNextLevel(): boolean {
    const currentLevelIndex = this.levels.findIndex(
      (l) => l.num === this.currentLevelId
    );
    const nextLevel = this.levels[currentLevelIndex + 1];
    if (nextLevel && nextLevel.status === LevelStatus.Unlocked) {
      this.currentLevelId = nextLevel.num;
      return true;
    }
    return false;
  }

  // Bascule l'état d'un niveau entre "bloqué" et "débloqué"
  toggleLockLevel(levelId: number): void {
    const level = this.levels.find((l) => l.num === levelId);
    if (level) {
      level.status =
        level.status === LevelStatus.Locked
          ? LevelStatus.Unlocked
          : LevelStatus.Locked;
    }
  }

  // Vérifie si un niveau est accessible
  canAccessLevel(levelId: number): boolean {
    const level = this.levels.find((l) => l.num === levelId);
    if (!level) return false;
    return level.status === LevelStatus.Unlocked || level.status === LevelStatus.Validated;
  }

  // Débloque le niveau suivant après validation du niveau actuel
  private unlockNextLevel(currentLevelId: number): void {
    const nextLevel = this.levels.find((l) => l.num === currentLevelId + 1);
    if (nextLevel && nextLevel.status === LevelStatus.Locked) {
      nextLevel.status = LevelStatus.Unlocked;
      nextLevel.background = 'blue';
    }
  }
}