/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const cache = {};

function calcul_longe_a_l_aide_d_un_cache(n) {
    if(n in cache) {
        console.log("(ُExtrait depuis le cache: ");
        return cache[n];
    }
    console.log("(Entrain de calculer pour la premier fois : )");
    let resultat = n * n;
    cache[n] = resultat;
    return resultat;
}
console.log(calcul_longe_a_l_aide_d_un_cache(10));
console.log(calcul_longe_a_l_aide_d_un_cache(10));

