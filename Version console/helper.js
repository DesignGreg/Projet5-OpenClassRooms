
function getRandomElemFromArray (array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateQuote (start, job, place) {
  const randomStart = getRandomElemFromArray(start);
  const randomJob = getRandomElemFromArray(job);
  const randomPlace = getRandomElemFromArray(place);

  return randomStart + " " + randomJob + " " + randomPlace;
}

function displayQuote (quoteToDisplay) {
  console.log(quoteToDisplay);
}

function getQuoteNumber () {
  let quoteNumber = 0;
  do {
    quoteNumber = parseFloat(prompt('Combien de citations souhaitez-vous (1 à 5) ?', "1"));
  } while (quoteNumber <= 0 || quoteNumber > 5);

  return quoteNumber;
}

function getUniverse() {
  let universe = '';
  do {
    universe = prompt("Univers Science-Fiction (S) ou Fantastique (F) ?").toLowerCase();
  } while (universe !== 's' && universe !== 'f');
  return universe;
}