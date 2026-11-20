// =====================================================
// Kata JS 8 — Le tour du monde
// Suis les TODO dans l'ordre. paysListe vient de pays.js.
// =====================================================


// TODO 1 — Récupérer les éléments du DOM
// La liste (id "liste-pays") et le bouton (id "btn-charger").


// TODO 2 — recupererPays(code)
// Fonction async. Elle appelle l'API avec le code du pays :
//   https://countries.dev/alpha/<code>?fields=capital,population,flag,currencies
//   - si la réponse n'est pas ok, lance une erreur (throw new Error(...)) qui contient le statut
//   - sinon retourne un objet { capitale, population, drapeau, monnaie }
//     (attention : currencies est un TABLEAU d'objets ; la monnaie, c'est le symbole du premier)
async function recupererPays(code) {

}


// TODO 3 — afficherPays(pays)
// Fonction async. pays est un objet de paysListe ({ nom, code }).
// Elle ajoute UNE ligne <li> à la liste, en trois états :
//   1. chargement : le texte est « Japon — chargement… », la ligne a la classe "chargement"
//   2. succès : « 🇯🇵 Japon — Tokyo · 125 836 021 habitants · ¥ », sans la classe "chargement"
//   3. erreur : « Japon — pays introuvable », avec la classe "erreur", sans "chargement"
// Utilise try / catch / finally. Quelle étape doit toujours avoir lieu, succès ou erreur ?
async function afficherPays(pays) {

}


// TODO 4 — chargerTout()
// Vide la liste, désactive le bouton, charge les pays l'un après l'autre
// (une boucle for...of avec await), puis réactive le bouton, même si un pays a échoué.


// Relie le bouton à chargerTout (à écrire une fois le TODO 4 terminé)
