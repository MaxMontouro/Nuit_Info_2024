import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Level, LevelStatus } from '../../../models/level.model';

@Component({
  selector: 'app-level',
  standalone: false,

  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  @Input() level!: Level;
  @Output() start = new EventEmitter<number>();
  @Output() completed = new EventEmitter<number>();

  getPlatformColor(): string {
    return this.level.background;
  }

  launchLevel() {
      this.start.emit(this.level.num);
  }

  isValidated(): boolean {
    return this.level.status === LevelStatus.Validated;
  }

  isUnlocked(): boolean {
    return this.level.status === LevelStatus.Unlocked;
  }
}
