
function getPossibleStart () {
  return ["Je suis", "Je serais", "J'ai été"];
}

function getPossibleJob (univers) {
  const jobs = {
    'sf' : ["un pilote", "un aventurier", "un explorateur", "un agent", "un chercheur", "un colon"],
    'fantasy' : ["un marchand", "un guerrier", "un barbare", "un sorcier", "un élémentaire", "un voleur"], 
  };

  return jobs[univers];
}

function getPossiblePlace (univers) {
  const places = {
    'sf' : ["de Vénus", "de Mars", "d'Alpha Centauri", "des tréfonds de la Galaxie", "du Néant"],
    'fantasy' : ["d'Hyrule", "de Cimmérie", "des Terres du Milieu", "de Poudlard", "du Pandémonium", "de l'Autre Monde"]
  };
  return places[univers];
}