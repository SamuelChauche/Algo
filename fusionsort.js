const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return;
    }

    // On transforme le contenu du fichier en tableau de nombres
    const numbers = data
        .split(/\s+/)           
        .map(Number)            


        let comparaisons = 0;

        const sorted = triFusion(numbers, (a, b) => {
            comparaisons++;
            return Math.abs(a) < Math.abs(b);
        });
    
        console.log( `Tri fusion, avec ${comparaisons} comparaisons :`, sorted);
    });

function fusionsort(a, b, f){
    if (a.length === 0) return b;
    else if (b.length === 0) return a;
    else if (f(a[0], b[0]))
        return [a[0], ...fusionsort(a.slice(1), b, f)];
    else
        return [b[0], ...fusionsort(a, b.slice(1), f)];
}

function triFusion(t, f){
    if (t.length <= 1) return t;
    const mid = Math.floor(t.length / 2);
    const left = triFusion(t.slice(0, mid), f);
    const right = triFusion(t.slice(mid), f);
    return fusionsort(left, right, f);
}