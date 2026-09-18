function NegatifPositif(tableauEntier) {
	const negatifsOuNuls = [];
	const positifs = [];
	let nombreNegatifsOuNuls = 0;
	let nombrePositifs = 0;

    for (let i = 0; i < tableauEntier.length; i++) {
		if (tableauEntier[i] <= 0) {
			negatifsOuNuls[nombreNegatifsOuNuls] = tableauEntier[i];
			nombreNegatifsOuNuls += 1;
		} else {
			positifs[nombrePositifs] = tableauEntier[i];
			nombrePositifs += 1;
		}
	}
}