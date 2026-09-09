/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE BASIQUE AVEC SWITCH
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez nombre1 = 10, nombre2 = 5 et operateur = "*". Utilisez une instruction switch pour gérer l'addition, la soustraction, la multiplication et la division, et affichez le résultat.
 *
 * RÉSULTAT ATTENDU
 * 50
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day01/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const nombre1 = 10;
const nombre2 = 5;
const operateur = "*";
let resultat;
switch (operateur) {
    case "+":
        resultat = nombre1 + nombre2;
        break;
case "-":
        resultat = nombre1 - nombre2;
        break;
        case "*":
        resultat = nombre1 * nombre2;
        break;
        case "/":
        resultat = nombre1 / nombre2;
        break;
    default: resultat = "Opérateur invalide"
        break;
}
console.log(resultat);
