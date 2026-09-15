/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * DÉCOUPAGE EN TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Transformez la chaîne "Safi,Youssoufia,Nador,Casablanca" en un véritable tableau de 4 éléments.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const chaine_des_villes = "Safi,Youssoufia,Nador,Casablanca";
const tableau_des_villes = chaine_des_villes.split(",");

console.log(tableau_des_villes);