export enum LevelStatus {
    Validated = 'Validé',
    Unlocked = 'Débloqué',
    Locked = 'Bloqué',
}

export class Level {
    // Attributs
    num!: number;
    titre!: string;
    question!: string;
    reponses!: string[];
    idReponse!: number;
    background!: string;
    posXPlateforme!: number;
    posYPlateforme!: number;
    status!: LevelStatus;


    // Méthodes
    constructor(num: number,titre:string, question: string, reponses: string[], idReponse: number, background: string, posXPlateforme: number, posYPlateforme: number, status: LevelStatus)
    {
        this.num = num;
        this.titre = titre;
        this.question = question;
        this.reponses = reponses;
        this.idReponse = idReponse;
        this.background = background;
        this.posXPlateforme = posXPlateforme;
        this.posYPlateforme = posYPlateforme;
        this.status = status;
    }
}