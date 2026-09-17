/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * DESTRUCTURATION (DESTRUCTURING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Soit let etudiant = { prenom: "Sara", ville: "Rabat", note: 16 }. En une seule ligne de code, extrayez le prénom et la ville dans deux variables distinctes portant le même nom.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day07/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function extraireDonneesEtudiant(etudiant) {
    const { prenom, ville } = etudiant;
    console.log("Prénom extrait :", prenom);
    console.log("Ville extraite  :", ville);
    return { prenom, ville };
}
const etudiantTest = { prenom: "Sara", ville: "Rabat", note: 16 };
extraireDonneesEtudiant(etudiantTest);