import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Level } from '../../../models/level.model';

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
    if (this.level.background === 'blue') {
      this.start.emit(this.level.num);
    }
  }
}
