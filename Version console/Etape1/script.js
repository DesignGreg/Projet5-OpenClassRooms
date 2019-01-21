// Tableaux de données
const firstSFArray = ["Je suis", "Je serais", "J'ai été"];
const secondSFArray = ["un pilote", "un aventurier", "un explorateur", "un agent", "un chercheur", "un colon"];
const thirdSFArray = ["de Vénus", "de Mars", "d'Alpha Centauri", "des tréfonds de la Galaxie", "du Néant"];

// Génération de la citation
let result;
function generator(array1, array2, array3) {
    const random1 = array1[Math.floor(Math.random() * array1.length)];
    const random2 = array2[Math.floor(Math.random() * array2.length)];
    const random3 = array3[Math.floor(Math.random() * array3.length)];

    result = random1 + " " + random2 + " " + random3;
}

// Question à l'utilisateur

while (true) {
    let question = prompt("Une nouvelle citation O/N ?");
    
    if (question === null || question === "") {
        console.log('Pour relancer le générateur, entrez (F5)');
        break;
    }
    
    question = question.toLowerCase();
    if (question === 'o') {
        generator(firstSFArray, secondSFArray, thirdSFArray);
        const quote = result;
        console.log(quote);
    } else if (question === 'n') {
        console.log('Pour relancer le générateur, entrez (F5)');
        break;
    }
}
