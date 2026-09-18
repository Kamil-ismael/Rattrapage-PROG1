function Echanger(tableau, premierIndex, deuxiemeIndex) {
	const valeurTemporaire = tableau[premierIndex];
	tableau[premierIndex] = tableau[deuxiemeIndex];
	tableau[deuxiemeIndex] = valeurTemporaire;
}
