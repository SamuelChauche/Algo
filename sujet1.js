const fs = require('fs');
const fileName = process.argv[2];
const k = Number(process.argv[3]); // On récupère la valeur de k en argument

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    // On transforme le contenu du fichier en tableau de nombres
    const numbers = data
        .split(/\s+/)
        .map(Number)
        .filter(n => !isNaN(n)); // Pour éviter les NaN si le fichier contient autre chose

    let comparisons = 0;

    // Appel de la fonction principale
    const result = hasPairWithSum(numbers, k);

    console.log(`Résultat : ${result}`);
    console.log(`Nombre de comparaisons : ${comparisons}`);
    
    // Fonction imbriquée dans le scope pour qu'elle ait accès à `comparisons`
    function hasPairWithSum(arr, target) {
        const complements = new Set();

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const needed = target - current;
            comparisons++;

            if (complements.has(needed)) {
                return true;
            }

            complements.add(current);
        }

        return false;
    }
});
