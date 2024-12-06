export class Player {
    // Attributs
    numNiveauxPasses!: number[];
    numNiveauActuel!: number;

    // Méthodes
    constructor(numNiveauxPasses: number[], numNiveauActuel: number)
    {
        this.numNiveauxPasses = numNiveauxPasses;
        this.numNiveauActuel = numNiveauActuel;
    }
}