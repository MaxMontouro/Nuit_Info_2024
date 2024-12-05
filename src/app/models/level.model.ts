export class Level {
    // Attributs
    num!: number;
    question!: string;
    reponsesPossible!: string;
    idReponse!: number;
    background!: string;
    posXPlateforme!: number;
    posYPlateforme!: number;


    // Méthodes
    constructor(num: number, question: string, reponsesPossible: string, idReponse: number, background: string, posXPlateforme: number, posYPlateforme: number)
    {
        this.num = num;
        this.question = question;
        this.reponsesPossible = reponsesPossible;
        this.idReponse = idReponse;
        this.background = background;
        this.posXPlateforme = posXPlateforme;
        this.posYPlateforme = posYPlateforme;
    }
}