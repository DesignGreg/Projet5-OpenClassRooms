/* Générateur de citations pour personnages de jeux de rôles, univers science-fiction ou fantastique. */


/* Générateur Model */
/*------------------*/

// Tableau 1 - SF
const firstSFArray = ["Je suis", "Je serais", "J'ai été"];
const firstSFArrayF = ["Je suis", "Je serais", "J'ai été"];
 
// Tableau 2 - SF
const secondSFArray = ["un pilote", "un aventurier", "un explorateur", "un agent", "un chercheur", "un colon"];
const secondSFArrayF = ["une pilote", "une aventurière", "une exploratrice", "une agent", "une chercheuse", "un colon"];

// Tableau 3 - SF
const thirdSFArray = ["de Vénus", "de Mars", "d'Alpha Centauri", "des tréfonds de la Galaxie", "du Néant"];

// Tableau 1 - Fantasy
const firstFanArray = ["Je suis", "Je serais", "J'ai été"];
const firstFanArrayF = ["Je suis", "Je serais", "J'ai été"];

// Tableau 2 - Fantasy
const secondFanArray = ["un marchand", "un guerrier", "un barbare", "un sorcier", "un élémentaire", "un voleur"];
const secondFanArrayF = ["une marchande", "une guerrière", "une barbare", "une sorcière", "un élémentaire", "une voleuse"];

// Tableau 3 - Fantasy
const thirdFanArray = ["d'Hyrule", "de Cimmérie", "des Terres du Milieu", "de Poudlard", "du Pandémonium", "de l'Autre Monde"];


/* Générateur View */
/*-----------------*/





/* Générateur Controller */
/*-----------------------*/

// Init Event Handler pour les Boutons
function init() {
    document.getElementById('B1').onclick=function() {   
        sciFi();
    };
    document.getElementById('B2').onclick=function() {   
        sciFiF();
    };
    document.getElementById('B3').onclick=function() {   
        fantasy();
    };
    document.getElementById('B4').onclick=function() {   
        fantasyF();
    };
    
}
window.onload = init;

// Génération d'une phrase - Fonction

function generator (array1, array2, array3) {
    var random1 = array1[Math.floor(Math.random() * array1.length)];
    var random2 = array2[Math.floor(Math.random() * array2.length)];
    var random3 = array3[Math.floor(Math.random() * array3.length)];
    
    console.log(random1 + " " + random2 + " " + random3);
}

// Génération de la phrase SF
// Masculin
function sciFi() {
generator(firstSFArray, secondSFArray, thirdSFArray);
}

// Féminin
function sciFiF() {
generator(firstSFArrayF, secondSFArrayF, thirdSFArray);
}

// Génération de la phrase fantastique
// Masculin
function fantasy() {
generator(firstFanArray, secondFanArray, thirdFanArray);
}

// Féminin
function fantasyF() {
generator(firstFanArrayF, secondFanArrayF, thirdFanArray);
}