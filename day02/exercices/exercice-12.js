/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * NOMBRE PREMIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre est premier s'il n'est divisible que par 1 et par lui-même. Prenez let nb = 29. Bouclez de 2 jusqu'à 28 pour voir si un nombre le divise. Si ce n'est pas le cas, affichez "29 est un nombre premier".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day02/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const nombre = 29;
let le_nombre_est_premier = true;
for (let i = 2; i <= 28; i++) {
    if (nombre % i === 0) {
        le_nombre_est_premier = false;
        break;
    }
}
if (le_nombre_est_premier) {
    console.log(`${nombre} est un nombre premier`);
}
