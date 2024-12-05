import { Injectable } from '@angular/core';
import { Level } from '../../models/level.model';

@Injectable({
  providedIn: 'root', // Service accessible partout dans l'application
})
export class LevelService {
  private levels: Level[] = [
    new Level(1, 'What is 2 + 4?', ['2', '3', '4', '6'], 3, 'blue', 100, 100),
    new Level(2, 'What is 5 - 3?', ['1', '2', '3', '4'], 1, 'gray', 200, 100),
    new Level(3, 'What is 10 / 2?', ['2', '3', '5', '10'], 2, 'gray', 300, 100),
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
}