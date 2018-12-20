// Tableaux de données
const firstSFArray = ["Je suis", "Je serais", "J'ai été"];
const secondSFArray = ["un pilote", "un aventurier", "un explorateur", "un agent", "un chercheur", "un colon"];
const thirdSFArray = ["de Vénus", "de Mars", "d'Alpha Centauri", "des tréfonds de la Galaxie", "du Néant"];

const firstFanArray = ["Je suis", "Je serais", "J'ai été"];
const secondFanArray = ["un marchand", "un guerrier", "un barbare", "un sorcier", "un élémentaire", "un voleur"];
const thirdFanArray = ["d'Hyrule", "de Cimmérie", "des Terres du Milieu", "de Poudlard", "du Pandémonium", "de l'Autre Monde"];

// Génération de la citation
let result;

function generator(array1, array2, array3) {
    const random1 = array1[Math.floor(Math.random() * array1.length)];
    const random2 = array2[Math.floor(Math.random() * array2.length)];
    const random3 = array3[Math.floor(Math.random() * array3.length)];

    result = random1 + " " + random2 + " " + random3;
}

// Question à l'utilisateur
let firstQuestion;

while (true) {
    firstQuestion = prompt("Une nouvelle citation O/N ?").toLowerCase();
    let secondQuestion;

    if (firstQuestion === 'o') {
        secondQuestion = parseFloat(prompt('Combien de citations souhaitez-vous (1 à 5) ?', "1"));
        let thirdQuestion;

        if (secondQuestion <= 5) {
            thirdQuestion = prompt("Univers Science-Fiction (S) ou Fantastique (F) ?").toLowerCase();

            if (thirdQuestion === 'science-fiction' || thirdQuestion === 's') {

                for (let x = 0; x < secondQuestion; x++) {
                    generator(firstSFArray, secondSFArray, thirdSFArray);
                    const quote = result;
                    console.log(quote);
                }
            } else if (thirdQuestion === 'fantastique' || thirdQuestion === 'f') {

                for (let x = 0; x < secondQuestion; x++) {
                    generator(firstFanArray, secondFanArray, thirdFanArray);
                    const quote = result;
                    console.log(quote);
                }
            }
        }
    } else if (firstQuestion === 'n') {
        break;
    }
}