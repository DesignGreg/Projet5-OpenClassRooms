/* MODEL */

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


/* VIEW */

new Vue({
    el: '#app',
    data: {
        titre_categories_SF: 'Personnages de Science-Fiction',
        nom_bouton_B1: 'Inspiration Sci-Fi masculin',
        nom_bouton_B2: 'Inspiration Sci-Fi féminine',
        titre_categorie_Fan: 'Personnages de Fantasy',
        nom_bouton_B3: 'Inspiration Fantastique masculin',
        nom_bouton_B4: 'Inspiration Fantastique féminine'
    }

});


//let initView = new Vue({
//    el: '#first_article',
//    data: {
//        titre_categories_SF: 'Personnages de Science-Fiction',
//        nom_bouton_B1: 'Inspiration Sci-Fi masculin',
//        nom_bouton_B2: 'Inspiration Sci-Fi féminine',
//        titre_categorie_Fan: 'Personnages de Fantasy',
//        nom_bouton_B3: 'Inspiration Fantastique masculin',
//        nom_bouton_B4: 'Inspiration Fantastique féminine'
//    }
//});

//let renderedView = new Vue({
//
//});


// Affichage des résultats

//let displayQuote = new Vue({
//    el: '#second_article',
//    data: {
//        message: '',
//    },
//    methods: {
//        displayResult: function () {
//            const quote = result;
//            const reponse = document.createTextNode(quote);
//        }
//    }
//});



function displayQuote() {

    const quote = result;

    const tagReponse = document.createElement("p");
    const reponse = document.createTextNode(quote);
    tagReponse.appendChild(reponse);

    const resultats = document.getElementById("resultats");
    resultats.appendChild(tagReponse);

    // Console
    console.log(quote);
}






/* CONTROLLER */

// Event Handlers

Vue.component('initButton', {
    data: function () {

    },
    methods: {
        eventButton: function () {
            document.getElementById('B1').onclick = function () {
                sciFi();
            };
            document.getElementById('B2').onclick = function () {
                sciFiF();
            };
            document.getElementById('B3').onclick = function () {
                fantasy();
            };
            document.getElementById('B4').onclick = function () {
                fantasyF();
            };
        }
    },
    mounted() {
        this.eventButton();
    }
});


//let initButton = new Vue({
//    el: '#app',
//    data: {
//        message: '',
//    },
//    methods: {
//        eventButton: function () {
//            document.getElementById('B1').onclick = function () {
//                sciFi();
//            };
//            document.getElementById('B2').onclick = function () {
//                sciFiF();
//            };
//            document.getElementById('B3').onclick = function () {
//                fantasy();
//            };
//            document.getElementById('B4').onclick = function () {
//                fantasyF();
//            };
//        }
//    },
//    mounted() {
//        this.eventButton();
//    }
//});


// Gestion du nombre de citations générées
let value = 1;


function change() {
    const liste = document.getElementById('select');
    const choix = liste.options[liste.selectedIndex].value;

    value = choix;
}


// Génération de la phrase SF
// Masculin
let createQuote = new Vue({
    el: '#app',
    data: {
        message: '',
    },
    methods: {
        sciFi: function () {
            if (value > 1) {
                for (let x = 1; x <= value; x++) {
                    vm.generatorArray(firstSFArray, secondSFArray, thirdSFArray);
                    vm.displayResult();
                }
            } else {
                vm.generatorArray(firstSFArray, secondSFArray, thirdSFArray);
                vm.displayResult();
            }
        },
        sciFiF: function () {
            if (value > 1) {
                for (let x = 1; x <= value; x++) {
                    vm.generatorArray(firstSFArrayF, secondSFArrayF, thirdSFArray);
                    vm.displayResult();
                }
            } else {
                vm.generatorArray(firstSFArrayF, secondSFArrayF, thirdSFArray);
                vm.displayResult();
            }
        },
        fantasy: function () {
            if (value > 1) {
                for (let x = 1; x <= value; x++) {
                    vm.generatorArray(firstFanArray, secondFanArray, thirdFanArray);
                    vm.displayResult();
                }
            } else {
                vm.generatorArray(firstFanArray, secondFanArray, thirdFanArray);
                vm.displayResult();
            }
        },
        fantasyF: function () {
            if (value > 1) {
                for (let x = 1; x <= value; x++) {
                    vm.generatorArray(firstFanArrayF, secondFanArrayF, thirdFanArray);
                    vm.displayResult();
                }
            } else {
                vm.generatorArray(firstFanArrayF, secondFanArrayF, thirdFanArray);
                vm.displayResult();
            }
        }
    }
});

// Génération d'une phrase - Fonction
let result = "";

let generator = new Vue({
    el: '#app',
    data: {
        message: '',
    },
    methods: {
        generatorArray(array1, array2, array3) {
            const random1 = array1[Math.floor(Math.random() * array1.length)];
            const random2 = array2[Math.floor(Math.random() * array2.length)];
            const random3 = array3[Math.floor(Math.random() * array3.length)];

            result = random1 + " " + random2 + " " + random3;
        }
    }
});