export class Player {
    // Attributs
    nbNiveauxPasses!: number;
    nbNiveauActuel!: number;

    // Méthodes
    constructor(nbNiveauxPasses: number, nbNiveauActuel: number)
    {
        this.nbNiveauxPasses = nbNiveauxPasses;
        this.nbNiveauActuel = nbNiveauActuel;
    }
}