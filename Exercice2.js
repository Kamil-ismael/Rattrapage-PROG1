function Echanger(tableau, premierIndex, deuxiemeIndex) {
    const valeurTemporaire = tableau[premierIndex];
    tableau[premierIndex] = tableau[deuxiemeIndex];
    tableau[deuxiemeIndex] = valeurTemporaire;

    return tableau;
}

function Ranger(tableau) {
	let indexGauche = 0;
	let indexDroit = tableau.length - 1;
}