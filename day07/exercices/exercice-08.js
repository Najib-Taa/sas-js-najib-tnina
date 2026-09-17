/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function trouverMeilleurCandidat(candidats) {
    if (!candidats || candidats.length === 0) return null;
    let meilleurCandidat = candidats[0];
    for (let i = 1; i < candidats.length; i++) {
        if (candidats[i].score > meilleurCandidat.score) {
            meilleurCandidat = candidats[i];
        }
    }

     return meilleurCandidat.nom;
}

const listeCandidats = [
    { nom: "Ahmed", score: 21 },
    { nom: "Najib", score: 9 }, 
    { nom: "Omar", score: 19 }
];

console.log("Le gagnant est :", trouverMeilleurCandidat(listeCandidats));