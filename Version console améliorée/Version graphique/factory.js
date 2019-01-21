function getPossibleStart () {
  return ["Je suis", "Je serais", "J'ai été"];
}

function getPossibleJob (univers, gender) {
  const jobs = {
    'sf' : {
      'male' : ["un pilote", "un aventurier", "un explorateur", "un agent", "un chercheur", "un colon"],
      'female' : ["une pilote", "une aventurière", "une exploratrice", "une agent", "une chercheuse", "un colon"]
    },
    'fantasy' : {
      'male' : ["un marchand", "un guerrier", "un barbare", "un sorcier", "un élémentaire", "un voleur"],
      'female' : ["une marchande", "une guerrière", "une barbare", "une sorcière", "un élémentaire", "une voleuse"]
    }
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