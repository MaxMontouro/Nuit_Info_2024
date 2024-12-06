<<<<<<< HEAD
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
  
=======
export class Level {
    // Attributs
    num!: number;
    question!: string;
    reponses!: string[];
    idReponse!: number;
    background!: string;
    posXPlateforme!: number;
    posYPlateforme!: number;


    // Méthodes
    constructor(num: number, question: string, reponses: string[], idReponse: number, background: string, posXPlateforme: number, posYPlateforme: number)
    {
        this.num = num;
        this.question = question;
        this.reponses = reponses;
        this.idReponse = idReponse;
        this.background = background;
        this.posXPlateforme = posXPlateforme;
        this.posYPlateforme = posYPlateforme;
    }
}
>>>>>>> origin/feat/create-world
