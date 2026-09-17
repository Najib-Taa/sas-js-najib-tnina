/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function filtrerCandidats(candidats) {
    const candidatsFiltres = [];
    for (let candidat of candidats) {
        if (candidat.score >= 10) {
            candidatsFiltres.push(candidat);
        }
    }

    return candidatsFiltres;
}
const listeTest = [
     { nom: "Ahmed", score: 21 },
    { nom: "Najib", score: 9 }, 
    { nom: "Omar", score: 19 }
];

console.log("Résultat du filtrage :", filtrerCandidats(listeTest));