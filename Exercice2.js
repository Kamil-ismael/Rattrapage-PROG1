function Echanger(tableau, premierIndex, deuxiemeIndex) {
    const valeurTemporaire = tableau[premierIndex];
    tableau[premierIndex] = tableau[deuxiemeIndex];
    tableau[deuxiemeIndex] = valeurTemporaire;

    return tableau;
}
console.log(Echanger([0, 1, 0], 1, 2));

function Ranger(tableau) {
	let indexGauche = 0;
	let indexDroit = tableau.length - 1;

	while (indexGauche < indexDroit) {
		while (indexGauche < indexDroit && tableau[indexGauche] === 0) {
			indexGauche += 1;
		}

		while (indexGauche < indexDroit && tableau[indexDroit] === 1) {
			indexDroit -= 1;
		}

		if (indexGauche < indexDroit) {
			Echanger(tableau, indexGauche, indexDroit);
			indexGauche += 1;
			indexDroit -= 1;
		}
	}
	return tableau;
}
console.log(Ranger([0, 1, 0, 0, 1, 0]))