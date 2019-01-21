main();
// Question à l'utilisateur
function main () {
    let doNeedNewQuote;
    do {
        doNeedNewQuote = prompt("Une nouvelle citation O/N ?").toLowerCase();
    
        if (doNeedNewQuote === 'o') {
            const quoteNumber = getQuoteNumber();
            const universe = getUniverse();

            
            const answerToData = {
                's' : 'sf',
                'f' : 'fantasy'
            };

            const starts = getPossibleStart();
            const jobs = getPossibleJob(answerToData[universe]);
            const places = getPossiblePlace(answerToData[universe]);

            for (let x = 0; x < quoteNumber; x++) {
                const quote = generateQuote(starts, jobs, places);
                displayQuote(quote);
            }
        }
    }
    while (doNeedNewQuote !== 'n');
}