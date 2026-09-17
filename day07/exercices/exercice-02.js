/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MISE À JOUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Changez l'âge de l'utilisateur précédent pour l'augmenter de 1, et ajoutez-lui une propriété email.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day07/exercices/exercice-02.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function mettreAJourUtilisateur(utilisateur) {
        utilisateur.age++;
    utilisateur.email = "najib@gmail.com"
     return utilisateur;
}
const profilTest = { nom: "Najib", age: 20, estAdmin: true };
console.log("Avant :", profilTest);

const profilModifie = mettreAJourUtilisateur(profilTest);
console.log("Aprés :", profilModifie);