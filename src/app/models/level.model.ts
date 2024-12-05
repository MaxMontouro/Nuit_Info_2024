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