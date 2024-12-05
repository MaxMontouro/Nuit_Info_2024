import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-level',
  standalone: false,

  templateUrl: './level.component.html',
  styleUrl: './level.component.scss',
})
export class LevelComponent {
  @Input() level!: { id: number; status: string };
  @Output() start = new EventEmitter<number>();
  @Output() completed = new EventEmitter<number>();

  markAsCompleted() {
    this.completed.emit(this.level.id);
  }

  getPlatformColor(): string {
    switch (this.level.status) {
      case 'Débloqué':
        return 'blue';
      case 'Réussi':
        return 'green';
      default:
        return 'gray';
    }
  }

  launchLevel() {
    if (this.level.status === 'Débloqué') {
      this.start.emit(this.level.id);
    }
  }
}
