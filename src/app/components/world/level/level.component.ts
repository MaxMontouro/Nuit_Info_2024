import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Level, LevelStatus } from '../../../models/level.model';
import { LevelService } from '../../services/level.service';
import { PlayerService } from '../../services/player.service';

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

  constructor(private levelService: LevelService, private playerService: PlayerService) {}

  getPlatformColor(): string {
    return this.level.background;
  }

  clickLevel(): void {
    if(this.playerService.getPlayer().numNiveauActuel === this.level.num) {
      this.start.emit(this.level.num);
    }
    else {
      if(this.level.status !== LevelStatus.Locked) {
        this.playerService.moveToLevel(this.level.num);
      }
    }
  }

  isValidated(): boolean {
    return this.level.status === LevelStatus.Validated;
  }

  isUnlocked(): boolean {
    return this.level.status === LevelStatus.Unlocked;
  }

  isPlayerOnLevel(): boolean {
    return this.level.num === this.playerService.getPlayer().numNiveauActuel;
  }
}