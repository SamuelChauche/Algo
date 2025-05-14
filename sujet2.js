const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    const numbers = data
        .split(/\s+/)
        .map(Number)
        .filter(n => !isNaN(n));

    let comparisons = 0;

    const result = findTheBuildings(numbers);

    console.log(`Résultat : ${result}`);
    console.log(`Nombre de comparaisons : ${comparisons}`);

    function findTheBuildings(buildings) {
        let maxHeight = -Infinity;
        let count = 0;

        // Parcourir la liste de droite à gauche
        for (let i = buildings.length - 1; i >= 0; i--) {
            comparisons++;
            if (buildings[i] > maxHeight) {
                count++;
                maxHeight = buildings[i];
            }
        }

        return count;
    }
});
