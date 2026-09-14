/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FACTORIELLE ENCAPSULÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Convertissez votre logique de factorielle (Day 02) en une fonction calculerFactorielle(n). Si n = 0, la fonction doit retourner 1.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day03/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function calculerFactorielle(n) {
   
    let resultat = 1;
    for(let i = 1; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}
console.log(calculerFactorielle(5));
console.log(calculerFactorielle(7));
console.log(calculerFactorielle(0));
