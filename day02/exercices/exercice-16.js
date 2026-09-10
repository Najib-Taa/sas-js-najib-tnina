/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SAPIN CENTRÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Allez plus loin, dessinez une pyramide centrée de 5 lignes :
 *
 *     *
 *    *
 *   *
 *  *
 * -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day02/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
for (let ligne = 1; ligne <= 5; ligne++) {
    let ligneComplete = ""; 
    let nbEspaces = 5 - ligne;
    for (let s = 1; s <= nbEspaces; s++) {
        ligneComplete += " ";  
    }
    let nbEtoiles = (2 * ligne) - 1;
    for (let e = 1; e <= nbEtoiles; e++) {
        ligneComplete += "*"; 
    }
    console.log(ligneComplete);
}