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
        
        for (let i = 0; i < nombreNegatifsOuNuls; i++) {
	    	tableauEntier[i] = negatifsOuNuls[i];
	    }

	    for (let i = 0; i < nombrePositifs; i++) {
		tableauEntier[nombreNegatifsOuNuls + i] = positifs[i];
	    }
    }
    return tableauEntier
};
console.log(NegatifPositif([-5, -3, 2, 4, 0]));