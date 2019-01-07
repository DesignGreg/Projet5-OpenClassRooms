main();

// Question à l'utilisateur
function main () {
    let question;
    do {
        question = prompt("Une nouvelle citation O/N ?").toLowerCase();
        if (question === 'o') {
            const SFStart = getPossibleStart();
            const SFJob = getPossibleJob('sf');
            const SFPlace = getPossiblePlace('sf');    
            
            const quote = generateQuote(SFStart, SFJob, SFPlace);
            displayQuote(quote);
        }
    }
    while (question !== 'n');
}