/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function fusionnerTrie(tab1, tab2) {
    const resultat = [];
    let i = 0;
    let j = 0;

    while (i < tab1.length && j < tab2.length) {

        if (tab1[i] < tab2[j]) {
            resultat.push(tab1[i]);
            i++;
         } else {
            resultat.push(tab2[j]);
            j++;
         }
    }

    while (i < tab1.length) {
        resultat.push(tab1[i]);
        i++;
    }

     while (j < tab2.length) {
        resultat.push(tab2[j]);
        j++;
    }

     return resultat;
}

console.log(fusionnerTrie([1, 3, 5], [2, 4, 6])); 