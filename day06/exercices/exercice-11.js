/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function extrairePremierePage(grandTableau) {
    const premierePage = grandTableau.slice(0, 10);
    return premierePage;
}
console.log(extrairePremierePage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
