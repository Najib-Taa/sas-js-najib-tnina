/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function trouverMaxMin(tableau) {
    if (!tableau || tableau.length === 0) {
        return { max: undefined, min: undefined };
    }

    let max = tableau[0];
    let min = tableau[0];

     for (let nombre of tableau) {
        if (nombre > max) {
            max = nombre;
        }
        if (nombre < min) {
            min = nombre;
        }
    }

     return { max: max, min: min };
}

console.log(trouverMaxMin([15, 19, 46, 56, 16, 12])); 

