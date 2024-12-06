export enum LevelStatus {
    Validated = 'Validé',
    Unlocked = 'Débloqué',
    Locked = 'Bloqué',
  }
  
export interface Level {
    id: number;          
    name: string;       
    status: LevelStatus; 
}
  