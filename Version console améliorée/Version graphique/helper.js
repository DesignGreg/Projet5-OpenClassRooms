function getRandomElemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateQuote(start, job, place) {
    const randomStart = getRandomElemFromArray(start);
    const randomJob = getRandomElemFromArray(job);
    const randomPlace = getRandomElemFromArray(place);

    return randomStart + " " + randomJob + " " + randomPlace;
}

//function triggerFunction(button) {
//    document.getElementById(button).onclick = function(activate) {
//        const activatedFunction = {
//            'sfM' : AAA,
//            'sfF' : AAA,
//            'fanM'  : AAA,
//            'fanF'  : AAA,
//        };
//    };
//}


function triggerFunction() {
    document.getElementById('B1').onclick = function () {
        createQuote();
    };
    document.getElementById('B2').onclick = function () {
        createQuote();
    };
    document.getElementById('B3').onclick = function () {
        createQuote();
    };
    document.getElementById('B4').onclick = function () {
        createQuote();
    };
}

function getQuoteNumber() {

    const liste = document.getElementById('select');
    const choix = liste.options[liste.selectedIndex].value;

    return choix;
}

// Pour fichier etape3
function createQuote() {
    
    const quoteNumber = getQuoteNumber();
    
    if ()
}





function displayQuote(quoteToDisplay) {
    console.log(quoteToDisplay);
}